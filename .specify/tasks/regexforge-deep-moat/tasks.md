# Tasks · regexforge Deep-Data Moat

> Spec Kit 第 3 步（Tasks）。原子化、每任务有 DoD。按顺序执行，逐步打勾。

## T1 · 写 RFC 规范策展数据集 `rfc-patterns.json`
- 目标：覆盖 RFC 5322 邮件地址语法、RFC 3986 URI 语法、RFC 3696 校验建议、quoted-string 边界、实用邮件正则（regular-expressions.info）共 5 条。
- 文件：`regexforge-agent/lib/governance-data/rfc-patterns.json`
- DoD：每条含 `id`/`ref`(权威 URL)/`title`/`body`/`tags[]`/`verify:true`；顶层 `version:'regexforge-rfc@2026-07-24'`。

## T2 · 写引擎语义策展数据集 `regex-engine.json`
- 目标：ECMA-262 RegExp 语义、/u /v Unicode 模式、PCRE 回溯/原子组/占有量词、Go RE2 线性时间、Rust regex crate、Python re 回溯 共 6 条。
- 文件：`regexforge-agent/lib/governance-data/regex-engine.json`
- DoD：每条含 `id`/`ref`(ecma-international.org 或引擎官方文档)/`title`/`body`/`tags[]`/`verify:true`。

## T3 · 写 ReDoS 策展数据集 `redos.json`
- 目标：OWASP evil-regex 形状、catastrophic backtracking、Cloudflare 2019 宕机、线性时间引擎缓解、原子组/占有量词缓解 共 5 条。
- 文件：`regexforge-agent/lib/governance-data/redos.json`
- DoD：每条含 `id`/`ref`(owasp.org / blog.cloudflare.com / regular-expressions.info)/`title`/`body`/`tags[]`/`verify:true`。

## T4 · 写检索索引 `index.ts`
- 目标：读 3 个 JSON → 扁平化 GovEntry；`retrieve()` 语义分词评分（ref 加权）；`loadGovernanceIndex()` / `invalidateGovernanceCache()` / `GOVERNANCE_SOURCES`。
- 文件：`regexforge-agent/lib/governance-data/index.ts`
- DoD：`tsc` 通过；`retrieve('email RFC 5322')` 命中 rfc5322-email；`retrieve('catastrophic backtracking ReDoS')` 命中 redos-catastrophic；合并 `getAcceptedContributed()`。

## T5 · 写诚实护栏 `guardrails.ts`
- 目标：G1 引用接地 / G2 禁绝对保证 / G3 不替代专家 / G4 不确定显式标记 / G5 非正确性认证；`applyGuardrails()` 返回 `{ok,violations,note,needsHumanReview}`。
- 文件：`regexforge-agent/lib/guardrails.ts`
- DoD：对含 "guaranteed correct / matches 100%" 的文本返回 `ok:false` 且含对应 code；无引用返回 `G1_NO_CITATION`。

## T6 · 写编排核 `agent-core.ts`
- 目标：`runRegexAgent()` 5 步；`chooseScope()`（rfc/engine/redos）；`buildContext()`；STEP5 后非致命飞轮捕获；红线条 `enforceRedline()`。
- 文件：`regexforge-agent/lib/agent-core.ts`
- DoD：`tsc` 通过；导出 `runRegexAgent` / `AGENT_STEP_ORDER` / `AGENT_SOURCES`；复用 NIM endpoint 与 `PRODUCT.systemPrompt`。

## T7 · 写数据飞轮 `data-flywheel.ts` + `flywheel-demo.mjs`
- 目标：`captureRunSignals()`（redos/uncertainty/citation_gap/feedback 启发式）+ `writeback()`（append-only，`verify:true`）+ `setStatus()` 状态机 + `getAcceptedContributed()`。
- 文件：`regexforge-agent/lib/data-flywheel.ts` + `regexforge-agent/flywheel-demo.mjs`
- DoD：demo 幂等跑通「捕获→回写→accept→再索引→检索命中」；生产存储回归空。

## T8 · 接入 `pages/api/tool.ts`
- 目标：quota 检查后插入 `if (body.agent && !useMock)` 分支，动态 import agent-core，返回 Agent 结果；失败→502。
- 文件：`regexforge/pages/api/tool.ts`（surgical）
- DoD：`agent=true` 返回 `agent:true`/`citations`/`redlineNote`；P0 矩阵与无 `agent` 路径完全不变。

## T9 · 离线确定性自测 `__selftest.ts`
- 目标：`retrieve` 命中断言 + `applyGuardrails` 拒绝断言 + 飞轮「accept 后索引命中」断言。
- 文件：`regexforge-agent/lib/__selftest.ts`
- DoD：`tsx` 跑全绿（先验逻辑，先于 build/deploy）。

## T10 · 验证 Verify
- 目标：`tsx __selftest.ts` 全绿 → `node flywheel-demo.mjs` 通过 → `next build` exit 0。
- DoD：三项均 PASS；P0 抽核（503/429/502/200+source）经静态核验确认。

## T11 · 文档 + 来源
- 目标：创建 `lib/rules/SOURCES.md` 追加 RFC/ECMA-262/OWASP/Cloudflare 来源；写 Spec Kit 文档（spec/plan/tasks）。
- DoD：SOURCES.md 含新 ref；`.specify/` 三件套落盘。
