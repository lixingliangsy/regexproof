// locales/fr.ts — RegexProof French catalog (mirrors en.ts shape).
// Terms: Générer une politique / politique de confidentialité (iubenda FR);
// responsable du traitement / sous-traitant / traitement (RGPD Art.4).

import type { Messages } from '../types'

const fr = {
  meta: {
    title: 'RegexProof · Transformer la politique d’entreprise en règles pour agents',
    description:
      'RegexProof lit le texte de votre politique et génère des contrôles appelables par agents plus une checklist de conformité, liés aux obligations du règlement UE sur l’IA — pour une politique exécutable, pas seulement un PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Transformer la politique d’entreprise en règles appliquées par agents',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Retour au hub',
    home: 'Accueil',
    features: 'Fonctionnalités',
    useCases: 'Cas d’usage',
    integrations: 'Intégrations',
    howItWorks: 'Comment ça marche',
    studio: 'Studio',
    security: 'Sécurité',
    pricing: 'Tarifs',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Support',
    signIn: 'Connexion',
    subscribe: 'S’abonner',
    getStarted: 'Commencer',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Transformer la politique d’entreprise en règles appliquées par agents',
    subtitle:
      'RegexProof lit le texte de votre politique et génère des contrôles appelables par agents plus une checklist de conformité, liés aux obligations du règlement UE sur l’IA — pour une politique exécutable, pas seulement un PDF.',
    keyTakeaways: 'Points clés',
    takeaway1: 'Transformez la politique en règles pour agents — sans code.',
    takeaway2: 'Les garde-fous s’attachent aux workflows d’agents et échouent en mode sécurisé.',
    takeaway3: 'Commencez ; Pro à partir de 29 $/mois.',
    ctaPrimary: 'S’abonner',
    ctaSecondary: 'Voir la démo',
    note: 'Sans carte bancaire · Résiliation à tout moment',
    playDemo: 'Lancer la démo ▶',
    walkthrough: 'Cliquez pour la visite guidée',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Note moyenne',
    uptime: 'Disponibilité',
    timeToValue: 'Délai de valeur',
  },
  pricing: {
    heading: 'Des offres simples qui évoluent',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    perMonth: '/mois',
    mostPopular: 'Le plus populaire',
    getPro: 'Obtenir Pro',
    orYearly: 'Ou payer à l’année — ${{amount}}/mois',
    custom: 'Sur mesure',
    contactSales: 'Contacter les ventes',
    configureByok: 'Configurer BYOK',
    getStarted: 'Commencer',
    freeForever: 'gratuit pour toujours',
    billedMonthly: 'facturé mensuellement',
    save: 'économiser',
    freeFeat1: 'Exécutions IA limitées (10/jour · 50/mois)',
    freeFeat2: 'Démo Studio (sans frais LLM supplémentaires)',
    proFeat1: 'IA incluse : 300 générations/mois · usage équitable (gpt-4o-mini)',
    proFeat2: 'Pas d’abonnement ChatGPT séparé requis',
    proFeat3: 'Support prioritaire · 2 mois offerts en annuel',
    entFeat1: 'Sièges équipe · accès API (feuille de route)',
    entFeat2: 'BYOK optionnel (votre clé OpenAI)',
  },
  faq: {
    title: 'Vos questions, nos réponses',
    geoTitle: 'RegexProof — questions fréquentes',
    items: [
      {
        q: 'Qu\'est-ce que RegexProof génère ?',
        a: 'Un brouillon de regex sensible au dialecte avec explication partie par partie, pièges ECMAScript vs PCRE et heuristiques ReDoS — support de décision, et non un vérificateur formel.',
      },
      {
        q: 'Est-ce un avis juridique ou une certification ?',
        a: 'Non. Les sorties sont une aide à la décision. Faites-les revoir par un conseil et les propriétaires du risque avant production. Nous ne revendiquons aucune certification ISO, CMP ou régulateur.',
      },
      {
        q: 'Puis-je résilier à tout moment ?',
        a: 'Oui. Les offres en libre-service se résilient à tout moment ; l’accès continue jusqu’à la fin de la période.',
      },
      {
        q: 'Faut-il une carte bancaire pour commencer ?',
        a: 'Non. Inscrivez-vous par e-mail ou utilisez le mode Démo du studio, puis passez à une offre supérieure quand vous êtes prêt.',
      },
      {
        q: 'Ai-je besoin de mon propre abonnement ChatGPT / OpenAI ?',
        a: 'Non pour Free/Pro. Les exécutions IA sont incluses (usage équitable) via notre clé plateforme. Enterprise peut apporter sa propre clé OpenAI (BYOK) sur /settings (clé côté serveur uniquement).',
      },
      {
        q: 'Qu’est-ce que l’usage équitable / si je touche la limite IA ?',
        a: 'Pro inclut environ 300 générations IA/mois (et un plafond quotidien) sur gpt-4o-mini. En cas de limite, Studio renvoie un résultat mock/démo jusqu’au reset — ou passez à une offre supérieure / BYOK Enterprise.',
      },
      {
        q: 'Le paiement est-il sécurisé ?',
        a: 'Les paiements sont traités par Waffo Pancake (commerçant responsable).',
      },
      {
        q: 'Que se passe-t-il après le paiement ?',
        a: 'Vous recevez une confirmation d’accès ; l’exécution est suivie via webhook et journaux de commande.',
      },
    ],
  
    geoItems: [
      {
        q: 'Que produit RegexProof ?',
        a: 'Un brouillon de politique structuré : outils, données et chemins d’escalade éditables.',
      },
      {
        q: 'Est-ce un conseil juridique ?',
        a: 'Non. Aide à la rédaction. Les politiques doivent être revues par votre conseil et vos risk owners.',
      },
      {
        q: 'Comment marche le mode Démo ?',
        a: 'Activez Démo sans IA live ; le mode live nécessite une clé configurée.',
      },
      {
        q: 'Mappe-t-il l’AI Act UE ?',
        a: 'Les narratifs peuvent citer des thèmes de gouvernance ; cela ne certifie pas la conformité.',
      },
      {
        q: 'Les politiques sont-elles versionnées ?',
        a: 'Les runs stockent rulesetVersion et runId pour le suivi des changements.',
      },
      {
        q: 'Qui devrait l’utiliser ?',
        a: 'Ingénieurs plateforme et conformité définissant des garde-fous avant la production.',
      },
      {
        q: 'Dans quels pays/régions ?',
        a: 'Accessible mondialement ; paiements Waffo Pancake variables selon la région.',
      },
      {
        q: 'Conforme RGPD / privacy ?',
        a: 'Les entrées ne génèrent que votre sortie et ne sont jamais vendues. Voir Privacy ; Enterprise peut inclure DPA/NDA.',
      },
      {
        q: 'Quelles langues ?',
        a: 'L’UI couvre dix locales. Les brouillons suivent la langue UI si l’IA live est configurée.',
      },
    ],
},
  footer: {
    product: 'Produit',
    company: 'Entreprise',
    resources: 'Ressources',
    legal: 'Mentions légales',
    about: 'À propos',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    refund: 'Remboursement',
    support: 'Support',
    feedback: 'Feedback',
    rights: 'Tous droits réservés.',
    partOfFleet: 'Fait partie de la flotte LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Commencez plus intelligemment dès aujourd’hui',
    subtitle: 'Rejoignez les builders qui utilisent RegexProof. Essai gratuit — sans carte.',
    emailPlaceholder: 'Entrez votre e-mail',
    saving: 'Enregistrement…',
    cta: 'Commencer',
    trust: 'Fiable · Résiliation à tout moment',
  },
  feedback: {
    open: 'Feedback',
    title: 'Envoyer un feedback',
    blurb: 'Dites-nous ce qui a fonctionné, ce qui a cassé, ou ce que vous voulez ensuite.',
    fullPage: 'Préférez une page entière ?',
    openPage: 'Ouvrir /feedback',
    close: 'Fermer le feedback',
    helpful: 'Ce résultat vous a-t-il été utile ?',
    yes: 'Oui',
    no: 'Non',
    thanks: 'Merci pour votre feedback.',
    commentPlaceholder: 'Commentaire d’une ligne (optionnel)',
    generalTitle: 'Feedback général',
    generalSub: 'Dites-nous ce que vous en pensez',
    generalPh: 'Qu’avez-vous aimé, détesté ou remarqué ?',
    ideaTitle: 'J’ai une idée',
    ideaSub: 'Suggérer une fonctionnalité ou une amélioration',
    ideaPh: 'Décrivez votre idée et le problème qu’elle résoudrait…',
    issueTitle: 'J’ai trouvé un problème',
    issueSub: 'Signaler un bug ou un incident',
    issuePh: 'Que s’est-il passé, qu’attendiez-vous, et comment reproduire ?',
    submit: 'Envoyer le feedback',
    submitting: 'Envoi…',
    done: 'Merci — feedback reçu.',
    emailOptional: 'E-mail (optionnel)',
    category: 'Catégorie',
    yourFeedback: 'Votre feedback',
    attachment: 'Pièce jointe (optionnel)',

    back: '← Retour au type de feedback',
    pickTitle: 'Quel feedback avez-vous ?',
    pickSub: 'Choisissez une option. Détails et catégorie au prochain étape.',
    thanksTitle: 'Merci pour votre feedback !',
    thanksBody: 'Nous l’avons reçu et l’équipe répondra bientôt. Vous pouvez renvoyer à tout moment.',
    submitAnother: 'Envoyer un autre',
    detailed: 'Feedback détaillé',
    send: 'Envoyer',
    sending: 'Envoi...',
    thanksInline: 'Merci — enregistré. Nous lisons chaque retour.',
    errorInline: 'Envoi impossible pour le moment. Utilisez le bouton Feedback ou /feedback.',
    inlineCommentPh: 'Une ligne : que faut-il améliorer ? (optionnel)',
  },
  legal: {
    privacyPolicy: 'Politique de confidentialité',
    generatePolicy: 'Générer une politique',
    controller: 'Responsable du traitement',
    processor: 'Sous-traitant',
    processing: 'Traitement',
    personalData: 'Données personnelles',
    dataSubject: 'Personne concernée',
    dpo: 'Délégué à la protection des données',
    checklist: 'Checklist de conformité',
    policyChecks: 'Vérifications de sécurité regex',
    encodePolicy: 'Encodez vos règles de modèle',
    definitionTitle: 'RegexProof — définition',
    whatItIs: 'De quoi il s’agit',
    whatNotTitle: 'Ce que ce n’est PAS',
    whatNot1: 'Ni un cabinet d’avocats, ni une plateforme GRC, ni un organisme de certification ISO.',
    whatNot2: 'Aucune garantie que les politiques rédigées satisferont chaque régulateur ou auditeur.',
    whatNot3: 'Pas un vérificateur formel — traitez les regex générés comme des brouillons sous revue d\'ingénieur.',
    rolesHint:
      'Lorsque les packs mentionnent des rôles privacy, nous utilisons les libellés RGPD art. 4 : responsable du traitement et sous-traitant (aide à la décision uniquement).',
  },
  benchmark: {
    frameworksEyebrow: 'Cartographie des cadres',
    frameworksTitle: 'Les dialectes diffèrent. Les modèles se cassent discrètement.',
    frameworksNote:
      'Thèmes de support de décision — pas de garantie de complétude ou de preuve formelle.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'Heuristiques ReDoS',
    fw4: 'Appels de piège de dialecte',
    painEyebrow: 'Pourquoi les regex mordent',
    painTitle: 'Les modèles semblent corrects. La production bloque plus tard.',
    pain1Title: 'Pièges de dialecte',
    pain1Body: 'Les expressions avant, possessives et les classes Unicode diffèrent entre les moteurs ECMAScript et PCRE.',
    pain2Title: 'Risque ReDoS',
    pain2Body: 'Les quantificateurs imbriqués sur les entrées non fiables peuvent bloquer les boucles d\'événements et les API.',
    pain3Title: 'Lignes opaques',
    pain3Body: 'Les expressions régulières écrites à la main sans explication partie par partie sont difficiles à examiner en toute sécurité.',
    pain4Title: 'Problèmes après mise en production',
    pain4Body: 'Les timeouts et les correspondances incorrectes apparaissent souvent uniquement avec des données adverses ou désordonnées.',
    getEyebrow: 'Ce que vous obtenez',
    getTitle: 'Décrivez. Forgez. Révisez.',
    getLead:
      'De l\'anglais clair aux expressions régulières avec des rappels de sécurité — révisez avant la production.',
    get1Title: 'Brouillon de modèle de travail',
    get1Body: 'Un point de départ d\'expression régulière sensible au dialecte pour votre saveur de langue.',
    get2Title: 'Explication étape par étape',
    get2Body: 'Décomposition lisible pour que les réviseurs puissent remettre en question les hypothèses.',
    get3Title: 'Heuristiques ReDoS',
    get3Body: 'Indicateurs de quantificateurs imbriqués et de formes de backtrack catastrophique.',
    get4Title: 'Pièges de dialecte',
    get4Body: 'Différences entre ECMAScript et PCRE mises en évidence — aide à la décision, pas une preuve.',
    featuresEyebrow: 'Pourquoi RegexProof',
    featuresTitle: 'Tout ce dont vous avez besoin pour forger des regex plus sûrs',
    featuresBlurb: 'Conçu pour les ingénieurs qui ont besoin d\'appels de dialecte et de ReDoS sans un trou de recherche.',
    howTitle: 'RegexProof — Fonctionnement',
    how1Title: 'Coller',
    how1Body: 'Coller le texte de la politique et choisir le domaine.',
    how2Title: 'Encoder',
    how2Body: 'Générer des vérifications appelables par agent et une liste d\'erreurs de validation.',
    how3Title: 'Faire respecter',
    how3Body: 'Intégrer les règles dans votre runtime d\'agent ; conserver les humains pour les exceptions.',
    allPlansTitle: 'Tous les plans payants incluent',
    allPlans1: 'NL→studio regex',
    allPlans2: 'Appels de piège de dialecte',
    allPlans3: 'Heuristiques ReDoS (aide à la décision)',
    allPlans4: 'Support par e-mail sur les plans payants — pas de modules complémentaires cachés pour l\'utilisation de base du studio',
    honestyTitle: 'Limites honnêtes',
    honestyLead:
      'RegexProof est un outil d\'édition : personnalisez, testez et révisez avant de l\'envoyer à une entrée non fiable.',
    ctaStudio: 'Ouvrir le studio',
  },
  home: {
    whyEyebrow: 'Pourquoi {{name}}',
    featuresHeading: 'Tout ce dont vous avez besoin pour une expression régulière d\'application plus sûre',
    featuresCardBlurb: 'Conçu pour les ingénieurs qui ont besoin d\'explications et de conseils ReDoS sans courbe d\'apprentissage.',
    howHeading: 'De la description au modèle plus sûr en 3 étapes',
    how1Title: 'Coller la politique',
    how1Desc: 'Insérez une intention de correspondance en anglais clair et un dialecte.',
    how2Title: 'Compiler les règles',
    how2Desc: 'Heuristiques déterministes plus narrative optionnelle assistée par modèle.',
    how3Title: 'Appliquer',
    how3Desc: 'Exporter le brouillon avec des appels — sans garantie de complétude.',
    studioEyebrow: 'Studio en direct',
    studioHeading: 'Essayez sur cette page',
    studioWatchDemo: 'Voir la démo',
    studioOrRun: 'ou lancez un contrôle ci-dessous.',
    studioFormTitle: 'Forge de regex',
    demoMode: 'Mode démo (pas d’IA live)',
    socialHeading: 'Conçu pour les auteurs de modèles prudents',
    quickAnswers: 'Réponses rapides',
    howCompares: 'Comparaison',
    dimension: 'Dimension',
    manual: 'Manuel',
    whenNotToUse: 'Quand ne pas l’utiliser :',
    peopleAlsoSearch: 'Recherches associées',
    socialNote: 'La preuve sociale utilise des modèles jusqu\'à l\'existence de témoignages réels et consentis.',





































































































































    leadsInbox: "Boîte leads (CRUD démo)",
    filterEmail: "Filtrer l'e-mail…",
    allPlans: "Tous les forfaits",
    noLeads: "Aucun lead — envoyez le formulaire d'inscription.",
    colEmail: "E-mail",
    colPlan: "Forfait",
    colSource: "Source",
    delete: "Supprimer",
    deleteLeadTitle: "Supprimer le lead",
    deleteLeadWarn: "Cette action est irréversible.",
    deleteLeadBody: "Supprimer ce lead ? L'e-mail sera retiré définitivement de vos contacts.",
    cancel: "Annuler",
    relatedReading: "Lectures associées",
    productTour: "Visite produit",
    productDemo: "DÉMO PRODUIT",
    stepOf: "étape {{n}}/{{total}}",
    replay: "Rejouer",
    tryStudio: "Essayer le studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtrés",
    geoCmpDim: "Dimension",
    geoCmpManual: "Manuel",
    geoCmp1Dim: "Vitesse",
    geoCmp1Manual: "Heures à jours",
    geoCmp1Tool: "Minutes par exécution",
    geoCmp2Dim: "Cohérence",
    geoCmp2Manual: "Varie selon la personne",
    geoCmp2Tool: "Même jeu de règles à chaque fois",
    geoCmp3Dim: "Sortie",
    geoCmp3Manual: "Texte libre",
    geoCmp3Tool: "Résultat structuré et exportable",
    geoCmp4Dim: "Idéal pour",
    geoCmp4Manual: "Validation finale",
    geoCmp4Tool: "Aide à la décision de premier passage",
    related1Title: "Enveloppe IA vs fossé",
    related1Desc: "l'application de la politique comme un fossé durable.",
    related2Title: "liste de contrôle de conformité au EU AI Act",
    related2Desc: "mapper les devoirs des agents aux thèmes de l'Acte",
    related3Title: "lancement de Wave 1",
    related3Desc: "RegexProof est fourni avec le cluster de gouvernance",
    feat1: "Politique vers règles",
    feat2: "Liste de contrôle de conformité",
    feat3: "cartographie EU AI Act",
    feat4: "Règles exportables",
    geoQa1: "Politique vers règles",
    geoQa2: "Liste de contrôle de conformité",
    geoQa3: "cartographie EU AI Act",
    geoQa4: "Règles exportables",
    geoQa5: "Les tarifs commencent à $0 (Free).",
    geoLt1: "Qu'est-ce qu'RegexProof ?",
    geoLt2: "Comment fonctionne RegexProof ?",
    geoLt3: "Combien coûte RegexProof ?",
    geoLt4: "RegexProof est-il gratuit ?",
    geoLt5: "RegexProof vs faire cela manuellement",
    geoWhenNot: "Utilisez plutôt une revue humaine qualifiée — c'est une aide à la rédaction. Les politiques doivent être examinées par votre conseiller juridique et les responsables des risques.",
    demo1Title: "Bienvenue sur {{name}}",
    demo1Detail: "Une visite guidée de 60 secondes montrant comment {{name}} transforme les politiques en contrôles d'agent.",
    demo2Title: "Ouvrez le studio en direct",
    demo2Detail: "Collez le texte de la politique et choisissez un domaine.",
    demo3Title: "Cliquez sur Generate checks",
    demo3Detail: "Alimenté par la conversion politique en règles et les listes de contrôle de conformité.",
    demo4Title: "Aperçu des contrôles de politique",
    demo4Detail: "Exemple de sortie du pipeline basé sur des règles de ce produit :",
    demo4DetailEmpty: "Vos contrôles de politique apparaissent ici — copiez ou affinez.",
    demo5Title: "À vous de jouer",
    demo5Detail: "Essayez le studio en direct, ou commencez avec {{name}}.",
  },
  chat: {
    typing: 'L’assistant écrit…',
    placeholder: 'Posez votre question… (Entrée pour envoyer)',
    openAria: 'Ouvrir l’assistant IA',
    openTitle: 'Demander à notre assistant IA',
    closeAria: 'Fermer',
    escalated: 'Nous vous avons mis en relation avec un humain. Nous suivrons par e-mail.',
    s1: 'Que fait cet outil ?',
    s2: 'Combien ça coûte ?',
    s3: 'Y a-t-il une offre gratuite ?',
  },
  pages: {
    howTitle: 'RegexProof — Comment ça marche',
    howDesc: 'Comment RegexProof fonctionne en trois étapes.',
    howEyebrow: 'Comment ça marche',
    howH1: 'De l’entrée au résultat en 3 étapes',
    how1Title: 'Coller',
    how1Body: 'Collez le texte de politique et choisissez le domaine.',
    how2Title: 'Encoder',
    how2Body: 'Générez des contrôles appelables par agent et une checklist de conformité.',
    how3Title: 'Appliquer',
    how3Body: 'Branchez les règles dans le runtime agent ; gardez des humains pour les exceptions.',
    subscribe: 'S’abonner',
    ucTitle: 'RegexProof — Cas d’usage',
    ucDesc: 'Comment RegexProof aide les équipes conformité et plateformes d’agents.',
    ucEyebrow: 'Cas d’usage',
    ucH1: 'Conçu pour la conformité et les plateformes d’agents',
    ucIntro: 'Choisissez votre segment pour voir les workflows qui comptent le plus.',
    uc1Title: 'Politiques finance',
    uc1Pain: 'Remboursements et approbations doivent être vérifiables par machine.',
    uc1Help: 'Extraire conditions + actions que les agents peuvent évaluer.',
    uc2Title: 'Politiques RH / sécurité',
    uc2Pain: 'Besoin de checklists appelables par agent.',
    uc2Help: 'Le sélecteur de domaine focalise l’extraction.',
    uc3Title: 'Fonctions IA UE',
    uc3Pain: 'Mapper les règles à haut risque aux thèmes du règlement IA.',
    uc3Help: 'Mapping d’aide à la décision uniquement.',
    uc4Title: 'Équipes plateforme',
    uc4Pain: 'Les PDF de politique n’atteignent jamais le runtime.',
    uc4Help: 'Règles exportables pour outils d’agent.',
    painLabel: 'Douleur :',
    helpLabel: 'Comment RegexProof aide :',
    ucRefs: 'Références: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Intégrations',
    intDesc: 'Cibles d’export, API et options BYOK d’RegexProof.',
    intEyebrow: 'Intégrations',
    intH1: 'Branchez-vous à votre stack',
    intIntro: 'Seules des intégrations honnêtes sont listées. Nous ne publions pas de connecteurs non livrés.',
    int1Title: 'Règles exportables',
    int1Body: 'Export JSON/checklist pour outils d’agent.',
    int2Title: 'API',
    int2Body: 'Régénérer lorsque les politiques changent.',
    int3Title: 'Cartographie règlement IA UE',
    int3Body: 'Repères pour thèmes à haut risque.',
    int4Title: 'BYOK',
    int4Body: 'Clés côté serveur lorsqu’offertes.',
    intHonesty: 'Note d’honnêteté : l’application runtime est le travail de votre système ; nous générons des contrôles candidats.',
    secTitle: 'RegexProof — Sécurité & conformité',
    secDesc: 'Comment RegexProof traite vos données et sa posture de conformité honnête.',
    secEyebrow: 'Sécurité & conformité',
    secH1: 'Vos données, notre posture',
    secIntro: 'RegexProof traite les entrées que vous soumettez pour analyse. Cette page dit clairement ce que nous traitons et ce que nous ne revendiquons pas.',
    secHandleH2: 'Ce que nous traitons',
    secHandleBody: 'texte de politique d’entreprise et sélections de domaine utilisés pour générer des contrôles exécutables par agent.',
    secDataH2: 'Engagements de traitement des données',
    secData1: 'Les soumissions passent dans le pipeline produit et ne sont conservées que le temps nécessaire à votre journal d’audit (offres payantes) ou jusqu’à suppression de l’exécution.',
    secData2: 'Nous appliquons des contrôles d’accès cohérents avec le RGPD Art. 32 lorsque des données personnelles sont traitées.',
    secData3: 'Les clés BYOK (Enterprise), lorsqu’offertes, sont stockées côté serveur uniquement et jamais exposées au navigateur.',
    secHonesty: 'Règle d’honnêteté : RegexProof transforme le texte de politique en règles candidates. Nous ne garantissons pas une application correcte, une couverture à 100 %, ni que les agents ne manqueront jamais une violation.',
    secPostureH2: 'Notre posture de conformité',
    secPosture1: 'RegexProof est une aide à la décision, pas un cabinet d’avocats, une clinique ou un auditeur certifié.',
    secPosture2: 'Pour un avis engageant, consultez un professionnel qualifié du domaine.',
    secSubH2: 'Sous-traitants & paiements',
    secSub1: 'Les paiements sont traités par Waffo Pancake (merchant of record).',
    secSub2: 'Voir Privacy et Terms pour les conditions complètes.',
    secRefs: 'Références: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Retour à l’accueil',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Articles de définition et de démarche sur les pièges ECMAScript vs PCRE, les heuristiques ReDoS et les limites de rédaction de regex honnête.',
    glanceTitle: 'Que contient ce produit en un coup d’œil ?',
    glance1: 'Définition en langage clair, FAQ et références pour les moteurs de réponse',
    glance2: '3 étapes de workflow révisables (entrée → générer → revoir)',
    glance3: 'Sortie d’aide à la décision — vous restez dans la boucle ; pas de comptes utilisateurs inventés',
    eyebrow: 'Blog · GEO',
    h1: 'Regex d\'application plus sûre, expliqué',
    lead: 'Maîtrisez les requêtes de définition que les équipes posent avant de coller un modèle dans l\'analyse de production.',
    targetQuery: 'Requête cible :',
    guidesTitle: 'Quels deep-dives GEO lire en premier ?',
    guidesLead: 'Explications détaillées sur les pièges de dialecte et les heuristiques ReDoS avec des avertissements de support de décision.',
    footerNote: 'Publier + syndiquer selon gtm-launch (IH + index GEO). Chaque billet porte 3 refs autorisées.',
    post1Title: 'Packs de politique d’agents IA et NIST AI RMF',
    post1Desc: 'Comment les packs de politique se mappent aux fonctions NIST AI RMF et aux thèmes du règlement IA UE — aide à la décision, pas un certificat.',
    post2Title: 'Outils autorisés vs agents ouverts',
    post2Desc: 'Pourquoi contraindre l’accès aux outils est un contrôle, pas un simple interrupteur — avec des règles d’honnêteté pour les agents ouverts.',
    readI18n: 'Lire la version multilingue',
    readEnHtml: 'Lire l’article anglais complet',
    pillarSlug: 'ecmascript-vs-pcre-dialect-traps-2026',
    pillarEyebrow: 'par RegexProof (LX AI)',
    pillarH1: 'Pièges de dialecte ECMAScript vs PCRE',
    pillarLead: 'La même expression régulière peut avoir des significations différentes selon les moteurs. Connaissez les pièges avant de copier une réponse de Stack Overflow dans Node ou Python.',
    pillarH2a: 'Différences de lookahead et de possessivité',
    pillarPa1: 'Les quantificateurs possessifs PCRE et certaines formes de lookbehind sont manquants ou diffèrent dans ECMAScript — valider sur le moteur cible.',
    pillarH2b: 'Unicode et limites de mots',
    pillarPb1: '\\\\\\\\w et les échappements de propriétés Unicode se comportent différemment ; épingler les drapeaux et le dialecte explicitement.',
    pillarH2c: 'Nouveaux modes de ligne et de dotall',
    pillarPc1: 'Le point ne correspond pas à la nouvelle ligne de la même manière selon les saveurs — documenter la gestion des lignes attendue.',
    pillarH2d: 'Tester sur le moteur réel',
    pillarPd1: 'Réexécutez toujours les échantillons sur le moteur de regex de production après avoir rédigé.',
    pillarDisclaimer: 'Support de décision uniquement — pas un vérificateur formel.',
    pillarFaq1Q: 'Une seule expression régulière peut-elle être portable partout?',
    pillarFaq1A: 'Rarement. Préférez les brouillons et les tests spécifiques au dialecte par runtime.',
    pillarFaq2Q: 'RegexProof prouve-t-il la correction?',
    pillarFaq2A: 'Non. Il rédige et signale les risques ; les ingénieurs sont responsables de la vérification.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'Heuristiques ReDoS',
    pillar2H1: 'Heuristiques ReDoS pour l\'application regex',
    pillar2Lead: 'Les quantificateurs imbriqués sur les entrées non fiables peuvent bloquer les serveurs. Les heuristiques aident à détecter des formes risquées avant leur mise en production',
    pillar2H2a: 'Quantificateurs imbriqués',
    pillar2Pa1: 'Un imbriquement de type (a+)+b est un modèle classique de backtracking catastrophique.',
    pillar2H2b: 'Bombes d\'alternation',
    pillar2Pb1: 'Des alternations chevauchantes avec des quantificateurs amplifient les chemins de backtracking.',
    pillar2H2c: 'Délais d\'attente et plafonds',
    pillar2Pc1: 'Associez des modèles plus sûrs à des limites de taille d\'entrée et à des délais d\'attente de moteur.',
    pillar2H2d: 'Fuzz d\'entrée adverse',
    pillar2Pd1: 'Les indicateurs heuristiques sont un début — fuzz avec des chaînes craftées avant de faire confiance à un modèle.',
    pillar2Disclaimer: 'Brouillons de support de décision. Pas de garantie d\'exhaustivité.',
    pillar2Faq1Q: 'Les heuristiques suffisent-elles ?',
    pillar2Faq1A: 'Non. Combinez-les avec des délais d\'attente, des limites de taille et une révision.',
    pillar2Faq2Q: 'Pourquoi se concentrer sur l\'expression régulière de l\'application ?',
    pillar2Faq2A: 'L\'entrée contrôlée par l\'utilisateur rend ReDoS un risque d\'accessibilité, et non juste une question de style.',
    pillar2Back: 'Retour au blog',
    pillarBack: 'Retour au blog',
    card1Title: 'Qu\'est-ce que la rédaction de regex sensible au dialecte?',
    card1Body: 'Générer un modèle avec des hypothèses ECMAScript vs PCRE explicites et des cas limites — support de décision, pas un vérificateur formel.',
    card2Title: 'Rédaction sensible à ReDoS',
    card2Body: 'Décrivez la correspondance ; obtenez un candidat regex avec explication partie par partie et heuristiques ReDoS — pas de garantie de complétude.',
  },
} as const

export default fr as unknown as Messages
