"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "framer-motion";
import {
    ArrowRight,
    MapPin,
    ShieldCheck,
    Camera,
    Check,
    X,
    AlertTriangle,
    Map as MapIcon,
    ScanLine,
    Radar,
    Bus,
    Smartphone,
    Wallet,
    BarChart3,
    Bell,
    FileCheck,
    Building2,
    Truck,
    UserCog,
    Users,
    TrendingUp,
    Mail,
} from "lucide-react";

import { FaqTwoColumn } from "@/components/marketing/faq-two-column";
import { trackProfileTabSelect } from "@/lib/analytics/track-events";

// ============================================================
// Dados da landing (copy do design Golf Fox)
// ============================================================
const WHATSAPP_HREF = "https://wa.me/5511939337163";
const EMAIL = "contato@golffox.com.br";
const EMAIL_HREF = `mailto:${EMAIL}`;

const STATS = [
    { value: "30%", label: "menos custo com rotas e assentos ociosos" },
    { value: "100%", label: "das viagens auditadas e registradas" },
    { value: "Zero", label: "planilhas manuais e grupos de WhatsApp" },
    { value: "24/7", label: "monitoramento em tempo real" },
];

const PILLARS = [
    {
        icon: MapPin,
        title: "Monitoramento em tempo real",
        desc: "Acompanhe cada rota e cada veículo das suas transportadoras ao vivo, de qualquer lugar.",
    },
    {
        icon: ShieldCheck,
        title: "Documentação sob controle",
        desc: "A Golf Fox fiscaliza a documentação de todas as transportadoras e te avisa antes de virar risco trabalhista.",
    },
    {
        icon: Camera,
        title: "Acompanhamento por câmera",
        desc: "Veja o que acontece nos veículos e tenha registro para auditoria e segurança.",
    },
];

const WITHOUT_CONTROL = [
    "Você não sabe se o ônibus saiu no horário",
    "Documentação vence sem ninguém avisar",
    "Nenhum registro do que aconteceu na rota",
    "Dados soltos em planilhas e no WhatsApp",
];

const WITH_GOLFFOX = [
    "Cada rota e cada veículo ao vivo no painel",
    "Alerta antes de a documentação vencer",
    "Registro em câmera para auditoria e segurança",
    "Tudo centralizado em uma única plataforma",
];

const MODULES = [
    { icon: MapIcon, title: "Planejamento e Otimização", desc: "Algoritmos que desenham a melhor rota para economizar tempo e combustível." },
    { icon: ScanLine, title: "Controle de Acesso", desc: "Embarque validado em camadas: QR Code, NFC Digital Pass e confirmação por GPS." },
    { icon: Radar, title: "Monitoramento Ao Vivo", desc: "Torre de controle virtual com alertas preditivos de atraso." },
    { icon: Bus, title: "Gestão de Frotas", desc: "Controle total de pneus, combustível, manutenção e documentos." },
    { icon: Smartphone, title: "App do Colaborador", desc: "“Onde está meu ônibus? Vou conseguir embarcar?” — na palma da mão." },
    { icon: Wallet, title: "Gestão Financeira", desc: "Auditoria automática de faturas. Pague apenas pelo serviço realizado." },
    { icon: BarChart3, title: "Business Intelligence", desc: "Dashboards executivos para decisão baseada em dados reais." },
    { icon: Bell, title: "Comunicação e Mural", desc: "Mural de avisos segregado por empresa, notificações push e carpooling entre colaboradores." },
    { icon: FileCheck, title: "Compliance", desc: "Garanta que fornecedores e motoristas estejam legais e aptos." },
];

const PROFILES = [
    {
        key: "empresa",
        label: "Empresa",
        icon: Building2,
        results: [
            "Visibilidade total das transportadoras",
            "Documentação fiscalizada, sem risco trabalhista",
            "Fim das reclamações no RH",
        ],
        features: [
            "Monitoramento em tempo real",
            "Auditoria de embarque e histórico",
            "Acompanhamento por câmera",
            "Segurança jurídica (LGPD)",
        ],
    },
    {
        key: "transportadora",
        label: "Transportadora",
        icon: Truck,
        results: [
            "Comprovação de que o serviço foi entregue",
            "Menos disputa com o contratante",
            "Relação mais transparente e duradoura",
        ],
        features: [
            "Registro digital de cada rota",
            "Documentação centralizada",
            "Relatórios de pontualidade",
        ],
    },
    {
        key: "motorista",
        label: "Motorista",
        icon: UserCog,
        results: [
            "Rota clara, sem improviso",
            "Menos cobrança injusta",
            "Canal direto com a operação",
        ],
        features: [
            "App com a rota do dia",
            "Checklist e registro de ocorrências",
            "Navegação e ponto de embarque",
        ],
    },
    {
        key: "passageiro",
        label: "Passageiro",
        icon: Users,
        results: [
            "Saber onde o ônibus está",
            "Menos tempo esperando no ponto",
            "Mais previsibilidade no dia a dia",
        ],
        features: [
            "App “onde está meu ônibus?”",
            "Avisos e notificações da rota",
            "Confirmação de embarque",
        ],
    },
];

