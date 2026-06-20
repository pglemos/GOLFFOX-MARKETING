import { generatePageMetadata } from "@/lib/seo/metadata";

import { HomePage } from "./home-content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Gestão completa do fretamento corporativo",
    description:
        "GOLF FOX é a plataforma de gestão de fretamento corporativo: rotas, check-in/out (QR/NFC), tempo real por perfil, BI, auditoria e relatórios. Conectando Empresas e Transportadoras com padrão e rastreabilidade.",
    path: "/",
    keywords: [
        "fretamento corporativo",
        "gestão de frotas",
        "transporte de colaboradores",
        "controle de embarque",
        "check-in QR",
        "rastreamento em tempo real",
        "auditoria transporte",
    ],
});

export default function Page() {
    return <HomePage />;
}
