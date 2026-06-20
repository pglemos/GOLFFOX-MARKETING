"use client";

import { motion } from "framer-motion";

import { clientLogos } from "@/content/marketing/como-funciona";

import { getIcon } from "./utils";

export function ClientLogos() {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Empresas que confiam na GOLF FOX
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                    {clientLogos.map((client, index) => {
                        const Icon = getIcon(client.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg"
                            >
                                <Icon className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">{client.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
