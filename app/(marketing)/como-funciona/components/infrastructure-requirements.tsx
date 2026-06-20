"use client";

import { motion } from "framer-motion";
import { Smartphone, Truck, Zap } from "lucide-react";

export function InfrastructureRequirements() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        O que você precisa para rodar
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Infraestrutura leve e sem necessidade de hardware proprietário (BYOD)
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 border-2 border-gray-100 rounded-2xl bg-gray-50"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Smartphone className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Passageiros</h3>
                        <p className="text-gray-600 mb-4 text-sm px-4">
                            Qualquer smartphone Android (8+) ou iOS (12+) para o app.
                        </p>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            Opcional: Crachá NFC
                        </span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 border-2 border-orange-100 rounded-2xl bg-orange-50"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Truck className="w-8 h-8 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Motoristas</h3>
                        <p className="text-gray-600 mb-4 text-sm px-4">
                            Smartphone Android básico (R$ 800+) com GPS e pacote de dados.
                        </p>
                        <div className="flex flex-col gap-2 items-center">
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                Funciona Offline
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 border-2 border-gray-100 rounded-2xl bg-gray-50"
                    >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Zap className="w-8 h-8 text-teal-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Conectividade</h3>
                        <p className="text-gray-600 mb-4 text-sm px-4">
                            Sincronização automática quando houver sinal 4G/WiFi.
                        </p>
                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                            Consumo baixo de dados
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
