"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar, Rocket } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TimelinePhase {
    week: string;
    title: string;
    description: string;
    deliverables?: string[];
    duration?: { min: string; max: string };
    milestones?: string[];
}

interface TimelineSectionProps {
    phases: TimelinePhase[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'dark';
    showVariations?: boolean;
    variations?: {
        small: TimelinePhase[];
        medium: TimelinePhase[];
        large: TimelinePhase[];
    };
    className?: string;
}

export function TimelineSection({
    phases,
    title = "Timeline de implantação",
    subtitle = "Cronograma padrão de 4 semanas",
    variant = 'dark',
    showVariations = false,
    variations,
    className,
}: TimelineSectionProps) {
    const [selectedVariation, setSelectedVariation] = useState<'small' | 'medium' | 'large'>('medium');
    const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

    const currentPhases = showVariations && variations
        ? variations[selectedVariation]
        : phases;

    const getPhaseIcon = (index: number) => {
        const icons = [Calendar, Clock, Rocket, CheckCircle];
        return icons[index % icons.length];
    };

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                variant === 'dark' ? "bg-gray-950" : "bg-white",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-3xl lg:text-4xl font-bold mb-4",
                            variant === 'dark' ? "text-white" : "text-gray-900"
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
                            variant === 'dark' ? "text-gray-400" : "text-gray-600"
                        )}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Variation Selector */}
                {showVariations && variations && (
                    <div className="flex justify-center gap-2 mb-12">
                        {[
                            { key: 'small' as const, label: 'Pequena (1-50)' },
                            { key: 'medium' as const, label: 'Média (51-200)' },
                            { key: 'large' as const, label: 'Grande (200+)' },
                        ].map((variation) => (
                            <button
                                key={variation.key}
                                onClick={() => setSelectedVariation(variation.key)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    selectedVariation === variation.key
                                        ? "bg-orange-500 text-white"
                                        : variant === 'dark'
                                            ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {variation.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Timeline - Desktop Horizontal */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Progress Line */}
                        <div
                            className={cn(
                                "absolute top-12 left-0 right-0 h-1",
                                variant === 'dark' ? "bg-gray-800" : "bg-gray-200"
                            )}
                        />
                        <div
                            className="absolute top-12 left-0 h-1 bg-orange-500 transition-all duration-500"
                            style={{
                                width: `${((selectedPhase !== null ? selectedPhase + 1 : currentPhases.length) / currentPhases.length) * 100}%`,
                            }}
                        />

                        {/* Phases */}
                        <div className="relative grid grid-cols-4 gap-4">
                            {currentPhases.map((phase, index) => {
                                const Icon = getPhaseIcon(index);
                                const isSelected = selectedPhase === index;
                                const isCompleted = selectedPhase !== null && index < selectedPhase;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Phase Card */}
                                        <div
                                            className={cn(
                                                "relative z-10 p-6 rounded-2xl border-2 cursor-pointer transition-all",
                                                isSelected
                                                    ? "border-orange-500 bg-orange-500/10"
                                                    : isCompleted
                                                        ? "border-green-500 bg-green-500/10"
                                                        : variant === 'dark'
                                                            ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                                                            : "bg-white border-gray-200 hover:border-gray-300",
                                                "hover:scale-105"
                                            )}
                                            onClick={() => setSelectedPhase(isSelected ? null : index)}
                                        >
                                            {/* Week Badge */}
                                            <div className="flex items-center justify-center mb-4">
                                                <div
                                                    className={cn(
                                                        "w-12 h-12 rounded-full flex items-center justify-center",
                                                        isSelected || isCompleted
                                                            ? "bg-orange-500"
                                                            : variant === 'dark'
                                                                ? "bg-gray-800"
                                                                : "bg-gray-100"
                                                    )}
                                                >
                                                    <Icon
                                                        size={20}
                                                        className={cn(
                                                            isSelected || isCompleted
                                                                ? "text-white"
                                                                : variant === 'dark'
                                                                    ? "text-gray-400"
                                                                    : "text-gray-600"
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <span
                                                className={cn(
                                                    "text-xs font-semibold uppercase block text-center mb-2",
                                                    variant === 'dark' ? "text-orange-400" : "text-orange-600"
                                                )}
                                            >
                                                {phase.week}
                                            </span>
                                            <h3
                                                className={cn(
                                                    "text-lg font-bold text-center mb-2",
                                                    variant === 'dark' ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {phase.title}
                                            </h3>
                                            <p
                                                className={cn(
                                                    "text-sm text-center mb-3",
                                                    variant === 'dark' ? "text-gray-400" : "text-gray-600"
                                                )}
                                            >
                                                {phase.description}
                                            </p>

                                            {/* Duration */}
                                            {phase.duration && (
                                                <div
                                                    className={cn(
                                                        "text-xs text-center px-2 py-1 rounded",
                                                        variant === 'dark'
                                                            ? "bg-gray-800 text-gray-300"
                                                            : "bg-gray-100 text-gray-600"
                                                    )}
                                                >
                                                    {phase.duration.min} - {phase.duration.max}
                                                </div>
                                            )}

                                            {/* Expand Indicator */}
                                            {(phase.deliverables || phase.milestones) && (
                                                <div className="mt-3 text-center">
                                                    <span
                                                        className={cn(
                                                            "text-xs",
                                                            variant === 'dark' ? "text-gray-500" : "text-gray-400"
                                                        )}
                                                    >
                                                        {isSelected ? "Clique para fechar" : "Clique para detalhes"}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Expanded Details */}
                                        {isSelected && (phase.deliverables || phase.milestones) && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className={cn(
                                                    "mt-4 p-4 rounded-xl",
                                                    variant === 'dark' ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"
                                                )}
                                            >
                                                {phase.deliverables && phase.deliverables.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4
                                                            className={cn(
                                                                "text-sm font-semibold mb-2",
                                                                variant === 'dark' ? "text-white" : "text-gray-900"
                                                            )}
                                                        >
                                                            Entregas:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {phase.deliverables.map((deliverable, i) => (
                                                                <li
                                                                    key={i}
                                                                    className={cn(
                                                                        "text-sm flex items-start gap-2",
                                                                        variant === 'dark' ? "text-gray-300" : "text-gray-600"
                                                                    )}
                                                                >
                                                                    <CheckCircle
                                                                        size={16}
                                                                        className={cn(
                                                                            "mt-0.5 shrink-0",
                                                                            variant === 'dark' ? "text-green-400" : "text-green-600"
                                                                        )}
                                                                    />
                                                                    {deliverable}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {phase.milestones && phase.milestones.length > 0 && (
                                                    <div>
                                                        <h4
                                                            className={cn(
                                                                "text-sm font-semibold mb-2",
                                                                variant === 'dark' ? "text-white" : "text-gray-900"
                                                            )}
                                                        >
                                                            Marcos:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {phase.milestones.map((milestone, i) => (
                                                                <li
                                                                    key={i}
                                                                    className={cn(
                                                                        "text-sm flex items-start gap-2",
                                                                        variant === 'dark' ? "text-gray-300" : "text-gray-600"
                                                                    )}
                                                                >
                                                                    <span className="text-orange-500 mt-0.5">•</span>
                                                                    {milestone}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Timeline - Mobile Vertical */}
                <div className="lg:hidden max-w-2xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div
                            className={cn(
                                "absolute left-6 top-0 bottom-0 w-0.5",
                                variant === 'dark' ? "bg-gray-800" : "bg-gray-200"
                            )}
                        />

                        {/* Phases */}
                        <div className="space-y-8">
                            {currentPhases.map((phase, index) => {
                                const Icon = getPhaseIcon(index);
                                const isSelected = selectedPhase === index;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-16"
                                    >
                                        {/* Phase Dot */}
                                        <div
                                            className={cn(
                                                "absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center border-4",
                                                isSelected
                                                    ? "bg-orange-500 border-orange-500"
                                                    : variant === 'dark'
                                                        ? "bg-gray-900 border-gray-800"
                                                        : "bg-white border-gray-200"
                                            )}
                                        >
                                            <Icon
                                                size={20}
                                                className={cn(
                                                    isSelected
                                                        ? "text-white"
                                                        : variant === 'dark'
                                                            ? "text-gray-400"
                                                            : "text-gray-600"
                                                )}
                                            />
                                        </div>

                                        {/* Phase Card */}
                                        <div
                                            className={cn(
                                                "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                                                isSelected
                                                    ? "border-orange-500 bg-orange-500/10"
                                                    : variant === 'dark'
                                                        ? "bg-gray-900 border-gray-800"
                                                        : "bg-white border-gray-200"
                                            )}
                                            onClick={() => setSelectedPhase(isSelected ? null : index)}
                                        >
                                            <span
                                                className={cn(
                                                    "text-xs font-semibold uppercase block mb-2",
                                                    variant === 'dark' ? "text-orange-400" : "text-orange-600"
                                                )}
                                            >
                                                {phase.week}
                                            </span>
                                            <h3
                                                className={cn(
                                                    "text-lg font-bold mb-2",
                                                    variant === 'dark' ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {phase.title}
                                            </h3>
                                            <p
                                                className={cn(
                                                    "text-sm mb-3",
                                                    variant === 'dark' ? "text-gray-400" : "text-gray-600"
                                                )}
                                            >
                                                {phase.description}
                                            </p>

                                            {/* Expanded Details */}
                                            {isSelected && (phase.deliverables || phase.milestones) && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4"
                                                >
                                                    {phase.deliverables && phase.deliverables.length > 0 && (
                                                        <div>
                                                            <h4
                                                                className={cn(
                                                                    "text-sm font-semibold mb-2",
                                                                    variant === 'dark' ? "text-white" : "text-gray-900"
                                                                )}
                                                            >
                                                                Entregas:
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {phase.deliverables.map((deliverable, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className={cn(
                                                                            "text-sm flex items-start gap-2",
                                                                            variant === 'dark' ? "text-gray-300" : "text-gray-600"
                                                                        )}
                                                                    >
                                                                        <CheckCircle
                                                                            size={16}
                                                                            className={cn(
                                                                                "mt-0.5 shrink-0",
                                                                                variant === 'dark' ? "text-green-400" : "text-green-600"
                                                                            )}
                                                                        />
                                                                        {deliverable}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {phase.milestones && phase.milestones.length > 0 && (
                                                        <div>
                                                            <h4
                                                                className={cn(
                                                                    "text-sm font-semibold mb-2",
                                                                    variant === 'dark' ? "text-white" : "text-gray-900"
                                                                )}
                                                            >
                                                                Marcos:
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {phase.milestones.map((milestone, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className={cn(
                                                                            "text-sm flex items-start gap-2",
                                                                            variant === 'dark' ? "text-gray-300" : "text-gray-600"
                                                                        )}
                                                                    >
                                                                        <span className="text-orange-500 mt-0.5">•</span>
                                                                        {milestone}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </div>
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
