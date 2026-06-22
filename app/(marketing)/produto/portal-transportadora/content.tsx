"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import {
    TrendingUp,
    Truck,
    Headphones,
    Handshake,
    FileCheck,
    Award,
    ArrowRight,
    Check,
} from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";

const BENEFITS = [
    {
        icon: TrendingUp,
        title: "Blindagem de Margem",
        description:
            "Chega de rodar no prejuízo. Visualize o DRE de cada contrato em tempo real. Identifique rotas deficitárias e veículos ociosos antes que eles queimem seu caixa.",
        stat: "+15% lucratividade",
    },
    {
        icon: Handshake,
        title: "Venda Mais",
        description:
            "Empresas grandes exigem compliance. Com o selo GOLF FOX, você prova auditoria e segurança, vencendo concorrências contra amadores.",
        stat: "Diferencial Competitivo",
    },
    {
        icon: Truck,
        title: "Inteligência de Frota",
        description:
            "Manutenção preditiva que funciona. O sistema avisa quando peças precisam de troca baseado na KM real, evitando quebras inesperadas em rota.",
        stat: "-20% corretivas",
    },
];

const SUPPORT_FEATURES = [
    {
        icon: Headphones,
        title: "Suporte Operacional Dedicado",
        description:
            "Não somos apenas um software. Temos um time de especialistas em tráfego para ajudar a otimizar suas rotas.",
    },
    {
        icon: FileCheck,
        title: "Consultoria Jurídica e Fiscal",
        description:
            "Modelos de contrato e apoio na regularização de documentos para você blindar sua operação.",
    },
    {
        icon: Award,
        title: "Clube de Vantagens",
        description:
            "Descontos exclusivos em pneus, combustível e peças através da nossa rede de parceiros homologados.",
    },
];

const FAQS = [
    {
        q: "Como o sistema me ajuda a conseguir novos clientes?",
        a: "A GOLF FOX cria um perfil verificado da sua transportadora que é visível para grandes empresas contratantes na nossa plataforma, funcionando como um canal de vendas passivo.",
    },
    {
        q: "Consigo controlar motoristas terceiros?",
        a: "Sim. O App do Motorista funciona para agregados e terceiros, garantindo que você tenha a mesma visibilidade e controle de qualidade da frota própria.",
    },
    {
        q: "O sistema emite alertas de manutenção?",
        a: "Sim. Você configura os planos de manutenção (óleo, pneus, filtros) e o sistema dispara alertas automáticos baseados na telemetria e KM rodados.",
    },
];

export function PortalTransportadoraContent() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="font-archivo text-[#122334]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] text-white">
                    <Image
                        src="/images/institucional/frota-patio.jpg"
                        alt=""
                        aria-hidden="true"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-[0.16]"
                    />
                    <RouteBackdrop withGlow animated />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
                        <div>
                            <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                Para Operadores Logísticos
                            </span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-balance text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
                            >
                                Transforme sua Transportadora em uma{" "}
                                <span className="text-[#FA6007]">Operação de Alta Performance</span>
                            </motion.h1>
                            <p className="mt-5 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                                Deixe de ser apenas um fornecedor de ônibus. Torne-se um parceiro
                                estratégico com dados, auditoria e margem garantida.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3.5">
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
                        </div>
                        {/* Screenshot framed as browser card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full"
                        >
                            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0E2C4D] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                                <div className="flex items-center gap-1.5 px-4 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                </div>
                                <Image
                                    src="/assets/product/dashboard-transportadora.png"
                                    alt="Dashboard do Portal Transportadora"
                                    width={760}
                                    height={520}
                                    className="h-auto w-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <svg
                        viewBox="0 0 1440 70"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="block h-[54px] w-full"
                    >
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== BENEFÍCIOS ===================== */}
                <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-16 max-w-[680px] text-center">
                            <Eyebrow>Cresça com rentabilidade</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Cresça com rentabilidade
                            </h2>
                            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                                Ferramentas desenhadas não apenas para controlar, mas para alavancar o
                                seu negócio.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {BENEFITS.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8"
                                >
                                    <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007]">
                                        <benefit.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-[#52647A]">
                                        {benefit.description}
                                    </p>
                                    <span className="mt-6 inline-flex rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-bold text-[#C2410C]">
                                        {benefit.stat}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== PARCERIA (deep-dive escuro) ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Imagem + selo de parceiro */}
                        <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                            <Image
                                src="/images/institucional/frota-estrada.jpg"
                                alt="Frota em operação na estrada"
                                width={760}
                                height={620}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-5 bottom-5">
                                <div className="rounded-xl border border-white/10 bg-[#0B2440]/90 p-6 backdrop-blur-md">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FA6007] text-xl font-black text-[#0B2440]">
                                            GF
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">Parceiro Homologado</p>
                                            <p className="text-sm font-semibold text-[#FFB07A]">
                                                Validado em Compliance e Segurança
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed text-[#B7C6D8]">
                                        &ldquo;Com o selo da GOLF FOX, conseguimos entrar em clientes
                                        multinacionais que antes não nos atendiam por falta de
                                        certificação digital.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Texto + checklist */}
                        <div>
                            <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                Parceria de verdade
                            </span>
                            <h2 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Muito além do software. Uma parceria de verdade.
                            </h2>
                            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                                Sabemos que tecnologia sozinha não roda pneu. Por isso, oferecemos uma
                                estrutura completa de apoio para sua transportadora decolar.
                            </p>
                            <ul className="mt-9 flex flex-col gap-7">
                                {SUPPORT_FEATURES.map((feature) => (
                                    <li key={feature.title} className="flex gap-4">
                                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                            <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-extrabold tracking-[-0.02em] text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-1 leading-relaxed text-[#B7C6D8]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <section id="faq" className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[820px]">
                        <div className="mb-12 text-center">
                            <Eyebrow>Perguntas frequentes</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Perguntas frequentes
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {FAQS.map((faq, i) => (
                                <details
                                    key={faq.q}
                                    className="gf-faq rounded-[14px] border border-[#E7EDF3] bg-white px-6"
                                    open={i === 0}
                                >
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-[22px] text-lg font-bold text-[#0B2440] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]">
                                        {faq.q}
                                        <span
                                            className="gf-chev flex-none text-2xl font-normal leading-none text-[#FA6007]"
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </summary>
                                    <p className="mb-[22px] text-base leading-relaxed text-[#52647A]">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

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
                            Quer blindar sua operação?
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e veja como transformamos transportadoras em
                            potências logísticas.
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
