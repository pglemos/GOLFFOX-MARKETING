"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
    CheckCircle,
    ExternalLink,
    Award,
    FileLock,
    Shield,
    Lock,
    FileSearch,
    Server,
} from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function SegurancaContent() {
    const pillars = [
        {
            icon: Lock,
            title: "Criptografia de Ponta",
            description: "Dados protegidos com AES-256 em repouso e TLS 1.3 em trânsito.",
        },
        {
            icon: FileSearch,
            title: "Audit Log Imutável",
            description: "Rastreabilidade completa: quem, quando, onde e o que foi alterado.",
        },
        {
            icon: Server,
            title: "Infraestrutura Elite",
            description: "Hospedagem AWS em região Brasil (sa-east-1) com alta redundância.",
        },
    ];

    const certifications = [
        {
            icon: Award,
            title: "ISO 27001",
            description: "Alinhamento total com padrões internacionais de Gestão de Segurança da Informação.",
            status: "Compliance"
        },
        {
            icon: Shield,
            title: "PCI-DSS",
            description: "Controles rígidos para processamento de transações e dados sensíveis.",
            status: "Auditado"
        },
        {
            icon: FileLock,
            title: "Auditoria Soc2",
            description: "Processos internos validados por auditorias externas anuais.",
            status: "Vigilância"
        }
    ];

    const lgpdItems = [
        "Política de privacidade clara e acessível",
        "Termo de consentimento para tratamento de dados",
        "Direitos do titular (acesso, correção, exclusão)",
        "Registro de atividades de tratamento",
        "Encarregado de Dados (DPO) designado",
        "Medidas técnicas de proteção de dados",
        "Política de retenção e descarte de dados",
        "Gestão de incidentes de segurança",
    ];

    const faqs = [
        {
            question: "A GOLF FOX atende à LGPD?",
            answer: "Sim. Implementamos todos os controles exigidos pela Lei Geral de Proteção de Dados, garantindo o ciclo completo de vida do dado com segurança e transparência.",
        },
        {
            question: "Onde os dados são armazenados?",
            answer: "Utilizamos infraestrutura AWS (Amazon Web Services) no Brasil. Isso garante menor latência e total conformidade com a soberania de dados nacional.",
        },
        {
            question: "Como funciona o audit log?",
            answer: "Cada clique ou alteração gera uma evidência digital imutável. Registramos o ID do usuário, o IP, o timestamp preciso e o estado anterior/posterior do dado.",
        },
        {
            question: "Qual o nível de disponibilidade (SLA)?",
            answer: "Garantimos 99.9% de uptime contratual, suportado por uma arquitetura multizona com auto-scaling e failover automático.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <HeroSection
                badge="Segurança & Governança"
                title="Seus dados protegidos"
                subtitle="Segurança em camadas, conformidade LGPD, audit log completo e transparência total na operação."
                variant="centered"
            />

            {/* Pillars */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Pilares de segurança
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Proteção em múltiplas camadas para seus dados
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{pillar.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Localização e Certificações */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                        >
                            Padrões Globais de Segurança
                        </motion.h2>
                        <p className="text-gray-600">Referenciais técnicos que norteiam nossa governança e infraestrutura</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm text-center"
                                >
                                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                                    <p className="text-sm text-gray-600 mb-6">{cert.description}</p>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                                        {cert.status}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-16 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-green-500/10 text-green-400 border border-green-500/20 mb-6"
                            >
                                LGPD Conforme
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                            >
                                Conformidade com a Lei Geral de Proteção de Dados
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-400 mb-8"
                            >
                                A GOLF FOX implementa todos os controles exigidos pela LGPD para garantir a proteção dos dados pessoais dos seus colaboradores e parceiros.
                            </motion.p>

                            <Link
                                href="/trust-center"
                                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                            >
                                Acesse o Trust Center
                                <ExternalLink size={16} />
                            </Link>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {lgpdItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-900 border border-gray-800"
                                >
                                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Center CTA */}
            <section className="py-16 bg-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Trust Center</h3>
                                <p className="text-blue-100">Documentação completa de segurança e compliance</p>
                            </div>
                        </div>
                        <Link
                            href="/trust-center"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Acessar Trust Center
                            <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <FinalCTA variant="dark" />
        </>
    );
}
