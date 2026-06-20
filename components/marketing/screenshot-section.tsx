"use client";

import React, { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Screenshot {
    src: string;
    alt: string;
    title: string;
    description: string;
    feature?: string;
}

interface ScreenshotSectionProps {
    screenshots: Screenshot[];
    title?: string;
    subtitle?: string;
    columns?: 1 | 2 | 3;
    className?: string;
    dark?: boolean;
}

export function ScreenshotSection({
    screenshots,
    title = "Veja a plataforma em ação",
    subtitle = "Capturas de tela reais dos portais e apps",
    columns = 3,
    className,
    dark = false,
}: ScreenshotSectionProps) {
    const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    };

    return (
        <>
            <section
                className={cn(
                    "py-16 lg:py-24",
                    dark ? "bg-gray-950" : "bg-white",
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

                    {/* Screenshots Grid */}
                    <div className={cn("grid gap-6 max-w-6xl mx-auto", gridCols[columns])}>
                        {screenshots.map((screenshot, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div
                                    className={cn(
                                        "relative aspect-video rounded-2xl overflow-hidden border-2 cursor-pointer transition-all",
                                        dark
                                            ? "border-gray-800 hover:border-orange-500"
                                            : "border-gray-200 hover:border-orange-500",
                                        "hover:shadow-2xl hover:scale-105"
                                    )}
                                    onClick={() => setSelectedScreenshot(index)}
                                >
                                    <Image
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <ZoomIn
                                            size={32}
                                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    {/* Feature Badge */}
                                    {screenshot.feature && (
                                        <div className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                                            {screenshot.feature}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <h3
                                        className={cn(
                                            "font-semibold mb-1",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        {screenshot.title}
                                    </h3>
                                    <p
                                        className={cn(
                                            "text-sm",
                                            dark ? "text-gray-400" : "text-gray-600"
                                        )}
                                    >
                                        {screenshot.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedScreenshot !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedScreenshot(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full max-h-[90vh]"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedScreenshot(null)}
                                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                                aria-label="Fechar"
                            >
                                <X size={32} />
                            </button>

                            {/* Screenshot */}
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-gray-700">
                                <Image
                                    src={screenshots[selectedScreenshot].src}
                                    alt={screenshots[selectedScreenshot].alt}
                                    fill
                                    className="object-contain"
                                    sizes="90vw"
                                />
                            </div>

                            {/* Caption */}
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {screenshots[selectedScreenshot].title}
                                </h3>
                                <p className="text-gray-300">
                                    {screenshots[selectedScreenshot].description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
