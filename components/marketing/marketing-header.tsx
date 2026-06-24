"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import { navigation, ctas } from "@/content/marketing";
import { trackDemoClick } from "@/lib/analytics/track-events";
import { cn } from "@/lib/utils";

export function MarketingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const lightHeaderRoutes = ["/status", "/documentacao"];
    const forceLightHeader = lightHeaderRoutes.includes(pathname ?? "");
    const headerIsLight = isScrolled || forceLightHeader;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

    const handleDemoClick = () => {
        trackDemoClick('header');
    };

    // Toggle dropdown on click
    const toggleDropdown = (key: string) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    // Encontrar item "Produto" que tem submenu
    const produtoItem = navigation.main.find(item => 'submenu' in item && item.submenu);
    const otherItems = navigation.main.filter(item => !('submenu' in item));

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                headerIsLight
                    ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-9 h-9 lg:w-10 lg:h-10"
                        >
                            <Image
                                src="/icons/golf-fox-logo.png"
                                alt="GOLF FOX"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                        <span
                            className={cn(
                                "text-lg lg:text-xl font-bold tracking-tight transition-colors",
                                headerIsLight ? "text-gray-900" : "text-white"
                            )}
                        >
                            GOLF FOX
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
                        {/* Dropdown Produto */}
                        {produtoItem && 'submenu' in produtoItem && (
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown("produto")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => toggleDropdown("produto")}
                                    aria-expanded={activeDropdown === "produto"}
                                    aria-haspopup="true"
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50",
                                        headerIsLight
                                            ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {produtoItem.name}
                                    <ChevronDown
                                        size={16}
                                        className={cn(
                                            "transition-transform duration-200",
                                            activeDropdown === "produto" && "rotate-180"
                                        )}
                                        aria-hidden="true"
                                    />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === "produto" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-2"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[280px]">
                                                {produtoItem.submenu?.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="flex flex-col gap-1 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group focus:outline-none focus:bg-gray-50"
                                                    >
                                                        <span className="text-sm font-semibold text-gray-900 group-hover:text-orange-600">
                                                            {item.name}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {item.description}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Links simples */}
                        {otherItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50",
                                    pathname === item.href
                                        ? headerIsLight
                                            ? "text-orange-600 bg-orange-50"
                                            : "text-white bg-white/10"
                                        : headerIsLight
                                            ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href={ctas.primary.href}
                            onClick={handleDemoClick}
                            className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            {ctas.primary.text}
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-0.5 transition-transform"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                            headerIsLight
                                ? "text-gray-700 hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                        )}
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-6 space-y-6" aria-label="Mobile Navigation">
                            {/* Produto (submenu) */}
                            {produtoItem && 'submenu' in produtoItem && (
                                <div className="space-y-3">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block px-4">
                                        Produto
                                    </span>
                                    {produtoItem.submenu?.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="block text-sm font-semibold text-gray-900">
                                                {item.name}
                                            </span>
                                            <span className="block text-xs text-gray-500 mt-0.5">
                                                {item.description}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Links principais */}
                            <div className="space-y-2">
                                {otherItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                                            pathname === item.href
                                                ? "text-orange-600 bg-orange-50"
                                                : "text-gray-700 hover:bg-gray-50"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* CTAs Mobile */}
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <Link
                                    href={ctas.primary.href}
                                    onClick={handleDemoClick}
                                    className="block text-center px-4 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors shadow-lg shadow-orange-500/25"
                                >
                                    {ctas.primary.text}
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
