"use client";

import { motion } from "framer-motion";
import { Building2, Truck, TrendingUp, ShieldCheck } from "lucide-react";

export function RealResults() {
    return (
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Resultados Reais
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Veja o impacto financeiro e operacional em operações reais
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Indústria Farmacêutica</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Redução de 22% no budget</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Em apenas 4 meses de operação, a otimização de rotas e ajuste de ocupação gerou uma economia direta de R$ 1.2M anual no contrato de fretamento de uma fábrica com 2.000 colaboradores.
                        </p>
                        <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg w-fit">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI em 3 meses</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Truck className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Varejo Logístico</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero reclamações trabalhistas</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A implementação do registro de ponto via geofence eliminou as disputas sobre horas *in itinere*. O índice de pontualidade dos turnos subiu de 82% para 98% no primeiro mês.
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-lg w-fit">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Compliance 100%</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
