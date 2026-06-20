"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
    Plug,
    Code,
    RefreshCw,
    FileSpreadsheet,
    ExternalLink,
} from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function IntegracoesContent() {
    const integrationTypes = [
        {
            icon: Code,
            title: "API REST",
            description: "API completa para integrar com qualquer sistema. Documentação OpenAPI disponível.",
            features: ["Autenticação OAuth2", "Rate limiting", "Versionamento", "Sandbox"],
        },
        {
            icon: RefreshCw,
            title: "Webhooks",
            description: "Receba notificações em tempo real sobre eventos da plataforma.",
            features: ["Eventos configuráveis", "Retry automático", "Logs de entrega", "Validação HMAC"],
        },
        {
            icon: FileSpreadsheet,
            title: "Importação/Exportação",
            description: "Importe e exporte dados via planilhas Excel/CSV.",
            features: ["Templates prontos", "Validação prévia", "Logs de importação", "Agendamento"],
        },
    ];

    const preBuiltIntegrations = [
        {
            category: "Sistemas de RH",
            items: ["Senior", "TOTVS RM", "ADP", "Workday", "SAP HCM"],
        },
        {
            category: "Ponto Eletrônico",
            items: ["Secullum", "Dimep", "Tangerino", "REP-P"],
        },
        {
            category: "ERPs",
            items: ["SAP", "TOTVS Protheus", "Oracle EBS", "Sage"],
        },
        {
            category: "Rastreadores",
            items: ["Sascar", "Omnilink", "Sighra", "Autotrac"],
        },
    ];

    const faqs = [
        {
            question: "A API tem limite de requisições?",
            answer: "Sim, o rate limiting padrão é de 1000 requisições por minuto. Para planos Enterprise, podemos configurar limites maiores conforme necessidade.",
        },
        {
            question: "Existe ambiente de testes?",
            answer: "Sim, oferecemos um ambiente sandbox completo para desenvolvimento e testes. Não consome dados de produção.",
        },
        {
            question: "Como funciona a integração com RH?",
            answer: "A integração pode ser bidirecional: importamos cadastro de colaboradores do seu sistema de RH e exportamos dados de presença para folha de pagamento.",
        },
        {
            question: "Vocês ajudam na integração?",
            answer: "Sim! Oferecemos suporte técnico para integrações. Planos Enterprise incluem consultoria de integração.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <HeroSection
                badge="Integrações"
                title="Conecte com seus sistemas"
                subtitle="APIs, webhooks, importação/exportação. Integre o GOLF FOX com ERPs, sistemas de RH, ponto eletrônico e muito mais."
                variant="centered"
            />

            {/* Integration Types */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Formas de integrar
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Escolha a forma que melhor se adapta ao seu cenário
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {integrationTypes.map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">{type.description}</p>
                                    <ul className="space-y-2">
                                        {type.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pre-built Integrations */}
            <section className="py-16 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6"
                        >
                            <Plug className="w-8 h-8 text-teal-500" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-4"
                        >
                            Integrações prontas
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400"
                        >
                            Conectores pré-construídos para sistemas populares
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {preBuiltIntegrations.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-900 border border-gray-800"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    {category.category}
                                </h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-400 mt-8"
                    >
                        Não encontrou seu sistema? Entre em contato. Desenvolvemos conectores personalizados.
                    </motion.p>
                </div>
            </section>

            {/* Documentation CTA */}
            <section className="py-16 bg-teal-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Documentação da API</h3>
                                <p className="text-teal-100">OpenAPI 3.0 com exemplos e sandbox</p>
                            </div>
                        </div>
                        <Link
                            href="/documentacao"
                            className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
                        >
                            Ver documentação
                            <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <FinalCTA variant="gradient" />
        </>
    );
}
