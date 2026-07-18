"use client";

import { useEffect, useState } from "react";

import { Play, X } from "lucide-react";

type VideoLightboxProps = {
    src: string;
    poster: string;
    label?: string;
    thumbClassName?: string;
};

/**
 * Card pequeno (poster + botão de play) que abre o vídeo grande num lightbox ao
 * clicar. Trava o scroll do fundo e fecha no X, no backdrop ou no Esc.
 */
export function VideoLightbox({ src, poster, label = "Assistir vídeo", thumbClassName }: VideoLightboxProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const html = document.documentElement;
        const prev = html.style.overflow;
        html.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            html.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            {/* Card pequeno */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={label}
                className={`group relative block aspect-[9/16] w-[200px] overflow-hidden rounded-[20px] border border-[#E7EDF3] bg-black shadow-[0_18px_44px_rgba(11,36,64,0.16)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${thumbClassName ?? ""}`}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={poster} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent transition-colors group-hover:bg-black/20">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 translate-x-0.5 fill-current" aria-hidden="true" />
                    </span>
                </span>
            </button>

            {/* Lightbox */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/70 p-4 backdrop-blur-sm"
                >
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Fechar"
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <video
                        src={src}
                        poster={poster}
                        controls
                        autoPlay
                        playsInline
                        onClick={(e) => e.stopPropagation()}
                        className="aspect-[9/16] h-[82vh] max-h-[82vh] w-auto max-w-[92vw] rounded-2xl border border-white/10 bg-black shadow-2xl"
                    />
                </div>
            )}
        </>
    );
}
