"use client";

import { useState } from "react";

import { ArrowRight, Check, Mail } from "lucide-react";

import { trackFormSubmit } from "@/lib/analytics/track-events";

type FinalCtaFormProps = {
    whatsappHref: string;
};

/**
 * Form do CTA final da home — grava o lead no Supabase via POST /api/leads
 * (origem "cta-home") e mantém o WhatsApp como caminho direto. Os campos
 * (nome, e-mail, empresa) são os exigidos pela função create_golffox_marketing_lead.
 */
export function FinalCtaForm({ whatsappHref }: FinalCtaFormProps) {
    const [form, setForm] = useState({ name: "", email: "", company: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, origem: "cta-home" }),
            });

            // 201 = gravou. 503 = captação indisponível (sem env) — tratamos como ok
            // para não travar o usuário; o contato segue pelo WhatsApp.
            if (res.ok || res.status === 503) {
                trackFormSubmit("cta-home");
                setStatus("done");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "done") {
        return (
            <div className="mx-auto mt-8 max-w-[520px] rounded-2xl bg-white/[0.14] p-8 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <Check className="h-7 w-7 text-[#A83800]" aria-hidden="true" />
                </div>
                <p className="text-lg font-bold">Recebemos seu contato!</p>
                <p className="mt-1.5 text-white/85">
                    Em breve a Golf Fox fala com você. Quer agilizar? Chama no WhatsApp.
                </p>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2.5 rounded-xl bg-[#0B2440] px-7 py-3.5 text-[16px] font-extrabold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                    Falar no WhatsApp
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-[640px] text-left">
            <div className="grid gap-3 sm:grid-cols-3">
                <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    aria-label="Seu nome"
                    className="w-full rounded-xl border border-white/30 bg-white/[0.16] px-4 py-3.5 text-white placeholder-white/65 backdrop-blur-sm transition-colors focus:border-white focus:bg-white/25 focus:outline-none"
                />
                <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="E-mail corporativo"
                    aria-label="E-mail corporativo"
                    className="w-full rounded-xl border border-white/30 bg-white/[0.16] px-4 py-3.5 text-white placeholder-white/65 backdrop-blur-sm transition-colors focus:border-white focus:bg-white/25 focus:outline-none"
                />
                <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Empresa"
                    aria-label="Empresa"
                    className="w-full rounded-xl border border-white/30 bg-white/[0.16] px-4 py-3.5 text-white placeholder-white/65 backdrop-blur-sm transition-colors focus:border-white focus:bg-white/25 focus:outline-none"
                />
            </div>

            {status === "error" && (
                <p className="mt-3 text-sm text-white/90">
                    Não consegui enviar agora. Tente de novo ou fale direto no WhatsApp.
                </p>
            )}

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-[18px] text-[17px] font-extrabold text-[#A83800] shadow-[0_16px_40px_rgba(11,36,64,0.25)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    {status === "sending" ? "Enviando..." : "Solicitar demonstração"}
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/55 bg-white/[0.14] px-8 py-[18px] text-[17px] font-bold text-white transition-colors duration-200 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Falar no WhatsApp
                </a>
            </div>
        </form>
    );
}