const SECTORS = [
    {
        key: "frigorificos",
        label: "Frigoríficos e alimentos",
        title: "Transporte parado é produção parada",
        desc: "Monitore em tempo real todas as transportadoras que levam seus turnos e seja avisado antes de o problema virar prejuízo.",
        checks: [
            "Rotas e veículos de cada turno ao vivo",
            "Alerta de documentação antes do vencimento",
            "Histórico em câmera para auditoria",
        ],
        metric: "30%",
        metricLabel: "menos custo com rotas e assentos ociosos",
        metricDesc: "Visibilidade de ocupação e pontualidade ajuda a cortar assentos vazios e horas extras na operação.",
    },
    {
        key: "cd",
        label: "Centros de distribuição",
        title: "Cada transportadora é um risco que você não enxerga",
        desc: "Centralize o controle de todas as transportadoras, com documentação fiscalizada e histórico completo para auditoria.",
        checks: [
            "Controle único de todas as transportadoras",
            "Documentação fiscalizada e centralizada",
            "Registro completo para auditoria",
        ],
        metric: "100%",
        metricLabel: "das viagens auditadas e registradas",
        metricDesc: "Todo embarque e toda rota ficam registrados, acabando com o “a culpa é sua” quando algo dá errado.",
    },
    {
        key: "farma",
        label: "Farmacêutico",
        title: "Conformidade e rastreabilidade em cada rota",
        desc: "Garanta que cada transportadora esteja com a documentação em dia e cada viagem registrada, do jeito que o setor exige.",
        checks: [
            "Fornecedores e motoristas sempre regulares",
            "Rastreabilidade ponta a ponta",
            "Conformidade com a LGPD",
        ],
        metric: "Zero",
        metricLabel: "planilhas manuais e grupos de WhatsApp",
        metricDesc: "Dados sensíveis saem das planilhas e das mensagens soltas e passam a viver em uma plataforma só.",
    },
    {
        key: "ecommerce",
        label: "E-commerce e logística",
        title: "Escale sem perder o controle",
        desc: "Sua operação muda toda semana e o número de transportadoras cresce. Tenha uma visão única de todas elas em tempo real.",
        checks: [
            "Visão única de todas as transportadoras",
            "Acompanhamento em tempo real",
            "Escala sem perder rastreabilidade",
        ],
        metric: "24/7",
        metricLabel: "monitoramento em tempo real",
        metricDesc: "Acompanhe picos e mudanças de rota a qualquer hora, sem depender de ligações e mensagens.",
    },
];

const FAQS = [
    {
        q: "O que é a Golf Fox?",
        a: "Uma plataforma de monitoramento e controle do transporte de colaboradores. A Golf Fox acompanha as transportadoras que você já contrata — sem operar ônibus nem substituir os seus fornecedores.",
    },
    {
        q: "Preciso trocar minha transportadora?",
        a: "Não. Você continua com quem já transporta para você. A Golf Fox entra como a camada de controle sobre os fornecedores que você já tem.",
    },
    {
        q: "Como funciona o monitoramento em tempo real?",
        a: "Você acompanha cada rota e cada veículo ao vivo, de qualquer lugar, com alertas de atraso e ocorrência. Tudo centralizado em um único painel.",
    },
    {
        q: "E a documentação das transportadoras?",
        a: "A Golf Fox fiscaliza a documentação de todas as transportadoras e avisa você antes de um vencimento virar risco trabalhista — com histórico registrado para auditoria.",
    },
    {
        q: "A Golf Fox atende à LGPD?",
        a: "Sim. Os dados da operação ficam centralizados e protegidos na plataforma, no lugar de planilhas e mensagens soltas, em conformidade com a LGPD.",
    },
    {
        q: "Quanto tempo para começar a usar?",
        a: "A implantação é rápida porque você não troca de fornecedor. Cadastramos suas transportadoras e rotas e o painel já passa a operar com os veículos que você já tem.",
    },
];

// Palavras que giram na frase de impacto (adaptado do efeito 21st.dev à marca)
const ROTATING = ["rotas", "motoristas", "câmeras", "documentos", "custos"];

