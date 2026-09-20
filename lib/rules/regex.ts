/**
 * RegexProof deterministic ruleset — regex safety & correctness checks.
 * These checks run WITHOUT any LLM so the verdict is explainable and
 * never impersonates live AI (AGENTS.md §3 web-research gate).
 *
 * Domain standards embedded:
 *  - OWASP ReDoS (catastrophic backtracking): https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
 *  - PCRE / RE2 / ECMAScript (JavaScript) semantics differ — see dialect notes.
 */
export const RULESET_VERSION = 'regexforge@2026-10-28'

export type RegexFlavor = 'JavaScript' | 'Python' | 'Go' | 'PCRE' | 'Rust'

export type RegexRuleHit = {
  id: string
  title: string
  severity: 'low' | 'medium' | 'high'
  remediation: string
  source: 'Rule-based'
}

export interface RegexCheckContext {
  pattern: string
  flavor: RegexFlavor
}

// Patterns that commonly cause catastrophic backtracking (ReDoS) when the
// repeated group is itself repeatable / alternation overlaps. Heuristic only.
// Source: OWASP ReDoS.
const REDOS_PATTERNS: { id: string; re: RegExp; note: string }[] = [
  { id: 'REGEX-REDOS-01', re: /\([^()]*\)\+[^()]*\)\+/, note: 'Nested quantifiers on a group (e.g. (a+)+) — classic catastrophic backtracking.' },
  { id: 'REGEX-REDOS-02', re: /\([^()]*\|[^()]*\)\+[^()]*\)\+/, note: 'Overlapping alternation inside a repeated group (e.g. (a|a?)+) — exponential blowup.' },
  { id: 'REGEX-REDOS-03', re: /\.\*.*\.\*|\.\+.*\.\+/, note: 'Adjacent unbounded wildcards (.*.*) — avoid; prefer non-greedy or specific classes.' },
]

function detectRedos(pattern: string): RegexRuleHit[] {
  const hits: RegexRuleHit[] = []
  for (const r of REDOS_PATTERNS) {
    if (r.re.test(pattern)) {
      hits.push({
        id: r.id,
        title: 'Possible catastrophic backtracking (ReDoS)',
        severity: 'high',
        remediation:
          `Rewrite to avoid nested/overlapping quantifiers: ${r.note} ` +
          `Prefer possessive quantifiers (PCRE/Java) or atomic groups, or use a linear-time engine (RE2/Google RE2, Rust regex crate).`,
        source: 'Rule-based',
      })
    }
  }
  return hits
}

function detectUnanchored(pattern: string): RegexRuleHit[] {
  const hits: RegexRuleHit[] = []
  const trimmed = pattern.replace(/^\^/, '').replace(/\$$/, '')
  // If neither ^ nor \b anchors present and pattern looks like a "full match" intent.
  if (!/^\^/.test(pattern) && !/\$$/.test(pattern) && !/\\b/.test(pattern)) {
    hits.push({
      id: 'REGEX-ANCHOR-01',
      title: 'Pattern is unanchored (may match substrings)',
      severity: 'low',
      remediation:
        'Add ^ (start) and $ (end) or \\b word boundaries if you intend a full-match / whole-token validation. ' +
        'Unanchored patterns match anywhere in the input.',
      source: 'Rule-based',
    })
  }
  void trimmed
  return hits
}

function detectUndefinedBackref(pattern: string): RegexRuleHit[] {
  const hits: RegexRuleHit[] = []
  const groups = (pattern.match(/\((?!\?)/g) || []).length
  const backrefs = pattern.match(/\\[\d]/g) || []
  for (const br of backrefs) {
    const n = parseInt(br.slice(1), 10)
    if (n > groups) {
      hits.push({
        id: 'REGEX-BACKREF-01',
        title: `Backreference ${br} refers to a non-existent capture group`,
        severity: 'medium',
        remediation:
          'Ensure every \\n backreference has a corresponding capture group. ' +
          'In JavaScript, invalid backreferences throw a SyntaxError at regex construction time.',
        source: 'Rule-based',
      })
    }
  }
  return hits
}

// Dialect-specific pitfalls.
const DIALECT_NOTES: Record<RegexFlavor, string[]> = {
  JavaScript: [
    'ECMAScript (JS) lacks lookbehind before ES2018; named groups use (?<name>...).',
    'JS does NOT support possessive quantifiers (a*+) or (?>...) atomic groups.',
    'Sticky (y) and Unicode (u) flags change matching; test with the target engine.',
  ],
  Python: [
    'Python `re` does not support possessive quantifiers or atomic groups.',
    'Use re2 / google-re2 if you need linear-time matching to avoid ReDoS.',
    'Named groups: (?P<name>...); backrefs in replacement use \\g<name>.',
  ],
  Go: [
    'Go `regexp` uses RE2 — linear time, NO backreferences and NO lookaround.',
    'Patterns relying on (?<name>) backrefs or (?=...) will fail to compile in Go.',
  ],
  PCRE: [
    'PCRE/PCRE2 supports lookaround, atomic groups (?>...), and possessive quantifiers.',
    'Backtracking can be exponential — prefer atomic groups to prevent ReDoS.',
  ],
  Rust: [
    'The `regex` crate uses a finite automaton — NO backreferences and NO lookaround.',
    'For backrefs/lookaround use the `fancy-regex` crate (not linear-time).',
  ],
}

export function runRegexChecks(ctx: RegexCheckContext): {
  rulesetVersion: string
  hits: RegexRuleHit[]
  dialectNotes: string[]
} {
  const hits = [
    ...detectRedos(ctx.pattern),
    ...detectUnanchored(ctx.pattern),
    ...detectUndefinedBackref(ctx.pattern),
  ]
  return {
    rulesetVersion: RULESET_VERSION,
    hits,
    dialectNotes: DIALECT_NOTES[ctx.flavor] || [],
  }
}

// Honesty rule (AGENTS.md §3): we do NOT claim detection is complete.
export const HONESTY_NOTE =
  'Static heuristics flag COMMON regex risks; they are not a guarantee and may miss novel ReDoS classes. ' +
  'Always validate against your target engine and fuzz with adversarial inputs.'
