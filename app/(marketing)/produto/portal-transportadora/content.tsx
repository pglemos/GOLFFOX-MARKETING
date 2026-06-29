"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import {
    Headphones,
    FileCheck,
    Award,
    ArrowRight,
    Check,
    AlertTriangle,
    BarChart3,
    Wallet,
} from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";
import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { CardStack } from "@/components/ui/card-stack";

// Predicado que troca depois de "A Golf Fox ___" — frase inteira animada.
const HERO_ROTATING = [
    "acende a luz.",
    "mostra a rota.",
    "controla a frota.",
    "revela a margem.",
];

const PAINS = [
    "O ônibus atrasou e você foi o último a saber. O cliente, o primeiro.",
    "A CNH do motorista venceu e virou risco trabalhista dentro do seu contrato.",
    "O contratante pediu relatório de pontualidade e você não tinha nenhum pra mostrar.",
];

// SEÇÃO VIRADA — os 3 cards de prova.
const TURN_CARDS = [
    {
        icon: FileCheck,
        title: "Documentação que não vira multa.",
        description:
            "Alerta de CNH, licença e seguro antes de vencer. Você não perde mais contrato por papel atrasado.",
    },
    {
        icon: BarChart3,
        title: "Relatório que renova contrato.",
        description:
            "Pontualidade, ocupação e histórico de cada rota, prontos pra mostrar pro contratante. A prova de que você entrega.",
    },
    {
        icon: Wallet,
        title: "Margem que você enxerga.",
        description:
            "Veja rota ociosa, assento vazio e hora extra antes de virar prejuízo. Onde tem desperdício, tem lucro parado.",
    },
];

const SUPPORT_FEATURES = [
    {
        icon: Headphones,
        title: "Suporte que conhece transporte.",
        description: "Time que veio da operação, não de TI. A gente fala a sua língua.",
    },
    {
        icon: FileCheck,
        title: "Apoio com documentação e contrato.",
        description:
            "Modelos e orientação pra profissionalizar sua relação com o contratante.",
    },
    {
        icon: Award,
        title: "Rede de vantagens.",
        description:
            "Condição em pneu, combustível e peças através da nossa rede de parceiros.",
    },
];

const FAQS = [
    {
        q: "Quanto custa?",
        a: "O plano é montado pra realidade da sua operação: número de veículos, rotas e o que você precisa monitorar. Por isso o valor é definido numa conversa rápida, sem pacote engessado. Agende uma demonstração e a gente monta a proposta certa pra sua transportadora.",
    },
    {
        q: "Preciso trocar meu sistema atual?",
        a: "Não. A Golf Fox entra por cima do que você já usa, sem parar sua operação.",
    },
    {
        q: "Meus motoristas vão resistir ao app?",
        a: "O check-in é por QR Code, sem treino longo. Em uma semana vira rotina.",
    },
    {
        q: "Isso me ajuda a fechar e manter contrato?",
        a: "Sim. Você passa a oferecer pro contratante a visibilidade que a concorrência não tem, e profissionaliza sua proposta comercial. É o que decide quando você não é o mais barato.",
    },
];

