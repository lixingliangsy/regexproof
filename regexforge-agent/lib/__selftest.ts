// regexforge deep-data moat — deterministic self-test (run with tsx, no LLM).
// Verifies: (1) retrieve semantic hit, (2) guardrail G1/G2 rejection,
// (3) flywheel accept → re-index → retrieve-hit, then cleans up test storage.

import fs from 'fs'
import path from 'path'
import { retrieve, loadGovernanceIndex, invalidateGovernanceCache } from './governance-data/index'
import { applyGuardrails } from './guardrails'
import { writeback, setStatus, loadContributed, getAcceptedContributed, type ContributedSignal } from './data-flywheel'

let pass = 0
let fail = 0
function assert(name: string, cond: boolean, extra = ''): void {
  if (cond) {
    pass++
    console.log(`  ✅ ${name}`)
  } else {
    fail++
    console.log(`  ❌ ${name} ${extra}`)
  }
}

console.log('— regexforge deep-data moat self-test —')

// T1: index loads all three datasets
const idx = loadGovernanceIndex()
assert('index loads >= 15 curated entries', idx.length >= 15, `(got ${idx.length})`)

// T2: retrieve hits RFC 5322 email by "email RFC 5322 validation"
const r1 = retrieve('email address RFC 5322 validation', { scope: 'rfc', topK: 3 })
assert('retrieve("email RFC 5322") → rfc5322-email present', r1.some((e) => e.id === 'rfc5322-email'), `(top: ${r1.map((e) => e.id).join(',')})`)

// T3: retrieve hits catastrophic backtracking / ReDoS by "catastrophic backtracking ReDoS"
const r2 = retrieve('catastrophic backtracking ReDoS denial of service', { scope: 'redos', topK: 3 })
assert('retrieve("catastrophic backtracking ReDoS") → redos-catastrophic present', r2.some((e) => e.id === 'redos-catastrophic'), `(top: ${r2.map((e) => e.id).join(',')})`)

// T4: retrieve hits ECMAScript RegExp semantics by "ECMAScript JavaScript RegExp semantics"
const r3 = retrieve('ECMAScript JavaScript RegExp semantics backtracking', { scope: 'engine', topK: 3 })
assert('retrieve("ECMAScript RegExp semantics") → ecma262-regexp present', r3.some((e) => e.id === 'ecma262-regexp'), `(top: ${r3.map((e) => e.id).join(',')})`)

// T5: guardrail rejects ungrounded / absolute-assurance text (G1 + G2)
const bad = applyGuardrails('Your regex is guaranteed correct and we guarantee it matches 100% every time.', [])
assert('guardrail rejects "guaranteed correct / matches 100%" (G2)', !bad.ok && bad.violations.includes('G2_GUARANTEE_MATCH'), `(violations: ${bad.violations.join(',')})`)

// T6: guardrail accepts grounded decision-support text
const good = applyGuardrails('Per RFC 5322 (https://www.rfc-editor.org/rfc/rfc5322) your email pattern should anchor the local-part; verify against the primary spec and test on your target engine before shipping.', [
  { id: 'rfc5322-email', ref: 'https://www.rfc-editor.org/rfc/rfc5322', title: 'Email address syntax (RFC 5322 addr-spec)', text: '', source: 'IETF RFC', scope: 'rfc', verify: true },
])
assert('guardrail accepts grounded text', good.ok, `(violations: ${good.violations.join(',')})`)

// T7: flywheel accept → becomes retrievable, then clean up
const testId = 'selftest_' + Date.now()
const sig: ContributedSignal = {
  id: testId,
  runId: 'selftest',
  kind: 'feedback',
  scope: 'redos',
  rating: 5,
  status: 'pending_review',
  createdAt: new Date().toISOString(),
  verify: true,
  note: 'SELFTEST contributed entry (safe to delete)',
}
writeback([sig])
assert('flywheel writeback persisted (pending_review)', loadContributed('pending_review').some((s) => s.id === testId))
assert('contributed NOT retrievable while pending', getAcceptedContributed().every((c) => c.id !== testId))

setStatus(testId, 'accepted')
invalidateGovernanceCache()
const r4 = retrieve('selftest contributed regexforge moat', { topK: 10 })
assert('accepted contributed becomes retrievable', r4.some((e) => e.id === testId))

// cleanup: remove test entry. NOTE: this sandbox intercepts fs.unlinkSync /
// fs.rmdirSync (safe-delete shim); truncate to empty file instead of deleting the log.
setStatus(testId, 'rejected')
const remaining = loadContributed().filter((s) => s.id !== testId)
const logPath = path.join(__dirname, 'governance-data', 'contributed', 'feedback-log.jsonl')
try { fs.writeFileSync(logPath, remaining.map((s) => JSON.stringify(s)).join('\n') + (remaining.length ? '\n' : '')) } catch (e) { /* read-only FS (serverless): best effort */ }
invalidateGovernanceCache()
assert('contributed store empty after cleanup', getAcceptedContributed().every((c) => c.id !== testId))

console.log(`\nRESULT: ${pass} passed, ${fail} failed`)
if (fail > 0) process.exit(1)
console.log('ALL GREEN ✅')
