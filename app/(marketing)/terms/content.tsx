"use client";

import React from "react";

import { motion } from "framer-motion";
import { Scale, FileCheck, Gavel, AlertCircle } from "lucide-react";

import { HeroSection, FinalCTA } from "@/components/marketing";

export default function TermsContent() {
    const sections = [
        {
            icon: Scale,
            title: "1. Licenciamento Enterprise",
            content: "A licença de uso é concedida em caráter intransferível e revogável. O acesso aos módulos de inteligência artificial é monitorado para garantir a integridade da rede neural."
        },
        {
            icon: FileCheck,
            title: "2. SLA e Disponibilidade",
            content: "Comprometemo-nos com um uptime de 99.9% para operações críticas. Manutenções programadas não contabilizam para o cálculo de disponibilidade, e créditos de serviço são aplicáveis conforme contrato Enterprise."
        },
        {
            icon: Gavel,
            title: "3. Limites de Uso",
            content: "O volume de requisições de API e processamento de dados é balizado pelo plano contratado. O sistema prevê o escalonamento elástico de recursos mediante solicitação formal."
        },
        {
            icon: Gavel,
            title: "4. Propriedade Intelectual",
            content: "Todos os algoritmos de roteamento, interfaces \"Apex\" e estruturas de dados modulares são propriedade exclusiva do ecossistema GOLF FOX, sendo vedada qualquer tentativa de engenharia reversa."
        }
    ];

    return (
        <>
            <HeroSection
                badge="Acordo de Licenciamento"
                title="Termos de Uso Elite"
                subtitle="Ao acessar o ambiente logístico GOLF FOX, sua organização adere aos protocolos operacionais de nossa infraestrutura."
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
                            className="p-8 rounded-2xl bg-orange-50 border border-orange-100 flex items-start gap-6"
                        >
                            <div className="shrink-0 text-orange-600 mt-1">
                                <AlertCircle size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wide text-orange-800 mb-2">Aviso Legal</h4>
                                <p className="text-orange-700 leading-relaxed">
                                    O uso indevido da plataforma ou a violação de integridade dos dados resultará na suspensão imediata da instância organizacional, sem prejuízo de medidas cíveis e criminais.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA
                title="Operação segura e transparente"
                subtitle="Consulte nossos termos completos no portal do cliente."
                variant="gradient"
            />
        </>
    );
}
