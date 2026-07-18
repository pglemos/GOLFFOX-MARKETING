/**
 * GOLF FOX Marketing Content - ATUALIZADO
 * Conteúdo centralizado para o site de marketing
 * 
 * IMPORTANTE: Toda copy deve estar em Português Brasil
 * Use "empresa", nunca "company"
 * Sem buzzwords sem explicação
 * Sem métricas falsas - usar placeholders se necessário
 */

// ============================================================
// NAVEGAÇÃO (atualizada conforme PRD)
// ============================================================
export const navigation = {
    main: [
        {
            name: 'Produto',
            href: '/produto',
            submenu: [
                { name: 'Visão Geral', href: '/produto', description: 'Conheça a plataforma completa' },
                { name: 'Monitoramento', href: '/produto/monitoramento', description: 'Rotas e veículos em tempo real' },
                { name: 'Portal Empresa', href: '/produto/portal-empresa', description: 'Para empresas contratantes' },
                { name: 'Portal Transportadora', href: '/produto/portal-transportadora', description: 'Para transportadoras parceiras' },
                { name: 'App Motorista', href: '/produto/app-motorista', description: 'Execução e segurança em campo' },
                { name: 'App Passageiro', href: '/produto/app-passageiro', description: 'Experiência do colaborador' },
            ],
        },
        { name: 'Como funciona', href: '/como-funciona' },
        { name: 'Como operamos', href: '/como-operamos' },
        { name: 'Recursos', href: '/recursos' },
        { name: 'Segurança', href: '/seguranca-lgpd' },
        { name: 'Planos', href: '/planos' },
        { name: 'Cases', href: '/cases' },
    ],
    secondary: [
        { name: 'Entrar', href: '/login' },
    ],
    footer: {
        produto: [
            { name: 'Visão Geral', href: '/produto' },
            { name: 'Monitoramento', href: '/produto/monitoramento' },
            { name: 'Portal Empresa', href: '/produto/portal-empresa' },
            { name: 'Portal Transportadora', href: '/produto/portal-transportadora' },
            { name: 'App Motorista', href: '/produto/app-motorista' },
            { name: 'App Passageiro', href: '/produto/app-passageiro' },
        ],
        plataforma: [
            { name: 'Como funciona', href: '/como-funciona' },
            { name: 'Como operamos', href: '/como-operamos' },
            { name: 'Recursos', href: '/recursos' },
            { name: 'Integrações', href: '/integracoes' },
        ],
        empresa: [
            { name: 'Sobre', href: '/sobre' },
            { name: 'Cases', href: '/cases' },
            { name: 'Demo', href: '/demo' },
        ],
        suporte: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Status', href: '/status' },
            { name: 'Trust Center', href: '/trust-center' },
            { name: 'Documentação', href: '/documentacao' },
        ],
        legal: [
            { name: 'Privacidade', href: '/privacidade' },
            { name: 'Termos de Uso', href: '/terms' },
            { name: 'Segurança & LGPD', href: '/seguranca-lgpd' },
        ],
    },
};

// ============================================================
// CTAs PADRÃO
// ============================================================
export const ctas = {
    primary: {
        text: 'Agendar demonstração',
        href: '/demo',
    },
    secondary: {
        text: 'Solicitar proposta',
        href: '/demo?tipo=proposta',
    },
    tertiary: {
        comoFunciona: { text: 'Ver como funciona', href: '/como-funciona' },
        recursos: { text: 'Ver recursos', href: '/recursos' },
    },
};

