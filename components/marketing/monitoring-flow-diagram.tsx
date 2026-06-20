"use client";

import React from "react";

import { motion } from "framer-motion";
import { Radio, AlertTriangle, CheckCircle, ArrowRight, Database, Server, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";

interface MonitoringFlowDiagramProps {
    title?: string;
    subtitle?: string;
    className?: string;
    dark?: boolean;
}

export function MonitoringFlowDiagram({
    title = "Fluxo de monitoramento contínuo",
    subtitle = "Como garantimos visibilidade e controle em tempo real",
    className,
    dark = false,
}: MonitoringFlowDiagramProps) {
    const steps = [
        {
            icon: Smartphone,
            label: "Apps e GPS",
            description: "Coleta de dados",
            color: "blue",
        },
        {
            icon: Server,
            label: "Plataforma",
            description: "Processamento",
            color: "orange",
        },
        {
            icon: Radio,
            label: "Monitoramento",
            description: "Análise em tempo real",
            color: "green",
        },
        {
            icon: AlertTriangle,
            label: "Alertas",
            description: "Detecção automática",
            color: "red",
        },
        {
            icon: CheckCircle,
            label: "Resolução",
            description: "Ação e registro",
            color: "teal",
        },
    ];

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-gray-50",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-3xl lg:text-4xl font-bold mb-4",
                            dark ? "text-white" : "text-gray-900"
                        )}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={cn(
                            "text-lg",
                            dark ? "text-gray-400" : "text-gray-600"
                        )}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Diagram - Desktop */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Connection Line */}
                        <div
                            className={cn(
                                "absolute top-16 left-0 right-0 h-1",
                                dark ? "bg-gray-800" : "bg-gray-200"
                            )}
                        />

                        {/* Steps */}
                        <div className="relative grid grid-cols-5 gap-4">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const colorClasses = {
                                    blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
                                    orange: { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
                                    green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200" },
                                    red: { bg: "bg-red-500", light: "bg-red-50", text: "text-red-600", border: "border-red-200" },
                                    teal: { bg: "bg-teal-500", light: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
                                };
                                const colors = colorClasses[step.color as keyof typeof colorClasses];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative"
                                    >
                                        {/* Step Card */}
                                        <div className="text-center">
                                            {/* Icon Circle */}
                                            <div className="relative mb-4">
                                                <div
                                                    className={cn(
                                                        "w-32 h-32 rounded-full mx-auto flex items-center justify-center border-4",
                                                        colors.bg,
                                                        dark ? "border-gray-800" : "border-white shadow-lg"
                                                    )}
                                                >
                                                    <Icon
                                                        size={48}
                                                        className="text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3
                                                className={cn(
                                                    "text-lg font-bold mb-1",
                                                    dark ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {step.label}
                                            </h3>
                                            <p
                                                className={cn(
                                                    "text-sm",
                                                    dark ? "text-gray-400" : "text-gray-600"
                                                )}
                                            >
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute top-16 -right-2 z-10">
                                                <ArrowRight
                                                    size={24}
                                                    className={cn(
                                                        dark ? "text-gray-700" : "text-gray-300"
                                                    )}
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Cycle Arrow (from last to first) */}
                        <div className="mt-8 text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
                                    dark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                                )}
                            >
                                <Database
                                    size={20}
                                    className={cn(
                                        dark ? "text-gray-400" : "text-gray-600"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "text-sm font-medium",
                                        dark ? "text-gray-300" : "text-gray-700"
                                    )}
                                >
                                    Dados armazenados e auditados
                                </span>
                                <ArrowRight
                                    size={16}
                                    className={cn(
                                        dark ? "text-gray-500" : "text-gray-400"
                                    )}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Diagram - Mobile */}
                <div className="lg:hidden max-w-md mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div
                            className={cn(
                                "absolute left-8 top-0 bottom-0 w-1",
                                dark ? "bg-gray-800" : "bg-gray-200"
                            )}
                        />

                        {/* Steps */}
                        <div className="space-y-8">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const colorClasses = {
                                    blue: { bg: "bg-blue-500" },
                                    orange: { bg: "bg-orange-500" },
                                    green: { bg: "bg-green-500" },
                                    red: { bg: "bg-red-500" },
                                    teal: { bg: "bg-teal-500" },
                                };
                                const colors = colorClasses[step.color as keyof typeof colorClasses];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative pl-24"
                                    >
                                        {/* Icon Circle */}
                                        <div className="absolute left-0 top-0">
                                            <div
                                                className={cn(
                                                    "w-16 h-16 rounded-full flex items-center justify-center border-4",
                                                    colors.bg,
                                                    dark ? "border-gray-800" : "border-white shadow-lg"
                                                )}
                                            >
                                                <Icon
                                                    size={24}
                                                    className="text-white"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3
                                            className={cn(
                                                "text-base font-bold mb-1",
                                                dark ? "text-white" : "text-gray-900"
                                            )}
                                        >
                                            {step.label}
                                        </h3>
                                        <p
                                            className={cn(
                                                "text-sm",
                                                dark ? "text-gray-400" : "text-gray-600"
                                            )}
                                        >
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
