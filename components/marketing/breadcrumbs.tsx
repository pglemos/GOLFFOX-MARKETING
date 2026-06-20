"use client";

import React from "react";

import Link from "next/link";

import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `https://golffox.com.br${item.href}`,
        })),
    };

    return (
        <>
            {/* Schema.org BreadcrumbList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* Visual Breadcrumbs */}
            <nav
                className={cn("flex items-center gap-2 text-sm mb-8", className)}
                aria-label="Breadcrumb"
            >
                <ol className="flex items-center gap-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight
                                    size={16}
                                    className="text-gray-400"
                                    aria-hidden="true"
                                />
                            )}
                            {index === items.length - 1 ? (
                                <span className="text-gray-900 font-medium">
                                    {index === 0 && (
                                        <Home
                                            size={16}
                                            className="inline-block mr-1"
                                            aria-hidden="true"
                                        />
                                    )}
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                                >
                                    {index === 0 && (
                                        <Home
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    )}
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
