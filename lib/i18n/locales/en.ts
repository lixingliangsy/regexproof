// locales/en.ts — RegexProof REFERENCE catalog (shape authority).
// Terminology aligned with Termly/iubenda/OneTrust DE·FR UI + GDPR Art.4 (controller/processor).

import type { Messages } from '../types'

const en = {
  meta: {
    title: 'RegexProof · Turn plain English into a safer regex',
    description:
      'Turn a plain-English description into a regular expression with part-by-part explanation, dialect traps (ECMAScript vs PCRE), and ReDoS heuristics — decision-support, not a formal verifier.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Describe the pattern, get a working regex — with dialect and ReDoS callouts.',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Back to hub',
    home: 'Home',
    features: 'Features',
    useCases: 'Use cases',
    integrations: 'Integrations',
    howItWorks: 'How it works',
    studio: 'Studio',
    security: 'Security',
    pricing: 'Pricing',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Sign in',
    subscribe: 'Subscribe',
    getStarted: 'Try it on this page',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Describe the pattern. Get a working regex — with safety callouts.',
    subtitle:
      'Plain-English to regex with part-by-part explanation, ECMAScript vs PCRE traps, and ReDoS heuristics. Decision-support for engineers — not a completeness guarantee.',
    keyTakeaways: 'Key Takeaways',
    takeaway1: 'ECMAScript vs PCRE dialect traps called out with examples.',
    takeaway2: 'ReDoS / catastrophic-backtracking heuristics for application regex.',
    takeaway3: 'Subscribe for Pro runs; Free tier for light daily use. Not a formal verifier.',
    ctaPrimary: 'Subscribe',
    ctaSecondary: 'Watch Demo',
    note: 'No credit card required · Cancel anytime',
    playDemo: 'Play demo ▶',
    walkthrough: 'Click to watch walkthrough',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Avg rating',
    uptime: 'Uptime',
    timeToValue: 'Time to value',
  },
  pricing: {
    heading: 'Simple plans that scale',
    monthly: 'Monthly',
    yearly: 'Annual',
    perMonth: '/mo',
    mostPopular: 'Most popular',
    getPro: 'Get Pro',
    orYearly: 'Or pay yearly — ${{amount}}/mo',
    custom: 'Custom',
    contactSales: 'Contact sales',
    configureByok: 'Configure BYOK',
    getStarted: 'Try it on this page',
    freeForever: 'free forever',
    billedMonthly: 'billed monthly',
    save: 'save',
    freeFeat1: 'Limited daily AI runs (10/day · 50/mo)',
    freeFeat2: 'Studio demo (no extra LLM fee)',
    proFeat1: 'AI included: 300 gens/mo · fair use (gpt-4o-mini)',
    proFeat2: 'No separate ChatGPT subscription required',
    proFeat3: 'Priority support · 2 months free with yearly',
    entFeat1: 'Team seats · API access (roadmap)',
    entFeat2: 'Optional BYOK (your OpenAI key)',
  },
  faq: {
    title: 'Your questions, answered',
    geoTitle: 'RegexProof — frequently asked questions',
    items: [
      {
        q: 'What does RegexProof generate?',
        a: 'A dialect-aware regex draft with part-by-part explanation, ECMAScript vs PCRE traps, and ReDoS heuristics — decision-support, not a formal verifier.',
      },
      {
        q: 'Is this legal advice or a certification?',
        a: 'No. Outputs are decision-support drafts. Have counsel and risk owners review before production. We do not claim ISO, CMP, or regulator certification.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Self-serve plans cancel anytime; access continues until period end.',
      },
      {
        q: 'Do I need a credit card to start?',
        a: 'No. Start with email signup or Demo mode in the studio, then upgrade when ready.',
      },
      {
        q: 'Do I need my own ChatGPT / OpenAI subscription?',
        a: 'No for Free/Pro. AI runs are included in your plan (fair use) via our platform key. Enterprise can optionally bring your own OpenAI key (BYOK) — configure it at /settings (key stays server-side only).',
      },
      {
        q: 'What is Fair Use / what if I hit the AI limit?',
        a: 'Pro includes about 300 AI generations/month (and a daily cap) on gpt-4o-mini. If you hit the fair-use limit, Studio returns a mock/demo result until the daily or monthly reset — or upgrade / use Enterprise BYOK for heavier volume.',
      },
      {
        q: 'Is checkout secure?',
        a: 'Payments are processed by Waffo Pancake (merchant of record).',
      },
      {
        q: 'What happens after I pay?',
        a: 'You receive access confirmation; fulfillment is tracked via webhook + order logs.',
      },
    ],
  
    geoItems: [
      { q: 'Which dialects?', a: 'Highlights ECMAScript (JS) vs PCRE-style differences that commonly surprise application code.' },
      { q: 'Is this a formal verifier?', a: 'No. Heuristics and decision-support only — not a mathematical proof of regex safety.' },
      { q: 'What is ReDoS?', a: 'Regular expression Denial of Service — catastrophic backtracking on crafted inputs.' },
      { q: 'Demo vs live?', a: 'Demo mode returns labelled samples; live AI narrative needs a configured key.' },
      { q: 'Primary sources?', a: 'ECMAScript specification notes, PCRE docs, and known ReDoS literature.' },
    ],
},
  footer: {
    product: 'Product',
    company: 'Company',
    resources: 'Resources',
    legal: 'Legal',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    refund: 'Refund',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'All rights reserved.',
    partOfFleet: 'Part of the LX AI Micro-SaaS fleet.',
  },
  signup: {
    title: 'Start smarter today',
    subtitle: 'Join builders using RegexProof. Free to try — no card needed.',
    emailPlaceholder: 'Enter your email',
    saving: 'Saving…',
    cta: 'Create my account',
    trust: 'Trusted · Cancel anytime',
  },
  feedback: {
    open: 'Feedback',
    title: 'Send feedback',
    blurb: 'Tell us what worked, what broke, or what you want next.',
    fullPage: 'Prefer a full page?',
    openPage: 'Open /feedback',
    close: 'Close feedback',
    helpful: 'Was this result helpful?',
    yes: 'Yes',
    no: 'No',
    thanks: 'Thanks for the feedback.',
    commentPlaceholder: 'Optional one-line comment',
    generalTitle: 'General Feedback',
    generalSub: 'Tell us what you think',
    generalPh: 'What did you like, dislike, or notice while using the product?',
    ideaTitle: 'I have an idea',
    ideaSub: 'Suggest a feature or improvement',
    ideaPh: 'Describe your idea and the problem it would solve…',
    issueTitle: 'I found an issue',
    issueSub: 'Report a bug or problem',
    issuePh: 'What happened, what did you expect, and how can we reproduce it?',
    submit: 'Submit feedback',
    submitting: 'Sending…',
    done: 'Thanks — feedback received.',
    emailOptional: 'Email (optional)',
    category: 'Category',
    yourFeedback: 'Your feedback',
    attachment: 'Attachment (optional)',

    back: '← Back to feedback type',
    pickTitle: 'What feedback do you have?',
    pickSub: 'Pick one to get started. You can add details and a precise category on the next step.',
    thanksTitle: 'Thanks for your feedback!',
    thanksBody: 'We have received it and our team will follow up soon. Feel free to submit again anytime.',
    submitAnother: 'Submit another',
    detailed: 'Detailed feedback',
    send: 'Send',
    sending: 'Sending...',
    thanksInline: 'Thanks - recorded. We read every one of these.',
    errorInline: 'Could not send just now. Please use the Feedback button or /feedback.',
    inlineCommentPh: 'One line: what should we improve? (optional)',
  },
  legal: {
    privacyPolicy: 'Privacy policy',
    generatePolicy: 'Generate policy',
    controller: 'Controller',
    processor: 'Processor',
    processing: 'Processing',
    personalData: 'Personal data',
    dataSubject: 'Data subject',
    dpo: 'Data protection officer',
    checklist: 'Compliance checklist',
    policyChecks: 'Regex safety checks',
    encodePolicy: 'Encode your pattern rules',
    definitionTitle: 'RegexProof — definition',
    whatItIs: 'What it is',
    whatNotTitle: 'What this is NOT',
    whatNot1: 'Not a law firm, GRC platform, or ISO certification body.',
    whatNot2: 'Not a guarantee that drafted policies will satisfy every regulator or auditor.',
    whatNot3: 'Not a formal verifier — treat generated regex as drafts under engineer review.',
    rolesHint:
      'When packs mention privacy roles, we use GDPR Art.4 labels: Controller and Processor (decision-support only).',
  },
  // Generator-style IA inspired by iubenda/Termly patterns (structure only — original copy).
  benchmark: {
    frameworksEyebrow: 'Framework mapping',
    frameworksTitle: 'Dialects differ. Patterns break quietly.',
    frameworksNote:
      'Decision-support themes — not a completeness guarantee or formal proof.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'ReDoS heuristics',
    fw4: 'Dialect trap callouts',
    painEyebrow: 'Why regex bites',
    painTitle: 'Patterns look fine. Production hangs later.',
    pain1Title: 'Dialect traps',
    pain1Body: 'Lookahead, possessive, and Unicode classes differ across ECMAScript vs PCRE engines.',
    pain2Title: 'ReDoS risk',
    pain2Body: 'Nested quantifiers on untrusted input can stall event loops and APIs.',
    pain3Title: 'Opaque one-liners',
    pain3Body: 'Hand-written regex without part-by-part explanation is hard to review safely.',
    pain4Title: 'Issues after ship',
    pain4Body: 'Timeouts and false matches often appear only under adversarial or messy data.',
    getEyebrow: 'What you get',
    getTitle: 'Describe. Forge. Review.',
    getLead:
      'Plain-English to regex with safety callouts — review before production.',
    get1Title: 'Working pattern draft',
    get1Body: 'A dialect-aware regex starting point for your language flavor.',
    get2Title: 'Part-by-part explanation',
    get2Body: 'Readable breakdown so reviewers can challenge assumptions.',
    get3Title: 'ReDoS heuristics',
    get3Body: 'Flags nested quantifiers and catastrophic backtracking shapes.',
    get4Title: 'Dialect traps',
    get4Body: 'ECMAScript vs PCRE differences called out — decision-support, not a proof.',
    featuresEyebrow: 'Why RegexProof',
    featuresTitle: 'Everything you need to forge safer regex',
    featuresBlurb: 'Built for engineers who need dialect and ReDoS callouts without a research rabbit hole.',
    howTitle: 'From description to safer pattern in 3 steps',
    how1Title: 'Describe',
    how1Body: 'Write the match intent in plain English and pick a dialect.',
    how2Title: 'Forge',
    how2Body: 'Generate a candidate regex with explanations and heuristics.',
    how3Title: 'Review',
    how3Body: 'Test against samples; keep engineers for adversarial cases.',
    allPlansTitle: 'All paid plans include',
    allPlans1: 'NL→regex studio',
    allPlans2: 'Dialect trap callouts',
    allPlans3: 'ReDoS heuristics (decision-support)',
    allPlans4: 'Email support on paid plans — no hidden add-ons for core studio use',
    honestyTitle: 'Honest boundaries',
    honestyLead:
      'RegexProof is a drafting aid: customize, fuzz, and review before shipping to untrusted input.',
    ctaStudio: 'Open studio',
  },
  home: {
    whyEyebrow: 'Why {{name}}',
    featuresHeading: 'Everything you need for safer application regex',
    featuresCardBlurb: 'Built for engineers who need explanations and ReDoS hints without a learning curve.',
    howHeading: 'From description to safer pattern in 3 steps',
    how1Title: 'Paste policy',
    how1Desc: 'Drop in a plain-English match intent and dialect.',
    how2Title: 'Compile rules',
    how2Desc: 'Deterministic heuristics plus optional model-assisted narrative.',
    how3Title: 'Enforce',
    how3Desc: 'Export the draft with callouts — not a completeness guarantee.',
    studioEyebrow: 'Validate',
    studioHeading: 'Try it on this page',
    studioWatchDemo: 'Watch demo',
    studioOrRun: 'or run a check below.',
    studioFormTitle: 'Regex forge',
    demoMode: 'Demo mode (not live AI)',
    socialHeading: 'Built for careful pattern authors',
    socialNote: 'Social proof uses templates until real, consented testimonials exist.',
    quickAnswers: 'Quick answers',
    howCompares: 'How it compares',
    dimension: 'Dimension',
    manual: 'Manual',
    whenNotToUse: 'When not to use:',
    peopleAlsoSearch: 'People also search',





































































































































    leadsInbox: "Leads inbox (demo CRUD)",
    filterEmail: "Filter email…",
    allPlans: "All plans",
    noLeads: "No leads yet — submit the signup form.",
    colEmail: "Email",
    colPlan: "Plan",
    colSource: "Source",
    delete: "Delete",
    deleteLeadTitle: "Delete Lead",
    deleteLeadWarn: "This action cannot be undone.",
    deleteLeadBody: "Are you sure you want to delete this lead? Their email will be permanently removed from your contacts.",
    cancel: "Cancel",
    relatedReading: "Related reading",
    productTour: "Product tour",
    productDemo: "PRODUCT DEMO",
    stepOf: "step {{n}}/{{total}}",
    replay: "Replay",
    tryStudio: "Try studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtered",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manual",
    geoCmp1Dim: "Speed",
    geoCmp1Manual: "Hours to days",
    geoCmp1Tool: "Minutes per run",
    geoCmp2Dim: "Consistency",
    geoCmp2Manual: "Varies by person",
    geoCmp2Tool: "Same ruleset every run",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Free-form",
    geoCmp3Tool: "Structured, exportable result",
    geoCmp4Dim: "Best for",
    geoCmp4Manual: "Final sign-off",
    geoCmp4Tool: "First-pass decision-support",
    related1Title: "AI wrapper vs moat",
    related1Desc: "policy enforcement as a durable moat.",
    related2Title: "EU AI Act validation error list",
    related2Desc: "map agent duties to Act themes.",
    related3Title: "Wave 1 launch",
    related3Desc: "RegexProof ships with the governance cluster.",
    feat1: "Policy-to-rules",
    feat2: "Compliance checklist",
    feat3: "EU AI Act mapping",
    feat4: "Exportable rules",
    geoQa1: "Policy-to-rules",
    geoQa2: "Compliance checklist",
    geoQa3: "EU AI Act mapping",
    geoQa4: "Exportable rules",
    geoQa5: "Pricing starts at $0 (Free).",
    geoLt1: "what is RegexProof",
    geoLt2: "how does RegexProof work",
    geoLt3: "how much does RegexProof cost",
    geoLt4: "is RegexProof free",
    geoLt5: "RegexProof vs doing it manually",
    geoWhenNot: "Use qualified human review instead — it is a drafting aid. Policies must be reviewed by your counsel and risk owners.",
    demo1Title: "Welcome to {{name}}",
    demo1Detail: "A 60-second tour of how {{name}} turns policy into agent checks.",
    demo2Title: "Open the live studio",
    demo2Detail: "Paste policy text and choose a domain.",
    demo3Title: "Click Generate checks",
    demo3Detail: "Powered by policy-to-rules and validation error lists.",
    demo4Title: "Policy checks preview",
    demo4Detail: "Sample output from this product's rule-based pipeline:",
    demo4DetailEmpty: "Your policy checks appear here — copy or refine.",
    demo5Title: "Your turn",
    demo5Detail: "Try the live studio, or get started with {{name}}.",
  },
  chat: {
    typing: 'Assistant is typing…',
    placeholder: 'Type your question… (Enter to send)',
    openAria: 'Open AI assistant',
    openTitle: 'Ask our AI assistant',
    closeAria: 'Close',
    escalated: 'We\'ve connected you with a human agent. We\'ll follow up by email.',
    s1: 'What does this tool do?',
    s2: 'How much does it cost?',
    s3: 'Is there a free plan?',
  },
  pages: {
    howTitle: 'RegexProof — How it works',
    howDesc: 'How RegexProof works in three steps.',
    howEyebrow: 'How it works',
    howH1: 'From input to result in 3 steps',
    how1Title: 'Paste',
    how1Body: 'Paste policy text and choose domain.',
    how2Title: 'Encode',
    how2Body: 'Generate agent-callable checks and a validation error list.',
    how3Title: 'Enforce',
    how3Body: 'Wire rules into your agent runtime; keep humans for exceptions.',
    subscribe: 'Subscribe',
    ucTitle: 'RegexProof — Use Cases',
    ucDesc: 'How RegexProof helps compliance and agent-platform teams.',
    ucEyebrow: 'Use Cases',
    ucH1: 'Built for compliance and agent-platform teams',
    ucIntro: 'Pick your segment to see the workflows that matter most.',
    uc1Title: 'Finance policies',
    uc1Pain: 'Refunds and approvals must be machine-checkable.',
    uc1Help: 'Extract conditions + actions agents can evaluate.',
    uc2Title: 'HR / safety policies',
    uc2Pain: 'Need checklists agents can call.',
    uc2Help: 'Domain selector focuses extraction.',
    uc3Title: 'EU AI features',
    uc3Pain: 'Map high-risk rules to AI Act themes.',
    uc3Help: 'Decision-support mapping only.',
    uc4Title: 'Platform teams',
    uc4Pain: 'Policy PDFs never reach runtime.',
    uc4Help: 'Exportable rules for agent tools.',
    painLabel: 'Pain:',
    helpLabel: 'How RegexProof helps:',
    ucRefs: 'refs: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integrations',
    intDesc: 'RegexProof export targets, API, and BYOK options.',
    intEyebrow: 'Integrations',
    intH1: 'Plug into your stack',
    intIntro: 'Only honest integrations are listed. We do not advertise connectors that are not yet shipped.',
    int1Title: 'Exportable rules',
    int1Body: 'JSON/checklist export for agent tools.',
    int2Title: 'API',
    int2Body: 'Regenerate when policies change.',
    int3Title: 'EU AI Act mapping',
    int3Body: 'Pointers for high-risk themes.',
    int4Title: 'BYOK',
    int4Body: 'Server-side keys when offered.',
    intHonesty: 'Honesty note: Runtime enforcement is your system’s job; we generate candidate checks.',
    secTitle: 'RegexProof — Security & Compliance',
    secDesc: 'How RegexProof handles your data and its honest compliance posture.',
    secEyebrow: 'Security & Compliance',
    secH1: 'Your data, our posture',
    secIntro: 'RegexProof processes the inputs you submit for analysis. This page states, plainly, what we handle and what we do not claim.',
    secHandleH2: 'What we handle',
    secHandleBody: 'company policy text and domain selections used to generate agent-enforceable checks.',
    secDataH2: 'Data handling commitments',
    secData1: 'Submissions run the product pipeline and are retained only as long as needed for your audit log (paid tiers) or until you delete the run.',
    secData2: 'We apply access controls consistent with GDPR Art. 32 (security of processing) where personal data is processed.',
    secData3: 'BYOK keys (Enterprise), when offered, are stored server-side only and never exposed to the browser.',
    secHonesty: 'Honesty rule: RegexProof turns policy text into candidate rules. We do not guarantee correct enforcement, 100% policy coverage, or that agents will never miss a violation. We do not claim guarantee / 100% / never miss.',
    secPostureH2: 'Our compliance posture',
    secPosture1: 'RegexProof is decision-support, not a law firm, clinic, or certified auditor.',
    secPosture2: 'For binding advice, consult a qualified professional in the relevant domain.',
    secSubH2: 'Subprocessors & payments',
    secSub1: 'Payments are processed by Waffo Pancake (merchant of record).',
    secSub2: 'See Privacy and Terms for full terms.',
    secRefs: 'refs: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Back to home',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Definitional and how-to posts on ECMAScript vs PCRE traps, ReDoS heuristics, and honest regex drafting boundaries.',
    glanceTitle: 'What does this product include at a glance?',
    glance1: 'Plain-language definition, FAQ, and references for answer engines',
    glance2: '3 reviewable workflow steps (input → generate → review)',
    glance3: 'Decision-support output — you stay in the loop; no fabricated user counts',
    eyebrow: 'Blog · GEO',
    h1: 'Safer application regex, explained',
    lead: 'Own the definitional queries teams ask before they paste a pattern into production parsing.',
    targetQuery: 'Target query:',
    guidesTitle: 'Which GEO deep-dives should you read first?',
    guidesLead: 'Long-form explainers on dialect traps and ReDoS heuristics with decision-support disclaimers.',
    footerNote: 'Publish + syndicate per gtm-launch (IH + GEO indexes). Each post carries 3 authoritative refs.',
    post1Title: 'ECMAScript vs PCRE dialect traps (2026)',
    post1Desc: 'Where ECMAScript and PCRE diverge — and how silent dialect bugs ship.',
    post2Title: 'ReDoS heuristics for application regex (2026)',
    post2Desc: 'Practical ReDoS heuristics for application-facing regular expressions.',
    readI18n: 'Read multilingual version',
    readEnHtml: 'Read full English article',
    pillarSlug: 'ecmascript-vs-pcre-dialect-traps-2026',
    pillarEyebrow: 'by RegexProof (LX AI)',
    pillarH1: 'ECMAScript vs PCRE dialect traps',
    pillarLead: 'The same regex can mean different things across engines. Know the traps before you copy a Stack Overflow answer into Node or Python.',
    pillarH2a: 'Lookahead and possessive differences',
    pillarPa1: 'PCRE possessive quantifiers and some lookbehind forms are missing or differ in ECMAScript — validate on the target engine.',
    pillarH2b: 'Unicode and word boundaries',
    pillarPb1: '\\\\w and Unicode property escapes behave differently; pin flags and dialect explicitly.',
    pillarH2c: 'Newline and dotall modes',
    pillarPc1: 'Dot does not match newline the same way across flavors — document expected line handling.',
    pillarH2d: 'Test on the real engine',
    pillarPd1: 'Always re-run samples on the production regex engine after drafting.',
    pillarDisclaimer: 'Decision support only — not a formal verifier.',
    pillarFaq1Q: 'Can one regex be portable everywhere?',
    pillarFaq1A: 'Rarely. Prefer dialect-specific drafts and tests per runtime.',
    pillarFaq2Q: 'Does RegexProof prove correctness?',
    pillarFaq2A: 'No. It drafts and flags risks; engineers own verification.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'ReDoS heuristics',
    pillar2H1: 'ReDoS heuristics for application regex',
    pillar2Lead: 'Nested quantifiers on untrusted input can stall servers. Heuristics help spot risky shapes before they hit production — not a guarantee.',
    pillar2H2a: 'Nested quantifiers',
    pillar2Pa1: '(a+)+b-style nesting is a classic catastrophic backtracking pattern.',
    pillar2H2b: 'Alternation bombs',
    pillar2Pb1: 'Overlapping alternations with quantifiers amplify backtracking paths.',
    pillar2H2c: 'Timeouts and caps',
    pillar2Pc1: 'Pair safer patterns with input size limits and engine timeouts.',
    pillar2H2d: 'Fuzz adversarial input',
    pillar2Pd1: 'Heuristic flags are starts — fuzz with crafted strings before trusting a pattern.',
    pillar2Disclaimer: 'Decision-support drafts. Not a completeness guarantee.',
    pillar2Faq1Q: 'Are heuristics enough?',
    pillar2Faq1A: 'No. Combine with timeouts, size limits, and review.',
    pillar2Faq2Q: 'Why focus on application regex?',
    pillar2Faq2A: 'User-controlled input makes ReDoS an availability risk, not just a style issue.',
    pillar2Back: 'Back to blog',
    pillarBack: 'Back to blog',
    card1Title: 'What is dialect-aware regex drafting?',
    card1Body: 'Generating a pattern with explicit ECMAScript vs PCRE assumptions and edge cases — decision-support, not a formal verifier.',
    card2Title: 'ReDoS-aware drafting',
    card2Body: 'Describe the match; get a candidate regex with part-by-part explanation and ReDoS heuristics — not a completeness guarantee.',
  },
} as const

export default en as unknown as Messages
