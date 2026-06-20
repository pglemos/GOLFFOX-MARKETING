export const impactMetrics = [
    { value: "500+", label: "Colaboradores atendidos", icon: "Users" },
    { value: "30%", label: "Economia média", icon: "Zap" },
    { value: "4", label: "Semanas para go-live", icon: "Clock" },
    { value: "99.9%", label: "Uptime garantido", icon: "Shield" },
];

export const clientLogos = [
    { name: "Indústria Farmacêutica", icon: "Building2" },
    { name: "Varejista Nacional", icon: "Building2" },
    { name: "Empresa de Logística", icon: "Truck" },
    { name: "Empresa de Grande Porte", icon: "Building2" },
];

export const steps = [
    {
        step: 1,
        title: "Diagnóstico e Simulação",
        description: "Entendemos sua operação atual através de análise detalhada de dados e projetamos a solução ideal com simulação de resultados.",
        icon: "FileText",
        details: [
            "Mapeamento de rotas e turnos atuais",
            "Análise de volumes e frequências",
            "Identificação de pontos de melhoria",
            "Simulação de custos e ganhos",
        ],
        deliverables: [
            "Relatório de diagnóstico completo (PDF)",
            "Proposta de otimização de rotas",
            "Projeção de economia de custos",
            "Plano de implementação personalizado",
        ],
        duration: "1 semana",
        tools: [
            "Google Maps API para geocodificação",
            "Algoritmos de otimização de rotas",
            "Análise de dados com Python/Pandas",
            "Dashboards de simulação",
        ],
        metrics: [
            "Identificação de 15-30% de economia potencial",
            "Redução de 20-40% em quilometragem desnecessária",
            "Otimização de ocupação média de 60% para 85%+",
        ],
        screenshot: {
            src: "/images/screenshots/diagnostico.png",
            alt: "Dashboard de diagnóstico e análise de rotas",
            title: "Dashboard de Diagnóstico",
            description: "Análise completa de rotas atuais e projeção de otimizações",
            feature: "Análise",
        },
    },
    {
        step: 2,
        title: "Implantação Guiada",
        description: "Configuramos toda a plataforma com seus dados, integramos com sistemas existentes e treinamos sua equipe para operar com confiança.",
        icon: "Settings",
        details: [
            "Configuração de rotas e pontos",
            "Cadastro de passageiros e veículos",
            "Treinamento de gestores e motoristas",
            "Integração com sistemas existentes",
        ],
        deliverables: [
            "Portais configurados (Empresa e Transportadora)",
            "Apps instalados e configurados (Motorista e Passageiro)",
            "Integrações funcionando (RH, ERP, etc.)",
            "Documentação técnica e de usuário",
        ],
        duration: "1-2 semanas",
        tools: [
            "Supabase para banco de dados e autenticação",
            "APIs RESTful para integrações",
            "Next.js para portais web",
            "React Native/Expo para apps móveis",
        ],
        metrics: [
            "100% dos colaboradores cadastrados e ativos",
            "Todas as rotas otimizadas e configuradas",
            "Equipe treinada e operacional em 2 semanas",
        ],
        screenshot: {
            src: "/images/screenshots/implantacao.png",
            alt: "Portal de configuração e setup da plataforma",
            title: "Portal de Configuração",
            description: "Interface de setup com cadastro de rotas, colaboradores e veículos",
            feature: "Configuração",
        },
    },
    {
        step: 3,
        title: "Operação com Governança",
        description: "Operação ao vivo com monitoramento em tempo real, alertas inteligentes, relatórios automáticos e auditoria completa de todas as ações.",
        icon: "Play",
        details: [
            "Monitoramento em tempo real",
            "Alertas automáticos de atraso",
            "Relatórios agendados por e-mail",
            "Auditoria completa de ações",
        ],
        deliverables: [
            "Dashboard operacional em tempo real",
            "Sistema de alertas configurado",
            "Relatórios automáticos agendados",
            "Audit log completo de todas as ações",
        ],
        duration: "Contínuo",
        tools: [
            "Google Maps para rastreamento GPS",
            "Supabase Realtime para atualizações instantâneas",
            "Sistema de notificações push (Expo)",
            "Cron jobs para relatórios automáticos",
        ],
        metrics: [
            "15 horas/semana economizadas em gestão manual",
            "30% de redução média em custos operacionais",
            "99.5% de uptime da plataforma",
            "ROI em 3-6 meses",
        ],
        screenshot: {
            src: "/images/screenshots/operacao.png",
            alt: "Dashboard operacional em tempo real com monitoramento",
            title: "Dashboard Operacional",
            description: "Monitoramento em tempo real de veículos, rotas e passageiros",
            feature: "Operação",
        },
    },
];

