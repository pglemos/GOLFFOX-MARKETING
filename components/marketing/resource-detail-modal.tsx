"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, CheckCircle, TrendingUp, FileText, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

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
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
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
                                                <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700">
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
                                    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200">
                                        <div className="relative w-full h-64 bg-gray-100">
                                            <Image
                                                src={resource.screenshot.src}
                                                alt={resource.screenshot.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                                            />
                                        </div>
                                        <div className="p-4 bg-gray-50">
                                            <h3 className="font-semibold text-gray-900 mb-1">
                                                {resource.screenshot.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {resource.screenshot.description}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Benefits */}
                                    {resource.benefits && resource.benefits.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <CheckCircle size={20} className="text-green-600" />
                                                Benefícios
                                            </h3>
                                            <ul className="space-y-2">
                                                {resource.benefits.map((benefit, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-sm text-gray-700"
                                                    >
                                                        <span className="text-green-500 mt-1 shrink-0">•</span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Metrics */}
                                    {resource.metrics && resource.metrics.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <TrendingUp size={20} className="text-brand" />
                                                Métricas
                                            </h3>
                                            <ul className="space-y-2">
                                                {resource.metrics.map((metric, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-sm text-gray-700"
                                                    >
                                                        <span className="text-brand mt-1 shrink-0">•</span>
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
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            Exemplos de uso
                                        </h3>
                                        <div className="space-y-2">
                                            {resource.examples.map((example, index) => (
                                                <div
                                                    key={index}
                                                    className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm text-gray-700"
                                                >
                                                    {example}
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
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
                                                    className="p-3 rounded-lg border border-border/50 hover:border-brand/30 hover:bg-brand/5 text-left transition-all group"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-brand">
                                                                {related.title}
                                                            </h4>
                                                            <p className="text-xs text-muted-foreground mt-1">
                                                                {related.description}
                                                            </p>
                                                        </div>
                                                        <ArrowRight
                                                            size={16}
                                                            className="text-muted-foreground group-hover:text-brand shrink-0"
                                                        />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer CTA */}
                            <div className="sticky bottom-0 bg-gradient-to-r from-brand/5 to-brand/10 border-t border-brand/20 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Quer ver este recurso em ação?
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            Agende uma demonstração gratuita
                                        </p>
                                    </div>
                                    <Link
                                        href="/demo"
                                        className="px-6 py-2 rounded-lg bg-brand hover:bg-brand-hover text-white font-medium transition-colors"
                                    >
                                        Agendar demo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
