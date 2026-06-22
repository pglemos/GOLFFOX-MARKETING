"use client";

import { motion } from "framer-motion";

export type GFTestimonial = {
    text: string;
    name: string;
    role: string;
    initials: string;
};

/**
 * Coluna de depoimentos em rolagem infinita (adaptado do efeito 21st.dev à marca).
 * Usa framer-motion (já no projeto). A lista é duplicada para um loop contínuo.
 * Respeita prefers-reduced-motion via MotionConfig do contexto pai.
 */
export function TestimonialsColumn({
    testimonials,
    duration = 18,
    className,
}: {
    testimonials: GFTestimonial[];
    duration?: number;
    className?: string;
}) {
    return (
        <div className={className}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="flex flex-col gap-6 pb-6"
            >
                {[0, 1].map((dup) => (
                    <div key={dup} className="flex flex-col gap-6" aria-hidden={dup === 1}>
                        {testimonials.map((t, i) => (
                            <figure
                                key={`${dup}-${i}`}
                                className="w-full max-w-xs rounded-2xl border border-[#E7EDF3] bg-white p-7 shadow-[0_10px_30px_rgba(11,36,64,0.06)]"
                            >
                                <blockquote className="text-[15px] leading-relaxed text-[#1F3147]">
                                    &ldquo;{t.text}&rdquo;
                                </blockquote>
                                <figcaption className="mt-5 flex items-center gap-3">
                                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#0B2440] text-[13px] font-bold text-white">
                                        {t.initials}
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-[14px] font-bold leading-5 text-[#0B2440]">{t.name}</span>
                                        <span className="text-[13px] leading-5 text-[#8392A3]">{t.role}</span>
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
