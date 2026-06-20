import { generatePageMetadata } from "@/lib/seo/metadata";

import { ComoOperamosContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Como operamos - SLA 99.9% e Governança Total",
    description:
        "Descubra como a GOLF FOX garante 99.9% de uptime, monitoramento 24/7, auditoria completa e SLA de suporte. Transparência total com Trust Center e status em tempo real. Resolução de incidentes em < 4 horas.",
    path: "/como-operamos",
    keywords: [
        "SLA fretamento corporativo",
        "uptime 99.9%",
        "monitoramento tempo real transporte",
        "auditoria completa fretamento",
        "governança transporte colaboradores",
        "disponibilidade 24/7",
        "resolução incidentes transporte",
        "compliance LGPD transporte",
        "transparência operação",
        "Trust Center fretamento",
    ],
    ogImage: "/og/como-operamos.png",
});

// Schema.org para Service
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operação e Governança GOLF FOX",
    description: "Serviço de operação, monitoramento e governança para fretamento corporativo com SLA de 99.9% de disponibilidade",
    provider: {
        "@type": "Organization",
        name: "GOLF FOX",
        url: "https://golffox.com.br",
    },
    areaServed: "BR",
    serviceType: "SaaS - Software as a Service",
    offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "BRL",
        description: "Solicite uma demonstração gratuita",
    },
};

export default function Page() {
    return (
        <>
            {/* Schema.org Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <ComoOperamosContent />
        </>
    );
}
