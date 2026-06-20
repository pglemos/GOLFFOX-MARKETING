import { MarketingHeader, MarketingFooter } from "@/components/marketing";
import { defaultMarketingMetadata } from "@/lib/seo/metadata";

import type { Metadata } from "next";

export const metadata: Metadata = defaultMarketingMetadata;

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-gray-900"
            >
                Pular para conteúdo
            </a>
            <MarketingHeader />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <MarketingFooter />
        </div>
    );
}
