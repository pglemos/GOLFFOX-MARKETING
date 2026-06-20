"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { trackEvent } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    subtitle?: string;
    faqs: FAQItem[];
    className?: string;
    dark?: boolean;
    columns?: 1 | 2;
}

export function FAQSection({
    title = "Perguntas frequentes",
    subtitle = "Tire suas dúvidas sobre a plataforma",
    faqs,
    className,
    dark = false,
    columns = 1,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(isOpening ? index : null);

        if (isOpening) {
            trackEvent({
                event: 'faq_expand',
                properties: {
                    question: faqs[index].question,
                    index,
                },
            });
        }
    };

    // Dividir FAQs em colunas se necessário
    const faqsCol1 = columns === 2 ? faqs.filter((_, i) => i % 2 === 0) : faqs;
    const faqsCol2 = columns === 2 ? faqs.filter((_, i) => i % 2 !== 0) : [];

    const renderFAQ = (faq: FAQItem, index: number, colOffset = 0) => {
        const actualIndex = colOffset + index;
        const isOpen = openIndex === actualIndex;

        return (
            <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                    "border-b",
                    dark ? "border-gray-800" : "border-gray-100"
                )}
            >
                <button
                    onClick={() => handleToggle(actualIndex)}
                    className={cn(
                        "w-full flex items-center justify-between py-5 text-left transition-colors",
                        dark ? "hover:text-orange-400" : "hover:text-orange-600"
                    )}
                    aria-expanded={isOpen}
                >
                    <span
                        className={cn(
                            "text-base font-medium pr-4",
                            dark ? "text-white" : "text-gray-900"
                        )}
                    >
                        {faq.question}
                    </span>
                    <ChevronDown
                        size={20}
                        className={cn(
                            "flex-shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180",
                            dark ? "text-gray-400" : "text-gray-500"
                        )}
                    />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <p
                                className={cn(
                                    "pb-5 text-base leading-relaxed",
                                    dark ? "text-gray-400" : "text-gray-600"
                                )}
                            >
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-950" : "bg-white",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-3xl lg:text-4xl font-bold mb-4",
                            dark ? "text-white" : "text-gray-900"
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
                            dark ? "text-gray-400" : "text-gray-600"
                        )}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* FAQ Grid */}
                <div
                    className={cn(
                        "max-w-4xl mx-auto",
                        columns === 2 && "grid md:grid-cols-2 gap-x-12"
                    )}
                >
                    <div>{faqsCol1.map((faq, i) => renderFAQ(faq, i, 0))}</div>
                    {columns === 2 && (
                        <div>
                            {faqsCol2.map((faq, i) =>
                                renderFAQ(faq, i, Math.ceil(faqs.length / 2))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