export const inputs = [
    {
        item: "Lista de colaboradores com endereços",
        benefit: "Geocodificação automática e otimização de rotas",
        timeSaved: "Economiza 8-12 horas de trabalho manual",
        costReduction: "Reduz custos de roteirização em 25%",
    },
    {
        item: "Turnos e horários de trabalho",
        benefit: "Planejamento automático de rotas por turno",
        timeSaved: "Elimina 5-8 horas/semana de planejamento",
        costReduction: "Otimiza ocupação e reduz veículos ociosos",
    },
    {
        item: "Centros de custo (se aplicável)",
        benefit: "Rateio automático e relatórios por centro",
        timeSaved: "Economiza 3-5 horas/semana em conciliação",
        costReduction: "Facilita controle orçamentário preciso",
    },
    {
        item: "Plantas/unidades atendidas",
        benefit: "Gestão centralizada de múltiplas unidades",
        timeSaved: "Reduz tempo de gestão em 40%",
        costReduction: "Permite otimização entre unidades",
    },
];

export const outputs = [
    {
        item: "Rotas otimizadas por turno",
        benefit: "Redução de 20-40% em quilometragem",
        timeSaved: "15 horas/semana economizadas em gestão",
        costReduction: "Economia de 25-35% em custos de transporte",
    },
    {
        item: "Portais configurados para empresa e transportadora",
        benefit: "Visibilidade completa e controle em tempo real",
        timeSaved: "Elimina 10-15 horas/semana em relatórios manuais",
        costReduction: "Reduz custos operacionais em 30%",
    },
    {
        item: "Apps instalados para motoristas e passageiros",
        benefit: "Check-in digital e rastreamento em tempo real",
        timeSaved: "Economiza 2-3 horas/dia por motorista",
        costReduction: "Elimina custos de planilhas e papel",
    },
    {
        item: "Relatórios automáticos agendados",
        benefit: "Informações sempre atualizadas sem esforço",
        timeSaved: "Economiza 5-8 horas/semana em geração de relatórios",
        costReduction: "Reduz necessidade de equipe de análise",
    },
    {
        item: "Dashboards operacionais",
        benefit: "Tomada de decisão baseada em dados em tempo real",
        timeSaved: "Acesso instantâneo a KPIs (antes: 2-3 horas para compilar)",
        costReduction: "Identifica oportunidades de economia imediatamente",
    },
];