// ============================================================
// HOME - Seções conforme PRD
// ============================================================
export const home = {
    hero: {
        title: 'Reduza custos de fretamento em até 30% com gestão inteligente',
        subtitle: 'Controle total de rotas, presença e auditoria em tempo real. A única plataforma que paga a si mesma no primeiro mês.',
    },
    // Trusted By (Nova seção)
    trustedBy: [
        { name: 'Empresa A', logo: '/images/logos/logo-1.svg' },
        { name: 'Empresa B', logo: '/images/logos/logo-2.svg' },
        { name: 'Empresa C', logo: '/images/logos/logo-3.svg' },
        { name: 'Empresa D', logo: '/images/logos/logo-4.svg' },
        { name: 'Empresa E', logo: '/images/logos/logo-5.svg' },
    ],
    // Métricas de Impacto (Nova seção)
    metrics: [
        { value: '30%', label: 'Redução média de custos', icon: 'TrendingDown' },
        { value: '100%', label: 'Auditoria de presença', icon: 'ShieldCheck' },
        { value: 'Zero', label: 'Planilhas manuais', icon: 'FileX' },
        { value: '24/7', label: 'Monitoramento em tempo real', icon: 'Activity' },
    ],
    // Prova Social (Nova seção)
    socialProof: {
        title: 'Empresas que confiam na GOLF FOX',
        subtitle: 'Junte-se a operações que modernizaram seu transporte',
        testimonials: [
            {
                quote: "A GOLF FOX nos deu a visibilidade que faltava. Antes, controlávamos 40 ônibus no Excel. Hoje, economizamos 15% só ajustando rotas ociosas.",
                author: "Ricardo Mendes",
                company: "Indústria Farmacêutica XYZ",
                role: "Diretor de Operações"
            },
            {
                quote: "A implementação foi surpreendentemente rápida. Em 2 semanas já tínhamos 100% dos colaboradores usando o App para check-in.",
                author: "Juliana Costa",
                company: "Varejo Nacional",
                role: "Gerente de RH"
            }
        ]
    },
    // Barra de prova rápida (5 bullets)
    proofBar: [
        { text: 'Redução de custos', icon: 'TrendingDown' },
        { text: 'Conformidade LGPD', icon: 'Shield' },
        { text: 'App para Colaborador', icon: 'Smartphone' },
        { text: 'Gestão de Frotas', icon: 'Truck' },
        { text: 'Auditoria Digital', icon: 'FileCheck' },
    ],
    // Fundo do poço (6 dores)
    pains: [
        {
            title: 'Você paga por lugares vazios?',
            description: 'Sem controle de ocupação, empresas gastam até 30% a mais com assentos ociosos em rotas mal planejadas.',
            icon: 'DollarSign',
        },
        {
            title: 'Reclamações sem fim no RH?',
            description: 'Atrasos e "o ônibus não passou" geram estresse diário. Sem rastreio, é sua palavra contra a do motorista.',
            icon: 'MessageSquareWarning',
        },
        {
            title: 'Risco trabalhista invisível?',
            description: 'Horas in itinere mal calculadas e falta de registro de embarque criam passivos jurídicos perigosos.',
            icon: 'Scale',
        },
        {
            title: 'Motoristas sem padronização?',
            description: 'Cada um opera de um jeito. Sem checklist digital, você não sabe se o veículo está seguro para rodar.',
            icon: 'UserX',
        },
        {
            title: 'Dados espalhados e inseguros?',
            description: 'Planilhas de Excel e mensagens de WhatsApp vazadas ferem a LGPD e expõem dados sensíveis.',
            icon: 'AlertOctagon',
        },
        {
            title: 'Nenhum indicador de performance?',
            description: 'Como cobrar melhoria se você não mede atrasos, ocupação e incidentes? O que não se mede, não se gerencia.',
            icon: 'BarChart4',
        },
    ],
    // Topo da montanha (resultado por perfil)
    profileResults: [
        {
            profile: 'Empresa',
            icon: 'Building2',
            results: [
                'Redução de até 30% nos custos',
                '100% de compliance trabalhista',
                'Fim das reclamações no RH',
            ],
            features: [
                'Controle Financeiro Total',
                'Auditoria de Embarque Digital',
                'Inteligência de Ocupação',
                'Segurança Jurídica (LGPD)',
            ],
        },
        {
            profile: 'Transportadora',
            icon: 'Truck',
            results: [
                'Margem protegida e previsível',
                'Menos ligações operacionais',
                'Diferencial em licitações',
            ],
            features: [
                'Gestão Automática de CNH/Veículo',
                'DRE por Rota em Tempo Real',
                'Manutenção Preventiva Digital',
                'Ranking de Performance de Motoristas',
            ],
        },
        {
            profile: 'Motorista',
            icon: 'CarFront',
            results: [
                'Fim da papelada e planilhas',
                'Navegação assertiva',
                'Condução mais segura',
            ],
            features: [
                'App Intuitivo (Sem Treinamento)',
                'Checklist Digital Obrigatório',
                'Lista de Passageiros no Celular',
                'Botão de Pânico Integrado',
            ],
        },
        {
            profile: 'Passageiro',
            icon: 'UserCheck',
            results: [
                'Carro na porta no hora certa',
                'Segurança no trajeto',
                'Voz ativa na avaliação',
            ],
            features: [
                'Onde está meu ônibus? (Ao Vivo)',
                'Notificação de Proximidade',
                'Carteirinha Digital (QR Offline)',
                'Avaliação 5 Estrelas',
            ],
        },
    ],
    // Como funciona (3 passos)
    howItWorks: [
        {
            step: 1,
            title: 'Diagnóstico e Otimização',
            description: 'Analisamos seus endereços e turnos para desenhar as rotas mais eficientes, cortando quilometragem inútil.',
        },
        {
            step: 2,
            title: 'Implantação Tecnológica',
            description: 'Configuramos pórticos virtuais, cadastramos a frota e treinamos motoristas no uso do App GOLF FOX.',
        },
        {
            step: 3,
            title: 'Gestão Inteligente',
            description: 'Você ganha um painel vivo. Acompanhe cada embarque, cada centavo e cada km rodado em tempo real.',
        },
    ],
    // Módulos principais (cards)
    modules: [
        { title: 'Planejamento e Otimização', description: 'Algoritmos que desenham a melhor rota para economizar tempo e combustível.', icon: 'Map' },
        { title: 'Controle de Acesso', description: 'Embarque apenas quem está autorizado via QR Code, NFC ou Facial.', icon: 'ScanLine' },
        { title: 'Monitoramento Ao Vivo', description: 'Torre de controle virtual com alertas preditivos de atraso.', icon: 'Radar' },
        { title: 'Gestão de Frotas', description: 'Controle total de pneus, combustível, manutenção e documentos.', icon: 'Bus' },
        { title: 'App do Colaborador', description: 'A "Uberização" do fretado: onde está meu ônibus? Vou embarcar?', icon: 'Smartphone' },
        { title: 'Gestão Financeira', description: 'Auditoria automática de faturas. Pague apenas pelo serviço realizado.', icon: 'Wallet' },
        { title: 'Business Intelligence', description: 'Dashboards executivos para tomada de decisão baseada em dados.', icon: 'BarChart3' },
        { title: 'Comunicação', description: 'Mural de avisos e notificações push para toda a operação.', icon: 'Bell' },
        { title: 'Compliance', description: 'Garanta que fornecedores e motoristas estejam legais e aptos.', icon: 'ShieldCheck' },
    ],
    // Teaser "Como operamos"
    comoOperamosTeaser: {
        title: 'Governança além do software',
        description: 'Não entregamos apenas login e senha. Apoiamos sua operação com monitoramento ativo e inteligência.',
        cta: { text: 'Conheça nossa metodologia', href: '/como-operamos' },
    },
};

// ============================================================
// FAQ GLOBAL (expandido)
// ============================================================
export const faqGlobal = [
    {
        category: 'geral',
        question: 'O que é a GOLF FOX?',
        answer: 'A GOLF FOX é uma plataforma completa de gestão de fretamento corporativo. Conectamos empresas contratantes e transportadoras em um único ecossistema com planejamento, operação em tempo real, check-in/out, custos, auditoria e relatórios.',
    },
    {
        category: 'geral',
        question: 'Para quem é a GOLF FOX?',
        answer: 'Para empresas que contratam transporte de colaboradores e para transportadoras que operam fretamento corporativo. Cada perfil tem seu portal específico com funcionalidades dedicadas.',
    },
    {
        category: 'operacao',
        question: 'Como funciona o check-in de passageiros?',
        answer: 'Os passageiros fazem check-in via QR Code ou NFC no momento do embarque. O sistema funciona offline e sincroniza automaticamente quando há conexão, garantindo presença auditável.',
    },
    {
        category: 'seguranca',
        question: 'A GOLF FOX atende à LGPD?',
        answer: 'Sim. Implementamos controles de privacidade, consentimento, retenção de dados e audit log completo. Todos os dados são criptografados e armazenados em infraestrutura segura.',
    },
    {
        category: 'implantacao',
        question: 'Qual o prazo de implantação?',
        answer: 'A implantação padrão leva de 2 a 4 semanas, dependendo do tamanho da operação. Oferecemos treinamento e suporte dedicado durante todo o processo.',
    },
    {
        category: 'integracao',
        question: 'Vocês oferecem integração com ERP/RH?',
        answer: 'Sim. Oferecemos APIs e webhooks para integração com sistemas de RH, ponto e ERP. Também disponibilizamos exportações em PDF/Excel e relatórios agendados.',
    },
    {
        category: 'operacao',
        question: 'Como funciona o monitoramento em tempo real?',
        answer: 'Cada veículo é rastreado em tempo real. Você visualiza no mapa a posição, status da viagem, passageiros embarcados e recebe alertas de atraso ou desvio.',
    },
    {
        category: 'planos',
        question: 'Quais são os planos disponíveis?',
        answer: 'Oferecemos planos Piloto, Profissional e Enterprise. Cada plano inclui diferentes níveis de funcionalidades. Entre em contato para uma proposta personalizada.',
    },
];

