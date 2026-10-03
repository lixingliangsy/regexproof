// locales/de.ts — RegexProof German catalog (mirrors en.ts shape).
// Terms: Datenschutzerklärung / Richtlinie erstellen (Termly DE);
// Verantwortlicher / Auftragsverarbeiter / Verarbeitung (DSGVO Art.4).

import type { Messages } from '../types'

const de = {
  meta: {
    title: 'RegexProof · Unternehmensrichtlinien als agenten-durchsetzbare Regeln',
    description:
      'RegexProof liest Ihren Richtlinientext und erzeugt agentenaufrufbare Regelprüfungen plus Compliance-Checkliste — mit Bezug zu Pflichten der EU-KI-Verordnung, damit Richtlinien ausführbar werden, nicht nur ein PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Unternehmensrichtlinien in agenten-durchsetzbare Regeln verwandeln',
    microSaas: 'Micro SaaS',
    menu: 'Menü',
  },
  nav: {
    backToHub: 'Zurück zum Hub',
    home: 'Start',
    features: 'Funktionen',
    useCases: 'Anwendungsfälle',
    integrations: 'Integrationen',
    howItWorks: 'So funktioniert’s',
    studio: 'Studio',
    security: 'Sicherheit',
    pricing: 'Preise',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Anmelden',
    subscribe: 'Abonnieren',
    getStarted: 'Loslegen',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Unternehmensrichtlinien in agenten-durchsetzbare Regeln verwandeln',
    subtitle:
      'RegexProof liest Ihren Richtlinientext und erzeugt agentenaufrufbare Regelprüfungen plus Compliance-Checkliste — mit Bezug zu Pflichten der EU-KI-Verordnung, damit Richtlinien ausführbar werden, nicht nur ein PDF.',
    keyTakeaways: 'Kernaussagen',
    takeaway1: 'Richtlinien in agenten-durchsetzbare Regeln verwandeln — ohne Code.',
    takeaway2: 'Leitplanken binden an Agent-Workflows und scheitern bei Verstößen geschlossen.',
    takeaway3: 'Loslegen; Pro ab 29 $/Monat.',
    ctaPrimary: 'Abonnieren',
    ctaSecondary: 'Demo ansehen',
    note: 'Keine Kreditkarte nötig · Jederzeit kündbar',
    playDemo: 'Demo abspielen ▶',
    walkthrough: 'Klicken für den Rundgang',
  },
  stats: {
    builders: 'Builder',
    avgRating: 'Ø Bewertung',
    uptime: 'Verfügbarkeit',
    timeToValue: 'Zeit bis Nutzen',
  },
  pricing: {
    heading: 'Einfache Pläne, die mitwachsen',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    perMonth: '/Mon.',
    mostPopular: 'Am beliebtesten',
    getPro: 'Pro holen',
    orYearly: 'Oder jährlich — ${{amount}}/Mon.',
    custom: 'Individuell',
    contactSales: 'Vertrieb kontaktieren',
    configureByok: 'BYOK konfigurieren',
    getStarted: 'Loslegen',
    freeForever: 'dauerhaft kostenlos',
    billedMonthly: 'monatlich abgerechnet',
    save: 'sparen',
    freeFeat1: 'Begrenzte tägliche KI-Läufe (10/Tag · 50/Mon.)',
    freeFeat2: 'Studio-Demo (ohne extra LLM-Gebühr)',
    proFeat1: 'KI inklusive: 300 Generierungen/Mon. · Fair Use (gpt-4o-mini)',
    proFeat2: 'Kein separates ChatGPT-Abo nötig',
    proFeat3: 'Priority-Support · 2 Monate gratis bei Jahreszahlung',
    entFeat1: 'Team-Sitze · API-Zugang (Roadmap)',
    entFeat2: 'Optional BYOK (Ihr OpenAI-Schlüssel)',
  },
  faq: {
    title: 'Ihre Fragen — beantwortet',
    geoTitle: 'RegexProof — häufig gestellte Fragen',
    items: [
      {
        q: 'Was generiert RegexProof?',
        a: 'Ein dialektaware Regex-Entwurf mit teilweiser Erklärung, ECMAScript vs PCRE-Fallen und ReDoS-Heuristiken - Entscheidungsunterstützung, kein formaler Verifizierer.',
      },
      {
        q: 'Ist das Rechtsberatung oder eine Zertifizierung?',
        a: 'Nein. Ausgaben sind Entscheidungsunterstützung. Lassen Sie Counsel und Risikoeigner vor Produktion prüfen. Wir beanspruchen keine ISO-, CMP- oder Aufsichtszertifizierung.',
      },
      {
        q: 'Kann ich jederzeit kündigen?',
        a: 'Ja. Self-Serve-Pläne sind jederzeit kündbar; der Zugang bleibt bis Periodenende.',
      },
      {
        q: 'Brauche ich eine Kreditkarte zum Start?',
        a: 'Nein. Mit E-Mail starten oder Demo-Modus im Studio nutzen, später upgraden.',
      },
      {
        q: 'Brauche ich ein eigenes ChatGPT-/OpenAI-Abo?',
        a: 'Nein für Free/Pro. KI-Läufe sind im Plan (Fair Use) über unseren Plattform-Schlüssel enthalten. Enterprise kann optional den eigenen OpenAI-Schlüssel (BYOK) unter /settings hinterlegen (nur serverseitig).',
      },
      {
        q: 'Was ist Fair Use / was passiert bei KI-Limit?',
        a: 'Pro umfasst etwa 300 KI-Generierungen/Monat (plus Tagescap) auf gpt-4o-mini. Bei Limit liefert Studio Mock/Demo bis Reset — oder Upgrade / Enterprise-BYOK für höheres Volumen.',
      },
      {
        q: 'Ist der Checkout sicher?',
        a: 'Zahlungen laufen über Waffo Pancake (Merchant of Record).',
      },
      {
        q: 'Was passiert nach der Zahlung?',
        a: 'Sie erhalten eine Zugangsbestätigung; Erfüllung wird per Webhook und Auftragslog getrackt.',
      },
    ],
  
    geoItems: [
      {
        q: 'Was erzeugt RegexProof?',
        a: 'Einen strukturierten Policy-Entwurf zu Tools, Datenhandling und Eskalationspfaden zum Weiterbearbeiten.',
      },
      {
        q: 'Ist das Rechtsberatung?',
        a: 'Nein. Es ist eine Entwurfshilfe. Policies müssen von Counsel und Risk Ownern geprüft werden.',
      },
      {
        q: 'Wie funktioniert der Demo-Modus?',
        a: 'Demo ohne Live-AI; Live-Modus braucht einen konfigurierten Key.',
      },
      {
        q: 'Mappt es auf den EU AI Act?',
        a: 'Narrative können Governance-Themen referenzieren; es zertifiziert keine Act-Konformität.',
      },
      {
        q: 'Können Policies versioniert werden?',
        a: 'Läufe speichern rulesetVersion und runId zur Nachverfolgung.',
      },
      {
        q: 'Wer sollte es nutzen?',
        a: 'Platform- und Compliance-Engineers, die Agent-Guardrails vor Produktion definieren.',
      },
      {
        q: 'In welchen Ländern/Regionen nutzbar?',
        a: 'Weltweit als Cloud-App; Waffo-Pancake-Zahlungen können regional variieren.',
      },
      {
        q: 'Ist RegexProof DSGVO-/Privacy-konform?',
        a: 'Eingaben erzeugen nur Ihre Ausgabe und werden nicht verkauft. Siehe Privacy; Enterprise kann DPA/NDA umfassen.',
      },
      {
        q: 'Welche Sprachen unterstützt RegexProof?',
        a: 'Die UI unterstützt zehn Locales. Entwürfe folgen der gewählten UI-Sprache, wenn Live-AI konfiguriert ist.',
      },
    ],
},
  footer: {
    product: 'Produkt',
    company: 'Unternehmen',
    resources: 'Ressourcen',
    legal: 'Rechtliches',
    about: 'Über uns',
    contact: 'Kontakt',
    privacy: 'Datenschutz',
    terms: 'AGB',
    refund: 'Erstattung',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Alle Rechte vorbehalten.',
    partOfFleet: 'Teil der LX AI Micro-SaaS-Flotte.',
  },
  signup: {
    title: 'Heute smarter starten',
    subtitle: 'Teams nutzen RegexProof. Kostenlos testen — ohne Karte.',
    emailPlaceholder: 'E-Mail eingeben',
    saving: 'Speichern…',
    cta: 'Loslegen',
    trust: 'Vertrauenswürdig · Jederzeit kündbar',
  },
  feedback: {
    open: 'Feedback',
    title: 'Feedback senden',
    blurb: 'Sagen Sie uns, was funktioniert hat, was kaputt war oder was Sie als Nächstes brauchen.',
    fullPage: 'Lieber eine ganze Seite?',
    openPage: '/feedback öffnen',
    close: 'Feedback schließen',
    helpful: 'War dieses Ergebnis hilfreich?',
    yes: 'Ja',
    no: 'Nein',
    thanks: 'Danke für Ihr Feedback.',
    commentPlaceholder: 'Optionaler Einzeiler',
    generalTitle: 'Allgemeines Feedback',
    generalSub: 'Sagen Sie uns Ihre Meinung',
    generalPh: 'Was hat Ihnen gefallen, missfallen oder ist aufgefallen?',
    ideaTitle: 'Ich habe eine Idee',
    ideaSub: 'Feature oder Verbesserung vorschlagen',
    ideaPh: 'Beschreiben Sie Ihre Idee und das Problem, das sie löst…',
    issueTitle: 'Ich habe ein Problem gefunden',
    issueSub: 'Bug oder Störung melden',
    issuePh: 'Was ist passiert, was erwartet, und wie reproduzieren?',
    submit: 'Feedback absenden',
    submitting: 'Senden…',
    done: 'Danke — Feedback erhalten.',
    emailOptional: 'E-Mail (optional)',
    category: 'Kategorie',
    yourFeedback: 'Ihr Feedback',
    attachment: 'Anhang (optional)',

    back: '← Zurück zur Feedback-Art',
    pickTitle: 'Welches Feedback haben Sie?',
    pickSub: 'Wählen Sie eine Option. Details und Kategorie folgen im nächsten Schritt.',
    thanksTitle: 'Danke für Ihr Feedback!',
    thanksBody: 'Wir haben es erhalten und melden uns bald. Sie können jederzeit erneut senden.',
    submitAnother: 'Weiteres absenden',
    detailed: 'Detailliertes Feedback',
    send: 'Senden',
    sending: 'Senden...',
    thanksInline: 'Danke — gespeichert. Wir lesen jedes Feedback.',
    errorInline: 'Senden gerade nicht möglich. Bitte Feedback-Button oder /feedback nutzen.',
    inlineCommentPh: 'Ein Zeile: was verbessern? (optional)',
  },
  legal: {
    privacyPolicy: 'Datenschutzerklärung',
    generatePolicy: 'Richtlinie erstellen',
    controller: 'Verantwortlicher',
    processor: 'Auftragsverarbeiter',
    processing: 'Verarbeitung',
    personalData: 'Personenbezogene Daten',
    dataSubject: 'Betroffene Person',
    dpo: 'Datenschutzbeauftragter',
    checklist: 'Compliance-Checkliste',
    policyChecks: 'Regex-Sicherheitsprüfungen',
    encodePolicy: 'Codieren Sie Ihre Musterregeln',
    definitionTitle: 'RegexProof — Definition',
    whatItIs: 'Was es ist',
    whatNotTitle: 'Was das NICHT ist',
    whatNot1: 'Keine Kanzlei, keine GRC-Plattform und keine ISO-Zertifizierungsstelle.',
    whatNot2: 'Keine Garantie, dass entworfene Richtlinien jeden Aufsichts- oder Prüfer bestehen.',
    whatNot3: 'Kein formaler Verifizierer — behandeln Sie generierte Regex als Entwürfe unter Ingenieur-Überprüfung.',
    rolesHint:
      'Wenn Pakete Datenschutzrollen nennen, nutzen wir DSGVO-Art.-4-Begriffe: Verantwortlicher und Auftragsverarbeiter (nur Entscheidungsunterstützung).',
  },
  benchmark: {
    frameworksEyebrow: 'Rahmenwerk-Zuordnung',
    frameworksTitle: 'Dialekte unterscheiden sich. Muster brechen leise.',
    frameworksNote:
      'Entscheidungsunterstützende Themen — keine Vollständigkeitsgarantie oder formaler Beweis.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'ReDoS-Heuristiken',
    fw4: 'Dialektfallen-Hinweise',
    painEyebrow: 'Warum Regex beißt',
    painTitle: 'Muster sehen in Ordnung aus. Später hängt die Produktion.',
    pain1Title: 'Dialektfallen',
    pain1Body: 'Lookahead, possessive und Unicode-Klassen unterscheiden sich zwischen ECMAScript- und PCRE-Engines.',
    pain2Title: 'ReDoS-Risiko',
    pain2Body: 'Verschachtelte Quantoren auf unvertrauenswürdigen Eingaben können Ereignisschleifen und APIs blockieren.',
    pain3Title: 'Undurchsichtige One-Liner',
    pain3Body: 'Handgeschriebene Regex ohne teilweise Erklärung sind schwer sicher zu überprüfen.',
    pain4Title: 'Probleme nach dem Release',
    pain4Body: 'Timeouts und falsche Übereinstimmungen treten oft nur bei widerspenstigen oder chaotischen Daten auf.',
    getEyebrow: 'Was Sie erhalten',
    getTitle: 'Beschreiben. Erstellen. Überprüfen.',
    getLead:
      'Vom Plain-English-Regex mit Sicherheitshinweisen — überprüfen Sie vor der Produktion.',
    get1Title: 'Arbeitsentwurf des Musters',
    get1Body: 'Ein dialektaware Regex-Ausgangspunkt für Ihren Sprachflavor.',
    get2Title: 'Erklärung schrittweise',
    get2Body: 'Lesbare Aufschlüsselung, damit Prüfer Annahmen in Frage stellen können.',
    get3Title: 'ReDoS-Heuristiken',
    get3Body: 'Markiert verschachtelte Quantoren und Formen des katastrophalen Backtrackings.',
    get4Title: 'Dialektfallen',
    get4Body: 'Unterschiede zwischen ECMAScript und PCRE hervorgehoben — Entscheidungshilfe, kein Beweis.',
    featuresEyebrow: 'Warum RegexProof',
    featuresTitle: 'Alles, was Sie benötigen, um sicherere Regex zu erstellen',
    featuresBlurb: 'Entwickelt für Ingenieure, die Dialekt- und ReDoS-Hinweise benötigen, ohne in ein Forschungsloch zu geraten.',
    howTitle: 'RegexProof — Funktionsweise',
    how1Title: 'Einsetzen',
    how1Body: 'Fügen Sie Richtlinientext ein und wählen Sie eine Domäne.',
    how2Title: 'Codieren',
    how2Body: 'Erstellen Sie aufrufbare Überprüfungen und eine Validierungsfehlerliste.',
    how3Title: 'Durchsetzen',
    how3Body: 'Integrieren Sie Regeln in Ihre Agent-Laufzeit und behalten Sie menschliche Eingriffe für Ausnahmen.',
    allPlansTitle: 'Alle bezahlten Pläne enthalten',
    allPlans1: 'NL→regex-Studio',
    allPlans2: 'Dialekt-Fallaufrufe',
    allPlans3: 'ReDoS-Heuristiken (Entscheidungsunterstützung)',
    allPlans4: 'E-Mail-Support in bezahlten Plänen — keine versteckten Add-ons für die Kernstudioverwendung',
    honestyTitle: 'Ehrliche Grenzen',
    honestyLead:
      'RegexProof ist ein Erstellungshilfsmittel: Anpassen, Fuzzing und Überprüfen vor der Auslieferung an nicht vertrauenswürdige Eingaben.',
    ctaStudio: 'Studio öffnen',
  },
  home: {
    whyEyebrow: 'Warum {{name}}',
    featuresHeading: 'Alles, was Sie für sicherere Anwendungsregex benötigen',
    featuresCardBlurb: 'Entwickelt für Ingenieure, die Erklärungen und ReDoS-Hinweise ohne Lernkurve benötigen.',
    howHeading: 'Von Beschreibung zu sicherem Muster in 3 Schritten',
    how1Title: 'Policy einfügen',
    how1Desc: 'Eine plain-English-Match-Beschreibung und einen Dialekt einfügen.',
    how2Title: 'Regeln erzeugen',
    how2Desc: 'Deterministische Heuristiken plus optional modellgestützte Erzählung.',
    how3Title: 'Durchsetzen',
    how3Desc: 'Entwerfen Sie den Entwurf mit Callouts — keine Vollständigkeitsgarantie.',
    studioEyebrow: 'Live-Studio',
    studioHeading: 'Direkt auf dieser Seite ausprobieren',
    studioWatchDemo: 'Demo ansehen',
    studioOrRun: 'oder unten einen Check ausführen.',
    studioFormTitle: 'Regex-Schmiede',
    demoMode: 'Demo-Modus (keine Live-KI)',
    socialHeading: 'Erstellt für sorgfältige Musterautoren',
    quickAnswers: 'Kurzantworten',
    howCompares: 'Vergleich',
    dimension: 'Dimension',
    manual: 'Manuell',
    whenNotToUse: 'Wann nicht nutzen:',
    peopleAlsoSearch: 'Weitere Suchen',
    socialNote: 'Soziale Beweise verwenden Vorlagen, bis echte, zugestimmte Testimonials existieren.',





































































































































    leadsInbox: "Lead-Posteingang (Demo-CRUD)",
    filterEmail: "E-Mail filtern…",
    allPlans: "Alle Pläne",
    noLeads: "Noch keine Leads — senden Sie das Anmeldeformular.",
    colEmail: "E-Mail",
    colPlan: "Plan",
    colSource: "Quelle",
    delete: "Löschen",
    deleteLeadTitle: "Lead löschen",
    deleteLeadWarn: "Diese Aktion kann nicht rückgängig gemacht werden.",
    deleteLeadBody: "Diesen Lead wirklich löschen? Die E-Mail wird dauerhaft aus Ihren Kontakten entfernt.",
    cancel: "Abbrechen",
    relatedReading: "Weiterführende Artikel",
    productTour: "Produktrundgang",
    productDemo: "PRODUKTDEMO",
    stepOf: "Schritt {{n}}/{{total}}",
    replay: "Wiederholen",
    tryStudio: "Studio öffnen",
    leadsCount: "{{n}} Leads",
    leadsFiltered: "{{n}} gefiltert",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuell",
    geoCmp1Dim: "Geschwindigkeit",
    geoCmp1Manual: "Stunden bis Tage",
    geoCmp1Tool: "Minuten pro Lauf",
    geoCmp2Dim: "Konsistenz",
    geoCmp2Manual: "Variiert je Person",
    geoCmp2Tool: "Gleiches Regelsatz jedes Mal",
    geoCmp3Dim: "Ausgabe",
    geoCmp3Manual: "Freiform",
    geoCmp3Tool: "Strukturiertes, exportierbares Ergebnis",
    geoCmp4Dim: "Am besten für",
    geoCmp4Manual: "Finale Freigabe",
    geoCmp4Tool: "Erste Entscheidungsunterstützung",
    related1Title: "AI-Wrapper vs. Moat",
    related1Desc: "Policy-Durchsetzung als nachhaltiger Burggraben.",
    related2Title: "EU-AI-Act-Compliance-Checkliste",
    related2Desc: "Agentenpflichten auf Act-Themen abbilden.",
    related3Title: "Wave-1-Launch",
    related3Desc: "RegexProof startet mit dem Governance-Cluster.",
    feat1: "Policy-zu-Regeln",
    feat2: "Compliance-Checkliste",
    feat3: "EU-AI-Act-Mapping",
    feat4: "Exportierbare Regeln",
    geoQa1: "Policy-zu-Regeln",
    geoQa2: "Compliance-Checkliste",
    geoQa3: "EU-AI-Act-Mapping",
    geoQa4: "Exportierbare Regeln",
    geoQa5: "Preise ab $0 (Free).",
    geoLt1: "was ist RegexProof",
    geoLt2: "wie funktioniert RegexProof",
    geoLt3: "was kostet RegexProof",
    geoLt4: "ist RegexProof kostenlos",
    geoLt5: "RegexProof vs. manuell",
    geoWhenNot: "Nutzen Sie qualifizierte menschliche Prüfung — Entwurfshilfe. Policies müssen von Counsel und Risk Ownern geprüft werden.",
    demo1Title: "Willkommen bei {{name}}",
    demo1Detail: "60 Sekunden: wie {{name}} Policy in Agent-Checks verwandelt.",
    demo2Title: "Live-Studio öffnen",
    demo2Detail: "Policy-Text einfügen und Domain wählen.",
    demo3Title: "„Generate checks“ klicken",
    demo3Detail: "Policy-zu-Regeln und Compliance-Checklisten.",
    demo4Title: "Policy-Checks-Vorschau",
    demo4Detail: "Beispielausgabe der regelbasierten Pipeline:",
    demo4DetailEmpty: "Ihre Policy-Checks erscheinen hier.",
    demo5Title: "Sie sind dran",
    demo5Detail: "Studio testen oder mit {{name}} starten.",
  },
  chat: {
    typing: 'Assistent tippt…',
    placeholder: 'Frage eingeben… (Enter zum Senden)',
    openAria: 'KI-Assistent öffnen',
    openTitle: 'Unseren KI-Assistenten fragen',
    closeAria: 'Schließen',
    escalated: 'Wir haben Sie mit einem Menschen verbunden. Wir melden uns per E-Mail.',
    s1: 'Was macht dieses Tool?',
    s2: 'Was kostet es?',
    s3: 'Gibt es einen Free-Plan?',
  },
  pages: {
    howTitle: 'RegexProof — So funktioniert’s',
    howDesc: 'So funktioniert RegexProof in drei Schritten.',
    howEyebrow: 'So funktioniert’s',
    howH1: 'Vom Input zum Ergebnis in 3 Schritten',
    how1Title: 'Einfügen',
    how1Body: 'Policy-Text einfügen und Domäne wählen.',
    how2Title: 'Kodieren',
    how2Body: 'Agent-aufrufbare Checks und eine Compliance-Checkliste erzeugen.',
    how3Title: 'Durchsetzen',
    how3Body: 'Regeln in die Agent-Laufzeit einbinden; Menschen für Ausnahmen behalten.',
    subscribe: 'Abonnieren',
    ucTitle: 'RegexProof — Anwendungsfälle',
    ucDesc: 'Wie RegexProof Compliance- und Agent-Plattform-Teams hilft.',
    ucEyebrow: 'Anwendungsfälle',
    ucH1: 'Für Compliance- und Agent-Plattform-Teams gebaut',
    ucIntro: 'Wählen Sie Ihr Segment, um die wichtigsten Workflows zu sehen.',
    uc1Title: 'Finance-Policies',
    uc1Pain: 'Rückerstattungen und Freigaben müssen maschinenprüfbar sein.',
    uc1Help: 'Bedingungen + Aktionen extrahieren, die Agents auswerten können.',
    uc2Title: 'HR-/Safety-Policies',
    uc2Pain: 'Brauchen Checklisten, die Agents aufrufen können.',
    uc2Help: 'Domänenwahl fokussiert die Extraktion.',
    uc3Title: 'EU-KI-Features',
    uc3Pain: 'Hochrisiko-Regeln auf KI-Verordnungs-Themen mappen.',
    uc3Help: 'Nur Entscheidungshilfe-Mapping.',
    uc4Title: 'Plattform-Teams',
    uc4Pain: 'Policy-PDFs erreichen nie die Laufzeit.',
    uc4Help: 'Exportierbare Regeln für Agent-Tools.',
    painLabel: 'Schmerzpunkt:',
    helpLabel: 'So hilft RegexProof:',
    ucRefs: 'Quellen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integrationen',
    intDesc: 'Exportziele, API und BYOK-Optionen von RegexProof.',
    intEyebrow: 'Integrationen',
    intH1: 'In Ihren Stack einbinden',
    intIntro: 'Nur ehrliche Integrationen. Wir bewerben keine noch nicht gelieferten Konnektoren.',
    int1Title: 'Exportierbare Regeln',
    int1Body: 'JSON-/Checklisten-Export für Agent-Tools.',
    int2Title: 'API',
    int2Body: 'Neu erzeugen, wenn sich Policies ändern.',
    int3Title: 'EU-KI-Verordnungs-Mapping',
    int3Body: 'Hinweise zu Hochrisiko-Themen.',
    int4Title: 'BYOK',
    int4Body: 'Schlüssel serverseitig, wenn angeboten.',
    intHonesty: 'Ehrlichkeitshinweis: Laufzeit-Enforcement ist Aufgabe Ihres Systems; wir erzeugen Kandidaten-Checks.',
    secTitle: 'RegexProof — Sicherheit & Compliance',
    secDesc: 'Wie RegexProof Ihre Daten verarbeitet und welche ehrliche Compliance-Haltung gilt.',
    secEyebrow: 'Sicherheit & Compliance',
    secH1: 'Ihre Daten, unsere Haltung',
    secIntro: 'RegexProof verarbeitet die von Ihnen zur Analyse eingereichten Eingaben. Diese Seite sagt klar, was wir verarbeiten und was wir nicht behaupten.',
    secHandleH2: 'Was wir verarbeiten',
    secHandleBody: 'Unternehmens-Policy-Text und Domänenauswahl zur Erzeugung agent-durchsetzbarer Checks.',
    secDataH2: 'Zusagen zur Datenverarbeitung',
    secData1: 'Einreichungen durchlaufen die Produkt-Pipeline und werden nur so lange wie für Ihr Audit-Log nötig (Paid-Tiers) oder bis zum Löschen des Laufs aufbewahrt.',
    secData2: 'Wir wenden Zugriffskontrollen im Sinne von DSGVO Art. 32 an, soweit personenbezogene Daten verarbeitet werden.',
    secData3: 'BYOK-Schlüssel (Enterprise) werden — wenn angeboten — nur serverseitig gespeichert und nie im Browser exponiert.',
    secHonesty: 'Ehrlichkeitsregel: RegexProof macht aus Policy-Text Kandidatenregeln. Wir garantieren keine korrekte Durchsetzung, keine 100 %-Abdeckung und kein „nie verpasst“. Kein Claim guarantee / 100% / never miss.',
    secPostureH2: 'Unsere Compliance-Haltung',
    secPosture1: 'RegexProof ist Entscheidungshilfe, keine Kanzlei, Klinik oder zertifizierter Auditor.',
    secPosture2: 'Für verbindliche Beratung einen qualifizierten Fachmann im relevanten Gebiet hinzuziehen.',
    secSubH2: 'Unterauftragsverarbeiter & Zahlungen',
    secSub1: 'Zahlungen über Waffo Pancake (Merchant of Record).',
    secSub2: 'Vollständige Bedingungen in Privacy und Terms.',
    secRefs: 'Quellen: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Zurück zur Startseite',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Definitorische und Anleitung-Beiträge zu ECMAScript vs PCRE-Fallen, ReDoS-Heuristiken und ehrlichen Regex-Grenzen.',
    glanceTitle: 'Was enthält dieses Produkt auf einen Blick?',
    glance1: 'Verständliche Definition, FAQ und Referenzen für Answer Engines',
    glance2: '3 prüfbare Workflow-Schritte (Input → Generieren → Review)',
    glance3: 'Entscheidungshilfe-Ausgabe — Sie bleiben im Loop; keine erfundenen Nutzerzahlen',
    eyebrow: 'Blog · GEO',
    h1: 'Sicherere Anwendungsregex, erklärt',
    lead: 'Besitzen Sie die definitorischen Abfragen, die Teams vor dem Einfügen eines Musters in die Produktionsanalyse stellen.',
    targetQuery: 'Ziel-Query:',
    guidesTitle: 'Welche GEO-Deep-Dives zuerst lesen?',
    guidesLead: 'Umfangreiche Erklärungen zu Dialektfallen und ReDoS-Heuristiken mit Entscheidungshilfe-Hinweisen.',
    footerNote: 'Publish + Syndicate gemäß gtm-launch (IH + GEO-Indexes). Jeder Post trägt 3 autoritative Refs.',
    post1Title: 'KI-Agent-Policy-Packs und NIST AI RMF',
    post1Desc: 'Wie Policy-Packs auf NIST-AI-RMF-Funktionen und EU-KI-Verordnungs-Themen mappen — Entscheidungshilfe, kein Zertifikat.',
    post2Title: 'Erlaubte Tools vs. offene Agents',
    post2Desc: 'Warum die Einschränkung des Tool-Zugriffs eine Kontrolle ist, kein Feature-Toggle — mit Ehrlichkeitsregeln für offene Agents.',
    readI18n: 'Mehrsprachige Fassung lesen',
    readEnHtml: 'Vollständigen englischen Artikel lesen',
    pillarSlug: 'ecmascript-vs-pcre-dialect-traps-2026',
    pillarEyebrow: 'von RegexProof (LX AI)',
    pillarH1: 'ECMAScript vs PCRE Dialektfallen',
    pillarLead: 'Das gleiche Regex kann in verschiedenen Engines unterschiedliche Bedeutungen haben. Erkennen Sie die Fallen, bevor Sie eine Stack Overflow-Antwort in Node oder Python kopieren.',
    pillarH2a: 'Lookahead- und possessive-Unterschiede',
    pillarPa1: 'PCRE-possessive Quantifizierer und einige Lookbehind-Formen fehlen in ECMAScript oder unterscheiden sich - validieren Sie auf der Ziel-Engine.',
    pillarH2b: 'Unicode und Wortgrenzen',
    pillarPb1: '\\\\\\\\w und Unicode-Eigenschafts-Escapes verhalten sich unterschiedlich; Flags und Dialekt explizit festlegen.',
    pillarH2c: 'Zeilenende- und Dotall-Modi',
    pillarPc1: 'Punkt stimmt nicht mit Zeilenende überein, auf die gleiche Weise über Flavors hinweg - dokumentieren Sie die erwartete Zeilenbehandlung.',
    pillarH2d: 'Testen Sie auf der tatsächlichen Engine',
    pillarPd1: 'Führen Sie Proben immer nach dem Entwurf auf dem Produktions-Regex-Motor erneut aus.',
    pillarDisclaimer: 'Nur Entscheidungshilfe — kein formaler Verifizierer.',
    pillarFaq1Q: 'Kann ein Regex überall portabel sein?',
    pillarFaq1A: 'Selten. Preferieren Sie dialekt-spezifische Entwürfe und Tests pro Laufzeit.',
    pillarFaq2Q: 'Beweist RegexProof Korrektheit?',
    pillarFaq2A: 'Nein. Es entwirft und markiert Risiken; Ingenieure sind für die Verifizierung verantwortlich.',
    pillar2Slug: 'redos-heuristiken-fur-anwendungs-regex-2026',
    pillar2Eyebrow: 'ReDoS-Heuristiken',
    pillar2H1: 'ReDoS-Heuristiken für die Anwendungsregex',
    pillar2Lead: 'Verschachtelte Quantifizierer in nicht vertrauenswürdigem Eingabedaten können Server blockieren. Heuristiken helfen, riskante Muster vor der Produktion zu erkennen — keine Garantie.',
    pillar2H2a: 'Verschachtelte Quantifizierer',
    pillar2Pa1: '(a+)+b-Style-Verschachtelung ist ein klassisches Muster für katastrophales Backtracking.',
    pillar2H2b: 'Alternationsbomben',
    pillar2Pb1: 'Überlappende Alternationen mit Quantifizierern verstärken Backtracking-Pfade.',
    pillar2H2c: 'Timeouts und Begrenzungen',
    pillar2Pc1: 'Paarieren Sie sicherere Muster mit Eingabegrößengrenzen und Motor-Timeouts.',
    pillar2H2d: 'Fuzz adversarial Eingabe',
    pillar2Pd1: 'Heuristische Flags sind der Anfang — fuzz mit handgefertigten Zeichenfolgen, bevor Sie einem Muster vertrauen.',
    pillar2Disclaimer: 'Entscheidungshilfen. Keine Vollständigkeitsgarantie.',
    pillar2Faq1Q: 'Reichen Heuristiken aus?',
    pillar2Faq1A: 'Nein. Kombinieren Sie mit Timeouts, Größenbeschränkungen und Überprüfung.',
    pillar2Faq2Q: 'Warum liegt der Fokus auf Anwendungsregex?',
    pillar2Faq2A: 'Benutzerkontrollierte Eingabe macht ReDoS zu einem Verfügbarkeitsrisiko und nicht nur zu einem Stilproblem.',
    pillar2Back: 'Zurück zum Blog',
    pillarBack: 'Zurück zum Blog',
    card1Title: 'Was ist dialektbewusstes Regex-Entwerfen?',
    card1Body: 'Erzeugen eines Musters mit expliziten ECMAScript- vs PCRE-Annahmen und Randfällen — Entscheidungshilfe, kein formaler Verifizierer.',
    card2Title: 'ReDoS-bewusstes Entwerfen',
    card2Body: 'Beschreiben Sie die Übereinstimmung; erhalten Sie einen Kandidaten-Regex mit teilweiser Erklärung und ReDoS-Heuristiken — keine Vollständigkeitsgarantie.',
  },
} as const

export default de as unknown as Messages
