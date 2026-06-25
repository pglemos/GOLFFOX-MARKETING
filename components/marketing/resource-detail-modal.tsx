"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, CheckCircle, TrendingUp, FileText, ArrowRight } from "lucide-react";

interface ResourceDetailModalProps {
    resource: {
        id: string;
        title: string;
        description: string;
        benefits?: string[];
        metrics?: string[];
        examples?: string[];
        screenshot?: {
            src: string;
            alt: string;
            title: string;
            description: string;
        };
        video?: string | null;
        documentation?: string;
        isPremium?: boolean;
        usageStats?: { percentage: number; label: string };
        relatedResources?: string[];
        profiles?: string[];
    };
    relatedResources?: Array<{
        id: string;
        title: string;
        description: string;
    }>;
    isOpen: boolean;
    onClose: () => void;
    onNavigateToRelated?: (resourceId: string) => void;
}

export function ResourceDetailModal({
    resource,
    relatedResources = [],
    isOpen,
    onClose,
    onNavigateToRelated,
}: ResourceDetailModalProps) {
    // Trava o scroll da página enquanto o modal está aberto. O elemento que rola
    // é o <html> (documentElement), então travamos ele — travar só o body não basta.
    useEffect(() => {
        if (!isOpen) return;
        const html = document.documentElement;
        const body = document.body;
        const prevHtmlOverflow = html.style.overflow;
        const prevBodyOverflow = body.style.overflow;
        const prevPaddingRight = body.style.paddingRight;

        // Compensa a largura da barra de rolagem para o layout não "pular".
        const scrollbarWidth = window.innerWidth - html.clientWidth;
        if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";

        return () => {
            html.style.overflow = prevHtmlOverflow;
            body.style.overflow = prevBodyOverflow;
            body.style.paddingRight = prevPaddingRight;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
                    />

                    {/* Modal — clicar no espaço vazio (fora do card) fecha */}
                    <div
                        onClick={onClose}
                        className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto overscroll-contain p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                {resource.title}
                                            </h2>
                                            {resource.isPremium && (
                                                <span className="px-2 py-1 rounded text-xs font-semibold bg-brand/10 text-brand">
                                                    Premium
                                                </span>
                                            )}
                                            {resource.usageStats && (
                                                <span className="rounded-full border border-[#D6EEE0] bg-[#EAF7F0] px-2.5 py-1 text-xs font-semibold text-[#1A8F52]">
                                                    {resource.usageStats.label}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600">{resource.description}</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
                                    >
                                        <X size={20} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6 scrollbar-thin">
                                {/* Screenshot */}
                                {resource.screenshot && (
                                    <div className="mb-6 overflow-hidden rounded-xl border border-[#E7EDF3]">
                                        <div className="relative h-64 w-full bg-gray-100">
                                            <Image
                                                src={resource.screenshot.src}
                                                alt={resource.screenshot.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                                            />
                                        </div>
                                        <div className="bg-[#F8FAFC] p-4">
                                            <h3 className="mb-1 font-bold text-[#0B2440]">
                                                {resource.screenshot.title}
                                            </h3>
                                            <p className="text-sm text-[#52647A]">
                                                {resource.screenshot.description}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Benefits */}
                                    {resource.benefits && resource.benefits.length > 0 && (
                                        <div>
                                            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#0B2440]">
                                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7F0] text-[#1A8F52]">
                                                    <CheckCircle size={16} aria-hidden="true" />
                                                </span>
                                                Benefícios
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {resource.benefits.map((benefit, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 rounded-xl border border-[#D6EEE0] bg-[#EAF7F0] px-4 py-3 text-sm text-[#1F3147]"
                                                    >
                                                        <CheckCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1A8F52]" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Metrics */}
                                    {resource.metrics && resource.metrics.length > 0 && (
                                        <div>
                                            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#0B2440]">
                                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF0E6] text-brand">
                                                    <TrendingUp size={16} aria-hidden="true" />
                                                </span>
                                                Métricas
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {resource.metrics.map((metric, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 rounded-xl border border-[#FFD9BF] bg-[#FFF7F0] px-4 py-3 text-sm text-[#2A3D52]"
                                                    >
                                                        <TrendingUp size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                                                        <span>{metric}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Examples */}
                                {resource.examples && resource.examples.length > 0 && (
                                    <div className="mt-6">
                                        <h3 className="mb-4 text-lg font-bold text-[#0B2440]">
                                            Exemplos de uso
                                        </h3>
                                        <div className="space-y-2.5">
                                            {resource.examples.map((example, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3 rounded-xl border border-[#E7EDF3] bg-[#F8FAFC] p-4 text-sm text-[#2A3D52]"
                                                >
                                                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B2440] text-[11px] font-bold text-white">
                                                        {index + 1}
                                                    </span>
                                                    <span>{example}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {resource.documentation && (
                                        <Link
                                            href={resource.documentation}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
                                        >
                                            <FileText size={16} />
                                            Documentação
                                            <ExternalLink size={14} />
                                        </Link>
                                    )}
                                    {resource.video && (
                                        <a
                                            href={resource.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/10 hover:bg-brand/20 text-brand text-sm font-medium transition-colors"
                                        >
                                            <Play size={16} />
                                            Ver vídeo tutorial
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>

                                {/* Related Resources */}
                                {relatedResources.length > 0 && (
                                    <div className="mt-6 pt-6 border-t border-[#E7EDF3]">
                                        <h3 className="mb-4 text-lg font-bold text-[#0B2440]">
                                            Recursos relacionados
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {relatedResources.map((related) => (
                                                <button
                                                    key={related.id}
                                                    onClick={() => {
                                                        if (onNavigateToRelated) {
                                                            onNavigateToRelated(related.id);
                                                        }
                                                        onClose();
                                                    }}
                                                    className="group rounded-xl border border-[#E7EDF3] bg-white p-4 text-left shadow-[0_6px_18px_rgba(11,36,64,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFD9BF] hover:shadow-[0_14px_34px_rgba(11,36,64,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                                >
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div>
                                                            <h4 className="font-bold text-[#0B2440] group-hover:text-brand">
                                                                {related.title}
                                                            </h4>
                                                            <p className="mt-1 text-xs text-[#52647A]">
                                                                {related.description}
                                                            </p>
                                                        </div>
                                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F7FA] text-[#52647A] transition-colors group-hover:bg-[#FFF0E6] group-hover:text-brand">
                                                            <ArrowRight size={16} aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
