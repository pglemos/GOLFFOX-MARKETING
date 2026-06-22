"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Radio, AlertTriangle, FileText, Shield, Eye, Building2, Truck, CheckCircle, Activity, Clock, Server, Zap, Database, Globe, Headphones, CheckCircle2, AlertCircle, ShieldCheck, Lock, FileCheck, Award, FileText as FileTextIcon, Download, BookOpen, FileSpreadsheet, ArrowRight } from "lucide-react";

import { ScreenshotSection, MonitoringFlowDiagram, SLAInfographic } from "@/components/marketing";
import { AppWindowCard } from "@/components/marketing/app-window-card";
import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";

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
        },
        {
            value: "< 2s",
            label: "Tempo de resposta",
            description: "Média de resposta da API",
            icon: Zap,
        },
        {
            value: "24/7/365",
            label: "Disponibilidade",
            description: "Monitoramento contínuo",
            icon: Globe,
        },
        {
            value: "< 4h",
            label: "Resolução de incidentes",
            description: "Tempo médio de resolução",
            icon: Clock,
        },
        {
            value: "4h",
            label: "SLA de suporte",
            description: "Resposta em horas úteis",
            icon: Headphones,
        },
        {
            value: "Diário",
            label: "Backup automático",
            description: "Backup incremental diário",
            icon: Database,
        },
        {
            value: "Múltiplos",
            label: "Data centers",
            description: "Redundância e alta disponibilidade",
            icon: Server,
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

    return (
        <div className="font-archivo text-[#122334]">
            {/* ===================== HERO ===================== */}
            <section className="relative overflow-hidden bg-[#0B2440] text-white">
                <Image
                    src="/images/institucional/frota-estrada.jpg"
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-[0.16]"
                />
                <RouteBackdrop withGlow animated />
                <div className="relative mx-auto max-w-[860px] px-5 py-20 text-center sm:px-8 lg:py-28">
                    <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                        Torre de Controle Inclusa
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                    >
                        Sua operação sob os olhos de quem entende de transporte
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto mt-6 max-w-[640px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl"
                    >
                        Diferente de softwares simples, a GOLF FOX opera uma torre de controle 24/7 que
                        monitora sua frota por você. Inteligência, governança e SLA real.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-9 flex flex-wrap justify-center gap-3.5"
                    >
                        <Link
                            href="/demo"
                            className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Agendar demonstração
                            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/como-funciona"
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Ver como funciona
                        </Link>
                    </motion.div>
                </div>
                {/* curva de transição */}
                <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                    <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                </svg>
            </section>

            {/* Aviso de Infraestrutura Inclusa */}
            <section className="bg-[#F4F7FA] px-5 py-16 sm:px-8">
                <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-6 rounded-[20px] bg-white p-8 text-center shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] md:flex-row md:text-left">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FFF0E6]">
                        <ShieldCheck className="h-8 w-8 text-[#FA6007]" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">A Torre de Controle é nossa, a tranquilidade é sua</h3>
                        <p className="mt-2 leading-relaxed text-[#52647A]">
                            Você não precisa contratar operadores ou gerenciar hardware. Nossa infraestrutura de monitoramento está inclusa em todos os planos, garantindo que nenhum atraso ou desvio passe despercebido.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <Link href="/demo" className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#D14600] px-6 py-3 font-bold text-white transition-colors hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]">
                            Ver como operamos
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Métricas de SLA */}
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-14 max-w-[680px] text-center">
                        <Eyebrow>Compromissos de SLA</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Nossos compromissos de SLA
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Métricas concretas que garantem confiabilidade e disponibilidade para sua operação
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
                        {slaMetrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="rounded-2xl bg-white p-6 text-center shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3]"
                                >
                                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                        <Icon size={24} className="text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <div className="font-display text-2xl font-black tabular-nums text-[#FA6007] lg:text-3xl">
                                        {metric.value}
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-[#1F3147]">
                                        {metric.label}
                                    </div>
                                    <div className="mt-1 text-xs text-[#52647A]">
                                        {metric.description}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SLA Infographic */}
            <SLAInfographic
                title="Nossos números de disponibilidade"
                subtitle="Métricas reais de SLA e performance"
                dark={false}
                uptime={99.9}
                availabilityDays={30}
            />

            {/* Seções de operação */}
            <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-5xl space-y-16">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2"
                            >
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                            <Icon className="h-6 w-6 text-[#FA6007]" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-[#0B2440]">{section.title}</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed text-[#52647A]">{section.description}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3]">
                                        <div className="space-y-3">
                                            {section.items.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2.5 font-semibold text-[#1F3147]">
                                                    <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                                        <CheckCircle className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                                    </span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Métricas */}
                                    {section.metrics && section.metrics.length > 0 && (
                                        <div className="rounded-xl bg-[#0B2440] p-4 text-white">
                                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFB07A]">
                                                Métricas
                                            </h4>
                                            <ul className="space-y-1">
                                                {section.metrics.map((metric, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-[#BBCADB]">
                                                        <span className="mt-0.5 text-[#FA6007]">•</span>
                                                        {metric}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Frequência e Ferramentas */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {section.frequency && (
                                            <div className="rounded-lg bg-[#FFF0E6] p-3">
                                                <div className="mb-1 text-xs font-bold text-[#C2410C]">Frequência</div>
                                                <div className="text-sm text-[#52647A]">{section.frequency}</div>
                                            </div>
                                        )}
                                        {section.tools && section.tools.length > 0 && (
                                            <div className="rounded-lg bg-[#E6F7EE] p-3">
                                                <div className="mb-1 text-xs font-bold text-[#1A8F52]">Tecnologias</div>
                                                <div className="text-xs text-[#52647A]">{section.tools.length} ferramentas</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
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
            <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                <RouteBackdrop />
                <div className="relative mx-auto max-w-5xl">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <Eyebrow tone="orange">Permissões por perfil</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                            O que cada perfil enxerga
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#BBCADB]">
                            Segregação de dados e permissões por perfil
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                        {visibility.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="rounded-2xl border border-white/10 bg-[#0E2C4D] p-8"
                                >
                                    <div className="mb-6 flex items-center gap-3">
                                        <Icon className="h-8 w-8 text-[#FA6007]" aria-hidden="true" />
                                        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-white">{item.profile}</h3>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#5FD699]">Enxerga</h4>
                                        <div className="space-y-2">
                                            {item.sees.map((see, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-[#D5E0EC]">
                                                    <CheckCircle className="h-4 w-4 shrink-0 text-[#1A8F52]" aria-hidden="true" />
                                                    {see}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#FFB07A]">Não enxerga</h4>
                                        <div className="space-y-2">
                                            {item.doesntSee.map((dontSee, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-[#9FB1C5]">
                                                    <div className="h-4 w-4 shrink-0 rounded-full border border-white/30" />
                                                    {dontSee}
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
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-12 max-w-4xl text-center">
                        <Eyebrow>
                            <Eye className="h-4 w-4" aria-hidden="true" />
                            Transparência
                        </Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Status e Trust Center
                        </h2>
                        <p className="mx-auto mt-4 max-w-[680px] text-pretty text-lg leading-relaxed text-[#52647A]">
                            Disponibilizamos página de status do sistema, Trust Center com informações de segurança
                            e evidências de compliance. Tudo acessível publicamente para transparência total.
                        </p>
                    </div>

                    {/* Cards informativos */}
                    <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Status do Sistema",
                                value: "Operacional",
                                description: "Todos os serviços funcionando",
                                link: "/status",
                            },
                            {
                                icon: Clock,
                                title: "Última atualização",
                                value: "há 2 minutos",
                                description: "Monitoramento em tempo real",
                            },
                            {
                                icon: Activity,
                                title: "Uptime últimos 30 dias",
                                value: "99.9%",
                                description: "Alta disponibilidade garantida",
                            },
                            {
                                icon: AlertCircle,
                                title: "Incidentes resolvidos",
                                value: "3 no último mês",
                                description: "Todos resolvidos em < 4h",
                            },
                        ].map((card, index) => {
                            const Icon = card.icon;
                            const inner = (
                                <>
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                        <Icon size={20} className="text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <div className="font-display text-2xl font-black tabular-nums text-[#FA6007]">
                                        {card.value}
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-[#1F3147]">
                                        {card.title}
                                    </div>
                                    <div className="mt-1 text-xs text-[#52647A]">
                                        {card.description}
                                    </div>
                                </>
                            );

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
                                            className="block rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)]"
                                        >
                                            {inner}
                                        </Link>
                                    ) : (
                                        <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3]">
                                            {inner}
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
                            className="inline-flex items-center gap-2 rounded-xl border border-[#D8E0E8] bg-white px-6 py-3 font-bold text-[#0B2440] transition-colors hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                        >
                            Ver Status do Sistema
                        </Link>
                        <Link
                            href="/trust-center"
                            className="inline-flex items-center gap-2 rounded-xl border border-[#D8E0E8] bg-white px-6 py-3 font-bold text-[#0B2440] transition-colors hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                        >
                            Acessar Trust Center
                        </Link>
                    </div>
                </div>
            </section>

            {/* Comparação Antes/Depois */}
            <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <Eyebrow>Transformação</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Antes vs Depois
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Veja a transformação na governança e controle da sua operação
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Antes */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3]"
                        >
                            <h4 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-[#0B2440]">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBE3E3] text-base text-[#C2410C]" aria-hidden="true">✕</span> Sem GOLF FOX
                            </h4>
                            <ul className="space-y-2.5 text-sm text-[#52647A]">
                                {[
                                    "Sem visibilidade em tempo real das rotas",
                                    "Sem auditoria de ações e alterações",
                                    "Relatórios manuais e demorados",
                                    "Sem monitoramento contínuo 24/7",
                                    "Risco de não conformidade e falta de rastreabilidade",
                                    "Sem alertas automáticos de problemas",
                                ].map((row) => (
                                    <li key={row} className="flex items-start gap-2">
                                        <span className="mt-0.5 text-[#A6B2C0]">•</span>
                                        <span>{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Depois */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-[#0B2440] p-6 text-white shadow-[0_18px_50px_rgba(11,36,64,0.18)]"
                        >
                            <h4 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F7EE] text-base text-[#1A8F52]" aria-hidden="true">✓</span> Com GOLF FOX
                            </h4>
                            <ul className="space-y-2.5 text-sm text-[#BBCADB]">
                                {[
                                    "Visibilidade completa em tempo real 24/7",
                                    "Auditoria completa de todas as ações com timestamp e IP",
                                    "Relatórios automáticos agendados (PDF/Excel)",
                                    "Monitoramento contínuo com 99.9% de disponibilidade",
                                    "Total conformidade e rastreabilidade para compliance",
                                    "Alertas automáticos e gestão proativa de incidentes",
                                ].map((row) => (
                                    <li key={row} className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#5FD699]" aria-hidden="true" />
                                        <span>{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Resumo de benefícios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3]"
                    >
                        <div className="text-center">
                            <h4 className="mb-4 text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">Resultados</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <div className="font-display text-3xl font-black tabular-nums text-[#FA6007]">100%</div>
                                    <div className="text-sm text-[#52647A]">Rastreabilidade</div>
                                </div>
                                <div>
                                    <div className="font-display text-3xl font-black tabular-nums text-[#FA6007]">99.9%</div>
                                    <div className="text-sm text-[#52647A]">Disponibilidade</div>
                                </div>
                                <div>
                                    <div className="font-display text-3xl font-black tabular-nums text-[#FA6007]">24/7</div>
                                    <div className="text-sm text-[#52647A]">Monitoramento</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <FaqTwoColumn
                title="Perguntas frequentes sobre nossa operação"
                description="Tudo que você precisa saber sobre SLA, segurança e governança da nossa operação."
                items={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            />

            {/* Garantias de SLA */}
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <Eyebrow>Garantias</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Nossas garantias de SLA
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Compromissos mensuráveis e verificáveis para sua operação
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Activity,
                                title: "99.9% de uptime garantido",
                                description: "Disponibilidade mensal garantida. Em caso de não cumprimento, oferecemos créditos de serviço.",
                            },
                            {
                                icon: Headphones,
                                title: "Suporte 24/7 com resposta em até 4 horas",
                                description: "Atendimento contínuo para questões não críticas. Incidentes críticos: resposta em até 1 hora.",
                            },
                            {
                                icon: Database,
                                title: "Backup automático diário",
                                description: "Backups incrementais diários e completos semanais, com retenção de 2 anos. Testes regulares de recuperação.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Auditoria completa e transparente",
                                description: "100% das ações rastreadas com timestamp, usuário e IP. Histórico completo por 2 anos.",
                            },
                        ].map((guarantee, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <AppWindowCard
                                    icon={guarantee.icon}
                                    title={guarantee.title}
                                    description={guarantee.description}
                                    label={`${index + 1} · Golf Fox`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance e Certificações */}
            <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <Eyebrow>Compliance</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Compliance e Certificações
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Conformidade com regulamentações e melhores práticas de segurança
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Shield,
                                title: "LGPD",
                                description: "Conformidade total com a Lei Geral de Proteção de Dados",
                                link: "/trust-center",
                            },
                            {
                                icon: Award,
                                title: "ISO 27001",
                                description: "Em processo de certificação de segurança da informação",
                                link: "/trust-center",
                            },
                            {
                                icon: Lock,
                                title: "Criptografia",
                                description: "TLS 1.3 em trânsito e AES-256 em repouso",
                                link: "/trust-center",
                            },
                            {
                                icon: FileCheck,
                                title: "Auditorias",
                                description: "Auditorias internas regulares e evidências documentadas",
                                link: "/trust-center",
                            },
                        ].map((cert, index) => {
                            const Icon = cert.icon;
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
                                        className="group block h-full overflow-hidden rounded-[20px] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)] hover:ring-[#FFD9BF]"
                                    >
                                        <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">{`${index + 1} · Golf Fox`}</span>
                                        </div>
                                        <div className="p-7">
                                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007] transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="h-6 w-6" aria-hidden="true" />
                                            </span>
                                            <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">{cert.title}</h3>
                                            <p className="mt-3 leading-relaxed text-[#52647A]">{cert.description}</p>
                                        </div>
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
                                className="inline-flex items-center gap-2 rounded-lg border border-[#D8E0E8] bg-white px-4 py-2 text-sm font-semibold text-[#0B2440] transition-colors hover:bg-[#F4F7FA]"
                            >
                                <FileTextIcon size={16} aria-hidden="true" />
                                Política de Privacidade
                            </Link>
                            <Link
                                href="/termos"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#D8E0E8] bg-white px-4 py-2 text-sm font-semibold text-[#0B2440] transition-colors hover:bg-[#F4F7FA]"
                            >
                                <FileTextIcon size={16} aria-hidden="true" />
                                Termos de Uso
                            </Link>
                            <Link
                                href="/trust-center"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#D8E0E8] bg-white px-4 py-2 text-sm font-semibold text-[#0B2440] transition-colors hover:bg-[#F4F7FA]"
                            >
                                <Shield size={16} aria-hidden="true" />
                                Trust Center
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recursos Extras */}
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <Eyebrow>Materiais gratuitos</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Recursos para você
                        </h2>
                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Materiais gratuitos sobre SLA, governança e compliance
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: BookOpen,
                                title: "Whitepaper: SLA e Governança",
                                description: "Guia completo sobre como garantir SLA e governança em fretamento corporativo.",
                                type: "PDF",
                                download: "#",
                            },
                            {
                                icon: Shield,
                                title: "Guia de Compliance e Segurança",
                                description: "Manual com melhores práticas de segurança e conformidade LGPD.",
                                type: "PDF",
                                download: "#",
                            },
                            {
                                icon: FileSpreadsheet,
                                title: "Checklist de Auditoria",
                                description: "Planilha para verificar conformidade e rastreabilidade da operação.",
                                type: "Excel",
                                download: "#",
                            },
                            {
                                icon: FileText,
                                title: "Política de Segurança",
                                description: "Documento completo com nossas políticas de segurança e privacidade.",
                                type: "PDF",
                                download: "#",
                            },
                        ].map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group h-full overflow-hidden rounded-[20px] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)] hover:ring-[#FFD9BF]"
                                >
                                    <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">{resource.type}</span>
                                    </div>
                                    <div className="p-7">
                                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007] transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="h-6 w-6" aria-hidden="true" />
                                        </span>
                                        <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#0B2440]">{resource.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[#52647A]">{resource.description}</p>
                                        <a
                                            href={resource.download}
                                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D14600] transition-all hover:text-[#B03B00] group-hover:gap-3"
                                        >
                                            Baixar agora
                                            <Download size={16} aria-hidden="true" />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===================== CTA FINAL ===================== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                    <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                </svg>
                <div className="relative mx-auto max-w-[820px] text-center">
                    <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                        Quer saber mais sobre nossa operação?
                    </h2>
                    <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                        Agende uma conversa com nosso time para entender como garantimos qualidade e SLA.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/demo"
                            className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#0B2440] px-8 py-[18px] text-[17px] font-extrabold text-white shadow-[0_16px_40px_rgba(11,36,64,0.4)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Agendar demonstração
                            <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
