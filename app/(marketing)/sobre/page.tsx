import { generatePageMetadata, generateOrganizationSchema } from "@/lib/seo/metadata";

import { SobreContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Sobre a GOLF FOX",
    description:
        "Conheça a história da GOLF FOX, nossa missão, valores e equipe. Transformando a gestão de fretamento corporativo no Brasil.",
    path: "/sobre",
    keywords: [
        "sobre GOLF FOX",
        "história",
        "missão",
        "valores",
        "equipe",
        "fretamento corporativo",
    ],
});

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateOrganizationSchema()),
                }}
            />
            <SobreContent />
        </>
    );
}
