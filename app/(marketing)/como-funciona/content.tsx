"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { FileText, Settings, Play, CheckCircle, Upload, Download, Shield, Clock, Heart, FileCheck, FileSpreadsheet, BookOpen, Video, ArrowRight, Building2, Truck, Users, Zap, Award, Headphones, X, TrendingUp, ShieldCheck, Smartphone } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA, TestimonialsSection, TimelineSection, ScreenshotSection, ProcessDiagram, ROICalculator } from "@/components/marketing";
import { comoFunciona } from "@/content/marketing";
import { trackEvent, trackDemoClick, createScrollTracker } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

export function ComoFuncionaContent() {
    // Estado para controlar FAQs visíveis
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    // Estado para controle do sticky CTA mobile
    const [showStickyCTA, setShowStickyCTA] = useState(false);

    // Função para obter o próximo mês dinamicamente
    const getNextMonth = () => {
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return months[nextMonth.getMonth()];
    };

    // Scroll tracking para analytics
    useEffect(() => {
        const handleScroll = createScrollTracker([50, 75, 90]);
        window.addEventListener('scroll', handleScroll);

        // Mostrar sticky CTA após scroll de 500px
        const handleStickyVisibility = () => {
            setShowStickyCTA(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleStickyVisibility);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleStickyVisibility);
        };
    }, []);

    const steps = [
        {
            step: 1,
            title: "Diagnóstico e Simulação",
            description: "Entendemos sua operação atual através de análise detalhada de dados e projetamos a solução ideal com simulação de resultados.",
            icon: FileText,
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
            icon: Settings,
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
            icon: Play,
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

    // Screenshots para seção dedicada
    const screenshots = steps
        .filter((step) => step.screenshot)
        .map((step) => step.screenshot!);

    const inputs = [
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

    const outputs = [
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

    // Timeline simplificada para 4 marcos principais
    const timeline = [
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

    // Variações por tamanho de empresa
    const timelineVariations = {
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
        medium: timeline, // Usa timeline padrão
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

    const faqs = useMemo<Array<{ question: string; answer: string }>>(() => [
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
        // FAQs de objeções de compra
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
    ], []);

    // Adicionar schema FAQPage
    useEffect(() => {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(faqSchema);
        script.id = "faq-schema";

        // Remove schema anterior se existir
        const existing = document.getElementById("faq-schema");
        if (existing) existing.remove();

        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById("faq-schema");
            if (scriptToRemove) scriptToRemove.remove();
        };
    }, [faqs]);

    return (
        <>
            <HeroSection
                badge="Implantação em 4 semanas"
                title="Economia de 30% comprovada, sem mudar de transportadora"
                subtitle="Da análise à operação completa em 4 semanas. Descubra como empresas reduziram custos e eliminaram reclamações no RH com check-in digital e rotas otimizadas."
                variant="split"
                image={{
                    src: "/images/dashboard-preview.png",
                    alt: "Dashboard GOLF FOX - Gestão de fretamento em tempo real"
                }}
            />

            {/* Métricas de Impacto */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { value: "500+", label: "Colaboradores atendidos", icon: Users },
                            { value: "30%", label: "Economia média", icon: Zap },
                            { value: "4", label: "Semanas para go-live", icon: Clock },
                            { value: "99.9%", label: "Uptime garantido", icon: Shield },
                        ].map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center mb-2">
                                        <Icon className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Logos de Clientes */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Empresas que confiam na GOLF FOX
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                        {[
                            { name: "Indústria Farmacêutica", icon: Building2 },
                            { name: "Varejista Nacional", icon: Building2 },
                            { name: "Empresa de Logística", icon: Truck },
                            { name: "Empresa de Grande Porte", icon: Building2 },
                        ].map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg"
                            >
                                <client.icon className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">{client.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Passos */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Título da seção */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            3 etapas para transformar seu fretamento
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Processo completo em 4 semanas, sem interromper sua operação
                        </motion.p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative mb-16 last:mb-0"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="shrink-0">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                                                <span className="text-3xl font-bold text-white">{step.step}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <Icon className="w-6 h-6 text-orange-500" />
                                                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                                {step.duration && (
                                                    <span className="px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full">
                                                        {step.duration}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-lg text-gray-600 mb-6">{step.description}</p>

                                            {/* Detalhes principais */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                                {step.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-gray-700">
                                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                {/* Entregas */}
                                                {step.deliverables && step.deliverables.length > 0 && (
                                                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                                                        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                            <FileCheck className="w-4 h-4 text-orange-500" />
                                                            Entregas
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {step.deliverables.map((deliverable, i) => (
                                                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                                    <span className="text-orange-500 mt-1">•</span>
                                                                    {deliverable}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Tools utilizadas */}
                                                {step.tools && step.tools.length > 0 && (
                                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                                        <h4 className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                            <Settings className="w-4 h-4 text-blue-500" />
                                                            Tecnologias
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {step.tools.map((tool, i) => (
                                                                <li key={i} className="text-sm text-blue-700 flex items-start gap-2">
                                                                    <span className="text-blue-500 mt-1">→</span>
                                                                    {tool}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Métricas */}
                                            {step.metrics && step.metrics.length > 0 && (
                                                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                                                    <h4 className="text-sm font-semibold text-orange-900 mb-2 uppercase tracking-wide">
                                                        Resultados Esperados
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {step.metrics.map((metric, i) => (
                                                            <li key={i} className="text-sm text-orange-800 flex items-start gap-2">
                                                                <span className="text-orange-600 mt-1">✓</span>
                                                                {metric}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute left-10 top-24 h-16 w-0.5 bg-gradient-to-b from-orange-300 to-transparent" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Intermediário */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className="text-gray-600 mb-4">
                            Quer ver uma demonstração do processo completo?
                        </p>
                        <Link
                            href="/demo"
                            onClick={() => trackDemoClick('section')}
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                        >
                            Ver demonstração gratuita
                            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials e Métricas */}
            <TestimonialsSection
                testimonials={comoFunciona.testimonials}
                title="Resultados reais de clientes"
                subtitle="Veja o que empresas como a sua conseguiram com a GOLF FOX"
                variant="default"
            />

            {/* Screenshots */}
            {screenshots.length > 0 && (
                <ScreenshotSection
                    screenshots={screenshots}
                    title="Veja a plataforma em ação"
                    subtitle="Capturas de tela reais dos portais e dashboards"
                    columns={3}
                    dark={false}
                />
            )}

            {/* Métricas Agregadas */}
            <section className="py-16 lg:py-24 bg-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-4"
                        >
                            Impacto consolidado
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-orange-100"
                        >
                            Resultados agregados de nossos clientes
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {comoFunciona.metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-medium text-orange-100">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resultados Reais (Mini-Cases) */}
            <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Resultados Reais
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Veja o impacto financeiro e operacional em operações reais
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Building2 className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Indústria Farmacêutica</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Redução de 22% no budget</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Em apenas 4 meses de operação, a otimização de rotas e ajuste de ocupação gerou uma economia direta de R$ 1.2M anual no contrato de fretamento de uma fábrica com 2.000 colaboradores.
                            </p>
                            <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg w-fit">
                                <TrendingUp className="w-4 h-4" />
                                <span>ROI em 3 meses</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Truck className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Varejo Logístico</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero reclamações trabalhistas</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A implementação do registro de ponto via geofence eliminou as disputas sobre horas *in itinere*. O índice de pontualidade dos turnos subiu de 82% para 98% no primeiro mês.
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-lg w-fit">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Compliance 100%</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Inputs e Outputs */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Upload className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">O que você informa</h3>
                            </div>
                            <div className="space-y-4">
                                {inputs.map((input, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                                        <div className="flex items-start gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                            <span className="font-medium text-gray-900">{input.item}</span>
                                        </div>
                                        <div className="ml-3.5 space-y-1 text-sm">
                                            <div className="text-gray-700">
                                                <span className="font-semibold">Benefício: </span>
                                                {input.benefit}
                                            </div>
                                            <div className="text-gray-600">
                                                <span className="font-semibold">Tempo economizado: </span>
                                                {input.timeSaved}
                                            </div>
                                            <div className="text-gray-600">
                                                <span className="font-semibold">Redução de custos: </span>
                                                {input.costReduction}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Download className="w-8 h-8 text-green-600" />
                                <h3 className="text-xl font-bold text-gray-900">O que você recebe</h3>
                            </div>
                            <div className="space-y-4">
                                {outputs.map((output, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-green-50 border border-green-100">
                                        <div className="flex items-start gap-2 mb-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                            <span className="font-medium text-gray-900">{output.item}</span>
                                        </div>
                                        <div className="ml-6 space-y-1 text-sm">
                                            <div className="text-gray-700">
                                                <span className="font-semibold">Benefício: </span>
                                                {output.benefit}
                                            </div>
                                            <div className="text-gray-600">
                                                <span className="font-semibold">Tempo economizado: </span>
                                                {output.timeSaved}
                                            </div>
                                            <div className="text-gray-600">
                                                <span className="font-semibold">Redução de custos: </span>
                                                {output.costReduction}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Comparação Antes/Depois */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Antes vs Depois</h3>
                            <p className="text-gray-600">Veja a transformação na sua operação</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Antes */}
                            <div className="p-6 rounded-2xl bg-red-50 border-2 border-red-200">
                                <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">❌</span> Antes da GOLF FOX
                                </h4>
                                <ul className="space-y-2 text-sm text-red-800">
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Planilhas Excel manuais (15-20 horas/semana)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Sem visibilidade em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Reclamações constantes no RH</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Custos ocultos e sem controle</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span>•</span>
                                        <span>Risco trabalhista por falta de auditoria</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Depois */}
                            <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-200">
                                <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">✅</span> Depois da GOLF FOX
                                </h4>
                                <ul className="space-y-2 text-sm text-green-800">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>Automação completa (0 horas manuais)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>Monitoramento em tempo real 24/7</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>Redução de 40% em reclamações</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>Economia de 30% em custos operacionais</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>Auditoria completa e compliance total</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* ROI Summary */}
                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                            <div className="text-center">
                                <h4 className="text-xl font-bold text-orange-900 mb-2">ROI Médio</h4>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div>
                                        <div className="text-3xl font-bold text-orange-600">30%</div>
                                        <div className="text-sm text-orange-800">Redução de custos</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-orange-600">15h</div>
                                        <div className="text-sm text-orange-800">Economia/semana</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-orange-600">3-6</div>
                                        <div className="text-sm text-orange-800">Meses para ROI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Diagram */}
            <ProcessDiagram
                steps={[
                    {
                        number: 1,
                        title: "Diagnóstico",
                        description: "Análise completa da operação atual",
                        icon: FileText,
                        color: "blue",
                    },
                    {
                        number: 2,
                        title: "Implantação",
                        description: "Configuração e treinamento",
                        icon: Settings,
                        color: "orange",
                    },
                    {
                        number: 3,
                        title: "Operação",
                        description: "Monitoramento e governança",
                        icon: Play,
                        color: "green",
                    },
                ]}
                title="Processo completo"
                subtitle="Do diagnóstico à operação em 3 etapas simples"
                dark={false}
            />

            {/* Timeline */}
            <TimelineSection
                phases={timeline}
                title="Timeline de implantação"
                subtitle="Cronograma padrão de 4 semanas (empresas médias)"
                variant="dark"
                showVariations={true}
                variations={timelineVariations}
            />

            {/* CTA Contextual após Timeline */}
            <section className="py-12 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <p className="text-gray-300 mb-4">
                            Quer saber o prazo exato para sua empresa? Depende do tamanho da operação.
                        </p>
                        <Link
                            href="/demo"
                            onClick={() => trackDemoClick('section')}
                            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                        >
                            Fale com um especialista e receba um cronograma personalizado
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ROI Calculator */}
            <ROICalculator
                title="Calcule seu ROI"
                subtitle="Veja quanto você pode economizar com a GOLF FOX"
                dark={false}
            />

            {/* Requisitos de Infraestrutura */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            O que você precisa para rodar
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Infraestrutura leve e sem necessidade de hardware proprietário (BYOD)
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="text-center p-6 border-2 border-gray-100 rounded-2xl bg-gray-50"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Smartphone className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Passageiros</h3>
                            <p className="text-gray-600 mb-4 text-sm px-4">
                                Qualquer smartphone Android (8+) ou iOS (12+) para o app.
                            </p>
                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                Opcional: Crachá NFC
                            </span>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="text-center p-6 border-2 border-orange-100 rounded-2xl bg-orange-50"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Truck className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Motoristas</h3>
                            <p className="text-gray-600 mb-4 text-sm px-4">
                                Smartphone Android básico (R$ 800+) com GPS e pacote de dados.
                            </p>
                            <div className="flex flex-col gap-2 items-center">
                                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                    Funciona Offline
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="text-center p-6 border-2 border-gray-100 rounded-2xl bg-gray-50"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Zap className="w-8 h-8 text-teal-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Conectividade</h3>
                            <p className="text-gray-600 mb-4 text-sm px-4">
                                Sincronização automática quando houver sinal 4G/WiFi.
                            </p>
                            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                                Consumo baixo de dados
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FAQSection
                        faqs={showAllFaqs ? faqs : faqs.slice(0, 7)}
                        title="Perguntas frequentes"
                        subtitle="Tire suas dúvidas sobre implantação e funcionamento"
                    />
                    {faqs.length > 7 && !showAllFaqs && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-8"
                        >
                            <button
                                onClick={() => {
                                    setShowAllFaqs(true);
                                    trackEvent({
                                        event: 'faq_expand',
                                        properties: { action: 'show_all' },
                                    });
                                }}
                                className="text-orange-600 font-medium hover:text-orange-700 hover:underline"
                            >
                                Ver todas as {faqs.length} perguntas
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Garantias - com 3 principais destacadas */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Nossas garantias
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Compromisso com sua satisfação e sucesso
                        </motion.p>
                    </div>

                    {/* Garantias Principais - Destacadas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                        {[
                            {
                                icon: Heart,
                                title: "Garantia de 60 dias",
                                description: "Se não estiver satisfeito, devolvemos seu investimento. Sem perguntas, sem complicações.",
                                highlight: true,
                            },
                            {
                                icon: Shield,
                                title: "SLA 99.9% Uptime",
                                description: "Disponibilidade garantida em contrato com monitoramento 24/7.",
                                highlight: true,
                            },
                            {
                                icon: Truck,
                                title: "Sem mudar de transportadora",
                                description: "Funciona com sua operação atual. Sem necessidade de trocar fornecedores.",
                                highlight: true,
                            },
                        ].map((guarantee, index) => {
                            const Icon = guarantee.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-orange-100 border border-orange-200">
                                            <Icon size={28} className="text-orange-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Garantias Secundárias */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: Award, text: "Treinamento ilimitado" },
                            { icon: Headphones, text: "Suporte via WhatsApp" },
                            { icon: Zap, text: "Suporte dedicado 90 dias" },
                            { icon: Clock, text: "Implantação em 4 semanas" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                                >
                                    <Icon size={16} className="text-orange-500" />
                                    {item.text}
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Link para segurança */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <Link href="/seguranca-lgpd" className="text-orange-600 font-medium hover:text-orange-700 hover:underline">
                            Saiba mais sobre nossa segurança e conformidade LGPD →
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Recursos Extras */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Recursos para você começar
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Materiais gratuitos para facilitar sua preparação
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: FileCheck,
                                title: "Checklist de preparação",
                                description: "Lista completa do que você precisa ter em mãos antes da implantação.",
                                type: "PDF",
                                download: "/demo?recurso=checklist",
                                color: "blue",
                            },
                            {
                                icon: FileSpreadsheet,
                                title: "Template de dados",
                                description: "Planilha Excel pronta para preencher com colaboradores, endereços e turnos.",
                                type: "Excel",
                                download: "/demo?recurso=template-dados",
                                color: "green",
                            },
                            {
                                icon: BookOpen,
                                title: "Guia de boas práticas",
                                description: "Manual completo com dicas e melhores práticas para gestão de fretamento.",
                                type: "PDF",
                                download: "/demo?recurso=guia-boas-praticas",
                                color: "orange",
                            },
                            {
                                icon: Video,
                                title: "Webinar gravado",
                                description: "Demonstração completa da plataforma com casos de uso reais.",
                                type: "Vídeo",
                                download: "/demo?recurso=webinar",
                                color: "teal",
                            },
                        ].map((resource, index) => {
                            const Icon = resource.icon;
                            const colorClasses = {
                                blue: {
                                    bg: "bg-blue-50",
                                    icon: "text-blue-600",
                                    border: "border-blue-200",
                                },
                                green: {
                                    bg: "bg-green-50",
                                    icon: "text-green-600",
                                    border: "border-green-200",
                                },
                                orange: {
                                    bg: "bg-orange-50",
                                    icon: "text-orange-600",
                                    border: "border-orange-200",
                                },
                                teal: {
                                    bg: "bg-teal-50",
                                    icon: "text-teal-600",
                                    border: "border-teal-200",
                                },
                            };
                            const colors = colorClasses[resource.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "p-6 rounded-2xl border-2 bg-white hover:shadow-lg transition-all cursor-pointer group",
                                        colors.border
                                    )}
                                >
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colors.bg)}>
                                        <Icon size={24} className={colors.icon} />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                            {resource.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                                    <Link
                                        href={resource.download}
                                        onClick={() => trackEvent({
                                            event: 'resource_view',
                                            properties: {
                                                resource_type: resource.type,
                                                resource_title: resource.title,
                                            },
                                            location: 'section'
                                        })}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all"
                                    >
                                        Solicitar acesso
                                        <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Link para página de recursos */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-600 mt-8"
                    >
                        Quer conhecer todos os recursos?{" "}
                        <Link href="/recursos" className="text-orange-600 font-medium hover:text-orange-700">
                            Ver catálogo completo
                        </Link>
                    </motion.p>
                </div>
            </section>

            {/* Seção de Comparação Competitiva */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Por que a GOLF FOX?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Compare com outras formas de gestão de fretamento
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Planilhas Excel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
                        >
                            <h3 className="font-bold text-gray-900 mb-4 text-lg">Planilhas Excel</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    15-20h/semana de trabalho manual
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Sem visibilidade em tempo real
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Erros humanos frequentes
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Sem auditoria digital
                                </li>
                            </ul>
                        </motion.div>

                        {/* Rastreador GPS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
                        >
                            <h3 className="font-bold text-gray-900 mb-4 text-lg">Rastreador GPS Simples</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Apenas rastreamento de veículos
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Sem gestão de passageiros
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Sem otimização de rotas
                                </li>
                                <li className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    Sem integração com RH
                                </li>
                            </ul>
                        </motion.div>

                        {/* GOLF FOX */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl border-2 border-orange-500 bg-orange-50 relative"
                        >
                            <span className="absolute -top-3 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                RECOMENDADO
                            </span>
                            <h3 className="font-bold text-orange-900 mb-4 text-lg">GOLF FOX</h3>
                            <ul className="space-y-3 text-sm text-orange-800">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    Automação completa
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    Check-in digital auditável
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    Otimização de rotas com IA
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    Governança e compliance total
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA com badge de urgência e formulário */}
            <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge de urgência - dinâmico */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                                Vagas limitadas para implantação em {getNextMonth()}
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Formulário usando FinalCTA */}
                <FinalCTA
                    title="Pronto para transformar seu fretamento?"
                    subtitle="Preencha o formulário e receba uma proposta personalizada em até 24 horas. Demonstração gratuita, sem compromisso."
                    showForm={true}
                    variant="gradient"
                    className="py-0! bg-transparent!"
                />

                {/* Mini proof points */}
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6 text-white/70 text-sm"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-400" />
                            Demonstração gratuita
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-400" />
                            Sem compromisso
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-400" />
                            Proposta em 24h
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Contador de empresas atendidas */}
            <section className="py-8 bg-gray-100 border-t border-gray-200 mb-16 md:mb-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-gray-600">
                            <span className="font-bold text-orange-600">+50 empresas</span> já otimizaram seu fretamento com a GOLF FOX
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sticky CTA Mobile */}
            {showStickyCTA && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
                >
                    <Link
                        href="/demo"
                        onClick={() => trackDemoClick('section')}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
                    >
                        Agendar demonstração
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            )}
        </>
    );
}
