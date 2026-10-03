// locales/pt-BR.ts — RegexProof full main-path catalog (batch2)
// Batch2 full main-path translations 2026-09-29. Shape mirrors en.ts.

import type { Messages } from '../types'

const pt_BR = {
  meta: {
    title: 'RegexProof · Transforme política da empresa em regras aplicadas por agents',
    description: 'O RegexProof lê o texto da sua política da empresa e gera checagens invocáveis por agents mais uma checklist de conformidade, mapeada às obrigações do AI Act da UE — para que a política seja executável, não só um PDF.',
  },
  common: {
    appName: 'RegexProof',
    tagline: 'Transforme política da empresa em regras aplicadas por agents',
    microSaas: 'Micro SaaS',
    menu: 'Menu',
  },
  nav: {
    backToHub: 'Voltar ao hub',
    home: 'Início',
    features: 'Recursos',
    useCases: 'Casos de uso',
    integrations: 'Integrações',
    howItWorks: 'Como funciona',
    studio: 'Studio',
    security: 'Segurança',
    pricing: 'Preços',
    blog: 'Blog',
    faq: 'FAQ',
    feedback: 'Feedback',
    support: 'Suporte',
    signIn: 'Entrar',
    subscribe: 'Assinar',
    getStarted: 'Começar',
  },
  hero: {
    badge: 'Micro SaaS',
    title: 'Transforme política da empresa em regras aplicadas por agents',
    subtitle: 'O RegexProof lê o texto da sua política da empresa e gera checagens invocáveis por agents mais uma checklist de conformidade, mapeada às obrigações do AI Act da UE — para que a política seja executável, não só um PDF.',
    keyTakeaways: 'Principais conclusões',
    takeaway1: 'Transforme política da empresa em regras aplicadas por agents — sem código.',
    takeaway2: 'Guardrails se ligam aos workflows do agent e falham fechados em violações.',
    takeaway3: 'Comece; Pro a partir de US$ 29/mês.',
    ctaPrimary: 'Assinar',
    ctaSecondary: 'Ver demo',
    note: 'Sem cartão de crédito · Cancele quando quiser',
    playDemo: 'Reproduzir demo ▶',
    walkthrough: 'Clique para ver o passo a passo',
  },
  stats: {
    builders: 'Builders',
    avgRating: 'Avaliação média',
    uptime: 'Uptime',
    timeToValue: 'Tempo até valor',
  },
  pricing: {
    heading: 'Planos simples que escalam',
    monthly: 'Mensal',
    yearly: 'Anual',
    perMonth: '/mês',
    mostPopular: 'Mais popular',
    getPro: 'Obter Pro',
    orYearly: 'Ou pague anualmente — ${{amount}}/mês',
    custom: 'Personalizado',
    contactSales: 'Falar com vendas',
    configureByok: 'Configurar BYOK',
    getStarted: 'Começar',
    freeForever: 'grátis para sempre',
    billedMonthly: 'cobrado mensalmente',
    save: 'economize',
    freeFeat1: 'Execuções diárias de IA limitadas (10/dia · 50/mês)',
    freeFeat2: 'Demo do Studio (sem taxa extra de LLM)',
    proFeat1: 'IA incluída: 300 gens/mês · fair use (gpt-4o-mini)',
    proFeat2: 'Sem assinatura separada do ChatGPT',
    proFeat3: 'Suporte prioritário · 2 meses grátis no anual',
    entFeat1: 'Assentos de equipe · Acesso à API (roadmap)',
    entFeat2: 'BYOK opcional (sua chave OpenAI)',
  },
  faq: {
    title: 'Suas perguntas, respondidas',
    geoTitle: 'RegexProof — perguntas frequentes',
    items: [
      {
        q: 'O que o RegexProof gera?',
        a: 'Um rascunho de regex consciente do dialeto com explicação parte a parte, armadilhas ECMAScript vs PCRE e heurísticas ReDoS — suporte à decisão, não um verificador formal.',
      },
      {
        q: 'Isto é aconselhamento jurídico ou uma certificação?',
        a: 'Não. As saídas são rascunhos de apoio à decisão. Peça revisão de counsel e donos de risco antes da produção. Não reivindicamos certificação ISO, CMP ou de regulador.',
      },
      {
        q: 'Posso cancelar a qualquer momento?',
        a: 'Sim. Planos self-serve cancelam quando quiser; o acesso continua até o fim do período.',
      },
      {
        q: 'Preciso de cartão de crédito para começar?',
        a: 'Não. Comece com cadastro por e-mail ou modo Demo no studio e faça upgrade quando estiver pronto.',
      },
      {
        q: 'Preciso da minha própria assinatura ChatGPT / OpenAI?',
        a: 'Não para Free/Pro. As execuções de IA estão incluídas no plano (fair use) via nossa chave de plataforma. Enterprise pode opcionalmente trazer a própria chave OpenAI (BYOK) — configure em /settings (a chave permanece só no servidor).',
      },
      {
        q: 'O que é Fair Use / e se eu atingir o limite de IA?',
        a: 'O Pro inclui cerca de 300 gerações de IA/mês (mais um teto diário) no gpt-4o-mini. Se atingir o limite fair use, o Studio devolve um resultado mock/demo até o reset diário ou mensal — ou faça upgrade / use Enterprise BYOK para maior volume.',
      },
      {
        q: 'O checkout é seguro?',
        a: 'Os pagamentos são processados pela Waffo Pancake (merchant of record).',
      },
      {
        q: 'O que acontece depois que eu pago?',
        a: 'Você recebe confirmação de acesso; o fulfillment é rastreado via webhook + logs de pedido.',
      },
    ],
  
    geoItems: [
      {
        q: 'O que o RegexProof produz?',
        a: 'Um rascunho de política estruturado sobre ferramentas, dados e caminhos de escalonamento que você pode editar.',
      },
      {
        q: 'É aconselhamento jurídico?',
        a: 'Não. É ajuda de redação. Políticas devem ser revisadas por counsel e risk owners.',
      },
      {
        q: 'Como funciona o modo Demo?',
        a: 'Ative Demo sem IA ao vivo; o modo ao vivo precisa de uma chave configurada.',
      },
      {
        q: 'Mapeia o AI Act da UE?',
        a: 'Narrativas podem citar temas de governança; não certifica conformidade com a Lei.',
      },
      {
        q: 'Políticas podem ser versionadas?',
        a: 'Execuções armazenam rulesetVersion e runId para rastreamento de mudanças.',
      },
      {
        q: 'Quem deveria usar?',
        a: 'Engenheiros de plataforma e compliance que definem guardrails de agentes antes da produção.',
      },
      {
        q: 'Em quais países/regiões?',
        a: 'Acessível mundialmente; pagamentos Waffo Pancake podem variar por região.',
      },
      {
        q: 'Conforme GDPR/privacidade?',
        a: 'Entradas geram só sua saída e nunca são vendidas. Ver Privacy; Enterprise pode incluir DPA/NDA.',
      },
      {
        q: 'Quais idiomas?',
        a: 'A UI cobre dez locales. Rascunhos seguem o idioma da UI quando a IA ao vivo está configurada.',
      },
    ],
},
  footer: {
    product: 'Produto',
    company: 'Empresa',
    resources: 'Recursos',
    legal: 'Jurídico',
    about: 'Sobre',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos',
    refund: 'Reembolso',
    support: 'Suporte',
    feedback: 'Feedback',
    rights: 'Todos os direitos reservados.',
    partOfFleet: 'Parte da frota LX AI Micro-SaaS.',
  },
  signup: {
    title: 'Comece de forma mais inteligente hoje',
    subtitle: 'Junte-se a builders que usam o RegexProof. Grátis para testar — sem cartão.',
    emailPlaceholder: 'Digite seu e-mail',
    saving: 'Salvando…',
    cta: 'Começar',
    trust: 'Confiável · Cancele quando quiser',
  },
  feedback: {
    open: 'Feedback',
    title: 'Enviar feedback',
    blurb: 'Diga o que funcionou, o que quebrou ou o que você quer a seguir.',
    fullPage: 'Prefere uma página completa?',
    openPage: 'Abrir /feedback',
    close: 'Fechar feedback',
    helpful: 'Este resultado foi útil?',
    yes: 'Sim',
    no: 'Não',
    thanks: 'Obrigado pelo feedback.',
    commentPlaceholder: 'Comentário opcional de uma linha',
    generalTitle: 'Feedback geral',
    generalSub: 'Diga o que você acha',
    generalPh: 'O que você gostou, não gostou ou notou ao usar o produto?',
    ideaTitle: 'Tenho uma ideia',
    ideaSub: 'Sugira um recurso ou melhoria',
    ideaPh: 'Descreva sua ideia e o problema que ela resolveria…',
    issueTitle: 'Encontrei um problema',
    issueSub: 'Relate um bug ou problema',
    issuePh: 'O que aconteceu, o que você esperava e como podemos reproduzir?',
    submit: 'Enviar feedback',
    submitting: 'Enviando…',
    done: 'Obrigado — feedback recebido.',
    emailOptional: 'E-mail (opcional)',
    category: 'Categoria',
    yourFeedback: 'Seu feedback',
    attachment: 'Anexo (opcional)',

    back: '← Voltar ao tipo de feedback',
    pickTitle: 'Que feedback você tem?',
    pickSub: 'Escolha um para começar. Você pode adicionar detalhes e uma categoria precisa na próxima etapa.',
    thanksTitle: 'Obrigado pelo feedback!',
    thanksBody: 'Recebemos e nossa equipe fará o acompanhamento em breve. Sinta-se à vontade para enviar de novo a qualquer momento.',
    submitAnother: 'Enviar outro',
    detailed: 'Feedback detalhado',
    send: 'Enviar',
    sending: 'Enviando...',
    thanksInline: 'Obrigado - registrado. Lemos cada um.',
    errorInline: 'Não foi possível enviar agora. Use o botão Feedback ou /feedback.',
    inlineCommentPh: 'Uma linha: o que devemos melhorar? (opcional)',
  },
  legal: {
    privacyPolicy: 'Política de privacidade',
    generatePolicy: 'Gerar política',
    controller: 'Controlador',
    processor: 'Operador',
    processing: 'Tratamento',
    personalData: 'Dados pessoais',
    dataSubject: 'Titular dos dados',
    dpo: 'Encarregado de proteção de dados',
    checklist: 'Checklist de conformidade',
    policyChecks: 'Verificações de segurança de regex',
    encodePolicy: 'Codifique suas regras de padrão',
    definitionTitle: 'RegexProof — definição',
    whatItIs: 'O que é',
    whatNotTitle: 'O que isto NÃO é',
    whatNot1: 'Não é um escritório de advocacia, plataforma GRC nem organismo de certificação ISO.',
    whatNot2: 'Não é garantia de que políticas redigidas satisfaçam todo regulador ou auditor.',
    whatNot3: 'Não é um verificador formal — trate as regex geradas como rascunhos sob revisão de engenheiro.',
    rolesHint: 'Quando os packs mencionam papéis de privacidade, usamos rótulos do GDPR Art.4: Controlador e Operador (apenas apoio à decisão).',
  },
  benchmark: {
    frameworksEyebrow: 'Mapeamento de frameworks',
    frameworksTitle: 'Dialeto difere. Padrões quebram silenciosamente.',
    frameworksNote: 'Temas de suporte à decisão — não é uma garantia de completude ou prova formal.',
    fw1: 'ECMAScript',
    fw2: 'PCRE / Python re',
    fw3: 'Heurísticas ReDoS',
    fw4: 'Chamadas de armadilhas de dialeto',
    painEyebrow: 'Por que regex morde',
    painTitle: 'Padrões parecem bons. Produção trava depois.',
    pain1Title: 'Armadilhas de dialeto',
    pain1Body: 'Lookahead, possessivo e classes Unicode diferem entre motores ECMAScript e PCRE.',
    pain2Title: 'Risco de ReDoS',
    pain2Body: 'Quantificadores aninhados em entrada não confiável podem travar loops de eventos e APIs.',
    pain3Title: 'Linhas opacas',
    pain3Body: 'Regex manuscrito sem explicação passo a passo é difícil de revisar com segurança.',
    pain4Title: 'Problemas após o lançamento',
    pain4Body: 'Timeouts e combinações falsas geralmente aparecem apenas em dados adversários ou desordenados.',
    getEyebrow: 'O que você obtém',
    getTitle: 'Descreva. Forje. Revise.',
    getLead: 'De inglês simples para regex com alertas de segurança — revise antes da produção.',
    get1Title: 'Rascunho de padrão de trabalho',
    get1Body: 'Um ponto de partida de regex ciente do dialeto para o seu sabor de linguagem.',
    get2Title: 'Explicação passo a passo',
    get2Body: 'Quebra de explicação legível para que os revisores possam questionar suposições.',
    get3Title: 'Heurísticas de ReDoS',
    get3Body: 'Flagras quantificadores aninhados e formas de backtracking catastrófico.',
    get4Title: 'Armadilhas de dialeto',
    get4Body: 'Diferenças entre ECMAScript e PCRE destacadas — suporte à decisão, não uma prova.',
    featuresEyebrow: 'Por que RegexProof',
    featuresTitle: 'Tudo o que você precisa para criar regex mais seguros',
    featuresBlurb: 'Desenvolvido para engenheiros que precisam de chamadas de dialeto e ReDoS sem um buraco de coelho de pesquisa.',
    howTitle: 'RegexProof — Como funciona',
    how1Title: 'Colar',
    how1Body: 'Colar texto de política e escolher domínio.',
    how2Title: 'Codificar',
    how2Body: 'Gerar verificações chamáveis por agente e uma lista de erros de validação.',
    how3Title: 'Aplicar',
    how3Body: 'Conectar regras ao tempo de execução do agente; manter humanos para exceções.',
    allPlansTitle: 'Todos os planos pagos incluem',
    allPlans1: 'NL→estúdio de regex',
    allPlans2: 'Chamadas de armadilha de dialeto',
    allPlans3: 'Heurísticas ReDoS (suporte à decisão)',
    allPlans4: 'Suporte por e-mail nos planos pagos — nenhum adicional oculto para uso de estúdio core',
    honestyTitle: 'Limites honestos',
    honestyLead: 'RegexProof é uma ferramenta de elaboração: personalize, fuzz e revise antes de enviar para entrada não confiável.',
    ctaStudio: 'Abrir studio',
  },
  home: {
    whyEyebrow: 'Por que {{name}}',
    featuresHeading: 'Tudo o que você precisa para regex de aplicativo mais seguro',
    featuresCardBlurb: 'Construído para engenheiros que precisam de explicações e dicas ReDoS sem curva de aprendizado.',
    howHeading: 'De descrição para padrão mais seguro em 3 etapas',
    how1Title: 'Colar política',
    how1Desc: 'Insira uma intenção de correspondência em inglês simples e dialeto.',
    how2Title: 'Compilar regras',
    how2Desc: 'Heurísticas determinísticas mais narrativa assistida por modelo opcional.',
    how3Title: 'Aplicar',
    how3Desc: 'Exporte o rascunho com chamadas — não é uma garantia de completude.',
    studioEyebrow: 'Studio ao vivo',
    studioHeading: 'Experimente nesta página',
    studioWatchDemo: 'Ver demo',
    studioOrRun: 'ou execute uma checagem abaixo.',
    studioFormTitle: 'Forja de Regex',
    demoMode: 'Modo demo (sem IA ao vivo)',
    socialHeading: 'Construído para autores de padrões cuidadosos',
    socialNote: 'Prova social usa modelos até que existam depoimentos reais e consentidos.',
    quickAnswers: 'Respostas rápidas',
    howCompares: 'Comparação',
    dimension: 'Dimensão',
    manual: 'Manual',
    whenNotToUse: 'Quando não usar:',
    peopleAlsoSearch: 'As pessoas também pesquisam',





































































































































    leadsInbox: "Caixa de leads (CRUD demo)",
    filterEmail: "Filtrar e-mail…",
    allPlans: "Todos os planos",
    noLeads: "Ainda sem leads — envie o formulário de inscrição.",
    colEmail: "E-mail",
    colPlan: "Plano",
    colSource: "Fonte",
    delete: "Excluir",
    deleteLeadTitle: "Excluir lead",
    deleteLeadWarn: "Esta ação não pode ser desfeita.",
    deleteLeadBody: "Excluir este lead? O e-mail será removido permanentemente dos seus contatos.",
    cancel: "Cancelar",
    relatedReading: "Leitura relacionada",
    productTour: "Tour do produto",
    productDemo: "DEMO DO PRODUTO",
    stepOf: "passo {{n}}/{{total}}",
    replay: "Repetir",
    tryStudio: "Experimentar studio",
    leadsCount: "{{n}} leads",
    leadsFiltered: "{{n}} filtrados",
    geoCmpDim: "Dimensão",
    geoCmpManual: "Manual",
    geoCmp1Dim: "Velocidade",
    geoCmp1Manual: "Horas a dias",
    geoCmp1Tool: "Minutos por execução",
    geoCmp2Dim: "Consistência",
    geoCmp2Manual: "Varia por pessoa",
    geoCmp2Tool: "Mesmo conjunto de regras sempre",
    geoCmp3Dim: "Saída",
    geoCmp3Manual: "Texto livre",
    geoCmp3Tool: "Resultado estruturado e exportável",
    geoCmp4Dim: "Melhor para",
    geoCmp4Manual: "Aprovação final",
    geoCmp4Tool: "Apoio à decisão de primeira passagem",
    related1Title: "Envolvente de IA vs fosso",
    related1Desc: "aplicação de política como um fosso duradouro.",
    related2Title: "lista de verificação de conformidade com o EU AI Act",
    related2Desc: "mapear as funções dos agentes para os temas da Lei.",
    related3Title: "Lançamento da Wave 1",
    related3Desc: "RegexProof é fornecido com o cluster de governança.",
    feat1: "Política-para-regras",
    feat2: "Lista de verificação de conformidade",
    feat3: "Mapeamento do EU AI Act",
    feat4: "Regras exportáveis",
    geoQa1: "Política-para-regras",
    geoQa2: "Lista de verificação de conformidade",
    geoQa3: "Mapeamento do EU AI Act",
    geoQa4: "Regras exportáveis",
    geoQa5: "Os preços começam em $0 (Free).",
    geoLt1: "O que é RegexProof",
    geoLt2: "Como o RegexProof funciona",
    geoLt3: "Quanto custa o RegexProof",
    geoLt4: "O RegexProof é Free",
    geoLt5: "RegexProof vs fazendo manualmente",
    geoWhenNot: "Use revisão humana qualificada em vez disso — é um auxílio de redação. As políticas devem ser revisadas por seu conselho jurídico e pelos proprietários de risco.",
    demo1Title: "Bem-vindo ao {{name}}",
    demo1Detail: "Um tour de 60 segundos de como o {{name}} transforma política em verificações de agente.",
    demo2Title: "Abrir o estúdio ao vivo",
    demo2Detail: "Cole o texto da política e escolha um domínio.",
    demo3Title: "Clique em Generate checks",
    demo3Detail: "Alimentado por Política-para-regras e listas de verificação de conformidade.",
    demo4Title: "Pré-visualização das verificações de política",
    demo4Detail: "Saída de exemplo do pipeline baseado em regras deste produto:",
    demo4DetailEmpty: "Suas verificações de política aparecem aqui — copie ou refine.",
    demo5Title: "Sua vez",
    demo5Detail: "Experimente o estúdio ao vivo, ou comece com {{name}}.",
  },
  chat: {
    typing: 'O assistente está digitando…',
    placeholder: 'Digite sua pergunta… (Enter para enviar)',
    openAria: 'Abrir assistente de IA',
    openTitle: 'Pergunte ao nosso assistente de IA',
    closeAria: 'Fechar',
    escalated: 'Conectamos você a um agente humano. Faremos o acompanhamento por e-mail.',
    s1: 'O que esta ferramenta faz?',
    s2: 'Quanto custa?',
    s3: 'Existe um plano gratuito?',
  },
  pages: {
    howTitle: 'RegexProof — Como funciona',
    howDesc: 'Como o RegexProof funciona em três etapas.',
    howEyebrow: 'Como funciona',
    howH1: 'Da entrada ao resultado em 3 etapas',
    how1Title: 'Colar',
    how1Body: 'Cole o texto da política e escolha o domínio.',
    how2Title: 'Codificar',
    how2Body: 'Gere verificações acionáveis pelo agente e uma checklist de conformidade.',
    how3Title: 'Aplicar',
    how3Body: 'Conecte as regras ao runtime do agente; mantenha humanos para exceções.',
    subscribe: 'Assinar',
    ucTitle: 'RegexProof — Casos de uso',
    ucDesc: 'Como o RegexProof ajuda equipes de conformidade e plataformas de agentes.',
    ucEyebrow: 'Casos de uso',
    ucH1: 'Feito para conformidade e plataformas de agentes',
    ucIntro: 'Escolha seu segmento para ver os fluxos que mais importam.',
    uc1Title: 'Políticas financeiras',
    uc1Pain: 'Reembolsos e aprovações devem ser verificáveis por máquina.',
    uc1Help: 'Extrair condições + ações que os agentes possam avaliar.',
    uc2Title: 'Políticas de RH / segurança',
    uc2Pain: 'Precisam de checklists que os agentes possam chamar.',
    uc2Help: 'O seletor de domínio foca a extração.',
    uc3Title: 'Recursos de IA da UE',
    uc3Pain: 'Mapear regras de alto risco para temas do Regulamento de IA.',
    uc3Help: 'Apenas mapeamento de apoio à decisão.',
    uc4Title: 'Equipes de plataforma',
    uc4Pain: 'PDFs de política nunca chegam ao runtime.',
    uc4Help: 'Regras exportáveis para ferramentas de agente.',
    painLabel: 'Dor:',
    helpLabel: 'Como o RegexProof ajuda:',
    ucRefs: 'Referências: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    intTitle: 'RegexProof — Integrações',
    intDesc: 'Destinos de exportação, API e opções BYOK do RegexProof.',
    intEyebrow: 'Integrações',
    intH1: 'Conecte-se ao seu stack',
    intIntro: 'Somente integrações honestas são listadas. Não anunciamos conectores ainda não entregues.',
    int1Title: 'Regras exportáveis',
    int1Body: 'Exportação JSON/checklist para ferramentas de agente.',
    int2Title: 'API',
    int2Body: 'Regenerar quando as políticas mudarem.',
    int3Title: 'Mapeamento do Regulamento de IA da UE',
    int3Body: 'Ponteiros para temas de alto risco.',
    int4Title: 'BYOK',
    int4Body: 'Chaves apenas no servidor quando oferecidas.',
    intHonesty: 'Nota de honestidade: a aplicação em runtime é trabalho do seu sistema; geramos verificações candidatas.',
    secTitle: 'RegexProof — Segurança e conformidade',
    secDesc: 'Como o RegexProof trata seus dados e sua postura de conformidade honesta.',
    secEyebrow: 'Segurança e conformidade',
    secH1: 'Seus dados, nossa postura',
    secIntro: 'O RegexProof processa as entradas que você envia para análise. Esta página diz claramente o que tratamos e o que não reivindicamos.',
    secHandleH2: 'O que tratamos',
    secHandleBody: 'texto de política da empresa e seleções de domínio usados para gerar verificações executáveis pelo agente.',
    secDataH2: 'Compromissos de tratamento de dados',
    secData1: 'Os envios passam pelo pipeline do produto e são retidos apenas pelo tempo necessário ao seu log de auditoria (planos pagos) ou até você excluir a execução.',
    secData2: 'Aplicamos controles de acesso consistentes com o GDPR Art. 32 quando dados pessoais são processados.',
    secData3: 'Chaves BYOK (Enterprise), quando oferecidas, são armazenadas apenas no servidor e nunca expostas ao navegador.',
    secHonesty: 'Regra de honestidade: o RegexProof transforma texto de política em regras candidatas. Não garantimos aplicação correta, cobertura de 100% nem que agentes nunca deixem passar uma violação.',
    secPostureH2: 'Nossa postura de conformidade',
    secPosture1: 'O RegexProof é apoio à decisão, não um escritório de advocacia, clínica ou auditor certificado.',
    secPosture2: 'Para aconselhamento vinculante, consulte um profissional qualificado no domínio.',
    secSubH2: 'Subprocessadores e pagamentos',
    secSub1: 'Pagamentos processados pela Waffo Pancake (merchant of record).',
    secSub2: 'Veja Privacy e Terms para os termos completos.',
    secRefs: 'Referências: EU AI Act Regulation (EU) 2024/1689 · NIST AI RMF · OWASP Top 10 for AI Agents',
    backHome: 'Voltar ao início',
  },
  blog: {
    metaTitle: 'RegexProof — Blog',
    metaDesc: 'Postagens definicionais e de como fazer sobre armadilhas de ECMAScript vs PCRE, heurísticas de ReDoS e limites de elaboração de regex honestos.',
    glanceTitle: 'O que este produto inclui em um relance?',
    glance1: 'Definição em linguagem clara, FAQ e referências para motores de resposta',
    glance2: '3 etapas de fluxo revisáveis (entrada → gerar → revisar)',
    glance3: 'Saída de apoio à decisão — você permanece no loop; sem contagens de usuários inventadas',
    eyebrow: 'Blog · GEO',
    h1: 'Aplicação de regex mais segura, explicada',
    lead: 'Domine as consultas definicionais que as equipes fazem antes de colar um padrão na análise de produção.',
    targetQuery: 'Consulta alvo:',
    guidesTitle: 'Quais deep-dives GEO ler primeiro?',
    guidesLead: 'Explicadores em longo prazo sobre armadilhas de dialeto e heurísticas ReDoS com disclaimers de suporte à decisão.',
    footerNote: 'Publicar + sindicar conforme gtm-launch (IH + índices GEO). Cada post traz 3 refs autoritativas.',
    post1Title: 'Pacotes de política de agentes de IA e NIST AI RMF',
    post1Desc: 'Como os pacotes de política mapeiam para funções NIST AI RMF e temas do Regulamento de IA da UE — apoio à decisão, não um certificado.',
    post2Title: 'Ferramentas permitidas vs agentes abertos',
    post2Desc: 'Por que restringir o acesso a ferramentas é um controle, não um interruptor de recurso — com regras de honestidade para agentes abertos.',
    readI18n: 'Ler versão multilíngue',
    readEnHtml: 'Ler artigo completo em inglês',
    pillarSlug: 'ecmascript-vs-pcre-armadilhas-de-dialeto-2026',
    pillarEyebrow: 'por RegexProof (LX AI)',
    pillarH1: 'ECMAScript vs PCRE armadilhas de dialeto',
    pillarLead: 'O mesmo regex pode significar coisas diferentes em motores diferentes. Conheça as armadilhas antes de copiar uma resposta do Stack Overflow para Node ou Python.',
    pillarH2a: 'Diferenças de lookahead e possessivo',
    pillarPa1: 'Quantificadores possessivos do PCRE e algumas formas de lookbehind estão faltando ou diferem no ECMAScript — valide no motor de destino.',
    pillarH2b: 'Unicódigo e limites de palavra',
    pillarPb1: '\\\\\\\\w e escapes de propriedade de unicódigo se comportam de forma diferente; prenda flags e dialeto explicitamente.',
    pillarH2c: 'Modos de nova linha e dotall',
    pillarPc1: 'O ponto não corresponde à nova linha da mesma forma em sabores diferentes — documente o tratamento de linha esperado.',
    pillarH2d: 'Teste no motor real',
    pillarPd1: 'Sempre re-executar amostras no mecanismo de regex de produção após o rascunho.',
    pillarDisclaimer: 'Apoio à decisão apenas — não um verificador formal.',
    pillarFaq1Q: 'Uma regex pode ser portátil em todos os lugares?',
    pillarFaq1A: 'Raramente. Prefira rascunhos e testes específicos de dialeto por tempo de execução.',
    pillarFaq2Q: 'O RegexProof comprova a correção?',
    pillarFaq2A: 'Não. Ele cria rascunhos e sinaliza riscos; engenheiros são responsáveis pela verificação.',
    pillar2Slug: 'redos-heuristics-for-application-regex-2026',
    pillar2Eyebrow: 'Heurísticas de ReDoS',
    pillar2H1: 'Heurísticas de ReDoS para regex de aplicativos',
    pillar2Lead: 'Quantificadores aninhados em entrada não confiável podem travar servidores. Heurísticas ajudam a identificar formas arriscadas antes que elas atinjam a produção — não é uma garantia.',
    pillar2H2a: 'Quantificadores aninhados',
    pillar2Pa1: 'Aninhamento do tipo (a+)+b é um padrão clássico de backtracking catastrófico.',
    pillar2H2b: 'Bombas de alternância',
    pillar2Pb1: 'Alternâncias sobrepostas com quantificadores ampliam os caminhos de backtracking.',
    pillar2H2c: 'Tempos limite e limites',
    pillar2Pc1: 'Combine padrões mais seguros com limites de tamanho de entrada e tempos limite do mecanismo.',
    pillar2H2d: 'Entrada adversa de fuzz',
    pillar2Pd1: 'Flags heurísticos são o início — fuzz com strings criadas antes de confiar em um padrão.',
    pillar2Disclaimer: 'Rascunhos de suporte à decisão. Não é uma garantia de completude.',
    pillar2Faq1Q: 'Os heurísticos são suficientes?',
    pillar2Faq1A: 'Não. Combine com tempos limite, limites de tamanho e revisão.',
    pillar2Faq2Q: 'Por que se concentrar em regex de aplicativo?',
    pillar2Faq2A: 'A entrada controlada pelo usuário torna o ReDoS um risco de disponibilidade, e não apenas uma questão de estilo.',
    pillar2Back: 'Voltar ao blog',
    pillarBack: 'Voltar ao blog',
    card1Title: 'O que é criação de regex com conscientização de dialeto?',
    card1Body: 'Gerar um padrão com suposições ECMAScript vs PCRE explícitas e casos de bordo — suporte à decisão, não um verificador formal.',
    card2Title: 'Criação ReDoS-consciente',
    card2Body: 'Descreva a correspondência; obtenha um regex candidato com explicação parte a parte e heurísticas ReDoS — não uma garantia de completude.',
  },
} as const

export default pt_BR as unknown as Messages
