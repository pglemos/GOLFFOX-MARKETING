"use client";

import { useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    ScanFace,
    MapPin,
    QrCode,
    FileCheck,
    BellRing,
    BarChart3,
} from "lucide-react";

import { Eyebrow } from "@/components/marketing/landing-ui";

type Tone = "danger" | "warn" | "ok" | "info";

type Feature = {
    tab: string;
    icon: typeof MapPin;
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    mockTitle: string;
    mock: { label: string; meta: string; tone: Tone }[];
};

const TONE_DOT: Record<Tone, string> = {
    danger: "bg-[#E5484D]",
    warn: "bg-[#F5A623]",
    ok: "bg-[#1A8F52]",
    info: "bg-[#01557E]",
};
const TONE_TAG: Record<Tone, string> = {
    danger: "bg-[#FDECEC] text-[#C2313A]",
    warn: "bg-[#FEF3E2] text-[#9A6212]",
    ok: "bg-[#EAF7F0] text-[#1A8F52]",
    info: "bg-[#EAF1F7] text-[#01557E]",
};

const FEATURES: Feature[] = [
    {
        tab: "Câmera com IA",
        icon: ScanFace,
        eyebrow: "Inteligência artificial",
        title: "A câmera enxerga o que passaria batido.",
        description:
            "A IA analisa as imagens de dentro e ao redor do veículo e identifica o comportamento de risco na hora — com alerta e o vídeo do momento.",
        bullets: [
            "Uso de celular ao volante",
            "Sono e fadiga do motorista",
            "Distração e olhar fora da via",
            "Motorista sem cinto de segurança",
            "Fumando na cabine",
        ],
        mockTitle: "Alertas de risco",
        mock: [
            { label: "Uso de celular", meta: "26 km/h · agora", tone: "danger" },
            { label: "Sem cinto de segurança", meta: "Rota Centro · há 3 min", tone: "danger" },
            { label: "Fadiga detectada", meta: "Turno noturno · há 12 min", tone: "warn" },
        ],
    },
    {
        tab: "Rota em tempo real",
        icon: MapPin,
        eyebrow: "Ao vivo",
        title: "Cada veículo no mapa, o tempo todo.",
        description:
            "A posição de cada veículo atualizada a cada 30 segundos, com velocidade, cercas virtuais e aviso no instante em que a rota foge do previsto.",
        bullets: [
            "Posição atualizada a cada 30s",
            "Velocidade de cada trecho",
            "Entrada e saída de cerca virtual",
            "Desvio de rota sinalizado na hora",
        ],
        mockTitle: "Eventos da rota",
        mock: [
            { label: "Entrou na cerca — Garagem", meta: "17:48", tone: "ok" },
            { label: "Saiu da rota prevista", meta: "+2,4 km · 17:23", tone: "warn" },
            { label: "Velocidade", meta: "78 km/h · BR-116", tone: "info" },
        ],
    },
    {
        tab: "Embarque e presença",
        icon: QrCode,
        eyebrow: "Check-in",
        title: "Quem subiu, onde e a que horas.",
        description:
            "Check-in por QR Code registra a presença de cada colaborador por embarque — e funciona offline, sincronizando quando há sinal.",
        bullets: [
            "Presença por colaborador",
            "Embarque e desembarque com horário",
            "Check-in por QR Code",
            "Funciona offline e sincroniza depois",
        ],
        mockTitle: "Embarques",
        mock: [
            { label: "Ana Souza embarcou", meta: "05:58 · Ponto 3", tone: "ok" },
            { label: "Rota Centro", meta: "38/40 presentes", tone: "info" },
            { label: "Check-in offline", meta: "sincronizado", tone: "ok" },
        ],
    },
    {
        tab: "Documentação",
        icon: FileCheck,
        eyebrow: "Conformidade",
        title: "Papel em dia, sem virar susto.",
        description:
            "CNH, licença e seguro dos motoristas controlados na plataforma, com aviso antes de vencer — pra papel atrasado não virar risco no seu contrato.",
        bullets: [
            "CNH dos motoristas",
            "Licença e seguro do veículo",
            "Aviso automático antes de vencer",
            "Histórico por motorista e por frota",
        ],
        mockTitle: "Documentação",
        mock: [
            { label: "CNH — João P.", meta: "vence em 6 dias", tone: "warn" },
            { label: "Seguro — Placa ARC5J32", meta: "vence em 21 dias", tone: "warn" },
            { label: "Licença — Frota", meta: "em dia", tone: "ok" },
        ],
    },
    {
        tab: "Alertas",
        icon: BellRing,
        eyebrow: "Na hora",
        title: "Você é avisado no momento certo.",
        description:
            "Central de alertas que te avisa quando algo dá errado — não horas depois. Atraso, desvio, risco de condução e ocorrência, tudo num lugar.",
        bullets: [
            "Atraso de saída ou chegada",
            "Desvio de rota",
            "Comportamento de risco (câmera IA)",
            "Ocorrências abertas pela operação",
        ],
        mockTitle: "Central de alertas",
        mock: [
            { label: "Atraso — Rota Vale", meta: "+12 min", tone: "warn" },
            { label: "Risco — uso de celular", meta: "agora", tone: "danger" },
            { label: "Desvio — Turno B", meta: "há 5 min", tone: "warn" },
        ],
    },
    {
        tab: "Relatórios",
        icon: BarChart3,
        eyebrow: "Prova",
        title: "A prova que você mostra pro contratante.",
        description:
            "Pontualidade, ocupação e histórico de cada rota consolidados num relatório pronto pra apresentar — a evidência de que o serviço foi entregue.",
        bullets: [
            "Pontualidade por rota e período",
            "Ocupação e assentos ociosos",
            "Histórico auditável de cada viagem",
            "Exportação em PDF e Excel",
        ],
        mockTitle: "Relatório do mês",
        mock: [
            { label: "Pontualidade", meta: "98%", tone: "ok" },
            { label: "Ocupação média", meta: "87%", tone: "info" },
            { label: "Exportar", meta: "PDF · Excel", tone: "info" },
        ],
    },
];

