"use client";

import React from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SocialProofProps {
    metrics?: Array<{
        value: string;
        label: string;
    }>;
    logos?: Array<{
        name: string;
        logo: string;
    }>;
    title?: string;
    className?: string;
    dark?: boolean;
}

export function SocialProof({
    metrics = [],
    logos = [],
    title = "Empresas que confiam na GOLF FOX",
    className,
    dark = false,
}: SocialProofProps) {
    return (
        <section
            className={cn(
                "py-16 lg:py-24 border-y",
                dark
                    ? "bg-gray-900 border-white/5"
                    : "bg-gray-50 border-gray-100",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Metrics */}
                {metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 mb-16">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className={cn(
                                        "text-4xl lg:text-5xl font-bold mb-2",
                                        dark ? "text-white" : "text-gray-900"
                                    )}
                                >
                                    {metric.value}
                                </div>
                                <div
                                    className={cn(
                                        "text-sm font-medium",
                                        dark ? "text-gray-400" : "text-gray-500"
                                    )}
                                >
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Logos */}
                {logos.length > 0 && (
                    <div className="text-center">
                        <p
                            className={cn(
                                "text-sm font-medium mb-8",
                                dark ? "text-gray-400" : "text-gray-500"
                            )}
                        >
                            {title}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                            {logos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={cn(
                                        "relative h-8 w-24 lg:h-10 lg:w-32 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100",
                                        dark && "invert"
                                    )}
                                >
                                    <img
                                        src={logo.logo}
                                        alt={logo.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

// ============================================================
// Pain Cards Component
// ============================================================

interface PainCardsProps {
    title?: string;
    subtitle?: string;
    pains: Array<{
        title: string;
        description: string;
        icon: string;
    }>;
    className?: string;
    dark?: boolean;
}

export function PainCards({
    title = "As dores do fretamento corporativo",
    subtitle = "Problemas que empresas enfrentam todos os dias",
    pains,
    className,
    dark = false,
}: PainCardsProps) {
    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-white",
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

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative p-6 rounded-2xl border transition-all hover:-translate-y-1",
                                dark
                                    ? "bg-gray-900 border-gray-800 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5"
                                    : "bg-white border-gray-100 hover:border-red-200 hover:shadow-xl"
                            )}
                        >
                            {/* Icon placeholder - substituir por ícones reais */}
                            <div
                                className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                                    dark ? "bg-red-500/10" : "bg-red-50"
                                )}
                            >
                                <span className="text-red-500 text-xl">⚠️</span>
                            </div>

                            <h3
                                className={cn(
                                    "text-lg font-semibold mb-2",
                                    dark ? "text-white" : "text-gray-900"
                                )}
                            >
                                {pain.title}
                            </h3>
                            <p
                                className={cn(
                                    "text-sm leading-relaxed",
                                    dark ? "text-gray-400" : "text-gray-600"
                                )}
                            >
                                {pain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================================
// Steps Component (Como funciona)
// ============================================================

interface StepsProps {
    title?: string;
    subtitle?: string;
    steps: Array<{
        step: number;
        title: string;
        description: string;
    }>;
    className?: string;
    dark?: boolean;
}

export function Steps({
    title = "Como funciona",
    subtitle = "Comece a usar em poucos passos",
    steps,
    className,
    dark = false,
}: StepsProps) {
    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-900" : "bg-gray-50",
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

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "hidden md:block absolute top-10 left-1/2 w-full h-0.5",
                                        dark ? "bg-gray-800" : "bg-gray-200"
                                    )}
                                />
                            )}

                            <div className="relative text-center">
                                {/* Step number */}
                                <div
                                    className={cn(
                                        "relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6",
                                        dark
                                            ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                                            : "bg-orange-50 text-orange-600 border border-orange-100"
                                    )}
                                >
                                    {step.step}
                                </div>

                                <h3
                                    className={cn(
                                        "text-xl font-semibold mb-3",
                                        dark ? "text-white" : "text-gray-900"
                                    )}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className={cn(
                                        "text-base leading-relaxed max-w-sm mx-auto",
                                        dark ? "text-gray-400" : "text-gray-600"
                                    )}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