export const timeline = [
    {
        week: "Semana 1",
        title: "Diagnóstico",
        description: "Análise completa da operação atual e plano de implantação.",
        deliverables: [
            "Relatório de diagnóstico",
            "Plano de implantação personalizado",
        ],
        duration: { min: "3 dias", max: "5 dias" },
        milestones: [
            "Dados coletados e validados",
            "Análise de rotas concluída",
        ],
    },
    {
        week: "Semana 2",
        title: "Configuração",
        description: "Setup da plataforma com seus dados e integrações.",
        deliverables: [
            "Plataforma configurada",
            "Dados importados",
        ],
        duration: { min: "5 dias", max: "7 dias" },
        milestones: [
            "Colaboradores cadastrados",
            "Rotas validadas",
        ],
    },
    {
        week: "Semana 3",
        title: "Treinamento",
        description: "Capacitação de gestores e motoristas.",
        deliverables: [
            "Gestores treinados",
            "Motoristas capacitados",
        ],
        duration: { min: "3 dias", max: "5 dias" },
        milestones: [
            "Equipe 100% treinada",
            "Testes realizados",
        ],
    },
    {
        week: "Semana 4",
        title: "Go-live",
        description: "Início da operação assistida com suporte dedicado.",
        deliverables: [
            "Operação ao vivo",
            "Suporte dedicado",
        ],
        duration: { min: "2 dias", max: "3 dias" },
        milestones: [
            "Sistema 100% operacional",
            "Suporte de 90 dias iniciado",
        ],
    },
];

export const timelineVariations = {
    small: [
        {
            week: "Semana 1",
            title: "Diagnóstico",
            description: "Análise rápida e configuração simplificada.",
            deliverables: [
                "Relatório de diagnóstico",
                "Proposta de otimização",
            ],
            duration: { min: "2 dias", max: "3 dias" },
            milestones: ["Dados coletados", "Análise concluída"],
        },
        {
            week: "Semana 2",
            title: "Configuração e Go-live",
            description: "Setup rápido e início imediato da operação.",
            deliverables: [
                "Plataforma configurada",
                "Treinamento básico realizado",
                "Operação iniciada",
            ],
            duration: { min: "3 dias", max: "5 dias" },
            milestones: ["Sistema operacional", "Primeira viagem rastreada"],
        },
    ],
    medium: timeline,
    large: [
        ...timeline,
        {
            week: "Semana 5",
            title: "Otimização",
            description: "Ajustes finos e otimizações avançadas baseadas em dados reais.",
            deliverables: [
                "Relatório de performance inicial",
                "Otimizações de rotas aplicadas",
                "Treinamento avançado realizado",
            ],
            duration: { min: "3 dias", max: "5 dias" },
            milestones: [
                "Métricas iniciais coletadas",
                "Otimizações implementadas",
            ],
        },
        {
            week: "Semana 6",
            title: "Consolidação",
            description: "Estabilização completa e transferência de conhecimento.",
            deliverables: [
                "Documentação completa",
                "Equipe totalmente autônoma",
                "SLA estabelecido",
            ],
            duration: { min: "2 dias", max: "3 dias" },
            milestones: [
                "Operação 100% estável",
                "Transferência concluída",
            ],
        },
    ],
};

