"use client";

import { motion } from "framer-motion";

import { aggregatedMetrics } from "@/content/marketing/como-funciona";

export function AggregatedMetrics() {
    return (
        <section className="py-16 lg:py-24 bg-orange-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-white mb-4"
                    >
                        Impacto consolidado
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-orange-100"
                    >
                        Resultados agregados de nossos clientes
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {aggregatedMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                {metric.value}
                            </div>
                            <div className="text-sm font-medium text-orange-100">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
