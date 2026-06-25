"use client";

import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Server, FileSearch } from "lucide-react";

const WHATSAPP_HREF = "https://wa.me/5511939337163";

// Blur-in suave em mola (adaptado do hero de referência) com entrada escalonada.
const blurInItem = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
} as const;

const container = {
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const TRUST_BADGES = [
    { icon: ShieldCheck, label: "LGPD Conforme" },
    { icon: Lock, label: "AES-256 · TLS 1.3" },
    { icon: FileSearch, label: "Audit log imutável" },
    { icon: Server, label: "AWS Brasil · 99,9% SLA" },
];

export function SegurancaHero() {
    return (
        <MotionConfig reducedMotion="user">
            <section className="relative overflow-hidden bg-[#0B2440]">
                {/* Glows radiais sutis */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(250,96,7,0.16)_0%,rgba(250,96,7,0)_70%)]" />
                    <div className="absolute -bottom-48 -left-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(1,85,126,0.35)_0%,rgba(1,85,126,0)_70%)]" />
                    <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(7,24,42,0.8)_100%)]" />
                </div>

                <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 text-center sm:pt-40 lg:pb-28">
                    <motion.div initial="hidden" animate="visible" variants={container}>
                        {/* Pill de anúncio → Trust Center */}
                        <motion.div variants={blurInItem} className="flex justify-center">
                            <Link
                                href="/trust-center"
                                className="group flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-4 pr-1 text-sm text-white/85 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                            >
                                <span>Trust Center · documentação de segurança</span>
                                <span aria-hidden className="block h-4 w-px bg-white/20" />
                                <span className="flex size-6 items-center justify-center overflow-hidden rounded-full bg-brand">
                                    <span className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                        <span className="flex size-6 items-center justify-center text-white">
                                            <ArrowRight className="size-3" />
                                        </span>
                                        <span className="flex size-6 items-center justify-center text-white">
                                            <ArrowRight className="size-3" />
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </motion.div>

                        {/* Título */}
                        <motion.h1
                            variants={blurInItem}
                            className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl"
                        >
                            Seus dados protegidos em cada camada
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            variants={blurInItem}
                            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/75"
                        >
                            Segurança em camadas, conformidade total com a LGPD, audit log imutável e
                            transparência ponta a ponta na operação do seu transporte.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={blurInItem}
                            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <Link
                                href="/demo"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(250,96,7,0.3)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Solicitar demonstração
                                <ArrowRight className="size-[18px]" aria-hidden />
                            </Link>
                            <a
                                href={WHATSAPP_HREF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Falar no WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Selos de confiança (no lugar dos "logos de clientes" do template) */}
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
                        className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-3"
                    >
                        {TRUST_BADGES.map(({ icon: Icon, label }) => (
                            <motion.li
                                key={label}
                                variants={blurInItem}
                                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
                            >
                                <Icon className="size-4 text-brand" aria-hidden />
                                {label}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </section>
        </MotionConfig>
    );
}
