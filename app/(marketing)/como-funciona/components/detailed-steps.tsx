"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileCheck, Settings } from "lucide-react";

import { steps } from "@/content/marketing/como-funciona";
import { trackDemoClick } from "@/lib/analytics/track-events";

import { getIcon } from "./utils";

export function DetailedSteps() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título da seção */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        3 etapas para transformar seu fretamento
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Processo completo em 4 semanas, sem interromper sua operação
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = getIcon(step.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative mb-16 last:mb-0"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="shrink-0">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                                            <span className="text-3xl font-bold text-white">{step.step}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                            {step.duration && (
                                                <span className="px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full">
                                                    {step.duration}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-lg text-gray-600 mb-6">{step.description}</p>

                                        {/* Detalhes principais */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {step.details.map((detail, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-700">
                                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            {/* Entregas */}
                                            {step.deliverables && step.deliverables.length > 0 && (
                                                <div className="p-4 bg-white rounded-lg border border-gray-200">
                                                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                        <FileCheck className="w-4 h-4 text-orange-500" />
                                                        Entregas
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {step.deliverables.map((deliverable, i) => (
                                                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                                <span className="text-orange-500 mt-1">•</span>
                                                                {deliverable}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Tools utilizadas */}
                                            {step.tools && step.tools.length > 0 && (
                                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                                    <h4 className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                                        <Settings className="w-4 h-4 text-blue-500" />
                                                        Tecnologias
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {step.tools.map((tool, i) => (
                                                            <li key={i} className="text-sm text-blue-700 flex items-start gap-2">
                                                                <span className="text-blue-500 mt-1">→</span>
                                                                {tool}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Métricas */}
                                        {step.metrics && step.metrics.length > 0 && (
                                            <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                                                <h4 className="text-sm font-semibold text-orange-900 mb-2 uppercase tracking-wide">
                                                    Resultados Esperados
                                                </h4>
                                                <ul className="space-y-1">
                                                    {step.metrics.map((metric, i) => (
                                                        <li key={i} className="text-sm text-orange-800 flex items-start gap-2">
                                                            <span className="text-orange-600 mt-1">✓</span>
                                                            {metric}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute left-10 top-24 h-16 w-0.5 bg-gradient-to-b from-orange-300 to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Intermediário */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">
                        Quer ver uma demonstração do processo completo?
                    </p>
                    <Link
                        href="/demo"
                        onClick={() => trackDemoClick('section')}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                    >
                        Ver demonstração gratuita
                        <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
