"use client";

import { motion } from "framer-motion";

import { impactMetrics } from "@/content/marketing/como-funciona";

import { getIcon } from "./utils";

export function ImpactMetrics() {
    return (
        <section className="py-12 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {impactMetrics.map((metric, index) => {
                        const Icon = getIcon(metric.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-2">
                                    <Icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {metric.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
