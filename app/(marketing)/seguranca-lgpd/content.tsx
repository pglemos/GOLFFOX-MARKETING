"use client";

import { MotionConfig, motion } from "framer-motion";
import {
    CheckCircle,
    Award,
    FileLock,
    Shield,
    Lock,
    FileSearch,
    Server,
} from "lucide-react";

import { AppWindowCard } from "@/components/marketing/app-window-card";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { FinalCTA } from "@/components/marketing";

import { SegurancaHero } from "./seguranca-hero";

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
            q: "A GOLF FOX atende à LGPD?",
            a: "Sim. Implementamos todos os controles exigidos pela Lei Geral de Proteção de Dados, garantindo o ciclo completo de vida do dado com segurança e transparência.",
        },
        {
            q: "Onde os dados são armazenados?",
            a: "Utilizamos infraestrutura AWS (Amazon Web Services) no Brasil. Isso garante menor latência e total conformidade com a soberania de dados nacional.",
        },
        {
            q: "Como funciona o audit log?",
            a: "Cada clique ou alteração gera uma evidência digital imutável. Registramos o ID do usuário, o IP, o timestamp preciso e o estado anterior/posterior do dado.",
        },
        {
            q: "Qual o nível de disponibilidade (SLA)?",
            a: "Garantimos 99.9% de uptime contratual, suportado por uma arquitetura multizona com auto-scaling e failover automático.",
        },
    ];

    return (
        <MotionConfig reducedMotion="user">
            {/* Hero */}
            <SegurancaHero />

            {/* Pillars */}
            <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
                <div className="gf-aurora-light" aria-hidden="true" />
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <AppWindowCard
                                    icon={pillar.icon}
                                    title={pillar.title}
                                    description={pillar.description}
                                    label={`0${index + 1} · Segurança`}
                                />
                            </motion.div>
                        ))}
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
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <AppWindowCard
                                    icon={cert.icon}
                                    title={cert.title}
                                    description={cert.description}
                                    stat={cert.status}
                                    label="Compliance"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LGPD */}
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
                                className="text-lg text-gray-400"
                            >
                                A GOLF FOX implementa todos os controles exigidos pela LGPD para garantir a proteção dos dados pessoais dos seus colaboradores e parceiros.
                            </motion.p>
                        </div>

                        <motion.ul
                            role="list"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {lgpdItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-900 border border-gray-800"
                                >
                                    <CheckCircle size={18} aria-hidden="true" className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-300">{item}</span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FaqTwoColumn
                title="Perguntas frequentes"
                description="Tire suas dúvidas sobre segurança, privacidade e conformidade da plataforma."
                items={faqs}
            />

            {/* Final CTA */}
            <FinalCTA variant="dark" />
        </MotionConfig>
    );
}
