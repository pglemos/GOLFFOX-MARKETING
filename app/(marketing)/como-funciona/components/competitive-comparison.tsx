"use client";

import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export function CompetitiveComparison() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Por que a GOLF FOX?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Compare com outras formas de gestão de fretamento
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Planilhas Excel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
                    >
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">Planilhas Excel</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                15-20h/semana de trabalho manual
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Sem visibilidade em tempo real
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Erros humanos frequentes
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Sem auditoria digital
                            </li>
                        </ul>
                    </motion.div>

                    {/* Rastreador GPS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
                    >
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">Rastreador GPS Simples</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Apenas rastreamento de veículos
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Sem gestão de passageiros
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Sem otimização de rotas
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                Sem integração com RH
                            </li>
                        </ul>
                    </motion.div>

                    {/* GOLF FOX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl border-2 border-orange-500 bg-orange-50 relative"
                    >
                        <span className="absolute -top-3 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                            RECOMENDADO
                        </span>
                        <h3 className="font-bold text-orange-900 mb-4 text-lg">GOLF FOX</h3>
                        <ul className="space-y-3 text-sm text-orange-800">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                Automação completa
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                Check-in digital auditável
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                Otimização de rotas com IA
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                Governança e compliance total
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
