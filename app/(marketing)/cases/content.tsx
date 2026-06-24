"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import { Building2, Truck, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";

import { Eyebrow, RouteBackdrop } from "@/components/marketing/landing-ui";
import { TestimonialsColumn, type GFTestimonial } from "@/components/marketing/testimonials-columns";

const CASES = [
    {
        type: "Empresa",
        icon: Building2,
        title: "Indústria Automotiva",
        segment: "Manufatura · 2.500 colaboradores",
        challenge: "Falta de visibilidade sobre custos por centro de custo e presença não auditável. Reclamações frequentes de atrasos.",
        solution: "Portal Empresa com check-in QR Code, rateio automático de custos e alertas de atraso em tempo real.",
        results: [
            { metric: "40%", label: "Menos reclamações" },
            { metric: "15%", label: "Economia em custos" },
            { metric: "100%", label: "Presença auditável" },
        ],
        quote: "Agora temos visibilidade total sobre onde está cada centavo gasto com transporte.",
        author: "Gerente de RH",
    },
    {
        type: "Transportadora",
        icon: Truck,
        title: "Transportadora Regional",
        segment: "Fretamento · 45 veículos",
        challenge: "Gestão manual de frota, documentos de motoristas desatualizados e dificuldade em calcular margem por rota.",
        solution: "Portal Transportadora com gestão de frota, alertas de documentos e DRE operacional por rota.",
        results: [
            { metric: "25%", label: "Aumento de margem" },
            { metric: "0", label: "Documentos vencidos" },
            { metric: "30min", label: "Economia/dia por gestor" },
        ],
        quote: "O DRE operacional mudou nossa forma de precificar. Hoje sabemos a margem real de cada contrato.",
        author: "Diretor de Operações",
    },
    {
        type: "Multi-empresa",
        icon: Users,
        title: "Consultoria de Logística",
        segment: "Operador · 8 empresas atendidas",
        challenge: "Gerenciar múltiplas empresas com planilhas distintas, sem padronização e muito retrabalho em relatórios.",
        solution: "Plataforma Golf Fox com visão consolidada por empresa, padrões globais e relatórios automáticos por cliente.",
        results: [
            { metric: "60%", label: "Menos tempo em relatórios" },
            { metric: "3x", label: "Mais empresas geridas" },
            { metric: "1", label: "Painel para tudo" },
        ],
        quote: "Triplicamos nossa capacidade de atendimento sem aumentar a equipe.",
        author: "CEO",
    },
];

const SUMMARY = [
    { icon: TrendingUp, metric: "30%", label: "Redução média de custos" },
    { icon: Clock, metric: "50%", label: "Menos tempo em gestão" },
    { icon: Users, metric: "10k+", label: "Colaboradores transportados" },
    { icon: CheckCircle, metric: "99.5%", label: "Uptime da plataforma" },
];

// ⚠️ DEPOIMENTOS PLACEHOLDER — fictícios, apenas para layout.
// SUBSTITUIR por depoimentos reais (com autorização) antes de publicar.
const TESTIMONIALS: GFTestimonial[] = [
    { text: "Antes a gente descobria o atraso quando o colaborador ligava do ponto. Hoje vejo a rota saindo em tempo real e ajo antes de a reclamação chegar.", name: "Marina Alencar", role: "Coord. de Facilities", initials: "MA" },
    { text: "Parei de pagar por viagem que não aconteceu. A auditoria automática das faturas se pagou já no primeiro mês.", name: "Rodrigo Tavares", role: "Gerente Financeiro", initials: "RT" },
    { text: "A documentação das transportadoras vivia vencendo sem aviso. Agora o alerta chega antes e o risco trabalhista sumiu.", name: "Patrícia Lima", role: "RH Corporativo", initials: "PL" },
    { text: "Implantar foi rápido porque não troquei de transportadora. Em uma semana já estava tudo no painel.", name: "Carlos Eduardo Nunes", role: "Diretor de Operações", initials: "CN" },
    { text: "As câmeras deram segurança pra equipe do turno da noite — e hoje eu tenho registro de tudo para auditoria.", name: "Juliana Prado", role: "Supervisora de Transporte", initials: "JP" },
    { text: "Reduzi assento vazio e hora extra só enxergando a ocupação real de cada rota e turno.", name: "Felipe Moraes", role: "Gerente de Logística", initials: "FM" },
    { text: "Os relatórios viraram evidência no fechamento do mês. Acabou a discussão de 'foi feito ou não' com o fornecedor.", name: "Sandra Bezerra", role: "Controladoria", initials: "SB" },
    { text: "O app acabou com a ansiedade do pessoal no ponto. As reclamações no RH despencaram.", name: "Thiago Ramos", role: "Gestão de Pessoas", initials: "TR" },
    { text: "Tenho 6 transportadoras e agora vejo todas num lugar só. É um controle que eu não tinha em 10 anos de operação.", name: "Anderson Couto", role: "Diretor Industrial", initials: "AC" },
];

