import type { KbEntry } from "../support-kit/types";
export type { KbEntry };

export const KB: KbEntry[] = [
  {
    id: "what",
    title: "What RegexProof does",
    keywords: ["RegexProof", "regexproof", "what", "product", "about", "Describe the pattern, get a working regex."],
    body: "Describe the pattern, get a working regex.. RegexProof reviews regular expressions for ReDoS and dialect pitfalls with deterministic heuristics plus optional model-assisted explanations — not a completeness guarantee.",
    source: "RegexProof product definition",
    tags: [],
  },
  {
    id: "features",
    title: "RegexProof features",
    keywords: ["features", "feature", "can", "does", "NL description to regex", "Pick your language flavor", "Part-by-part explanation", "Edge cases called out"],
    body: "RegexProof includes: NL description to regex; Pick your language flavor; Part-by-part explanation; Edge cases called out. It does not add capabilities that are not listed here.",
    source: "RegexProof feature list",
    tags: [],
  },
  {
    id: "pricing",
    title: "RegexProof pricing",
    keywords: ["price", "pricing", "plan", "cost", "billing", "subscription", "monthly", "yearly", "how much", "much", "free"],
    body: "Listed prices for RegexProof: $19/month and $190/year. Checkout uses the in-app checkout route. This assistant cannot change a subscription or issue a refund.",
    source: "RegexProof pricing fields",
    tags: [],
  },
  {
    id: "howto",
    title: "How to use RegexProof",
    keywords: ["how", "start", "use", "tool", "run", "Build a regex"],
    body: "Open RegexProof and use Build a regex. The form asks for: What should it match?; Language / flavor; Test strings (optional).",
    source: "RegexProof tool fields",
    tags: [],
  },
  {
    id: "faq-1",
    title: "What is ReDoS?",
    keywords: ["What", "is", "ReDoS?"],
    body: "Regular expression Denial of Service from catastrophic backtracking; see OWASP ReDoS guidance.",
    source: "RegexProof FAQ",
    tags: [],
  },
  {
    id: "faq-2",
    title: "Which dialects?",
    keywords: ["Which", "dialects?"],
    body: "Notes cover JavaScript/ECMAScript, Python, Go, PCRE, and Rust differences at a high level.",
    source: "RegexProof FAQ",
    tags: [],
  },
  {
    id: "faq-3",
    title: "Are detections complete?",
    keywords: ["Are", "detections", "complete?"],
    body: "No. Heuristics catch common patterns; novel attacks may be missed.",
    source: "RegexProof FAQ",
    tags: [],
  },
  {
    id: "honesty",
    title: "What this assistant will not claim",
    keywords: ["legal", "advice", "guarantee", "demo", "human", "refund", "support"],
    body: "Answers about RegexProof are decision support only, not legal, tax, accessibility-certification, or compliance sign-off. This assistant does not invent integrations, SSO, CSV export, or Slack connections unless they are already in the product description. If live AI is unavailable, the product must not pretend a demo result is live. Say you want a human and leave an email if you need a person.",
    source: "RegexProof support policy",
    tags: ["compliance"],
  },
];

function normalize(s: string): string {
  return (s || "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ");
}
function toWords(s: string): string[] {
  return normalize(s).split(/\s+/).map((w) => w.trim()).filter(Boolean);
}
function cjkBigrams(s: string): string[] {
  const grams: string[] = [];
  const han = /[\u4e00-\u9fff]/;
  for (const w of toWords(s)) {
    if (han.test(w) && w.length >= 2) {
      for (let i = 0; i < w.length - 1; i++) grams.push(w.slice(i, i + 2));
    }
  }
  return grams;
}
function scoreEntry(entry: KbEntry, query: string): number {
  const q = normalize(query);
  const qWords = new Set(toWords(q));
  const qGrams = new Set(cjkBigrams(q));
  let s = 0;
  for (const kw of entry.keywords) {
    const k = kw.toLowerCase();
    if (q.includes(k)) s += 3;
  }
  for (const tw of toWords(entry.title)) {
    if (qWords.has(tw)) s += 2;
  }
  const idx = normalize(entry.keywords.join(" ") + " " + entry.title + " " + entry.body.slice(0, 400));
  for (const g of qGrams) if (idx.includes(g)) s += 0.5;
  return s;
}

export interface RetrieveResult {
  entries: KbEntry[];
  topScore: number;
}

export function retrieve(query: string, topK = 4, entries: KbEntry[] = KB): RetrieveResult {
  const scored = entries
    .map((e) => ({ e, s: scoreEntry(e, query) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, topK);
  return { entries: scored.map((x) => x.e), topScore: scored.length ? scored[0].s : 0 };
}

export function isComplianceRelated(entries: KbEntry[]): boolean {
  return entries.some((e) => e.tags.includes("compliance"));
}
