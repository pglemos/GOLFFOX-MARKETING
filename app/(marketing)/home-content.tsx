"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Radio,
    QrCode,
    FileText,
    Shield,
    AlertTriangle,
    Clock,
    DollarSign,
    UserX,
    PhoneOff,
    AlertOctagon,
    Shuffle,
    Building2,
    Truck,
    UserCircle,
    User,
    Route,
    ScanLine,
    CarFront,
    UserCog,
    AlertCircle,
    LayoutDashboard,
    FileBarChart,
    ShieldCheck,
    CheckCircle,
    TrendingDown,
    FileX,
    Activity,
    MessageSquareWarning,
    Scale,
    BarChart4,
    UserCheck,
    Map,
    Radar,
    Bus,
    Wallet,
    BarChart3,
    Bell,
    FileCheck,
    Smartphone,
    Quote,
} from "lucide-react";

import { HeroSection, FAQSection, FinalCTA, SocialProof } from "@/components/marketing";
import { home, faqGlobal, ctas } from "@/content/marketing";
import { trackProfileTabSelect } from "@/lib/analytics/track-events";

// Mapa de ícones
const iconMap = {
    Radio, QrCode, FileText, Shield, AlertTriangle, Clock, DollarSign, UserX,
    PhoneOff, AlertOctagon, Shuffle, Building2, Truck, UserCircle, User,
    Route, ScanLine, CarFront, UserCog, AlertCircle, LayoutDashboard, FileBarChart, ShieldCheck,
    TrendingDown, FileX, Activity, MessageSquareWarning, Scale, BarChart4,
    UserCheck, Map, Radar, Bus, Wallet, BarChart3, Bell, FileCheck, Smartphone, Quote
};

export function HomePage() {
    const [activeProfile, setActiveProfile] = useState(0);

    const handleProfileSelect = (index: number, profile: string) => {
        setActiveProfile(index);
        trackProfileTabSelect(profile.toLowerCase());
    };

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={home.hero.title}
                subtitle={home.hero.subtitle}
                variant="split"
                dark={true} // Mudança para Dark Mode para corrigir menu
                image={{
                    src: "/images/dashboard-preview.png",
                    alt: "GOLF FOX Dashboard",
                }}
                primaryCta={{
                    text: ctas.primary.text,
                    href: ctas.primary.href,
                }}
                secondaryCta={{
                    text: ctas.tertiary.comoFunciona.text,
                    href: ctas.tertiary.comoFunciona.href,
                }}
            />

            {/* Trusted By Section (Nova) */}
            {home.trustedBy && (
                <SocialProof
                    logos={home.trustedBy}
                    title="Empresas que escalaram sua operação com GOLF FOX"
                    dark={false}
                    className="py-10 border-b border-gray-100 bg-white"
                />
            )}

            {/* Metrics Section */}
            {home.metrics && (
                <section className="bg-orange-600 py-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {home.metrics.map((metric, index) => {
                                const Icon = iconMap[metric.icon as keyof typeof iconMap] || Activity;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center text-white"
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/50 flex items-center justify-center backdrop-blur-sm">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
                                            {metric.value}
                                        </div>
                                        <div className="text-sm lg:text-base font-medium text-orange-100 uppercase tracking-wide">
                                            {metric.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Barra de prova rápida (5 bullets) */}
            <section className="py-8 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {home.proofBar.map((item, index) => {
                            const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                    <Icon className="w-4 h-4 text-orange-500" />
                                    <span className="font-medium">{item.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Fundo do Poço (Dores) */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-50 text-red-600 border border-red-100 mb-4"
                        >
                            O problema
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Sem controle, fretamento vira caos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Reconhece algum desses problemas na sua operação?
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {home.pains.map((pain, index) => {
                            const Icon = iconMap[pain.icon as keyof typeof iconMap] || AlertTriangle;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pain.title}</h3>
                                    <p className="text-sm text-gray-600">{pain.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Topo da Montanha (Resultado por perfil) */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-green-50 text-green-600 border border-green-200 mb-4"
                        >
                            A transformação
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Resultados para cada perfil
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Veja o que muda quando você tem controle real
                        </motion.p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {home.profileResults.map((profile, index) => {
                            const Icon = iconMap[profile.icon as keyof typeof iconMap] || User;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleProfileSelect(index, profile.profile)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all shadow-sm ${activeProfile === index
                                        ? "bg-orange-600 text-white shadow-orange-200"
                                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {profile.profile}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Profile Content */}
                    <motion.div
                        key={activeProfile}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Resultados */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl shadow-gray-100/50">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingDown className="w-5 h-5 text-green-600" />
                                    Resultados Comprovados
                                </h3>
                                <div className="space-y-4">
                                    {home.profileResults[activeProfile].results.map((result, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg shadow-gray-100/30">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                                    Recursos Chave
                                </h3>
                                <div className="space-y-3">
                                    {home.profileResults[activeProfile].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600 border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Como funciona (3 passos) */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100 mb-4"
                        >
                            O caminho
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Como funciona
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Da simulação à operação em 3 passos
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {home.howItWorks.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                                        <ArrowRight className="w-6 h-6 text-gray-300" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/como-funciona"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                        >
                            Ver detalhes completos
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Módulos principais */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Tudo que você precisa
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Módulos integrados para gestão completa
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {home.modules.map((module, index) => {
                            const Icon = iconMap[module.icon as keyof typeof iconMap] || Shield;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
                                >
                                    <Icon className="w-8 h-8 text-orange-500 mb-3" />
                                    <h3 className="font-semibold text-gray-900 mb-1">{module.title}</h3>
                                    <p className="text-sm text-gray-500">{module.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/recursos"
                            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            Ver todos os recursos
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Prova visual (prints) */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Veja a plataforma em ação
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Capturas de tela reais dos portais e apps
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
                        >
                            <Image
                                src="/images/dashboard-preview.png"
                                alt="Portal Empresa"
                                fill
                                className="object-contain p-4"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">
                                Central de Inteligência
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
                        >
                            <Image
                                src="/images/mobile-apps-preview.png"
                                alt="Apps Mobile"
                                fill
                                className="object-contain p-4"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">
                                Gestão de Alertas
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teaser "Como operamos" */}
            <section className="py-16 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6"
                        >
                            Confiança e Governança
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-4"
                        >
                            {home.comoOperamosTeaser.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 mb-8"
                        >
                            {home.comoOperamosTeaser.description}
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {["Monitoramento", "Incidentes", "Auditoria", "Relatórios"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-gray-900 border border-gray-800"
                                >
                                    <span className="text-white font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href={home.comoOperamosTeaser.cta.href}
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            {home.comoOperamosTeaser.cta.text}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            {home.socialProof && (
                <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                            >
                                {home.socialProof.title}
                            </motion.h2>
                            <p className="text-lg text-gray-600">
                                {home.socialProof.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {home.socialProof.testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                                >
                                    <Quote className="w-10 h-10 text-orange-100 absolute top-6 left-6" />
                                    <blockquote className="relative z-10">
                                        <p className="text-gray-700 mb-6 italic">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <footer className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                                {testimonial.author[0]}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                                <div className="text-sm text-gray-500">{testimonial.role} - {testimonial.company}</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ curto */}
            <FAQSection faqs={faqGlobal.slice(0, 6)} />

            {/* CTA Final */}
            <FinalCTA
                title="Pare de perder dinheiro com ônibus vazios"
                subtitle="Faça uma simulação gratuita e descubra quanto você pode economizar em 30 dias."
                variant="gradient"
            />
        </>
    );
}
