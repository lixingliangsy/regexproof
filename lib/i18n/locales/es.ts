// locales/es.ts — RegexProof full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const es = {
  meta: {
    title: 'RegexProof · Convierte la política de empresa en reglas aplicadas por agentes',
    description: 'RegexProof lee el texto de tu política de empresa y genera comprobaciones invocables por agentes más una checklist de cumplimiento, mapeada a obligaciones del AI Act de la UE — para que la política sea ejecutable, no solo un PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Convierte la política de empresa en reglas aplicadas por agentes',
    microSaas: 'Micro SaaS',
    menu: 'Menú',
  },
  nav: {
    backToHub: 'Volver al hub',
    home: 'Inicio',
    features: 'Funciones',
    useCases: 'Casos de uso',
    integrations: 'Integraciones',
    howItWorks: 'Cómo funciona',
    studio: 'Studio',
    security: 'Seguridad',
    pricing: 'Precios',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Soporte',
    signIn: 'Iniciar sesión',
    subscribe: 'Suscribirse',
    getStarted: 'Empezar',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Convierte la política de empresa en reglas aplicadas por agentes',
    subtitle: 'RegexProof lee el texto de tu política de empresa y genera comprobaciones invocables por agentes más una checklist de cumplimiento, mapeada a obligaciones del AI Act de la UE — para que la política sea ejecutable, no solo un PDF.',
    keyTakeaways: 'Puntos clave',
    takeaway1: 'Convierte la política de empresa en reglas aplicadas por agentes — sin código.',
    takeaway2: 'Las barreras se unen a los flujos del agente y fallan en cerrado ante violaciones.',
    takeaway3: 'Empieza; Pro desde 29 $/mes.',
    ctaPrimary: 'Suscribirse',
    ctaSecondary: 'Ver demo',
    note: 'Sin tarjeta de crédito · Cancela cuando quieras',
    playDemo: 'Reproducir demo ▶',
    walkthrough: 'Haz clic para ver el recorrido',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Valoración media',
    uptime: 'Disponibilidad',
    timeToValue: 'Tiempo hasta valor',
  },
  pricing: {
    heading: 'Planes simples que escalan',
    monthly: 'Mensual',
    yearly: 'Anual',
    perMonth: '/mes',
    mostPopular: 'Más popular',
    getPro: 'Obtener Pro',
    orYearly: 'O paga anual — ${{amount}}/mes',
    custom: 'Personalizado',
    contactSales: 'Contactar ventas',
    configureByok: 'Configurar BYOK',
    getStarted: 'Empezar',
    freeForever: 'gratis para siempre',
    billedMonthly: 'facturado mensualmente',
    save: 'ahorra',
    freeFeat1: 'Ejecuciones diarias de IA limitadas (10/día · 50/mes)',
    freeFeat2: 'Demo de Studio (sin cargo extra de LLM)',
    proFeat1: 'IA incluida: 300 gens/mes · fair use (gpt-4o-mini)',
    proFeat2: 'No se requiere suscripción separada a ChatGPT',
    proFeat3: 'Soporte prioritario · 2 meses gratis con anual',
    entFeat1: 'Asientos de equipo · Acceso API (roadmap)',
    entFeat2: 'BYOK opcional (tu clave OpenAI)',
  },
  faq: {
    title: 'Tus preguntas, respondidas',
    geoTitle: 'RegexProof — preguntas frecuentes',
    items: [
      {
        q: '¿Qué genera RegexProof?',
        a: 'Un borrador de regex con conciencia de dialecto con explicación parte por parte, trampas de ECMAScript vs PCRE y heurísticas de ReDoS: soporte de decisión, no un verificador formal.',
      },
      {
        q: '¿Es asesoramiento jurídico o una certificación?',
        a: 'No. Los resultados son borradores de apoyo a la decisión. Haz que counsel y responsables de riesgo revisen antes de producción. No reclamamos certificación ISO, CMP ni de regulador.',
      },
      {
        q: '¿Puedo cancelar en cualquier momento?',
        a: 'Sí. Los planes self-serve se cancelan cuando quieras; el acceso continúa hasta el fin del periodo.',
      },
      {
        q: '¿Necesito tarjeta de crédito para empezar?',
        a: 'No. Empieza con registro por email o modo Demo en el studio, y mejora cuando estés listo.',
      },
      {
        q: '¿Necesito mi propia suscripción a ChatGPT / OpenAI?',
        a: 'No para Free/Pro. Las ejecuciones de IA están incluidas en tu plan (fair use) con nuestra clave de plataforma. Enterprise puede opcionalmente traer su propia clave OpenAI (BYOK) — configúrala en /settings (la clave permanece solo en el servidor).',
      },
      {
        q: '¿Qué es Fair Use / qué pasa si alcanzo el límite de IA?',
        a: 'Pro incluye unas 300 generaciones de IA/mes (y un tope diario) en gpt-4o-mini. Si alcanzas el límite fair use, Studio devuelve un resultado mock/demo hasta el reinicio diario o mensual — o mejora / usa Enterprise BYOK para mayor volumen.',
      },
      {
        q: '¿Es seguro el checkout?',
        a: 'Los pagos los procesa Waffo Pancake (merchant of record).',
      },
      {
        q: '¿Qué ocurre después de pagar?',
        a: 'Recibes confirmación de acceso; el cumplimiento se rastrea vía webhook + registros de pedido.',
      },
    ],
  
    geoItems: [
      {
        q: '¿Qué produce RegexProof?',
        a: 'Un borrador de política estructurado sobre herramientas, datos y rutas de escalado editable.',
      },
      {
        q: '¿Es consejo legal?',
        a: 'No. Es ayuda de redacción. Las políticas deben ser revisadas por su consejo y risk owners.',
      },
      {
        q: '¿Cómo funciona el modo Demo?',
        a: 'Active Demo sin IA en vivo; el modo en vivo necesita una clave configurada.',
      },
      {
        q: '¿Mapea el AI Act UE?',
        a: 'Los narrativos pueden citar temas de gobernanza; no certifica conformidad.',
      },
      {
        q: '¿Se pueden versionar políticas?',
        a: 'Las ejecuciones guardan rulesetVersion y runId para seguimiento de cambios.',
      },
      {
        q: '¿Quién debería usarlo?',
        a: 'Ingenieros de plataforma y cumplimiento que definen guardrails antes de producción.',
      },
      {
        q: '¿En qué países/regiones?',
        a: 'Accesible mundialmente; pagos Waffo Pancake pueden variar por región.',
      },
      {
        q: '¿Cumple GDPR/privacidad?',
        a: 'Las entradas solo generan su salida y nunca se venden. Ver Privacy; Enterprise puede incluir DPA/NDA.',
      },
      {
        q: '¿Qué idiomas admite?',
        a: 'La UI cubre diez locales. Los borradores siguen el idioma de la UI si hay IA en vivo.',
      },
    ],
},
  footer: {
    product: 'Producto',
    company: 'Empresa',
    resources: 'Recursos',
    legal: 'Legal',
    about: 'Acerca de',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    refund: 'Reembolso',
    support: 'Soporte',
    feedback: 'Feedback',
    rights: 'Todos los derechos reservados.',
    partOfFleet: 'Parte de la flota LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Empieza con más inteligencia hoy',
    subtitle: 'Únete a builders que usan RegexProof. Prueba gratis — sin tarjeta.',
    emailPlaceholder: 'Introduce tu email',
    saving: 'Guardando…',
    cta: 'Empezar',
    trust: 'De confianza · Cancela cuando quieras',
  },
  feedback: {
    open: 'Feedback',
    title: 'Enviar feedback',
    blurb: 'Cuéntanos qué funcionó, qué falló o qué quieres a continuación.',
    fullPage: '¿Prefieres una página completa?',
    openPage: 'Abrir /feedback',
    close: 'Cerrar feedback',
    helpful: '¿Te resultó útil este resultado?',
    yes: 'Sí',
    no: 'No',
    thanks: 'Gracias por el feedback.',
    commentPlaceholder: 'Comentario opcional de una línea',
    generalTitle: 'Feedback general',
    generalSub: 'Cuéntanos qué piensas',
    generalPh: '¿Qué te gustó, qué no, o qué notaste al usar el producto?',
    ideaTitle: 'Tengo una idea',
    ideaSub: 'Sugiere una función o mejora',
    ideaPh: 'Describe tu idea y el problema que resolvería…',
    issueTitle: 'Encontré un problema',
    issueSub: 'Reporta un bug o incidencia',
    issuePh: '¿Qué ocurrió, qué esperabas y cómo podemos reproducirlo?',
    submit: 'Enviar feedback',
    submitting: 'Enviando…',
    done: 'Gracias — feedback recibido.',
    emailOptional: 'Email (opcional)',
    category: 'Categoría',
    yourFeedback: 'Tu feedback',
    attachment: 'Adjunto (opcional)',

    back: '← Volver al tipo de feedback',
    pickTitle: '¿Qué feedback tienes?',
    pickSub: 'Elige uno para empezar. Puedes añadir detalles y una categoría precisa en el siguiente paso.',
    thanksTitle: '¡Gracias por tu feedback!',
    thanksBody: 'Lo hemos recibido y nuestro equipo hará seguimiento pronto. Puedes enviar de nuevo cuando quieras.',
    submitAnother: 'Enviar otro',
    detailed: 'Feedback detallado',
    send: 'Enviar',
    sending: 'Enviando...',
    thanksInline: 'Gracias - registrado. Leemos cada uno.',
    errorInline: 'No se pudo enviar ahora. Usa el botón Feedback o /feedback.',
    inlineCommentPh: 'Una línea: ¿qué debemos mejorar? (opcional)',
  },
  legal: {
    privacyPolicy: 'Política de privacidad',
    generatePolicy: 'Generar política',
    controller: 'Responsable',
    processor: 'Encargado',
    processing: 'Tratamiento',
    personalData: 'Datos personales',
    dataSubject: 'Interesado',
    dpo: 'Delegado de protección de datos',
    checklist: 'Checklist de cumplimiento',
    policyChecks: 'Comprobaciones de seguridad de regex',
    encodePolicy: 'Codifique sus reglas de patrón',
    definitionTitle: 'RegexProof — definición',
    whatItIs: 'Qué es',
    whatNotTitle: 'Qué NO es',
    whatNot1: 'No es un bufete, plataforma GRC ni organismo de certificación ISO.',
    whatNot2: 'No garantiza que las políticas redactadas satisfagan a todo regulador o auditor.',
    whatNot3: 'No es un verificador formal: trate las regex generadas como borradores bajo revisión de ingeniero.',
    rolesHint: 'Cuando los packs mencionan roles de privacidad, usamos etiquetas del GDPR Art.4: Responsable y Encargado (solo apoyo a la decisión).',
  },
  benchmark: {
    frameworksEyebrow: 'Mapeo de marcos',
    frameworksTitle: 'Los dialectos difieren. Los patrones se rompen silenciosamente.',
    frameworksNote: 'Temas de soporte de decisiones: no es una garantía de completitud ni una prueba formal.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'Heurísticas de ReDoS',
    fw4: 'Llamadas de trampa de dialecto',
    painEyebrow: 'Por qué regex muerde',
    painTitle: 'Los patrones parecen correctos. La producción se cuelga más tarde.',
    pain1Title: 'Trampas de dialecto',
    pain1Body: 'Lookahead, posesivo y clases Unicode difieren en los motores ECMAScript y PCRE.',
    pain2Title: 'Riesgo de ReDoS',
    pain2Body: 'Cuantificadores anidados en entrada no confiable pueden bloquear bucles de eventos y API.',
    pain3Title: 'Una línea opaca',
    pain3Body: 'Las expresiones regulares escritas a mano sin explicación parte por parte son difíciles de revisar de manera segura.',
    pain4Title: 'Problemas después de la entrega',
    pain4Body: 'Los tiempos de espera y las coincidencias falsas suelen aparecer solo con datos adversos o desordenados.',
    getEyebrow: 'Lo que obtienes',
    getTitle: 'Describe. Forja. Revisa.',
    getLead: 'De inglés plano a regex con llamadas de seguridad — revisa antes de la producción.',
    get1Title: 'Borrador de patrón de trabajo',
    get1Body: 'Un punto de partida de expresión regular con conciencia de dialecto para tu sabor de lenguaje.',
    get2Title: 'Explicación parte por parte',
    get2Body: 'Desglose legible para que los revisores puedan cuestionar suposiciones.',
    get3Title: 'Heurísticas de ReDoS',
    get3Body: 'Indicadores de cuantificadores anidados y formas de retroceso catastrófico.',
    get4Title: 'Trampas de dialecto',
    get4Body: 'Diferencias entre ECMAScript y PCRE destacadas — soporte de decisión, no una prueba.',
    featuresEyebrow: 'Por qué RegexProof',
    featuresTitle: 'Todo lo que necesitas para forjar regex más seguros',
    featuresBlurb: 'Diseñado para ingenieros que necesitan llamadas de dialecto y ReDoS sin un agujero de conejo de investigación.',
    howTitle: 'RegexProof — Cómo funciona',
    how1Title: 'Pegar',
    how1Body: 'Pegar texto de política y elegir dominio.',
    how2Title: 'Codificar',
    how2Body: 'Generar comprobaciones llamables por agente y una lista de errores de validación.',
    how3Title: 'Hacer cumplir',
    how3Body: 'Conectar reglas en tiempo de ejecución del agente; mantener a los humanos para excepciones.',
    allPlansTitle: 'Todos los planes de pago incluyen',
    allPlans1: 'NL→estudio de regex',
    allPlans2: 'Llamadas de trampa de dialecto',
    allPlans3: 'Heurísticas ReDoS (soporte de decisión)',
    allPlans4: 'Soporte por correo electrónico en planes pagos — no hay complementos ocultos para el uso del estudio principal',
    honestyTitle: 'Límites honestos',
    honestyLead: 'RegexProof es una herramienta de creación: personalice, pruebe y revise antes de enviar a una entrada no confiable',
    ctaStudio: 'Abrir studio',
  },
  home: {
    whyEyebrow: 'Por qué {{name}}',
    featuresHeading: 'Todo lo que necesita para una aplicación de regex más segura',
    featuresCardBlurb: 'Diseñado para ingenieros que necesitan explicaciones y sugerencias ReDoS sin una curva de aprendizaje',
    howHeading: 'De descripción a patrón más seguro en 3 pasos',
    how1Title: 'Pegar política',
    how1Desc: 'Coloque una intención de coincidencia en inglés plano y dialecto',
    how2Title: 'Compilar reglas',
    how2Desc: 'Heurísticas deterministas más narrativa asistida por modelo opcional.',
    how3Title: 'Aplicar',
    how3Desc: 'Exportar el borrador con llamadas — no es una garantía de completitud.',
    studioEyebrow: 'Studio en vivo',
    studioHeading: 'Pruébalo en esta página',
    studioWatchDemo: 'Ver demo',
    studioOrRun: 'o ejecuta un control abajo.',
    studioFormTitle: 'Forja de Regex',
    demoMode: 'Modo demo (sin IA en vivo)',
    socialHeading: 'Creado para autores de patrones cuidadosos',
    socialNote: 'La prueba social utiliza plantillas hasta que existan testimonios reales y consentidos.',
    quickAnswers: 'Respuestas rápidas',
    howCompares: 'Comparación',
    dimension: 'Dimensión',
    manual: 'Manual',
    whenNotToUse: 'Cuándo no usarlo:',
    peopleAlsoSearch: 'La gente también busca',





































































































































    leadsInbox: "Bandeja de leads (CRUD demo)",
    filterEmail: "Filtrar email…",
    allPlans: "Todos los planes",
    noLeads: "Aún no hay leads — envía el formulario de registro.",
    colEmail: "Email",
    colPlan: "Plan",
    colSource: "Fuente",
    delete: "Eliminar",
    deleteLeadTitle: "Eliminar lead",
    deleteLeadWarn: "Esta acción no se puede deshacer.",
    deleteLeadBody: "¿Eliminar este lead? Su email se quitará permanentemente de tus contactos.",
    cancel: "Cancelar",
    relatedReading: "Lecturas relacionadas",
    productTour: "Tour del producto",
    productDemo: "DEMO DEL PRODUCTO",
    stepOf: "paso {{n}}/{{total}}",
    replay: "Repetir",
    tryStudio: "Probar estudio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtrados",
    geoCmpDim: "Dimensión",
    geoCmpManual: "Manual",
    geoCmp1Dim: "Velocidad",
    geoCmp1Manual: "Horas a días",
    geoCmp1Tool: "Minutos por ejecución",
    geoCmp2Dim: "Consistencia",
    geoCmp2Manual: "Varía según la persona",
    geoCmp2Tool: "Mismo conjunto de reglas cada vez",
    geoCmp3Dim: "Salida",
    geoCmp3Manual: "Texto libre",
    geoCmp3Tool: "Resultado estructurado y exportable",
    geoCmp4Dim: "Mejor para",
    geoCmp4Manual: "Aprobación final",
    geoCmp4Tool: "Apoyo a la decisión de primer paso",
    related1Title: "AI wrapper vs moat",
    related1Desc: "la aplicación de políticas como un foso duradero.",
    related2Title: "EU AI Act validation error list",
    related2Desc: "mapear las funciones de los agentes a los temas del Act.",
    related3Title: "Lanzamiento de Wave 1",
    related3Desc: "RegexProof se envía con el clúster de gobernanza.",
    feat1: "De política a reglas",
    feat2: "Lista de verificación de cumplimiento",
    feat3: "Mapeo del EU AI Act",
    feat4: "Reglas exportables",
    geoQa1: "De política a reglas",
    geoQa2: "Lista de verificación de cumplimiento",
    geoQa3: "Mapeo del EU AI Act",
    geoQa4: "Reglas exportables",
    geoQa5: "Los precios comienzan en $0 (Free).",
    geoLt1: "¿Qué es RegexProof?",
    geoLt2: "¿Cómo funciona RegexProof?",
    geoLt3: "¿Cuánto cuesta RegexProof?",
    geoLt4: "¿Es RegexProof Free?",
    geoLt5: "RegexProof vs hacerlo manualmente",
    geoWhenNot: "Utilice una revisión humana calificada en su lugar — es una ayuda para la redacción. Las políticas deben ser revisadas por su asesor legal y los propietarios de riesgos.",
    demo1Title: "Bienvenido a {{name}}",
    demo1Detail: "Un recorrido de 60 segundos sobre cómo {{name}} convierte las políticas en verificaciones de agentes.",
    demo2Title: "Abrir el estudio en vivo",
    demo2Detail: "Pegue el texto de la política y elija un dominio.",
    demo3Title: "Haga clic en Generate checks",
    demo3Detail: "Impulsado por de política a reglas y listas de verificación de cumplimiento.",
    demo4Title: "Vista previa de las verificaciones de políticas",
    demo4Detail: "Ejemplo de salida de la canalización basada en reglas de este producto:",
    demo4DetailEmpty: "Sus verificaciones de políticas aparecen aquí — copie o refine.",
    demo5Title: "Tu turno",
    demo5Detail: "Pruebe el estudio en vivo, o comience con {{name}}.",
  },
  chat: {
    typing: 'El asistente está escribiendo…',
    placeholder: 'Escribe tu pregunta… (Enter para enviar)',
    openAria: 'Abrir asistente de IA',
    openTitle: 'Pregunta a nuestro asistente de IA',
    closeAria: 'Cerrar',
    escalated: 'Te hemos conectado con un agente humano. Seguiremos por email.',
    s1: '¿Qué hace esta herramienta?',
    s2: '¿Cuánto cuesta?',
    s3: '¿Hay un plan gratuito?',
  },
  pages: {
    howTitle: 'RegexProof — Cómo funciona',
    howDesc: 'Cómo funciona RegexProof en tres pasos.',
    howEyebrow: 'Cómo funciona',
    howH1: 'De la entrada al resultado en 3 pasos',
    how1Title: 'Pegar',
    how1Body: 'Pegue el texto de la política y elija el dominio.',
    how2Title: 'Codificar',
    how2Body: 'Genere comprobaciones invocables por el agente y una checklist de cumplimiento.',
    how3Title: 'Aplicar',
    how3Body: 'Conecte las reglas al runtime del agente; reserve humanos para excepciones.',
    subscribe: 'Suscribirse',
    ucTitle: 'RegexProof — Casos de uso',
    ucDesc: 'Cómo RegexProof ayuda a equipos de cumplimiento y plataformas de agentes.',
    ucEyebrow: 'Casos de uso',
    ucH1: 'Hecho para cumplimiento y plataformas de agentes',
    ucIntro: 'Elija su segmento para ver los flujos que más importan.',
    uc1Title: 'Políticas financieras',
    uc1Pain: 'Los reembolsos y aprobaciones deben ser comprobables por máquina.',
    uc1Help: 'Extraer condiciones + acciones que los agentes puedan evaluar.',
    uc2Title: 'Políticas de RR. HH. / seguridad',
    uc2Pain: 'Necesitan checklists que los agentes puedan llamar.',
    uc2Help: 'El selector de dominio enfoca la extracción.',
    uc3Title: 'Funciones de IA de la UE',
    uc3Pain: 'Mapear reglas de alto riesgo a temas del Reglamento de IA.',
    uc3Help: 'Solo mapeo de apoyo a la decisión.',
    uc4Title: 'Equipos de plataforma',
    uc4Pain: 'Los PDF de política nunca llegan al runtime.',
    uc4Help: 'Reglas exportables para herramientas de agente.',
    painLabel: 'Dolor:',
    helpLabel: 'Cómo ayuda RegexProof:',
    ucRefs: 'Referencias: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integraciones',
    intDesc: 'Destinos de exportación, API y opciones BYOK de RegexProof.',
    intEyebrow: 'Integraciones',
    intH1: 'Conéctese a su stack',
    intIntro: 'Solo se listan integraciones honestas. No anunciamos conectores aún no entregados.',
    int1Title: 'Reglas exportables',
    int1Body: 'Exportación JSON/checklist para herramientas de agente.',
    int2Title: 'API',
    int2Body: 'Regenerar cuando cambien las políticas.',
    int3Title: 'Mapeo del Reglamento de IA de la UE',
    int3Body: 'Punteros para temas de alto riesgo.',
    int4Title: 'BYOK',
    int4Body: 'Claves solo en el servidor cuando se ofrecen.',
    intHonesty: 'Nota de honestidad: la aplicación en runtime es trabajo de su sistema; nosotros generamos comprobaciones candidatas.',
    secTitle: 'RegexProof — Seguridad y cumplimiento',
    secDesc: 'Cómo RegexProof trata sus datos y su postura de cumplimiento honesta.',
    secEyebrow: 'Seguridad y cumplimiento',
    secH1: 'Sus datos, nuestra postura',
    secIntro: 'RegexProof procesa las entradas que envía para análisis. Esta página dice con claridad qué tratamos y qué no reivindicamos.',
    secHandleH2: 'Qué tratamos',
    secHandleBody: 'texto de política de la empresa y selecciones de dominio usados para generar comprobaciones ejecutables por el agente.',
    secDataH2: 'Compromisos de tratamiento de datos',
    secData1: 'Los envíos pasan por el pipeline del producto y se retienen solo el tiempo necesario para su registro de auditoría (planes de pago) o hasta que elimine la ejecución.',
    secData2: 'Aplicamos controles de acceso coherentes con el RGPD Art. 32 cuando se tratan datos personales.',
    secData3: 'Las claves BYOK (Enterprise), cuando se ofrecen, se almacenan solo en el servidor y nunca se exponen al navegador.',
    secHonesty: 'Regla de honestidad: RegexProof convierte el texto de política en reglas candidatas. No garantizamos aplicación correcta, cobertura al 100% ni que los agentes nunca dejen pasar una violación.',
    secPostureH2: 'Nuestra postura de cumplimiento',
    secPosture1: 'RegexProof es apoyo a la decisión, no un bufete, clínica ni auditor certificado.',
    secPosture2: 'Para un consejo vinculante, consulte a un profesional cualificado del dominio.',
    secSubH2: 'Subencargados y pagos',
    secSub1: 'Los pagos los procesa Waffo Pancake (merchant of record).',
    secSub2: 'Consulte Privacy y Terms para las condiciones completas.',
    secRefs: 'Referencias: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Volver al inicio',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Publicaciones definicionales y de cómo sobre trampas de ECMAScript vs PCRE, heurísticas de ReDoS y límites de redacción de regex honestos.',
    glanceTitle: '¿Qué incluye este producto de un vistazo?',
    glance1: 'Definición en lenguaje claro, FAQ y referencias para motores de respuesta',
    glance2: '3 pasos de flujo revisables (entrada → generar → revisar)',
    glance3: 'Salida de apoyo a la decisión — usted permanece en el bucle; sin recuentos de usuarios inventados',
    eyebrow: 'Blog · GEO',
    h1: 'Aplicación de regex más segura, explicada',
    lead: 'Poseer las consultas definicionales que los equipos realizan antes de pegar un patrón en el análisis de producción.',
    targetQuery: 'Consulta objetivo:',
    guidesTitle: '¿Qué deep-dives GEO leer primero?',
    guidesLead: 'Explicaciones detalladas sobre trampas de dialectos y heurísticas ReDoS con descargos de responsabilidad de decisión.',
    footerNote: 'Publicar + sindicar según gtm-launch (IH + índices GEO). Cada entrada lleva 3 refs autorizadas.',
    post1Title: 'Paquetes de política de agentes de IA y NIST AI RMF',
    post1Desc: 'Cómo los paquetes de política se mapean a las funciones NIST AI RMF y a los temas del Reglamento de IA de la UE — apoyo a la decisión, no un certificado.',
    post2Title: 'Herramientas permitidas vs agentes abiertos',
    post2Desc: 'Por qué restringir el acceso a herramientas es un control, no un interruptor de función — con reglas de honestidad para agentes abiertos.',
    readI18n: 'Leer versión multilingüe',
    readEnHtml: 'Leer artículo completo en inglés',
    pillarSlug: 'ecmascript-vs-pcre-trampas-de-dialecto-2026',
    pillarEyebrow: 'por RegexProof (LX AI)',
    pillarH1: 'Trampas de dialecto ECMAScript vs PCRE',
    pillarLead: 'El mismo regex puede significar cosas diferentes en distintos motores. Conoce las trampas antes de copiar una respuesta de Stack Overflow en Node o Python.',
    pillarH2a: 'Diferencias en lookahead y posesivos',
    pillarPa1: 'Los cuantificadores posesivos de PCRE y algunas formas de lookbehind están ausentes o difieren en ECMAScript — valida en el motor de destino.',
    pillarH2b: 'Límites de palabras y Unicode',
    pillarPb1: 'Las escapadas de propiedades Unicode y \\\\\\\\w se comportan de manera diferente; fija explícitamente las banderas y el dialecto.',
    pillarH2c: 'Modos de newline y dotall',
    pillarPc1: 'El punto no coincide con el salto de línea de la misma manera en todos los sabores — documenta el manejo de líneas esperado.',
    pillarH2d: 'Prueba en el motor real',
    pillarPd1: 'Vuelva a ejecutar siempre las muestras en el motor de regex de producción después de redactar.',
    pillarDisclaimer: 'Soporte de decisión solo — no un verificador formal.',
    pillarFaq1Q: '¿Puede una expresión regular ser portátil en todas partes?',
    pillarFaq1A: 'Rara vez. Prefiera borradores y pruebas específicos de dialecto por tiempo de ejecución.',
    pillarFaq2Q: '¿RegexProof prueba la corrección?',
    pillarFaq2A: 'No. Redacta y marca riesgos; los ingenieros son dueños de la verificación.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'Heurísticas de ReDoS',
    pillar2H1: 'Heurísticas de ReDoS para regex de aplicación',
    pillar2Lead: 'Los cuantificadores anidados en entrada no confiable pueden bloquear servidores. Las heurísticas ayudan a detectar formas de riesgo antes de que lleguen a producción — no es una garantía.',
    pillar2H2a: 'Cuantificadores anidados',
    pillar2Pa1: 'El anidamiento de estilo (a+)+b es un patrón clásico de retroceso catastrófico.',
    pillar2H2b: 'Bombas de alternación',
    pillar2Pb1: 'Las alternaciones superpuestas con cuantificadores amplifican los caminos de retroceso.',
    pillar2H2c: 'Tiempo de espera y límites',
    pillar2Pc1: 'Pareja patrones más seguros con límites de tamaño de entrada y tiempos de espera del motor.',
    pillar2H2d: 'Prueba de entrada adversa',
    pillar2Pd1: 'Las banderas heurísticas son el comienzo — pruebe con cadenas elaboradas antes de confiar en un patrón.',
    pillar2Disclaimer: 'Borradores de apoyo a la decisión. No es una garantía de complejidad.',
    pillar2Faq1Q: '¿Son suficientes las heurísticas?',
    pillar2Faq1A: 'No. Combinar con tiempos de espera, límites de tamaño y revisión.',
    pillar2Faq2Q: '¿Por qué centrarse en la regex de aplicación?',
    pillar2Faq2A: 'La entrada controlada por el usuario hace que ReDoS sea un riesgo de disponibilidad, no solo un problema de estilo.',
    pillar2Back: 'Volver al blog',
    pillarBack: 'Volver al blog',
    card1Title: '¿Qué es la redacción de regex con conciencia de dialecto?',
    card1Body: 'Generar un patrón con suposiciones y casos de borde explícitos de ECMAScript vs PCRE y edge cases — soporte de decisión, no un verificador formal.',
    card2Title: 'Redacción con conciencia de ReDoS',
    card2Body: 'Describir la coincidencia; obtener un regex candidato con explicación parte por parte y heurísticas ReDoS — sin garantía de completitud.',
  },
} as const

export default es as unknown as Messages
