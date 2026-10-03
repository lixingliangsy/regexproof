// locales/nl.ts — RegexProof full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const nl = {
  meta: {
    title: 'RegexProof · Zet bedrijfsbeleid om in agent-afgedwongen regels',
    description: 'RegexProof leest je bedrijfsbeleidstekst en genereert agent-aanroepbare policy-checks plus een compliance-checklist, gekoppeld aan verplichtingen onder de EU AI Act — zodat beleid uitvoerbaar wordt, niet alleen een PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Zet bedrijfsbeleid om in agent-afgedwongen regels',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Terug naar hub',
    home: 'Home',
    features: 'Functies',
    useCases: 'Use cases',
    integrations: 'Integraties',
    howItWorks: 'Zo werkt het',
    studio: 'Studio',
    security: 'Beveiliging',
    pricing: 'Prijzen',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Inloggen',
    subscribe: 'Abonneren',
    getStarted: 'Aan de slag',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Zet bedrijfsbeleid om in agent-afgedwongen regels',
    subtitle: 'RegexProof leest je bedrijfsbeleidstekst en genereert agent-aanroepbare policy-checks plus een compliance-checklist, gekoppeld aan verplichtingen onder de EU AI Act — zodat beleid uitvoerbaar wordt, niet alleen een PDF.',
    keyTakeaways: 'Belangrijkste punten',
    takeaway1: 'Zet bedrijfsbeleid om in agent-afgedwongen regels — zonder code.',
    takeaway2: 'Guardrails koppelen aan agent-workflows en falen gesloten bij overtredingen.',
    takeaway3: 'Ga aan de slag; Pro vanaf $29/maand.',
    ctaPrimary: 'Abonneren',
    ctaSecondary: 'Demo bekijken',
    note: 'Geen creditcard vereist · Altijd opzegbaar',
    playDemo: 'Demo afspelen ▶',
    walkthrough: 'Klik om de rondleiding te bekijken',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Gem. beoordeling',
    uptime: 'Uptime',
    timeToValue: 'Tijd tot waarde',
  },
  pricing: {
    heading: 'Eenvoudige plannen die meegroeien',
    monthly: 'Maandelijks',
    yearly: 'Jaarlijks',
    perMonth: '/mnd',
    mostPopular: 'Meest populair',
    getPro: 'Pro nemen',
    orYearly: 'Of jaarlijks betalen — ${{amount}}/mnd',
    custom: 'Op maat',
    contactSales: 'Sales contacteren',
    configureByok: 'BYOK configureren',
    getStarted: 'Aan de slag',
    freeForever: 'voor altijd gratis',
    billedMonthly: 'maandelijks gefactureerd',
    save: 'bespaar',
    freeFeat1: 'Beperkte dagelijkse AI-runs (10/dag · 50/mnd)',
    freeFeat2: 'Studio-demo (geen extra LLM-kosten)',
    proFeat1: 'AI inbegrepen: 300 gens/mnd · fair use (gpt-4o-mini)',
    proFeat2: 'Geen apart ChatGPT-abonnement nodig',
    proFeat3: 'Priority support · 2 maanden gratis bij jaarbetaling',
    entFeat1: 'Teamstoelen · API-toegang (roadmap)',
    entFeat2: 'Optionele BYOK (jouw OpenAI-sleutel)',
  },
  faq: {
    title: 'Jouw vragen, beantwoord',
    geoTitle: 'RegexProof — veelgestelde vragen',
    items: [
      {
        q: 'Wat genereert RegexProof?',
        a: 'Een dialect-gevoelige regex-ontwerp met stap-voor-stap uitleg, ECMAScript vs PCRE-valkuilen en ReDoS-heuristieken - beslissingsondersteuning, geen formeel verificatieprogramma.',
      },
      {
        q: 'Is dit juridisch advies of een certificering?',
        a: 'Nee. Output is besluitvormingsondersteuning. Laat counsel en risicofunctionarissen reviewen vóór productie. We claimen geen ISO-, CMP- of toezichtcertificering.',
      },
      {
        q: 'Kan ik altijd opzeggen?',
        a: 'Ja. Self-serve-plannen zeg je altijd op; toegang blijft tot het einde van de periode.',
      },
      {
        q: 'Heb ik een creditcard nodig om te starten?',
        a: 'Nee. Start met e-mailregistratie of Demo-modus in de studio, upgrade wanneer je klaar bent.',
      },
      {
        q: 'Heb ik een eigen ChatGPT-/OpenAI-abonnement nodig?',
        a: 'Nee voor Free/Pro. AI-runs zitten in je plan (fair use) via onze platformsleutel. Enterprise kan optioneel een eigen OpenAI-sleutel (BYOK) meenemen — configureer via /settings (sleutel blijft alleen server-side).',
      },
      {
        q: 'Wat is Fair Use / wat als ik de AI-limiet raak?',
        a: 'Pro bevat ongeveer 300 AI-generaties/maand (plus een dagelijks plafond) op gpt-4o-mini. Bij fair-use-limiet geeft Studio een mock/demo-resultaat tot de dagelijkse of maandelijkse reset — of upgrade / gebruik Enterprise BYOK voor hoger volume.',
      },
      {
        q: 'Is checkout veilig?',
        a: 'Betalingen worden verwerkt door Waffo Pancake (merchant of record).',
      },
      {
        q: 'Wat gebeurt er na betaling?',
        a: 'Je ontvangt toegangsbevestiging; fulfillment wordt gevolgd via webhook + orderlogs.',
      },
    ],
  
    geoItems: [
      {
        q: 'Wat produceert RegexProof?',
        a: 'Een gestructureerd beleidconcept over tools, datahandling en escalatiepaden dat u kunt bewerken.',
      },
      {
        q: 'Is dit juridisch advies?',
        a: 'Nee. Het is opstelhulp. Beleid moet door counsel en risk owners worden beoordeeld.',
      },
      {
        q: 'Hoe werkt demomodus?',
        a: 'Zet Demo aan zonder live AI; live modus vereist een geconfigureerde key.',
      },
      {
        q: 'Mapt het naar de EU AI Act?',
        a: 'Narratieven kunnen governancethema’s noemen; het certificeert geen Act-conformiteit.',
      },
      {
        q: 'Kunnen policies worden geversionneerd?',
        a: 'Runs bewaren rulesetVersion en runId voor wijzigingstracking.',
      },
      {
        q: 'Wie zou het moeten gebruiken?',
        a: 'Platform- en compliance-engineers die agent-guardrails vóór productie definiëren.',
      },
      {
        q: 'In welke landen/regio’s?',
        a: 'Wereldwijd bereikbaar; Waffo Pancake-betalingen kunnen regionaal verschillen.',
      },
      {
        q: 'AVG-/privacyconform?',
        a: 'Inputs genereren alleen uw output en worden nooit verkocht. Zie Privacy; Enterprise kan DPA/NDA omvatten.',
      },
      {
        q: 'Welke talen?',
        a: 'De UI dekt tien locales. Concepten volgen de UI-taal als live AI is geconfigureerd.',
      },
    ],
},
  footer: {
    product: 'Product',
    company: 'Bedrijf',
    resources: 'Bronnen',
    legal: 'Juridisch',
    about: 'Over ons',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    refund: 'Restitutie',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle rechten voorbehouden.',
    partOfFleet: 'Onderdeel van de LX AI Micro-SaaS-vloot.',
  },
  signup: {
    title: 'Start vandaag slimmer',
    subtitle: 'Sluit je aan bij builders die RegexProof gebruiken. Gratis te proberen — geen kaart nodig.',
    emailPlaceholder: 'Voer je e-mail in',
    saving: 'Opslaan…',
    cta: 'Aan de slag',
    trust: 'Betrouwbaar · Altijd opzegbaar',
  },
  feedback: {
    open: 'Feedback',
    title: 'Feedback sturen',
    blurb: 'Vertel wat werkte, wat kapot was, of wat je als volgende wilt.',
    fullPage: 'Liever een volledige pagina?',
    openPage: 'Open /feedback',
    close: 'Feedback sluiten',
    helpful: 'Was dit resultaat nuttig?',
    yes: 'Ja',
    no: 'Nee',
    thanks: 'Bedankt voor de feedback.',
    commentPlaceholder: 'Optionele éénregelige opmerking',
    generalTitle: 'Algemene feedback',
    generalSub: 'Vertel wat je denkt',
    generalPh: 'Wat vond je leuk, niet leuk, of wat viel je op tijdens gebruik?',
    ideaTitle: 'Ik heb een idee',
    ideaSub: 'Stel een functie of verbetering voor',
    ideaPh: 'Beschrijf je idee en het probleem dat het oplost…',
    issueTitle: 'Ik vond een probleem',
    issueSub: 'Meld een bug of probleem',
    issuePh: 'Wat gebeurde er, wat verwachtte je, en hoe reproduceren we het?',
    submit: 'Feedback versturen',
    submitting: 'Verzenden…',
    done: 'Bedankt — feedback ontvangen.',
    emailOptional: 'E-mail (optioneel)',
    category: 'Categorie',
    yourFeedback: 'Jouw feedback',
    attachment: 'Bijlage (optioneel)',

    back: '← Terug naar feedbacktype',
    pickTitle: 'Welke feedback heb je?',
    pickSub: 'Kies er één om te starten. Je kunt details en een precieze categorie in de volgende stap toevoegen.',
    thanksTitle: 'Bedankt voor je feedback!',
    thanksBody: 'We hebben het ontvangen en ons team volgt binnenkort op. Je mag altijd opnieuw indienen.',
    submitAnother: 'Nog een indienen',
    detailed: 'Gedetailleerde feedback',
    send: 'Versturen',
    sending: 'Verzenden...',
    thanksInline: 'Bedankt - vastgelegd. We lezen elke inzending.',
    errorInline: 'Kon nu niet verzenden. Gebruik de Feedback-knop of /feedback.',
    inlineCommentPh: 'Eén regel: wat moeten we verbeteren? (optioneel)',
  },
  legal: {
    privacyPolicy: 'Privacybeleid',
    generatePolicy: 'Beleid genereren',
    controller: 'Verwerkingsverantwoordelijke',
    processor: 'Verwerker',
    processing: 'Verwerking',
    personalData: 'Persoonsgegevens',
    dataSubject: 'Betrokkene',
    dpo: 'Functionaris voor gegevensbescherming',
    checklist: 'Compliance-checklist',
    policyChecks: 'Regex-veiligheidscontroles',
    encodePolicy: 'Codeer uw patroonregels',
    definitionTitle: 'RegexProof — definitie',
    whatItIs: 'Wat het is',
    whatNotTitle: 'Wat dit NIET is',
    whatNot1: 'Geen advocatenkantoor, GRC-platform of ISO-certificeringsinstantie.',
    whatNot2: 'Geen garantie dat opgestelde policies elke toezichthouder of auditor tevredenstellen.',
    whatNot3: 'Geen formele verificatie — behandel gegenereerde regex als ontwerpen onder ingenieursbeoordeling.',
    rolesHint: 'Wanneer packs privacyrollen noemen, gebruiken we GDPR Art.4-labels: Verwerkingsverantwoordelijke en Verwerker (alleen besluitvormingsondersteuning).',
  },
  benchmark: {
    frameworksEyebrow: 'Framework-mapping',
    frameworksTitle: 'Dialecten verschillen. Patronen breken stil.',
    frameworksNote: 'Beslissingsondersteunende thema\'s — geen garantie voor volledigheid of formele bewijs.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'ReDoS-heuristieken',
    fw4: 'Dialectvalherinneringen',
    painEyebrow: 'Waarom regex bijt',
    painTitle: 'Patronen zien er goed uit. Productie hangt later.',
    pain1Title: 'Dialectvalkuilen',
    pain1Body: 'Lookahead, possessieve en Unicode-klassen verschillen tussen ECMAScript- en PCRE-motoren.',
    pain2Title: 'ReDoS-risico',
    pain2Body: 'Geneste quantificators in onbetrouwbare invoer kunnen event loops en API\'s lamleggen.',
    pain3Title: 'Ondoorzichtige one-liners',
    pain3Body: 'Handgeschreven regex zonder stap-voor-stap-uitleg is moeilijk veilig te controleren.',
    pain4Title: 'Problemen na levering',
    pain4Body: 'Time-outs en verkeerde overeenkomsten komen vaak alleen voor bij vijandige of rommelige gegevens.',
    getEyebrow: 'Wat je krijgt',
    getTitle: 'Beschrijf. Maak. Controleer.',
    getLead: 'Van gewoon Nederlands naar regex met veiligheidsopmerkingen — controleer voor productie.',
    get1Title: 'Werkend patroonontwerp',
    get1Body: 'Een dialect-gevoelige regex-startpunt voor je taalvariant.',
    get2Title: 'Uitgebreide stap-voor-stap uitleg',
    get2Body: 'Leesbare onderverdeling zodat beoordelaars aannames kunnen betwisten.',
    get3Title: 'ReDoS-heuristieken',
    get3Body: 'Vlaggen geneste quantifiers en catastrofale backtracking-vormen.',
    get4Title: 'Dialect-valkuilen',
    get4Body: 'ECMAScript vs PCRE-verschillen worden aangeroepen — beslissingsondersteuning, geen bewijs.',
    featuresEyebrow: 'Waarom RegexProof',
    featuresTitle: 'Alles wat u nodig heeft om veiligere regex te maken',
    featuresBlurb: 'Gebouwd voor ingenieurs die dialect- en ReDoS-aanroepen nodig hebben zonder een onderzoeks konijnengat.',
    howTitle: 'RegexProof — Hoe het werkt',
    how1Title: 'Plakken',
    how1Body: 'Plak beleidstekst en kies domein.',
    how2Title: 'Coderen',
    how2Body: 'Genereer agent-aanroepbare controles en een validatiefoutenlijst.',
    how3Title: 'Afdwingen',
    how3Body: 'Verbind regels met uw agent-runtime; houd mensen voor uitzonderingen.',
    allPlansTitle: 'Alle betaalde plannen bevatten',
    allPlans1: 'NL→regex studio',
    allPlans2: 'Dialect val callouts',
    allPlans3: 'ReDoS heuristieken (beslissingsondersteuning)',
    allPlans4: 'E-mailondersteuning voor betaalde abonnementen — geen verborgen add-ons voor core studio-gebruik',
    honestyTitle: 'Eerlijke grenzen',
    honestyLead: 'RegexProof is een hulpmiddel voor het opstellen: aanpassen, fuzz en beoordelen voordat u deze naar onbetrouwbare invoer verzendt.',
    ctaStudio: 'Studio openen',
  },
  home: {
    whyEyebrow: 'Waarom {{name}}',
    featuresHeading: 'Alles wat u nodig heeft voor veiligere applicatie-reguliere expressies',
    featuresCardBlurb: 'Gebouwd voor ingenieurs die uitleg en ReDoS-hints nodig hebben zonder een leercurve.',
    howHeading: 'Van beschrijving naar veiliger patroon in 3 stappen',
    how1Title: 'Beleid plakken',
    how1Desc: 'Plaats een plain-English overeenkomstintent en dialect.',
    how2Title: 'Regels compileren',
    how2Desc: 'Deterministische heuristieken plus optionele model-ondersteunde narratief.',
    how3Title: 'Afdwingen',
    how3Desc: 'Exporteer de concept met callouts — geen garantie voor volledigheid.',
    studioEyebrow: 'Live-studio',
    studioHeading: 'Probeer het op deze pagina',
    studioWatchDemo: 'Demo bekijken',
    studioOrRun: 'of voer hieronder een check uit.',
    studioFormTitle: 'Regex smederij',
    demoMode: 'Demo-modus (geen live AI)',
    socialHeading: 'Gebouwd voor zorgvuldige patroonauteurs',
    socialNote: 'Sociale bewijs gebruikt sjablonen totdat er echte, geconsenteerde getuigenissen bestaan.',
    quickAnswers: 'Snelle antwoorden',
    howCompares: 'Vergelijking',
    dimension: 'Dimensie',
    manual: 'Handmatig',
    whenNotToUse: 'Wanneer niet gebruiken:',
    peopleAlsoSearch: 'Mensen zoeken ook',





































































































































    leadsInbox: "Leads-inbox (demo-CRUD)",
    filterEmail: "Filter e-mail…",
    allPlans: "Alle plannen",
    noLeads: "Nog geen leads — dien het aanmeldformulier in.",
    colEmail: "E-mail",
    colPlan: "Plan",
    colSource: "Bron",
    delete: "Verwijderen",
    deleteLeadTitle: "Lead verwijderen",
    deleteLeadWarn: "Deze actie kan niet ongedaan worden gemaakt.",
    deleteLeadBody: "Deze lead verwijderen? Het e-mailadres wordt permanent uit je contacten gehaald.",
    cancel: "Annuleren",
    relatedReading: "Gerelateerde lectuur",
    productTour: "Productrondleiding",
    productDemo: "PRODUCTDEMO",
    stepOf: "stap {{n}}/{{total}}",
    replay: "Opnieuw",
    tryStudio: "Studio proberen",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} gefilterd",
    geoCmpDim: "Dimensie",
    geoCmpManual: "Handmatig",
    geoCmp1Dim: "Snelheid",
    geoCmp1Manual: "Uren tot dagen",
    geoCmp1Tool: "Minuten per run",
    geoCmp2Dim: "Consistentie",
    geoCmp2Manual: "Verschilt per persoon",
    geoCmp2Tool: "Zelfde regels elke run",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Vrije vorm",
    geoCmp3Tool: "Gestructureerd, exporteerbaar resultaat",
    geoCmp4Dim: "Het best voor",
    geoCmp4Manual: "Eindgoedkeuring",
    geoCmp4Tool: "Eerste beslissingsondersteuning",
    related1Title: "AI-wrapper vs gracht",
    related1Desc: "beleidsafdwinging als een duurzame gracht.",
    related2Title: "EU AI Act nalevingschecklist",
    related2Desc: "agent taken toewijzen aan onderwerpen van de EU AI Act.",
    related3Title: "Wave 1 lancering",
    related3Desc: "RegexProof wordt geleverd met het governance-cluster.",
    feat1: "Beleid-naar-regels",
    feat2: "Nalevingschecklist",
    feat3: "EU AI Act-mapping",
    feat4: "Exporteerbare regels",
    geoQa1: "Beleid-naar-regels",
    geoQa2: "Nalevingschecklist",
    geoQa3: "EU AI Act-mapping",
    geoQa4: "Exporteerbare regels",
    geoQa5: "Prijzen beginnen bij $0 (Free).",
    geoLt1: "wat is RegexProof",
    geoLt2: "hoe werkt RegexProof",
    geoLt3: "hoeveel kost RegexProof",
    geoLt4: "is RegexProof gratis",
    geoLt5: "RegexProof vs handmatig doen",
    geoWhenNot: "Gebruik in plaats daarvan gekwalificeerde menselijke review — het is een hulp bij het opstellen. Beleidsregels moeten worden beoordeeld door uw juridisch adviseur en risico-eigenaren.",
    demo1Title: "Welkom bij {{name}}",
    demo1Detail: "Een rondleiding van 60 seconden over hoe {{name}} beleid omzet in agentcontroles.",
    demo2Title: "Open de live studio",
    demo2Detail: "Plak beleidstekst en kies een domein.",
    demo3Title: "Klik op Generate checks",
    demo3Detail: "Aangedreven door beleid-naar-regels en nalevingschecklists.",
    demo4Title: "Voorbeeld van beleidscontroles",
    demo4Detail: "Voorbeeldoutput uit de regelgebaseerde pijplijn van dit product:",
    demo4DetailEmpty: "Uw beleidscontroles verschijnen hier — kopieer of verfijn.",
    demo5Title: "Jouw beurt",
    demo5Detail: "Probeer de live studio, of ga aan de slag met {{name}}.",
  },
  chat: {
    typing: 'Assistent typt…',
    placeholder: 'Typ je vraag… (Enter om te versturen)',
    openAria: 'AI-assistent openen',
    openTitle: 'Vraag onze AI-assistent',
    closeAria: 'Sluiten',
    escalated: 'We hebben je met een menselijke agent verbonden. We volgen op per e-mail.',
    s1: 'Wat doet deze tool?',
    s2: 'Wat kost het?',
    s3: 'Is er een gratis plan?',
  },
  pages: {
    howTitle: 'RegexProof — Hoe het werkt',
    howDesc: 'Hoe RegexProof in drie stappen werkt.',
    howEyebrow: 'Hoe het werkt',
    howH1: 'Van input naar resultaat in 3 stappen',
    how1Title: 'Plakken',
    how1Body: 'Plak policytekst en kies het domein.',
    how2Title: 'Coderen',
    how2Body: 'Genereer agent-aanroepbare checks en een compliance-checklist.',
    how3Title: 'Handhaven',
    how3Body: 'Koppel regels aan de agent-runtime; houd mensen voor uitzonderingen.',
    subscribe: 'Abonneren',
    ucTitle: 'RegexProof — Gebruiksscenario’s',
    ucDesc: 'Hoe RegexProof compliance- en agentplatformteams helpt.',
    ucEyebrow: 'Gebruiksscenario’s',
    ucH1: 'Gebouwd voor compliance- en agentplatformteams',
    ucIntro: 'Kies je segment om de workflows te zien die het meest tellen.',
    uc1Title: 'Finance-policy’s',
    uc1Pain: 'Refunds en goedkeuringen moeten machine-checkbaar zijn.',
    uc1Help: 'Haal voorwaarden + acties eruit die agents kunnen evalueren.',
    uc2Title: 'HR-/veiligheidspolicy’s',
    uc2Pain: 'Hebben checklists nodig die agents kunnen aanroepen.',
    uc2Help: 'Domeinkiezer focust de extractie.',
    uc3Title: 'EU AI-features',
    uc3Pain: 'Map high-risk regels naar AI Act-thema’s.',
    uc3Help: 'Alleen besluitondersteunende mapping.',
    uc4Title: 'Platformteams',
    uc4Pain: 'Policy-PDF’s bereiken nooit de runtime.',
    uc4Help: 'Exporteerbare regels voor agenttools.',
    painLabel: 'Pijnpunt:',
    helpLabel: 'Hoe RegexProof helpt:',
    ucRefs: 'Bronnen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integraties',
    intDesc: 'Exporttargets, API en BYOK-opties van RegexProof.',
    intEyebrow: 'Integraties',
    intH1: 'Koppel aan je stack',
    intIntro: 'Alleen eerlijke integraties. We adverteren geen connectoren die nog niet geleverd zijn.',
    int1Title: 'Exporteerbare regels',
    int1Body: 'JSON/checklist-export voor agenttools.',
    int2Title: 'API',
    int2Body: 'Opnieuw genereren wanneer policy’s wijzigen.',
    int3Title: 'EU AI Act-mapping',
    int3Body: 'Pointers voor high-risk thema’s.',
    int4Title: 'BYOK',
    int4Body: 'Serverside sleutels wanneer aangeboden.',
    intHonesty: 'Eerlijkheidsnotitie: runtime-handhaving is jouw systeemtaak; wij genereren kandidaat-checks.',
    secTitle: 'RegexProof — Beveiliging & compliance',
    secDesc: 'Hoe RegexProof je data verwerkt en zijn eerlijke compliance-houding.',
    secEyebrow: 'Beveiliging & compliance',
    secH1: 'Jouw data, onze houding',
    secIntro: 'RegexProof verwerkt de inputs die je indient voor analyse. Deze pagina zegt duidelijk wat we verwerken en wat we niet claimen.',
    secHandleH2: 'Wat we verwerken',
    secHandleBody: 'bedrijfspolicytekst en domeinkeuzes gebruikt om agent-afdwingbare checks te genereren.',
    secDataH2: 'Toezeggingen over gegevensverwerking',
    secData1: 'Inzendingen lopen door de productpipeline en worden alleen bewaard zolang je auditlog nodig heeft (betaalde tiers) of tot je de run verwijdert.',
    secData2: 'We passen toegangscontroles toe in lijn met AVG Art. 32 waar persoonsgegevens worden verwerkt.',
    secData3: 'BYOK-sleutels (Enterprise), wanneer aangeboden, worden alleen serverside opgeslagen en nooit in de browser blootgesteld.',
    secHonesty: 'Eerlijkheidsregel: RegexProof maakt van policytekst kandidaatregels. We garanderen geen correcte handhaving, 100% dekking of dat agents nooit een schending missen.',
    secPostureH2: 'Onze compliance-houding',
    secPosture1: 'RegexProof is besluitondersteuning, geen advocatenkantoor, kliniek of gecertificeerde auditor.',
    secPosture2: 'Voor bindend advies: raadpleeg een gekwalificeerde professional in het relevante domein.',
    secSubH2: 'Subverwerkers & betalingen',
    secSub1: 'Betalingen worden verwerkt door Waffo Pancake (merchant of record).',
    secSub2: 'Zie Privacy en Terms voor de volledige voorwaarden.',
    secRefs: 'Bronnen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Terug naar home',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Definierende en hoe-te-artikelen over ECMAScript vs PCRE-valstrikken, ReDoS-heuristieken en eerlijke regex-ontwerpgrenzen.',
    glanceTitle: 'Wat bevat dit product in één oogopslag?',
    glance1: 'Duidelijke definitie, FAQ en referenties voor answer engines',
    glance2: '3 reviewbare workflowstappen (input → genereren → review)',
    glance3: 'Besluitondersteunende output — jij blijft in de loop; geen verzonnen gebruikersaantallen',
    eyebrow: 'Blog · GEO',
    h1: 'Veiligere toepassing regex, uitgelegd',
    lead: 'Eigenaar van de definierende vragen die teams stellen voordat ze een patroon in productieparsing plakken.',
    targetQuery: 'Doelquery:',
    guidesTitle: 'Welke GEO deep-dives eerst lezen?',
    guidesLead: 'Uitgebreide verklarende teksten over dialectvalkuilen en ReDoS-heuristieken met beslissingsondersteunende disclaimer.',
    footerNote: 'Publish + syndicate volgens gtm-launch (IH + GEO-indexen). Elke post draagt 3 gezaghebbende refs.',
    post1Title: 'AI-agent-policypacks en NIST AI RMF',
    post1Desc: 'Hoe policypacks mappen op NIST AI RMF-functies en EU AI Act-thema’s — besluitondersteuning, geen certificaat.',
    post2Title: 'Toegestane tools vs open agents',
    post2Desc: 'Waarom het beperken van tooltoegang een control is, geen feature toggle — met eerlijkheidsregels voor open agents.',
    readI18n: 'Meertalige versie lezen',
    readEnHtml: 'Volledig Engels artikel lezen',
    pillarSlug: 'ecmascript-vs-pcre-dialectvalkuilen-2026',
    pillarEyebrow: 'door RegexProof (LX AI)',
    pillarH1: 'ECMAScript vs PCRE dialectvalkuilen',
    pillarLead: 'Hetzelfde regex kan verschillende dingen betekenen in verschillende engines. Ken de valkuilen voordat je een Stack Overflow-antwoord kopieert naar Node of Python.',
    pillarH2a: 'Lookahead- en possessive-verschillen',
    pillarPa1: 'PCRE-possessive kwantoren en sommige lookbehind-vormen ontbreken of verschillen in ECMAScript — valideer op de doel-engine.',
    pillarH2b: 'Unicode en woordgrenzen',
    pillarPb1: '\\\\\\\\w en Unicode-eigenschap-escapes gedragen zich anders; zet vlaggen en dialect expliciet vast.',
    pillarH2c: 'Nieuwe regel- en dotall-modi',
    pillarPc1: 'Punt komt niet hetzelfde overeen met een nieuwe regel in verschillende smaken — documenteer de verwachte lijnafhandeling.',
    pillarH2d: 'Test op de echte engine',
    pillarPd1: 'Voer steeds samples opnieuw uit op de productieregex-engine na het opstellen.',
    pillarDisclaimer: 'Alleen beslissingsondersteuning — geen formele verificatie.',
    pillarFaq1Q: 'Kan één regex overal portabel zijn?',
    pillarFaq1A: 'Zelden. Geef de voorkeur aan dialectspecifieke ontwerpen en tests per runtime.',
    pillarFaq2Q: 'Bewijst RegexProof de correctheid?',
    pillarFaq2A: 'Nee. Het stelt ontwerpen samen en markeert risico\'s; ingenieurs zijn verantwoordelijk voor verificatie.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'ReDoS-heuristieken',
    pillar2H1: 'ReDoS-heuristieken voor applicatie-reguliere expressies',
    pillar2Lead: 'Geneste quantoren in onbetrouwbare invoer kunnen servers lamleggen. Heuristieken helpen risicovolle patronen te identificeren voordat ze in productie gaan — geen garantie.',
    pillar2H2a: 'Geneste quantoren',
    pillar2Pa1: '(a+)+b-stijl genest is een klassiek patroon van catastrofale backtracking.',
    pillar2H2b: 'Alternatiebommen',
    pillar2Pb1: 'Overlappende alternaties met quantoren verhogen backtracking-paden.',
    pillar2H2c: 'Time-outs en limieten',
    pillar2Pc1: 'Combineer veiligere patronen met invoergrootte-limieten en engine-time-outs.',
    pillar2H2d: 'Fuzz vijandige invoer',
    pillar2Pd1: 'Heuristische vlaggen zijn starts — fuzz met gekruiste strings voordat je een patroon vertrouwt.',
    pillar2Disclaimer: 'Beslissingsondersteunende concepten. Geen volledigheidsgarantie.',
    pillar2Faq1Q: 'Zijn heuristieken voldoende?',
    pillar2Faq1A: 'Nee. Combineer met time-outs, groottebeperkingen en controle.',
    pillar2Faq2Q: 'Waarom focus op applicatie regex?',
    pillar2Faq2A: 'Gebruikerbeheerde invoer maakt ReDoS een beschikbaarheidsrisico, niet alleen een stijlprobleem.',
    pillar2Back: 'Terug naar blog',
    pillarBack: 'Terug naar de blog',
    card1Title: 'Wat is dialect-gevoelige regex-ontwerp?',
    card1Body: 'Een patroon genereren met expliciete ECMAScript vs PCRE-aannamen en randgevallen — beslissingsondersteuning, geen formele verificatie.',
    card2Title: 'ReDoS-gevoelige ontwerp',
    card2Body: 'Beschrijf de overeenkomst; krijg een kandidaat-regex met stap-voor-stap-uitleg en ReDoS-heuristieken — geen garantie voor volledigheid.',
  },
} as const

export default nl as unknown as Messages
