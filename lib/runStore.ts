import fs from 'fs';
import path from 'path';
import type { RunState } from './pipeline';
import { PRODUCT } from './product';

export interface RunRecord {
  runId: string;
  slug: string;
  ts: number;
  input: unknown;
  output: unknown;
  source: string;
}

const DATA_DIR = path.join(process.cwd(), '.data', 'runs');

function ensureDir() {
  try { if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) { /* read-only FS (serverless): best effort */ }
}

/**
 * Persist a pipeline RunState. Callers in pages/api/tool.ts pass the RunState itself
 * (createRun/completeRun output), so this accepts exactly that shape and derives the
 * slug, input, output and source internally. Records are appended to {slug}.jsonl so
 * loadRuns/exportRuns stay slug-keyed for pages/api/runs.ts.
 */
export function saveRun(state: RunState): RunRecord {
  ensureDir();
  const slug = String((PRODUCT as any).slug || 'regexforge');
  const rec: RunRecord = {
    runId: state.runId,
    slug,
    ts: Date.now(),
    input: state.inputs,
    output: state.artifacts,
    source: state.status === 'failed' ? 'failed' : (state.status === 'done' ? 'complete' : 'running'),
  };
  try { fs.appendFileSync(path.join(DATA_DIR, `${slug}.jsonl`), JSON.stringify(rec) + '\n'); } catch (e) { /* read-only FS (serverless): best effort */ }
  return rec;
}

export function loadRuns(slug: string, limit = 50): RunRecord[] {
  const file = path.join(DATA_DIR, `${slug}.jsonl`);
  if (!fs.existsSync(file)) return [];
  return fs
    .readFileSync(file, 'utf8')
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l) as RunRecord)
    .sort((a, b) => (a.ts < b.ts ? 1 : -1))
    .slice(0, limit);
}

export function exportRuns(slug: string, format: 'json' | 'csv' = 'json'): string {
  const runs = loadRuns(slug, 1000);
  if (format === 'csv') {
    const headers = ['runId', 'slug', 'ts', 'source'];
    const rows = runs.map((r) => [r.runId, r.slug, String(r.ts), r.source].join(','));
    return [headers.join(','), ...rows].join('\n');
  }
  return JSON.stringify(runs, null, 2);
}