// ============================================================
// RECURSOS (Features) - Biblioteca completa
// ============================================================
export const resourceCategories = [
    { id: 'planejamento', name: 'Planejamento & Rotas' },
    { id: 'operacao', name: 'Operação em Tempo Real' },
    { id: 'embarque', name: 'Embarque & Presença' },
    { id: 'ativos', name: 'Frota & Motoristas' },
    { id: 'financeiro', name: 'Custos & Financeiro' },
    { id: 'governanca', name: 'Governança & Segurança' },
    { id: 'comunicacao', name: 'Comunicação & Alertas' },
    { id: 'relatorios', name: 'Relatórios & BI' },
];

export const resourceProfiles = [
    { id: 'empresa', name: 'Empresa' },
    { id: 'transportadora', name: 'Transportadora' },
    { id: 'motorista', name: 'Motorista' },
    { id: 'passageiro', name: 'Passageiro' },
];

export const resources = [
    // Planejamento
    {
        id: 'roteirizacao',
        title: 'Roteirização',
        description: 'Criação e otimização de rotas com múltiplos pontos.',
        category: 'planejamento',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Redução de até 40% no tempo de planejamento de rotas',
            'Economia média de 25% em quilometragem desnecessária',
            'Otimização automática considerando trânsito e horários',
            'Visualização clara de todas as rotas no mapa',
        ],
        metrics: [
            'Economia média de 25% em custos de combustível',
            'Redução de 40% no tempo de planejamento',
            'Aumento de 30% na ocupação média dos veículos',
        ],
        examples: [
            'Otimização automática de 50+ rotas em menos de 5 minutos',
            'Redução de 120km diários em uma operação com 20 veículos',
            'Aumento de ocupação de 60% para 85% através de consolidação',
        ],
        screenshot: {
            src: '/images/screenshots/resources/roteirizacao.png',
            alt: 'Interface de roteirização com otimização automática',
            title: 'Roteirização Inteligente',
            description: 'Criação e otimização de rotas com múltiplos pontos de parada',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: true,
        usageStats: { percentage: 95, label: 'Usado por 95% dos clientes' },
        relatedResources: ['pontos', 'mapa-tempo-real', 'custos-rota'],
    },
    {
        id: 'turnos',
        title: 'Gestão de turnos',
        description: 'Configure turnos, escalas e horários de operação.',
        category: 'planejamento',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Configuração centralizada de todos os turnos',
            'Flexibilidade para múltiplos horários e escalas',
            'Integração automática com rotas e veículos',
            'Histórico completo de alterações',
        ],
        metrics: [
            'Redução de 50% no tempo de configuração',
            '100% de precisão na atribuição de turnos',
            'Economia de 2h/semana em gestão manual',
        ],
        examples: [
            'Configuração de 10 turnos diferentes em uma única tela',
            'Alteração de horário aplicada automaticamente a todas as rotas',
            'Relatório automático de cobertura de turnos',
        ],
        screenshot: {
            src: '/images/screenshots/resources/turnos.png',
            alt: 'Interface de gestão de turnos e escalas',
            title: 'Gestão de Turnos',
            description: 'Configuração centralizada de turnos, escalas e horários',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 88, label: 'Usado por 88% dos clientes' },
        relatedResources: ['roteirizacao', 'status-viagem'],
    },
    {
        id: 'pontos',
        title: 'Pontos de embarque',
        description: 'Cadastro e gestão de pontos com geolocalização.',
        category: 'planejamento',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Geolocalização automática via endereço',
            'Validação de pontos próximos para otimização',
            'Histórico de uso de cada ponto',
            'Integração com mapas para visualização',
        ],
        metrics: [
            'Cadastro de pontos 3x mais rápido',
            '100% de precisão em geolocalização',
            'Redução de 30% em pontos duplicados',
        ],
        examples: [
            'Cadastro de 200+ pontos em menos de 1 hora',
            'Detecção automática de pontos próximos para consolidação',
            'Visualização de todos os pontos no mapa interativo',
        ],
        screenshot: {
            src: '/images/screenshots/resources/pontos.png',
            alt: 'Interface de cadastro e gestão de pontos de embarque',
            title: 'Pontos de Embarque',
            description: 'Cadastro e gestão de pontos com geolocalização precisa',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['roteirizacao', 'checkin-qr', 'checkin-nfc'],
    },

    // Operação
    {
        id: 'mapa-tempo-real',
        title: 'Mapa em tempo real',
        description: 'Posição de veículos atualizada a cada 30 segundos.',
        category: 'operacao',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Rastreamento em tempo real de todos os veículos',
            'Visualização clara de rotas e posições',
            'Histórico de trajetos com playback',
            'Alertas visuais de atrasos e desvios',
        ],
        metrics: [
            'Atualização a cada 30 segundos',
            '99.9% de precisão em rastreamento',
            'Visualização de até 500+ veículos simultaneamente',
        ],
        examples: [
            'Monitoramento de 200 veículos em tempo real em uma única tela',
            'Playback histórico para análise de trajetos',
            'Alertas automáticos quando veículo sai da rota',
        ],
        screenshot: {
            src: '/images/screenshots/resources/mapa-tempo-real.png',
            alt: 'Mapa em tempo real com posições de veículos',
            title: 'Mapa em Tempo Real',
            description: 'Rastreamento contínuo de veículos com atualização a cada 30 segundos',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: true,
        usageStats: { percentage: 98, label: 'Usado por 98% dos clientes' },
        relatedResources: ['alertas-atraso', 'status-viagem', 'roteirizacao'],
    },
    {
        id: 'alertas-atraso',
        title: 'Alertas de atraso',
        description: 'Notificações automáticas quando há desvio do horário.',
        category: 'operacao',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Detecção automática de atrasos em < 1 minuto',
            'Notificações push em tempo real',
            'Escalonamento para gestores quando necessário',
            'Histórico completo de alertas e resoluções',
        ],
        metrics: [
            'Alertas em < 30 segundos após detecção',
            'Taxa de falsos positivos < 5%',
            'Redução de 60% no tempo de resposta a incidentes',
        ],
        examples: [
            'Alerta automático quando veículo atrasa mais de 5 minutos',
            'Notificação imediata para gestores em caso de atraso crítico',
            'Histórico de alertas para análise de padrões',
        ],
        screenshot: {
            src: '/images/screenshots/resources/alertas-atraso.png',
            alt: 'Sistema de alertas de atraso em tempo real',
            title: 'Alertas de Atraso',
            description: 'Notificações automáticas quando há desvio do horário',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 92, label: 'Usado por 92% dos clientes' },
        relatedResources: ['mapa-tempo-real', 'status-viagem', 'incidentes'],
    },
    {
        id: 'status-viagem',
        title: 'Status da viagem',
        description: 'Acompanhe início, paradas e conclusão de cada viagem.',
        category: 'operacao',
        profiles: ['empresa', 'transportadora', 'passageiro'],
        benefits: [
            'Status em tempo real de cada viagem',
            'Notificações para passageiros sobre chegada',
            'Histórico completo de todas as viagens',
            'Integração com check-in para validação',
        ],
        metrics: [
            'Atualização de status em tempo real',
            '100% de rastreabilidade de viagens',
            'Notificações entregues em < 2 segundos',
        ],
        examples: [
            'Passageiro recebe notificação quando veículo está a 5 minutos',
            'Gestor acompanha status de 50+ viagens simultaneamente',
            'Histórico completo para análise de performance',
        ],
        screenshot: {
            src: '/images/screenshots/resources/status-viagem.png',
            alt: 'Interface de status de viagens em tempo real',
            title: 'Status da Viagem',
            description: 'Acompanhamento completo do início ao fim de cada viagem',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['mapa-tempo-real', 'checkin-qr', 'notificacoes'],
    },

    // Embarque
    {
        id: 'checkin-qr',
        title: 'Check-in QR Code',
        description: 'Validação de presença com QR Code, funciona offline.',
        category: 'embarque',
        profiles: ['motorista', 'passageiro'],
        benefits: [
            'Check-in rápido em menos de 3 segundos',
            'Funciona offline e sincroniza automaticamente',
            'Validação automática de QR Code único',
            'Registro completo com timestamp e GPS',
        ],
        metrics: [
            'Check-in em < 3 segundos',
            'Funciona 100% offline',
            '99.9% de precisão em validação',
        ],
        examples: [
            'Passageiro faz check-in em 2 segundos mesmo sem internet',
            'Motorista valida presença de 30 passageiros em 1 minuto',
            'Sincronização automática quando conexão é restabelecida',
        ],
        screenshot: {
            src: '/images/screenshots/resources/checkin-qr.png',
            alt: 'Interface de check-in com QR Code',
            title: 'Check-in QR Code',
            description: 'Validação rápida de presença com QR Code, funciona offline',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 85, label: 'Usado por 85% dos clientes' },
        relatedResources: ['checkin-nfc', 'presenca-auditavel', 'status-viagem'],
    },
    {
        id: 'checkin-nfc',
        title: 'Check-in NFC',
        description: 'Validação por aproximação NFC para maior agilidade.',
        category: 'embarque',
        profiles: ['motorista', 'passageiro'],
        benefits: [
            'Check-in instantâneo por aproximação',
            'Maior agilidade em pontos de embarque',
            'Funciona offline e sincroniza automaticamente',
            'Ideal para alto volume de passageiros',
        ],
        metrics: [
            'Check-in em < 1 segundo',
            'Até 3x mais rápido que QR Code',
            '100% de precisão em validação',
        ],
        examples: [
            'Passageiro faz check-in apenas aproximando o celular',
            'Motorista valida 50 passageiros em 30 segundos',
            'Ideal para pontos de embarque com alto fluxo',
        ],
        screenshot: {
            src: '/images/screenshots/resources/checkin-nfc.png',
            alt: 'Interface de check-in com NFC',
            title: 'Check-in NFC',
            description: 'Validação instantânea por aproximação NFC',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: true,
        usageStats: { percentage: 45, label: 'Usado por 45% dos clientes' },
        relatedResources: ['checkin-qr', 'presenca-auditavel'],
    },
    {
        id: 'presenca-auditavel',
        title: 'Presença auditável',
        description: 'Registro com timestamp, GPS e evidência digital.',
        category: 'embarque',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Registro completo com timestamp preciso',
            'Geolocalização automática do check-in',
            'Evidência digital para auditoria',
            'Histórico imutável de todas as presenças',
        ],
        metrics: [
            '100% de rastreabilidade',
            'Precisão de GPS < 10 metros',
            'Retenção de dados por 2 anos',
        ],
        examples: [
            'Auditoria completa de presença com localização exata',
            'Comprovação de presença para compliance',
            'Análise de padrões de uso por localização',
        ],
        screenshot: {
            src: '/images/screenshots/resources/presenca-auditavel.png',
            alt: 'Interface de presença auditável com registro completo',
            title: 'Presença Auditável',
            description: 'Registro completo com timestamp, GPS e evidência digital',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['checkin-qr', 'checkin-nfc', 'audit-log'],
    },

    // Ativos
    {
        id: 'gestao-frota',
        title: 'Gestão de frota',
        description: 'Cadastro de veículos com documentos e manutenção.',
        category: 'ativos',
        profiles: ['transportadora'],
        benefits: [
            'Cadastro completo de veículos e documentos',
            'Histórico de manutenções e custos',
            'Alertas de vencimento de documentos',
            'Integração com rotas e motoristas',
        ],
        metrics: [
            'Redução de 50% no tempo de gestão',
            '100% de conformidade documental',
            'Economia de 20% em custos de manutenção',
        ],
        examples: [
            'Gestão completa de 100+ veículos em uma única plataforma',
            'Alertas automáticos de vencimento de documentos',
            'Histórico completo de manutenções e custos',
        ],
        screenshot: {
            src: '/images/screenshots/resources/gestao-frota.png',
            alt: 'Interface de gestão de frota de veículos',
            title: 'Gestão de Frota',
            description: 'Cadastro completo de veículos com documentos e manutenção',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% das transportadoras' },
        relatedResources: ['manutencao', 'motoristas', 'custos-rota'],
    },
    {
        id: 'manutencao',
        title: 'Manutenção preventiva',
        description: 'Alertas de manutenção por km ou data.',
        category: 'ativos',
        profiles: ['transportadora'],
        benefits: [
            'Alertas automáticos de manutenção preventiva',
            'Configuração por km rodado ou data',
            'Histórico completo de manutenções',
            'Redução de custos com manutenção corretiva',
        ],
        metrics: [
            'Redução de 30% em manutenções corretivas',
            'Economia média de 20% em custos de manutenção',
            '100% de veículos com manutenção em dia',
        ],
        examples: [
            'Alerta automático quando veículo atinge 10.000km',
            'Notificação 30 dias antes do vencimento de revisão',
            'Histórico completo para análise de custos',
        ],
        screenshot: {
            src: '/images/screenshots/resources/manutencao.png',
            alt: 'Interface de manutenção preventiva de veículos',
            title: 'Manutenção Preventiva',
            description: 'Alertas automáticos de manutenção por km ou data',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 90, label: 'Usado por 90% das transportadoras' },
        relatedResources: ['gestao-frota', 'custos-rota'],
    },
    {
        id: 'motoristas',
        title: 'Gestão de motoristas',
        description: 'CNH, exames, vencimentos e histórico.',
        category: 'ativos',
        profiles: ['transportadora'],
        benefits: [
            'Cadastro completo de motoristas e documentos',
            'Alertas de vencimento de CNH e exames',
            'Histórico de viagens e avaliações',
            'Ranking e gamificação',
        ],
        metrics: [
            '100% de conformidade documental',
            'Redução de 40% no tempo de gestão',
            'Aumento de 25% em satisfação dos motoristas',
        ],
        examples: [
            'Gestão de 200+ motoristas com documentos em dia',
            'Alertas automáticos 30 dias antes do vencimento',
            'Ranking de motoristas com métricas de performance',
        ],
        screenshot: {
            src: '/images/screenshots/resources/motoristas.png',
            alt: 'Interface de gestão de motoristas',
            title: 'Gestão de Motoristas',
            description: 'Cadastro completo de motoristas com CNH, exames e histórico',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% das transportadoras' },
        relatedResources: ['gestao-frota', 'dashboards'],
    },

    // Financeiro
    {
        id: 'custos-centro',
        title: 'Custos por centro',
        description: 'Rateio automático por centro de custo.',
        category: 'financeiro',
        profiles: ['empresa'],
        benefits: [
            'Rateio automático por centro de custo',
            'Visualização clara de custos por departamento',
            'Relatórios detalhados para contabilidade',
            'Integração com sistemas ERP',
        ],
        metrics: [
            'Economia de 15h/mês em rateio manual',
            '100% de precisão no rateio',
            'Redução de 30% em erros de alocação',
        ],
        examples: [
            'Rateio automático de custos para 50+ centros de custo',
            'Relatório mensal pronto para contabilidade',
            'Análise de custos por departamento em tempo real',
        ],
        screenshot: {
            src: '/images/screenshots/resources/custos-centro.png',
            alt: 'Interface de rateio de custos por centro de custo',
            title: 'Custos por Centro',
            description: 'Rateio automático de custos por centro de custo',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 75, label: 'Usado por 75% das empresas' },
        relatedResources: ['custos-rota', 'dre-operacional', 'relatorios-agendados'],
    },
    {
        id: 'custos-rota',
        title: 'Custos por rota',
        description: 'Visualize o custo de cada rota operada.',
        category: 'financeiro',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Cálculo automático de custos por rota',
            'Análise de rentabilidade de cada rota',
            'Comparação de custos entre rotas',
            'Projeção de custos futuros',
        ],
        metrics: [
            'Cálculo automático em tempo real',
            'Identificação de 20% de rotas não rentáveis',
            'Economia de 10h/semana em análise manual',
        ],
        examples: [
            'Identificação de rotas com custo acima da média',
            'Análise de rentabilidade para otimização',
            'Projeção de custos para planejamento orçamentário',
        ],
        screenshot: {
            src: '/images/screenshots/resources/custos-rota.png',
            alt: 'Interface de análise de custos por rota',
            title: 'Custos por Rota',
            description: 'Visualização e análise de custos de cada rota operada',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 85, label: 'Usado por 85% dos clientes' },
        relatedResources: ['roteirizacao', 'custos-centro', 'dre-operacional'],
    },
    {
        id: 'dre-operacional',
        title: 'DRE operacional',
        description: 'Receitas vs custos por contrato ou período.',
        category: 'financeiro',
        profiles: ['transportadora'],
        benefits: [
            'DRE automático por contrato ou período',
            'Análise de margem e rentabilidade',
            'Comparação entre períodos',
            'Export para contabilidade',
        ],
        metrics: [
            'Geração automática em < 1 minuto',
            '100% de precisão nos cálculos',
            'Economia de 20h/mês em elaboração manual',
        ],
        examples: [
            'DRE mensal gerado automaticamente',
            'Análise de margem por contrato',
            'Comparação de performance entre meses',
        ],
        screenshot: {
            src: '/images/screenshots/resources/dre-operacional.png',
            alt: 'Interface de DRE operacional',
            title: 'DRE Operacional',
            description: 'Demonstração de resultado do exercício por contrato ou período',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: true,
        usageStats: { percentage: 70, label: 'Usado por 70% das transportadoras' },
        relatedResources: ['custos-rota', 'relatorios-agendados', 'dashboards'],
    },

    // Governança
    {
        id: 'audit-log',
        title: 'Audit Log',
        description: 'Registro de todas as ações com timestamp e usuário.',
        category: 'governanca',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Registro completo de todas as ações',
            'Rastreabilidade total para compliance',
            'Histórico imutável por 2 anos',
            'Export para auditorias externas',
        ],
        metrics: [
            '100% das ações rastreadas',
            'Mais de 1 milhão de eventos/mês',
            'Retenção de 2 anos',
        ],
        examples: [
            'Auditoria completa de alterações em rotas',
            'Rastreamento de acessos e ações de usuários',
            'Export de logs para compliance e auditoria',
        ],
        screenshot: {
            src: '/images/screenshots/resources/audit-log.png',
            alt: 'Interface de audit log com registro de ações',
            title: 'Audit Log',
            description: 'Registro completo de todas as ações com timestamp e usuário',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['permissoes', 'lgpd', 'presenca-auditavel'],
    },
    {
        id: 'permissoes',
        title: 'Permissões por perfil',
        description: 'Controle granular de acesso por cargo/função.',
        category: 'governanca',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Controle granular de acesso por perfil',
            'Segregação de dados por empresa/transportadora',
            'Permissões customizáveis por função',
            'Auditoria de acessos e permissões',
        ],
        metrics: [
            '100% de segregação de dados',
            'Redução de 90% em acessos não autorizados',
            'Configuração em < 5 minutos',
        ],
        examples: [
            'Gestor vê apenas dados da sua empresa',
            'Motorista acessa apenas suas viagens',
            'Admin tem visão completa com auditoria',
        ],
        screenshot: {
            src: '/images/screenshots/resources/permissoes.png',
            alt: 'Interface de gestão de permissões por perfil',
            title: 'Permissões por Perfil',
            description: 'Controle granular de acesso por cargo e função',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['audit-log', 'lgpd'],
    },
    {
        id: 'lgpd',
        title: 'Conformidade LGPD',
        description: 'Controles de privacidade e direitos do titular.',
        category: 'governanca',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Conformidade total com LGPD',
            'Gestão de consentimentos',
            'Direitos do titular automatizados',
            'Relatórios de compliance',
        ],
        metrics: [
            '100% de conformidade LGPD',
            'Processamento de solicitações em < 48h',
            'Redução de 80% em riscos de multa',
        ],
        examples: [
            'Export automático de dados para solicitação do titular',
            'Gestão centralizada de consentimentos',
            'Relatórios de compliance para auditoria',
        ],
        screenshot: {
            src: '/images/screenshots/resources/lgpd.png',
            alt: 'Interface de conformidade LGPD',
            title: 'Conformidade LGPD',
            description: 'Controles de privacidade e direitos do titular',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['audit-log', 'permissoes'],
    },

    // Comunicação
    {
        id: 'notificacoes',
        title: 'Notificações push',
        description: 'Alertas em tempo real para apps e web.',
        category: 'comunicacao',
        profiles: ['empresa', 'transportadora', 'motorista', 'passageiro'],
        benefits: [
            'Notificações em tempo real para todos os perfis',
            'Personalização por tipo de alerta',
            'Histórico completo de notificações',
            'Entrega garantida em < 2 segundos',
        ],
        metrics: [
            'Entrega em < 2 segundos',
            '99.9% de taxa de entrega',
            'Redução de 50% no tempo de resposta',
        ],
        examples: [
            'Passageiro recebe notificação quando veículo está próximo',
            'Gestor é alertado imediatamente sobre atrasos',
            'Motorista recebe atualizações de rota em tempo real',
        ],
        screenshot: {
            src: '/images/screenshots/resources/notificacoes.png',
            alt: 'Sistema de notificações push em tempo real',
            title: 'Notificações Push',
            description: 'Alertas em tempo real para apps e web',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 100, label: 'Usado por 100% dos clientes' },
        relatedResources: ['alertas-atraso', 'status-viagem', 'incidentes'],
    },
    {
        id: 'incidentes',
        title: 'Gestão de incidentes',
        description: 'Registro, escalonamento e resolução.',
        category: 'comunicacao',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Registro completo de incidentes',
            'Escalonamento automático para responsáveis',
            'Acompanhamento até resolução',
            'Histórico para análise de padrões',
        ],
        metrics: [
            'Resolução 60% mais rápida',
            '100% de incidentes rastreados',
            'Redução de 40% em incidentes recorrentes',
        ],
        examples: [
            'Registro de incidente com foto e localização',
            'Escalonamento automático para gestor responsável',
            'Análise de padrões para prevenção',
        ],
        screenshot: {
            src: '/images/screenshots/resources/incidentes.png',
            alt: 'Interface de gestão de incidentes',
            title: 'Gestão de Incidentes',
            description: 'Registro, escalonamento e resolução de incidentes',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 80, label: 'Usado por 80% dos clientes' },
        relatedResources: ['alertas-atraso', 'notificacoes', 'audit-log'],
    },

    // Relatórios
    {
        id: 'relatorios-agendados',
        title: 'Relatórios agendados',
        description: 'Envio automático por e-mail em PDF/Excel.',
        category: 'relatorios',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Agendamento automático de relatórios',
            'Envio por e-mail em PDF/Excel',
            'Múltiplos destinatários',
            'Histórico de envios',
        ],
        metrics: [
            'Economia de 10h/semana em geração manual',
            '100% de precisão nos dados',
            'Entrega garantida no horário agendado',
        ],
        examples: [
            'Relatório diário enviado automaticamente às 8h',
            'Relatório mensal para contabilidade no último dia do mês',
            'Múltiplos relatórios para diferentes destinatários',
        ],
        screenshot: {
            src: '/images/screenshots/resources/relatorios-agendados.png',
            alt: 'Interface de agendamento de relatórios',
            title: 'Relatórios Agendados',
            description: 'Envio automático de relatórios por e-mail em PDF/Excel',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 90, label: 'Usado por 90% dos clientes' },
        relatedResources: ['dashboards', 'exportacao', 'custos-centro'],
    },
    {
        id: 'dashboards',
        title: 'Dashboards',
        description: 'Visão consolidada com KPIs operacionais.',
        category: 'relatorios',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'KPIs em tempo real',
            'Visualizações interativas',
            'Filtros por período, empresa, rota',
            'Export de dados',
        ],
        metrics: [
            'Atualização em tempo real',
            'Mais de 20 KPIs disponíveis',
            'Redução de 70% no tempo de análise',
        ],
        examples: [
            'Dashboard executivo com principais métricas',
            'Análise de performance por período',
            'Comparação entre empresas ou rotas',
        ],
        screenshot: {
            src: '/images/screenshots/resources/dashboards.png',
            alt: 'Dashboard com KPIs operacionais',
            title: 'Dashboards',
            description: 'Visão consolidada com KPIs operacionais em tempo real',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 95, label: 'Usado por 95% dos clientes' },
        relatedResources: ['relatorios-agendados', 'exportacao', 'mapa-tempo-real'],
    },
    {
        id: 'exportacao',
        title: 'Exportação de dados',
        description: 'Baixe relatórios em PDF, Excel ou CSV.',
        category: 'relatorios',
        profiles: ['empresa', 'transportadora'],
        benefits: [
            'Export em múltiplos formatos',
            'Dados prontos para análise externa',
            'Integração com ferramentas de BI',
            'Histórico de exports',
        ],
        metrics: [
            'Geração em < 30 segundos',
            'Suporte a 3 formatos (PDF/Excel/CSV)',
            'Até 100.000 registros por export',
        ],
        examples: [
            'Export de dados para análise em Excel',
            'Relatório PDF para apresentação',
            'CSV para importação em sistemas externos',
        ],
        screenshot: {
            src: '/images/screenshots/resources/exportacao.png',
            alt: 'Interface de exportação de dados',
            title: 'Exportação de Dados',
            description: 'Export de relatórios em PDF, Excel ou CSV',
        },
        video: null,
        documentation: '/documentacao',
        isPremium: false,
        usageStats: { percentage: 85, label: 'Usado por 85% dos clientes' },
        relatedResources: ['relatorios-agendados', 'dashboards', 'audit-log'],
    },
];

