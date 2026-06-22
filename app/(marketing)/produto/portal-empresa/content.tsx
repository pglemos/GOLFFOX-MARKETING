"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { DollarSign, Smile, Eye, ShieldCheck, Quote, Check, ArrowRight } from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";

export function PortalEmpresaContent() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Auditoria Financeira Total",
            description:
                "Elimine o 'custo invisível'. Nossa plataforma audita cada quilômetro rodado e passageiro embarcado, garantindo que você pague apenas pelo serviço efetivamente prestado.",
            stat: "30% economia média",
        },
        {
            icon: Smile,
            title: "Retenção de Talentos",
            description:
                "Transforme o trajeto casa-trabalho em um benefício real. Seus colaboradores chegam descansados, seguros e no horário, aumentando a produtividade e o bem-estar.",
            stat: "+40% satisfação",
        },
        {
            icon: Eye,
            title: "Governança e Compliance",
            description:
                "Tenha visibilidade total. Saiba exatamente quais veículos estão em operação, a regularidade da documentação e o cumprimento das rotas contratadas.",
            stat: "100% auditável",
        },
    ];

    const technicalFeatures = [
        "Rateio automático por Centro de Custo",
        "Dashboard financeiro em tempo real",
        "Mapa de calor de demanda de passageiros",
        "Gestão de escalas e turnos complexos",
        "API para integração com SAP/Totvs",
    ];

    const faqs = [
        {
            question: "Como funciona a auditoria de custos?",
            answer:
                "O sistema cruza o GPS do veículo com os check-ins dos passageiros. Se uma viagem não ocorreu ou teve desvio, o sistema alerta e ajusta o pré-faturamento automaticamente.",
        },
        {
            question: "Consigo integrar com meu sistema de folha?",
            answer:
                "Sim! Nossa API permite integração bidirecional para importar colaboradores e exportar os descontos de vale-transporte/fretado diretamente para sua folha.",
        },
        {
            question: "Funciona para turnos rotativos?",
            answer:
                "Perfeitamente. O algoritmo da GOLF FOX ajusta a oferta de veículos baseada na demanda real de cada turno, evitando ônibus vazios.",
        },
    ];

    const testimonials = [
        {
            quote:
                "Antes da GOLF FOX, perdíamos 3 dias conferindo planilhas de transporte. Hoje fechamos o mês em 2 horas e reduzimos o custo em 18%.",
            name: "Roberto Mendes",
            role: "Gerente de Facilities, Indústria 4.0",
        },
        {
            quote:
                "A reclamação dos funcionários sobre 'ônibus atrasado' zerou. Eles acompanham pelo app e isso melhorou muito o clima na fábrica.",
            name: "Ana Clara Souza",
            role: "Diretora de RH, Logística SC",
        },
    ];

    return (
        <MotionConfig reducedMotion="user">
            <div className="font-archivo text-[#122334]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] text-white">
                    <Image
                        src="/images/institucional/equipe-onibus.jpg"
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
                                Para Gestores de RH e Facilities
                            </span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                            >
                                Gestão de Fretamento que o Financeiro ama e o RH agradece
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-6 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl"
                            >
                                Abandone as planilhas manuais. Tenha controle financeiro absoluto e ofereça a
                                melhor experiência de transporte para seus colaboradores.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                                    href="/como-funciona"
                                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Ver como funciona
                                </Link>
                            </motion.div>
                        </div>

                        {/* Screenshot do produto (browser card) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="pointer-events-none absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(250,96,7,0.25),transparent_70%)] blur-[10px]" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-[18px] border border-white/50 bg-[#0E2C4D] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                                <div className="flex items-center gap-1.5 px-4 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                </div>
                                <Image
                                    src="/assets/product/dashboard-empresa.png"
                                    alt="Dashboard do Portal Empresa da Golf Fox"
                                    width={760}
                                    height={520}
                                    className="h-auto w-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                    {/* curva de transição */}
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== BENEFÍCIOS ===================== */}
                <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-14 max-w-[680px] text-center">
                            <Eyebrow>Por que o Portal Empresa</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Controle financeiro e experiência de transporte, juntos.
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 shadow-[0_1px_2px_rgba(11,36,64,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,36,64,0.10)]"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#FFF0E6]">
                                        <benefit.icon className="h-7 w-7 text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-[#0B2440]">{benefit.title}</h3>
                                    <p className="mb-6 text-[15.5px] leading-relaxed text-[#56697E]">{benefit.description}</p>
                                    <span className="inline-flex rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-bold text-[#C2410C]">
                                        {benefit.stat}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== DEEP DIVE (compliance / auditoria) ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                                <ShieldCheck className="h-[15px] w-[15px]" aria-hidden="true" />
                                Compliance Garantido
                            </span>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Fim das surpresas no fechamento do mês
                            </h2>
                            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#BBCADB]">
                                Nossos relatórios não são apenas dados, são evidências. Visualize o custo por
                                passageiro, ocupação média e desvios de rota em tempo real. O sistema gera
                                automaticamente os arquivos para auditoria e pagamento.
                            </p>
                            <ul className="mt-7 flex flex-col gap-3.5">
                                {technicalFeatures.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-[16.5px] font-semibold text-white">
                                        <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                            <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0E2C4D] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                                <div className="flex items-center gap-1.5 px-4 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                </div>
                                <Image
                                    src="/assets/product/dashboard-empresa.png"
                                    alt="Dashboard financeiro da Golf Fox com custo por passageiro e desvios de rota"
                                    width={760}
                                    height={520}
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== DEPOIMENTOS ===================== */}
                <section className="border-t border-[#E8EDF3] bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1000px]">
                        <div className="mb-12 text-center">
                            <Eyebrow>Quem já usa</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                O que dizem nossos parceiros
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {testimonials.map((t) => (
                                <motion.div
                                    key={t.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 text-left shadow-[0_10px_30px_rgba(11,36,64,0.06)]"
                                >
                                    <Quote className="mb-6 h-10 w-10 text-[#FFD9BF]" aria-hidden="true" />
                                    <p className="mb-6 text-pretty text-[17px] italic leading-relaxed text-[#52647A]">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div>
                                        <strong className="block font-extrabold text-[#0B2440]">{t.name}</strong>
                                        <span className="text-sm text-[#71859B]">{t.role}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[820px]">
                        <div className="mb-12 text-center">
                            <Eyebrow>Perguntas frequentes</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Dúvidas comuns de Gestores
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {faqs.map((faq, i) => (
                                <details key={faq.question} className="gf-faq rounded-[14px] border border-[#E7EDF3] bg-white px-6" open={i === 0}>
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-[22px] text-lg font-bold text-[#0B2440]">
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
                            Sua operação merece essa inteligência
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma conversa com nossos especialistas e receba um diagnóstico gratuito da sua
                            malha de transporte.
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
