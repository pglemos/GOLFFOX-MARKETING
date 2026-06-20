import { generatePageMetadata } from "@/lib/seo/metadata";

import { PlanosContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Planos",
    description:
        "Conheça o plano GOLF FOX Enterprise. A solução completa para o tamanho da sua operação.",
    path: "/planos",
    keywords: [
        "planos",
        "fretamento corporativo",
        "enterprise",
        "gestão de transporte",
        "rotas inteligentes",
    ],
});

export default function Page() {
    return <PlanosContent />;
}
