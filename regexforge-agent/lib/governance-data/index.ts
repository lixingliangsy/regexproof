import fs from 'fs'
import path from 'path'
import { getAcceptedContributed } from '../data-flywheel'

export interface GovEntry {
  id: string
  ref: string
  title: string
  text: string
  source: string
  scope: GovScope
  verify?: boolean
}

export type GovScope = 'rfc' | 'engine' | 'redos'

interface FlatEntry {
  id: string
  ref: string
  title: string
  text: string
  source: string
  scope: GovScope
  verify?: boolean
}

const DATA_DIR = __dirname
const STOP = new Set([
  'the', 'a', 'an', 'of', 'to', 'and', 'or', 'for', 'in', 'on', 'is', 'are', 'be', 'your', 'you', 'with',
  'that', 'this', 'from', 'as', 'by', 'at', 'it', 'its', 'their', 'they', 'regex', 'regexp',
  'pattern', 'patterns', 'javascript', 'python', 'go', 'rust', 'pcre', 'email', 'uri', 'url', 'a',
  'match', 'matching', 'valid', 'validation', 'syntax', 'flag', 'flags', 'engine', 'input',
])

function readJson(name: string): any {
  const p = path.join(DATA_DIR, name)
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

let _index: FlatEntry[] | null = null

export function loadGovernanceIndex(): FlatEntry[] {
  if (_index) return _index
  const out: FlatEntry[] = []

  const rfc = readJson('rfc-patterns.json')
  for (const e of rfc.entries) {
    out.push({
      id: e.id,
      ref: e.ref,
      title: e.title,
      text: e.body,
      source: 'IETF RFC / regular-expressions.info',
      scope: 'rfc',
      verify: e.verify,
    })
  }

  const engine = readJson('regex-engine.json')
  for (const e of engine.entries) {
    out.push({
      id: e.id,
      ref: e.ref,
      title: e.title,
      text: e.body,
      source: 'ECMA-262 / engine docs',
      scope: 'engine',
      verify: e.verify,
    })
  }

  const redos = readJson('redos.json')
  for (const e of redos.entries) {
    out.push({
      id: e.id,
      ref: e.ref,
      title: e.title,
      text: e.body,
      source: 'OWASP / Cloudflare / regular-expressions.info',
      scope: 'redos',
      verify: e.verify,
    })
  }

  // DATA FLYWHEEL — merge human-accepted contributed signals into the
  // retrievable index. Contributed entries always carry verify:true and are
  // never treated as vetted law (see data-flywheel.ts / guardrails G1–G5).
  for (const c of getAcceptedContributed()) {
    out.push({
      id: c.id,
      ref: c.ref,
      title: c.title,
      text: c.text,
      source: c.source,
      scope: c.scope,
      verify: c.verify,
    })
  }

  _index = out
  return out
}

/** Force the next retrieve to rebuild from disk (re-ingest newly accepted signals). */
export function invalidateGovernanceCache(): void {
  _index = null
}

export function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9.\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
}

export interface RetrieveOpts {
  scope?: GovScope | 'all'
  topK?: number
  threshold?: number
}

export function retrieve(query: string, opts: RetrieveOpts = {}): GovEntry[] {
  const idx = loadGovernanceIndex()
  const scope = opts.scope || 'all'
  const topK = opts.topK || 6
  const qTokens = new Set(tokenize(query))
  const scopeFilter = scope === 'all' ? idx : idx.filter((e) => e.scope === scope)

  const scored = scopeFilter.map((e) => {
    const hay = tokenize(`${e.title} ${e.text} ${e.ref}`)
    let score = 0
    for (const t of hay) if (qTokens.has(t)) score += 1
    // ref-match boost (e.g. "rfc 5322", "owasp", "ecma")
    for (const qt of qTokens) {
      if (e.ref.toLowerCase().includes(qt)) score += 2
    }
    return { e, score }
  })

  return scored
    .filter((s) => s.score > (opts.threshold ?? 0))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => ({ id: s.e.id, ref: s.e.ref, title: s.e.title, text: s.e.text, source: s.e.source, scope: s.e.scope, verify: s.e.verify }))
}

export const GOVERNANCE_SOURCES = [
  'RFC 5322 (IETF — Internet Message Format)',
  'RFC 3986 (IETF — URI Generic Syntax)',
  'RFC 3696 (IETF — Email address verification)',
  'ECMA-262 (ECMAScript — RegExp semantics)',
  'OWASP — Regular expression Denial of Service (ReDoS)',
  'Cloudflare — 2019-07-02 outage post-mortem',
  'regular-expressions.info — authoritative regex reference',
]
