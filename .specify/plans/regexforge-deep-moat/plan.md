# Plan · regexforge Deep-Data Moat

> Spec Kit 第 2 步（Plan · HOW）。对齐 `spec.md` 与 `AGENTS.md`（§1 P0 / §2 Waffo / §3 web-research / §10 Spec Kit / §11.5 护城河加固）。

## 技术架构
复用 R11 / a11yguard 垂直 AI 治理 Agent 的已验证范式，按 regexforge 领域（AI 辅助正则生成与校验）平移：
- **深数据层** `regexforge-agent/lib/governance-data/`：3 个版本化 JSON 数据集（rfc / engine / redos）+ `index.ts` 检索索引。
- **编排层** `regexforge-agent/lib/agent-core.ts`：5 步 `retrieve → crossref → assess → cite → report`，复用工厂 NIM endpoint。
- **护栏层** `regexforge-agent/lib/guardrails.ts`：G1–G5 诚实护栏（决策辅助声明 / 禁绝对保证 / 引用接地 / 不确定显式标记）。
- **飞轮层** `regexforge-agent/lib/data-flywheel.ts`：运行信号捕获 + append-only 回写 + 人工 accept 状态机。
- **接入层** `pages/api/tool.ts`：`agent=true` 分支动态 import，复用现有 key/quota/P0 矩阵。

## 数据结构 / Schema
`GovEntry` / `GovScope`（`'rfc' | 'engine' | 'redos'`）：
```ts
interface GovEntry { id; ref; title; text; source; scope: GovScope; verify?: boolean }
```
JSON 数据集形态（以 `rfc-patterns.json` 为例）：
```json
{ "version": "regexforge-rfc@2026-07-24",
  "entries": [
    { "id":"rfc5322-email","ref":"https://www.rfc-editor.org/rfc/rfc5322",
      "title":"Email address syntax (RFC 5322 addr-spec)","body":"...","tags":["email","rfc5322"],"verify":true }
  ] }
```

## API 契约（增量，不破坏既有）
`POST /api/tool` 请求体新增可选字段 `agent?: boolean`。
- `agent=true && !useMock` → 走 Agent 分支，返回：
  `{ result, demo:false, mock:false, source:'Agent-assisted', agent:true, runId, steps, citations, redlineNote, model }`
- Agent 内部上游失败 → `502 AI_UPSTREAM_FAILED`（与既有 P0 矩阵一致）。
- 其余请求（无 `agent` / `useMock`）→ 原管线完全不变。

## 文件组织（新增 / 改动）
新增：
- `regexforge-agent/lib/governance-data/{rfc-patterns,regex-engine,redos}.json`
- `regexforge-agent/lib/governance-data/index.ts`
- `regexforge-agent/lib/{agent-core,guardrails,data-flywheel}.ts`
- `regexforge-agent/lib/__selftest.ts`
- `regexforge-agent/flywheel-demo.mjs`
- `regexforge/.specify/{specs,plans,tasks}/regexforge-deep-moat/*.md`

改动（surgical，仅加分支，不改既有逻辑）：
- `regexforge/pages/api/tool.ts`：在 quota 检查之后、经典模型调用之前，插入 `agent=true` 分支。
- `regexforge/lib/rules/SOURCES.md`：追加 RFC / ECMA-262 / OWASP / Cloudflare 权威来源。

## 风险与缓解
- **R1 类型漂移**：`data-flywheel.ts` 的 `ContributedSignal.scope` 须与 `GovScope` 对齐；`getAcceptedContributed()` 重塑时显式 `verify:true`。
  → 缓解：`tsc --noEmit` + `__selftest.ts` 断言 `getAcceptedContributed()` 类型形状。
- **R2 索引冷载入路径**：`index.ts` 用 `__dirname` 读 JSON；Next.js Pages Router API 构建后 `__dirname` 指向 `.next/server`。
  → 缓解：沿用 R11/a11yguard 同款 `__dirname` 模式（已验证可用），自测以源树路径跑。
- **R3 飞轮污染策展集**：贡献条目默认 `pending_review`，绝不在 `loadGovernanceIndex()` 直接合并。
  → 缓解：仅 `getAcceptedContributed()`（需 `setStatus('accepted')`）才进入索引；红线条硬编码 `verify:true`。
- **R4 P0 矩阵破坏**：Agent 分支的任何失败都必须落到 502，不得回退静默 mock。
  → 缓解：Agent 失败显式 `return res.status(502)…AI_UPSTREAM_FAILED`；不触碰 `useMock`/无密钥/配额分支。

## 复用（不重复造轮子）
- 复用 `lib/aiGateway.ts` 的 `defaultModel` / `resolvePlan` / 配额；复用 `PRODUCT.systemPrompt` 作为 Agent system prompt。
- 复用工厂 NIM endpoint（`OPENAI_BASE_URL || https://integrate.api.nvidia.com/v1`，`OPENAI_MODEL || meta/llama-3.1-8b-instruct`）。
- 复用 R11 / a11yguard 的 `guardrails` / `agent-core` / `data-flywheel` 结构与命名，仅换领域数据与 scope 类型，保证「与历史模式一致」。
