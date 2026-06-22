"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { ClipboardCheck, ShieldAlert, Navigation, ArrowRight, Check } from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";

export function AppMotoristaContent() {
    const benefits = [
        {
            icon: ClipboardCheck,
            title: "Vistoria Digital em 30s",
            description: "Esqueça a prancheta. O motorista realiza o checklist obrigatório e registro fotográfico direto no app, garantindo que o veículo só saia da garagem em condições ideais.",
        },
        {
            icon: Navigation,
            title: "Navegação Otimizada",
            description: "O motorista recebe a rota exata com todos os pontos de parada. O sistema recalcula o trajeto em tempo real para fugir do trânsito e cumprir os horários.",
        },
        {
            icon: ShieldAlert,
            title: "Botão de Pânico Inteligente",
            description: "Segurança total. Em caso de emergência ou parada não programada, um alerta silencioso é enviado para a central com a localização exata e áudio ambiente.",
        },
    ];

    const features = [
        {
            title: "Antes da Viagem",
            items: ["Login seguro com biometria", "Checklist visual do veículo", "Confirmação de escala e rota"],
        },
        {
            title: "Durante a Rota",
            items: ["GPS com pontos de embarque", "Lista de passageiros em tempo real", "Validação por QR Code, NFC Digital Pass e GPS"],
        },
        {
            title: "Pós-Viagem",
            items: ["Registro automático de KM", "Apontamento de ocorrências", "Meus Ganhos: saldo, extratos e abastecimentos"],
        },
    ];

    const faqs = [
        {
            question: "O app consome muita bateria?",
            answer: "Não. O GOLF FOX Driver foi otimizado para rodar em segundo plano com consumo mínimo de bateria e dados móveis (apenas 50mb/mês em média).",
        },
        {
            question: "Funciona sem internet?",
            answer: "Sim! O modo offline permite realizar todo o check-in de passageiros e checklist. Os dados sincronizam automaticamente assim que o sinal retorna.",
        },
        {
            question: "O motorista pode alterar a rota?",
            answer: "O sistema sugere a rota otimizada, mas permite que o motorista faça desvios autorizados em caso de bloqueios na via, registrando tudo para a central.",
        },
    ];

    return (
        <MotionConfig reducedMotion="user">
            <div className="font-archivo text-[#122334]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] text-white">
                    <Image
                        src="/images/institucional/coach-rodovia.jpg"
                        alt=""
                        aria-hidden="true"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-[0.16]"
                    />
                    <RouteBackdrop withGlow animated />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
                        {/* Texto */}
                        <div>
                            <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                App do Motorista
                            </span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                            >
                                Mais que um app, <span className="text-[#FA6007]">seu copiloto na estrada</span>
                            </motion.h1>
                            <p className="mt-5 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                                Equipe sua frota com a ferramenta que elimina o papel, guia o motorista e garante a segurança de todos a bordo.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3.5">
                                <Link
                                    href="/demo"
                                    className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Agendar demonstração
                                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/como-funciona"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Ver como funciona
                                </Link>
                            </div>
                        </div>

                        {/* Phone mockup */}
                        <div className="flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative h-[600px] w-[296px] rounded-[2.6rem] border-[12px] border-[#060F1B] bg-[#060F1B] shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
                            >
                                <div className="absolute left-1/2 top-0 z-10 h-[22px] w-[120px] -translate-x-1/2 rounded-b-[1rem] bg-[#060F1B]" aria-hidden="true" />
                                <div className="absolute -left-[15px] top-[110px] h-[44px] w-[3px] rounded-s-lg bg-[#060F1B]" aria-hidden="true" />
                                <div className="absolute -left-[15px] top-[166px] h-[44px] w-[3px] rounded-s-lg bg-[#060F1B]" aria-hidden="true" />
                                <div className="absolute -right-[15px] top-[140px] h-[64px] w-[3px] rounded-e-lg bg-[#060F1B]" aria-hidden="true" />
                                <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-white">
                                    <Image
                                        src="/images/app-motorista/perfil.png"
                                        alt="Central do Motorista no app Golf Fox"
                                        fill
                                        sizes="296px"
                                        className="object-cover object-top"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== BENEFÍCIOS ===================== */}
                <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mb-14 max-w-[640px]">
                            <Eyebrow>Tecnologia a bordo</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Tecnologia que simplifica o dia a dia de quem dirige
                            </h2>
                            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                                Uma interface desenhada para ser usada com um toque. Botões grandes, alto contraste e fluxo intuitivo para que o foco esteja sempre na direção.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8"
                                >
                                    <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                        <benefit.icon className="h-6 w-6 text-[#FA6007]" aria-hidden="true" />
                                    </span>
                                    <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">{benefit.title}</h3>
                                    <p className="mt-3 text-pretty leading-relaxed text-[#52647A]">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== GALERIA (telas reais) ===================== */}
                <section className="relative overflow-hidden bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-14 max-w-[640px] text-center">
                            <Eyebrow>Por dentro do app</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Feito para o dia a dia de quem dirige
                            </h2>
                        </div>
                        <div className="flex flex-wrap items-start justify-center gap-10 sm:gap-12">
                            {[
                                { src: "/images/app-motorista/rota.png", title: "Em rota", desc: "Inicie a viagem e controle o embarque por QR Code." },
                                { src: "/images/app-motorista/abastecimento.png", title: "Abastecimento", desc: "Lance valor, litros e km com foto do comprovante." },
                                { src: "/images/app-motorista/seguranca.png", title: "Segurança", desc: "Acesso protegido e gestão de sessões do dispositivo." },
                            ].map((s, i) => (
                                <motion.figure
                                    key={s.src}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex w-[216px] flex-col items-center text-center"
                                >
                                    <div className="relative h-[460px] w-[216px] rounded-[2rem] border-[10px] border-[#060F1B] bg-[#060F1B] shadow-[0_24px_60px_rgba(11,36,64,0.22)]">
                                        <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-white">
                                            <Image src={s.src} alt={`Tela ${s.title} do app Golf Fox`} fill sizes="216px" className="object-cover object-top" />
                                        </div>
                                    </div>
                                    <figcaption className="mt-5">
                                        <div className="text-[17px] font-extrabold text-[#0B2440]">{s.title}</div>
                                        <p className="mx-auto mt-1 max-w-[200px] text-[14px] leading-snug text-[#52647A]">{s.desc}</p>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== JORNADA (escura) ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto max-w-[1140px]">
                        <div className="mb-14 text-center">
                            <span className="inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                Processo padronizado
                            </span>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Jornada de Segurança
                            </h2>
                            <p className="mx-auto mt-4 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                                Processos padronizados do início ao fim da viagem
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {features.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="rounded-[18px] border border-white/10 bg-white/[0.04] p-8"
                                >
                                    <span className="font-display tabular-nums mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#FA6007] text-lg font-extrabold text-white">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-xl font-extrabold tracking-[-0.02em] text-white">{step.title}</h3>
                                    <ul className="mt-6 flex flex-col gap-3.5">
                                        {step.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-[16px] font-semibold text-[#D6E1ED]">
                                                <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                                    <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <section className="bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[820px]">
                        <div className="mb-12 text-center">
                            <Eyebrow>Perguntas frequentes</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Perguntas frequentes
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {faqs.map((faq, i) => (
                                <details key={faq.question} className="gf-faq rounded-[14px] border border-[#E7EDF3] bg-white px-6" open={i === 0}>
                                    <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 py-[22px] text-lg font-bold text-[#0B2440]">
                                        {faq.question}
                                        <span className="gf-chev flex-none text-2xl font-normal leading-none text-[#FA6007]" aria-hidden="true">+</span>
                                    </summary>
                                    <p className="mb-[22px] text-base leading-relaxed text-[#52647A]">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== CTA FINAL ===================== */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                        <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                    </svg>
                    <div className="relative mx-auto max-w-[820px] text-center">
                        <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                            Modernize sua frota hoje mesmo
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Dê a seus motoristas a ferramenta que eles merecem. Segurança e eficiência na palma da mão.
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
