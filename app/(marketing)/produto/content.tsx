"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { Building2, Truck, UserCog, Smartphone, ArrowRight, Check } from "lucide-react";

import { RouteBackdrop } from "@/components/marketing/landing-ui";

const PRODUCTS = [
    {
        id: "empresa",
        icon: Building2,
        kicker: "Para gestores e RH",
        title: "Portal Empresa",
        description:
            "Esqueça as planilhas. Controle total sobre custos e qualidade do transporte dos seus colaboradores, em tempo real.",
        benefits: [
            "Redução de até 30% nos custos via otimização de rotas",
            "Relatórios auditáveis por centro de custo",
            "Dashboard financeiro com previsão de gastos",
            "Monitoramento de satisfação dos colaboradores",
        ],
        image: "/assets/product/dashboard-empresa.png",
        href: "/produto/portal-empresa",
    },
    {
        id: "transportadora",
        icon: Truck,
        kicker: "Para operadores logísticos",
        title: "Portal Transportadora",
        description:
            "Aumente sua margem com gestão de frota eficiente e automatizada. Elimine ociosidade e blinde sua operação.",
        benefits: [
            "Gestão preventiva de manutenção da frota",
            "Controle automatizado de receitas e contratos",
            "Alocação inteligente de motoristas e veículos",
            "Redução de km improdutivo e ociosidade",
        ],
        image: "/assets/product/dashboard-transportadora.png",
        href: "/produto/portal-transportadora",
    },
    {
        id: "motorista",
        icon: UserCog,
        kicker: "Para quem dirige",
        title: "App do Motorista",
        description:
            "Uma ferramenta que valoriza o motorista: navegação precisa, checklist digital e boa condução incentivada.",
        benefits: [
            "Navegação GPS otimizada para ônibus e vans",
            "Checklist digital obrigatório pré-viagem",
            "Pontuação de segurança e boa condução",
            "Comunicação direta com a central operacional",
        ],
        image: "/assets/product/app-motorista.png",
        href: "/produto/app-motorista",
    },
    {
        id: "passageiro",
        icon: Smartphone,
        kicker: "Para o colaborador",
        title: "App do Passageiro",
        description:
            "O fim da ansiedade no ponto. O colaborador sabe exatamente onde o ônibus está e a hora que vai chegar.",
        benefits: [
            "Localização do ônibus em tempo real no mapa",
            "Alertas de proximidade e atraso",
            "Avaliação da viagem e do motorista",
            "Cartão de embarque digital (QR Code)",
        ],
        image: "/assets/product/app-passageiro.png",
        href: "/produto/app-passageiro",
    },
];

export function ProdutoContent() {
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
                    <div className="relative mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 lg:py-28">
                        <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                            Ecossistema Golf Fox
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                        >
                            Uma plataforma para <span className="text-[#FA6007]">toda a operação</span>.
                        </motion.h1>
                        <p className="mx-auto mt-5 max-w-[620px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                            Empresas, transportadoras, motoristas e passageiros conectados em uma única
                            solução de monitoramento e controle.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                            <Link
                                href="/demo"
                                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Agendar demonstração
                                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/como-funciona"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Ver como funciona
                            </Link>
                        </div>
                    </div>
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== PRODUTOS (linhas alternadas) ===================== */}
                <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto flex max-w-[1140px] flex-col gap-20 lg:gap-28">
                        {PRODUCTS.map((p, i) => {
                            const reversed = i % 2 === 1;
                            return (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex flex-col items-center gap-10 lg:gap-16 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                                >
                                    {/* Texto */}
                                    <div className="flex-1">
                                        <div className="mb-4 inline-flex items-center gap-2.5">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                                <p.icon className="h-5 w-5 text-[#FA6007]" aria-hidden="true" />
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#01557E]">{p.kicker}</span>
                                        </div>
                                        <h2 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.4rem]">
                                            {p.title}
                                        </h2>
                                        <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">{p.description}</p>
                                        <ul className="mt-7 flex flex-col gap-3.5">
                                            {p.benefits.map((b) => (
                                                <li key={b} className="flex items-center gap-3 text-[16.5px] font-semibold text-[#1F3147]">
                                                    <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                                        <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                                    </span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={p.href}
                                            className="group mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#C2410C] transition-colors hover:text-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                                        >
                                            Explorar {p.title}
                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    {/* Imagem */}
                                    <div className="w-full flex-1">
                                        <div className="overflow-hidden rounded-[20px] border border-[#E7EDF3] bg-[#0E2C4D] shadow-[0_24px_60px_rgba(11,36,64,0.18)]">
                                            <div className="flex items-center gap-1.5 px-4 py-3">
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                                            </div>
                                            <Image
                                                src={p.image}
                                                alt={`Interface do ${p.title}`}
                                                width={760}
                                                height={520}
                                                className="h-auto w-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* ===================== CTA FINAL ===================== */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-24 text-white sm:px-8 lg:py-28">
                    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                        <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                    </svg>
                    <div className="relative mx-auto max-w-[820px] text-center">
                        <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                            Pronto para ter o controle da sua operação?
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e veja como a Golf Fox conecta toda a sua cadeia de transporte.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link
                                href="/demo"
                                className="inline-flex items-center gap-2.5 rounded-xl bg-[#0B2440] px-8 py-[18px] text-[17px] font-extrabold text-white shadow-[0_16px_40px_rgba(11,36,64,0.4)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
