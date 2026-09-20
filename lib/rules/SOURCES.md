# RegexProof — Authoritative Sources (deep-data moat)

Web-researched, authoritative references behind the curated canonical-pattern
dataset (`regexforge-agent/lib/governance-data/`). Each entry carries a `ref`
URL and is version-stamped. Re-verify each cycle — expired dates / changed URLs
are bugs.

## Canonical standards (rfc-patterns.json)
- RFC 5322 — Internet Message Format (email addr-spec grammar): https://www.rfc-editor.org/rfc/rfc5322
- RFC 3986 — URI Generic Syntax: https://www.rfc-editor.org/rfc/rfc3986
- RFC 3696 — Email address verification guidance (Klensin & Murchison): https://www.rfc-editor.org/rfc/rfc3696
- regular-expressions.info — authoritative regex reference (email, catastrophic backtracking, atomic groups): https://www.regular-expressions.info/

## Engine semantics & dialect differences (regex-engine.json)
- ECMA-262 — ECMAScript RegExp semantics (latest ed.): https://www.ecma-international.org/publications/standards/Ecma-262.htm
- MDN — RegExp reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- regular-expressions.info — advanced / atomic / possessive reference: https://www.regular-expressions.info/refadv.html
- Go `regexp` (RE2-backed, linear time): https://pkg.go.dev/regexp
- Rust `regex` crate (automaton, no backrefs/lookaround): https://docs.rs/regex
- Python `re` (backtracking): https://docs.python.org/3/library/re.html
- Google RE2 (linear-time engine): https://github.com/google/re2

## ReDoS & safety (redos.json)
- OWASP — Regular expression Denial of Service (ReDoS): https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
- Cloudflare — 2019-07-02 global outage post-mortem (ReDoS root cause): https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/
- regular-expressions.info — catastrophic backtracking: https://www.regular-expressions.info/catastrophic.html
- regular-expressions.info — atomic groups: https://www.regular-expressions.info/atomic.html

## Honesty rule (AGENTS.md §3)
Static heuristics flag COMMON regex risks; they are not a guarantee and may miss
novel ReDoS classes. Always validate against your target engine and fuzz with
adversarial inputs. The agent never claims "guaranteed correct / certified".
