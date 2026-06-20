"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { Quote, CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    metrics?: Array<{ value: string; label: string }>;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'dark';
    className?: string;
}

export function TestimonialsSection({
    testimonials,
    title = "Resultados reais de clientes",
    subtitle = "Veja o que empresas como a sua conseguiram",
    variant = 'default',
    className,
}: TestimonialsSectionProps) {
    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                variant === 'dark' ? "bg-gray-950" : "bg-white",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-3xl lg:text-4xl font-bold mb-4",
                            variant === 'dark' ? "text-white" : "text-gray-900"
                        )}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={cn(
                            "text-lg",
                            variant === 'dark' ? "text-gray-400" : "text-gray-600"
                        )}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "p-6 rounded-2xl border relative",
                                variant === 'dark'
                                    ? "bg-gray-900 border-gray-800"
                                    : "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                            )}
                        >
                            {/* Quote Icon */}
                            <Quote
                                className={cn(
                                    "w-8 h-8 mb-4",
                                    variant === 'dark' ? "text-orange-400/30" : "text-orange-200"
                                )}
                            />

                            {/* Quote */}
                            <blockquote className="mb-6">
                                <p
                                    className={cn(
                                        "text-base leading-relaxed italic",
                                        variant === 'dark' ? "text-gray-300" : "text-gray-700"
                                    )}
                                >
                            &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3 mb-4">
                                {testimonial.avatar ? (
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0",
                                            variant === 'dark'
                                                ? "bg-orange-500/20 text-orange-400"
                                                : "bg-orange-100 text-orange-600"
                                        )}
                                    >
                                        {testimonial.author[0]}
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <div
                                        className={cn(
                                            "font-semibold text-sm",
                                            variant === 'dark' ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        {testimonial.author}
                                    </div>
                                    <div
                                        className={cn(
                                            "text-xs",
                                            variant === 'dark' ? "text-gray-400" : "text-gray-500"
                                        )}
                                    >
                                        {testimonial.role}
                                    </div>
                                    <div
                                        className={cn(
                                            "text-xs font-medium",
                                            variant === 'dark' ? "text-gray-500" : "text-gray-600"
                                        )}
                                    >
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>

                            {/* Metrics */}
                            {testimonial.metrics && testimonial.metrics.length > 0 && (
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <div className="grid grid-cols-3 gap-2">
                                        {testimonial.metrics.map((metric, i) => (
                                            <div key={i} className="text-center">
                                                <div
                                                    className={cn(
                                                        "text-lg font-bold",
                                                        variant === 'dark' ? "text-orange-400" : "text-orange-600"
                                                    )}
                                                >
                                                    {metric.value}
                                                </div>
                                                <div
                                                    className={cn(
                                                        "text-xs",
                                                        variant === 'dark' ? "text-gray-400" : "text-gray-500"
                                                    )}
                                                >
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