export function MonitoramentoFeatures() {
    const [active, setActive] = useState(0);
    const feature = FEATURES[active];
    const go = (dir: 1 | -1) => setActive((prev) => (prev + dir + FEATURES.length) % FEATURES.length);

    return (
        <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24">
            <div className="gf-aurora-light" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-[1140px]">
                <div className="mx-auto mb-10 max-w-[720px] text-center">
                    <Eyebrow>Tudo que você monitora</Eyebrow>
                    <h2 className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0B2440] sm:text-[2.6rem] lg:text-5xl">
                        Nada de vago. Você vê exatamente o que está acontecendo.
                    </h2>
                </div>

                {/* Abas */}
                <div className="mb-10 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:justify-center">
                    {FEATURES.map((f, i) => (
                        <button
                            key={f.tab}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-pressed={i === active}
                            className={`inline-flex flex-none items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors ${
                                i === active
                                    ? "border-brand bg-[#FFF0E6] text-[#C2410C]"
                                    : "border-[#E7EDF3] bg-white text-[#52647A] hover:border-[#FFD9BF] hover:text-[#0B2440]"
                            }`}
                        >
                            <f.icon className="h-4 w-4" aria-hidden="true" />
                            {f.tab}
                        </button>
                    ))}
                </div>

                {/* Conteúdo */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                        >
                            {/* Texto */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C2410C]">
                                    {feature.eyebrow}
                                </span>
                                <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-[-0.02em] text-[#0B2440] sm:text-3xl">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-pretty text-lg leading-relaxed text-[#52647A]">
                                    {feature.description}
                                </p>
                                <ul className="mt-6 flex flex-col gap-3">
                                    {feature.bullets.map((b) => (
                                        <li key={b} className="flex items-center gap-3">
                                            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FFF0E6]">
                                                <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                                            </span>
                                            <span className="text-[15.5px] font-semibold text-[#2A3D52]">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/demo"
                                    className="group mt-8 inline-flex min-h-[44px] items-center gap-2.5 rounded-xl bg-brand px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(250,96,7,0.28)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                                >
                                    Ver na prática
                                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                            </div>

                            {/* Mockup */}
                            <div className="rounded-[22px] border border-[#E7EDF3] bg-[#F8FAFC] p-4 shadow-[0_18px_50px_rgba(11,36,64,0.10)] sm:p-6">
                                <div className="overflow-hidden rounded-2xl border border-[#E7EDF3] bg-white shadow-sm">
                                    <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                                        <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">
                                            {feature.mockTitle}
                                        </span>
                                    </div>
                                    <ul className="flex flex-col divide-y divide-[#EEF2F6]">
                                        {feature.mock.map((row) => (
                                            <li key={row.label} className="flex items-center gap-3 px-5 py-4">
                                                <span className={`h-2.5 w-2.5 flex-none rounded-full ${TONE_DOT[row.tone]}`} aria-hidden="true" />
                                                <span className="flex-1 text-[15px] font-semibold text-[#1F3147]">{row.label}</span>
                                                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${TONE_TAG[row.tone]}`}>
                                                    {row.meta}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Setas */}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => go(-1)}
                            aria-label="Funcionalidade anterior"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7EDF3] bg-white text-[#0B2440] transition-colors hover:border-[#FFD9BF] hover:bg-[#FFF0E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <span className="text-sm font-semibold tabular-nums text-[#7A8AA0]">
                            {active + 1} / {FEATURES.length}
                        </span>
                        <button
                            type="button"
                            onClick={() => go(1)}
                            aria-label="Próxima funcionalidade"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7EDF3] bg-white text-[#0B2440] transition-colors hover:border-[#FFD9BF] hover:bg-[#FFF0E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
