"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText } from "lucide-react";

import { HeroSection, FinalCTA } from "@/components/marketing";

export default function PrivacidadeContent() {
    const sections = [
        {
            icon: Eye,
            title: "1. Coleta de Telemetria",
            content: "Coletamos estritamente os dados telemétricos necessários para a orquestração logística. Nenhuma informação pessoal sensível é retida fora dos protocolos de segurança bancária."
        },
        {
            icon: Lock,
            title: "2. Criptografia",
            content: "Todos os dados em repouso e em trânsito são protegidos por algoritmos de encriptação AES-256 e protocolos TLS 1.3 de última geração."
        },
        {
            icon: Shield,
            title: "3. Direitos LGPD",
            content: "Garantimos total transparência em conformidade com a Lei Geral de Proteção de Dados (LGPD). Sua organização detém o controle soberano sobre a portabilidade e exclusão dos registros históricos."
        }
    ];

    return (
        <>
            <HeroSection
                badge="Segurança & Dados"
                title="Política de Privacidade"
                subtitle="A arquitetura GOLF FOX opera em conformidade absoluta com padrões internacionais de proteção de dados."
                variant="centered"
            />

            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <FileText className="text-orange-600" size={24} />
                                <span className="font-bold text-gray-900">DPO Compliance</span>
                            </div>
                            <p className="text-gray-600">
                                Para solicitações técnicas de privacidade ou auditorias de conformidade, entre em contato via <span className="font-semibold text-gray-900">dpo@golffox.com</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA
                title="Sua privacidade é nossa prioridade"
                subtitle="Operamos com transparência total e conformidade rigorosa."
                variant="gradient"
            />
        </>
    );
}
