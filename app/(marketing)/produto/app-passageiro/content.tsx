"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import {
    ArrowRight,
    Clock,
    BellRing,
    QrCode,
    MapPin,
    MessageSquare,
    Coffee,
    Check,
    Bus,
} from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";

// ============================================================
// Copy (preservada do conteúdo original)
// ============================================================
const BENEFITS = [
    {
        icon: Clock,
        title: "O fim da ansiedade no ponto",
        description:
            "Chega de olhar para o relógio. Com rastreamento em tempo real, seu colaborador sabe exatamente onde o ônibus está e se vai chover ou fazer sol até lá.",
    },
    {
        icon: BellRing,
        title: "Durma mais 10 minutos",
        description:
            "O 'Alarme de Proximidade' avisa quando o ônibus está a 500m de distância. É mais conforto e menos tempo esperando na rua.",
    },
    {
        icon: QrCode,
        title: "Embarque sem contato",
        description:
            "Nada de crachás esquecidos. O embarque é 100% digital via QR Code ou NFC Digital Pass, rápido e seguro, mesmo sem internet.",
    },
];

const STEPS = [
    {
        icon: MapPin,
        title: "Localização Viva",
        description: "Visualize todos os ônibus da rota no mapa",
    },
    {
        icon: MessageSquare,
        title: "Mural e Canal Aberto",
        description: "Mural de avisos por empresa, avaliação da viagem e carpooling",
    },
    {
        icon: Coffee,
        title: "Mais Qualidade de Vida",
        description: "Tempo de trajeto previsível e tranquilo",
    },
];

