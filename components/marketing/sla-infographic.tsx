"use client";

import React from "react";

import { motion } from "framer-motion";
import { Activity, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface SLAInfographicProps {
    title?: string;
    subtitle?: string;
    className?: string;
    dark?: boolean;
    uptime?: number; // 99.9
    availabilityDays?: number; // 30
}

export function SLAInfographic({
    title = "Nossos números de disponibilidade",
    subtitle = "Métricas reais de SLA e performance",
    className,
    dark = false,
    uptime = 99.9,
    availabilityDays = 30,
}: SLAInfographicProps) {
    // Calcular downtime permitido
    const hoursPerMonth = availabilityDays * 24;
    const downtimeAllowed = hoursPerMonth * (100 - uptime) / 100;
    const downtimeMinutes = Math.round(downtimeAllowed * 60);

    // Dados para gráfico de uptime (últimos 30 dias)
  const uptimeData = Array.from({ length: availabilityDays }, (_, i) => ({
    day: i + 1,
    value: uptime + (((i % 5) - 2) * 0.025), // Variação pequena e determinística
  }));

    // Comparação com benchmarks
    const benchmarks = [
        { label: "GOLF FOX", value: 99.9, color: "green" },
        { label: "Média do mercado", value: 99.5, color: "gray" },
        { label: "Concorrentes", value: 99.0, color: "orange" },
    ];

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-white",
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Uptime Circular Progress */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "p-8 rounded-2xl border-2",
                            dark
                                ? "bg-gray-900 border-gray-800"
                                : "bg-gray-50 border-gray-200"
                        )}
                    >
                        <div className="text-center mb-6">
                            <Activity
                                size={48}
                                className={cn(
                                    "mx-auto mb-4",
                                    dark ? "text-orange-400" : "text-orange-600"
                                )}
                            />
                            <h3
                                className={cn(
                                    "text-xl font-bold mb-2",
                                    dark ? "text-white" : "text-gray-900"
                                )}
                            >
                                Uptime Garantido
                            </h3>
                        </div>

                        {/* Circular Progress */}
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke={dark ? "#374151" : "#E5E7EB"}
                                    strokeWidth="16"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke={dark ? "#F97316" : "#F97316"}
                                    strokeWidth="16"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 88}`}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                                    whileInView={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - uptime / 100) }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div
                                        className={cn(
                                            "text-4xl font-bold mb-1",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        {uptime}%
                                    </div>
                                    <div
                                        className={cn(
                                            "text-sm",
                                            dark ? "text-gray-400" : "text-gray-600"
                                        )}
                                    >
                                        Disponibilidade
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                    Downtime permitido/mês:
                                </span>
                                <span className={cn("font-semibold", dark ? "text-white" : "text-gray-900")}>
                                    {downtimeMinutes} minutos
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                    Horas operacionais/mês:
                                </span>
                                <span className={cn("font-semibold", dark ? "text-white" : "text-gray-900")}>
                                    {Math.round(hoursPerMonth * uptime / 100)}h
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Comparison and Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Comparison */}
                        <div
                            className={cn(
                                "p-6 rounded-2xl border-2",
                                dark
                                    ? "bg-gray-900 border-gray-800"
                                    : "bg-gray-50 border-gray-200"
                            )}
                        >
                            <h3
                                className={cn(
                                    "text-lg font-bold mb-4",
                                    dark ? "text-white" : "text-gray-900"
                                )}
                            >
                                Comparação com o mercado
                            </h3>
                            <div className="space-y-3">
                                {benchmarks.map((benchmark, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span
                                                className={cn(
                                                    "text-sm font-medium",
                                                    dark ? "text-gray-300" : "text-gray-700"
                                                )}
                                            >
                                                {benchmark.label}
                                            </span>
                                            <span
                                                className={cn(
                                                    "text-sm font-bold",
                                                    dark ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {benchmark.value}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${benchmark.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                                className={cn(
                                                    "h-full rounded-full",
                                                    benchmark.color === "green"
                                                        ? "bg-green-500"
                                                        : benchmark.color === "orange"
                                                            ? "bg-orange-500"
                                                            : "bg-gray-400"
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <div
                            className={cn(
                                "p-6 rounded-2xl border-2",
                                dark
                                    ? "bg-gray-900 border-gray-800"
                                    : "bg-gray-50 border-gray-200"
                            )}
                        >
                            <h3
                                className={cn(
                                    "text-lg font-bold mb-4",
                                    dark ? "text-white" : "text-gray-900"
                                )}
                            >
                                Métricas chave
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: CheckCircle, label: "Incidentes resolvidos", value: "100%", color: "green" },
                                    { icon: TrendingUp, label: "Tendência", value: "Estável", color: "blue" },
                                    { icon: Activity, label: "Tempo médio de resposta", value: "< 2s", color: "orange" },
                                    { icon: AlertCircle, label: "Alertas críticos", value: "0", color: "teal" },
                                ].map((metric, index) => {
                                    const Icon = metric.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={cn(
                                                "p-3 rounded-lg",
                                                dark ? "bg-gray-800" : "bg-white border border-gray-200"
                                            )}
                                        >
                                            <Icon
                                                size={20}
                                                className={cn(
                                                    "mb-2",
                                                    dark ? "text-gray-400" : "text-gray-600"
                                                )}
                                            />
                                            <div
                                                className={cn(
                                                    "text-lg font-bold mb-1",
                                                    dark ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                {metric.value}
                                            </div>
                                            <div
                                                className={cn(
                                                    "text-xs",
                                                    dark ? "text-gray-400" : "text-gray-600"
                                                )}
                                            >
                                                {metric.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