export const faqs = [
    {
        question: "Quanto tempo leva a implantação?",
        answer: "A implantação padrão leva de 2 a 4 semanas, dependendo do tamanho da operação e quantidade de rotas. Para empresas pequenas (até 50 colaboradores), o processo pode ser concluído em 2-3 semanas. Empresas médias (51-200 colaboradores) levam 3-4 semanas, e grandes empresas (200+ colaboradores) podem levar 4-6 semanas. Incluímos diagnóstico, configuração, treinamento e go-live.",
    },
    {
        question: "Preciso de equipe de TI interna?",
        answer: "Não. A GOLF FOX cuida de toda a configuração técnica e oferece suporte contínuo. Nossa equipe especializada configura a plataforma, integra com seus sistemas existentes (se necessário) e treina sua equipe. Você só precisa fornecer os dados básicos (colaboradores, endereços, turnos). Todo o suporte técnico é incluído no plano.",
    },
    {
        question: "Como funciona a integração com meu sistema de RH?",
        answer: "Oferecemos múltiplas opções de integração: APIs RESTful para integração em tempo real, exportações automáticas em CSV/Excel para importação periódica, e webhooks para eventos específicos. Também podemos receber arquivos em formatos padrão (CSV, Excel) via upload manual ou SFTP. Nossa equipe técnica ajuda a configurar a integração mais adequada para seu caso.",
    },
    {
        question: "Quanto custa a implementação?",
        answer: "O investimento varia conforme o tamanho da operação e plano escolhido. Oferecemos planos Piloto (para testes), Profissional (para operações médias) e Enterprise (para grandes operações). A implementação inicial está incluída em todos os planos, sem custos adicionais de setup. Entre em contato para uma proposta personalizada baseada no seu número de colaboradores e rotas.",
    },
    {
        question: "Preciso mudar minha transportadora atual?",
        answer: "Não é necessário. A GOLF FOX funciona com qualquer transportadora parceira. Nossa plataforma se integra com a operação existente, permitindo que você mantenha seus fornecedores atuais enquanto ganha visibilidade e controle. A transportadora pode usar nosso Portal Transportadora para gerenciar frota e motoristas, ou continuar operando normalmente enquanto você monitora via nossa plataforma.",
    },
    {
        question: "Como funciona o suporte pós-implantação?",
        answer: "Oferecemos suporte dedicado durante os primeiros 90 dias após o go-live, incluindo ajustes de configuração, treinamento adicional e resolução de dúvidas. Após esse período, o suporte contínuo está incluído no plano: atendimento via WhatsApp, email e portal de ajuda, com SLA de resposta de até 4 horas úteis. Também oferecemos webinars mensais e atualizações de funcionalidades.",
    },
    {
        question: "E se minha empresa já tem sistema de RH?",
        answer: "Perfeito! A GOLF FOX se integra com os principais sistemas de RH do mercado. Oferecemos APIs para integração bidirecional, permitindo sincronizar dados de colaboradores, turnos e ausências. Se seu sistema não tiver API, trabalhamos com exportações periódicas (CSV/Excel) ou webhooks. A integração é configurada durante a implantação, sem necessidade de mudanças no seu sistema atual.",
    },
    {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Os primeiros resultados aparecem imediatamente após o go-live: visibilidade em tempo real das rotas, controle de embarque e redução de reclamações. Economias de custos começam a aparecer em 30-60 dias, quando você identifica rotas otimizáveis e reduz ocupação ociosa. O ROI completo (retorno sobre investimento) geralmente ocorre em 3-6 meses, dependendo do tamanho da operação e das otimizações implementadas.",
    },
    {
        question: "Preciso treinar minha equipe?",
        answer: "Sim, mas o treinamento é rápido e prático. Oferecemos treinamento presencial ou remoto durante a implantação: 2 horas para gestores (uso do portal e relatórios), 1 hora para motoristas (uso do app), e 30 minutos para colaboradores (app passageiro). Também fornecemos materiais de apoio (vídeos, manuais) e suporte durante os primeiros 90 dias. A plataforma é intuitiva e a maioria dos usuários se adapta rapidamente.",
    },
    {
        question: "Funciona offline?",
        answer: "Sim, funcionalidades críticas funcionam offline. O app do motorista permite check-in/check-out mesmo sem internet, sincronizando automaticamente quando a conexão for restabelecida. O app do passageiro também funciona parcialmente offline para consultar rotas e horários salvos. O portal web requer conexão, mas os dados são atualizados em tempo real quando há internet. Isso garante que a operação continue mesmo em áreas com sinal fraco.",
    },
    {
        question: "E se não der certo? Posso cancelar?",
        answer: "Sim. Oferecemos garantia de satisfação de 60 dias. Se você não estiver satisfeito com os resultados, devolvemos seu investimento integralmente, sem perguntas. Além disso, nossos contratos são mensais após o período inicial - você pode cancelar a qualquer momento. Também oferecemos suporte dedicado durante os primeiros 90 dias para garantir que tudo funcione perfeitamente.",
    },
    {
        question: "Vocês têm clientes do meu segmento?",
        answer: "Provavelmente sim. Atendemos empresas de diversos segmentos: indústria farmacêutica, automotiva, alimentos, varejo, logística, serviços financeiros e tecnologia. Cada setor tem necessidades específicas que a plataforma atende. Entre em contato para conhecer cases do seu setor específico e entender como outras empresas do seu segmento estão usando a GOLF FOX.",
    },
    {
        question: "Qual a diferença para outras soluções de fretamento?",
        answer: "A GOLF FOX é a única plataforma que combina: (1) otimização de rotas com algoritmos avançados, (2) check-in digital auditável com QR Code e NFC, (3) governança completa com audit log de todas as ações, e (4) portais separados para empresa e transportadora com visões específicas. Outras soluções focam apenas em rastreamento GPS ou apenas em gestão de frota, sem a visão integrada de governança que oferecemos.",
    },
    {
        question: "Como garantem a segurança dos meus dados?",
        answer: "Utilizamos Supabase (infraestrutura AWS) com criptografia em repouso e em trânsito, autenticação de dois fatores opcional, controle de acesso baseado em funções (RBAC) e conformidade total com LGPD. Nossos servidores estão na AWS em São Paulo. Realizamos backups automáticos diários e temos SLA de 99.9% de uptime. Veja mais detalhes em nossa página de Segurança e LGPD.",
    },
    {
        question: "E se a transportadora não quiser usar o sistema?",
        answer: "A plataforma funciona independentemente. Você pode monitorar a operação mesmo que a transportadora não use nosso Portal Transportadora - basta que os motoristas usem o app. Na maioria dos casos, transportadoras adoram a GOLF FOX porque reduz ligações operacionais, elimina disputas sobre serviço prestado e dá comprovação digital de tudo. Oferecemos treinamento gratuito para transportadoras parceiras.",
    },
];

