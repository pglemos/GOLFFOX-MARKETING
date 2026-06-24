import type { ComponentType, ReactNode } from "react";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

/**
 * Card "janela de app" — padrão visual da marca para grades de cards:
 * barra de janela (3 pontos + label) + corpo (ícone, título, descrição, stat),
 * com ring, sombra e micro-animação no hover. Presentational (envolva com
 * motion.div para o reveal, se quiser).
 */
export function AppWindowCard({
    icon: Icon,
    title,
    description,
    stat,
    label = "Golf Fox",
    children,
}: {
    icon?: IconType;
    title: string;
    description?: string;
    stat?: string;
    label?: string;
    children?: ReactNode;
}) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.10)] ring-1 ring-[#E7EDF3] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(11,36,64,0.16)] hover:ring-[#FFD9BF]">
            {/* barra de janela */}
            <div className="flex items-center gap-1.5 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7DEE7]" aria-hidden="true" />
                <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.16em] text-[#A6B2C0]">{label}</span>
            </div>
            {/* corpo */}
            <div className="flex flex-1 flex-col p-7">
                {Icon ? (
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FA6007] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                ) : null}
                <h3 className="text-xl font-extrabold tracking-[-0.02em] text-[#0B2440]">{title}</h3>
                {description ? <p className="mt-3 leading-relaxed text-[#52647A]">{description}</p> : null}
                {children}
                {stat ? (
                    <span className="mt-6 inline-flex w-fit rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-bold text-[#C2410C]">
                        {stat}
                    </span>
                ) : null}
            </div>
        </div>
    );
}
