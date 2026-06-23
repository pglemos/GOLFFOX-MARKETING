"use client";

import React, { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle, Loader2 } from "lucide-react";

import { ctas } from "@/content/marketing";
import { trackDemoClick, trackFormSubmit } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
    title?: string;
    subtitle?: string;
    showForm?: boolean;
    className?: string;
    variant?: 'default' | 'gradient' | 'dark';
}

export function FinalCTA({
    title = "Pronto para começar?",
    subtitle = "Agende uma demonstração gratuita e descubra como a GOLF FOX pode transformar sua operação de fretamento corporativo.",
    showForm = false,
    className,
    variant = 'default',
    }: FinalCTAProps) {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        setFormError('');

        let response: Response;

        try {
            response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    origem: 'final-cta',
                    metadata: {
                        component: 'FinalCTA',
                    },
                }),
            });
        } catch {
            setFormError('Não foi possível enviar seus dados agora. Tente novamente em instantes.');
            setFormState('idle');
            return;
        }

        if (!response.ok) {
            setFormError('Não foi possível enviar seus dados agora. Tente novamente em instantes.');
            setFormState('idle');
            return;
        }

        trackFormSubmit('final-cta');
        setFormState('success');
    };

    const handleDemoClick = () => {
        trackDemoClick('footer');
    };

    const bgClasses = {
        default: 'bg-gray-50',
        gradient: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600',
        dark: 'bg-gray-950',
    };

    const textClasses = {
        default: { title: 'text-gray-900', subtitle: 'text-gray-600' },
        gradient: { title: 'text-white', subtitle: 'text-white/80' },
        dark: { title: 'text-white', subtitle: 'text-gray-400' },
    };

    return (
        <section
            className={cn(
                "py-20 lg:py-24 relative overflow-hidden",
                bgClasses[variant],
                className
            )}
        >
            {/* Decorative elements */}
            {variant === 'gradient' && (
                <>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </>
            )}
            {variant === 'dark' && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]" />
            )}

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Content */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "text-3xl lg:text-5xl font-bold mb-6",
                            textClasses[variant].title
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
                            "text-lg lg:text-xl mb-10 max-w-2xl mx-auto",
                            textClasses[variant].subtitle
                        )}
                    >
                        {subtitle}
                    </motion.p>

                    {/* Form or CTAs */}
                    {showForm ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="max-w-xl mx-auto"
                        >
                            {formState === 'success' ? (
                                <div className={cn(
                                    "p-8 rounded-2xl",
                                    variant === 'gradient' ? 'bg-white/10 backdrop-blur' : 'bg-white shadow-xl'
                                )}>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className={cn(
                                            "text-xl font-semibold",
                                            variant === 'gradient' ? 'text-white' : 'text-gray-900'
                                        )}>
                                            Recebemos sua solicitação!
                                        </h3>
                                        <p className={cn(
                                            "text-center",
                                            variant === 'gradient' ? 'text-white/80' : 'text-gray-600'
                                        )}>
                                            Nossa equipe entrará em contato em até 24 horas para agendar sua demonstração.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className={cn(
                                        "p-8 rounded-2xl space-y-4",
                                        variant === 'gradient' ? 'bg-white/10 backdrop-blur' : 'bg-white shadow-xl'
                                    )}
                                >
                                    {formError ? (
                                        <p className={cn(
                                            "rounded-xl px-4 py-3 text-sm",
                                            variant === 'gradient'
                                                ? 'bg-white/10 text-white'
                                                : 'bg-red-50 text-red-700'
                                        )}>
                                            {formError}
                                        </p>
                                    ) : null}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                variant === 'gradient'
                                                    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                                            )}
                                        />
                                        <input
                                            type="email"
                                            placeholder="E-mail corporativo"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                variant === 'gradient'
                                                    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                                            )}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Empresa"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                variant === 'gradient'
                                                    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                                            )}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Telefone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                variant === 'gradient'
                                                    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                                            )}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className={cn(
                                            "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all",
                                            variant === 'gradient'
                                                ? 'bg-white text-orange-600 hover:bg-white/90'
                                                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25'
                                        )}
                                    >
                                        {formState === 'loading' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Agendar demonstração
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                href={ctas.primary.href}
                                onClick={handleDemoClick}
                                className={cn(
                                    "group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all",
                                    variant === 'gradient'
                                        ? 'bg-white text-orange-600 hover:bg-white/90 shadow-xl'
                                        : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25'
                                )}
                            >
                                {ctas.primary.text}
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </Link>

                            <Link
                                href={ctas.secondary.href}
                                className={cn(
                                    "inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all border",
                                    variant === 'gradient'
                                        ? 'text-white border-white/30 hover:bg-white/10'
                                        : variant === 'dark'
                                            ? 'text-white border-white/20 hover:bg-white/5'
                                            : 'text-gray-700 border-gray-200 hover:bg-gray-100'
                                )}
                            >
                                {ctas.secondary.text}
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
