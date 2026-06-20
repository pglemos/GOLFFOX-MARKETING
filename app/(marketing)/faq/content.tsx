"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

import { FinalCTA } from "@/components/marketing";
import { faqGlobal } from "@/content/marketing";
import { trackEvent } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

const faqCategories = [
    { id: "all", name: "Todas" },
    { id: "geral", name: "Geral" },
    { id: "implantacao", name: "Implantação" },
    { id: "operacao", name: "Operação" },
    { id: "seguranca", name: "Segurança" },
    { id: "planos", name: "Planos" },
    { id: "integracao", name: "Integração" },
];

export function FAQContent() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFaqs = faqGlobal.filter((faq) => {
        const matchesCategory =
            selectedCategory === "all" || faq.category === selectedCategory;
        const matchesSearch =
            searchQuery === "" ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const handleToggle = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(isOpening ? index : null);

        if (isOpening) {
            trackEvent({
                event: "faq_expand",
                properties: {
                    question: filteredFaqs[index].question,
                    category: filteredFaqs[index].category,
                },
            });
        }
    };

    return (
        <>
            {/* Header */}
            <section className="py-20 lg:py-24 bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6"
                        >
                            <HelpCircle className="w-8 h-8 text-orange-500" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold text-white mb-6"
                        >
                            Perguntas frequentes
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-400 mb-8"
                        >
                            Tire suas dúvidas sobre a plataforma GOLF FOX
                        </motion.p>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative max-w-md mx-auto"
                        >
                            <Search
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Buscar pergunta..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Categories & FAQs */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {faqCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    selectedCategory === category.id
                                        ? "bg-gray-900 text-white"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                )}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="max-w-3xl mx-auto">
                        {filteredFaqs.length > 0 ? (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => handleToggle(index)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="text-base font-medium text-gray-900 pr-4">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                size={20}
                                                className={cn(
                                                    "flex-shrink-0 text-gray-400 transition-transform",
                                                    openIndex === index && "rotate-180"
                                                )}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-gray-500 text-lg">
                                    Nenhuma pergunta encontrada.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setSearchQuery("");
                                    }}
                                    className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
                                >
                                    Limpar filtros
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="max-w-xl mx-auto mt-16 text-center">
                        <p className="text-gray-600 mb-4">
                            Não encontrou o que procurava?
                        </p>
                        <a
                            href="/demo"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            Agendar demonstração
                        </a>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA variant="dark" />
        </>
    );
}
