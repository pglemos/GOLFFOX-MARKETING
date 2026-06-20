import { Metadata } from "next";

import { generatePageMetadata } from "@/lib/seo/metadata";

import PrivacidadeContent from "./content";

export const metadata: Metadata = generatePageMetadata({
    title: "Política de Privacidade",
    description: "Política de privacidade da GOLF FOX. Coleta de dados, conformidade LGPD, segurança e direitos do usuário.",
    path: "/privacidade",
});

export default function PrivacidadePage() {
    return <PrivacidadeContent />;
}
