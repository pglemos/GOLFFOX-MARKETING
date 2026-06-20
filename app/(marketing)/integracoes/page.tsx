import { generatePageMetadata } from "@/lib/seo/metadata";

import { IntegracoesContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Integrações",
    description:
        "Conheça as integrações do GOLF FOX. APIs, webhooks, ERPs, sistemas de RH e mais. Conecte com seus sistemas existentes.",
    path: "/integracoes",
    keywords: [
        "integrações",
        "API",
        "webhook",
        "ERP",
        "RH",
        "fretamento corporativo",
    ],
});

export default function Page() {
    return <IntegracoesContent />;
}
