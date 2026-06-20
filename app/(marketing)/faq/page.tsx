import { faqGlobal } from "@/content/marketing";
import { generatePageMetadata, generateFAQSchema } from "@/lib/seo/metadata";

import { FAQContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "FAQ",
    description:
        "Perguntas frequentes sobre a plataforma GOLF FOX. Tire suas dúvidas sobre implantação, check-in, rastreamento, privacidade, relatórios e muito mais.",
    path: "/faq",
    keywords: ["FAQ GOLF FOX", "perguntas frequentes", "dúvidas", "suporte"],
});

// Schema FAQ para SEO
export function generateStaticParams() {
    return [];
}

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(faqGlobal)),
                }}
            />
            <FAQContent />
        </>
    );
}
