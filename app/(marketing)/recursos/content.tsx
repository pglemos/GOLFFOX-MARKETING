"use client";

import { useState, useMemo, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
    Search,
    Filter,
    MapPin,
    Radio,
    UserCheck,
    Truck,
    DollarSign,
    Shield,
    MessageCircle,
    BarChart3,
    CheckCircle,
    TrendingUp,
    Clock,
    Zap,
    ArrowRight,
    BookOpen,
    FileSpreadsheet,
    Video,
    FileText,
    Play,
} from "lucide-react";


import { FinalCTA, FAQSection, ResourceDetailModal, ScreenshotSection, ResourceROICalculator } from "@/components/marketing";
import { RouteBackdrop } from "@/components/marketing/landing-ui";
import { resources, resourceCategories, resourceProfiles } from "@/content/marketing";
import { trackFeatureFilter, trackEvent } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

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

    // Contadores por categoria
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        resourceCategories.forEach(category => {
            counts[category.id] = resources.filter(r =>
                r.category === category.id &&
                (selectedProfile === "all" || r.profiles.includes(selectedProfile)) &&
                (searchQuery === "" ||
                    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (r.benefits && r.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))))
            ).length;
        });
        return counts;
    }, [selectedProfile, searchQuery]);

    // Contadores por perfil
    const profileCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        resourceProfiles.forEach(profile => {
            counts[profile.id] = resources.filter(r =>
                r.profiles.includes(profile.id) &&
                (selectedCategory === "all" || r.category === selectedCategory) &&
                (searchQuery === "" ||
                    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (r.benefits && r.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))))
            ).length;
        });
        return counts;
    }, [selectedCategory, searchQuery]);

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
        <>
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Impacto direto no seu negócio
                        </motion.h2>
                        <p className="text-lg text-gray-600">
                            Focamos em 4 pilares fundamentais para transformar sua gestão de fretamento
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Economia Real",
                                description: "Redução direta de custos com combustível, manutenção e ociosidade da frota.",
                                metric: "Até 25% de economia",
                                icon: DollarSign,
                                color: "green"
                            },
                            {
                                title: "Governança Exata",
                                description: "Auditoria completa de presenças, rotas e custos sem planilhas manuais.",
                                metric: "Compliance 100%",
                                icon: Shield,
                                color: "blue"
                            },
                            {
                                title: "Experiência Superior",
                                description: "Previsibilidade e segurança para passageiros e motoristas através de apps intuitivos.",
                                metric: "CSAT 4.8/5.0",
                                icon: Zap,
                                color: "orange"
                            },
                            {
                                title: "Agilidade Operacional",
                                description: "Equipe livre de tarefas manuais com monitoramento automático 24/7.",
                                metric: "15h+/semana livre",
                                icon: Clock,
                                color: "teal"
                            }
                        ].map((pilar, index) => {
                            const Icon = pilar.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-7 h-7 text-${pilar.color}-600`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pilar.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{pilar.description}</p>
                                    <div className={`text-sm font-bold text-${pilar.color}-600`}>
                                        {pilar.metric}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Recursos em Destaque */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Recursos em destaque
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Os recursos mais usados e que geram maior impacto na operação
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                                        className="group p-6 rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center shrink-0 transition-colors">
                                                <Icon size={32} className="text-orange-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                        {resource.title}
                                                    </h3>
                                                    {resource.isPremium && (
                                                        <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                                                            Premium
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">
                                                    {resource.description}
                                                </p>
                                                {resource.metrics && resource.metrics.length > 0 && (
                                                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                                                        <span className="font-semibold text-orange-600">
                                                            {resource.metrics[0]}
                                                        </span>
                                                    </div>
                                                )}
                                                {resource.usageStats && (
                                                    <div className="text-xs text-blue-600 font-medium mb-3">
                                                        {resource.usageStats.label}
                                                    </div>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        handleResourceClick(resource.id);
                                                    }}
                                                    className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                                                >
                                                    Ver detalhes
                                                    <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>
            </section>

            {/* Métricas por Categoria */}
            {selectedCategory !== "all" && categoryMetrics[selectedCategory] && (
                <section className="py-16 bg-gray-900 overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
                                    Impacto e Resultados
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                    {resourceCategories.find(c => c.id === selectedCategory)?.name}
                                </h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    Veja como esta categoria de recursos transforma os resultados operacionais e financeiros dos nossos clientes.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {categoryMetrics[selectedCategory].map((metric, index) => {
                                        return (
                                            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                <div className="text-2xl font-bold text-orange-500 mb-1">{metric.value}</div>
                                                <div className="text-sm font-semibold text-white mb-1">{metric.label}</div>
                                                <div className="text-xs text-gray-400">{metric.description}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <Link
                                    href="/demo"
                                    className="mt-8 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all"
                                >
                                    <Video className="w-5 h-5" />
                                    Agendar demonstração
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 border border-white/10 shadow-2xl"
                            >
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer">
                                    <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-all">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
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
                    </div>
                </section>
            )}

            {/* Filters */}
            <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search */}
                    <div className="relative max-w-md mx-auto mb-6">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Buscar recursos..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button
                            onClick={() => handleCategoryChange("all")}
                            className={cn(
                                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                                selectedCategory === "all"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            <CheckCircle size={16} />
                            <span>Todos</span>
                            {selectedCategory === "all" && (
                                <span className="px-1.5 py-0.5 rounded text-xs bg-white/20">
                                    {filteredResources.length}
                                </span>
                            )}
                        </button>
                        {resourceCategories.map((category) => {
                            const Icon = iconMap[category.id] || CheckCircle;
                            const count = categoryCounts[category.id] || 0;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                                        selectedCategory === category.id
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    )}
                                >
                                    <Icon size={16} />
                                    <span className="hidden sm:inline">{category.name}</span>
                                    {count > 0 && (
                                        <span className={cn(
                                            "px-1.5 py-0.5 rounded text-xs",
                                            selectedCategory === category.id
                                                ? "bg-white/20"
                                                : "bg-gray-200 text-gray-700"
                                        )}>
                                            {count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Profile Filter */}
                    <div className="flex justify-center flex-wrap gap-2">
                        <Filter size={16} className="text-gray-400 my-auto mr-2" />
                        <button
                            onClick={() => handleProfileChange("all")}
                            className={cn(
                                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5",
                                selectedProfile === "all"
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            Todos os perfis
                            {selectedProfile === "all" && (
                                <span className="px-1.5 py-0.5 rounded text-xs bg-white/20">
                                    {filteredResources.length}
                                </span>
                            )}
                        </button>
                        {resourceProfiles.map((profile) => {
                            const count = profileCounts[profile.id] || 0;
                            return (
                                <button
                                    key={profile.id}
                                    onClick={() => handleProfileChange(profile.id)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all inline-flex items-center gap-1.5",
                                        selectedProfile === profile.id
                                            ? "bg-gray-900 text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    )}
                                >
                                    {profile.name}
                                    {count > 0 && (
                                        <span className={cn(
                                            "px-1.5 py-0.5 rounded text-xs",
                                            selectedProfile === profile.id
                                                ? "bg-white/20"
                                                : "bg-gray-200 text-gray-700"
                                        )}>
                                            {count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredResources.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredResources.map((resource, index) => {
                                const Icon = iconMap[resource.category] || CheckCircle;
                                return (
                                    <motion.div
                                        key={resource.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
                                        onClick={() => handleResourceClick(resource.id)}
                                    >
                                        {/* Badges */}
                                        <div className="absolute top-4 right-4 flex gap-2 z-10">
                                            {resource.isPremium && (
                                                <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                                                    Premium
                                                </span>
                                            )}
                                            {resource.usageStats && resource.usageStats.percentage >= 90 && (
                                                <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700">
                                                    Popular
                                                </span>
                                            )}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                                            <Icon size={24} className="text-orange-600" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {resource.description}
                                        </p>

                                        {/* Metrics Preview */}
                                        {resource.metrics && resource.metrics.length > 0 && (
                                            <div className="mb-4 p-2 rounded-lg bg-gray-50">
                                                <div className="text-xs font-semibold text-gray-700 mb-1">
                                                    Destaque:
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    {resource.metrics[0]}
                                                </div>
                                            </div>
                                        )}

                                        {/* Profiles */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {resource.profiles.map((profile) => (
                                                <span
                                                    key={profile}
                                                    className={cn(
                                                        "px-2 py-1 rounded text-xs font-medium",
                                                        profile === "empresa" && "bg-blue-50 text-blue-600",
                                                        profile === "transportadora" && "bg-green-50 text-green-600",
                                                        profile === "motorista" && "bg-orange-50 text-orange-600",
                                                        profile === "passageiro" && "bg-teal-50 text-teal-600"
                                                    )}
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
                                            className="w-full mt-4 px-4 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium text-sm transition-colors flex items-center justify-center gap-2"
                                        >
                                            Ver detalhes
                                            <ArrowRight size={16} />
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">
                                Nenhum recurso encontrado com os filtros selecionados.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("all");
                                    setSelectedProfile("all");
                                    setSearchQuery("");
                                }}
                                className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
                            >
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>

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
                            Veja a transformação na sua operação com os recursos da GOLF FOX
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
                                    <span>Planejamento manual de rotas em planilhas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem visibilidade em tempo real dos veículos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Check-in manual com papel e caneta</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Relatórios manuais demorados e propensos a erros</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Sem rastreabilidade de ações e alterações</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>Rateio de custos manual e demorado</span>
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
                                    <span>Roteirização automática com otimização inteligente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Rastreamento em tempo real de todos os veículos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Check-in digital com QR Code ou NFC em segundos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Relatórios automáticos agendados e precisos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Audit log completo com 100% de rastreabilidade</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Rateio automático de custos por centro</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                    <span>Alertas automáticos em tempo real</span>
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
                            <h4 className="text-xl font-bold text-orange-900 mb-4">Resultados com GOLF FOX</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">30%</div>
                                    <div className="text-sm text-orange-800">Economia em custos</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">50%</div>
                                    <div className="text-sm text-orange-800">Redução em tempo</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600">100%</div>
                                    <div className="text-sm text-orange-800">Rastreabilidade</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            Materiais gratuitos para aprofundar seu conhecimento sobre a plataforma
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: BookOpen,
                                title: "Documentação completa",
                                description: "Guia detalhado de todos os recursos com exemplos práticos",
                                type: "Link",
                                link: "/docs",
                                color: "blue",
                            },
                            {
                                icon: Video,
                                title: "Vídeos tutoriais",
                                description: "Aprenda a usar cada recurso com vídeos passo a passo",
                                type: "Link",
                                link: "/videos",
                                color: "teal",
                            },
                            {
                                icon: FileSpreadsheet,
                                title: "Checklist de implementação",
                                description: "Planilha para acompanhar a implementação dos recursos",
                                type: "Excel",
                                link: "#",
                                color: "green",
                            },
                            {
                                icon: FileText,
                                title: "Guia por perfil",
                                description: "Guias específicos para Empresa, Transportadora, Motorista e Passageiro",
                                type: "PDF",
                                link: "/guias",
                                color: "orange",
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
                                        href={resource.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all"
                                    >
                                        Acessar agora
                                        <ArrowRight size={16} />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
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
                    <section className="py-16 lg:py-24 bg-gray-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                                >
                                    Jornada do {profileName}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-gray-600"
                                >
                                    Recursos em ordem de uso típico para este perfil
                                </motion.p>
                            </div>

                            <div className="max-w-4xl mx-auto">
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
                                                className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0">
                                                        <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                                                            <span className="text-xl font-bold text-orange-600">
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <Icon size={20} className="text-gray-400" />
                                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                                {resource.title}
                                                            </h3>
                                                            {resource.isPremium && (
                                                                <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                                                                    Premium
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {resource.description}
                                                        </p>
                                                        {resource.metrics && resource.metrics.length > 0 && (
                                                            <div className="text-xs text-orange-600 font-medium">
                                                                {resource.metrics[0]}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <ArrowRight
                                                        size={20}
                                                        className="text-gray-400 group-hover:text-orange-600 shrink-0 transition-colors"
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
            <FAQSection
                faqs={[
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
                ]}
                title="Perguntas frequentes sobre recursos"
                subtitle="Tire suas dúvidas sobre funcionalidades e uso da plataforma"
            />

            {/* Final CTA */}
            <FinalCTA variant="gradient" />

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
        </>
    );
}
