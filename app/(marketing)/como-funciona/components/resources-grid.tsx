"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { resources } from "@/content/marketing/como-funciona";
import { trackEvent } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

import { getIcon } from "./utils";

export function ResourcesGrid() {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Recursos para você começar
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Materiais gratuitos para facilitar sua preparação
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {resources.map((resource, index) => {
                        const Icon = getIcon(resource.icon);
                        const colorClasses = {
                            blue: {
                                bg: "bg-blue-50",
                                icon: "text-blue-600",
                                border: "border-blue-200",
                            },
                            green: {
                                bg: "bg-green-50",
                                icon: "text-green-600",
                                border: "border-green-200",
                            },
                            orange: {
                                bg: "bg-orange-50",
                                icon: "text-orange-600",
                                border: "border-orange-200",
                            },
                            teal: {
                                bg: "bg-teal-50",
                                icon: "text-teal-600",
                                border: "border-teal-200",
                            },
                        };
                        const colors = colorClasses[resource.color as keyof typeof colorClasses];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "p-6 rounded-2xl border-2 bg-white hover:shadow-lg transition-all cursor-pointer group",
                                    colors.border
                                )}
                            >
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colors.bg)}>
                                    <Icon size={24} className={colors.icon} />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                        {resource.type}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                                <Link
                                    href={resource.download}
                                    onClick={() => trackEvent({
                                        event: 'resource_view',
                                        properties: {
                                            resource_type: resource.type,
                                            resource_title: resource.title,
                                        },
                                        location: 'section'
                                    })}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all"
                                >
                                    Solicitar acesso
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Link para página de recursos */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-600 mt-8"
                >
                    Quer conhecer todos os recursos?{" "}
                    <Link href="/recursos" className="text-orange-600 font-medium hover:text-orange-700">
                        Ver catálogo completo
                    </Link>
                </motion.p>
            </div>
        </section>
    );
}
