import { randomUUID } from 'crypto'

// RegexProof workflow (describe → validate → explain → report).
export type StepId = 'describe' | 'validate' | 'explain' | 'report'
export type RunStatus = 'running' | 'awaiting_confirm' | 'done' | 'failed'

export type RunState = {
  runId: string
  step: StepId
  inputs: Record<string, string>
  artifacts: Record<string, unknown>
  status: RunStatus
  pipelineId: string
  rulesetVersion?: string
  createdAt: string
  updatedAt: string
  error?: string
}

export const PIPELINE_ID = 'regexforge-forge-v1'
export const STEP_ORDER: StepId[] = ['describe', 'validate', 'explain', 'report']
export const STEP_LABELS: Record<StepId, string> = {
  describe: "Step 1/4 · Capture pattern & dialect",
  validate: "Step 2/4 · ReDoS & dialect checks",
  explain: "Step 3/4 · Explain match groups",
  report: "Step 4/4 · Safe pattern + notes",
}

export function createRun(inputs: Record<string, string>, pipelineId: string = PIPELINE_ID): RunState {
  const now = new Date().toISOString()
  return {
    runId: randomUUID(),
    step: 'describe',
    inputs,
    artifacts: {},
    status: 'running',
    pipelineId,
    createdAt: now,
    updatedAt: now,
  }
}

export function assertTransition(from: StepId, to: StepId) {
  const i = STEP_ORDER.indexOf(from)
  const j = STEP_ORDER.indexOf(to)
  if (j !== i + 1) {
    throw new Error(`Invalid step transition: ${from} → ${to}`)
  }
}

export function advance(state: RunState, to: StepId): RunState {
  assertTransition(state.step, to)
  return { ...state, step: to, updatedAt: new Date().toISOString() }
}

export function completeRun(state: RunState, artifacts: Record<string, unknown>): RunState {
  return { ...state, step: STEP_ORDER[STEP_ORDER.length - 1], status: 'done', artifacts: { ...state.artifacts, ...artifacts }, updatedAt: new Date().toISOString() }
}
