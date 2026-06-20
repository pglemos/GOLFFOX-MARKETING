"use client";

import React, { useState, useMemo } from "react";

import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface ResourceROICalculatorProps {
    resourceId?: string;
    resourceName?: string;
    className?: string;
    dark?: boolean;
}

// Configurações de cálculo por recurso
const resourceCalculations: Record<string, {
    inputs: Array<{ id: string; label: string; placeholder: string; unit?: string }>;
    calculate: (values: Record<string, number>) => {
        savings: number;
        timeSaved: number;
        roi: number;
        breakdown: Array<{ label: string; value: number; unit: string }>;
    };
}> = {
    'roteirizacao': {
        inputs: [
            { id: 'rotas', label: 'Número de rotas/mês', placeholder: '50', unit: 'rotas' },
            { id: 'km_medio', label: 'Km médio por rota', placeholder: '30', unit: 'km' },
            { id: 'custo_km', label: 'Custo por km', placeholder: '2.50', unit: 'R$' },
        ],
        calculate: (values) => {
            const { rotas, km_medio, custo_km } = values;
            const kmAtual = rotas * km_medio;
            const kmOtimizado = kmAtual * 0.75; // 25% de redução
            const economiaKm = kmAtual - kmOtimizado;
            const economiaMensal = economiaKm * custo_km;
            const economiaAnual = economiaMensal * 12;
            const tempoPlanejamento = rotas * 0.5; // 30min por rota
            const tempoEconomizado = tempoPlanejamento * 0.6; // 60% de redução
            
            return {
                savings: economiaAnual,
                timeSaved: tempoEconomizado * 12, // horas/ano
                roi: (economiaAnual / 50000) * 100, // Assumindo investimento de R$ 50k
                breakdown: [
                    { label: 'Economia em km/mês', value: economiaKm, unit: 'km' },
                    { label: 'Economia mensal', value: economiaMensal, unit: 'R$' },
                    { label: 'Tempo economizado/mês', value: tempoEconomizado, unit: 'horas' },
                ],
            };
        },
    },
    'custos-centro': {
        inputs: [
            { id: 'centros', label: 'Número de centros de custo', placeholder: '20', unit: 'centros' },
            { id: 'custo_mensal', label: 'Custo mensal total', placeholder: '50000', unit: 'R$' },
            { id: 'horas_rateio', label: 'Horas/mês em rateio manual', placeholder: '15', unit: 'horas' },
        ],
        calculate: (values) => {
            const { centros, custo_mensal, horas_rateio } = values;
            const custoHora = 50; // R$ 50/hora
            const economiaTempo = horas_rateio * 0.5; // 50% de redução
            const economiaMensal = economiaTempo * custoHora;
            const economiaAnual = economiaMensal * 12;
            
            return {
                savings: economiaAnual,
                timeSaved: economiaTempo * 12,
                roi: (economiaAnual / 30000) * 100,
                breakdown: [
                    { label: 'Horas economizadas/mês', value: economiaTempo, unit: 'horas' },
                    { label: 'Economia mensal', value: economiaMensal, unit: 'R$' },
                    { label: 'Precisão no rateio', value: 100, unit: '%' },
                ],
            };
        },
    },
    'relatorios-agendados': {
        inputs: [
            { id: 'relatorios', label: 'Número de relatórios/mês', placeholder: '10', unit: 'relatórios' },
            { id: 'tempo_geracao', label: 'Tempo de geração manual', placeholder: '2', unit: 'horas' },
            { id: 'custo_hora', label: 'Custo por hora', placeholder: '50', unit: 'R$' },
        ],
        calculate: (values) => {
            const { relatorios, tempo_geracao, custo_hora } = values;
            const tempoTotal = relatorios * tempo_geracao;
            const economiaTempo = tempoTotal * 0.9; // 90% de redução
            const economiaMensal = economiaTempo * custo_hora;
            const economiaAnual = economiaMensal * 12;
            
            return {
                savings: economiaAnual,
                timeSaved: economiaTempo * 12,
                roi: (economiaAnual / 20000) * 100,
                breakdown: [
                    { label: 'Horas economizadas/mês', value: economiaTempo, unit: 'horas' },
                    { label: 'Economia mensal', value: economiaMensal, unit: 'R$' },
                    { label: 'Precisão nos dados', value: 100, unit: '%' },
                ],
            };
        },
    },
};

