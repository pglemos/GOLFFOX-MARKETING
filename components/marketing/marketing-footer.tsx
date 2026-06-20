"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin } from "lucide-react";

import { navigation, COMPANY_INFO } from "@/content/marketing";

export function MarketingFooter() {

    return (
        <footer className="bg-gray-950 text-white">
            {/* Links Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Logo & Info */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/icons/golf-fox-logo.png"
                                    alt="GOLF FOX"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                GOLF FOX
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Gestão completa do fretamento corporativo. Planejamento,
                            check-in/out, tempo real, custos, auditoria e relatórios.
                        </p>

                        {/* Contato */}
                        <div className="space-y-3">
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Phone size={16} />
                                {COMPANY_INFO.phone}
                            </a>
                            <a
                                href={`mailto:${COMPANY_INFO.email}`}
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail size={16} />
                                {COMPANY_INFO.email}
                            </a>
                            <div className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                <span>
                                    {COMPANY_INFO.address.street}
                                    <br />
                                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Produto */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Produto
                        </h4>
                        <ul className="space-y-3">
                            {navigation.footer.produto.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Plataforma */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Plataforma
                        </h4>
                        <ul className="space-y-3">
                            {navigation.footer.plataforma.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Suporte
                        </h4>
                        <ul className="space-y-3">
                            {navigation.footer.suporte.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {navigation.footer.legal.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-500 text-center sm:text-left">
                            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os
                            direitos reservados.
                            <br className="sm:hidden" />
                            <span className="hidden sm:inline"> · </span>
                            CNPJ: {COMPANY_INFO.cnpj}
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/status"
                                className="text-xs text-gray-500 hover:text-white transition-colors"
                            >
                                Status do Sistema
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