export function CasesContent() {
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
                    <div className="relative mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 lg:py-28">
                        <span className="mb-6 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                            Cases reais
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl"
                        >
                            Resultados reais, de <span className="text-[#FA6007]">clientes reais</span>.
                        </motion.h1>
                        <p className="mx-auto mt-5 max-w-[620px] text-pretty text-lg leading-relaxed text-[#B7C6D8] sm:text-xl">
                            Como empresas e transportadoras passaram a controlar o transporte — e o que isso
                            mudou no custo, no risco e no dia a dia da operação.
                        </p>
                    </div>
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== IMPACTO CONSOLIDADO ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-20 text-white sm:px-8">
                    <RouteBackdrop />
                    <div className="relative mx-auto max-w-[1100px]">
                        <div className="mx-auto mb-12 max-w-[600px] text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">Impacto consolidado</span>
                            <h2 className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Resultados agregados dos clientes
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                            {SUMMARY.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-center"
                                >
                                    <div className="mb-3 flex justify-center">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06]">
                                            <item.icon className="h-6 w-6 text-[#FA6007]" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="font-display text-5xl font-black leading-none tabular-nums text-[#FA6007] lg:text-[56px]">
                                        {item.metric}
                                    </div>
                                    <div className="mt-2 text-sm leading-snug text-[#A9BACD] sm:text-[14.5px]">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== CASES DETALHADOS ===================== */}
                <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-14 max-w-[640px] text-center">
                            <Eyebrow>Histórias</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Cada operação, um ganho de controle
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8">
                            {CASES.map((c, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden rounded-[22px] border border-[#E7EDF3] bg-white shadow-[0_16px_40px_rgba(11,36,64,0.08)]"
                                >
                                    <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                                        {/* Conteúdo */}
                                        <div className="p-8 lg:p-12">
                                            <div className="mb-6 inline-flex items-center gap-2.5">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E6]">
                                                    <c.icon className="h-5 w-5 text-[#FA6007]" aria-hidden="true" />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#01557E]">{c.type}</span>
                                            </div>
                                            <h3 className="text-[1.6rem] font-extrabold tracking-[-0.01em] text-[#0B2440]">{c.title}</h3>
                                            <p className="mt-1 text-[15px] text-[#8392A3]">{c.segment}</p>

                                            <div className="mt-7 space-y-5">
                                                <div>
                                                    <h4 className="mb-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#C2410C]">Desafio</h4>
                                                    <p className="text-[16px] leading-relaxed text-[#52647A]">{c.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="mb-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#1A8F52]">Solução</h4>
                                                    <p className="text-[16px] leading-relaxed text-[#52647A]">{c.solution}</p>
                                                </div>
                                            </div>

                                            <blockquote className="mt-7 border-l-[3px] border-[#FA6007] pl-4 text-[16.5px] italic leading-relaxed text-[#1F3147]">
                                                &ldquo;{c.quote}&rdquo;
                                                <footer className="mt-2 text-[14px] font-semibold not-italic text-[#8392A3]">— {c.author}</footer>
                                            </blockquote>
                                        </div>

                                        {/* Resultados */}
                                        <div className="relative flex items-center overflow-hidden bg-[#0B2440] p-8 lg:p-12">
                                            <RouteBackdrop />
                                            <div className="relative w-full">
                                                <h4 className="mb-7 text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">Resultados</h4>
                                                <div className="flex flex-col gap-6">
                                                    {c.results.map((r) => (
                                                        <div key={r.label} className="flex items-baseline gap-3">
                                                            <span className="font-display text-4xl font-black leading-none tabular-nums text-[#FA6007] lg:text-5xl">{r.metric}</span>
                                                            <span className="text-[14px] leading-tight text-[#A9BACD]">{r.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== DEPOIMENTOS ===================== */}
                <section className="relative overflow-hidden bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="gf-aurora-light" aria-hidden="true" />
                    <div className="relative z-10 mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-12 max-w-[600px] text-center">
                            <Eyebrow>Depoimentos</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Quem ganhou controle, recomenda.
                            </h2>
                        </div>
                        <div className="flex max-h-[680px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_82%,transparent)]">
                            <TestimonialsColumn testimonials={TESTIMONIALS.slice(0, 3)} duration={20} />
                            <TestimonialsColumn testimonials={TESTIMONIALS.slice(3, 6)} duration={26} className="hidden md:block" />
                            <TestimonialsColumn testimonials={TESTIMONIALS.slice(6, 9)} duration={23} className="hidden lg:block" />
                        </div>
                    </div>
                </section>

                {/* ===================== LOGOS (rodapé da página) ===================== */}
                <section className="border-y border-[#EEF2F6] bg-white px-5 py-14 sm:px-8">
                    <div className="mx-auto max-w-[1100px] text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8392A3]">
                            Operações que já confiam na Golf Fox
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                            <Image src="/images/clientes/jbs.png" alt="JBS Foods" width={150} height={94} className="h-12 w-auto opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0" />
                            <Image src="/images/clientes/minerva.png" alt="Minerva Foods" width={160} height={67} className="h-9 w-auto opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0" />
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
                            Quer resultados como esses?
                        </h2>
                        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Agende uma demonstração e veja, com as suas rotas, quanto a Golf Fox pode mudar na sua operação.
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
