"use client";

import { useId, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

import { cn } from "@/lib/utils";

interface ROICalculatorProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

const brl = (value: number) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export function ROICalculator({
    title = "Calcule seu ROI",
    subtitle = "Veja quanto você pode economizar com a GOLF FOX",
    className,
}: ROICalculatorProps) {
    const ids = useId();
    const [employees, setEmployees] = useState(100);
    const [routes, setRoutes] = useState(10);
    const [currentCost, setCurrentCost] = useState(50000);

    const calc = useMemo(() => {
        const costReduction = currentCost * 0.3;
        const newCost = currentCost - costReduction;
        const timeSavedValue = 15 * 4 * 100; // 15h/sem · 4 · R$100/h
        const monthlySavings = costReduction + timeSavedValue;
        const annualSavings = monthlySavings * 12;
        const monthlyInvestment = employees * 5;
        const annualInvestment = monthlyInvestment * 12;
        const netSavings = annualSavings - annualInvestment;
        const roiPercentage = annualInvestment > 0 ? (netSavings / annualInvestment) * 100 : 0;
        const paybackMonths = monthlySavings > 0 ? annualInvestment / monthlySavings : 0;
        return {
            costReduction, newCost, timeSavedValue, monthlySavings,
            annualSavings, annualInvestment, netSavings, roiPercentage, paybackMonths,
        };
    }, [employees, currentCost]);

    const fields = [
        { id: `${ids}-emp`, label: "Número de colaboradores", value: employees, set: setEmployees, min: 1, max: 10000, step: 1, suffix: "pessoas" },
        { id: `${ids}-routes`, label: "Número de rotas", value: routes, set: setRoutes, min: 1, max: 500, step: 1, suffix: "rotas" },
        { id: `${ids}-cost`, label: "Custo atual mensal", value: currentCost, set: setCurrentCost, min: 1000, max: 10000000, step: 1000, suffix: "R$/mês" },
    ];

    return (
        <section className={cn("bg-white py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E6] text-brand"
                        >
                            <Calculator size={28} aria-hidden="true" />
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-extrabold tracking-[-0.02em] text-[#0B2440] lg:text-4xl"
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-lg text-[#52647A]"
                        >
                            {subtitle}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Inputs */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[20px] border border-[#E7EDF3] bg-white p-7 shadow-[0_18px_50px_rgba(11,36,64,0.10)]"
                        >
                            <h3 className="mb-6 text-lg font-bold text-[#0B2440]">Informe seus dados</h3>
                            <div className="space-y-5">
                                {fields.map((f) => (
                                    <div key={f.id}>
                                        <label htmlFor={f.id} className="mb-2 block text-sm font-semibold text-[#2A3D52]">
                                            {f.label}
                                        </label>
                                        <div className="relative">
                                            <input
                                                id={f.id}
                                                type="number"
                                                inputMode="numeric"
                                                min={f.min}
                                                max={f.max}
                                                step={f.step}
                                                value={f.value}
                                                onChange={(e) => f.set(Number(e.target.value))}
                                                className="w-full rounded-xl border border-[#D8E0E8] bg-white px-4 py-3 pr-24 font-semibold tabular-nums text-[#0B2440] transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                                            />
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#9AA8B8]">
                                                {f.suffix}
                                            </span>
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
                            {/* Hero — economia anual */}
                            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0B2440] to-[#01557E] p-7 text-white shadow-[0_18px_50px_rgba(11,36,64,0.18)]">
                                <p className="text-sm font-medium text-white/70">Economia anual estimada</p>
                                <p className="mt-1 text-4xl font-black tabular-nums tracking-tight text-[#FF8A3D] sm:text-5xl">
                                    R$ {brl(calc.annualSavings)}
                                </p>
                                <p className="mt-2 text-sm text-white/65">
                                    R$ {brl(calc.costReduction)} em custos + R$ {brl(calc.timeSavedValue)} em tempo, por mês
                                    · investimento R$ {brl(calc.annualInvestment)}/ano
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="rounded-2xl border border-[#E7EDF3] bg-white p-4 text-center shadow-[0_10px_30px_rgba(11,36,64,0.06)]">
                                    <div className="text-xl font-extrabold tabular-nums text-[#1A8F52] sm:text-2xl">R$ {brl(calc.monthlySavings)}</div>
                                    <div className="mt-1 text-xs font-medium text-[#7A8AA0]">Economia/mês</div>
                                </div>
                                <div className="rounded-2xl border border-[#E7EDF3] bg-white p-4 text-center shadow-[0_10px_30px_rgba(11,36,64,0.06)]">
                                    <div className="text-xl font-extrabold tabular-nums text-brand sm:text-2xl">{calc.roiPercentage.toFixed(0)}%</div>
                                    <div className="mt-1 text-xs font-medium text-[#7A8AA0]">ROI anual</div>
                                </div>
                                <div className="rounded-2xl border border-[#E7EDF3] bg-white p-4 text-center shadow-[0_10px_30px_rgba(11,36,64,0.06)]">
                                    <div className="text-xl font-extrabold tabular-nums text-[#0B2440] sm:text-2xl">{calc.paybackMonths.toFixed(1)}</div>
                                    <div className="mt-1 text-xs font-medium text-[#7A8AA0]">Meses p/ ROI</div>
                                </div>
                            </div>

                            {/* Resumo */}
                            <div className="rounded-[20px] border border-[#E7EDF3] bg-[#F8FAFC] p-6">
                                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#7A8AA0]">Resumo</h3>
                                <dl className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <dt className="text-[#52647A]">Custo atual</dt>
                                        <dd className="font-semibold tabular-nums text-[#0B2440]">R$ {brl(currentCost)}/mês</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-[#52647A]">Custo com GOLF FOX</dt>
                                        <dd className="font-semibold tabular-nums text-[#0B2440]">R$ {brl(calc.newCost)}/mês</dd>
                                    </div>
                                    <div className="flex justify-between border-t border-[#E7EDF3] pt-2">
                                        <dt className="text-[#52647A]">Economia líquida</dt>
                                        <dd className="font-bold tabular-nums text-[#1A8F52]">R$ {brl(calc.netSavings)}/ano</dd>
                                    </div>
                                </dl>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-6 text-center text-xs text-[#9AA8B8]"
                    >
                        * Cálculos baseados em médias de clientes. Valores podem variar conforme sua operação específica.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