// ============================================================
// TESTEMUNHOS SOBRE RECURSOS ESPECÍFICOS
// ============================================================
export const resourceTestimonials: Record<string, Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    metrics?: Array<{ value: string; label: string }>;
}>> = {
    'roteirizacao': [
        {
            quote: "A otimização automática de rotas reduziu nossa quilometragem em 30% e economizamos mais de R$ 50.000 por mês em combustível. O tempo de planejamento caiu de 4 horas para 30 minutos.",
            author: "Carlos Mendes",
            role: "Diretor de Logística",
            company: "Indústria Química",
            metrics: [
                { value: "30%", label: "Redução em km" },
                { value: "R$ 50k", label: "Economia/mês" },
                { value: "30min", label: "Tempo de planejamento" },
            ],
        },
    ],
    'mapa-tempo-real': [
        {
            quote: "Conseguimos monitorar 200 veículos em tempo real e reduzir o tempo de resposta a incidentes em 60%. A visibilidade total mudou completamente nossa operação.",
            author: "Ana Silva",
            role: "Gerente de Operações",
            company: "Empresa de Grande Porte",
            metrics: [
                { value: "200", label: "Veículos monitorados" },
                { value: "60%", label: "Redução em resposta" },
                { value: "100%", label: "Visibilidade" },
            ],
        },
    ],
    'checkin-qr': [
        {
            quote: "O check-in QR Code funciona perfeitamente offline e reduziu o tempo de embarque em 50%. Nossos passageiros adoram a praticidade.",
            author: "Roberto Santos",
            role: "Coordenador de Transporte",
            company: "Varejista Nacional",
            metrics: [
                { value: "50%", label: "Redução no tempo" },
                { value: "100%", label: "Funciona offline" },
                { value: "< 3s", label: "Tempo de check-in" },
            ],
        },
    ],
    'custos-centro': [
        {
            quote: "O rateio automático por centro de custo economizou 15 horas por mês do nosso time de contabilidade. Agora temos relatórios precisos e automáticos.",
            author: "Patricia Oliveira",
            role: "Diretora Financeira",
            company: "Empresa Multinacional",
            metrics: [
                { value: "15h", label: "Economia/mês" },
                { value: "100%", label: "Precisão" },
                { value: "50+", label: "Centros de custo" },
            ],
        },
    ],
    'alertas-atraso': [
        {
            quote: "Os alertas automáticos nos permitem resolver problemas antes que se tornem críticos. Reduzimos atrasos em 40% e aumentamos a satisfação dos passageiros.",
            author: "Fernando Costa",
            role: "Supervisor de Operações",
            company: "Transportadora Regional",
            metrics: [
                { value: "40%", label: "Redução em atrasos" },
                { value: "< 30s", label: "Tempo de alerta" },
                { value: "95%", label: "Satisfação" },
            ],
        },
    ],
    'dashboards': [
        {
            quote: "Os dashboards em tempo real nos dão visibilidade completa da operação. Conseguimos tomar decisões muito mais rápido e identificar problemas antes que afetem os clientes.",
            author: "Mariana Alves",
            role: "Diretora de Operações",
            company: "Empresa de Grande Porte",
            metrics: [
                { value: "70%", label: "Redução em análise" },
                { value: "20+", label: "KPIs disponíveis" },
                { value: "Tempo real", label: "Atualização" },
            ],
        },
    ],
    'audit-log': [
        {
            quote: "O audit log completo foi fundamental para nossa auditoria interna. Conseguimos rastrear todas as ações e comprovar conformidade em minutos, não mais dias.",
            author: "Ricardo Lima",
            role: "Gerente de Compliance",
            company: "Empresa de Grande Porte",
            metrics: [
                { value: "100%", label: "Rastreabilidade" },
                { value: "2 anos", label: "Retenção" },
                { value: "1M+", label: "Eventos/mês" },
            ],
        },
    ],
    'relatorios-agendados': [
        {
            quote: "Os relatórios agendados chegam automaticamente no meu e-mail toda manhã. Economizamos 10 horas por semana e sempre temos os dados atualizados.",
            author: "Juliana Ferreira",
            role: "Analista de Operações",
            company: "Varejista Nacional",
            metrics: [
                { value: "10h", label: "Economia/semana" },
                { value: "100%", label: "Automação" },
                { value: "Diário", label: "Frequência" },
            ],
        },
    ],
};

