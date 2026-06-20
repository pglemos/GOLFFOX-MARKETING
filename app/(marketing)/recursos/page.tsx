import { resources } from "@/content/marketing";
import { generatePageMetadata } from "@/lib/seo/metadata";

import { RecursosContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Recursos GOLF FOX - 24+ Funcionalidades para Fretamento Corporativo",
    description:
        "Descubra 24+ recursos da plataforma GOLF FOX: roteirização inteligente, rastreamento em tempo real, check-in QR/NFC, gestão de frota, custos por centro, audit log, dashboards e muito mais. Economia de até 30% em custos.",
    path: "/recursos",
    keywords: [
        "recursos fretamento corporativo",
        "funcionalidades transporte colaboradores",
        "roteirização inteligente",
        "rastreamento tempo real",
        "check-in QR Code NFC",
        "gestão de frota veículos",
        "custos por centro de custo",
        "audit log rastreabilidade",
        "dashboards operacionais",
        "relatórios automáticos",
        "conformidade LGPD",
        "gestão de motoristas",
        "manutenção preventiva",
        "alertas de atraso",
        "mapa tempo real",
        "presença auditável",
        "notificações push",
        "DRE operacional",
        "exportação dados",
    ],
    ogImage: "/og/recursos.png",
});

// Schema.org ItemList para lista de recursos
const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recursos da Plataforma GOLF FOX",
    description: "Lista completa de funcionalidades e recursos da plataforma GOLF FOX para fretamento corporativo",
    numberOfItems: resources.length,
    itemListElement: resources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "SoftwareApplication",
            name: resource.title,
            description: resource.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
        },
    })),
};

// Schema.org SoftwareApplication para a plataforma
const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GOLF FOX",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "BRL",
        description: "Solicite uma demonstração gratuita",
    },
    featureList: resources.map((r) => r.title).join(", "),
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150",
    },
};

export default function Page() {
    return (
        <>
            {/* Schema.org ItemList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListSchema),
                }}
            />
            {/* Schema.org SoftwareApplication */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareApplicationSchema),
                }}
            />
            <RecursosContent />
        </>
    );
}
