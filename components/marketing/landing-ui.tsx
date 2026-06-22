import type { ReactNode } from "react";

/**
 * Primitivos visuais compartilhados da marca Golf Fox (landing + subpáginas).
 * Mantém consistência entre páginas (paleta navy/laranja + motivo de rota).
 * Os estilos globais (.font-archivo, .gf-route-dash, .gf-live-dot) vivem em styles/landing.css.
 */

export function Eyebrow({
    children,
    tone = "blue",
}: {
    children: ReactNode;
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

/** Traçado de rota — assinatura visual da marca nos fundos escuros.
 *  No hero a rota principal é animada (tese: monitoramento ao vivo). */
export function RouteBackdrop({
    withGlow = false,
    animated = false,
}: {
    withGlow?: boolean;
    animated?: boolean;
}) {
    return (
        <svg
            viewBox="0 0 1440 760"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        >
            {withGlow && (
                <defs>
                    <radialGradient id="gfGlow" cx="78%" cy="28%" r="60%">
                        <stop offset="0%" stopColor="#13478F" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#0B2440" stopOpacity="0" />
                    </radialGradient>
                </defs>
            )}
            {withGlow && <rect width="1440" height="760" fill="url(#gfGlow)" />}
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
