import { generatePageMetadata } from "@/lib/seo/metadata";

import { CasesContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Cases de Sucesso",
    description:
        "Veja como empresas e transportadoras transformaram sua operação com o GOLF FOX. Cases reais com resultados comprovados.",
    path: "/cases",
    keywords: [
        "cases",
        "casos de sucesso",
        "clientes",
        "resultados",
        "fretamento corporativo",
    ],
});

export default function Page() {
    return <CasesContent />;
}
