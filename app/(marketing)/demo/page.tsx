import { generatePageMetadata } from "@/lib/seo/metadata";

import { DemoContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Agendar demonstração",
    description:
        "Agende uma demonstração gratuita da GOLF FOX. Veja a plataforma em ação e tire todas as suas dúvidas.",
    path: "/demo",
    keywords: [
        "demonstração golf fox",
        "agendar demo",
        "fretamento corporativo",
    ],
});

export default function Page() {
    return <DemoContent />;
}
