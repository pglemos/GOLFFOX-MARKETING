import { generatePageMetadata } from "@/lib/seo/metadata";

import { SegurancaContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Segurança & LGPD",
    description:
        "Conheça as práticas de segurança da GOLF FOX. Conformidade LGPD, criptografia, audit log, privacidade e proteção de dados.",
    path: "/seguranca-lgpd",
    keywords: [
        "segurança",
        "LGPD",
        "privacidade",
        "proteção de dados",
        "conformidade",
        "criptografia",
        "audit log",
    ],
});

export default function Page() {
    return <SegurancaContent />;
}
