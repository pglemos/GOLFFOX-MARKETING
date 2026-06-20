import { generatePageMetadata } from "@/lib/seo/metadata";

import { AppMotoristaContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "App Motorista",
    description:
        "Aplicativo para motoristas de fretamento corporativo. Checklist obrigatório, vistoria fotográfica, navegação por rota, check-in/out de passageiros e botão de pânico.",
    path: "/produto/app-motorista",
    keywords: [
        "app motorista",
        "checklist obrigatório",
        "vistoria veículo",
        "rastreamento motorista",
        "check-in passageiros",
    ],
});

export default function Page() {
    return <AppMotoristaContent />;
}
