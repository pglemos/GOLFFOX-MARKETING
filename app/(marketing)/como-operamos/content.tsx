"use client";

import { useEffect } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { Radio, AlertTriangle, FileText, Shield, Eye, Building2, Truck, CheckCircle, Activity, Clock, Server, Zap, Database, Globe, Headphones, CheckCircle2, AlertCircle, ShieldCheck, Lock, FileCheck, Award, FileText as FileTextIcon, Download, BookOpen, FileSpreadsheet, ArrowRight } from "lucide-react";

import { HeroSection, FinalCTA, TestimonialsSection, FAQSection, ScreenshotSection, MonitoringFlowDiagram, SLAInfographic } from "@/components/marketing";
import { comoOperamos } from "@/content/marketing";

export function ComoOperamosContent() {
    // Adicionar schema FAQPage
    useEffect(() => {
        const faqs = [
            {
                question: "Qual é o SLA de disponibilidade?",
                answer: "Garantimos 99.9% de uptime mensal, o que significa menos de 43 minutos de downtime por mês. Nossa infraestrutura é redundante com múltiplos data centers, garantindo alta disponibilidade mesmo em caso de falhas pontuais. Monitoramos continuamente e temos alertas automáticos para qualquer interrupção.",
            },
            {
                question: "O que acontece se o sistema ficar offline?",
                answer: "Em caso de interrupção, temos procedimentos automáticos de failover para servidores redundantes. O tempo médio de recuperação é de menos de 5 minutos. Além disso, os apps móveis funcionam parcialmente offline, permitindo check-ins mesmo sem conexão, que são sincronizados automaticamente quando a conexão é restabelecida. Notificamos imediatamente todos os clientes afetados e mantemos transparência total sobre o incidente.",
            },
            {
                question: "Como vocês garantem a segurança dos dados?",
                answer: "Implementamos múltiplas camadas de segurança: criptografia em trânsito (TLS 1.3) e em repouso (AES-256), autenticação de dois fatores, controle de acesso baseado em roles (RBAC), auditoria completa de todas as ações, backups criptografados diários, e conformidade com LGPD. Realizamos auditorias de segurança regulares e mantemos certificações de compliance. Todos os dados são armazenados em servidores localizados no Brasil.",
            },
            {
                question: "Qual é o tempo de resposta para suporte?",
                answer: "Nosso SLA de suporte garante resposta em até 4 horas úteis para questões não críticas. Para incidentes críticos que afetam a operação, respondemos em até 1 hora. Oferecemos suporte via WhatsApp, email e portal de ajuda. Durante os primeiros 90 dias após implementação, oferecemos suporte prioritário e dedicado com resposta ainda mais rápida.",
            },
            {
                question: "Como funciona o backup e recuperação?",
                answer: "Realizamos backups automáticos incrementais diários de todos os dados, com retenção de 30 dias. Backups completos são feitos semanalmente e mantidos por 2 anos. Todos os backups são criptografados e armazenados em locais geograficamente distribuídos. Em caso de necessidade, podemos restaurar dados para qualquer ponto no tempo dentro do período de retenção. Testamos regularmente os procedimentos de recuperação para garantir que funcionem corretamente.",
            },
            {
                question: "Vocês têm certificações de segurança?",
                answer: "Estamos em conformidade com LGPD (Lei Geral de Proteção de Dados) e seguimos as melhores práticas de segurança da informação. Realizamos auditorias internas regulares e estamos em processo de obtenção de certificações ISO. Mantemos políticas de segurança documentadas, treinamento contínuo da equipe, e processos de gestão de incidentes. Todas as evidências de compliance estão disponíveis no Trust Center.",
            },
            {
                question: "Como é feita a auditoria de ações?",
                answer: "Cada ação no sistema é registrada automaticamente no audit log com timestamp preciso, identificação do usuário, IP de origem, tipo de ação, e dados alterados. Mantemos histórico completo de todas as alterações por 2 anos. O audit log é imutável e pode ser consultado via API ou exportado para análise externa. Isso garante total rastreabilidade para compliance, auditorias internas e investigações de incidentes.",
            },
            {
                question: "Quem tem acesso ao painel administrativo?",
                answer: "Apenas a equipe técnica interna da GOLF FOX tem acesso ao painel administrativo. Este painel não é vendido como produto - é nossa ferramenta interna para garantir governança, qualidade e suporte para todas as empresas e transportadoras conectadas. O acesso é restrito, monitorado, e todas as ações são auditadas. Clientes acessam apenas seus portais específicos (Empresa ou Transportadora), que têm permissões e visibilidade limitadas aos seus próprios dados.",
            },
            {
                question: "Como vocês monitoram a qualidade do serviço?",
                answer: "Monitoramos continuamente mais de 50 métricas de qualidade: tempo de resposta da API, disponibilidade de serviços, latência de banco de dados, uso de recursos, erros e exceções, performance de queries, e muito mais. Temos dashboards em tempo real, alertas automáticos para qualquer degradação, e relatórios diários de performance. Realizamos testes de carga regulares e otimizações contínuas para garantir que o sistema mantenha alta performance mesmo sob carga.",
            },
            {
                question: "O que acontece em caso de incidente crítico?",
                answer: "Em caso de incidente crítico, ativamos imediatamente nosso processo de gestão de incidentes: notificação automática para a equipe técnica, escalonamento para especialistas se necessário, comunicação transparente com clientes afetados, resolução priorizada, e pós-mortem detalhado. Nosso objetivo é resolver incidentes críticos em menos de 4 horas. Após a resolução, publicamos um relatório detalhado explicando o que aconteceu, o que foi feito, e medidas preventivas implementadas.",
            },
        ];

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
        script.id = "faq-schema-operamos";

        // Remove schema anterior se existir
        const existing = document.getElementById("faq-schema-operamos");
        if (existing) existing.remove();

        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById("faq-schema-operamos");
            if (scriptToRemove) scriptToRemove.remove();
        };
    }, []);

    // Métricas de SLA
    const slaMetrics = [
        {
            value: "99.9%",
            label: "Uptime garantido",
            description: "Disponibilidade mensal",
            icon: Activity,
            color: "cyan",
        },
        {
            value: "< 2s",
            label: "Tempo de resposta",
            description: "Média de resposta da API",
            icon: Zap,
            color: "blue",
        },
        {
            value: "24/7/365",
            label: "Disponibilidade",
            description: "Monitoramento contínuo",
            icon: Globe,
            color: "orange",
        },
        {
            value: "< 4h",
            label: "Resolução de incidentes",
            description: "Tempo médio de resolução",
            icon: Clock,
            color: "teal",
        },
        {
            value: "4h",
            label: "SLA de suporte",
            description: "Resposta em horas úteis",
            icon: Headphones,
            color: "indigo",
        },
        {
            value: "Diário",
            label: "Backup automático",
            description: "Backup incremental diário",
            icon: Database,
            color: "emerald",
        },
        {
            value: "Múltiplos",
            label: "Data centers",
            description: "Redundância e alta disponibilidade",
            icon: Server,
            color: "red",
        },
    ];

    const sections = [
        {
            icon: Radio,
            title: "Monitoramento Ativo 24/7",
            description: "Nossa torre acompanha cada quilômetro rodado. Detectamos atrasos antes mesmo do colaborador notar.",
            items: [
                "Visibilidade total da frota",
                "Status de viagem em tempo real",
                "Confirmação de embarque auditável",
                "Suporte direto ao motorista"
            ],
            metrics: [
                "Disponibilidade 99.9%",
                "Detecção de desvios em < 1 min",
                "Atendimento imediato"
            ],
            examples: [
                "Previsibilidade total no portal da empresa",
                "Aviso automático ao passageiro se houver fila na via",
                "Controle de lotação por veículo"
            ],
            frequency: "Tempo real (24/7)",
            tools: [
                "Inteligência Geográfica",
                "Cloud Infrastructure",
                "Real-time Data Sync"
            ],
            screenshot: {
                src: "/images/screenshots/monitoramento.png",
                alt: "Dashboard de monitoramento em tempo real",
                title: "Torre de Controle",
                description: "Gestão completa da operação",
                feature: "Operação",
            },
        },
        {
            icon: AlertTriangle,
            title: "Alertas e incidentes",
            description: "Quando algo sai do padrão, geramos alertas automáticos e registramos incidentes para tratamento.",
            items: [
                "Alertas automáticos de atraso",
                "Registro de ocorrências",
                "Escalonamento para responsáveis",
                "Histórico de resoluções",
            ],
            metrics: [
                "Média de 2-3 alertas por dia em operação típica",
                "Tempo médio de detecção: < 1 minuto",
                "Taxa de falsos positivos: < 5%",
            ],
            examples: [
                "Alerta automático quando veículo atrasa mais de 5 minutos",
                "Notificação imediata para gestores em caso de incidente crítico",
                "Histórico completo de todos os alertas e suas resoluções",
            ],
            frequency: "Contínuo (event-driven)",
            tools: [
                "Sistema de regras configuráveis",
                "Notificações push (Expo)",
                "E-mail e SMS para alertas críticos",
                "Dashboard de incidentes em tempo real",
            ],
            screenshot: {
                src: "/images/screenshots/alertas.png",
                alt: "Sistema de alertas e gestão de incidentes",
                title: "Alertas e Incidentes",
                description: "Gestão automática de alertas e escalonamento",
                feature: "Alertas",
            },
        },
        {
            icon: Shield,
            title: "Auditoria e rastreabilidade",
            description: "Cada ação no sistema é registrada com timestamp, usuário e IP. Nada se perde.",
            items: [
                "Audit log de todas as ações",
                "Histórico de alterações",
                "Logs de acesso",
                "Rastreabilidade de dados",
            ],
            metrics: [
                "Mais de 1 milhão de eventos auditados/mês",
                "Retenção de logs: 2 anos",
                "100% das ações críticas rastreadas",
            ],
            examples: [
                "Registro completo de todas as alterações em rotas e colaboradores",
                "Histórico de acessos com IP, timestamp e dispositivo",
                "Rastreabilidade completa de dados para compliance LGPD",
            ],
            frequency: "Contínuo (todas as ações)",
            tools: [
                "PostgreSQL para armazenamento de logs",
                "Sistema de versionamento de dados",
                "APIs de auditoria para consulta",
                "Exportação de logs para análise externa",
            ],
            screenshot: {
                src: "/images/screenshots/auditoria.png",
                alt: "Sistema de auditoria e rastreabilidade",
                title: "Auditoria Completa",
                description: "Rastreabilidade total de todas as ações",
                feature: "Auditoria",
            },
        },
        {
            icon: FileText,
            title: "Relatórios e governança",
            description: "Relatórios automáticos enviados por e-mail e dashboards para visão consolidada.",
            items: [
                "Relatórios agendados (PDF/Excel)",
                "Dashboards operacionais",
                "Métricas de SLA",
                "Indicadores de qualidade",
            ],
            metrics: [
                "Envio automático diário/semanal/mensal",
                "Mais de 50 tipos de relatórios disponíveis",
                "Geração de relatórios em < 30 segundos",
            ],
            examples: [
                "Relatório diário de operação enviado às 8h",
                "Dashboard executivo com KPIs atualizados em tempo real",
                "Relatórios personalizados por centro de custo ou rota",
            ],
            frequency: "Agendado (diário/semanal/mensal) + tempo real",
            tools: [
                "Cron jobs para agendamento",
                "Geração de PDF com Puppeteer",
                "Exportação Excel com bibliotecas especializadas",
                "Dashboards interativos com gráficos",
            ],
            screenshot: {
                src: "/images/screenshots/relatorios.png",
                alt: "Sistema de relatórios e governança",
                title: "Relatórios e Governança",
                description: "Relatórios automáticos e dashboards operacionais",
                feature: "Relatórios",
            },
        },
    ];

    // Screenshots para seção dedicada
    const screenshots = sections
        .filter((section) => section.screenshot)
        .map((section) => section.screenshot!);

    const visibility = [
        {
            profile: "Empresa",
            icon: Building2,
            sees: [
                "Seus colaboradores e rotas",
                "Custos por centro de custo",
                "Presença e histórico",
                "Relatórios financeiros",
            ],
            doesntSee: [
                "Dados de outras empresas",
                "Custos internos da transportadora",
                "Painel administrativo GOLF FOX",
            ],
        },
        {
            profile: "Transportadora",
            icon: Truck,
            sees: [
                "Seus veículos e motoristas",
                "Rotas que opera",
                "Custos operacionais",
                "DRE por contrato",
            ],
            doesntSee: [
                "Dados de outras transportadoras",
                "Centro de custo das empresas",
                "Painel administrativo GOLF FOX",
            ],
        },
    ];

    return (
        <>
            <HeroSection
                badge="Torre de Controle Inclusa"
                title="Sua operação sob os olhos de quem entende de transporte"
                subtitle="Diferente de softwares simples, a GOLF FOX opera uma torre de controle 24/7 que monitora sua frota por você. Inteligência, governança e SLA real."
                variant="centered"
            />

            {/* Aviso de Infraestrutura Inclusa */}
            <section className="py-12 bg-orange-50 border-y border-orange-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-orange-950">A Torre de Controle é nossa, a tranquilidade é sua</h3>
                            <p className="text-orange-900/80 leading-relaxed">
                                Você não precisa contratar operadores ou gerenciar hardware. Nossa infraestrutura de monitoramento está inclusa em todos os planos, garantindo que nenhum atraso ou desvio passe despercebido.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/demo" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors">
                                Ver como operamos
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Métricas de SLA */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Nossos compromissos de SLA
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Métricas concretas que garantem confiabilidade e disponibilidade para sua operação
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
                        {slaMetrics.map((metric, index) => {
                            const Icon = metric.icon;
                            const colorClasses = {
                                cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", border: "border-cyan-200" },
                                blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
                                orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
                                teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200" },
                                indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200" },
                                emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200" },
                                red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200" },
                            };
                            const colors = colorClasses[metric.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} text-center`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-3`}>
                                        <Icon size={24} className={colors.icon} />
                                    </div>
                                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">
                                        {metric.label}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {metric.description}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection
                testimonials={comoOperamos.testimonials}
                title="Confiança comprovada"
                subtitle="Veja o que nossos clientes dizem sobre nossa operação e confiabilidade"
                variant="default"
            />

            {/* SLA Infographic */}
            <SLAInfographic
                title="Nossos números de disponibilidade"
                subtitle="Métricas reais de SLA e performance"
                dark={false}
                uptime={99.9}
                availabilityDays={30}
            />



            {/* Seções de operação */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                                        </div>
                                        <p className="text-lg text-gray-600">{section.description}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="space-y-3">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-gray-700">
                                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Métricas */}
                                        {section.metrics && section.metrics.length > 0 && (
                                            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                                <h4 className="text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                                    Métricas
                                                </h4>
                                                <ul className="space-y-1">
                                                    {section.metrics.map((metric, i) => (
                                                        <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                                                            <span className="text-blue-600 mt-0.5">•</span>
                                                            {metric}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Frequência e Ferramentas */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {section.frequency && (
                                                <div className="p-3 rounded-lg bg-orange-50 border border-orange-100">
                                                    <div className="text-xs font-semibold text-orange-900 mb-1">Frequência</div>
                                                    <div className="text-sm text-orange-800">{section.frequency}</div>
                                                </div>
                                            )}
                                            {section.tools && section.tools.length > 0 && (
                                                <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                                                    <div className="text-xs font-semibold text-teal-900 mb-1">Tecnologias</div>
                                                    <div className="text-xs text-teal-800">{section.tools.length} ferramentas</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            {screenshots.length > 0 && (
                <ScreenshotSection
                    screenshots={screenshots}
                    title="Veja nosso painel administrativo em ação"
                    subtitle="Capturas de tela reais dos sistemas de monitoramento, alertas, auditoria e relatórios"
                    columns={2}
                    dark={false}
                />
            )}

            {/* Monitoring Flow Diagram */}
            <MonitoringFlowDiagram
                title="Fluxo de monitoramento contínuo"
                subtitle="Como garantimos visibilidade e controle em tempo real"
                dark={false}
            />

            {/* O que cada perfil vê */}
            <section className="py-16 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-4"
                        >
                            O que cada perfil enxerga
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400"
                        >
                            Segregação de dados e permissões por perfil
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {visibility.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="p-8 rounded-2xl bg-gray-900 border border-gray-800"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon className="w-8 h-8 text-orange-500" />
                                        <h3 className="text-xl font-bold text-white">{item.profile}</h3>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-green-400 uppercase mb-3">Enxerga</h4>
                                        <div className="space-y-2">
                                            {item.sees.map((see, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                    {see}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-red-400 uppercase mb-3">Não enxerga</h4>
                                        <div className="space-y-2">
                                            {item.doesntSee.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <div className="w-4 h-4 rounded-full border border-gray-600 shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Transparência */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 mb-6"
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            Transparência
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                        >
                            Status e Trust Center
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-8"
                        >
                            Disponibilizamos página de status do sistema, Trust Center com informações de segurança
                            e evidências de compliance. Tudo acessível publicamente para transparência total.
                        </motion.p>
                    </div>

                    {/* Cards informativos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Status do Sistema",
                                value: "Operacional",
                                description: "Todos os serviços funcionando",
                                color: "green",
                                link: "/status",
                            },
                            {
                                icon: Clock,
                                title: "Última atualização",
                                value: "há 2 minutos",
                                description: "Monitoramento em tempo real",
                                color: "blue",
                            },
                            {
                                icon: Activity,
                                title: "Uptime últimos 30 dias",
                                value: "99.9%",
                                description: "Alta disponibilidade garantida",
                                color: "orange",
                            },
                            {
                                icon: AlertCircle,
                                title: "Incidentes resolvidos",
                                value: "3 no último mês",
                                description: "Todos resolvidos em < 4h",
                                color: "teal",
                            },
                        ].map((card, index) => {
                            const Icon = card.icon;
                            const colorClasses = {
                                green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", value: "text-green-700" },
                                blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", value: "text-blue-700" },
                                orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", value: "text-orange-700" },
                                teal: { bg: "bg-teal-50", border: "border-teal-200", icon: "text-teal-600", value: "text-teal-700" },
                            };
                            const colors = colorClasses[card.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {card.link ? (
                                        <Link
                                            href={card.link}
                                            className={`block p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} hover:shadow-lg transition-all`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-3`}>
                                                <Icon size={20} className={colors.icon} />
                                            </div>
                                            <div className={`text-2xl font-bold ${colors.value} mb-1`}>
                                                {card.value}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-900 mb-1">
                                                {card.title}
                                            </div>
                                            <div className="text-xs text-gray-600">
                                                {card.description}
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className={`p-6 rounded-2xl border-2 ${colors.bg} ${colors.border}`}>
                                            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-3`}>
                                                <Icon size={20} className={colors.icon} />
                                            </div>
                                            <div className={`text-2xl font-bold ${colors.value} mb-1`}>
                                                {card.value}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-900 mb-1">
                                                {card.title}
                                            </div>
                                            <div className="text-xs text-gray-600">
                                                {card.description}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Links para Status e Trust Center */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/status"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors font-medium"
                        >
                            Ver Status do Sistema
                        </Link>
                        <Link
                            href="/trust-center"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors font-medium"
                        >
                            Acessar Trust Center
                        </Link>
                    </div>
                </div>
            </section>


            {/* Comparação Antes/Depois */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Antes vs Depois
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Veja a transformação na governança e controle da sua operação
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Antes */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-red-50 border-2 border-red-200"
                        >
                            <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">❌</span> Sem GOLF FOX
                            </h4>
                            <ul className="space-y-2 text-sm text-red-800">
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem visibilidade em tempo real das rotas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem auditoria de ações e alterações</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Relatórios manuais e demorados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem monitoramento contínuo 24/7</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Risco de não conformidade e falta de rastreabilidade</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem alertas automáticos de problemas</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Depois */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-green-50 border-2 border-green-200"
                        >
                            <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">✅</span> Com GOLF FOX
                            </h4>
                            <ul className="space-y-2 text-sm text-green-800">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Visibilidade completa em tempo real 24/7</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Auditoria completa de todas as ações com timestamp e IP</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Relatórios automáticos agendados (PDF/Excel)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Monitoramento contínuo com 99.9% de disponibilidade</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Total conformidade e rastreabilidade para compliance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Alertas automáticos e gestão proativa de incidentes</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Resumo de benefícios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 max-w-3xl mx-auto"
                    >
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-orange-900 mb-4">Resultados</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">100%</div>
                                    <div className="text-sm text-orange-800">Rastreabilidade</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">99.9%</div>
                                    <div className="text-sm text-orange-800">Disponibilidade</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">24/7</div>
                                    <div className="text-sm text-orange-800">Monitoramento</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection
                faqs={[
                    {
                        question: "Qual é o SLA de disponibilidade?",
                        answer: "Garantimos 99.9% de uptime mensal, o que significa menos de 43 minutos de downtime por mês. Nossa infraestrutura é redundante com múltiplos data centers, garantindo alta disponibilidade mesmo em caso de falhas pontuais. Monitoramos continuamente e temos alertas automáticos para qualquer interrupção.",
                    },
                    {
                        question: "O que acontece se o sistema ficar offline?",
                        answer: "Em caso de interrupção, temos procedimentos automáticos de failover para servidores redundantes. O tempo médio de recuperação é de menos de 5 minutos. Além disso, os apps móveis funcionam parcialmente offline, permitindo check-ins mesmo sem conexão, que são sincronizados automaticamente quando a conexão é restabelecida. Notificamos imediatamente todos os clientes afetados e mantemos transparência total sobre o incidente.",
                    },
                    {
                        question: "Como vocês garantem a segurança dos dados?",
                        answer: "Implementamos múltiplas camadas de segurança: criptografia em trânsito (TLS 1.3) e em repouso (AES-256), autenticação de dois fatores, controle de acesso baseado em roles (RBAC), auditoria completa de todas as ações, backups criptografados diários, e conformidade com LGPD. Realizamos auditorias de segurança regulares e mantemos certificações de compliance. Todos os dados são armazenados em servidores localizados no Brasil.",
                    },
                    {
                        question: "Qual é o tempo de resposta para suporte?",
                        answer: "Nosso SLA de suporte garante resposta em até 4 horas úteis para questões não críticas. Para incidentes críticos que afetam a operação, respondemos em até 1 hora. Oferecemos suporte via WhatsApp, email e portal de ajuda. Durante os primeiros 90 dias após implementação, oferecemos suporte prioritário e dedicado com resposta ainda mais rápida.",
                    },
                    {
                        question: "Como funciona o backup e recuperação?",
                        answer: "Realizamos backups automáticos incrementais diários de todos os dados, com retenção de 30 dias. Backups completos são feitos semanalmente e mantidos por 2 anos. Todos os backups são criptografados e armazenados em locais geograficamente distribuídos. Em caso de necessidade, podemos restaurar dados para qualquer ponto no tempo dentro do período de retenção. Testamos regularmente os procedimentos de recuperação para garantir que funcionem corretamente.",
                    },
                    {
                        question: "Vocês têm certificações de segurança?",
                        answer: "Estamos em conformidade com LGPD (Lei Geral de Proteção de Dados) e seguimos as melhores práticas de segurança da informação. Realizamos auditorias internas regulares e estamos em processo de obtenção de certificações ISO. Mantemos políticas de segurança documentadas, treinamento contínuo da equipe, e processos de gestão de incidentes. Todas as evidências de compliance estão disponíveis no Trust Center.",
                    },
                    {
                        question: "Como é feita a auditoria de ações?",
                        answer: "Cada ação no sistema é registrada automaticamente no audit log com timestamp preciso, identificação do usuário, IP de origem, tipo de ação, e dados alterados. Mantemos histórico completo de todas as alterações por 2 anos. O audit log é imutável e pode ser consultado via API ou exportado para análise externa. Isso garante total rastreabilidade para compliance, auditorias internas e investigações de incidentes.",
                    },
                    {
                        question: "Quem tem acesso ao painel administrativo?",
                        answer: "Apenas a equipe técnica interna da GOLF FOX tem acesso ao painel administrativo. Este painel não é vendido como produto - é nossa ferramenta interna para garantir governança, qualidade e suporte para todas as empresas e transportadoras conectadas. O acesso é restrito, monitorado, e todas as ações são auditadas. Clientes acessam apenas seus portais específicos (Empresa ou Transportadora), que têm permissões e visibilidade limitadas aos seus próprios dados.",
                    },
                    {
                        question: "Como vocês monitoram a qualidade do serviço?",
                        answer: "Monitoramos continuamente mais de 50 métricas de qualidade: tempo de resposta da API, disponibilidade de serviços, latência de banco de dados, uso de recursos, erros e exceções, performance de queries, e muito mais. Temos dashboards em tempo real, alertas automáticos para qualquer degradação, e relatórios diários de performance. Realizamos testes de carga regulares e otimizações contínuas para garantir que o sistema mantenha alta performance mesmo sob carga.",
                    },
                    {
                        question: "O que acontece em caso de incidente crítico?",
                        answer: "Em caso de incidente crítico, ativamos imediatamente nosso processo de gestão de incidentes: notificação automática para a equipe técnica, escalonamento para especialistas se necessário, comunicação transparente com clientes afetados, resolução priorizada, e pós-mortem detalhado. Nosso objetivo é resolver incidentes críticos em menos de 4 horas. Após a resolução, publicamos um relatório detalhado explicando o que aconteceu, o que foi feito, e medidas preventivas implementadas.",
                    },
                ]}
                title="Perguntas frequentes sobre nossa operação"
            />

            {/* Garantias de SLA */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Nossas garantias de SLA
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Compromissos mensuráveis e verificáveis para sua operação
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Activity,
                                title: "99.9% de uptime garantido",
                                description: "Disponibilidade mensal garantida. Em caso de não cumprimento, oferecemos créditos de serviço.",
                                color: "green",
                            },
                            {
                                icon: Headphones,
                                title: "Suporte 24/7 com resposta em até 4 horas",
                                description: "Atendimento contínuo para questões não críticas. Incidentes críticos: resposta em até 1 hora.",
                                color: "blue",
                            },
                            {
                                icon: Database,
                                title: "Backup automático diário",
                                description: "Backups incrementais diários e completos semanais, com retenção de 2 anos. Testes regulares de recuperação.",
                                color: "orange",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Auditoria completa e transparente",
                                description: "100% das ações rastreadas com timestamp, usuário e IP. Histórico completo por 2 anos.",
                                color: "teal",
                            },
                        ].map((guarantee, index) => {
                            const Icon = guarantee.icon;
                            const colorClasses = {
                                green: {
                                    bg: "bg-green-50",
                                    border: "border-green-200",
                                    icon: "text-green-600",
                                },
                                blue: {
                                    bg: "bg-blue-50",
                                    border: "border-blue-200",
                                    icon: "text-blue-600",
                                },
                                orange: {
                                    bg: "bg-orange-50",
                                    border: "border-orange-200",
                                    icon: "text-orange-600",
                                },
                                teal: {
                                    bg: "bg-teal-50",
                                    border: "border-teal-200",
                                    icon: "text-teal-600",
                                },
                            };
                            const colors = colorClasses[guarantee.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 rounded-2xl border-2 ${colors.bg} ${colors.border}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                                        <Icon size={24} className={colors.icon} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{guarantee.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Compliance e Certificações */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Compliance e Certificações
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Conformidade com regulamentações e melhores práticas de segurança
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Shield,
                                title: "LGPD",
                                description: "Conformidade total com a Lei Geral de Proteção de Dados",
                                link: "/trust-center",
                                color: "blue",
                            },
                            {
                                icon: Award,
                                title: "ISO 27001",
                                description: "Em processo de certificação de segurança da informação",
                                link: "/trust-center",
                                color: "green",
                            },
                            {
                                icon: Lock,
                                title: "Criptografia",
                                description: "TLS 1.3 em trânsito e AES-256 em repouso",
                                link: "/trust-center",
                                color: "teal",
                            },
                            {
                                icon: FileCheck,
                                title: "Auditorias",
                                description: "Auditorias internas regulares e evidências documentadas",
                                link: "/trust-center",
                                color: "orange",
                            },
                        ].map((cert, index) => {
                            const Icon = cert.icon;
                            const colorClasses = {
                                blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600" },
                                green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600" },
                                teal: { bg: "bg-teal-50", border: "border-teal-200", icon: "text-teal-600" },
                                orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600" },
                            };
                            const colors = colorClasses[cert.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={cert.link}
                                        className={`block p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} hover:shadow-lg transition-all`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                                            <Icon size={24} className={colors.icon} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Links para políticas */}
                    <div className="mt-8 text-center">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/privacidade"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                            >
                                <FileTextIcon size={16} />
                                Política de Privacidade
                            </Link>
                            <Link
                                href="/termos"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                            >
                                <FileTextIcon size={16} />
                                Termos de Uso
                            </Link>
                            <Link
                                href="/trust-center"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                            >
                                <Shield size={16} />
                                Trust Center
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recursos Extras */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Recursos para você
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Materiais gratuitos sobre SLA, governança e compliance
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: BookOpen,
                                title: "Whitepaper: SLA e Governança",
                                description: "Guia completo sobre como garantir SLA e governança em fretamento corporativo.",
                                type: "PDF",
                                download: "#",
                                color: "blue",
                            },
                            {
                                icon: Shield,
                                title: "Guia de Compliance e Segurança",
                                description: "Manual com melhores práticas de segurança e conformidade LGPD.",
                                type: "PDF",
                                download: "#",
                                color: "green",
                            },
                            {
                                icon: FileSpreadsheet,
                                title: "Checklist de Auditoria",
                                description: "Planilha para verificar conformidade e rastreabilidade da operação.",
                                type: "Excel",
                                download: "#",
                                color: "orange",
                            },
                            {
                                icon: FileText,
                                title: "Política de Segurança",
                                description: "Documento completo com nossas políticas de segurança e privacidade.",
                                type: "PDF",
                                download: "#",
                                color: "teal",
                            },
                        ].map((resource, index) => {
                            const Icon = resource.icon;
                            const colorClasses = {
                                blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
                                green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" },
                                orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
                                teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200" },
                            };
                            const colors = colorClasses[resource.color as keyof typeof colorClasses];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 rounded-2xl border-2 bg-white hover:shadow-lg transition-all cursor-pointer group ${colors.border}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                                        <Icon size={24} className={colors.icon} />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                            {resource.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                                    <a
                                        href={resource.download}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all"
                                    >
                                        Baixar agora
                                        <Download size={16} />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA - apenas demo/contato, NÃO venda de módulo */}
            <FinalCTA
                title="Quer saber mais sobre nossa operação?"
                subtitle="Agende uma conversa com nosso time para entender como garantimos qualidade e SLA."
                variant="gradient"
            />
        </>
    );
}
