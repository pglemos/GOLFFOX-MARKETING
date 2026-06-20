import Link from "next/link";

import { ExternalLink, Code, FileText, Video } from "lucide-react";

import { COMPANY_INFO } from "@/lib/constants/company-info";
import { generatePageMetadata } from "@/lib/seo/metadata";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Documentação",
    description:
        "Documentação técnica do GOLF FOX. API Reference, guias de integração, webhooks e exemplos de código.",
    path: "/documentacao",
});

export default function DocumentacaoPage() {
    const docs = [
        {
            icon: Code,
            title: "API Reference",
            description: "Documentação completa da API REST com OpenAPI 3.0.",
            href: "#", // Em breve
            available: false,
        },
        {
            icon: FileText,
            title: "Guias de Integração",
            description: "Passo a passo para integrar com sistemas de RH, ERPs e mais.",
            href: "#",
            available: false,
        },
        {
            icon: Video,
            title: "Vídeos e Tutoriais",
            description: "Aprenda a usar a plataforma com vídeos curtos.",
            href: "#",
            available: false,
        },
    ];

    return (
        <section className="min-h-[70vh] bg-gray-50 py-16 lg:py-24 px-4">
            <div className="container mx-auto max-w-4xl pt-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Documentação
                    </h1>
                    <p className="text-lg text-gray-600">
                        Recursos técnicos para desenvolvedores e integradores.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {docs.map((doc, index) => {
                        const Icon = doc.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center mb-4">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {doc.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                                {doc.available ? (
                                    <Link
                                        href={doc.href}
                                        className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
                                    >
                                        Acessar
                                        <ExternalLink size={14} />
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                                        Em breve
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-8 rounded-2xl bg-gray-900 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Precisa de ajuda técnica?
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Nossa equipe de suporte técnico pode ajudar com integrações e customizações.
                    </p>
                    <a
                        href={`mailto:${COMPANY_INFO.emails.support}`}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                        Falar com suporte técnico
                    </a>
                </div>
            </div>
        </section>
    );
}
