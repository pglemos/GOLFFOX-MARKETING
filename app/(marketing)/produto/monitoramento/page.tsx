import { generatePageMetadata } from "@/lib/seo/metadata";

import { MonitoramentoContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Monitoramento",
    description:
        "Monitore rotas e veículos em tempo real. Acompanhe cada trajeto ao vivo, com alertas de atraso e desvio, em um único painel.",
    path: "/produto/monitoramento",
    keywords: [
        "monitoramento de transporte",
        "rastreamento em tempo real",
        "fretamento corporativo",
        "rotas ao vivo",
        "alertas de atraso",
    ],
});

export default function Page() {
    return <MonitoramentoContent />;
}