// Variantes de animação reaproveitáveis (sutis — respeitam reduced-motion via MotionConfig)
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

// ============================================================
// Helpers de UI
// ============================================================
function Eyebrow({
    children,
    tone = "blue",
}: {
    children: React.ReactNode;
    tone?: "blue" | "orange";
}) {
    const tones = {
        blue: "text-[#01557E]",
        orange: "text-[#C2410C]",
    } as const;
    return (
        <span
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${tones[tone]}`}
        >
            {children}
        </span>
    );
}

/** Traçado de rota decorativo usado nos fundos escuros (hero, faixas).
 *  É a "assinatura" da marca; no hero a rota principal é animada (tese: ao vivo). */
function RouteBackdrop({ withGlow = false, animated = false }: { withGlow?: boolean; animated?: boolean }) {
    return (
        <svg
            viewBox="0 0 1440 760"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        >
            {withGlow && (
                <defs>
                    <radialGradient id="hglow" cx="78%" cy="28%" r="60%">
                        <stop offset="0%" stopColor="#13478F" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#0B2440" stopOpacity="0" />
                    </radialGradient>
                </defs>
            )}
            {withGlow && <rect width="1440" height="760" fill="url(#hglow)" />}
            <path
                d="M-40,560 C260,520 360,300 640,300 C900,300 980,520 1240,470 C1380,444 1440,360 1520,360"
                fill="none"
                stroke="#FA6007"
                strokeWidth="2.5"
                strokeDasharray="2 12"
                strokeLinecap="round"
                opacity="0.7"
                className={animated ? "gf-route-dash" : undefined}
            />
            <path
                d="M-40,640 C320,640 420,440 720,440 C1020,440 1140,640 1500,610"
                fill="none"
                stroke="#2E5A8F"
                strokeWidth="1.5"
                strokeDasharray="1 16"
                strokeLinecap="round"
                opacity="0.55"
            />
            <circle cx="640" cy="300" r="6" fill="#FA6007" />
            <circle cx="640" cy="300" r="13" fill="none" stroke="#FA6007" strokeWidth="1.5" opacity="0.5" />
            <circle cx="1240" cy="470" r="5" fill="#fff" opacity="0.8" />
        </svg>
    );
}

/** Mini-mapa com rota animada — reaproveitado no hero e no card "Com a Golf Fox". */
function RouteMap({ className = "" }: { className?: string }) {
    return (
        <div className={`relative bg-gradient-to-br from-[#EAF0F6] to-[#DCE6F0] ${className}`}>
            <svg viewBox="0 0 420 182" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
                <g stroke="#C2D0E0" strokeWidth="1">
                    <path d="M0,46 H420 M0,96 H420 M0,140 H420 M70,0 V182 M180,0 V182 M300,0 V182 M380,0 V182" fill="none" />
                </g>
                <path d="M40,150 C110,150 120,70 200,70 C280,70 300,40 380,40" fill="none" stroke="#01557E" strokeWidth="3.5" strokeLinecap="round" opacity="0.25" />
                <path
                    d="M40,150 C110,150 120,70 200,70 C280,70 300,40 380,40"
                    fill="none"
                    stroke="#FA6007"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="10 240"
                    className="gf-route-dash"
                />
                <circle cx="40" cy="150" r="6" fill="#01557E" />
                <circle cx="380" cy="40" r="6" fill="#34D17E" />
            </svg>
            <div className="absolute left-[46%] top-[38%] -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#FA6007] shadow-[0_6px_14px_rgba(250,96,7,0.5)]">
                    <Bus className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}

// ============================================================
// Página
// ============================================================
export function HomePage() {
    const [activeProfile, setActiveProfile] = useState(0);
    const [activeSector, setActiveSector] = useState(0);
    const [rotIndex, setRotIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setRotIndex((prev) => (prev + 1) % ROTATING.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    const handleProfileSelect = (index: number, profile: string) => {
        setActiveProfile(index);
        trackProfileTabSelect(profile.toLowerCase());
    };

    const sector = SECTORS[activeSector];
    const profile = PROFILES[activeProfile];

    return (
        <MotionConfig reducedMotion="user">
            <div className="relative bg-white font-archivo text-[#122334]">
                {/* Aurora único — camada fixa atrás de tudo (aparece nas áreas brancas) */}
                <div className="gf-aurora-fixed" aria-hidden="true" />
                <div className="relative z-10">
                {/* ===================== HERO ===================== */}
                <section id="top" className="relative overflow-hidden bg-[#0B2440] text-white">
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
                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5 }}
                                className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
                            >
                                Você contrata o transporte.
                                <br />
                                <span className="text-[#FA6007]">A Golf Fox te dá o controle dele.</span>
                            </motion.h1>
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-6 max-w-[560px] text-lg leading-relaxed text-[#B7C6D8]"
                            >
                                Monitore em tempo real todas as transportadoras que levam seus colaboradores,
                                fiscalize a documentação e acompanhe tudo por câmera, em uma plataforma só. Sem
                                trocar quem já transporta para você.
                            </motion.p>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-9 flex flex-wrap gap-3.5"
                            >
                                <Link
                                    href="#cta"
                                    className="group inline-flex items-center gap-2.5 rounded-xl bg-[#D14600] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.36)] transition-all duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Quero controlar meu transporte
                                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="#solucao"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Ver como funciona
                                </Link>
                            </motion.div>
                            <div className="mt-10 flex flex-wrap gap-8">
                                <div>
                                    <div className="text-2xl font-extrabold tabular-nums">31 anos</div>
                                    <div className="text-[13px] text-[#8FA3B8]">de operação em transporte</div>
                                </div>
                                <div className="w-px self-stretch bg-white/15" aria-hidden="true" />
                                <div>
                                    <div className="text-2xl font-extrabold">Tempo real</div>
                                    <div className="text-[13px] text-[#8FA3B8]">rotas, veículos e câmeras</div>
                                </div>
                            </div>
                        </div>

                        {/* Painel de monitoramento (mock) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="pointer-events-none absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(250,96,7,0.25),transparent_70%)] blur-[10px]" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-[18px] border border-white/50 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                                <div className="flex items-center justify-between bg-[#0E2C4D] px-[18px] py-3.5 text-white">
                                    <span className="text-sm font-bold tracking-wide">Painel de Controle</span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7FE1A6]/[0.12] px-2.5 py-1 text-[11.5px] font-bold text-[#7FE1A6]">
                                        <span className="gf-live-dot h-[7px] w-[7px] rounded-full bg-[#34D17E]" aria-hidden="true" />
                                        AO VIVO
                                    </span>
                                </div>
                                <RouteMap className="h-[182px]" />
                                {/* KPIs */}
                                <div className="grid grid-cols-3 gap-px bg-[#EDF1F6]">
                                    {[
                                        { v: "42", l: "veículos em rota", accent: false },
                                        { v: "98%", l: "no horário", accent: false },
                                        { v: "3", l: "alertas", accent: true },
                                    ].map((kpi) => (
                                        <div key={kpi.l} className="bg-white px-3.5 py-3">
                                            <div className={`text-xl font-extrabold tabular-nums ${kpi.accent ? "text-[#FA6007]" : "text-[#0B2440]"}`}>
                                                {kpi.v}
                                            </div>
                                            <div className="text-[11px] font-medium text-[#6B7C8E]">{kpi.l}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Linhas de rota */}
                                <div className="px-4 pb-4 pt-1.5">
                                    {[
                                        { dot: "#34D17E", t: "Transp. Andradina · Turno A", s: "Saiu 05:58 · 38 colaboradores", tag: "No horário", tagCls: "text-[#1A8F52] bg-[#E6F7EE]" },
                                        { dot: "#FA6007", t: "Rota Centro · Turno B", s: "CNH do motorista vence em 6 dias", tag: "Documento", tagCls: "text-[#C24A00] bg-[#FFF0E6]" },
                                        { dot: "#34D17E", t: "Transp. Vale · Noturno", s: "Câmera ativa · 41 colaboradores", tag: "No horário", tagCls: "text-[#1A8F52] bg-[#E6F7EE]" },
                                    ].map((row, i, arr) => (
                                        <div
                                            key={row.t}
                                            className={`flex items-center justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-[#EEF2F6]" : ""}`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ backgroundColor: row.dot }} aria-hidden="true" />
                                                <div>
                                                    <div className="text-[13.5px] font-bold text-[#1A2A3C]">{row.t}</div>
                                                    <div className="text-[11.5px] text-[#8392A3]">{row.s}</div>
                                                </div>
                                            </div>
                                            <span className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${row.tagCls}`}>{row.tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* curva de transição */}
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" className="block h-[54px] w-full">
                        <path d="M0,70 L0,30 C360,70 1080,70 1440,30 L1440,70 Z" fill="#fff" />
                    </svg>
                </section>

                {/* ===================== A DOR ===================== */}
                <section className="px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1000px] text-center">
                        <Eyebrow tone="orange">
                            <AlertTriangle className="h-[15px] w-[15px]" aria-hidden="true" />
                            O ponto cego da sua operação
                        </Eyebrow>
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-6 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B2440] sm:text-4xl lg:text-[46px]"
                        >
                            Você paga pelo transporte, mas não enxerga o que acontece nele.
                        </motion.h2>
                        <p className="mx-auto mt-6 max-w-[760px] text-pretty text-lg leading-relaxed text-[#52647A] sm:text-xl">
                            As transportadoras levam sua equipe todo dia, mas você não sabe se o ônibus saiu na
                            hora, se a documentação está em dia, se é seguro. Quando algo dá errado, a
                            responsabilidade é sua — mesmo o veículo não sendo.
                        </p>
                    </div>
                </section>

                {/* ===================== A SOLUÇÃO ===================== */}
                <section id="solucao" className="gf-glass border-y border-white/70 px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="overflow-hidden rounded-[18px] border border-white shadow-[0_24px_60px_rgba(11,36,64,0.22)]">
                                <div className="flex items-center justify-between bg-[#0E2C4D] px-5 py-3.5 text-sm font-bold text-white">
                                    <span>Painel de monitoramento</span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7FE1A6]/[0.12] px-2.5 py-1 text-[11px] font-bold text-[#7FE1A6]">
                                        <span className="gf-live-dot h-[6px] w-[6px] rounded-full bg-[#34D17E]" aria-hidden="true" />
                                        AO VIVO
                                    </span>
                                </div>
                                <Image
                                    src="/images/screenshots/monitoramento.png"
                                    alt="Painel da Golf Fox monitorando rotas e veículos das transportadoras em tempo real"
                                    width={760}
                                    height={520}
                                    className="h-auto w-full"
                                />
                            </div>
                            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-[#EAEFF4] bg-white px-4 py-3.5 shadow-[0_18px_40px_rgba(11,36,64,0.18)]">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2440]">
                                    <MapPin className="h-5 w-5 text-[#FA6007]" aria-hidden="true" />
                                </span>
                                <div>
                                    <div className="text-[15px] font-extrabold text-[#0B2440]">Toda rota, sob controle</div>
                                    <div className="text-[12.5px] text-[#71859B]">sem trocar de fornecedor</div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <Eyebrow>A virada</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Todas as suas transportadoras, sob um único controle.
                            </h2>
                            <p className="mt-5 text-pretty text-lg leading-relaxed text-[#52647A]">
                                A Golf Fox monitora cada rota em tempo real, fiscaliza a documentação de todas as
                                transportadoras e acompanha os veículos por câmera. Tudo centralizado em uma
                                plataforma. Você não troca de fornecedor: você ganha controle sobre os que já tem.
                            </p>
                            <ul className="mt-7 flex flex-col gap-3.5">
                                {[
                                    "Uma plataforma para todas as transportadoras",
                                    "Sem trocar quem já transporta para você",
                                    "Histórico e registro para auditoria",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-[16.5px] font-semibold text-[#1F3147]">
                                        <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                            <Check className="h-[15px] w-[15px] text-[#1A8F52]" aria-hidden="true" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===================== ANTES / DEPOIS ===================== */}
                <section className="px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1100px]">
                        <div className="mx-auto mb-12 max-w-[680px] text-center">
                            <Eyebrow>Antes e depois</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                O que muda quando você passa a ver.
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Sem controle */}
                            <div className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E6EC] bg-[#F1F3F6]">
                                <div className="flex items-center gap-2.5 bg-[#E7EAEF] px-6 py-[18px]">
                                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#C4CBD4]">
                                        <X className="h-4 w-4 text-[#6B7585]" aria-hidden="true" />
                                    </span>
                                    <span className="text-base font-extrabold text-[#5A6675]">Sem controle</span>
                                </div>
                                <div className="flex flex-col px-6 pb-6 pt-2">
                                    {WITHOUT_CONTROL.map((item, i, arr) => (
                                        <div key={item} className={`flex items-start gap-3 py-3.5 ${i < arr.length - 1 ? "border-b border-[#E4E8ED]" : ""}`}>
                                            <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#E2E6EC]">
                                                <X className="h-3 w-3 text-[#8A93A0]" aria-hidden="true" />
                                            </span>
                                            <span className="text-[15.5px] font-semibold text-[#515C6B]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Com a Golf Fox */}
                            <div className="flex flex-col overflow-hidden rounded-[18px] border border-[#FFD9BF] bg-white shadow-[0_18px_44px_rgba(11,36,64,0.12)]">
                                <div className="flex items-center gap-2.5 bg-[#0B2440] px-6 py-[18px]">
                                    <ShieldCheck className="h-5 w-5 text-[#FA6007]" aria-hidden="true" />
                                    <span className="text-base font-extrabold text-white">Com a Golf Fox</span>
                                </div>
                                <div className="flex flex-col px-6 pb-6 pt-2">
                                    {WITH_GOLFFOX.map((item, i, arr) => (
                                        <div key={item} className={`flex items-start gap-3 py-3.5 ${i < arr.length - 1 ? "border-b border-[#F0F3F6]" : ""}`}>
                                            <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                                <Check className="h-3 w-3 text-[#1A8F52]" aria-hidden="true" />
                                            </span>
                                            <span className="text-[15.5px] font-semibold text-[#1F3147]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== FAIXA DE NÚMEROS ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-20 text-white sm:px-8 lg:py-24">
                    <RouteBackdrop />
                    <div className="relative mx-auto max-w-[1100px]">
                        <p className="mb-12 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#FFB07A]">
                            O que muda na prática
                        </p>
                        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
                            {STATS.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex flex-col items-center px-4 text-center sm:px-6 lg:border-l lg:border-white/10 lg:first:border-l-0"
                                >
                                    <div className="font-display text-[3.25rem] font-black leading-none tabular-nums text-[#FA6007] lg:text-6xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-4 h-px w-8 bg-[#FA6007]/40" aria-hidden="true" />
                                    <div className="mt-4 max-w-[180px] text-sm leading-snug text-[#A9BACD] sm:text-[14.5px]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== COMO FUNCIONA (3 PILARES) ===================== */}
                <section id="como" className="px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="mx-auto mb-14 max-w-[680px] text-center">
                            <Eyebrow>Como funciona</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Três formas de ter o controle de volta.
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {PILLARS.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 shadow-[0_1px_2px_rgba(11,36,64,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,36,64,0.10)]"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#FFF0E6]">
                                        <p.icon className="h-7 w-7 text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-[#0B2440]">{p.title}</h3>
                                    <p className="text-[15.5px] leading-relaxed text-[#56697E]">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== FRASE DE IMPACTO (palavra rotativa + aurora) ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-28">
                    <RouteBackdrop />
                    <div className="relative mx-auto max-w-[1000px] text-center">
                        <h2 className="text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                            Você no controle de
                        </h2>
                        <div className="relative mx-auto mt-2 h-[1.5em] w-full overflow-hidden text-[2.5rem] font-black leading-none sm:text-6xl lg:text-7xl">
                            {ROTATING.map((w, i) => (
                                <motion.span
                                    key={w}
                                    aria-hidden={rotIndex !== i}
                                    className="absolute inset-0 flex items-center justify-center font-display text-[#FA6007]"
                                    initial={{ opacity: 0, y: "-110%" }}
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
                        </div>
                        <p className="mx-auto mt-6 max-w-[560px] text-pretty text-lg leading-relaxed text-[#B7C6D8]">
                            Rotas, motoristas, documentação e câmeras — numa plataforma só, em tempo real.
                        </p>
                    </div>
                </section>

                {/* ===================== RESULTADOS POR PERFIL ===================== */}
                <section id="resultados" className="border-t border-[#E8EDF3] bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1100px]">
                        <div className="mx-auto mb-10 max-w-[680px] text-center">
                            <Eyebrow>A transformação</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Resultados para cada perfil
                            </h2>
                            <p className="mt-4 text-lg text-[#52647A]">Veja o que muda quando você tem controle real.</p>
                        </div>
                        {/* Tabs */}
                        <div className="mb-9 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Perfis">
                            {PROFILES.map((p, i) => {
                                const isActive = i === activeProfile;
                                return (
                                    <button
                                        key={p.key}
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => handleProfileSelect(i, p.label)}
                                        className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FA6007] ${
                                            isActive
                                                ? "border border-[#D14600] bg-[#D14600] text-white shadow-[0_10px_24px_rgba(250,96,7,0.3)]"
                                                : "border border-[#DCE4EC] bg-white text-[#3C4D60] hover:bg-[#F4F7FA]"
                                        }`}
                                    >
                                        <p.icon className="h-4 w-4" aria-hidden="true" />
                                        {p.label}
                                    </button>
                                );
                            })}
                        </div>
                        <motion.div
                            key={profile.key}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-6 md:grid-cols-2"
                        >
                            <div className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 shadow-[0_10px_30px_rgba(11,36,64,0.06)]">
                                <h3 className="mb-5 flex items-center gap-2.5 text-xl font-extrabold text-[#0B2440]">
                                    <TrendingUp className="h-5 w-5 text-[#1A8F52]" aria-hidden="true" />
                                    Resultados Comprovados
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {profile.results.map((r) => (
                                        <div key={r} className="flex items-center gap-3 rounded-xl border border-[#D6EEE0] bg-[#EAF7F0] px-4 py-3.5">
                                            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white">
                                                <Check className="h-3.5 w-3.5 text-[#1A8F52]" aria-hidden="true" />
                                            </span>
                                            <span className="text-[15.5px] font-semibold text-[#1F3147]">{r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-[18px] border border-[#E7EDF3] bg-white p-8 shadow-[0_10px_30px_rgba(11,36,64,0.06)]">
                                <h3 className="mb-5 flex items-center gap-2.5 text-xl font-extrabold text-[#0B2440]">
                                    <ShieldCheck className="h-5 w-5 text-[#FA6007]" aria-hidden="true" />
                                    Recursos Chave
                                </h3>
                                <div className="flex flex-col">
                                    {profile.features.map((f, i, arr) => (
                                        <div key={f} className={`flex items-center gap-3 py-3.5 ${i < arr.length - 1 ? "border-b border-[#EEF2F6]" : ""}`}>
                                            <span className="h-2 w-2 flex-none rounded-full bg-[#FA6007]" aria-hidden="true" />
                                            <span className="text-[15.5px] font-semibold text-[#2A3D52]">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== RECURSOS / MÓDULOS ===================== */}
                <section id="recursos" className="px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="mx-auto mb-14 max-w-[680px] text-center">
                            <Eyebrow>Recursos</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                Tudo que você precisa
                            </h2>
                            <p className="mt-4 text-lg text-[#52647A]">Módulos integrados para gestão completa.</p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {MODULES.slice(0, 4).map((m, i) => (
                                <motion.div
                                    key={m.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: (i % 4) * 0.06 }}
                                    className="rounded-2xl border border-[#E7EDF3] bg-white p-7 shadow-[0_1px_2px_rgba(11,36,64,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FFD9BF] hover:shadow-[0_18px_40px_rgba(11,36,64,0.10)]"
                                >
                                    <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#FFF0E6]">
                                        <m.icon className="h-6 w-6 text-[#FA6007]" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-2.5 text-[19px] font-extrabold text-[#0B2440]">{m.title}</h3>
                                    <p className="text-[14.5px] leading-relaxed text-[#56697E]">{m.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Link
                                href="/recursos"
                                className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#D8E0E8] bg-white px-7 py-4 text-base font-bold text-[#0B2440] transition-colors duration-200 hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                            >
                                Ver todos os recursos
                                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===================== AUTORIDADE (31 ANOS) ===================== */}
                <section className="relative overflow-hidden bg-[#0B2440] px-5 py-24 text-white sm:px-8 lg:py-32">
                    <Image
                        src="/images/institucional/equipe-onibus.jpg"
                        alt="Equipe Golf Fox em frente ao ônibus da operação"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B2440]/96 via-[#0B2440]/90 to-[#0B2440]/70" aria-hidden="true" />
                    <RouteBackdrop />
                    <div className="relative mx-auto grid max-w-[1100px] items-center gap-10 sm:grid-cols-[auto_1fr] sm:gap-14">
                        <div className="text-center">
                            <div className="font-display text-7xl font-black leading-[0.9] tracking-tight text-[#FA6007] sm:text-8xl lg:text-[150px]">
                                31
                            </div>
                            <div className="mt-1.5 text-lg font-bold text-white">anos de operação</div>
                            <div className="text-sm text-[#8FA3B8]">em transporte</div>
                        </div>
                        <div className="border-t border-white/15 pt-8 sm:border-l sm:border-t-0 sm:pl-12 sm:pt-0">
                            <h2 className="text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem] lg:text-5xl">
                                Feita por quem vive o transporte há 31 anos.
                            </h2>
                            <p className="mt-4 max-w-[620px] text-pretty text-lg leading-relaxed text-[#BBCADB]">
                                A Golf Fox nasceu de dentro da operação, não de um escritório de software. Monitora
                                o que realmente importa, do jeito que uma operação que não pode parar exige. Quem
                                entende de transporte construiu a ferramenta para controlá-lo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===================== RESULTADOS POR SETOR ===================== */}
                <section id="segmentos" className="px-5 py-24 sm:px-8 lg:py-32">
                    <div className="mx-auto max-w-[1140px]">
                        <div className="mx-auto mb-9 max-w-[680px] text-center">
                            <Eyebrow>Resultados por setor</Eyebrow>
                            <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                                O controle, traduzido para o seu setor.
                            </h2>
                        </div>
                        <div className="mb-9 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Setores">
                            {SECTORS.map((s, i) => {
                                const isActive = i === activeSector;
                                return (
                                    <button
                                        key={s.key}
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveSector(i)}
                                        className={`min-h-[44px] rounded-full px-5 py-3 text-[14.5px] font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440] ${
                                            isActive
                                                ? "border border-[#0B2440] bg-[#0B2440] text-white shadow-[0_8px_20px_rgba(11,36,64,0.22)]"
                                                : "border border-[#DCE4EC] bg-white text-[#3C4D60] hover:bg-[#F4F7FA]"
                                        }`}
                                    >
                                        {s.label}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="rounded-[22px] border border-[#E7EDF3] bg-white p-4 shadow-[0_16px_40px_rgba(11,36,64,0.08)]">
                            <motion.div
                                key={sector.key}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid items-stretch gap-4 lg:grid-cols-[1.04fr_0.96fr]"
                            >
                                <div className="px-6 py-7">
                                    <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#C2410C]">{sector.label}</div>
                                    <h3 className="mb-4 text-balance text-2xl font-extrabold leading-[1.12] tracking-tight text-[#0B2440] sm:text-[32px]">
                                        {sector.title}
                                    </h3>
                                    <p className="mb-6 text-pretty text-[17px] leading-relaxed text-[#52647A]">{sector.desc}</p>
                                    <div className="mb-7 flex flex-col gap-3.5">
                                        {sector.checks.map((c) => (
                                            <div key={c} className="flex items-center gap-3">
                                                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#E6F7EE]">
                                                    <Check className="h-3.5 w-3.5 text-[#1A8F52]" aria-hidden="true" />
                                                </span>
                                                <span className="text-base font-semibold text-[#1F3147]">{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href="#cta"
                                            className="inline-flex items-center gap-2 rounded-[10px] bg-[#D14600] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(250,96,7,0.28)] transition-colors duration-200 hover:bg-[#B03B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                                        >
                                            Falar com a Golf Fox
                                        </Link>
                                        <Link
                                            href="#como"
                                            className="inline-flex items-center gap-2 rounded-[10px] border border-[#D8E0E8] bg-white px-5 py-3.5 text-[15px] font-bold text-[#0B2440] transition-colors duration-200 hover:bg-[#F4F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2440]"
                                        >
                                            Ver como funciona
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl bg-[#0B2440]">
                                    <Image
                                        src="/images/institucional/frota-estrada.jpg"
                                        alt="Frota de transporte monitorada pela Golf Fox"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101e] via-[#0B2440]/85 to-[#0B2440]/35" aria-hidden="true" />
                                    <div className="relative p-8">
                                        <div className="font-display text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-[78px]">
                                            {sector.metric}
                                        </div>
                                        <div className="mb-4 mt-2 text-[15px] font-bold text-[#FFB07A]">{sector.metricLabel}</div>
                                        <p className="max-w-[420px] text-pretty text-[15.5px] leading-relaxed text-[#D5DEE9]">{sector.metricDesc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <FaqTwoColumn
                    title="Tire suas dúvidas sobre o controle."
                    description="Tudo que você precisa saber antes de começar."
                    items={FAQS}
                />

                {/* ===================== CTA FINAL ===================== */}
                <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-[#D14600] to-[#A83800] px-5 py-20 text-white sm:px-8 lg:py-24">
                    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]">
                        <path d="M-40,260 C320,260 420,90 720,90 C1020,90 1140,260 1500,230" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 12" />
                        <path d="M-40,320 C360,320 460,160 760,160 C1060,160 1160,320 1500,300" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="1 16" />
                    </svg>
                    <div className="relative mx-auto max-w-[860px] text-center">
                        <h2 className="text-balance text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl">
                            Pare de torcer para dar certo. Passe a ver.
                        </h2>
                        <p className="mx-auto mt-4 max-w-[680px] text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                            Fale com a Golf Fox e descubra como ter controle total sobre o transporte dos seus
                            colaboradores, sem trocar quem já roda para você.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                            <a
                                href={WHATSAPP_HREF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 rounded-xl bg-[#0B2440] px-8 py-[18px] text-[17px] font-extrabold text-white shadow-[0_16px_40px_rgba(11,36,64,0.4)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Falar no WhatsApp
                            </a>
                            <a
                                href={EMAIL_HREF}
                                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/55 bg-white/[0.14] px-8 py-[18px] text-[17px] font-bold text-white transition-colors duration-200 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Mail className="h-5 w-5" aria-hidden="true" />
                                Solicitar demonstração
                                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </MotionConfig>
    );
}
