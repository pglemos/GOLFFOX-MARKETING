"use client";

import { useState, useMemo, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
    Search,
    MapPin,
    Radio,
    UserCheck,
    Truck,
    DollarSign,
    Shield,
    MessageCircle,
    BarChart3,
    CheckCircle,
    Check,
    X,
    TrendingUp,
    Clock,
    Zap,
    ArrowRight,
    Video,
    Play,
} from "lucide-react";


import { ResourceDetailModal, ScreenshotSection, ResourceROICalculator } from "@/components/marketing";
import { AppWindowCard } from "@/components/marketing/app-window-card";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";
import { BrandSelect } from "@/components/ui/brand-select";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { resources, resourceCategories, resourceProfiles } from "@/content/marketing";
import { trackFeatureFilter, trackEvent } from "@/lib/analytics/track-events";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    planejamento: MapPin,
    operacao: Radio,
    embarque: UserCheck,
    ativos: Truck,
    financeiro: DollarSign,
    governanca: Shield,
    comunicacao: MessageCircle,
    relatorios: BarChart3,
};

export function RecursosContent() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProfile, setSelectedProfile] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedResource, setSelectedResource] = useState<string | null>(null);

    // Métricas agregadas por categoria
    const categoryMetrics: Record<string, Array<{ icon: LucideIcon; value: string; label: string; description: string }>> = {
        planejamento: [
            { icon: TrendingUp, value: "25%", label: "Economia média", description: "Em custos de rotas" },
            { icon: Clock, value: "40%", label: "Redução de tempo", description: "No planejamento" },
            { icon: Zap, value: "30%", label: "Aumento de ocupação", description: "Média dos veículos" },
        ],
        operacao: [
            { icon: Radio, value: "99.9%", label: "Precisão", description: "Em rastreamento" },
            { icon: Clock, value: "< 30s", label: "Tempo de alerta", description: "Após detecção" },
            { icon: Zap, value: "60%", label: "Redução em resposta", description: "A incidentes" },
        ],
        embarque: [
            { icon: CheckCircle, value: "100%", label: "Rastreabilidade", description: "De presenças" },
            { icon: Clock, value: "< 3s", label: "Tempo de check-in", description: "Com QR Code" },
            { icon: Zap, value: "50%", label: "Redução no tempo", description: "De embarque" },
        ],
        ativos: [
            { icon: CheckCircle, value: "100%", label: "Conformidade", description: "Documental" },
            { icon: Clock, value: "50%", label: "Redução de tempo", description: "Em gestão" },
            { icon: TrendingUp, value: "20%", label: "Economia", description: "Em manutenção" },
        ],
        financeiro: [
            { icon: Clock, value: "15h", label: "Economia/mês", description: "Em rateio manual" },
            { icon: CheckCircle, value: "100%", label: "Precisão", description: "Nos cálculos" },
            { icon: TrendingUp, value: "20%", label: "Identificação", description: "De rotas não rentáveis" },
        ],
        governanca: [
            { icon: CheckCircle, value: "100%", label: "Rastreabilidade", description: "De ações" },
            { icon: Clock, value: "2 anos", label: "Retenção", description: "De logs" },
            { icon: Zap, value: "1M+", label: "Eventos/mês", description: "Auditados" },
        ],
        comunicacao: [
            { icon: Clock, value: "< 2s", label: "Entrega", description: "De notificações" },
            { icon: CheckCircle, value: "99.9%", label: "Taxa de entrega", description: "De notificações" },
            { icon: TrendingUp, value: "50%", label: "Redução", description: "No tempo de resposta" },
        ],
        relatorios: [
            { icon: Clock, value: "10h", label: "Economia/semana", description: "Em geração manual" },
            { icon: CheckCircle, value: "100%", label: "Precisão", description: "Nos dados" },
            { icon: TrendingUp, value: "70%", label: "Redução", description: "No tempo de análise" },
        ],
    };

    const filteredResources = useMemo(() => {
        return resources.filter((resource) => {
            const matchesCategory =
                selectedCategory === "all" || resource.category === selectedCategory;
            const matchesProfile =
                selectedProfile === "all" || resource.profiles.includes(selectedProfile);
            const matchesSearch =
                searchQuery === "" ||
                resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (resource.benefits && resource.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())));

            return matchesCategory && matchesProfile && matchesSearch;
        });
    }, [selectedCategory, selectedProfile, searchQuery]);

    const selectedResourceData = useMemo(() => {
        if (!selectedResource) return null;
        const resource = resources.find(r => r.id === selectedResource);
        if (!resource) return null;

        const related = resource.relatedResources
            ? resources.filter(r => resource.relatedResources!.includes(r.id))
            : [];

        return { resource, related };
    }, [selectedResource]);

    const selectedCategoryPreview = useMemo(() => {
        if (selectedCategory === "all") return null;
        const resource = resources.find(r => r.category === selectedCategory && r.screenshot?.src);
        const categoryName = resourceCategories.find(c => c.id === selectedCategory)?.name || "recurso";

        return {
            src: resource?.screenshot?.src || "/images/dashboard-preview.png",
            alt: resource?.screenshot?.alt || `Visual de ${categoryName}`,
        };
    }, [selectedCategory]);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        if (categoryId !== "all") {
            trackFeatureFilter(categoryId, [selectedProfile]);
            trackEvent({
                event: 'resource_category_filter',
                properties: {
                    category: categoryId,
                    profile: selectedProfile,
                },
            });
        }
    };

    const handleProfileChange = (profileId: string) => {
        setSelectedProfile(profileId);
        if (profileId !== "all") {
            trackFeatureFilter(selectedCategory, [profileId]);
            trackEvent({
                event: 'resource_profile_filter',
                properties: {
                    category: selectedCategory,
                    profile: profileId,
                },
            });
        }
    };

    const handleResourceClick = (resourceId: string) => {
        setSelectedResource(resourceId);
        const resource = resources.find(r => r.id === resourceId);
        trackEvent({
            event: 'resource_view',
            properties: {
                resource_id: resourceId,
                category: resource?.category || '',
            },
        });
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Tracking será feito no useMemo quando filteredResources mudar
    };

    // Track search quando resultados mudam
    useEffect(() => {
        if (searchQuery.length > 0) {
            trackEvent({
                event: 'resource_search',
                properties: {
                    query: searchQuery,
                    results_count: filteredResources.length,
                },
            });
        }
    }, [searchQuery, filteredResources.length]);

    // FAQ Schema Injection
    useEffect(() => {
        const faqs = [
            {
                question: "Quais recursos são mais usados pelos clientes?",
                answer: "Os recursos mais utilizados são: Roteirização (95% dos clientes), Mapa em Tempo Real (98%), Status da Viagem (100%), Presença Auditável (100%), Audit Log (100%), Notificações Push (100%) e Dashboards (95%). Esses recursos formam o core da plataforma e são essenciais para operação eficiente.",
            },
            {
                question: "Posso usar apenas alguns recursos ou preciso de todos?",
                answer: "Você pode usar apenas os recursos que fazem sentido para sua operação. A plataforma é modular e flexível. Por exemplo, uma empresa pode usar apenas Planejamento e Operação, enquanto uma transportadora pode focar em Ativos e Financeiro. Nossa equipe ajuda a identificar quais recursos são mais relevantes para seu caso.",
            },
            {
                question: "Como funciona a integração entre recursos?",
                answer: "Todos os recursos são integrados nativamente na plataforma. Por exemplo, a Roteirização se conecta automaticamente com o Mapa em Tempo Real, que alimenta os Alertas de Atraso, que geram Notificações Push. Os dados fluem automaticamente entre recursos, garantindo consistência e eficiência.",
            },
            {
                question: "Há recursos premium ou todos estão incluídos?",
                answer: "A maioria dos recursos está incluída no plano base. Alguns recursos avançados como Roteirização Inteligente, Check-in NFC e DRE Operacional são considerados premium e podem ter custo adicional. Entre em contato para entender qual plano atende melhor suas necessidades.",
            },
            {
                question: "Os recursos funcionam offline?",
                answer: "Alguns recursos funcionam parcialmente offline, especialmente os apps móveis. O Check-in QR Code e Check-in NFC funcionam 100% offline e sincronizam automaticamente quando a conexão é restabelecida. Recursos web como Dashboards e Relatórios requerem conexão, mas os dados são atualizados em tempo real quando online.",
            },
            {
                question: "Como posso aprender a usar cada recurso?",
                answer: "Oferecemos documentação completa para cada recurso, vídeos tutoriais, treinamento personalizado durante a implantação e suporte contínuo. Além disso, temos uma central de ajuda com FAQs e guias passo a passo. Durante os primeiros 90 dias, oferecemos suporte prioritário para garantir que sua equipe domine todos os recursos.",
            },
            {
                question: "Posso personalizar recursos para minha necessidade específica?",
                answer: "Muitos recursos têm opções de configuração e personalização. Por exemplo, você pode configurar regras de alerta personalizadas, criar relatórios customizados, definir permissões específicas por perfil e muito mais. Para necessidades muito específicas, podemos discutir customizações adicionais.",
            },
            {
                question: "Os recursos são atualizados regularmente?",
                answer: "Sim, lançamos melhorias e novos recursos regularmente. Todas as atualizações são automáticas e não requerem ação do cliente. Mantemos um changelog público e notificamos sobre mudanças significativas. Nossa equipe está sempre trabalhando em melhorias baseadas no feedback dos clientes.",
            },
            {
                question: "Há limite de uso para os recursos?",
                answer: "A maioria dos recursos não tem limite de uso. Você pode criar quantas rotas precisar, monitorar quantos veículos tiver, gerar quantos relatórios quiser. Alguns recursos podem ter limites baseados no seu plano (ex: número de usuários simultâneos), mas esses limites são generosos e podem ser ajustados conforme necessário.",
            },
            {
                question: "Como os recursos ajudam com compliance e auditoria?",
                answer: "Vários recursos são focados em compliance: Audit Log rastreia 100% das ações, Presença Auditável registra check-ins com GPS e timestamp, Conformidade LGPD gerencia direitos do titular, e Permissões garantem segregação de dados. Todos os recursos geram evidências auditáveis que podem ser exportadas para auditorias externas.",
            },
            {
                question: "Posso integrar recursos com sistemas que já uso?",
                answer: "Sim, oferecemos APIs e integrações para sistemas comuns como ERPs, sistemas de RH, ferramentas de BI e muito mais. A maioria das integrações pode ser configurada pela nossa equipe durante a implantação. Recursos como Exportação de Dados facilitam a integração com ferramentas externas.",
            },
            {
                question: "Quanto tempo leva para implementar todos os recursos?",
                answer: "A implementação completa leva em média 2-4 semanas, dependendo da complexidade da sua operação. Recursos básicos como Roteirização e Mapa em Tempo Real podem estar funcionando na primeira semana. Recursos mais complexos como integrações e customizações podem levar mais tempo. Nossa equipe trabalha em paralelo para acelerar o processo.",
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
        script.id = "faq-schema-recursos";

        const existing = document.getElementById("faq-schema-recursos");
        if (existing) existing.remove();

        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById("faq-schema-recursos");
            if (scriptToRemove) scriptToRemove.remove();
        };
    }, []);

    return (
        <div className="font-archivo text-[#122334]">
            {/* Hero (design Golf Fox) */}
            <section className="font-archivo relative overflow-hidden bg-[#0B2440] text-white">
                <RouteBackdrop withGlow animated />
                <div className="relative mx-auto max-w-[900px] px-5 pt-20 text-center sm:px-8 lg:pt-28">
                    <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                        Recursos
                    </span>
                    <h1 className="text-balance text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                        Tudo que sua operação precisa, <span className="text-[#FA6007]">num lugar só</span>.
                    </h1>
                    <p className="mx-auto mt-5 max-w-[620px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                        Inteligência para planejar, precisão para executar e governança para escalar — a
                        biblioteca completa de ferramentas da Golf Fox.
                    </p>
                    <div className="mt-9 flex justify-center">
                        <Link
                            href="/demo"
                            className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Agendar demonstração
                            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
                {/* Screenshot inclinado em 3D */}
                <div className="relative mx-auto mt-14 max-w-7xl px-6 [mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]">
                    <div className="[perspective:1200px]">
                        <div className="mx-auto max-w-5xl [transform:rotateX(22deg)]">
                            <div className="overflow-hidden rounded-t-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/screenshots/monitoramento.png"
                                    alt="Painel de recursos da Golf Fox em operação"
                                    width={1600}
                                    height={1040}
                                    className="h-auto w-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navegue por Impacto - Nova Seção de Hierarquia */}
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1140px]">
                    <div className="mx-auto mb-14 max-w-[680px] text-center">
                        <Eyebrow>Navegue por Impacto</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Impacto direto no seu negócio
                        </h2>
                        <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Focamos em 4 pilares fundamentais para transformar sua gestão de fretamento
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Economia Real",
                                description: "Redução direta de custos com combustível, manutenção e ociosidade da frota.",
                                metric: "Até 25% de economia",
                                icon: DollarSign,
                            },
                            {
                                title: "Governança Exata",
                                description: "Auditoria completa de presenças, rotas e custos sem planilhas manuais.",
                                metric: "Compliance 100%",
                                icon: Shield,
                            },
                            {
                                title: "Experiência Superior",
                                description: "Previsibilidade e segurança para passageiros e motoristas através de apps intuitivos.",
                                metric: "CSAT 4.8/5.0",
                                icon: Zap,
                            },
                            {
                                title: "Agilidade Operacional",
                                description: "Equipe livre de tarefas manuais com monitoramento automático 24/7.",
                                metric: "15h+/semana livre",
                                icon: Clock,
                            }
                        ].map((pilar, index) => (
                            <motion.div
                                key={pilar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <AppWindowCard
                                    icon={pilar.icon}
                                    title={pilar.title}
                                    description={pilar.description}
                                    stat={pilar.metric}
                                    label={`${String(index + 1).padStart(2, "0")} · Golf Fox`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recursos em Destaque */}
            <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1140px]">
                    <div className="mx-auto mb-14 max-w-[680px] text-center">
                        <Eyebrow>Em destaque</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Recursos em destaque
                        </h2>
                        <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Os recursos mais usados e que geram maior impacto na operação
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {resources
                            .filter(r => r.isPremium || (r.usageStats && r.usageStats.percentage >= 95))
                            .slice(0, 4)
                            .map((resource, index) => {
                                const Icon = iconMap[resource.category] || CheckCircle;
                                return (
                                    <motion.div
                                        key={resource.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleResourceClick(resource.id)}
                                        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)] hover:ring-[#FFD9BF]"
                                    >
                                        {/* barra de janela */}
                                        <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">
                                                {`${String(index + 1).padStart(2, "0")} · Golf Fox`}
                                            </span>
                                        </div>
                                        {/* corpo */}
                                        <div className="flex flex-1 flex-col p-7">
                                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007] transition-transform duration-300 group-hover:scale-110">
                                                <Icon size={24} aria-hidden="true" />
                                            </span>
                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">
                                                    {resource.title}
                                                </h3>
                                                {resource.isPremium && (
                                                    <span className="rounded-full bg-[#FFF0E6] px-2.5 py-1 text-xs font-bold text-[#C2410C]">
                                                        Premium
                                                    </span>
                                                )}
                                            </div>
                                            <p className="leading-relaxed text-[#52647A]">
                                                {resource.description}
                                            </p>
                                            {resource.metrics && resource.metrics.length > 0 && (
                                                <span className="mt-5 inline-flex w-fit rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-bold text-[#C2410C]">
                                                    {resource.metrics[0]}
                                                </span>
                                            )}
                                            {resource.usageStats && (
                                                <div className="mt-3 text-sm font-semibold text-[#01557E]">
                                                    {resource.usageStats.label}
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleResourceClick(resource.id);
                                                }}
                                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#D14600] transition-all hover:text-[#B03B00] group-hover:gap-2.5"
                                            >
                                                Ver detalhes
                                                <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>
            </section>

            {/* Métricas por Categoria */}
            {selectedCategory !== "all" && categoryMetrics[selectedCategory] && (
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Eyebrow tone="orange">Impacto e Resultados</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                {resourceCategories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#BBCADB]">
                                Veja como esta categoria de recursos transforma os resultados operacionais e financeiros dos nossos clientes.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {categoryMetrics[selectedCategory].map((metric, index) => {
                                    return (
                                        <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                            <div className="font-display mb-1 text-3xl font-extrabold tabular-nums text-[#FA6007]">{metric.value}</div>
                                            <div className="mb-1 text-sm font-semibold text-white">{metric.label}</div>
                                            <div className="text-xs text-[#9FB1C6]">{metric.description}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <Link
                                href="/demo"
                                className="mt-8 inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Video className="h-5 w-5" />
                                Agendar demonstração
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video overflow-hidden rounded-[20px] border border-white/10 bg-[#0E2C4D] shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                        >
                            <div className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D14600] transition-all group-hover:scale-110">
                                    <Play className="ml-1 h-8 w-8 fill-current text-white" />
                                </div>
                            </div>
                            {selectedCategoryPreview && (
                                <Image
                                    src={selectedCategoryPreview.src}
                                    alt={selectedCategoryPreview.alt}
                                    fill
                                    className="object-cover opacity-60"
                                />
                            )}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Filters */}
            <section className="sticky top-16 z-50 border-b border-[#EEF2F6] bg-white/90 px-5 py-6 backdrop-blur sm:px-8 lg:top-20">
                <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-4 lg:flex-row lg:items-end lg:justify-center">
                    {/* Search */}
                    <div className="relative w-full max-w-md">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8392A3]"
                        />
                        <input
                            type="text"
                            placeholder="Buscar recursos..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="h-11 w-full rounded-xl border border-[#E7EDF3] bg-white pl-12 pr-4 text-[15px] font-medium text-[#0B2440] transition-colors placeholder:text-[#8392A3] hover:border-[#D8E0E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007]"
                        />
                    </div>

                    {/* Category Select */}
                    <BrandSelect
                        label="Categoria"
                        placeholder="Todas"
                        value={selectedCategory}
                        onValueChange={handleCategoryChange}
                        options={[
                            { value: "all", label: "Todas as categorias" },
                            ...resourceCategories.map((c) => ({ value: c.id, label: c.name })),
                        ]}
                        className="w-full max-w-[260px]"
                    />

                    {/* Profile Select */}
                    <BrandSelect
                        label="Perfil"
                        placeholder="Todos"
                        value={selectedProfile}
                        onValueChange={handleProfileChange}
                        options={[
                            { value: "all", label: "Todos os perfis" },
                            ...resourceProfiles.map((p) => ({ value: p.id, label: p.name })),
                        ]}
                        className="w-full max-w-[260px]"
                    />
                </div>
            </section>

            {/* Resources Grid */}
            <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1140px]">
                    {filteredResources.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredResources.map((resource, index) => {
                                const Icon = iconMap[resource.category] || CheckCircle;
                                return (
                                    <motion.div
                                        key={resource.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)] hover:ring-[#FFD9BF]"
                                        onClick={() => handleResourceClick(resource.id)}
                                    >
                                        {/* barra de janela */}
                                        <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                            <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">
                                                {`${String(index + 1).padStart(2, "0")} · Golf Fox`}
                                            </span>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute right-4 top-14 z-10 flex gap-2">
                                            {resource.isPremium && (
                                                <span className="rounded-full bg-[#FFF0E6] px-2.5 py-1 text-xs font-bold text-[#C2410C]">
                                                    Premium
                                                </span>
                                            )}
                                            {resource.usageStats && resource.usageStats.percentage >= 90 && (
                                                <span className="rounded-full bg-[#E6F1F7] px-2.5 py-1 text-xs font-bold text-[#01557E]">
                                                    Popular
                                                </span>
                                            )}
                                        </div>

                                        {/* corpo */}
                                        <div className="flex flex-1 flex-col p-7">
                                            {/* Icon */}
                                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007] transition-transform duration-300 group-hover:scale-110">
                                                <Icon size={24} aria-hidden="true" />
                                            </span>

                                            {/* Content */}
                                            <h3 className="mb-2 text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">
                                                {resource.title}
                                            </h3>
                                            <p className="line-clamp-2 leading-relaxed text-[#52647A]">
                                                {resource.description}
                                            </p>

                                            {/* Metrics Preview */}
                                            {resource.metrics && resource.metrics.length > 0 && (
                                                <div className="mt-4 rounded-xl bg-[#F4F7FA] p-3">
                                                    <div className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#8392A3]">
                                                        Destaque
                                                    </div>
                                                    <div className="text-sm font-semibold text-[#1F3147]">
                                                        {resource.metrics[0]}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Profiles */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {resource.profiles.map((profile) => (
                                                    <span
                                                        key={profile}
                                                        className="rounded-full bg-[#F4F7FA] px-2.5 py-1 text-xs font-semibold text-[#52647A]"
                                                    >
                                                        {profile.charAt(0).toUpperCase() + profile.slice(1)}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleResourceClick(resource.id);
                                                }}
                                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D14600] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#B03B00]"
                                            >
                                                Ver detalhes
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-16 text-center">
                            <p className="text-lg text-[#52647A]">
                                Nenhum recurso encontrado com os filtros selecionados.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("all");
                                    setSelectedProfile("all");
                                    setSearchQuery("");
                                }}
                                className="mt-4 font-bold text-[#D14600] transition-colors hover:text-[#B03B00]"
                            >
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Plataforma em ação (scroll 3D) */}
            <ContainerScroll
                titleComponent={
                    <>
                        <Eyebrow>Plataforma</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Veja a Golf Fox em ação
                        </h2>
                    </>
                }
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/screenshots/operacao.png"
                    alt="Plataforma Golf Fox"
                    className="h-full w-full object-cover object-left-top"
                />
            </ContainerScroll>

            {/* Screenshots */}
            {(() => {
                const screenshots = filteredResources
                    .filter(r => r.screenshot)
                    .map(r => r.screenshot!);

                if (screenshots.length === 0) return null;

                return (
                    <ScreenshotSection
                        screenshots={screenshots}
                        title={selectedCategory !== "all"
                            ? `Screenshots - ${resourceCategories.find(c => c.id === selectedCategory)?.name}`
                            : "Veja a plataforma em ação"}
                        subtitle="Capturas de tela reais dos recursos da plataforma"
                        columns={selectedCategory !== "all" ? 2 : 3}
                        dark={false}
                    />
                );
            })()}

            {/* Comparação Antes/Depois */}
            <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[1140px]">
                    <div className="mx-auto mb-14 max-w-[680px] text-center">
                        <Eyebrow>Transformação</Eyebrow>
                        <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                            Antes vs Depois
                        </h2>
                        <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                            Veja a transformação na sua operação com os recursos da Golf Fox
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Sem Golf Fox */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E6EC] bg-[#F1F3F6]"
                        >
                            <div className="flex items-center gap-2.5 bg-[#E7EAEF] px-6 py-[18px]">
                                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#C4CBD4]">
                                    <X className="h-4 w-4 text-[#6B7585]" aria-hidden="true" />
                                </span>
                                <span className="text-base font-extrabold text-[#5A6675]">Sem Golf Fox</span>
                            </div>
                            <div className="flex flex-col px-6 pb-6 pt-2">
                                {[
                                    "Planejamento manual de rotas em planilhas",
                                    "Sem visibilidade em tempo real dos veículos",
                                    "Check-in manual com papel e caneta",
                                    "Relatórios manuais demorados e propensos a erros",
                                    "Sem rastreabilidade de ações e alterações",
                                    "Rateio de custos manual e demorado",
                                    "Sem alertas automáticos de problemas",
                                ].map((item, i, arr) => (
                                    <div
                                        key={item}
                                        className={`flex items-start gap-3 py-3.5 ${i < arr.length - 1 ? "border-b border-[#E4E8ED]" : ""}`}
                                    >
                                        <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#E2E6EC]">
                                            <X className="h-3 w-3 text-[#8A93A0]" aria-hidden="true" />
                                        </span>
                                        <span className="text-[15.5px] font-semibold text-[#515C6B]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Com Golf Fox */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col overflow-hidden rounded-[18px] border border-[#FFD9BF] bg-white shadow-[0_18px_44px_rgba(11,36,64,0.12)]"
                        >
                            <div className="flex items-center gap-2.5 bg-[#0B2440] px-6 py-[18px]">
                                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#E6F7EE]">
                                    <Check className="h-4 w-4 text-[#1A8F52]" aria-hidden="true" />
                                </span>
                                <span className="text-base font-extrabold text-white">Com Golf Fox</span>
                            </div>
                            <div className="flex flex-col px-6 pb-6 pt-2">
                                {[
                                    "Roteirização automática com otimização inteligente",
                                    "Rastreamento em tempo real de todos os veículos",
                                    "Check-in digital com QR Code ou NFC em segundos",
                                    "Relatórios automáticos agendados e precisos",
                                    "Audit log completo com 100% de rastreabilidade",
                                    "Rateio automático de custos por centro",
                                    "Alertas automáticos em tempo real",
                                ].map((item, i, arr) => (
                                    <div
                                        key={item}
                                        className={`flex items-start gap-3 py-3.5 ${i < arr.length - 1 ? "border-b border-[#F0F3F6]" : ""}`}
                                    >
                                        <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                            <Check className="h-3 w-3 text-[#1A8F52]" aria-hidden="true" />
                                        </span>
                                        <span className="text-[15.5px] font-semibold text-[#1F3147]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Resultados com a Golf Fox */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative mt-10 overflow-hidden rounded-[22px] bg-[#0B2440] px-6 py-12 text-white sm:px-12"
                    >
                        <RouteBackdrop />
                        <div className="relative mx-auto max-w-[820px]">
                            <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                Resultados com a Golf Fox
                            </p>
                            <div className="grid grid-cols-3 gap-y-8">
                                {[
                                    { value: "30%", label: "Economia em custos" },
                                    { value: "50%", label: "Redução em tempo" },
                                    { value: "100%", label: "Rastreabilidade" },
                                ].map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className={`flex flex-col items-center px-2 text-center sm:px-6 ${i > 0 ? "border-l border-white/10" : ""}`}
                                    >
                                        <div className="font-display text-[2.75rem] font-black leading-none tabular-nums text-[#FA6007] sm:text-5xl">
                                            {stat.value}
                                        </div>
                                        <div className="mt-3 h-px w-8 bg-[#FA6007]/40" aria-hidden="true" />
                                        <div className="mt-3 max-w-[160px] text-sm leading-snug text-[#A9BACD]">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Jornadas do Usuário */}
            {selectedProfile !== "all" && (() => {
                const profileResources = resources
                    .filter(r => r.profiles.includes(selectedProfile))
                    .sort((a, b) => {
                        // Ordenar por uso (mais usado primeiro) e depois por categoria
                        const aUsage = a.usageStats?.percentage || 0;
                        const bUsage = b.usageStats?.percentage || 0;
                        if (bUsage !== aUsage) return bUsage - aUsage;
                        return a.title.localeCompare(b.title);
                    })
                    .slice(0, 6);

                if (profileResources.length === 0) return null;

                const profileName = resourceProfiles.find(p => p.id === selectedProfile)?.name || "";

                return (
                    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                        <div className="mx-auto max-w-[1140px]">
                            <div className="mx-auto mb-14 max-w-[680px] text-center">
                                <Eyebrow>Jornada</Eyebrow>
                                <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                    Jornada do {profileName}
                                </h2>
                                <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                                    Recursos em ordem de uso típico para este perfil
                                </p>
                            </div>

                            <div className="mx-auto max-w-4xl">
                                <div className="space-y-4">
                                    {profileResources.map((resource, index) => {
                                        const Icon = iconMap[resource.category] || CheckCircle;
                                        return (
                                            <motion.div
                                                key={resource.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleResourceClick(resource.id)}
                                                className="group cursor-pointer rounded-[20px] bg-white p-6 shadow-[0_18px_50px_rgba(11,36,64,0.08)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(11,36,64,0.14)] hover:ring-[#FFD9BF]"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] transition-transform duration-300 group-hover:scale-110">
                                                            <span className="font-display text-xl font-extrabold tabular-nums text-[#FA6007]">
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="mb-2 flex flex-wrap items-center gap-3">
                                                            <Icon size={20} className="text-[#8392A3]" />
                                                            <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#0B2440]">
                                                                {resource.title}
                                                            </h3>
                                                            {resource.isPremium && (
                                                                <span className="rounded-full bg-[#FFF0E6] px-2.5 py-1 text-xs font-bold text-[#C2410C]">
                                                                    Premium
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-[#52647A]">
                                                            {resource.description}
                                                        </p>
                                                        {resource.metrics && resource.metrics.length > 0 && (
                                                            <div className="mt-2 text-sm font-semibold text-[#C2410C]">
                                                                {resource.metrics[0]}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <ArrowRight
                                                        size={20}
                                                        className="shrink-0 text-[#8392A3] transition-colors group-hover:text-[#FA6007]"
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* ROI Calculator */}
            {selectedCategory !== "all" && (() => {
                // Mostrar calculadora para recursos específicos que têm cálculo configurado
                const categoryResource = resources.find(r =>
                    r.category === selectedCategory &&
                    ['roteirizacao', 'custos-centro', 'relatorios-agendados'].includes(r.id)
                );

                if (!categoryResource) return null;

                return (
                    <ResourceROICalculator
                        resourceId={categoryResource.id}
                        resourceName={categoryResource.title}
                        dark={false}
                    />
                );
            })()}

            {/* FAQ */}
            <FaqTwoColumn
                title="Perguntas frequentes sobre recursos"
                description="Tudo que você precisa saber sobre os recursos."
                initialCount={4}
                items={[
                    {
                        q: "Quais recursos são mais usados pelos clientes?",
                        a: "Os recursos mais utilizados são: Roteirização (95% dos clientes), Mapa em Tempo Real (98%), Status da Viagem (100%), Presença Auditável (100%), Audit Log (100%), Notificações Push (100%) e Dashboards (95%). Esses recursos formam o core da plataforma e são essenciais para operação eficiente.",
                    },
                    {
                        q: "Posso usar apenas alguns recursos ou preciso de todos?",
                        a: "Você pode usar apenas os recursos que fazem sentido para sua operação. A plataforma é modular e flexível. Por exemplo, uma empresa pode usar apenas Planejamento e Operação, enquanto uma transportadora pode focar em Ativos e Financeiro. Nossa equipe ajuda a identificar quais recursos são mais relevantes para seu caso.",
                    },
                    {
                        q: "Como funciona a integração entre recursos?",
                        a: "Todos os recursos são integrados nativamente na plataforma. Por exemplo, a Roteirização se conecta automaticamente com o Mapa em Tempo Real, que alimenta os Alertas de Atraso, que geram Notificações Push. Os dados fluem automaticamente entre recursos, garantindo consistência e eficiência.",
                    },
                    {
                        q: "Há recursos premium ou todos estão incluídos?",
                        a: "A maioria dos recursos está incluída no plano base. Alguns recursos avançados como Roteirização Inteligente, Check-in NFC e DRE Operacional são considerados premium e podem ter custo adicional. Entre em contato para entender qual plano atende melhor suas necessidades.",
                    },
                    {
                        q: "Os recursos funcionam offline?",
                        a: "Alguns recursos funcionam parcialmente offline, especialmente os apps móveis. O Check-in QR Code e Check-in NFC funcionam 100% offline e sincronizam automaticamente quando a conexão é restabelecida. Recursos web como Dashboards e Relatórios requerem conexão, mas os dados são atualizados em tempo real quando online.",
                    },
                    {
                        q: "Como posso aprender a usar cada recurso?",
                        a: "Oferecemos documentação completa para cada recurso, vídeos tutoriais, treinamento personalizado durante a implantação e suporte contínuo. Além disso, temos uma central de ajuda com FAQs e guias passo a passo. Durante os primeiros 90 dias, oferecemos suporte prioritário para garantir que sua equipe domine todos os recursos.",
                    },
                    {
                        q: "Posso personalizar recursos para minha necessidade específica?",
                        a: "Muitos recursos têm opções de configuração e personalização. Por exemplo, você pode configurar regras de alerta personalizadas, criar relatórios customizados, definir permissões específicas por perfil e muito mais. Para necessidades muito específicas, podemos discutir customizações adicionais.",
                    },
                    {
                        q: "Os recursos são atualizados regularmente?",
                        a: "Sim, lançamos melhorias e novos recursos regularmente. Todas as atualizações são automáticas e não requerem ação do cliente. Mantemos um changelog público e notificamos sobre mudanças significativas. Nossa equipe está sempre trabalhando em melhorias baseadas no feedback dos clientes.",
                    },
                    {
                        q: "Há limite de uso para os recursos?",
                        a: "A maioria dos recursos não tem limite de uso. Você pode criar quantas rotas precisar, monitorar quantos veículos tiver, gerar quantos relatórios quiser. Alguns recursos podem ter limites baseados no seu plano (ex: número de usuários simultâneos), mas esses limites são generosos e podem ser ajustados conforme necessário.",
                    },
                    {
                        q: "Como os recursos ajudam com compliance e auditoria?",
                        a: "Vários recursos são focados em compliance: Audit Log rastreia 100% das ações, Presença Auditável registra check-ins com GPS e timestamp, Conformidade LGPD gerencia direitos do titular, e Permissões garantem segregação de dados. Todos os recursos geram evidências auditáveis que podem ser exportadas para auditorias externas.",
                    },
                    {
                        q: "Posso integrar recursos com sistemas que já uso?",
                        a: "Sim, oferecemos APIs e integrações para sistemas comuns como ERPs, sistemas de RH, ferramentas de BI e muito mais. A maioria das integrações pode ser configurada pela nossa equipe durante a implantação. Recursos como Exportação de Dados facilitam a integração com ferramentas externas.",
                    },
                    {
                        q: "Quanto tempo leva para implementar todos os recursos?",
                        a: "A implementação completa leva em média 2-4 semanas, dependendo da complexidade da sua operação. Recursos básicos como Roteirização e Mapa em Tempo Real podem estar funcionando na primeira semana. Recursos mais complexos como integrações e customizações podem levar mais tempo. Nossa equipe trabalha em paralelo para acelerar o processo.",
                    },
                ]}
            />

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                    <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                </svg>
                <div className="relative mx-auto max-w-[820px] text-center">
                    <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                        Pronto para começar?
                    </h2>
                    <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                        Agende uma demonstração gratuita e descubra como a GOLF FOX pode transformar sua operação de fretamento corporativo.
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

            {/* Resource Detail Modal */}
            {selectedResourceData && (
                <ResourceDetailModal
                    resource={selectedResourceData.resource}
                    relatedResources={selectedResourceData.related}
                    isOpen={!!selectedResource}
                    onClose={() => setSelectedResource(null)}
                    onNavigateToRelated={(resourceId) => {
                        handleResourceClick(resourceId);
                        trackEvent({
                            event: 'resource_navigate_related',
                            properties: {
                                from_resource: selectedResource || '',
                                to_resource: resourceId,
                            },
                        });
                        // Scroll to top to show modal
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                />
            )}
        </div>
    );
}
