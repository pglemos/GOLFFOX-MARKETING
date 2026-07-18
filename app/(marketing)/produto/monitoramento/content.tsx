"use client";

import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Check, ClipboardCheck } from "lucide-react";

import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { MonitoramentoFeatures } from "@/components/marketing/monitoramento-features";
import { RouteBackdrop } from "@/components/marketing/landing-ui";

const STATS = [
    { value: "Tempo real", label: "posição atualizada a cada 30s" },
    { value: "100%", label: "das viagens registradas e auditadas" },
    { value: "IA", label: "que detecta risco de condução na hora" },
];

// "A cada viagem, um registro" — o que fica gravado ao final do trajeto.
const TRIP_RECORD = [
    "Pontualidade de saída e chegada",
    "Rota percorrida e desvios",
    "Presença por embarque (QR Code)",
    "Ocorrências e alertas do trajeto",
];

const FAQS = [
    {
        q: "Preciso trocar minha transportadora?",
        a: "Não. A Golf Fox monitora as transportadoras que você já contrata. É uma camada de controle por cima do transporte que já roda para você.",
    },
    {
        q: "Como funciona o monitoramento em tempo real?",
        a: "Você acompanha cada rota e cada veículo ao vivo no painel, com a posição atualizada a cada 30 segundos e alertas automáticos de atraso e desvio.",
    },
    {
        q: "Consigo acompanhar por câmera?",
        a: "Sim. Onde há câmera a bordo, você acompanha a viagem em tempo real e o registro fica disponível para consulta.",
    },
    {
        q: "A câmera identifica comportamento de risco?",
        a: "Sim. A câmera com IA detecta uso de celular, sono, distração e motorista sem cinto em tempo real e alerta na hora, com o vídeo de antes e depois da ocorrência para dar contexto.",
    },
    {
        q: "E a documentação dos motoristas?",
        a: "A plataforma controla CNH, licença e seguro e avisa antes de vencer, evitando que papel atrasado vire risco dentro do seu contrato.",
    },
];

export function MonitoramentoContent() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="font-archivo text-[#122334]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] text-white">
                    <RouteBackdrop withGlow animated />
                    <div className="relative mx-auto max-w-[900px] px-5 pt-24 text-center sm:px-8 lg:pt-28">
                        <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                            Produto · Monitoramento
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-balance text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
                        >
                            Você vê cada viagem{" "}
                            <span className="text-[#FA6007]">acontecendo ao vivo</span>.
                        </motion.h1>
                        <p className="mx-auto mt-5 max-w-[640px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                            Acompanhe em tempo real todas as transportadoras que levam seus
                            colaboradores: rota no mapa, câmera a bordo, embarque por QR Code e alerta de
                            atraso — tudo num painel só, sem trocar quem já roda para você.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                            <Link
                                href="/demo"
                                className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Agendar demonstração
                                <ArrowRight
                                    className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </Link>
                            <Link
                                href="/como-funciona"
                                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Ver como funciona
                            </Link>
                        </div>

                        {/* stats */}
                        <div className="mx-auto mt-14 grid max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-3">
                            {STATS.map((s) => (
                                <div key={s.label} className="border-t border-white/12 pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
                                    <div className="text-2xl font-black text-[#FA6007] sm:text-3xl">{s.value}</div>
                                    <div className="mt-1 text-sm text-[#8FA3B8]">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <svg
                        viewBox="0 0 1440 70"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="mt-16 block h-[54px] w-full"
                    >
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== FUNCIONALIDADES (abas) ===================== */}
                <MonitoramentoFeatures />

                {/* ===================== A CADA VIAGEM, UM REGISTRO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                A cada viagem
                            </span>
                            <h2 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Terminou a viagem, virou registro.
                            </h2>
                            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                                Ao final de cada trajeto, a Golf Fox consolida tudo num registro auditável —
                                a prova de pontualidade e presença que você mostra pro contratante sem
                                depender da palavra de ninguém.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3.5">
                                <Link
                                    href="/demo"
                                    className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Ver um relatório de exemplo
                                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0E2C4D] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FA6007]/15 text-[#FA6007]">
                                    <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-lg font-bold">Registro da viagem</p>
                                    <p className="text-sm text-[#8FA3B8]">gerado automaticamente</p>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3.5">
                                {TRIP_RECORD.map((item) => (
                                    <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5">
                                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#1A8F52]/20">
                                            <Check className="h-3.5 w-3.5 text-[#3FD17B]" aria-hidden="true" />
                                        </span>
                                        <span className="text-[15px] font-semibold text-[#DCE6F0]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <FaqTwoColumn
                    title="Perguntas frequentes"
                    description="Tire suas dúvidas sobre o monitoramento em tempo real."
                    items={FAQS}
                    initialCount={4}
                />

                {/* ===================== CTA FINAL ===================== */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                    <svg
                        viewBox="0 0 1440 360"
                        preserveAspectRatio="xMidYMid slice"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
                    >
                        <path
                            d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="2 12"
                        />
                    </svg>
                    <div className="relative mx-auto max-w-[820px] text-center">
                        <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                            Pare de torcer para dar certo. Passe a ver.
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e acompanhe, ao vivo, o transporte dos seus
                            colaboradores. Sem compromisso, com proposta sob medida pra sua operação.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link
                                href="/demo"
                                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#0B2440] px-8 py-[18px] text-[17px] font-extrabold text-white shadow-[0_16px_40px_rgba(11,36,64,0.4)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Agendar demonstração
                                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </MotionConfig>
    );
}