const FAQS = [
    {
        question: "E se a internet do passageiro cair?",
        answer: "Sem problemas. A Carteirinha Digital (QR Code) funciona 100% offline para garantir o embarque.",
    },
    {
        question: "O app avisa se houver atraso?",
        answer: "Sim. Qualquer incidente reportado pelo motorista ou detectado pelo sistema dispara uma notificação push para todos os passageiros daquela rota.",
    },
    {
        question: "É possível reservar assento?",
        answer: "Sim! Para linhas executivas ou sob demanda, o passageiro pode reservar seu lugar e garantir viagem sentada através do app.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

// ============================================================
// Mockup de celular (frame escuro arredondado)
// ============================================================
function PhoneMockup({ priority = false }: { priority?: boolean }) {
    return (
        <div className="relative mx-auto h-[600px] w-[300px]">
            <div className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(250,96,7,0.28),transparent_70%)] blur-[12px]" aria-hidden="true" />
            <div className="relative h-full w-full rounded-[2.5rem] border-[14px] border-[#0A1A2C] bg-[#0A1A2C] shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
                <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-[#0A1A2C]" aria-hidden="true" />
                <div className="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-[#0A1A2C]" aria-hidden="true" />
                <div className="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-[#0A1A2C]" aria-hidden="true" />
                <div className="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-[#0A1A2C]" aria-hidden="true" />
                <div className="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-[#0A1A2C]" aria-hidden="true" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#EAF0F6]">
                    <Image
                        src="/assets/product/app-passageiro.png"
                        alt="Interface do App do Passageiro Golf Fox"
                        fill
                        priority={priority}
                        sizes="300px"
                        className="object-cover"
                    />
                    {/* Card sobreposto: status do ônibus ao vivo */}
                    <div className="absolute left-4 right-4 top-20 rounded-xl border border-[#EAEFF4] bg-white p-4 shadow-[0_18px_40px_rgba(11,36,64,0.2)]">
                        <div className="mb-2 flex items-start justify-between gap-3">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#71859B]">Seu ônibus</p>
                                <p className="text-lg font-extrabold text-[#0B2440]">Linha 402 • Executivo</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E6F7EE] px-2.5 py-1 text-[11px] font-bold text-[#1A8F52]">
                                <span className="gf-live-dot h-[6px] w-[6px] rounded-full bg-[#34D17E]" aria-hidden="true" />
                                NO HORÁRIO
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#52647A]">
                            <Clock className="h-4 w-4 text-[#FA6007]" aria-hidden="true" />
                            <span>
                                Chegando em <strong className="text-[#0B2440]">4 minutos</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// Página
// ============================================================
export function AppPassageiroContent() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="font-archivo text-[#122334]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] text-white">
                    <Image
                        src="/images/institucional/frota-estrada.jpg"
                        alt=""
                        aria-hidden="true"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-[0.16]"
                    />
                    <RouteBackdrop withGlow animated />
                    <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
                        <div>
                            <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                App do Passageiro
                            </span>
                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5 }}
                                className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                            >
                                Transforme o trajeto diário em momento de{" "}
                                <span className="text-[#FA6007]">bem-estar</span>.
                            </motion.h1>
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-6 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl"
                            >
                                Dê ao seu colaborador o presente da previsibilidade. Um app bonito, fácil e
                                que acaba com a ansiedade da espera.
                            </motion.p>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-9 flex flex-wrap gap-3.5"
                            >
                                <Link
                                    href="/demo"
                                    className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Agendar demonstração
                                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/produto"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Ver a plataforma
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mockup de celular */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <PhoneMockup priority />
                        </motion.div>
                    </div>
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== EXPERIÊNCIA + BENEFÍCIOS ===================== */}
                <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Mockup */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="order-2 flex justify-center lg:order-1"
                        >
                            {/* Tela "Onde está meu ônibus?" (mock desenhado) */}
                            <div className="relative mx-auto h-[600px] w-[300px]">
                                <div className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(250,96,7,0.28),transparent_70%)] blur-[12px]" aria-hidden="true" />
                                <div className="relative h-full w-full rounded-[2.5rem] border-[14px] border-[#0A1A2C] bg-[#0A1A2C] shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
                                    <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-[#0A1A2C]" aria-hidden="true" />
                                    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-[#0B2440] text-white">
                                        {/* barra de status */}
                                        <div className="flex items-center justify-between bg-[#FA6007] px-5 pb-3 pt-6 text-[11px] font-bold">
                                            <span className="tabular-nums">09:30</span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <span className="gf-live-dot h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                                                AO VIVO
                                            </span>
                                        </div>
                                        {/* header */}
                                        <div className="px-5 pt-4">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FFB07A]">Onde está meu ônibus?</div>
                                            <div className="mt-1 text-lg font-extrabold">Linha 402 · Centro</div>
                                        </div>
                                        {/* mapa */}
                                        <div className="relative mx-4 mt-4 flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E2C4D] to-[#0B2440]">
                                            <svg viewBox="0 0 240 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                                                <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                                                    <path d="M0,70 H240 M0,150 H240 M0,230 H240 M70,0 V300 M160,0 V300" fill="none" />
                                                </g>
                                                <path d="M30,250 C70,250 80,150 130,120 C180,90 190,60 215,55" fill="none" stroke="rgba(250,96,7,0.25)" strokeWidth="4" strokeLinecap="round" />
                                                <path d="M30,250 C70,250 80,150 130,120 C180,90 190,60 215,55" fill="none" stroke="#FA6007" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 260" className="gf-route-dash" />
                                                <circle cx="215" cy="55" r="6" fill="#fff" />
                                            </svg>
                                            <div className="absolute left-[52%] top-[42%] -translate-x-1/2 -translate-y-1/2">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#FA6007] shadow-[0_6px_14px_rgba(250,96,7,0.5)]">
                                                    <Bus className="h-4 w-4 text-white" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
                                                <span className="h-2 w-2 rounded-full bg-[#34D17E]" aria-hidden="true" />
                                                Seu ponto
                                            </div>
                                        </div>
                                        {/* ETA */}
                                        <div className="mx-4 mt-4 rounded-2xl bg-white/[0.06] p-4">
                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <div className="text-[11px] text-[#8FA3B8]">Chega em</div>
                                                    <div className="font-display text-3xl font-black leading-none tabular-nums text-[#FA6007]">23 min</div>
                                                </div>
                                                <div className="text-right text-[11px] leading-snug text-[#A9BACD]">
                                                    Praça Central
                                                    <br />
                                                    Lotação 62%
                                                </div>
                                            </div>
                                        </div>
                                        {/* alerta inteligente */}
                                        <div className="mx-4 mt-3 flex items-center gap-2.5 rounded-xl border border-[#FA6007]/30 bg-[#FA6007]/10 px-3.5 py-3">
                                            <BellRing className="h-4 w-4 flex-none text-[#FA6007]" aria-hidden="true" />
                                            <span className="text-[11.5px] leading-snug text-[#FFE1CC]">
                                                Saia de casa em <strong className="font-bold text-white">17 min</strong> para chegar junto com o ônibus.
                                            </span>
                                        </div>
                                        {/* botão */}
                                        <div className="px-4 pb-5 pt-3">
                                            <div className="rounded-xl bg-[#FA6007] py-3 text-center text-[13px] font-bold text-white">
                                                Confirmar embarque
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Texto + benefícios */}
                        <div className="order-1 lg:order-2">
                            <Eyebrow>Experiência premium</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Experiência premium para seu time
                            </h2>
                            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                                O transporte fretado é um dos benefícios mais valorizados. Eleve essa
                                experiência com um aplicativo que seus colaboradores vão amar usar.
                            </p>

                            <div className="mt-10 flex flex-col gap-8">
                                {BENEFITS.map((benefit, index) => (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 }}
                                        className="flex gap-4"
                                    >
                                        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-[#FFF0E6]">
                                            <benefit.icon className="h-6 w-6 text-[#FA6007]" aria-hidden="true" />
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-xl font-extrabold text-[#0B2440]">{benefit.title}</h3>
                                            <p className="text-[15.5px] leading-relaxed text-[#56697E]">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== 3 PILARES ===================== */}
                <section className="border-t border-[#E8EDF3] bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-14 max-w-[680px] text-center">
                            <Eyebrow>Na palma da mão</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Tudo o que o colaborador precisa
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {STEPS.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 text-center shadow-[0_1px_2px_rgba(11,36,64,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,36,64,0.10)]"
                                >
                                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#FFF0E6]">
                                        <step.icon className="h-7 w-7 text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-[#0B2440]">{step.title}</h3>
                                    <p className="text-[15.5px] leading-relaxed text-[#56697E]">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== DESTAQUE ESCURO + CHECKLIST ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="mb-5 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                Previsibilidade total
                            </span>
                            <h2 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Menos espera na rua, mais qualidade de vida.
                            </h2>
                            <p className="mt-5 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                                Do alerta de proximidade ao embarque digital, cada detalhe foi pensado para
                                tirar a ansiedade do dia a dia do colaborador.
                            </p>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Localização do ônibus ao vivo no mapa",
                                "Alarme de proximidade a 500m do ponto",
                                "Carteirinha digital com QR Code, mesmo offline",
                                "Notificações push de atraso e ocorrência",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[16.5px] font-semibold text-white">
                                    <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                        <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <FaqTwoColumn
                    title="Perguntas frequentes"
                    description="Tudo que você precisa saber antes de começar."
                    items={FAQS.map((f) => ({ q: f.question, a: f.answer }))}
                />

                {/* ===================== CTA FINAL ===================== */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                        <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                    </svg>
                    <div className="relative mx-auto max-w-[820px] text-center">
                        <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                            Valorize seu benefício de transporte
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e veja como melhorar a satisfação do seu time.
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
