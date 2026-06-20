import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo/metadata";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Status do Sistema",
    description:
        "Verifique o status dos serviços GOLF FOX em tempo real. Histórico de incidentes e manutenções programadas.",
    path: "/status",
});

export default function StatusPage() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 py-16 lg:py-24 px-4">
            <div className="max-w-lg w-full text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Status do Sistema
                </h1>

                <p className="text-gray-600 mb-8">
                    Para verificar o status dos serviços GOLF FOX em tempo real, acesse nossa página de status.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/trust-center/status"
                        className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-colors"
                    >
                        Status Detalhado
                        <ExternalLink size={16} />
                    </Link>

                    <Link
                        href="/trust-center"
                        className="inline-flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 rounded-xl font-semibold transition-colors"
                    >
                        Trust Center
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    Uptime atual: <strong className="text-green-600">99.5%</strong>
                </p>
            </div>
        </section>
    );
}
