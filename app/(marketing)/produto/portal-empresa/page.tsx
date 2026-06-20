import { generatePageMetadata } from "@/lib/seo/metadata";

import { PortalEmpresaContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Portal Empresa",
    description:
        "Portal para empresas contratantes de fretamento corporativo. Controle de custos por centro, presença auditável, relatórios financeiros e satisfação dos colaboradores.",
    path: "/produto/portal-empresa",
    keywords: [
        "portal empresa",
        "fretamento corporativo",
        "controle de custos",
        "presença auditável",
        "transporte colaboradores",
    ],
});

export default function Page() {
    return <PortalEmpresaContent />;
}
