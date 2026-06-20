"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Clock, BellRing, MapPin, QrCode, MessageSquare, Coffee } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function AppPassageiroContent() {
    const benefits = [
        {
            icon: Clock,
            title: "O fim da ansiedade no ponto",
            description: "Chega de olhar para o relógio. Com rastreamento em tempo real, seu colaborador sabe exatamente onde o ônibus está e se vai chover ou fazer sol até lá.",
        },
        {
            icon: BellRing,
            title: "Durma mais 10 minutos",
            description: "O 'Alarme de Proximidade' avisa quando o ônibus está a 500m de distância. É mais conforto e menos tempo esperando na rua.",
        },
        {
            icon: QrCode,
            title: "Embarque sem contato",
            description: "Nada de crachás esquecidos. O embarque é 100% digital via QR Code, rápido e seguro, mesmo sem internet.",
        }
    ];

    const steps = [
        {
            icon: MapPin,
            title: "Localização Viva",
            description: "Visualize totos os ônibus da rota no mapa"
        },
        {
            icon: MessageSquare,
            title: "Canal Aberto",
            description: "Avalie a limpeza, ar-condicionado e condução"
        },
        {
            icon: Coffee,
            title: "Mais Qualidade de Vida",
            description: "Tempo de trajeto previsível e tranquilo"
        }
    ];

    const faqs = [
        {
            question: "E se a internet do passageiro cair?",
            answer: "Sem problemas. A Carteirinha Digital (QR Code) funciona 100% offline para garantir o embarque."
        },
        {
            question: "O app avisa se houver atraso?",
            answer: "Sim. Qualquer incidente reportado pelo motorista ou detectado pelo sistema dispara uma notificação push para todos os passageiros daquela rota."
        },
        {
            question: "É possível reservar assento?",
            answer: "Sim! Para linhas executivas ou sob demanda, o passageiro pode reservar seu lugar e garantir viagem sentada através do app."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                badge="App do Passageiro"
                title="Transforme o trajeto diário em momento de bem-estar"
                subtitle="Dê ao seu colaborador o presente da previsibilidade. Um app bonito, fácil e que acaba com a ansiedade da espera."
                variant="split"
                image={{
                    src: "/assets/product/app-passageiro.png",
                    alt: "Interface do App Passageiro GOLF FOX"
                }}
            />

            {/* Main Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* App Screenshot Visualization */}
                        <div className="relative order-2 lg:order-1 mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative">
                                <Image
                                    src="/assets/product/app-passageiro.png"
                                    alt="App Passageiro em uso"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Card Example */}
                                <div className="absolute top-20 left-4 right-4 bg-white p-4 rounded-xl shadow-lg border border-teal-100/50">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Seu ônibus</p>
                                            <p className="text-lg font-bold text-gray-900">Linha 402 • Executivo</p>
                                        </div>
                                        <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">NO HORÁRIO</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Clock className="w-4 h-4 text-teal-500" />
                                        <span>Chegando em <strong>4 minutos</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-12">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Experiência premium para seu time
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    O transporte fretado é um dos benefícios mais valorizados. Eleve essa experiência com um aplicativo que seus colaboradores vão amar usar.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                                            <benefit.icon className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Pillars */}
            <section className="py-16 lg:py-24 bg-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-6">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <FAQSection faqs={faqs} title="Perguntas frequentes" />

            {/* CTA */}
            <FinalCTA
                title="Valorize seu benefício de transporte"
                subtitle="Agende uma demonstração e veja como melhorar a satisfação do seu time."
                variant="gradient"
            />
        </>
    );
}