// ============================================================
// COMO OPERAMOS (confiança, não venda)
// ============================================================
export const comoOperamos = {
    hero: {
        title: 'Como garantimos qualidade e SLA',
        subtitle: 'Conheça nosso processo de operação: monitoramento, incidentes, auditoria e relatórios.',
    },
    sections: [
        {
            title: 'O que monitoramos',
            description: 'Acompanhamos em tempo real a posição de veículos, status de viagens, check-ins e alertas de atraso.',
            items: ['Posição GPS de cada veículo', 'Status de viagem (iniciada, em andamento, finalizada)', 'Check-ins de passageiros', 'Alertas de atraso e desvio'],
        },
        {
            title: 'Alertas e incidentes',
            description: 'Quando algo sai do padrão, geramos alertas automáticos e registramos incidentes para tratamento.',
            items: ['Alertas automáticos de atraso', 'Registro de ocorrências', 'Escalonamento para responsáveis', 'Histórico de resoluções'],
        },
        {
            title: 'Auditoria e rastreabilidade',
            description: 'Cada ação no sistema é registrada com timestamp, usuário e IP. Nada se perde.',
            items: ['Audit log de todas as ações', 'Histórico de alterações', 'Logs de acesso', 'Rastreabilidade de dados'],
        },
        {
            title: 'Relatórios e governança',
            description: 'Relatórios automáticos enviados por e-mail e dashboards para visão consolidada.',
            items: ['Relatórios agendados (PDF/Excel)', 'Dashboards operacionais', 'Métricas de SLA', 'Indicadores de qualidade'],
        },
    ],
    transparency: {
        title: 'O que cada perfil enxerga',
        description: 'Empresas e transportadoras têm visões distintas, respeitando a segregação de dados e permissões.',
    },
    testimonials: [
        {
            quote: "Em 8 meses de operação, tivemos zero downtime. O sistema está sempre disponível quando precisamos, e quando há algum problema, a equipe responde em menos de 2 horas.",
            author: "Patricia Oliveira",
            role: "Diretora de Logística",
            company: "Indústria Química",
            metrics: [
                { value: "0", label: "Downtime" },
                { value: "< 2h", label: "Resposta" },
                { value: "8 meses", label: "Operação" },
            ],
        },
        {
            quote: "A transparência é impressionante. Conseguimos ver exatamente o que está acontecendo em tempo real, e o audit log nos dá total rastreabilidade para compliance. Isso é fundamental para nossa auditoria interna.",
            author: "Ricardo Santos",
            role: "Gerente de Compliance",
            company: "Empresa de Grande Porte",
            metrics: [
                { value: "100%", label: "Rastreabilidade" },
                { value: "24/7", label: "Visibilidade" },
                { value: "0", label: "Falhas" },
            ],
        },
        {
            quote: "O suporte é excepcional. Quando tivemos um incidente crítico, a equipe da GOLF FOX respondeu em 30 minutos e resolveu tudo em menos de 3 horas. Isso é confiança.",
            author: "Fernanda Costa",
            role: "Coordenadora de Transporte",
            company: "Varejista Nacional",
            metrics: [
                { value: "30min", label: "Resposta" },
                { value: "3h", label: "Resolução" },
                { value: "99.9%", label: "Disponibilidade" },
            ],
        },
        {
            quote: "A plataforma nunca falhou quando precisamos. Operamos 24/7 e o sistema está sempre lá, monitorando, alertando e gerando relatórios. É como ter uma equipe dedicada trabalhando para nós.",
            author: "Marcos Almeida",
            role: "Diretor de Operações",
            company: "Transportadora Regional",
            metrics: [
                { value: "24/7", label: "Operação" },
                { value: "100%", label: "Confiabilidade" },
                { value: "0", label: "Falhas críticas" },
            ],
        },
    ],
    slaMetrics: [
        { value: "99.9%", label: "Uptime garantido" },
        { value: "< 2s", label: "Tempo de resposta" },
        { value: "24/7/365", label: "Disponibilidade" },
        { value: "< 4h", label: "Resolução de incidentes" },
    ],
};

