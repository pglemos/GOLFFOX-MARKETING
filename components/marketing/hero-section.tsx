"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { ctas } from "@/content/marketing";
import { trackDemoClick, trackPropostaClick } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    image?: {
        src: string;
        alt: string;
    };
    video?: string;
    className?: string;
    variant?: 'default' | 'centered' | 'split';
    dark?: boolean;
}

export function HeroSection({
    badge,
    title,
    subtitle,
    primaryCta = ctas.primary,
    secondaryCta = ctas.secondary,
    image,
    video,
    className,
    variant = 'default',
    dark = true,
}: HeroSectionProps) {
    const handlePrimaryClick = () => {
        trackDemoClick('hero');
    };

    const handleSecondaryClick = () => {
        trackPropostaClick('hero');
    };

    return (
        <section
            className={cn(
                "relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden",
                dark ? "bg-gray-950" : "bg-white",
                className
            )}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        dark
                            ? "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]"
                            : "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.08),transparent)]"
                    )}
                />
                <div
                    className={cn(
                        "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]",
                        !dark && "opacity-30"
                    )}
                />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div
                    className={cn(
                        "grid gap-12 lg:gap-16 items-center",
                        variant === 'split' ? "lg:grid-cols-2" : "lg:grid-cols-1",
                        variant === 'centered' && "text-center max-w-4xl mx-auto"
                    )}
                >
                    {/* Content */}
                    <div className={cn(variant === 'centered' && "flex flex-col items-center")}>
                        {/* Badge */}
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <span
                                    className={cn(
                                        "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase",
                                        dark
                                            ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                                            : "bg-orange-50 text-orange-600 border border-orange-100"
                                    )}
                                >
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={cn(
                                "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6",
                                dark ? "text-white" : "text-gray-900"
                            )}
                        >
                            {title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={cn(
                                "text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl",
                                dark ? "text-gray-400" : "text-gray-600",
                                variant === 'centered' && "mx-auto"
                            )}
                        >
                            {subtitle}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className={cn(
                                "flex flex-col sm:flex-row gap-4",
                                variant === 'centered' && "justify-center"
                            )}
                        >
                            <Link
                                href={primaryCta.href}
                                onClick={handlePrimaryClick}
                                className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                            >
                                {primaryCta.text}
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </Link>

                            <Link
                                href={secondaryCta.href}
                                onClick={handleSecondaryClick}
                                className={cn(
                                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all border",
                                    dark
                                        ? "text-white border-white/20 hover:bg-white/5"
                                        : "text-gray-700 border-gray-200 hover:bg-gray-50"
                                )}
                            >
                                {secondaryCta.text}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual (Image or Video) */}
                    {variant === 'split' && (image || video) && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative"
                        >
                            {image && (
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                        priority
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                </div>
                            )}

                            {video && (
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                                    <button className="absolute inset-0 flex items-center justify-center group">
                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play size={32} className="text-white ml-1" />
                                        </div>
                                    </button>
                                </div>
                            )}

                            {/* Decorative elements */}
                            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
                            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={cn(
                        "w-6 h-10 rounded-full border-2 flex justify-center pt-2",
                        dark ? "border-white/20" : "border-gray-300"
                    )}
                >
                    <motion.div
                        animate={{ opacity: [1, 0], y: [0, 12] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={cn(
                            "w-1 h-2 rounded-full",
                            dark ? "bg-white/60" : "bg-gray-400"
                        )}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
