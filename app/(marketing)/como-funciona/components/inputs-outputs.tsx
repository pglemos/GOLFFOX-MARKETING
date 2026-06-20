"use client";

import { motion } from "framer-motion";
import { Upload, Download, CheckCircle } from "lucide-react";

import { inputs, outputs } from "@/content/marketing/como-funciona";

export function InputsOutputs() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <Upload className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">O que você informa</h3>
                </div>
                <div className="space-y-4">
                    {inputs.map((input, index) => (
                        <div key={index} className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                            <div className="flex items-start gap-2 mb-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                <span className="font-medium text-gray-900">{input.item}</span>
                            </div>
                            <div className="ml-3.5 space-y-1 text-sm">
                                <div className="text-gray-700">
                                    <span className="font-semibold">Benefício: </span>
                                    {input.benefit}
                                </div>
                                <div className="text-gray-600">
                                    <span className="font-semibold">Tempo economizado: </span>
                                    {input.timeSaved}
                                </div>
                                <div className="text-gray-600">
                                    <span className="font-semibold">Redução de custos: </span>
                                    {input.costReduction}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <Download className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">O que você recebe</h3>
                </div>
                <div className="space-y-4">
                    {outputs.map((output, index) => (
                        <div key={index} className="p-4 rounded-lg bg-green-50 border border-green-100">
                            <div className="flex items-start gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <span className="font-medium text-gray-900">{output.item}</span>
                            </div>
                            <div className="ml-6 space-y-1 text-sm">
                                <div className="text-gray-700">
                                    <span className="font-semibold">Benefício: </span>
                                    {output.benefit}
                                </div>
                                <div className="text-gray-600">
                                    <span className="font-semibold">Tempo economizado: </span>
                                    {output.timeSaved}
                                </div>
                                <div className="text-gray-600">
                                    <span className="font-semibold">Redução de custos: </span>
                                    {output.costReduction}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
