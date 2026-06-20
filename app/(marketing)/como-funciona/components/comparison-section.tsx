"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function ComparisonSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
        >
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Antes vs Depois</h3>
                <p className="text-gray-600">Veja a transformação na sua operação</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Antes */}
                <div className="p-6 rounded-2xl bg-red-50 border-2 border-red-200">
                    <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">❌</span> Antes da GOLF FOX
                    </h4>
                    <ul className="space-y-2 text-sm text-red-800">
                        <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>Planilhas Excel manuais (15-20 horas/semana)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>Sem visibilidade em tempo real</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>Reclamações constantes no RH</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>Custos ocultos e sem controle</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>Risco trabalhista por falta de auditoria</span>
                        </li>
                    </ul>
                </div>

                {/* Depois */}
                <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-200">
                    <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">✅</span> Depois da GOLF FOX
                    </h4>
                    <ul className="space-y-2 text-sm text-green-800">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>Automação completa (0 horas manuais)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>Monitoramento em tempo real 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>Redução de 40% em reclamações</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>Economia de 30% em custos operacionais</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>Auditoria completa e compliance total</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ROI Summary */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                <div className="text-center">
                    <h4 className="text-xl font-bold text-orange-900 mb-2">ROI Médio</h4>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                            <div className="text-3xl font-bold text-orange-600">30%</div>
                            <div className="text-sm text-orange-800">Redução de custos</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">15h</div>
                            <div className="text-sm text-orange-800">Economia/semana</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">3-6</div>
                            <div className="text-sm text-orange-800">Meses para ROI</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
