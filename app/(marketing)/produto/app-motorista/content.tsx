"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ClipboardCheck, ShieldAlert, Navigation } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function AppMotoristaContent() {
    const benefits = [
        {
            icon: ClipboardCheck,
            title: "Vistoria Digital em 30s",
            description: "Esqueça a prancheta. O motorista realiza o checklist obrigatório e registro fotográfico direto no app, garantindo que o veículo só saia da garagem em condições ideais.",
        },
        {
            icon: Navigation,
            title: "Navegação Otimizada",
            description: "O motorista recebe a rota exata com todos os pontos de parada. O sistema recalcula o trajeto em tempo real para fugir do trânsito e cumprir os horários.",
        },
        {
            icon: ShieldAlert,
            title: "Botão de Pânico Inteligente",
            description: "Segurança total. Em caso de emergência ou parada não programada, um alerta silencioso é enviado para a central com a localização exata e áudio ambiente.",
        }
    ];

    const features = [
        {
            title: "Antes da Viagem",
            items: ["Login seguro com biometria", "Checklist visual do veículo", "Confirmação de escala e rota"]
        },
        {
            title: "Durante a Rota",
            items: ["GPS com pontos embarque", "Lista de passageiros em tempo real", "Validação de presença via QR/NFC"]
        },
        {
            title: "Pós-Viagem",
            items: ["Registro automático de KM", "Apontamento de ocorrências", "Feedback da viagem"]
        }
    ];

    const faqs = [
        {
            question: "O app consome muita bateria?",
            answer: "Não. O GOLF FOX Driver foi otimizado para rodar em segundo plano com consumo mínimo de bateria e dados móveis (apenas 50mb/mês em média)."
        },
        {
            question: "Funciona sem internet?",
            answer: "Sim! O modo offline permite realizar todo o check-in de passageiros e checklist. Os dados sincronizam automaticamente assim que o sinal retorna."
        },
        {
            question: "O motorista pode alterar a rota?",
            answer: "O sistema sugere a rota otimizada, mas permite que o motorista faça desvios autorizados em caso de bloqueios na via, registrando tudo para a central."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                badge="App do Motorista"
                title="Mais que um app, seu copiloto na estrada"
                subtitle="Equipe sua frota com a ferramenta que elimina o papel, guia o motorista e garante a segurança de todos a bordo."
                variant="split"
                image={{
                    src: "/assets/product/app-motorista.png",
                    alt: "Interface do App Motorista GOLF FOX"
                }}
            />

            {/* Main Benefits */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Tecnologia que simplifica o dia a dia de quem dirige
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Uma interface desenhada para ser usada com um toque. Botões grandes, alto contraste e fluxo intuitivo para que o foco esteja sempre na direção.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                                            <benefit.icon className="w-6 h-6 text-amber-600" />
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

                        {/* App Screenshot Visualization */}
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                <Image
                                    src="/assets/product/app-motorista.png"
                                    alt="App Motorista em uso"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay indicating 'Active Trip' if image is static */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 border-t border-gray-200">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-green-100 rounded-full">
                                            <Navigation className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Próxima Parada</p>
                                            <p className="text-lg font-bold text-gray-900">Av. Paulista, 1000</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full w-[65%]"></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
                                        <span>65% do trajeto</span>
                                        <span>15:42 ETA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Steps */}
            <section className="py-16 lg:py-24 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Jornada de Segurança</h2>
                        <p className="text-gray-600 mt-4">Processos padronizados do início ao fim da viagem</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{step.title}</h3>
                                <ul className="space-y-4">
                                    {step.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} title="Perguntas frequentes" />

            {/* CTA */}
            <FinalCTA
                title="Modernize sua frota hoje mesmo"
                subtitle="Dê a seus motoristas a ferramenta que eles merecem. Segurança e eficiência na palma da mão."
                variant="gradient"
            />
        </>
    );
}