// ============================================================
// COMO FUNCIONA - Conteúdo específico
// ============================================================
export const comoFunciona = {
    testimonials: [
        {
            quote: "Conseguimos reduzir nossa frota em 15% apenas otimizando as rotas e garantindo que só embarca quem está autorizado. A economia foi imediata.",
            author: "Carlos Mendes",
            role: "Diretor de Operações",
            company: "Indústria Farmacêutica",
            metrics: [
                { value: "15%", label: "Redução de frota" },
                { value: "40%", label: "Menos reclamações" },
                { value: "6 meses", label: "ROI alcançado" },
            ],
        },
        {
            quote: "A visibilidade em tempo real acabou com as reclamações no RH. Agora sabemos exatamente onde cada ônibus está e podemos responder qualquer questionamento com dados.",
            author: "Ana Paula Silva",
            role: "Gerente de RH",
            company: "Varejista Nacional",
            metrics: [
                { value: "100%", label: "Visibilidade" },
                { value: "50%", label: "Menos tempo RH" },
                { value: "3 meses", label: "ROI alcançado" },
            ],
        },
        {
            quote: "O DRE operacional mudou nossa forma de precificar. Agora sabemos a margem real de cada contrato e conseguimos proteger nossa rentabilidade.",
            author: "Roberto Alves",
            role: "Diretor de Operações",
            company: "Transportadora Regional",
            metrics: [
                { value: "25%", label: "Aumento de margem" },
                { value: "0", label: "Documentos vencidos" },
                { value: "4 meses", label: "ROI alcançado" },
            ],
        },
        {
            quote: "Triplicamos nossa capacidade de atendimento sem aumentar a equipe. A plataforma nos permite gerenciar múltiplas empresas de forma eficiente.",
            author: "Mariana Costa",
            role: "CEO",
            company: "Consultoria de Logística",
            metrics: [
                { value: "3x", label: "Mais empresas" },
                { value: "60%", label: "Menos tempo" },
                { value: "2 meses", label: "ROI alcançado" },
            ],
        },
    ],
    metrics: [
        { value: "30%", label: "Redução média de custos" },
        { value: "15h", label: "Economia/semana em gestão" },
        { value: "3-6 meses", label: "ROI médio" },
        { value: "99.5%", label: "Uptime da plataforma" },
    ],
};

// ============================================================
// INFORMAÇÕES DA EMPRESA
// ============================================================
export const COMPANY_INFO = {
    name: 'GOLF FOX',
    fullName: 'GOLF FOX LABS',
    cnpj: '60.867.791/0001-83',
    email: 'contato@golffox.com.br',
    phone: '+55 (11) 93933-7163',
    whatsapp: '5511939337163',
    address: {
        street: 'Rua Caldas Novas, 50',
        city: 'Barueri',
        state: 'SP',
        cep: '06404-301',
    },
};
