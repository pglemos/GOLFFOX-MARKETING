"use client";

import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import {
    Check,
    ArrowRight,
    Clock,
    ShieldCheck,
    QrCode,
    MapPin,
    Smartphone,
    BarChart3,
    Bell,
    FileSearch,
    RefreshCw,
} from "lucide-react";

import { FinalCTA } from "@/components/marketing";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { trackDemoClick } from "@/lib/analytics/track-events";

import { PlanosHero } from "./planos-hero";

const WHATSAPP_HREF = "https://wa.me/5511939337163";

export function PlanosContent() {
    const plan = {
        name: "GOLF FOX Enterprise",
        description: "A solução completa para operações corporativas de qualquer tamanho.",
        features: [
            "Apps para Motorista e Passageiro (Android/iOS)",
            "Painel Administrativo Completo",
            "Gestão de Múltiplas Plantas",
            "Roteirização Inteligente",
            "Check-in via QR Code e NFC",
            "Rastreamento em Tempo Real",
            "Relatórios e Dashboards Avançados",
            "Pesquisas de Satisfação (NPS)",
            "Gestão de Ocorrências",
            "Alertas e Notificações Automatizadas",
            "Integração com Sistemas RH/ERP",
            "Suporte Dedicado e Gerente de Conta",
            "SLA de Atendimento Prioritário",
            "Treinamento e Onboarding",
        ],
        cta: "Solicitar proposta",
    };

    const faqs = [
        {
            q: "Como funciona a cobrança?",
            a: "A cobrança é personalizada baseada nas necessidades da sua operação. Entre em contato para um orçamento sob medida.",
        },
        {
            q: "Existe período de teste?",
            a: "Oferecemos uma demonstração completa da plataforma. Para testes em produção, consulte nosso comercial sobre condições.",
        },
        {
            q: "Posso gerenciar múltiplas unidades?",
            a: "Sim! A plataforma é preparada para gestão multi-planta, com visão consolidada e segregada por unidade.",
        },
        {
            q: "Como funciona o suporte?",
            a: "Oferecemos suporte completo com canais dedicados e gerente de conta para garantir o sucesso da sua operação.",
        },
    ];

    return (
        <MotionConfig reducedMotion="user">
            {/* Hero */}
            <PlanosHero />

            {/* Oferta */}
            <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
                <div className="gf-aurora-light" aria-hidden="true" />
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-[#E7EDF3] bg-white shadow-[0_30px_80px_rgba(11,36,64,0.12)]"
                    >
                        {/* Faixa superior da marca */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-[#FA6007] to-[#FA8A4E]" aria-hidden="true" />

                        <div className="p-8 md:p-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#0B2440] md:text-4xl">
                                    {plan.name}
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#52647A]">
                                    {plan.description}
                                </p>
                                <p className="mx-auto mt-5 text-sm font-medium text-[#7A8AA0]">
                                    Preço sob medida para o tamanho da sua operação — você paga pelo que usa.
                                </p>
                            </div>

                            <div className="my-10 h-px w-full bg-[#EEF2F6]" aria-hidden="true" />

                            <ul
                                role="list"
                                className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2"
                            >
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FFF0E6]">
                                            <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                                        </span>
                                        <span className="text-[15.5px] font-medium text-[#2A3D52]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 flex flex-col items-center gap-4">
                                <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
                                    <Link
                                        href="/demo?tipo=proposta"
                                        onClick={() => trackDemoClick("section")}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(250,96,7,0.25)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                    >
                                        {plan.cta}
                                        <ArrowRight size={20} aria-hidden="true" />
                                    </Link>
                                    <a
                                        href={WHATSAPP_HREF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8E0E8] px-8 py-4 text-lg font-semibold text-[#0B2440] transition-colors duration-200 hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                    >
                                        Falar no WhatsApp
                                    </a>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-[#7A8AA0]">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock size={15} aria-hidden="true" className="text-brand" />
                                        Resposta em até 1 dia útil
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <ShieldCheck size={15} aria-hidden="true" className="text-brand" />
                                        Sem compromisso
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center text-sm text-[#7A8AA0]"
                    >
                        Nossa equipe está pronta para entender sua necessidade e desenhar o projeto ideal.
                    </motion.p>
                </div>
            </section>

            {/* O que está incluso */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            O que está incluso
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Todos os recursos abaixo já vêm no plano — sem add-ons escondidos.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: QrCode, title: "Check-in QR/NFC", desc: "Funciona offline. Sincroniza automaticamente." },
                            { icon: MapPin, title: "Mapa em tempo real", desc: "Atualização a cada 30 segundos." },
                            { icon: Smartphone, title: "Apps Motorista/Passageiro", desc: "iOS e Android inclusos." },
                            { icon: BarChart3, title: "Relatórios", desc: "Exportação em PDF e Excel." },
                            { icon: Bell, title: "Alertas", desc: "Notificações de atraso e desvio." },
                            { icon: ShieldCheck, title: "Segurança", desc: "Criptografia e LGPD." },
                            { icon: FileSearch, title: "Audit Log", desc: "Histórico completo de ações." },
                            { icon: RefreshCw, title: "Atualizações", desc: "Novas funcionalidades sem custo extra." },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group h-full rounded-2xl border border-[#E7EDF3] bg-white p-6 shadow-[0_10px_30px_rgba(11,36,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD9BF] hover:shadow-[0_20px_50px_rgba(11,36,64,0.12)]"
                                >
                                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E6] text-brand transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="mb-1 font-bold text-[#0B2440]">{item.title}</h3>
                                    <p className="text-sm text-[#52647A]">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FaqTwoColumn
                title="Perguntas frequentes"
                description="Tire suas dúvidas sobre planos, cobrança e implantação da plataforma."
                items={faqs}
            />

            {/* Final CTA */}
            <FinalCTA
                title="Pronto para começar?"
                subtitle="Solicite uma proposta personalizada para sua operação. Sem compromisso."
                variant="gradient"
            />
        </MotionConfig>
    );
}
