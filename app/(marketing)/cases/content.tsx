"use client";

import { motion } from "framer-motion";
import { Building2, Truck, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

import { HeroSection, FinalCTA } from "@/components/marketing";

export function CasesContent() {
    const cases = [
        {
            type: "Empresa",
            icon: Building2,
            title: "Indústria Automotiva",
            segment: "Manufatura • 2.500 colaboradores",
            challenge: "Falta de visibilidade sobre custos por centro de custo e presença não auditável. Reclamações frequentes de atrasos.",
            solution: "Implementação completa do Portal Empresa com check-in QR Code, rateio automático de custos e alertas de atraso.",
            results: [
                { metric: "40%", label: "Redução de reclamações" },
                { metric: "15%", label: "Economia em custos" },
                { metric: "100%", label: "Presença auditável" },
            ],
            quote: "Agora temos visibilidade total sobre onde está cada centavo gasto com transporte.",
            author: "Gerente de RH",
        },
        {
            type: "Transportadora",
            icon: Truck,
            title: "Transportadora Regional",
            segment: "Fretamento • 45 veículos",
            challenge: "Gestão manual de frota, documentos de motoristas desatualizados e dificuldade em calcular margem por rota.",
            solution: "Portal Transportadora completo com gestão de frota, alertas de documentos e DRE operacional por rota.",
            results: [
                { metric: "25%", label: "Aumento de margem" },
                { metric: "0", label: "Documentos vencidos" },
                { metric: "30min", label: "Economia diária/gestor" },
            ],
            quote: "O DRE operacional mudou nossa forma de precificar. Agora sabemos a margem real de cada contrato.",
            author: "Diretor de Operações",
        },
        {
            type: "Multi-empresa",
            icon: Users,
            title: "Consultoria de Logística",
            segment: "Operador • 8 empresas atendidas",
            challenge: "Gerenciar múltiplas empresas com planilhas distintas, sem padronização e muito retrabalho em relatórios.",
            solution: "Plataforma GOLF FOX com visão consolidada por empresa, padrões globais e relatórios automáticos para cada cliente.",
            results: [
                { metric: "60%", label: "Menos tempo em relatórios" },
                { metric: "3x", label: "Mais empresas gerenciadas" },
                { metric: "1", label: "Painel para tudo" },
            ],
            quote: "Triplicamos nossa capacidade de atendimento sem aumentar a equipe.",
            author: "CEO",
        },
    ];

    return (
        <>
            {/* Hero */}
            <HeroSection
                badge="Cases de Sucesso"
                title="Resultados reais de clientes reais"
                subtitle="Veja como empresas e transportadoras transformaram sua operação de fretamento com o GOLF FOX."
                variant="centered"
            />

            {/* Cases */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {cases.map((caseItem, index) => {
                            const Icon = caseItem.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        {/* Content */}
                                        <div className="p-8 lg:p-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                                    <Icon size={20} />
                                                </div>
                                                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                                                    {caseItem.type}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {caseItem.title}
                                            </h3>
                                            <p className="text-gray-500 mb-6">{caseItem.segment}</p>

                                            <div className="space-y-4 mb-8">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                                        Desafio
                                                    </h4>
                                                    <p className="text-gray-600">{caseItem.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                                        Solução
                                                    </h4>
                                                    <p className="text-gray-600">{caseItem.solution}</p>
                                                </div>
                                            </div>

                                            <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-gray-700 mb-4">
                                                &ldquo;{caseItem.quote}&rdquo;
                                            </blockquote>
                                            <p className="text-sm text-gray-500">— {caseItem.author}</p>
                                        </div>

                                        {/* Results */}
                                        <div className="bg-gray-950 p-8 lg:p-12 flex items-center">
                                            <div className="w-full">
                                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6">
                                                    Resultados
                                                </h4>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {caseItem.results.map((result, i) => (
                                                        <div key={i} className="text-center">
                                                            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-1">
                                                                {result.metric}
                                                            </div>
                                                            <div className="text-sm text-gray-400">
                                                                {result.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Metrics Summary */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Impacto consolidado
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Resultados agregados de nossos clientes
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: TrendingUp, metric: "30%", label: "Redução média de custos" },
                            { icon: Clock, metric: "50%", label: "Menos tempo em gestão" },
                            { icon: Users, metric: "10k+", label: "Colaboradores transportados" },
                            { icon: CheckCircle, metric: "99.5%", label: "Uptime da plataforma" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 mb-1">
                                        {item.metric}
                                    </div>
                                    <div className="text-sm text-gray-600">{item.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA
                title="Quer resultados como esses?"
                subtitle="Agende uma demonstração e veja como o GOLF FOX pode transformar sua operação."
                variant="gradient"
            />
        </>
    );
}
