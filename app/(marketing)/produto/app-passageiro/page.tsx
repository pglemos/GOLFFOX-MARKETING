import { generatePageMetadata } from "@/lib/seo/metadata";

import { AppPassageiroContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "App Passageiro",
    description:
        "Aplicativo para passageiros de fretamento corporativo. Status do ônibus em tempo real, alarme de proximidade, check-in QR offline e modo férias.",
    path: "/produto/app-passageiro",
    keywords: [
        "app passageiro",
        "fretamento corporativo",
        "check-in QR",
        "alarme proximidade",
        "status ônibus",
    ],
});

export default function Page() {
    return <AppPassageiroContent />;
}
