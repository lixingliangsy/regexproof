// locales/it.ts — RegexProof full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const it = {
  meta: {
    title: 'RegexProof · Trasforma le policy aziendali in regole applicate dagli agent',
    description: 'RegexProof legge il testo della policy aziendale e genera controlli invocabili dagli agent più una checklist di conformità, mappata agli obblighi dell’AI Act UE — così la policy diventa eseguibile, non solo un PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Trasforma le policy aziendali in regole applicate dagli agent',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Torna all’hub',
    home: 'Home',
    features: 'Funzionalità',
    useCases: 'Casi d’uso',
    integrations: 'Integrazioni',
    howItWorks: 'Come funziona',
    studio: 'Studio',
    security: 'Sicurezza',
    pricing: 'Prezzi',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Supporto',
    signIn: 'Accedi',
    subscribe: 'Abbonati',
    getStarted: 'Inizia',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Trasforma le policy aziendali in regole applicate dagli agent',
    subtitle: 'RegexProof legge il testo della policy aziendale e genera controlli invocabili dagli agent più una checklist di conformità, mappata agli obblighi dell’AI Act UE — così la policy diventa eseguibile, non solo un PDF.',
    keyTakeaways: 'Punti chiave',
    takeaway1: 'Trasforma le policy aziendali in regole applicate dagli agent — senza codice.',
    takeaway2: 'Le guardrail si collegano ai workflow degli agent e falliscono in chiusura sulle violazioni.',
    takeaway3: 'Inizia; Pro da 29 $/mese.',
    ctaPrimary: 'Abbonati',
    ctaSecondary: 'Guarda la demo',
    note: 'Nessuna carta di credito · Disdici quando vuoi',
    playDemo: 'Riproduci demo ▶',
    walkthrough: 'Clicca per guardare il tour',
  },
  stats: {
    builders: 'Builder',
    avgRating: 'Valutazione media',
    uptime: 'Uptime',
    timeToValue: 'Tempo al valore',
  },
  pricing: {
    heading: 'Piani semplici che scalano',
    monthly: 'Mensile',
    yearly: 'Annuale',
    perMonth: '/mese',
    mostPopular: 'Più popolare',
    getPro: 'Ottieni Pro',
    orYearly: 'Oppure paga annualmente — ${{amount}}/mese',
    custom: 'Personalizzato',
    contactSales: 'Contatta le vendite',
    configureByok: 'Configura BYOK',
    getStarted: 'Inizia',
    freeForever: 'gratis per sempre',
    billedMonthly: 'fatturato mensilmente',
    save: 'risparmia',
    freeFeat1: 'Esecuzioni IA giornaliere limitate (10/giorno · 50/mese)',
    freeFeat2: 'Demo Studio (nessun costo LLM extra)',
    proFeat1: 'IA inclusa: 300 gen/mese · fair use (gpt-4o-mini)',
    proFeat2: 'Nessun abbonamento ChatGPT separato richiesto',
    proFeat3: 'Supporto prioritario · 2 mesi gratis con annuale',
    entFeat1: 'Posti team · Accesso API (roadmap)',
    entFeat2: 'BYOK opzionale (la tua chiave OpenAI)',
  },
  faq: {
    title: 'Le tue domande, con risposta',
    geoTitle: 'RegexProof — domande frequenti',
    items: [
      {
        q: 'Cosa genera RegexProof?',
        a: 'Una bozza di regex consapevole del dialetto con spiegazione parte per parte, trappole ECMAScript vs PCRE e euristica ReDoS - supporto alle decisioni, non un verificatore formale.',
      },
      {
        q: 'È consulenza legale o una certificazione?',
        a: 'No. Gli output sono bozze di supporto decisionale. Fai revisionare da counsel e risk owner prima della produzione. Non rivendichiamo certificazioni ISO, CMP o di autorità.',
      },
      {
        q: 'Posso disdire in qualsiasi momento?',
        a: 'Sì. I piani self-serve si disdicono quando vuoi; l’accesso continua fino a fine periodo.',
      },
      {
        q: 'Serve una carta di credito per iniziare?',
        a: 'No. Inizia con registrazione email o modalità Demo nello studio, poi fai upgrade quando sei pronto.',
      },
      {
        q: 'Mi serve un abbonamento ChatGPT / OpenAI personale?',
        a: 'No per Free/Pro. Le esecuzioni IA sono incluse nel piano (fair use) con la nostra chiave di piattaforma. Enterprise può opzionalmente portare la propria chiave OpenAI (BYOK) — configurala in /settings (la chiave resta solo lato server).',
      },
      {
        q: 'Cos’è il Fair Use / cosa succede se raggiungo il limite IA?',
        a: 'Pro include circa 300 generazioni IA/mese (più un tetto giornaliero) su gpt-4o-mini. Se raggiungi il limite fair use, Studio restituisce un risultato mock/demo fino al reset giornaliero o mensile — oppure upgrade / Enterprise BYOK per volumi maggiori.',
      },
      {
        q: 'Il checkout è sicuro?',
        a: 'I pagamenti sono elaborati da Waffo Pancake (merchant of record).',
      },
      {
        q: 'Cosa succede dopo il pagamento?',
        a: 'Ricevi conferma di accesso; l’erogazione è tracciata via webhook + log ordini.',
      },
    ],
  
    geoItems: [
      {
        q: 'Cosa produce RegexProof?',
        a: 'Una bozza di policy strutturata su tool, dati e percorsi di escalation modificabile.',
      },
      {
        q: 'È consulenza legale?',
        a: 'No. È un aiuto alla redazione. Le policy devono essere riviste da counsel e risk owner.',
      },
      {
        q: 'Come funziona la modalità Demo?',
        a: 'Attiva Demo senza IA live; la modalità live richiede una chiave configurata.',
      },
      {
        q: 'Mappa l’AI Act UE?',
        a: 'I narrativi possono citare temi di governance; non certifica la conformità.',
      },
      {
        q: 'Le policy possono essere versionate?',
        a: 'Le run memorizzano rulesetVersion e runId per il tracking delle modifiche.',
      },
      {
        q: 'Chi dovrebbe usarlo?',
        a: 'Ingegneri di piattaforma e compliance che definiscono guardrail prima della produzione.',
      },
      {
        q: 'In quali paesi/regioni?',
        a: 'Raggiungibile a livello globale; i pagamenti Waffo Pancake possono variare per regione.',
      },
      {
        q: 'È conforme a GDPR/privacy?',
        a: 'Gli input generano solo il tuo output e non vengono mai venduti. Vedi Privacy; Enterprise può includere DPA/NDA.',
      },
      {
        q: 'Quali lingue supporta?',
        a: 'L’UI copre dieci locale. Le bozze seguono la lingua UI se l’IA live è configurata.',
      },
    ],
},
  footer: {
    product: 'Prodotto',
    company: 'Azienda',
    resources: 'Risorse',
    legal: 'Legale',
    about: 'Chi siamo',
    contact: 'Contatto',
    privacy: 'Privacy',
    terms: 'Termini',
    refund: 'Rimborso',
    support: 'Supporto',
    feedback: 'Feedback',
    rights: 'Tutti i diritti riservati.',
    partOfFleet: 'Parte della flotta LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Inizia meglio oggi',
    subtitle: 'Unisciti ai builder che usano RegexProof. Prova gratis — nessuna carta.',
    emailPlaceholder: 'Inserisci la tua email',
    saving: 'Salvataggio…',
    cta: 'Inizia',
    trust: 'Affidabile · Disdici quando vuoi',
  },
  feedback: {
    open: 'Feedback',
    title: 'Invia feedback',
    blurb: 'Dicci cosa ha funzionato, cosa si è rotto o cosa vuoi dopo.',
    fullPage: 'Preferisci una pagina intera?',
    openPage: 'Apri /feedback',
    close: 'Chiudi feedback',
    helpful: 'Questo risultato è stato utile?',
    yes: 'Sì',
    no: 'No',
    thanks: 'Grazie per il feedback.',
    commentPlaceholder: 'Commento opzionale di una riga',
    generalTitle: 'Feedback generale',
    generalSub: 'Dicci cosa ne pensi',
    generalPh: 'Cosa ti è piaciuto, non è piaciuto o hai notato usando il prodotto?',
    ideaTitle: 'Ho un’idea',
    ideaSub: 'Suggerisci una funzione o un miglioramento',
    ideaPh: 'Descrivi la tua idea e il problema che risolverebbe…',
    issueTitle: 'Ho trovato un problema',
    issueSub: 'Segnala un bug o un problema',
    issuePh: 'Cosa è successo, cosa ti aspettavi e come possiamo riprodurlo?',
    submit: 'Invia feedback',
    submitting: 'Invio…',
    done: 'Grazie — feedback ricevuto.',
    emailOptional: 'Email (opzionale)',
    category: 'Categoria',
    yourFeedback: 'Il tuo feedback',
    attachment: 'Allegato (opzionale)',

    back: '← Torna al tipo di feedback',
    pickTitle: 'Che feedback hai?',
    pickSub: 'Scegline uno per iniziare. Puoi aggiungere dettagli e una categoria precisa al passo successivo.',
    thanksTitle: 'Grazie per il feedback!',
    thanksBody: 'Lo abbiamo ricevuto e il team farà seguito a breve. Puoi inviare di nuovo quando vuoi.',
    submitAnother: 'Inviane un altro',
    detailed: 'Feedback dettagliato',
    send: 'Invia',
    sending: 'Invio...',
    thanksInline: 'Grazie - registrato. Leggiamo ognuno.',
    errorInline: 'Invio non riuscito ora. Usa il pulsante Feedback o /feedback.',
    inlineCommentPh: 'Una riga: cosa dovremmo migliorare? (opzionale)',
  },
  legal: {
    privacyPolicy: 'Informativa sulla privacy',
    generatePolicy: 'Genera policy',
    controller: 'Titolare',
    processor: 'Responsabile del trattamento',
    processing: 'Trattamento',
    personalData: 'Dati personali',
    dataSubject: 'Interessato',
    dpo: 'Responsabile della protezione dei dati',
    checklist: 'Checklist di conformità',
    policyChecks: 'Controlli di sicurezza regex',
    encodePolicy: 'Codifica le regole dei tuoi pattern',
    definitionTitle: 'RegexProof — definizione',
    whatItIs: 'Cos’è',
    whatNotTitle: 'Cosa NON è',
    whatNot1: 'Non è uno studio legale, una piattaforma GRC né un organismo di certificazione ISO.',
    whatNot2: 'Non garantisce che le policy redatte soddisfino ogni autorità o auditor.',
    whatNot3: 'Non un verificatore formale — trattare le regex generate come bozze in fase di revisione dell\'ingegnere.',
    rolesHint: 'Quando i pack citano ruoli privacy, usiamo le etichette GDPR Art.4: Titolare e Responsabile del trattamento (solo supporto decisionale).',
  },
  benchmark: {
    frameworksEyebrow: 'Mappatura dei framework',
    frameworksTitle: 'I dialetti differiscono. I pattern si rompono silenziosamente.',
    frameworksNote: 'Temi di supporto alle decisioni — non una garanzia di completezza o prova formale.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'Euristici ReDoS',
    fw4: 'Richiami di trappole di dialetto',
    painEyebrow: 'Perché le regex mordono',
    painTitle: 'I modelli sembrano corretti. La produzione si blocca in seguito.',
    pain1Title: 'Trappole di dialetto',
    pain1Body: 'Le classi di lookahead, possessive e Unicode differiscono tra i motori ECMAScript e PCRE.',
    pain2Title: 'Rischio ReDoS',
    pain2Body: 'I quantificatori annidati su input non attendibili possono bloccare i cicli di eventi e le API.',
    pain3Title: 'Una riga opaca',
    pain3Body: 'Le espressioni regolari scritte a mano senza spiegazione parte per parte sono difficili da revisionare in modo sicuro.',
    pain4Title: 'Problemi dopo la consegna',
    pain4Body: 'I timeout e le corrispondenze false appaiono spesso solo con dati avversari o disordinati.',
    getEyebrow: 'Cosa ottieni',
    getTitle: 'Descrivi. Crea. Revisiona.',
    getLead: 'Da inglese semplice a regex con avvisi di sicurezza — revisiona prima della produzione.',
    get1Title: 'Bozza del modello di lavoro',
    get1Body: 'Un punto di partenza per l\'espressione regolare consapevole del dialetto per il tuo sapore di linguaggio.',
    get2Title: 'Spiegazione parte per parte',
    get2Body: 'Breakdown leggibile in modo che i revisori possano sfidare le ipotesi.',
    get3Title: 'Euristiche ReDoS',
    get3Body: 'Segnala quantificatori annidati e forme di backtracking catastrofico.',
    get4Title: 'Trappole di dialetto',
    get4Body: 'Differenze tra ECMAScript e PCRE evidenziate — supporto alle decisioni, non una prova.',
    featuresEyebrow: 'Perché RegexProof',
    featuresTitle: 'Tutto ciò di cui hai bisogno per creare regex più sicuri',
    featuresBlurb: 'Progettato per ingegneri che necessitano di richiami di dialetto e ReDoS senza un buco nero di ricerca.',
    howTitle: 'RegexProof — Funzionamento',
    how1Title: 'Incolla',
    how1Body: 'Incolla il testo della politica e scegli il dominio.',
    how2Title: 'Codifica',
    how2Body: 'Genera controlli richiamabili dall\'agente e un elenco di errori di convalida.',
    how3Title: 'Applica',
    how3Body: 'Collega le regole al runtime dell\'agente; mantieni gli umani per le eccezioni.',
    allPlansTitle: 'Tutti i piani a pagamento includono',
    allPlans1: 'NL→studio regex',
    allPlans2: 'Richiami di chiamata di trappola di dialetto',
    allPlans3: 'Euristica ReDoS (supporto alle decisioni)',
    allPlans4: 'Supporto email sui piani a pagamento — nessun add-on nascosto per l\'uso dello studio core',
    honestyTitle: 'Limiti onesti',
    honestyLead: 'RegexProof è uno strumento di stesura: personalizza, fuzz e revisiona prima di inviare a input non attendibili.',
    ctaStudio: 'Apri studio',
  },
  home: {
    whyEyebrow: 'Perché {{name}}',
    featuresHeading: 'Tutto ciò che ti serve per un\'applicazione regex più sicura',
    featuresCardBlurb: 'Progettato per ingegneri che necessitano di spiegazioni e suggerimenti ReDoS senza una curva di apprendimento.',
    howHeading: 'Dalla descrizione al pattern più sicuro in 3 passaggi',
    how1Title: 'Incolla policy',
    how1Desc: 'Inserisci un\'intenzione di corrispondenza in inglese semplice e un dialetto.',
    how2Title: 'Compila regole',
    how2Desc: 'Euristiche deterministiche più narrative opzionali assistite da modello.',
    how3Title: 'Applica',
    how3Desc: 'Esporta la bozza con richiami — non una garanzia di completezza.',
    studioEyebrow: 'Studio live',
    studioHeading: 'Provalo in questa pagina',
    studioWatchDemo: 'Guarda la demo',
    studioOrRun: 'oppure esegui un controllo qui sotto.',
    studioFormTitle: 'Forgia regex',
    demoMode: 'Modalità demo (non IA live)',
    socialHeading: 'Costruito per autori di pattern accurati',
    socialNote: 'La prova sociale utilizza modelli fino a quando non esistono testimonianze reali e consensuali.',
    quickAnswers: 'Risposte rapide',
    howCompares: 'Confronto',
    dimension: 'Dimensione',
    manual: 'Manuale',
    whenNotToUse: 'Quando non usarlo:',
    peopleAlsoSearch: 'Le persone cercano anche',





































































































































    leadsInbox: "Inbox lead (CRUD demo)",
    filterEmail: "Filtra email…",
    allPlans: "Tutti i piani",
    noLeads: "Nessun lead — invia il modulo di iscrizione.",
    colEmail: "Email",
    colPlan: "Piano",
    colSource: "Fonte",
    delete: "Elimina",
    deleteLeadTitle: "Elimina lead",
    deleteLeadWarn: "Questa azione non può essere annullata.",
    deleteLeadBody: "Eliminare questo lead? L'email sarà rimossa definitivamente dai contatti.",
    cancel: "Annulla",
    relatedReading: "Letture correlate",
    productTour: "Tour del prodotto",
    productDemo: "DEMO PRODOTTO",
    stepOf: "passo {{n}}/{{total}}",
    replay: "Ripeti",
    tryStudio: "Prova studio",
    leadsCount: "{{n}} lead",
    leadsFiltered: "{{n}} filtrati",
    geoCmpDim: "Dimensione",
    geoCmpManual: "Manuale",
    geoCmp1Dim: "Velocità",
    geoCmp1Manual: "Ore o giorni",
    geoCmp1Tool: "Minuti per esecuzione",
    geoCmp2Dim: "Coerenza",
    geoCmp2Manual: "Varia per persona",
    geoCmp2Tool: "Stesso set di regole ogni volta",
    geoCmp3Dim: "Output",
    geoCmp3Manual: "Testo libero",
    geoCmp3Tool: "Risultato strutturato ed esportabile",
    geoCmp4Dim: "Ideale per",
    geoCmp4Manual: "Approvazione finale",
    geoCmp4Tool: "Supporto decisionale di primo passaggio",
    related1Title: "AI wrapper vs fossato",
    related1Desc: "l'applicazione delle policy come un fossato durevole.",
    related2Title: "elenco di controllo per la conformità all'EU AI Act",
    related2Desc: "mappa i doveri degli agenti ai temi dell'Act.",
    related3Title: "lancio di Wave 1",
    related3Desc: "RegexProof viene fornito con il cluster di governance.",
    feat1: "Policy-to-regole",
    feat2: "Elenco di controllo per la conformità",
    feat3: "Mappatura dell'EU AI Act",
    feat4: "Regole esportabili",
    geoQa1: "Policy-to-regole",
    geoQa2: "Elenco di controllo per la conformità",
    geoQa3: "Mappatura dell'EU AI Act",
    geoQa4: "Regole esportabili",
    geoQa5: "I prezzi partono da $0 (Gratuito).",
    geoLt1: "Cos'è RegexProof",
    geoLt2: "Come funziona RegexProof",
    geoLt3: "Quanto costa RegexProof",
    geoLt4: "RegexProof è gratuito",
    geoLt5: "RegexProof vs farlo manualmente",
    geoWhenNot: "Utilizza invece una revisione umana qualificata — è un ausilio alla redazione. Le policy devono essere esaminate dal tuo consulente e dai responsabili del rischio.",
    demo1Title: "Benvenuto in {{name}}",
    demo1Detail: "Un tour di 60 secondi su come {{name}} trasforma le policy in controlli per gli agenti.",
    demo2Title: "Apri lo studio live",
    demo2Detail: "Incolla il testo della policy e scegli un dominio.",
    demo3Title: "Clicca su Genera controlli",
    demo3Detail: "Alimentato da policy-to-regole e elenchi di controllo per la conformità.",
    demo4Title: "Anteprima dei controlli delle policy",
    demo4Detail: "Esempio di output dalla pipeline basata su regole di questo prodotto:",
    demo4DetailEmpty: "I tuoi controlli delle policy appariranno qui — copia o raffina.",
    demo5Title: "Il tuo turno",
    demo5Detail: "Prova lo studio live, oppure inizia con {{name}}.",
  },
  chat: {
    typing: 'L’assistente sta scrivendo…',
    placeholder: 'Scrivi la tua domanda… (Invio per inviare)',
    openAria: 'Apri assistente IA',
    openTitle: 'Chiedi al nostro assistente IA',
    closeAria: 'Chiudi',
    escalated: 'Ti abbiamo collegato a un agente umano. Daremo seguito via email.',
    s1: 'Cosa fa questo strumento?',
    s2: 'Quanto costa?',
    s3: 'C’è un piano gratuito?',
  },
  pages: {
    howTitle: 'RegexProof — Come funziona',
    howDesc: 'Come funziona RegexProof in tre passaggi.',
    howEyebrow: 'Come funziona',
    howH1: 'Dall’input al risultato in 3 passaggi',
    how1Title: 'Incolla',
    how1Body: 'Incolla il testo della policy e scegli il dominio.',
    how2Title: 'Codifica',
    how2Body: 'Genera controlli richiamabili dall’agent e una checklist di conformità.',
    how3Title: 'Applica',
    how3Body: 'Collega le regole al runtime dell’agent; tieni gli umani per le eccezioni.',
    subscribe: 'Abbonati',
    ucTitle: 'RegexProof — Casi d’uso',
    ucDesc: 'Come RegexProof aiuta i team di conformità e le piattaforme agent.',
    ucEyebrow: 'Casi d’uso',
    ucH1: 'Pensato per conformità e piattaforme agent',
    ucIntro: 'Scegli il tuo segmento per vedere i workflow che contano di più.',
    uc1Title: 'Policy finanziarie',
    uc1Pain: 'Rimborsi e approvazioni devono essere verificabili dalla macchina.',
    uc1Help: 'Estrai condizioni + azioni che gli agent possono valutare.',
    uc2Title: 'Policy HR / safety',
    uc2Pain: 'Servono checklist richiamabili dagli agent.',
    uc2Help: 'Il selettore di dominio focalizza l’estrazione.',
    uc3Title: 'Funzioni IA UE',
    uc3Pain: 'Mappare regole ad alto rischio ai temi del regolamento IA.',
    uc3Help: 'Solo mapping di supporto decisionale.',
    uc4Title: 'Team di piattaforma',
    uc4Pain: 'I PDF di policy non raggiungono mai il runtime.',
    uc4Help: 'Regole esportabili per tool agent.',
    painLabel: 'Dolore:',
    helpLabel: 'Come aiuta RegexProof:',
    ucRefs: 'Riferimenti: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integrazioni',
    intDesc: 'Destinazioni di export, API e opzioni BYOK di RegexProof.',
    intEyebrow: 'Integrazioni',
    intH1: 'Collegati al tuo stack',
    intIntro: 'Solo integrazioni oneste. Non pubblicizziamo connettori non ancora spediti.',
    int1Title: 'Regole esportabili',
    int1Body: 'Export JSON/checklist per tool agent.',
    int2Title: 'API',
    int2Body: 'Rigenera quando le policy cambiano.',
    int3Title: 'Mapping regolamento IA UE',
    int3Body: 'Puntatori per temi ad alto rischio.',
    int4Title: 'BYOK',
    int4Body: 'Chiavi solo server-side quando offerte.',
    intHonesty: 'Nota di onestà: l’enforcement a runtime è compito del tuo sistema; noi generiamo controlli candidati.',
    secTitle: 'RegexProof — Sicurezza e conformità',
    secDesc: 'Come RegexProof tratta i tuoi dati e la sua postura di conformità onesta.',
    secEyebrow: 'Sicurezza e conformità',
    secH1: 'I tuoi dati, la nostra postura',
    secIntro: 'RegexProof elabora gli input che invii per l’analisi. Questa pagina dice chiaramente cosa trattiamo e cosa non rivendichiamo.',
    secHandleH2: 'Cosa trattiamo',
    secHandleBody: 'testo di policy aziendale e selezioni di dominio usati per generare controlli eseguibili dall’agent.',
    secDataH2: 'Impegni sul trattamento dei dati',
    secData1: 'Gli invii passano nella pipeline prodotto e sono conservati solo quanto serve al tuo audit log (piani a pagamento) o fino all’eliminazione dell’esecuzione.',
    secData2: 'Applichiamo controlli di accesso coerenti con il GDPR Art. 32 quando si trattano dati personali.',
    secData3: 'Le chiavi BYOK (Enterprise), quando offerte, sono memorizzate solo server-side e mai esposte al browser.',
    secHonesty: 'Regola di onestà: RegexProof trasforma il testo di policy in regole candidate. Non garantiamo enforcement corretto, copertura al 100% né che gli agent non perdano mai una violazione.',
    secPostureH2: 'La nostra postura di conformità',
    secPosture1: 'RegexProof è supporto decisionale, non uno studio legale, una clinica o un auditor certificato.',
    secPosture2: 'Per un parere vincolante, consulta un professionista qualificato del dominio.',
    secSubH2: 'Subincaricatari e pagamenti',
    secSub1: 'I pagamenti sono elaborati da Waffo Pancake (merchant of record).',
    secSub2: 'Vedi Privacy e Terms per le condizioni complete.',
    secRefs: 'Riferimenti: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Torna alla home',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Post definizionali e di come-fare su trappole ECMAScript vs PCRE, euristiche ReDoS e confini di stesura regex onesti.',
    glanceTitle: 'Cosa include questo prodotto a colpo d’occhio?',
    glance1: 'Definizione in linguaggio chiaro, FAQ e riferimenti per answer engine',
    glance2: '3 passaggi di workflow revisionabili (input → genera → review)',
    glance3: 'Output di supporto decisionale — resti nel loop; nessun conteggio utenti inventato',
    eyebrow: 'Blog · GEO',
    h1: 'Applicazioni regex più sicure, spiegate',
    lead: 'Possiedi le query definizionali che i team chiedono prima di incollare un pattern nella parsing di produzione.',
    targetQuery: 'Query target:',
    guidesTitle: 'Quali deep-dive GEO leggere per prime?',
    guidesLead: 'Spiegazioni dettagliate sui tranelli dei dialetti e sugli euristici ReDoS con disclaimer di supporto alle decisioni.',
    footerNote: 'Publish + syndicate secondo gtm-launch (IH + indici GEO). Ogni post porta 3 ref autorevoli.',
    post1Title: 'Policy pack per agent IA e NIST AI RMF',
    post1Desc: 'Come i policy pack si mappano sulle funzioni NIST AI RMF e sui temi del regolamento IA UE — supporto decisionale, non un certificato.',
    post2Title: 'Tool consentiti vs agent aperti',
    post2Desc: 'Perché limitare l’accesso ai tool è un controllo, non un feature toggle — con regole di onestà per agent aperti.',
    readI18n: 'Leggi versione multilingue',
    readEnHtml: 'Leggi articolo inglese completo',
    pillarSlug: 'ecmascript-vs-pcre-dialect-traps-2026',
    pillarEyebrow: 'di RegexProof (LX AI)',
    pillarH1: 'Tranelli dei dialetti ECMAScript vs PCRE',
    pillarLead: 'Lo stesso regex può avere significati diversi tra i motori. Conosci le trappole prima di copiare una risposta da Stack Overflow in Node o Python.',
    pillarH2a: 'Differenze di lookahead e possessive',
    pillarPa1: 'I quantificatori possessivi PCRE e alcune forme di lookbehind sono mancanti o diversi in ECMAScript — convalida sul motore di destinazione.',
    pillarH2b: 'Unicode e boundary di parole',
    pillarPb1: '\\\\\\\\w e le escape di proprietà Unicode si comportano in modo diverso; specifica flag e dialetto esplicitamente.',
    pillarH2c: 'Modalità di newline e dotall',
    pillarPc1: 'Il punto non corrisponde al newline allo stesso modo tra i flavor — documenta la gestione delle righe attesa.',
    pillarH2d: 'Testa sul motore reale',
    pillarPd1: 'Eseguire sempre nuovamente i campioni sul motore regex di produzione dopo la stesura.',
    pillarDisclaimer: 'Supporto alle decisioni — non un verificatore formale.',
    pillarFaq1Q: 'Una regex può essere portabile ovunque?',
    pillarFaq1A: 'Raramente. Preferisci bozzetti e test specifici del dialetto per ogni runtime.',
    pillarFaq2Q: 'RegexProof prova la correttezza?',
    pillarFaq2A: 'No. Sbozza e segnala rischi; gli ingegneri sono responsabili della verifica.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'Euristica ReDoS',
    pillar2H1: 'Euristiche ReDoS per applicazioni regex',
    pillar2Lead: 'I quantificatori annidati su input non attendibili possono bloccare i server. Le euristiche aiutano a rilevare forme a rischio prima che raggiungano la produzione — non una garanzia.',
    pillar2H2a: 'Quantificatori annidati',
    pillar2Pa1: 'L\'annidamento del tipo (a+)+b è un classico modello di backtracking catastrofico.',
    pillar2H2b: 'Bombe di alternazione',
    pillar2Pb1: 'Le alternazioni sovrapposte con quantificatori amplificano i percorsi di backtracking.',
    pillar2H2c: 'Timeout e limiti',
    pillar2Pc1: 'Abbinare modelli più sicuri con limiti di dimensione di input e timeout del motore.',
    pillar2H2d: 'Input avversario fuzz',
    pillar2Pd1: 'I flag euristici sono l\'inizio — esegui fuzz con stringhe create prima di fidarti di un modello.',
    pillar2Disclaimer: 'Bozze di supporto alle decisioni. Non una garanzia di completezza.',
    pillar2Faq1Q: 'Sono sufficienti le euristiche?',
    pillar2Faq1A: 'No. Combina con timeout, limiti di dimensione e revisione.',
    pillar2Faq2Q: 'Perché concentrarsi su regex di applicazione?',
    pillar2Faq2A: 'L\'input controllato dall\'utente rende ReDoS un rischio di disponibilità, non solo un problema di stile.',
    pillar2Back: 'Torna al blog',
    pillarBack: 'Torna al blog',
    card1Title: 'Cosa sono le regole di drafting consapevoli del dialetto?',
    card1Body: 'Generazione di un modello con assunzioni ECMAScript vs PCRE esplicite e casi limite — supporto alle decisioni, non un verificatore formale.',
    card2Title: 'Drafting consapevole di ReDoS',
    card2Body: 'Descrivi la corrispondenza; ottieni un candidato regex con spiegazione parte per parte e euristici ReDoS — non una garanzia di completezza.',
  },
} as const

export default it as unknown as Messages
