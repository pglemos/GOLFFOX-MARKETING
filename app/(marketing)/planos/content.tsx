"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";
import { trackDemoClick } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

export function PlanosContent() {
    const plans = [
        {
            name: "GOLF FOX Enterprise",
            description: "A solução completa para operações corporativas de qualquer tamanho.",
            highlight: true,
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
                "Treinamento e Onboarding"
            ],
            cta: "Solicitar proposta",
        },
    ];

    const faqs = [
        {
            question: "Como funciona a cobrança?",
            answer: "A cobrança é personalizada baseada nas necessidades da sua operação. Entre em contato para um orçamento sob medida.",
        },
        {
            question: "Existe período de teste?",
            answer: "Oferecemos uma demonstração completa da plataforma. Para testes em produção, consulte nosso comercial sobre condições.",
        },
        {
            question: "Posso gerenciar múltiplas unidades?",
            answer: "Sim! A plataforma é preparada para gestão multi-planta, com visão consolidada e segregada por unidade.",
        },
        {
            question: "Como funciona o suporte?",
            answer: "Oferecemos suporte completo com canais dedicados e gerente de conta para garantir o sucesso da sua operação.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <HeroSection
                badge="Solução Completa"
                title="Tudo que você precisa em um só lugar"
                subtitle="Uma plataforma única e poderosa para transformar o transporte dos seus colaboradores."
                variant="centered"
            />

            {/* Plans */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "relative p-8 md:p-12 rounded-2xl border transition-all bg-white border-gray-200 shadow-xl",
                                    plan.highlight && "border-orange-500 ring-1 ring-orange-500"
                                )}
                            >
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {plan.name}
                                    </h3>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 max-w-3xl mx-auto">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle
                                                size={20}
                                                className="text-orange-500 flex-shrink-0"
                                            />
                                            <span className="text-gray-700 font-medium">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center">
                                    <Link
                                        href="/demo?tipo=proposta"
                                        onClick={() => trackDemoClick("section")}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl transition-all hover:scale-105"
                                    >
                                        {plan.cta}
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-gray-500 mt-12"
                    >
                        Nossa equipe está pronta para entender sua necessidade e desenhar o projeto ideal.
                    </motion.p>
                </div>
            </section>

            {/* Comparison Table */}
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
                            Recursos disponíveis em todos os planos
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "Check-in QR/NFC", desc: "Funciona offline. Sincroniza automaticamente." },
                            { title: "Mapa em tempo real", desc: "Atualização a cada 30 segundos." },
                            { title: "Apps Motorista/Passageiro", desc: "iOS e Android inclusos." },
                            { title: "Relatórios", desc: "Exportação em PDF e Excel." },
                            { title: "Alertas", desc: "Notificações de atraso e desvio." },
                            { title: "Segurança", desc: "Criptografia e LGPD." },
                            { title: "Audit Log", desc: "Histórico completo de ações." },
                            { title: "Atualizações", desc: "Novas funcionalidades sem custo extra." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 rounded-xl bg-gray-50 border border-gray-100"
                            >
                                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <FinalCTA
                title="Pronto para começar?"
                subtitle="Solicite uma proposta personalizada para sua operação. Sem compromisso."
                variant="gradient"
            />
        </>
    );
}
