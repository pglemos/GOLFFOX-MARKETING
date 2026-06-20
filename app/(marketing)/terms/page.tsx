import { Metadata } from "next";

import { generatePageMetadata } from "@/lib/seo/metadata";

import TermsContent from "./content";

export const metadata: Metadata = generatePageMetadata({
    title: "Termos de Uso Elite",
    description: "Termos de uso e licenciamento da plataforma GOLF FOX. SLA, limites de uso e propriedade intelectual.",
    path: "/terms",
});

export default function TermsPage() {
    return <TermsContent />;
}
