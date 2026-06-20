"use client";

import React, { useState, useMemo } from "react";

import { motion } from "framer-motion";
import { Calculator, TrendingDown, DollarSign, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

interface ROICalculatorProps {
    title?: string;
    subtitle?: string;
    className?: string;
    dark?: boolean;
}

export function ROICalculator({
    title = "Calcule seu ROI",
    subtitle = "Veja quanto você pode economizar com a GOLF FOX",
    className,
    dark = false,
}: ROICalculatorProps) {
    const [employees, setEmployees] = useState(100);
    const [routes, setRoutes] = useState(10);
    const [currentCost, setCurrentCost] = useState(50000);

    // Cálculos
    const calculations = useMemo(() => {
        // Redução média de custos: 30%
        const costReduction = currentCost * 0.30;
        const newCost = currentCost - costReduction;

        // Economia de tempo: 15 horas/semana = 60 horas/mês = 720 horas/ano
        // Valor da hora de gestão: R$ 100 (estimativa conservadora)
        const timeSavedHours = 15 * 4; // horas/mês
        const timeSavedValue = timeSavedHours * 100; // R$ 100/hora

        // Economia total mensal
        const monthlySavings = costReduction + timeSavedValue;
        const annualSavings = monthlySavings * 12;

        // Investimento estimado (baseado em número de colaboradores)
        // R$ 5 por colaborador/mês para empresas médias
        const monthlyInvestment = employees * 5;
        const annualInvestment = monthlyInvestment * 12;

        // ROI
        const netSavings = annualSavings - annualInvestment;
        const roiPercentage = annualInvestment > 0
            ? ((annualSavings - annualInvestment) / annualInvestment) * 100
            : 0;
        const paybackMonths = monthlyInvestment > 0
            ? annualInvestment / monthlySavings
            : 0;

        return {
            costReduction,
            newCost,
            timeSavedHours,
            timeSavedValue,
            monthlySavings,
            annualSavings,
            monthlyInvestment,
            annualInvestment,
            netSavings,
            roiPercentage,
            paybackMonths,
        };
    }, [employees, routes, currentCost]);

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-white",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center mb-4"
                        >
                            <div
                                className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center",
                                    dark ? "bg-orange-500/20" : "bg-orange-100"
                                )}
                            >
                                <Calculator
                                    size={32}
                                    className={dark ? "text-orange-400" : "text-orange-600"}
                                />
                            </div>
                        </motion.div>
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Inputs */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={cn(
                                "p-6 rounded-2xl border",
                                dark
                                    ? "bg-gray-900 border-gray-800"
                                    : "bg-gray-50 border-gray-200"
                            )}
                        >
                            <h3
                                className={cn(
                                    "text-lg font-semibold mb-6",
                                    dark ? "text-white" : "text-gray-900"
                                )}
                            >
                                Informe seus dados
                            </h3>

                            <div className="space-y-4">
                                {/* Número de Colaboradores */}
                                <div>
                                    <label
                                        className={cn(
                                            "block text-sm font-medium mb-2",
                                            dark ? "text-gray-300" : "text-gray-700"
                                        )}
                                    >
                                        Número de colaboradores
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10000"
                                        value={employees}
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                            dark
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-gray-900"
                                        )}
                                    />
                                </div>

                                {/* Número de Rotas */}
                                <div>
                                    <label
                                        className={cn(
                                            "block text-sm font-medium mb-2",
                                            dark ? "text-gray-300" : "text-gray-700"
                                        )}
                                    >
                                        Número de rotas
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="500"
                                        value={routes}
                                        onChange={(e) => setRoutes(Number(e.target.value))}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                            dark
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-gray-900"
                                        )}
                                    />
                                </div>

                                {/* Custo Atual Mensal */}
                                <div>
                                    <label
                                        className={cn(
                                            "block text-sm font-medium mb-2",
                                            dark ? "text-gray-300" : "text-gray-700"
                                        )}
                                    >
                                        Custo atual mensal (R$)
                                    </label>
                                    <input
                                        type="number"
                                        min="1000"
                                        step="1000"
                                        value={currentCost}
                                        onChange={(e) => setCurrentCost(Number(e.target.value))}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                            dark
                                                ? "bg-gray-800 border-gray-700 text-white"
                                                : "bg-white border-gray-300 text-gray-900"
                                        )}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {/* Economia Mensal */}
                            <div
                                className={cn(
                                    "p-6 rounded-2xl border-2",
                                    dark
                                        ? "bg-green-500/10 border-green-500/30"
                                        : "bg-green-50 border-green-200"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingDown
                                        size={24}
                                        className={dark ? "text-green-400" : "text-green-600"}
                                    />
                                    <h4
                                        className={cn(
                                            "text-lg font-semibold",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        Economia Mensal
                                    </h4>
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-1">
                                    R$ {calculations.monthlySavings.toLocaleString("pt-BR", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    R$ {calculations.costReduction.toLocaleString("pt-BR", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })} em custos + R$ {calculations.timeSavedValue.toLocaleString("pt-BR", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })} em tempo
                                </div>
                            </div>

                            {/* Economia Anual */}
                            <div
                                className={cn(
                                    "p-6 rounded-2xl border-2",
                                    dark
                                        ? "bg-orange-500/10 border-orange-500/30"
                                        : "bg-orange-50 border-orange-200"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <DollarSign
                                        size={24}
                                        className={dark ? "text-orange-400" : "text-orange-600"}
                                    />
                                    <h4
                                        className={cn(
                                            "text-lg font-semibold",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        Economia Anual
                                    </h4>
                                </div>
                                <div className="text-3xl font-bold text-orange-600 mb-1">
                                    R$ {calculations.annualSavings.toLocaleString("pt-BR", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Investimento: R$ {calculations.annualInvestment.toLocaleString("pt-BR", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}/ano
                                </div>
                            </div>

                            {/* ROI e Payback */}
                            <div
                                className={cn(
                                    "p-6 rounded-2xl border-2",
                                    dark
                                        ? "bg-blue-500/10 border-blue-500/30"
                                        : "bg-blue-50 border-blue-200"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock
                                        size={24}
                                        className={dark ? "text-blue-400" : "text-blue-600"}
                                    />
                                    <h4
                                        className={cn(
                                            "text-lg font-semibold",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        Retorno sobre Investimento
                                    </h4>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            {calculations.roiPercentage.toFixed(0)}%
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">
                                            ROI anual
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            {calculations.paybackMonths.toFixed(1)}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">
                                            Meses para ROI
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Resumo */}
                            <div
                                className={cn(
                                    "p-6 rounded-2xl",
                                    dark ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"
                                )}
                            >
                                <h4
                                    className={cn(
                                        "text-sm font-semibold mb-3 uppercase tracking-wide",
                                        dark ? "text-gray-400" : "text-gray-600"
                                    )}
                                >
                                    Resumo
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                            Custo atual:
                                        </span>
                                        <span className={dark ? "text-white" : "text-gray-900"}>
                                            R$ {currentCost.toLocaleString("pt-BR")}/mês
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                            Custo com GOLF FOX:
                                        </span>
                                        <span className={dark ? "text-white" : "text-gray-900"}>
                                            R$ {calculations.newCost.toLocaleString("pt-BR", {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}/mês
                                        </span>
                                    </div>
                                    <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                                        <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                            Economia líquida:
                                        </span>
                                        <span className="font-bold text-green-600">
                                            R$ {calculations.netSavings.toLocaleString("pt-BR", {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}/ano
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Disclaimer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-xs text-center mt-6",
                            dark ? "text-gray-500" : "text-gray-400"
                        )}
                    >
                        * Cálculos baseados em médias de clientes. Valores podem variar conforme sua operação específica.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
