"use client";

import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Radio, UserCheck, Smartphone, BarChart3 } from "lucide-react";
import { Building2, Truck, Satellite } from "lucide-react";

import { trackProfileNav } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

// ============================================================
// Pillars Component (5 Pilares)
// ============================================================

const pillarIcons = {
    Shield,
    Radio,
    UserCheck,
    Smartphone,
    BarChart3,
};

interface PillarsProps {
    title?: string;
    subtitle?: string;
    pillars: Array<{
        title: string;
        description: string;
        icon: keyof typeof pillarIcons;
    }>;
    className?: string;
    dark?: boolean;
}

export function Pillars({
    title = "Os 5 pilares do GOLF FOX",
    subtitle = "Uma plataforma completa para toda a operação",
    pillars,
    className,
    dark = true,
}: PillarsProps) {
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

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {pillars.map((pillar, index) => {
                        const Icon = pillarIcons[pillar.icon] || Shield;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    "relative p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 group",
                                    dark
                                        ? "bg-gray-900 border-gray-800 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5"
                                        : "bg-gray-50 border-gray-100 hover:border-orange-200 hover:shadow-xl"
                                )}
                            >
                                {/* Icon */}
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors",
                                        dark
                                            ? "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20"
                                            : "bg-orange-50 text-orange-600 group-hover:bg-orange-100"
                                    )}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3
                                    className={cn(
                                        "text-lg font-semibold mb-2",
                                        dark ? "text-white" : "text-gray-900"
                                    )}
                                >
                                    {pillar.title}
                                </h3>
                                <p
                                    className={cn(
                                        "text-sm leading-relaxed",
                                        dark ? "text-gray-400" : "text-gray-600"
                                    )}
                                >
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ============================================================
// Profile Tabs Component (Para quem é)
// ============================================================


const profileIcons = {
    Building2,
    Truck,
    Satellite,
};

interface ProfileTabsProps {
    title?: string;
    subtitle?: string;
    profiles: Array<{
        name: string;
        description: string;
        href: string;
        icon: keyof typeof profileIcons;
    }>;
    className?: string;
    dark?: boolean;
}

export function ProfileTabs({
    title = "Para quem é o GOLF FOX",
    subtitle = "Soluções específicas para cada perfil",
    profiles,
    className,
    dark = false,
}: ProfileTabsProps) {
    const handleProfileClick = (profile: string) => {
        const profileKey = profile.toLowerCase().replace('para ', '') as 'empresa' | 'transportadora' | 'torre';
        trackProfileNav(profileKey);
    };

    return (
        <section
            className={cn(
                "py-16 lg:py-24",
                dark ? "bg-gray-900" : "bg-gray-50",
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

                {/* Profile Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {profiles.map((profile, index) => {
                        const Icon = profileIcons[profile.icon] || Building2;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <Link
                                    href={profile.href}
                                    onClick={() => handleProfileClick(profile.name)}
                                    className={cn(
                                        "block p-8 rounded-2xl border transition-all hover:-translate-y-1 group h-full",
                                        dark
                                            ? "bg-gray-800 border-gray-700 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
                                            : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl"
                                    )}
                                >
                                    {/* Icon */}
                                    <div
                                        className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                                            dark
                                                ? "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20"
                                                : "bg-orange-50 text-orange-600 group-hover:bg-orange-100"
                                        )}
                                    >
                                        <Icon size={28} />
                                    </div>

                                    <h3
                                        className={cn(
                                            "text-xl font-semibold mb-3",
                                            dark ? "text-white" : "text-gray-900"
                                        )}
                                    >
                                        {profile.name}
                                    </h3>
                                    <p
                                        className={cn(
                                            "text-base leading-relaxed mb-6",
                                            dark ? "text-gray-400" : "text-gray-600"
                                        )}
                                    >
                                        {profile.description}
                                    </p>

                                    <span
                                        className={cn(
                                            "inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                                            dark
                                                ? "text-orange-400 group-hover:text-orange-300"
                                                : "text-orange-600 group-hover:text-orange-700"
                                        )}
                                    >
                                        Saiba mais
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-0.5 transition-transform"
                                        />
                                    </span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
