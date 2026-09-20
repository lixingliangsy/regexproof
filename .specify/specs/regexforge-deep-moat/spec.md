# Spec · regexforge Deep-Data Moat (Vertical Regex-Governance Agent)

> Spec Kit 第 1 步（Specify · WHAT）。来源：薄产品富集组深度优化任务（用户指令 2026-07-24），
> 推广 R11 / a11yguard 垂直「深数据 + 深合规 + 多步引用」护城河范式到 Batch 1 首批产品。
> regexforge 为 ai-governance 类（AI 辅助正则生成与校验）。

## 背景 / 意图（一句话）
把 regexforge 从「NL→regex 单步生成」升级为「垂直正则治理 Agent」：
在既有规则层（`lib/rules/regex.ts`）之上，叠加一个**专有、版本化、可引用的正则治理数据集**
（RFC 5322/3986 规范、ECMA-262 引擎语义、OWASP/Cloudflare ReDoS）
+ **5 步编排**（retrieve → crossref → assess → cite → report）+ **诚实护栏（G1–G5）** + **数据飞轮（动态富集回写）**，
使其成为基础模型厂/通用 SaaS 平台够不到的「深合规护城河」。

## 功能需求（用户故事式）
1. 作为 Regex Agent 用户，我在 `/api/tool` 传 `agent=true`，能得到一份**基于权威标准条文**的正则评估，
   每条结论都带 `[ref]` 引用（RFC / ECMA-262 / OWASP / Cloudflare / regular-expressions.info 官方来源）。
2. 作为用户，我得到的评估必须明确标注「**决策辅助，非正确性保证**」，永不声称"你的正则保证正确"或"100% 匹配"。
3. 作为用户，Agent 能从专有数据集中**检索适用条款**（按查询语义匹配），并跨引擎/ReDoS 交叉引用。
4. 作为用户，每次运行产出的不确定性/引用缺口/ReDoS 信号会被**写入贡献库（pending_review）**，
   经人工 accept 后才进入可检索索引——绝不自动污染策展集。
5. 作为维护者，数据集是**版本化、带 `verify` 标记、每条含权威 `ref`** 的 JSON，可被离线自测与冷载入索引。

## 非功能需求
- 复用既有 P0 矩阵（`pages/api/tool.ts` 已有：无密钥→503 / 配额→429 / 上游失败→502 / 成功→200 `source:'Model-assisted'`），
  Agent 分支不得破坏既有管线。
- Agent 分支与既有「经典模型调用」互斥（`agent=true` 且非 `useMock` 时走 Agent；否则走原管线）。
- 数据集检索为纯本地确定性逻辑（不依赖 LLM），可用 `tsx` 离线自测。
- 类型安全：不引入 `any`，tsconfig 不放松；`tsc --noEmit` 与 `next build` 均须 PASS。

## 明确边界（不做什么）
- **不**修改/替换既有 `lib/rules/regex.ts`（确定性规则引擎保持不变）。
- **不**改变定价、Waffo 上架、Vercel 部署配置。
- **不**引入新的第三方依赖（仅用 Node 内置 `fs`/`path` + 既有 fetch）。
- **不**把贡献库条目自动合并进策展集（红线条：仅人工 accept 后可见）。
- **不**在 Agent 输出中声称"certified/guaranteed/100% correct"（G2/G5 护栏拒绝）。

## 验收标准（可测的 Done 定义）
1. `regexforge-agent/lib/governance-data/` 含 `rfc-patterns.json` + `regex-engine.json` + `redos.json` + `index.ts`，
   每个策展条目带 `ref`（权威 URL）与 `verify:true`。
2. `index.ts` 导出 `retrieve()` / `loadGovernanceIndex()` / `invalidateGovernanceCache()`，离线单测可命中已知条款
   （如查询 "email RFC 5322" → 命中 `rfc5322-email`；查询 "catastrophic backtracking ReDoS" → 命中 `redos-catastrophic`）。
3. `agent-core.ts` 导出 `runRegexAgent()`，5 步齐全；`guardrails.ts` 导出 `applyGuardrails()` 覆盖 G1–G5。
4. `data-flywheel.ts` 导出 `captureRunSignals()` / `writeback()` / `setStatus()` / `getAcceptedContributed()`，
   `flywheel-demo.mjs` 可幂等跑通「运行→捕获→回写→accept→再索引→检索命中」。
5. `pages/api/tool.ts` 新增 `if (body.agent && !useMock)` 分支，动态 import `regexforge-agent/lib/agent-core`，
   返回含 `agent:true` / `citations` / `redlineNote` 的 200；Agent 失败走 502（不污染 P0 矩阵）。
6. `tsx` 确定性自测（`regexforge-agent/lib/__selftest.ts`）全绿；`tsc --noEmit` exit 0；`next build` exit 0。
7. P0 抽核：无密钥→503、配额→429、上游失败→502、成功 200 带 `source:'Model-assisted'`（既有行为不变）。
