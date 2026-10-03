import fs from 'fs'
import path from 'path'

/**
 * regexforge Data Flywheel — writeback layer for the vertical regex-governance agent.
 *
 * The curated canonical-pattern dataset (rfc / engine / redos) is a static,
 * vetted moat. The flywheel makes it *grow* over time: each agent run emits
 * candidate signals (new ReDoS classes, uncertainty flags, citation gaps, user
 * feedback). These are written back to an append-only contributed store, reviewed
 * by a human, and — once accepted — merged into the retrievable index on the next
 * cold load.
 *
 * RED LINE (aligned to guardrails G1–G5): contributed entries ALWAYS carry
 * `verify: true` and start as `pending_review`. They are NEVER silently merged
 * into the curated dataset, and NEVER presented as vetted law.
 */

export type SignalKind = 'redos' | 'uncertainty' | 'citation_gap' | 'correction' | 'feedback'
export type SignalStatus = 'pending_review' | 'accepted' | 'rejected'

export interface ContributedSignal {
  id: string
  runId: string
  kind: SignalKind
  scope: 'rfc' | 'engine' | 'redos'
  // redos-shaped
  pattern?: string
  shape?: string
  authority?: string
  note?: string
  // generic
  ref?: string
  title?: string
  text?: string
  source?: string
  rating?: number
  status: SignalStatus
  createdAt: string
  verify: true
}

const CONTRIB_DIR = path.join(__dirname, 'governance-data', 'contributed')
const LOG = path.join(CONTRIB_DIR, 'feedback-log.jsonl')

function ensureDir(): void {
  try { if (!fs.existsSync(CONTRIB_DIR)) fs.mkdirSync(CONTRIB_DIR, { recursive: true }) } catch (e) { /* read-only FS (serverless): best effort */ }
}

function genId(): string {
  return 'csig_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4)
}

export function loadContributed(status?: SignalStatus): ContributedSignal[] {
  if (!fs.existsSync(LOG)) return []
  const all = fs
    .readFileSync(LOG, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l) as ContributedSignal)
  return status ? all.filter((s) => s.status === status) : all
}

export function writeback(signals: ContributedSignal[]): { written: number; path: string } {
  if (!signals.length) return { written: 0, path: LOG }
  ensureDir()
  try { fs.appendFileSync(LOG, signals.map((s) => JSON.stringify(s)).join('\n') + '\n') } catch (e) { /* read-only FS (serverless): best effort */ }
  return { written: signals.length, path: LOG }
}

/** Human-in-the-loop state transition (the only way a signal becomes retrievable). */
export function setStatus(id: string, status: SignalStatus): boolean {
  if (!fs.existsSync(LOG)) return false
  const lines = fs.readFileSync(LOG, 'utf8').split('\n').filter(Boolean)
  let found = false
  const out = lines.map((l) => {
    const s = JSON.parse(l)
    if (s.id === id) {
      s.status = status
      found = true
    }
    return JSON.stringify(s)
  })
  try { fs.writeFileSync(LOG, out.join('\n') + (out.length ? '\n' : '')) } catch (e) { /* read-only FS (serverless): best effort */ }
  return found
}

/**
 * Accepted contributed entries, reshaped into the GovEntry shape the index
 * retrieves. Always carries verify:true and curated:false — they are surfaced
 * as decision-support signals, never as vetted law.
 */
export function getAcceptedContributed(): Array<{
  id: string
  ref: string
  title: string
  text: string
  source: string
  scope: 'rfc' | 'engine' | 'redos'
  verify: true
  curated: false
}> {
  return loadContributed('accepted').map((s) => ({
    id: s.id,
    ref: s.ref || s.pattern || s.shape || s.kind,
    title: s.title || (s.pattern ? `${s.pattern} (contributed)` : s.kind),
    text:
      s.text ||
      (s.pattern
        ? `Contributed ReDoS signal: ${s.pattern}${s.shape ? ` (shape ${s.shape})` : ''}. ${s.note || ''}`
        : s.note || ''),
    source: s.source || 'Contributed (pending verification)',
    scope: s.scope,
    verify: true,
    curated: false,
  }))
}

const REDOS_RE =
  /(a\+\)\+|\(a\|a\?\)\+|\(\.\*a\)\{(\d+)\}|\(\[a-z\]\)\*\$|\(a\+\)\*|catastrophic backtracking|evil regex)/i
const UNCERTAINTY_RE =
  /\b(uncertain|not certain|verify with|test against|consult (?:a|your)|depends on|open (?:question|issue)|cannot (?:determine|confirm)|edge case|out of scope)\b/i
const REF_RE =
  /\b(RFC\s*5322|RFC\s*3986|RFC\s*3696|ECMA[-\s]?262|OWASP|Cloudflare|regular-expressions\.info|PCRE|RE2|Python\s*re|Rust\s*regex)\b/gi

export interface RunSignalInput {
  runId: string
  query: string
  modelText?: string
  citations?: Array<{ ref: string; title: string }>
  rating?: number
}

/**
 * Heuristically extract candidate signals from a completed agent run.
 * Best-effort and side-effect free — callers must not depend on it throwing.
 */
export function captureRunSignals(run: RunSignalInput): ContributedSignal[] {
  const out: ContributedSignal[] = []
  const hay = `${run.query} ${run.modelText || ''}`

  const m = REDOS_RE.exec(hay)
  if (m) {
    out.push({
      id: genId(),
      runId: run.runId,
      kind: 'redos',
      scope: 'redos',
      pattern: m[0].trim(),
      shape: 'auto-extracted from agent run; PENDING human verification',
      note: 'Possible ReDoS / evil-regex shape flagged in run; verify against OWASP before accepting.',
      source: 'agent-run',
      status: 'pending_review',
      createdAt: new Date().toISOString(),
      verify: true,
    })
  }

  if (run.modelText && UNCERTAINTY_RE.test(run.modelText)) {
    out.push({
      id: genId(),
      runId: run.runId,
      kind: 'uncertainty',
      scope: 'rfc',
      title: 'Open uncertainty flagged in run',
      text: 'Model output contained unresolved regex-correctness uncertainty requiring target-engine / primary-source confirmation.',
      source: 'agent-run',
      status: 'pending_review',
      createdAt: new Date().toISOString(),
      verify: true,
    })
  }

  // citation gap: refs the model cited but that are absent from the curated dataset
  if (run.modelText && run.citations && run.citations.length) {
    const known = new Set(run.citations.map((c) => c.ref.toLowerCase()))
    const cited = (run.modelText.match(REF_RE) || []).map((r) => r.toLowerCase())
    const gaps = Array.from(new Set(cited.filter((r) => !known.has(r))))
    if (gaps.length) {
      out.push({
        id: genId(),
        runId: run.runId,
        kind: 'citation_gap',
        scope: 'engine',
        ref: gaps[0],
        title: `Citation gap: ${gaps[0]}`,
        text: `Model cited ${gaps.join(', ')} not present in curated dataset; verify against primary source before accepting.`,
        source: 'agent-run',
        status: 'pending_review',
        createdAt: new Date().toISOString(),
        verify: true,
      })
    }
  }

  if (typeof run.rating === 'number') {
    out.push({
      id: genId(),
      runId: run.runId,
      kind: 'feedback',
      scope: 'redos',
      rating: run.rating,
      status: 'pending_review',
      createdAt: new Date().toISOString(),
      verify: true,
    })
  }

  return out
}
