import { generatePageMetadata } from "@/lib/seo/metadata";

import { ProdutoContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Produto",
    description:
        "Conheça a plataforma GOLF FOX: Portal Empresa, Portal Transportadora, App Motorista e App Passageiro. Gestão completa do fretamento corporativo em um único ecossistema.",
    path: "/produto",
    keywords: [
        "plataforma fretamento",
        "portal empresa",
        "portal transportadora",
        "app motorista",
        "app passageiro",
        "gestão de frotas",
    ],
});

export default function Page() {
    return <ProdutoContent />;
}
