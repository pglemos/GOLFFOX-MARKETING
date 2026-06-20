"use client";

import React from "react";

import { motion } from "framer-motion";
import { FileText, Settings, Play, ArrowRight, CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProcessStep {
    number: number;
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
}

interface ProcessDiagramProps {
    steps?: ProcessStep[];
    title?: string;
    subtitle?: string;
    className?: string;
    dark?: boolean;
}

const defaultSteps: ProcessStep[] = [
    {
        number: 1,
        title: "Diagnóstico",
        description: "Análise da operação atual",
        icon: FileText,
        color: "blue",
    },
    {
        number: 2,
        title: "Implantação",
        description: "Configuração e treinamento",
        icon: Settings,
        color: "orange",
    },
    {
        number: 3,
        title: "Operação",
        description: "Monitoramento e governança",
        icon: Play,
        color: "green",
    },
];

export function ProcessDiagram({
    steps = defaultSteps,
    title = "Processo completo",
    subtitle = "Do diagnóstico à operação em 3 etapas",
    className,
    dark = false,
}: ProcessDiagramProps) {
    const colorClasses = {
        blue: {
            bg: "bg-blue-500",
            light: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-200",
        },
        orange: {
            bg: "bg-orange-500",
            light: "bg-orange-50",
            text: "text-orange-600",
            border: "border-orange-200",
        },
        green: {
            bg: "bg-green-500",
            light: "bg-green-50",
            text: "text-green-600",
            border: "border-green-200",
        },
    };

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-gray-50",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                <div className="hidden lg:block max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Connection Line */}
                        <div
                            className={cn(
                                "absolute top-16 left-0 right-0 h-1",
                                dark ? "bg-gray-800" : "bg-gray-200"
                            )}
                        />

                        {/* Steps */}
                        <div className="relative grid grid-cols-3 gap-8">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const colors = colorClasses[step.color as keyof typeof colorClasses];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Step Card */}
                                        <div className="text-center">
                                            {/* Icon Circle */}
                                            <div className="relative mb-6">
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
                                                {/* Step Number */}
                                                <div
                                                    className={cn(
                                                        "absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                                                        dark ? "bg-gray-900 border-2 border-white" : "bg-white border-2 border-gray-200",
                                                        colors.text
                                                    )}
                                                >
                                                    {step.number}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3
                                                className={cn(
                                                    "text-xl font-bold mb-2",
                                                    dark ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className={cn(
                                                    "text-base",
                                                    dark ? "text-gray-400" : "text-gray-600"
                                                )}
                                            >
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute top-16 -right-4 z-10">
                                                <ArrowRight
                                                    size={32}
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
                        <div className="space-y-12">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const colors = colorClasses[step.color as keyof typeof colorClasses];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
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
                                            {/* Step Number */}
                                            <div
                                                className={cn(
                                                    "absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs",
                                                    dark ? "bg-gray-900 border border-white" : "bg-white border border-gray-200",
                                                    colors.text
                                                )}
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3
                                            className={cn(
                                                "text-lg font-bold mb-1",
                                                dark ? "text-white" : "text-gray-900"
                                            )}
                                        >
                                            {step.title}
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
