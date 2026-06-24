"use client";

import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";

import { Eyebrow } from "@/components/marketing/landing-ui";
import { SchedulingCalendar } from "@/components/marketing/scheduling-calendar";
import { trackFormSubmit } from "@/lib/analytics/track-events";
import { COMPANY_INFO } from "@/lib/constants/company-info";

function buildWhatsAppLink(phoneNumber: string, text?: string) {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const base = `https://wa.me/${cleaned}`;
    if (!text) return base;
    return `${base}?text=${encodeURIComponent(text)}`;
}

// Máscara de telefone BR: (XX) XXXXX-XXXX — limita a 11 dígitos (DDD + 9).
function formatPhone(value: string) {
    const d = value.replace(/\D/g, "").slice(0, 11);
    if (d.length === 0) return "";
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function DemoContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [whatsAppHref, setWhatsAppHref] = useState<string>("");
    const [submitError, setSubmitError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        const messageLines = [
            "Olá! Gostaria de agendar uma demonstração da GOLF FOX.",
            "",
            `Nome: ${formData.name}`,
            `Email: ${formData.email}`,
            `Empresa: ${formData.company}`,
            formData.phone ? `Telefone: ${formData.phone}` : null,
            formData.employees
                ? `Colaboradores transportados: ${formData.employees}`
                : null,
            formData.message ? `Mensagem: ${formData.message}` : null,
        ].filter(Boolean) as string[];

        const href = buildWhatsAppLink(
            COMPANY_INFO.whatsapp.number,
            messageLines.join("\n"),
        );

        setWhatsAppHref(href);

        let response: Response;

        try {
            response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    origem: "demo",
                    metadata: {
                        page: "/demo",
                    },
                }),
            });
        } catch {
            setSubmitError(
                "Não conseguimos registrar seus dados agora. Você ainda pode falar com a equipe pelo WhatsApp.",
            );
            setIsSubmitting(false);
            return;
        }

        if (!response.ok) {
            setSubmitError(
                "Não conseguimos registrar seus dados agora. Você ainda pode falar com a equipe pelo WhatsApp.",
            );
            setIsSubmitting(false);
            return;
        }

        trackFormSubmit("demo");
        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    const benefits = [
        "Demonstração personalizada para seu cenário",
        "Visão de todos os módulos da plataforma",
        "Simulação com seus dados (opcional)",
        "Tire dúvidas com especialistas",
        "Sem compromisso",
    ];

    if (isSubmitted) {
        return (
            <section className="font-archivo bg-[#F4F7FA] px-5 py-24 sm:px-8 lg:py-32">
                <div className="mx-auto max-w-[920px]">
                    <div className="mx-auto mb-12 max-w-[680px] text-center">
                        <Eyebrow tone="orange">Agenda</Eyebrow>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.02em] text-[#0B2440] sm:text-4xl">
                            {formData.name ? `Quase lá, ${formData.name.split(" ")[0]}!` : "Quase lá!"} Escolha o melhor horário
                        </h2>
                        <p className="mx-auto mt-4 max-w-[560px] text-pretty text-lg leading-relaxed text-[#52647A]">
                            Selecione um dia e horário disponível para sua demonstração de 30 minutos. Sem compromisso.
                        </p>
                    </div>
                    <SchedulingCalendar />
                    <p className="mt-8 text-center text-sm text-[#52647A]">
                        Prefere falar agora?{" "}
                        <a
                            href={whatsAppHref || COMPANY_INFO.whatsapp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#D14600] hover:underline"
                        >
                            Abrir no WhatsApp
                        </a>
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-[70vh] bg-gray-950 pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Lado esquerdo - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
                            Demonstração gratuita
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Veja a GOLF FOX em ação
                        </h1>
                        <p className="text-lg text-gray-400 mb-10">
                            Agende uma demonstração personalizada e descubra como transformar
                            seu fretamento corporativo em governança.
                        </p>

                        <div className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                30-45 minutos
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Online via Google Meet
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado direito - Formulário */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-gray-900 border border-gray-800"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                Preencha seus dados
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                        Nome completo *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                        E-mail corporativo *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                        placeholder="email@empresa.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                        Empresa *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                        placeholder="Nome da empresa"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                            Telefone
                                        </label>
                                        <input
                                            type="tel"
                                            inputMode="tel"
                                            maxLength={15}
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                            Colaboradores transportados
                                        </label>
                                        <select
                                            value={formData.employees}
                                            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="1-100">1 - 100</option>
                                            <option value="101-500">101 - 500</option>
                                            <option value="501-1000">501 - 1.000</option>
                                            <option value="1001-5000">1.001 - 5.000</option>
                                            <option value="5000+">5.000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1.5">
                                        Mensagem (opcional)
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                        placeholder="Conte um pouco sobre sua operação atual..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Enviando..." : "Agendar demonstração"}
                            </button>

                            {submitError ? (
                                <p className="mt-4 text-center text-sm text-red-300">
                                    {submitError}{" "}
                                    <a
                                        href={whatsAppHref || COMPANY_INFO.whatsapp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-orange-400 hover:underline"
                                    >
                                        Abrir WhatsApp
                                    </a>
                                </p>
                            ) : null}

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Ao enviar, você concorda com nossa{" "}
                                <Link href="/privacidade" className="text-orange-500 hover:underline">
                                    Política de Privacidade
                                </Link>
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
