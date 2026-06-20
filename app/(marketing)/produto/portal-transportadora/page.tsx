import { generatePageMetadata } from "@/lib/seo/metadata";

import { PortalTransportadoraContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Portal Transportadora",
    description:
        "Portal para transportadoras de fretamento corporativo. Gestão de frota, manutenção, motoristas, custos e DRE operacional em tempo real.",
    path: "/produto/portal-transportadora",
    keywords: [
        "portal transportadora",
        "gestão de frota",
        "manutenção preventiva",
        "controle de motoristas",
        "DRE operacional",
    ],
});

export default function Page() {
    return <PortalTransportadoraContent />;
}
