"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { guarantees, secondaryGuarantees } from "@/content/marketing/como-funciona";

import { getIcon } from "./utils";

export function GuaranteesGrid() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Nossas garantias
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Compromisso com sua satisfação e sucesso
                    </motion.p>
                </div>

                {/* Garantias Principais - Destacadas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                    {guarantees.map((guarantee, index) => {
                        const Icon = getIcon(guarantee.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-orange-100 border border-orange-200">
                                        <Icon size={28} className="text-orange-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Garantias Secundárias */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {secondaryGuarantees.map((item, index) => {
                        const Icon = getIcon(item.icon);
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                            >
                                <Icon size={16} className="text-orange-500" />
                                {item.text}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Link para segurança */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <Link href="/seguranca-lgpd" className="text-orange-600 font-medium hover:text-orange-700 hover:underline">
                        Saiba mais sobre nossa segurança e conformidade LGPD →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
