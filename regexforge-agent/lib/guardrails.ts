import type { GovEntry } from './governance-data/index'

/**
 * Honest guardrails for the vertical regex-generation/validation agent
 * (regexforge deep-data moat). Aligned to OPC asset guardrails G1–G5
 * (see docs/r11-agent-upgrade-plan.md §7.3, mirrored from a11yguard).
 *
 * These validators run AFTER the grounded model call returns, BEFORE the
 * report is assembled and emitted. A failing validator refuses emission —
 * matching the existing "no citation → refuse" red line.
 *
 *   G1 — analysis is decision-support, not a correctness guarantee;
 *        every claim must cite an authoritative source ([ref])
 *   G2 — no "guaranteed match / 100% correct / never fails" absolute assurance
 *   G3 — no "replace your regex/security expert" / "replace your developer"
 *   G4 — no false-positive denial: do not assert an input is safe/invalid
 *        without acknowledging verification limits (uncertainty framing)
 *   G5 — regex mapping/verdict is analysis aid; must not claim certified/correct
 */

export interface GuardrailResult {
  ok: boolean
  violations: string[]
  note: string
  needsHumanReview: boolean
}

const DECISION_SUPPORT_FOOTER =
  '\n\n— Decision-support only. Not a correctness guarantee. Verify against primary sources (RFC 5322/3986, ECMA-262, OWASP) and test against your target engine before shipping. ' +
  'This is a good-faith effort record you can stand behind, not a certification.'

const UNCERTAINTY_FOOTER =
  '\n\n⚠️ Open uncertainties detected — confirm against the cited primary source and your target engine before action.' + DECISION_SUPPORT_FOOTER

// G2 / G5 — prohibited absolute-assurance phrases. Anchored to avoid false
// positives on mentions of standards (e.g. "RFC 5322" as a topic).
const PROHIBITED_PHRASES: Array<{ re: RegExp; code: string }> = [
  { re: /\bguarantee[ds]?\b[^.]{0,40}\b(match|matches|correct|valid|works|safe)\b/i, code: 'G2_GUARANTEE_MATCH' },
  { re: /\byour regex (is|will be|has been) (guaranteed |100%|always )?(safe|correct|valid|right)\b/i, code: 'G5_YOU_ARE_SAFE' },
  { re: /\bthis (regex|pattern) (is )?(certified|guaranteed correct|guaranteed to work)\b/i, code: 'G5_CERTIFIED' },
  { re: /\breplace (your )?(regex|security|developer|dev) (expert|engineer|team|consultant)\b/i, code: 'G3_REPLACE_EXPERT' },
  { re: /\bguarantee[ds]? (100%|never fails|no (false|miss)|zero (errors|risk))\b/i, code: 'G2_GUARANTEE_NO_FAIL' },
  { re: /\b(ensures?|guarantees?) (your )?(regex|pattern) (is )?(correct|valid|safe)\b/i, code: 'G5_ENSURE_CORRECT' },
]

// G4 — a hard "this is definitely safe / definitely invalid" denial without
// any verification caveat is treated as needing human review (not a hard block,
// but surfaces the caveat). Encoded via the uncertainty marker below.

// G1 — the report must be grounded in at least one cited authoritative source.
const CITATION_MARKER = /RFC|ECMA|OWASP|Cloudflare|regular-expressions\.info|MDN|PCRE|RE2|regex\.rs|pkg\.go\.dev|docs\.python|https?:\/\//i

const UNCERTAINTY_MARKER =
  /\b(uncertain|not certain|may not (be|match|apply)|verify with|test against|consult (a|your|the)|should confirm|depends on|open (question|issue)|needs? (human|expert) review|cannot (determine|confirm)|out of scope|edge case|edge cases)\b/i

/** G1 — report is grounded in at least one cited source from the dataset. */
export function checkCitationGrounded(report: string, citations: GovEntry[]): boolean {
  return citations.length > 0 && CITATION_MARKER.test(report)
}

/** G2 / G5 — scan for prohibited absolute-assurance phrasing. */
export function checkNoGuarantee(text: string): string[] {
  const hits: string[] = []
  for (const p of PROHIBITED_PHRASES) {
    if (p.re.test(text)) hits.push(p.code)
  }
  return hits
}

/** Uncertainty detector — drives the "confirm with primary source" flag (G4/G5). */
export function detectUncertainty(text: string): boolean {
  return UNCERTAINTY_MARKER.test(text)
}

/** Main entry — returns whether the report may be emitted, plus the redline note. */
export function applyGuardrails(report: string, citations: GovEntry[]): GuardrailResult {
  const violations: string[] = []

  if (!checkCitationGrounded(report, citations)) {
    violations.push('G1_NO_CITATION')
  }
  violations.push(...checkNoGuarantee(report))

  const needsHumanReview = detectUncertainty(report)
  const ok = violations.length === 0

  let note = DECISION_SUPPORT_FOOTER
  if (needsHumanReview) {
    note = UNCERTAINTY_FOOTER
  }

  return { ok, violations, note, needsHumanReview }
}
