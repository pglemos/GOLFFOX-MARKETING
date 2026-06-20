"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users, Building2, ArrowRight } from "lucide-react";

import { HeroSection, FinalCTA } from "@/components/marketing";
import { COMPANY_INFO } from "@/content/marketing";

export function SobreContent() {
    const values = [
        {
            icon: Target,
            title: "Foco no cliente",
            description: "Tudo o que fazemos começa com a necessidade do cliente. Ouvimos, entendemos e entregamos.",
        },
        {
            icon: Lightbulb,
            title: "Inovação contínua",
            description: "Buscamos constantemente novas formas de resolver problemas antigos do setor.",
        },
        {
            icon: Heart,
            title: "Transparência",
            description: "Operamos com total transparência. Dados, processos e decisões são claros e auditáveis.",
        },
        {
            icon: Users,
            title: "Parceria",
            description: "Não somos fornecedores, somos parceiros. Crescemos juntos com nossos clientes.",
        },
    ];

    const timeline = [
        {
            year: "2020",
            title: "Fundação",
            description: "GOLF FOX nasce com a missão de digitalizar o fretamento corporativo.",
        },
        {
            year: "2021",
            title: "Primeira versão",
            description: "Lançamento da primeira versão da plataforma com foco em tracking e gestão básica.",
        },
        {
            year: "2022",
            title: "Expansão Modular",
            description: "Adição de módulos de presença, gestão de frota e controle de motoristas.",
        },
        {
            year: "2023",
            title: "Gestão Corporativa",
            description: "Expansão para operações multi-empresa e lançamento dos Portais dedicados.",
        },
        {
            year: "2024",
            title: "Consolidação e Apps",
            description: "Implantação de governança completa e novos apps nativos para iOS/Android.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <HeroSection
                badge="Nossa História"
                title="Transformando o fretamento corporativo"
                subtitle="Nascemos da necessidade de trazer tecnologia, transparência e eficiência para um setor que ainda opera de forma analógica."
                variant="centered"
            />

            {/* Mission */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                            >
                                Nossa missão
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-600 mb-6"
                            >
                                <strong>Digitalizar e otimizar a gestão de fretamento corporativo no Brasil</strong>, conectando empresas, transportadoras, motoristas e passageiros em uma única plataforma.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-600"
                            >
                                Acreditamos que o transporte de colaboradores pode ser <strong>mais eficiente, mais seguro e mais transparente</strong>. É isso que buscamos entregar todos os dias.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
                                    >
                                        <Icon className="w-8 h-8 text-orange-500 mb-3" />
                                        <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Nossa trajetória
                        </motion.h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-12 pb-8"
                                >
                                    {/* Dot */}
                                    <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-orange-500 border-4 border-white" />

                                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                        <span className="text-sm font-semibold text-orange-500">{item.year}</span>
                                        <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-16 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6"
                        >
                            <Building2 className="w-8 h-8 text-orange-500" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-8"
                        >
                            {COMPANY_INFO.fullName}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                        >
                            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                                <span className="text-sm text-gray-400">CNPJ</span>
                                <p className="text-white font-mono">{COMPANY_INFO.cnpj}</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
                                <span className="text-sm text-gray-400">Endereço</span>
                                <p className="text-white">
                                    {COMPANY_INFO.address.street}<br />
                                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}<br />
                                    CEP: {COMPANY_INFO.address.cep}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-8"
                        >
                            <Link
                                href="/demo"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                            >
                                Agendar demonstração
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA variant="gradient" />
        </>
    );
}