export function ResourceROICalculator({
    resourceId = 'roteirizacao',
    resourceName = 'Roteirização',
    className,
    dark = false,
}: ResourceROICalculatorProps) {
    const calculation = resourceCalculations[resourceId] || resourceCalculations['roteirizacao'];
    const [values, setValues] = useState<Record<string, number>>(() => {
        const initial: Record<string, number> = {};
        calculation.inputs.forEach(input => {
            initial[input.id] = 0;
        });
        return initial;
    });

    const results = useMemo(() => {
        const hasAllValues = calculation.inputs.every(input => values[input.id] > 0);
        if (!hasAllValues) return null;
        return calculation.calculate(values);
    }, [values, calculation]);

    const handleInputChange = (id: string, value: string) => {
        const numValue = parseFloat(value) || 0;
        setValues(prev => ({ ...prev, [id]: numValue }));
    };

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
                            Calcule sua economia com {resourceName}
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
                            Veja quanto você pode economizar usando este recurso
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
                                {calculation.inputs.map((input) => (
                                    <div key={input.id}>
                                        <label
                                            className={cn(
                                                "block text-sm font-medium mb-2",
                                                dark ? "text-gray-300" : "text-gray-700"
                                            )}
                                        >
                                            {input.label}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={values[input.id] || ''}
                                                onChange={(e) => handleInputChange(input.id, e.target.value)}
                                                placeholder={input.placeholder}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                    dark
                                                        ? "bg-gray-800 border-gray-700 text-white"
                                                        : "bg-white border-gray-300 text-gray-900"
                                                )}
                                            />
                                            {input.unit && (
                                                <span
                                                    className={cn(
                                                        "absolute right-4 top-1/2 -translate-y-1/2 text-sm",
                                                        dark ? "text-gray-400" : "text-gray-500"
                                                    )}
                                                >
                                                    {input.unit}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {results ? (
                                <>
                                    {/* Savings */}
                                    <div
                                        className={cn(
                                            "p-6 rounded-2xl border-2",
                                            dark
                                                ? "bg-green-500/10 border-green-500/30"
                                                : "bg-green-50 border-green-200"
                                        )}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <DollarSign
                                                size={24}
                                                className={dark ? "text-green-400" : "text-green-600"}
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
                                        <div className="text-4xl font-bold text-green-600 mb-1">
                                            R$ {results.savings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Economia mensal: R$ {(results.savings / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </div>
                                    </div>

                                    {/* Time Saved */}
                                    <div
                                        className={cn(
                                            "p-6 rounded-2xl border-2",
                                            dark
                                                ? "bg-blue-500/10 border-blue-500/30"
                                                : "bg-blue-50 border-blue-200"
                                        )}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
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
                                                Tempo Economizado
                                            </h4>
                                        </div>
                                        <div className="text-3xl font-bold text-blue-600 mb-1">
                                            {results.timeSaved.toFixed(0)} horas/ano
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {((results.timeSaved / 12) / 160).toFixed(1)} meses de trabalho
                                        </div>
                                    </div>

                                    {/* ROI */}
                                    <div
                                        className={cn(
                                            "p-6 rounded-2xl border-2",
                                            dark
                                                ? "bg-orange-500/10 border-orange-500/30"
                                                : "bg-orange-50 border-orange-200"
                                        )}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <TrendingUp
                                                size={24}
                                                className={dark ? "text-orange-400" : "text-orange-600"}
                                            />
                                            <h4
                                                className={cn(
                                                    "text-lg font-semibold",
                                                    dark ? "text-white" : "text-gray-900"
                                                )}
                                            >
                                                ROI Estimado
                                            </h4>
                                        </div>
                                        <div className="text-3xl font-bold text-orange-600 mb-1">
                                            {results.roi.toFixed(0)}%
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Retorno sobre investimento no primeiro ano
                                        </div>
                                    </div>

                                    {/* Breakdown */}
                                    <div
                                        className={cn(
                                            "p-6 rounded-2xl border-2",
                                            dark
                                                ? "bg-gray-900 border-gray-800"
                                                : "bg-gray-50 border-gray-200"
                                        )}
                                    >
                                        <h4
                                            className={cn(
                                                "text-lg font-semibold mb-4",
                                                dark ? "text-white" : "text-gray-900"
                                            )}
                                        >
                                            Detalhamento
                                        </h4>
                                        <div className="space-y-2">
                                            {results.breakdown.map((item, index) => (
                                                <div key={index} className="flex justify-between text-sm">
                                                    <span className={dark ? "text-gray-400" : "text-gray-600"}>
                                                        {item.label}:
                                                    </span>
                                                    <span className={cn("font-semibold", dark ? "text-white" : "text-gray-900")}>
                                                        {typeof item.value === 'number' && item.value % 1 !== 0
                                                            ? item.value.toFixed(2)
                                                            : item.value.toLocaleString('pt-BR')} {item.unit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div
                                    className={cn(
                                        "p-6 rounded-2xl border-2 text-center",
                                        dark
                                            ? "bg-gray-900 border-gray-800"
                                            : "bg-gray-50 border-gray-200"
                                    )}
                                >
                                    <AlertCircle
                                        size={48}
                                        className={cn("mx-auto mb-4", dark ? "text-gray-600" : "text-gray-400")}
                                    />
                                    <p className={cn("text-sm", dark ? "text-gray-400" : "text-gray-600")}>
                                        Preencha os campos ao lado para ver os resultados
                                    </p>
                                </div>
                            )}
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
                        * Cálculos são estimativas baseadas em médias do mercado. Valores reais podem variar conforme sua operação específica.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
