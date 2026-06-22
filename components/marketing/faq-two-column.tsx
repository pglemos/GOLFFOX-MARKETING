import Link from "next/link";

import { PhoneCall } from "lucide-react";

export type FaqItem = { q: string; a: string };

/**
 * FAQ em 2 colunas (modelo 21st.dev adaptado à marca):
 * esquerda = badge "FAQ" + título + descrição + botão de contato;
 * direita = accordion nativo (gf-faq), sem dependência shadcn.
 */
export function FaqTwoColumn({
    title,
    description,
    items,
    contactHref = "https://wa.me/5511939337163",
    contactLabel = "Ainda com dúvidas? Fale com a Golf Fox",
    className = "bg-white",
}: {
    title: string;
    description?: string;
    items: FaqItem[];
    contactHref?: string;
    contactLabel?: string;
    className?: string;
}) {
    return (
        <section className={`font-archivo px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
            <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Intro */}
                <div className="flex flex-col gap-6">
                    <span className="inline-flex w-fit rounded-md border border-[#E7EDF3] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#01557E]">
                        FAQ
                    </span>
                    <h2 className="max-w-xl text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                        {title}
                    </h2>
                    {description ? (
                        <p className="max-w-[460px] text-pretty text-lg leading-relaxed text-[#52647A]">{description}</p>
                    ) : null}
                    <Link
                        href={contactHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-xl border border-[#D8E0E8] bg-white px-5 py-3.5 text-[15px] font-bold text-[#0B2440] transition-colors duration-200 hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                    >
                        {contactLabel}
                        <PhoneCall className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3.5">
                    {items.map((it, i) => (
                        <details key={it.q} className="gf-faq rounded-[14px] border border-[#E7EDF3] bg-white px-6" open={i === 0}>
                            <summary className="flex cursor-pointer items-center justify-between gap-4 py-[22px] text-lg font-bold text-[#0B2440]">
                                {it.q}
                                <span className="gf-chev flex-none text-2xl font-normal leading-none text-[#FA6007]" aria-hidden="true">
                                    +
                                </span>
                            </summary>
                            <p className="mb-[22px] text-base leading-relaxed text-[#52647A]">{it.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
