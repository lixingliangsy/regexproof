// locales/da.ts — RegexProof full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const da = {
  meta: {
    title: 'RegexProof · Gør virksomhedspolitikker til agent-håndhævede regler',
    description: 'RegexProof læser din virksomhedspolitiktekst og genererer agent-kaldbare politiktjek plus en compliance-tjekliste, knyttet til forpligtelser under EU AI Act — så politik bliver eksekverbar, ikke bare en PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Gør virksomhedspolitikker til agent-håndhævede regler',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Tilbage til hub',
    home: 'Hjem',
    features: 'Funktioner',
    useCases: 'Brugsscenarier',
    integrations: 'Integrationer',
    howItWorks: 'Sådan virker det',
    studio: 'Studio',
    security: 'Sikkerhed',
    pricing: 'Priser',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Log ind',
    subscribe: 'Abonner',
    getStarted: 'Kom i gang',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Gør virksomhedspolitikker til agent-håndhævede regler',
    subtitle: 'RegexProof læser din virksomhedspolitiktekst og genererer agent-kaldbare politiktjek plus en compliance-tjekliste, knyttet til forpligtelser under EU AI Act — så politik bliver eksekverbar, ikke bare en PDF.',
    keyTakeaways: 'Vigtigste pointer',
    takeaway1: 'Gør virksomhedspolitikker til agent-håndhævede regler — uden kode.',
    takeaway2: 'Gelændere kobles til agent-workflows og fejler lukket ved overtrædelser.',
    takeaway3: 'Kom i gang; Pro fra 29 $/md.',
    ctaPrimary: 'Abonner',
    ctaSecondary: 'Se demo',
    note: 'Intet kreditkort krævet · Opsig når som helst',
    playDemo: 'Afspil demo ▶',
    walkthrough: 'Klik for at se gennemgangen',
  },
  stats: {
    builders: 'Buildere',
    avgRating: 'Gns. rating',
    uptime: 'Oppetid',
    timeToValue: 'Tid til værdi',
  },
  pricing: {
    heading: 'Enkle planer der skalerer',
    monthly: 'Månedlig',
    yearly: 'Årlig',
    perMonth: '/md',
    mostPopular: 'Mest populær',
    getPro: 'Få Pro',
    orYearly: 'Eller betal årligt — ${{amount}}/md',
    custom: 'Tilpasset',
    contactSales: 'Kontakt salg',
    configureByok: 'Konfigurer BYOK',
    getStarted: 'Kom i gang',
    freeForever: 'gratis for altid',
    billedMonthly: 'faktureret månedligt',
    save: 'spar',
    freeFeat1: 'Begrænsede daglige AI-kørsler (10/dag · 50/md)',
    freeFeat2: 'Studio-demo (ingen ekstra LLM-gebyr)',
    proFeat1: 'AI inkluderet: 300 gens/md · fair use (gpt-4o-mini)',
    proFeat2: 'Intet separat ChatGPT-abonnement nødvendigt',
    proFeat3: 'Priority support · 2 måneder gratis ved årlig',
    entFeat1: 'Team-pladser · API-adgang (roadmap)',
    entFeat2: 'Valgfri BYOK (din OpenAI-nøgle)',
  },
  faq: {
    title: 'Dine spørgsmål — besvaret',
    geoTitle: 'RegexProof — ofte stillede spørgsmål',
    items: [
      {
        q: 'Hvad genererer RegexProof?',
        a: 'Et dialekt-orienteret regex-udkast med del-for-del forklaring, ECMAScript vs PCRE fælder og ReDoS heuristikker — beslutningsstøtte, ikke en formel verificator.',
      },
      {
        q: 'Er dette juridisk rådgivning eller en certificering?',
        a: 'Nej. Output er beslutningsstøtte-udkast. Få counsel og risikoejere til at gennemgå før produktion. Vi hævder ikke ISO-, CMP- eller tilsynscertificering.',
      },
      {
        q: 'Kan jeg opsige når som helst?',
        a: 'Ja. Self-serve-planer kan opsiges når som helst; adgangen fortsætter til periodens slut.',
      },
      {
        q: 'Skal jeg bruge kreditkort for at starte?',
        a: 'Nej. Start med e-mail-tilmelding eller Demo-tilstand i studio, og opgrader når du er klar.',
      },
      {
        q: 'Skal jeg have mit eget ChatGPT-/OpenAI-abonnement?',
        a: 'Nej for Free/Pro. AI-kørsler er inkluderet i din plan (fair use) via vores platformsnøgle. Enterprise kan valgfrit medbringe egen OpenAI-nøgle (BYOK) — konfigurer under /settings (nøglen forbliver kun på serversiden).',
      },
      {
        q: 'Hvad er Fair Use / hvad hvis jeg rammer AI-loftet?',
        a: 'Pro inkluderer ca. 300 AI-genereringer/md (plus et dagligt loft) på gpt-4o-mini. Hvis du rammer fair-use-loftet, returnerer Studio et mock/demo-resultat indtil daglig eller månedlig reset — eller opgrader / brug Enterprise BYOK til højere volumen.',
      },
      {
        q: 'Er checkout sikkert?',
        a: 'Betalinger behandles af Waffo Pancake (merchant of record).',
      },
      {
        q: 'Hvad sker der efter jeg betaler?',
        a: 'Du modtager adgangsbekræftelse; opfyldelse spores via webhook + ordrelogs.',
      },
    ],
  
    geoItems: [
      {
        q: 'Hvad producerer RegexProof?',
        a: 'Et struktureret politikudkast om værktøjer, datahåndtering og eskaleringsstier, du kan redigere.',
      },
      {
        q: 'Er det juridisk rådgivning?',
        a: 'Nej. Det er udkastshjælp. Politikker skal reviewes af counsel og risk owners.',
      },
      {
        q: 'Hvordan virker demotilstand?',
        a: 'Slå Demo til uden live AI; live-tilstand kræver en konfigureret nøgle.',
      },
      {
        q: 'Mapper det til EU AI Act?',
        a: 'Narrativer kan referere governance-temaer; det certificerer ikke Act-overensstemmelse.',
      },
      {
        q: 'Kan politikker versionsstyres?',
        a: 'Kørsler gemmer rulesetVersion og runId til ændringssporing.',
      },
      {
        q: 'Hvem bør bruge det?',
        a: 'Platform- og compliance-ingeniører der definerer agent-guardrails før produktion.',
      },
      {
        q: 'I hvilke lande/regioner?',
        a: 'Globalt tilgængelig; Waffo Pancake-betalinger kan variere regionalt.',
      },
      {
        q: 'GDPR-/privacy-compliant?',
        a: 'Input genererer kun dit output og sælges aldrig. Se Privacy; Enterprise kan inkludere DPA/NDA.',
      },
      {
        q: 'Hvilke sprog?',
        a: 'UI’en dækker ti locales. Udkast følger UI-sproget når live AI er konfigureret.',
      },
    ],
},
  footer: {
    product: 'Produkt',
    company: 'Virksomhed',
    resources: 'Ressourcer',
    legal: 'Juridisk',
    about: 'Om os',
    contact: 'Kontakt',
    privacy: 'Privatliv',
    terms: 'Vilkår',
    refund: 'Refusion',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle rettigheder forbeholdes.',
    partOfFleet: 'Del af LX AI Micro-SaaS-flåden.',
  },
  signup: {
    title: 'Start smartere i dag',
    subtitle: 'Tilslut dig buildere der bruger RegexProof. Gratis at prøve — intet kort nødvendigt.',
    emailPlaceholder: 'Indtast din e-mail',
    saving: 'Gemmer…',
    cta: 'Kom i gang',
    trust: 'Betroet · Opsig når som helst',
  },
  feedback: {
    open: 'Feedback',
    title: 'Indsend feedback',
    blurb: 'Fortæl os hvad der virkede, hvad der brød, eller hvad du ønsker næste.',
    fullPage: 'Foretrækker du en fuld side?',
    openPage: 'Åbn /feedback',
    close: 'Luk feedback',
    helpful: 'Var dette resultat nyttigt?',
    yes: 'Ja',
    no: 'Nej',
    thanks: 'Tak for feedbacken.',
    commentPlaceholder: 'Valgfri en-linjes kommentar',
    generalTitle: 'Generel feedback',
    generalSub: 'Fortæl os hvad du synes',
    generalPh: 'Hvad kunne du lide, ikke lide, eller bemærke under brugen?',
    ideaTitle: 'Jeg har en idé',
    ideaSub: 'Foreslå en funktion eller forbedring',
    ideaPh: 'Beskriv din idé og det problem den ville løse…',
    issueTitle: 'Jeg fandt et problem',
    issueSub: 'Rapportér en fejl eller et problem',
    issuePh: 'Hvad skete der, hvad forventede du, og hvordan kan vi genskabe det?',
    submit: 'Send feedback',
    submitting: 'Sender…',
    done: 'Tak — feedback modtaget.',
    emailOptional: 'E-mail (valgfri)',
    category: 'Kategori',
    yourFeedback: 'Din feedback',
    attachment: 'Vedhæftning (valgfri)',

    back: '← Tilbage til feedbacktype',
    pickTitle: 'Hvilken feedback har du?',
    pickSub: 'Vælg én for at starte. Du kan tilføje detaljer og en præcis kategori i næste trin.',
    thanksTitle: 'Tak for din feedback!',
    thanksBody: 'Vi har modtaget den, og vores team følger snart op. Du er velkommen til at sende igen når som helst.',
    submitAnother: 'Send en mere',
    detailed: 'Detaljeret feedback',
    send: 'Send',
    sending: 'Sender...',
    thanksInline: 'Tak - registreret. Vi læser hver eneste.',
    errorInline: 'Kunne ikke sende lige nu. Brug Feedback-knappen eller /feedback.',
    inlineCommentPh: 'Én linje: hvad bør vi forbedre? (valgfri)',
  },
  legal: {
    privacyPolicy: 'Privatlivspolitik',
    generatePolicy: 'Generér politik',
    controller: 'Dataansvarlig',
    processor: 'Databehandler',
    processing: 'Behandling',
    personalData: 'Personoplysninger',
    dataSubject: 'Registreret',
    dpo: 'Databeskyttelsesrådgiver',
    checklist: 'Compliance-tjekliste',
    policyChecks: 'Regex-sikkerhedstjek',
    encodePolicy: 'Kod dine mønsterregler',
    definitionTitle: 'RegexProof — definition',
    whatItIs: 'Hvad det er',
    whatNotTitle: 'Hvad dette IKKE er',
    whatNot1: 'Ikke et advokatfirma, GRC-platform eller ISO-certificeringsorgan.',
    whatNot2: 'Ikke en garanti for, at udkastede politikker tilfredsstiller enhver tilsynsmyndighed eller revisor.',
    whatNot3: 'Ikke en formel verificator — behandle genererede regex som udrafts under ingeniør-gennemgang.',
    rolesHint: 'Når pakker nævner privatlivsroller, bruger vi GDPR Art.4-betegnelser: Dataansvarlig og Databehandler (kun beslutningsstøtte).',
  },
  benchmark: {
    frameworksEyebrow: 'Framework-mapping',
    frameworksTitle: 'Dialekter afviger. Mønstre bryder stille.',
    frameworksNote: 'Beslutningsstøttende temaer — ikke en fuldstændighedsgaranti eller formel bevis.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'ReDoS-heuristik',
    fw4: 'Dialekt fældende opkald',
    painEyebrow: 'Hvorfor regex bidder',
    painTitle: 'Mønstre ser fine ud. Produktionen hænger senere.',
    pain1Title: 'Dialekt fælder',
    pain1Body: 'Lookahead, possessive og Unicode-klasser adskiller sig mellem ECMAScript og PCRE-motorer.',
    pain2Title: 'ReDoS-risiko',
    pain2Body: 'Indbyrdes kvantorer på upålidelig input kan låse begivenhedssløjfer og API\'er.',
    pain3Title: 'Uigennemsigtige one-liners',
    pain3Body: 'Selvskreven regex uden del-for-del forklaring er svær at gennemgå sikkert.',
    pain4Title: 'Problemer efter udskibning',
    pain4Body: 'Timeouts og forkerte match often viser sig kun under fjendtlige eller rodede data.',
    getEyebrow: 'Hvad du får',
    getTitle: 'Beskriv. Forfalsk. Gennemgå.',
    getLead: 'Plain-sprog til regex med sikkerhedsadvarsler — gennemgå før produktion.',
    get1Title: 'Arbejdsmønsterudkast',
    get1Body: 'En dialekt-bevidst regex-startpunkt for din sprogflavor.',
    get2Title: 'Del-for-del forklaring',
    get2Body: 'Læselig opbrud, så anmeldere kan udfordre antagelser.',
    get3Title: 'ReDoS-heuristik',
    get3Body: 'Markerer nestede kvantificatorer og katastrofale tilbagesporingsformer.',
    get4Title: 'Dialektfælder',
    get4Body: 'ECMAScript vs PCRE-forskelle fremhævet — beslutningsstøtte, ikke en bevis.',
    featuresEyebrow: 'Hvorfor RegexProof',
    featuresTitle: 'Alt, hvad du behøver for at skabe sikrere regex',
    featuresBlurb: 'Bygget til ingeniører, der har brug for dialekt og ReDoS-opkald uden en forskningskaninhus.',
    howTitle: 'RegexProof — Sådan virker det',
    how1Title: 'Indsæt',
    how1Body: 'Indsæt politiktekst og vælg domæne.',
    how2Title: 'Kod',
    how2Body: 'Generér agent-tilgængelige kontroller og en valideringsfejlliste.',
    how3Title: 'Gennemfør',
    how3Body: 'Forbind regler til din agent runtime; behold mennesker for undtagelser.',
    allPlansTitle: 'Alle betalte planer inkluderer',
    allPlans1: 'NL→regex studio',
    allPlans2: 'Dialekt fældetrapsopkald',
    allPlans3: 'ReDoS heuristik (beslutningsstøtte)',
    allPlans4: 'E-mail support på betalte planer — ingen skjulte tillæg til kerne-studio-brug',
    honestyTitle: 'Ærlige grænser',
    honestyLead: 'RegexProof er et udarbejdningsværktøj: tilpas, fuzz og gennemse før afsendelse til upålidelig input.',
    ctaStudio: 'Åbn studio',
  },
  home: {
    whyEyebrow: 'Hvorfor {{name}}',
    featuresHeading: 'Alt, hvad du har brug for til sikrere applikationsregex',
    featuresCardBlurb: 'Bygget til ingeniører, der har brug for forklaringer og ReDoS-hints uden en læringskurve.',
    howHeading: 'Fra beskrivelse til sikrere mønster i 3 trin',
    how1Title: 'Indsæt politik',
    how1Desc: 'Slip en almindelig-sproglig match-intent og dialekt ind.',
    how2Title: 'Kompilér regler',
    how2Desc: 'Deterministiske heuristikker plus valgfrit model-assisteret narrativ.',
    how3Title: 'Håndhæv',
    how3Desc: 'Eksportér utkastet med opkald - ikke en kompletgaranti.',
    studioEyebrow: 'Live-studio',
    studioHeading: 'Prøv det på denne side',
    studioWatchDemo: 'Se demo',
    studioOrRun: 'eller kør et check nedenfor.',
    studioFormTitle: 'Regex-værksted',
    demoMode: 'Demo-tilstand (ikke live AI)',
    socialHeading: 'Bygget til omhyggelige mønsterforfattere',
    socialNote: 'Social bevis bruger skabeloner, indtil der findes ægte, samtykkende anmeldelser.',
    quickAnswers: 'Hurtige svar',
    howCompares: 'Sammenligning',
    dimension: 'Dimension',
    manual: 'Manuel',
    whenNotToUse: 'Hvornår du ikke bør bruge:',
    peopleAlsoSearch: 'Folk søger også',





































































































































    leadsInbox: "Leads-indbakke (demo-CRUD)",
    filterEmail: "Filtrer e-mail…",
    allPlans: "Alle planer",
    noLeads: "Ingen leads endnu — indsend tilmeldingsformularen.",
    colEmail: "E-mail",
    colPlan: "Plan",
    colSource: "Kilde",
    delete: "Slet",
    deleteLeadTitle: "Slet lead",
    deleteLeadWarn: "Denne handling kan ikke fortrydes.",
    deleteLeadBody: "Slet denne lead? E-mailen fjernes permanent fra dine kontakter.",
    cancel: "Annuller",
    relatedReading: "Relateret læsning",
    productTour: "Produktrundvisning",
    productDemo: "PRODUKTDEMO",
    stepOf: "trin {{n}}/{{total}}",
    replay: "Afspil igen",
    tryStudio: "Prøv studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtreret",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuel",
    geoCmp1Dim: "Hastighed",
    geoCmp1Manual: "Timer til dage",
    geoCmp1Tool: "Minutter pr. kørsel",
    geoCmp2Dim: "Konsistens",
    geoCmp2Manual: "Varierer pr. person",
    geoCmp2Tool: "Samme regelsæt hver gang",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Fritekst",
    geoCmp3Tool: "Struktureret, eksporterbart resultat",
    geoCmp4Dim: "Bedst til",
    geoCmp4Manual: "Endelig godkendelse",
    geoCmp4Tool: "Første beslutningsstøtte",
    related1Title: "AI-indpakning vs grav",
    related1Desc: "politikoverholdelse som en varig grav.",
    related2Title: "EU AI Act overholdelsestjekliste",
    related2Desc: "kortlæg agenters pligter til aktens temaer.",
    related3Title: "Wave 1 lancering",
    related3Desc: "RegexProof leveres sammen med styringsklyngen.",
    feat1: "Politik-til-regler",
    feat2: "Overholdelsestjekliste",
    feat3: "EU AI Act kortlægning",
    feat4: "Eksportable regler",
    geoQa1: "Politik-til-regler",
    geoQa2: "Overholdelsestjekliste",
    geoQa3: "EU AI Act kortlægning",
    geoQa4: "Eksportable regler",
    geoQa5: "Prisen starter ved $0 (Free).",
    geoLt1: "hvad er RegexProof",
    geoLt2: "hvordan fungerer RegexProof",
    geoLt3: "hvor meget koster RegexProof",
    geoLt4: "er RegexProof free",
    geoLt5: "RegexProof vs at gøre det manuelt",
    geoWhenNot: "Brug kvalificeret menneskelig gennemgang i stedet — det er en udarbejdelseshjælp. Politikker skal gennemgås af din juridiske rådgiver og risikoejere.",
    demo1Title: "Velkommen til {{name}}",
    demo1Detail: "En 60-sekunders rundvisning i, hvordan {{name}} omdanner politik til agentkontroller.",
    demo2Title: "Åbn live-studiet",
    demo2Detail: "Indsæt politiktekst og vælg et domæne.",
    demo3Title: "Klik Generate checks",
    demo3Detail: "Drevet af Politik-til-regler og overholdelsestjeklister.",
    demo4Title: "Politiktjek forhåndsvisning",
    demo4Detail: "Eksempeloutput fra dette produkts regelbaserede pipeline:",
    demo4DetailEmpty: "Dine politikttjek vises her — kopier eller forbedr.",
    demo5Title: "Din tur",
    demo5Detail: "Prøv live-studiet, eller kom i gang med {{name}}.",
  },
  chat: {
    typing: 'Assistenten skriver…',
    placeholder: 'Skriv dit spørgsmål… (Enter for at sende)',
    openAria: 'Åbn AI-assistent',
    openTitle: 'Spørg vores AI-assistent',
    closeAria: 'Luk',
    escalated: 'Vi har forbundet dig med en menneskelig agent. Vi følger op på e-mail.',
    s1: 'Hvad gør dette værktøj?',
    s2: 'Hvad koster det?',
    s3: 'Findes der en gratis plan?',
  },
  pages: {
    howTitle: 'RegexProof — Sådan virker det',
    howDesc: 'Sådan virker RegexProof i tre trin.',
    howEyebrow: 'Sådan virker det',
    howH1: 'Fra input til resultat i 3 trin',
    how1Title: 'Indsæt',
    how1Body: 'Indsæt policy-tekst og vælg domæne.',
    how2Title: 'Kodér',
    how2Body: 'Generér agent-kaldbare checks og en compliance-checkliste.',
    how3Title: 'Håndhæv',
    how3Body: 'Sæt regler ind i agent-runtime; behold mennesker til undtagelser.',
    subscribe: 'Abonnér',
    ucTitle: 'RegexProof — Brugsscenarier',
    ucDesc: 'Hvordan RegexProof hjælper compliance- og agentplatform-teams.',
    ucEyebrow: 'Brugsscenarier',
    ucH1: 'Bygget til compliance- og agentplatform-teams',
    ucIntro: 'Vælg dit segment for at se de workflows, der betyder mest.',
    uc1Title: 'Finance-policies',
    uc1Pain: 'Refunderinger og godkendelser skal være maskincheckbare.',
    uc1Help: 'Udtræk betingelser + handlinger, agents kan evaluere.',
    uc2Title: 'HR-/sikkerhedspolitikker',
    uc2Pain: 'Har brug for checklister, agents kan kalde.',
    uc2Help: 'Domænevælger fokuserer udtrækningen.',
    uc3Title: 'EU AI-funktioner',
    uc3Pain: 'Map højrisiko-regler til AI Act-temaer.',
    uc3Help: 'Kun beslutningsstøtte-mapping.',
    uc4Title: 'Platform-teams',
    uc4Pain: 'Policy-PDF’er når aldrig runtime.',
    uc4Help: 'Eksporterbare regler til agent-værktøjer.',
    painLabel: 'Smerte:',
    helpLabel: 'Sådan hjælper RegexProof:',
    ucRefs: 'Kilder: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integrationer',
    intDesc: 'RegexProof-eksportmål, API og BYOK-muligheder.',
    intEyebrow: 'Integrationer',
    intH1: 'Sæt ind i din stak',
    intIntro: 'Kun ærlige integrationer er listet. Vi annoncerer ikke connectorer, der endnu ikke er leveret.',
    int1Title: 'Eksporterbare regler',
    int1Body: 'JSON/checkliste-eksport til agent-værktøjer.',
    int2Title: 'API',
    int2Body: 'Regenerér når policies ændrer sig.',
    int3Title: 'EU AI Act-mapping',
    int3Body: 'Pegere til højrisiko-temaer.',
    int4Title: 'BYOK',
    int4Body: 'Server-side nøgler når tilbudt.',
    intHonesty: 'Ærlighedsnote: Runtime-håndhævelse er dit systems job; vi genererer kandidat-checks.',
    secTitle: 'RegexProof — Sikkerhed & compliance',
    secDesc: 'Hvordan RegexProof håndterer dine data og dens ærlige compliance-holdning.',
    secEyebrow: 'Sikkerhed & compliance',
    secH1: 'Dine data, vores holdning',
    secIntro: 'RegexProof behandler de inputs, du indsender til analyse. Denne side siger klart, hvad vi håndterer, og hvad vi ikke påstår.',
    secHandleH2: 'Hvad vi håndterer',
    secHandleBody: 'virksomhedspolicy-tekst og domænevalg brugt til at generere agent-håndhævelige checks.',
    secDataH2: 'Forpligtelser for databehandling',
    secData1: 'Indsendelser kører produktpipelinen og gemmes kun så længe dit audit-log kræver (betalte tiers), eller indtil du sletter kørslen.',
    secData2: 'Vi anvender adgangskontroller i overensstemmelse med GDPR Art. 32, hvor persondata behandles.',
    secData3: 'BYOK-nøgler (Enterprise), når tilbudt, gemmes kun server-side og eksponeres aldrig i browseren.',
    secHonesty: 'Ærlighedsregel: RegexProof gør policy-tekst til kandidatregler. Vi garanterer ikke korrekt håndhævelse, 100 % dækning eller at agents aldrig misser en overtrædelse.',
    secPostureH2: 'Vores compliance-holdning',
    secPosture1: 'RegexProof er beslutningsstøtte, ikke et advokatfirma, klinik eller certificeret revisor.',
    secPosture2: 'For bindende rådgivning: konsulter en kvalificeret fagperson i det relevante domæne.',
    secSubH2: 'Underleverandører & betalinger',
    secSub1: 'Betalinger behandles af Waffo Pancake (merchant of record).',
    secSub2: 'Se Privacy og Terms for fulde vilkår.',
    secRefs: 'Kilder: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Tilbage til forsiden',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Definerende og hvordan-til-posts om ECMAScript vs PCRE-fælder, ReDoS-heuristikker og ærlige regex-grænser for udarbejdelse.',
    glanceTitle: 'Hvad indeholder dette produkt i overblik?',
    glance1: 'Definition på hverdagssprog, FAQ og referencer til answer engines',
    glance2: '3 gennemgåelige workflow-trin (input → generér → review)',
    glance3: 'Beslutningsstøtte-output — du forbliver i loopet; ingen opdigtede brugerantal',
    eyebrow: 'Blog · GEO',
    h1: 'Sikrere applikationsregex, forklaret',
    lead: 'Ejerskab af definitoriske forespørgsler, som teams stiller, før de indsætter en mønster i produktionsparse.',
    targetQuery: 'Målforespørgsel:',
    guidesTitle: 'Hvilke GEO deep-dives bør du læse først?',
    guidesLead: 'Lange form-forklaringer om dialektfælder og ReDoS-heuristikker med beslutningsstøttende disclaimer.',
    footerNote: 'Publish + syndicate per gtm-launch (IH + GEO-indekser). Hvert indlæg har 3 autoritative refs.',
    post1Title: 'AI-agent-policy-packs og NIST AI RMF',
    post1Desc: 'Hvordan policy-packs mapper til NIST AI RMF-funktioner og EU AI Act-temaer — beslutningsstøtte, ikke et certifikat.',
    post2Title: 'Tilladte værktøjer vs. åbne agents',
    post2Desc: 'Hvorfor begrænsning af agent-værktøjsadgang er en kontrol, ikke en feature-toggle — med ærlighedsregler for åbne agents.',
    readI18n: 'Læs flersproget version',
    readEnHtml: 'Læs fuld engelsk artikel',
    pillarSlug: 'ecmascript-vs-pcre-dialektfaeld-2026',
    pillarEyebrow: 'af RegexProof (LX AI)',
    pillarH1: 'ECMAScript vs PCRE dialektfælder',
    pillarLead: 'Det samme regex kan betyde forskellige ting på tværs af motorer. Kend fælderne, før du kopierer et Stack Overflow-svar ind i Node eller Python.',
    pillarH2a: 'Lookahead og possessive forskelle',
    pillarPa1: 'PCRE possessive kvantificatorer og nogle lookbehind-former mangler eller adskiller sig i ECMAScript — valider på målmotoren.',
    pillarH2b: 'Unicode og ordgrænser',
    pillarPb1: '\\\\\\\\w og Unicode-ejendomsekskaper opfører sig forskelligt; fastgør flags og dialekt eksplitt.',
    pillarH2c: 'Nylinje og dotall-tilstande',
    pillarPc1: 'Punkt matcher ikke nylinje på samme måde på tværs af smagsretninger — dokument forventet linjebehandling.',
    pillarH2d: 'Test på den rigtige motor',
    pillarPd1: 'Kør altid samples igen på produktionsregex-motoren efter udarbejdning.',
    pillarDisclaimer: 'Beslutningsstøtte kun — ikke en formel verificator.',
    pillarFaq1Q: 'Kan én regex være portabel overalt?',
    pillarFaq1A: 'Sjældent. Foretræk dialect-specifikke udarbejdninger og tests per runtime.',
    pillarFaq2Q: 'Beviser RegexProof korrekthed?',
    pillarFaq2A: 'Nej. Det udarbejder og markerer risici; ingeniører ejer verificering.',
    pillar2Slug: 'redos-heuristiker-til-applikationsregex-2026',
    pillar2Eyebrow: 'ReDoS-heuristiker',
    pillar2H1: 'ReDoS-heuristik til applikationsregex',
    pillar2Lead: 'Indlejrede kvantorer på utroværdig input kan låse servere. Heuristikker hjælper med at spotte risikable mønstre, før de rammer produktion',
    pillar2H2a: 'Indlejrede kvantorer',
    pillar2Pa1: '(a+)+b-stil-indlejring er et klassisk katastrofalt tilbagesporingsmønster',
    pillar2H2b: 'Alternationsbomber',
    pillar2Pb1: 'Overlappende alternationer med kvantorer forstærker tilbagesporingsveje',
    pillar2H2c: 'Tidsgrænser og begrænsninger',
    pillar2Pc1: 'Par sikrere mønstre med inputstørrelsesbegrænsninger og motor-tidsgrænser',
    pillar2H2d: 'Fuzz adversarial input',
    pillar2Pd1: 'Heuristic flags er start — fuzz med tilpassede strenge før du stoler på et mønster.',
    pillar2Disclaimer: 'Beslutningsstøttede udkast. Ingen fuldstændighedsgaranti.',
    pillar2Faq1Q: 'Er heuristikker nok?',
    pillar2Faq1A: 'Nej. Kombiner med tidsbegrænsninger, størrelsesbegrænsninger og gennemgang.',
    pillar2Faq2Q: 'Hvorfor fokusere på applikationsregex?',
    pillar2Faq2A: 'Brugerstyret input gør ReDoS til en tilgængelighedsrisiko, ikke kun en stilproblematik.',
    pillar2Back: 'Tilbage til blog',
    pillarBack: 'Tilbage til bloggen',
    card1Title: 'Hvad er dialektbevidst regex-udkastning?',
    card1Body: 'Genererer en mønster med eksplisit ECMAScript vs PCRE-formodninger og kanter tilfælde — beslutningsstøtte, ikke en formel verificator.',
    card2Title: 'ReDoS-bevidst udkastning',
    card2Body: 'Beskriv matchen; få en kandidat regex med del-for-del forklaring og ReDoS-heuristikker — ikke en fuldstændighedsgaranti.',
  },
} as const

export default da as unknown as Messages