export const guarantees = [
    {
        icon: "Heart",
        title: "Garantia de 60 dias",
        description: "Se não estiver satisfeito, devolvemos seu investimento. Sem perguntas, sem complicações.",
        highlight: true,
    },
    {
        icon: "Shield",
        title: "SLA 99.9% Uptime",
        description: "Disponibilidade garantida em contrato com monitoramento 24/7.",
        highlight: true,
    },
    {
        icon: "Truck",
        title: "Sem mudar de transportadora",
        description: "Funciona com sua operação atual. Sem necessidade de trocar fornecedores.",
        highlight: true,
    },
];

export const secondaryGuarantees = [
    { icon: "Award", text: "Treinamento ilimitado" },
    { icon: "Headphones", text: "Suporte via WhatsApp" },
    { icon: "Zap", text: "Suporte dedicado 90 dias" },
    { icon: "Clock", text: "Implantação em 4 semanas" },
];

export const resources = [
    {
        icon: "FileCheck",
        title: "Checklist de preparação",
        description: "Lista completa do que você precisa ter em mãos antes da implantação.",
        type: "PDF",
        download: "/demo?recurso=checklist",
        color: "blue",
    },
    {
        icon: "FileSpreadsheet",
        title: "Template de dados",
        description: "Planilha Excel pronta para preencher com colaboradores, endereços e turnos.",
        type: "Excel",
        download: "/demo?recurso=template-dados",
        color: "green",
    },
    {
        icon: "BookOpen",
        title: "Guia de boas práticas",
        description: "Manual completo com dicas e melhores práticas para gestão de fretamento.",
        type: "PDF",
        download: "/demo?recurso=guia-boas-praticas",
        color: "orange",
    },
    {
        icon: "Video",
        title: "Webinar gravado",
        description: "Demonstração completa da plataforma com casos de uso reais.",
        type: "Vídeo",
        download: "/demo?recurso=webinar",
        color: "purple",
    },
];

export const aggregatedMetrics = [
    { value: "30%", label: "Redução média de custos" },
    { value: "15h", label: "Economia/semana em gestão" },
    { value: "3-6 meses", label: "ROI médio" },
    { value: "99.5%", label: "Uptime da plataforma" },
];

export const testimonials = [
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
];