export function PortalTransportadoraContent() {
    const [rotIndex, setRotIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setRotIndex((prev) => (prev + 1) % HERO_ROTATING.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

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
                                Para transportadoras de fretamento
                            </span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-balance text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
                            >
                                Sua transportadora roda no escuro.{" "}
                                <span className="text-[#FA6007]">A Golf Fox</span>
                                <span className="relative mt-1 block h-[1.2em] overflow-hidden text-[#FA6007]">
                                    {HERO_ROTATING.map((w, i) => (
                                        <motion.span
                                            key={w}
                                            aria-hidden={rotIndex !== i}
                                            className="absolute left-0 top-0 whitespace-nowrap"
                                            initial={false}
                                            animate={
                                                rotIndex === i
                                                    ? { y: "0%", opacity: 1 }
                                                    : { y: rotIndex > i ? "-110%" : "110%", opacity: 0 }
                                            }
                                            transition={{ type: "spring", stiffness: 70, damping: 16 }}
                                        >
                                            {w}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>
                            <p className="mt-6 max-w-[580px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                                Monitore cada rota, controle a documentação dos motoristas e mostre pro
                                seu cliente, em tempo real, que o serviço está sendo entregue como
                                prometido. A plataforma que transforma sua transportadora no fornecedor
                                que o contratante não quer perder.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3.5">
                                <Link
                                    href="/demo"
                                    className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Quero monitorar minha frota
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
                            className="relative w-full"
                        >
                            {/* selo "Ao vivo" pulsando */}
                            <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#0B2440]/85 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                                <motion.span
                                    className="h-2 w-2 rounded-full bg-[#3FD17B]"
                                    animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity }}
                                    aria-hidden="true"
                                />
                                Ao vivo
                            </div>
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

                {/* ===================== DOR ===================== */}
                <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
                    <div className="mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-12 max-w-[720px] text-center">
                            <Eyebrow>O que tira seu sono</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Você só descobre o problema quando o cliente liga.
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {PAINS.map((pain, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex h-full flex-col gap-4 rounded-2xl border border-[#F0D9CC] bg-[#FFF7F2] p-7"
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE3D6] text-[#D14600]">
                                        <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    <p className="text-[17px] font-semibold leading-relaxed text-[#2A3D52]">
                                        {pain}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-10 max-w-[860px] rounded-2xl bg-[#0B2440] px-8 py-7 text-center"
                        >
                            <p className="text-balance text-lg font-semibold leading-relaxed text-white sm:text-xl">
                                Cada uma dessas é um contrato em risco. Monitoramento parou de ser
                                diferencial.{" "}
                                <span className="text-[#FFB07A]">
                                    Virou exigência de quem contrata.
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== VIRADA ===================== */}
                <section className="relative overflow-hidden bg-[#F4F7FA] px-5 py-16 sm:px-8 lg:py-24">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-0 opacity-60">
                        <RouteBackdrop />
                    </div>
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-10 max-w-[760px] text-center">
                            <Eyebrow>A virada</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                O que faz o cliente escolher você mesmo sem ser o mais barato.
                            </h2>
                            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                                A maioria das transportadoras compete só no preço, porque o contratante
                                não enxerga diferença entre elas. A Golf Fox te dá a prova que mostra a
                                diferença: rota ao vivo, documentação em dia e relatório com o nome do
                                seu cliente. O motivo pra ele escolher você mesmo quando aparece alguém
                                mais barato.
                            </p>
                        </div>

                        <div className="-mx-5 px-5 sm:-mx-8 sm:px-8">
                            <CardStack
                                items={TURN_CARDS.map((b, i) => ({
                                    id: i,
                                    title: b.title,
                                    description: b.description,
                                    icon: b.icon,
                                }))}
                                cardWidth={400}
                                cardHeight={300}
                                maxVisible={3}
                                spreadDeg={10}
                                overlap={0.5}
                                tiltXDeg={8}
                                activeLiftPx={16}
                                renderCard={(item) => (
                                    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#0B2440] p-8 text-white">
                                        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(250,96,7,0.25),transparent_70%)] blur-[10px]" aria-hidden="true" />
                                        <div className="relative">
                                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FA6007]/15 text-[#FA6007]">
                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                            </span>
                                            <h3 className="text-2xl font-extrabold tracking-[-0.02em]">{item.title}</h3>
                                            <p className="mt-3 text-[15px] leading-relaxed text-[#B7C6D8]">{item.description}</p>
                                        </div>
                                    </div>
                                )}
                            />
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
                                            <p className="text-lg font-bold">Parceiro homologado</p>
                                            <p className="text-sm font-semibold text-[#FFB07A]">
                                                Validado em compliance e segurança
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
                                Não vendemos software. Ajudamos sua transportadora a crescer.
                            </h2>
                            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                                Tecnologia sozinha não renova contrato. Por isso a Golf Fox entra junto
                                com a sua operação.
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
                <FaqTwoColumn
                    title="Perguntas frequentes"
                    description="Tudo que você precisa saber antes de começar."
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
                            A próxima licitação vai pedir monitoramento. Saia na frente.
                        </h2>
                        <p className="mx-auto mt-4 max-w-[640px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e veja como se posicionar na frente das
                            transportadoras que ainda rodam no escuro. Sem compromisso, com proposta sob
                            medida pra sua operação.
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
