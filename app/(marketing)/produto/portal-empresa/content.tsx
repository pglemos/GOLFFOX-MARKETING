"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { DollarSign, Smile, Eye, ShieldCheck, Quote, CheckCircle2 } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function PortalEmpresaContent() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Auditoria Financeira Total",
            description: "Elimine o 'custo invisível'. Nossa plataforma audita cada quilômetro rodado e passageiro embarcado, garantindo que você pague apenas pelo serviço efetivamente prestado.",
            stat: "30% economia média"
        },
        {
            icon: Smile,
            title: "Retenção de Talentos",
            description: "Transforme o trajeto casa-trabalho em um benefício real. Seus colaboradores chegam descansados, seguros e no horário, aumentando a produtividade e o bem-estar.",
            stat: "+40% satisfação"
        },
        {
            icon: Eye,
            title: "Governança e Compliance",
            description: "Tenha visibilidade total. Saiba exatamente quais veículos estão em operação, a regularidade da documentação e o cumprimento das rotas contratadas.",
            stat: "100% auditável"
        }
    ];

    const technicalFeatures = [
        "Rateio automático por Centro de Custo",
        "Dashboard financeiro em tempo real",
        "Mapa de calor de demanda de passageiros",
        "Gestão de escalas e turnos complexos",
        "API para integração com SAP/Totvs"
    ];

    const faqs = [
        {
            question: "Como funciona a auditoria de custos?",
            answer: "O sistema cruza o GPS do veículo com os check-ins dos passageiros. Se uma viagem não ocorreu ou teve desvio, o sistema alerta e ajusta o pré-faturamento automaticamente."
        },
        {
            question: "Consigo integrar com meu sistema de folha?",
            answer: "Sim! Nossa API permite integração bidirecional para importar colaboradores e exportar os descontos de vale-transporte/fretado diretamente para sua folha."
        },
        {
            question: "Funciona para turnos rotativos?",
            answer: "Perfeitamente. O algoritmo da GOLF FOX ajusta a oferta de veículos baseada na demanda real de cada turno, evitando ônibus vazios."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                badge="Para Gestores de RH e Facilities"
                title="Gestão de Fretamento que o Financeiro ama e o RH agradece"
                subtitle="Abandone as planilhas manuais. Tenha controle financeiro absoluto e ofereça a melhor experiência de transporte para seus colaboradores."
                variant="split"
                image={{
                    src: "/assets/product/dashboard-empresa.png",
                    alt: "Dashboard do Portal Empresa"
                }}
            />

            {/* Main Benefits Grid */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <benefit.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {benefit.description}
                                </p>
                                <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full">
                                    {benefit.stat}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section - Compliance/Audit */}
            <section className="py-16 lg:py-24 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 text-green-400 font-medium">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Compliance Garantido</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Fim das surpresas <br /> no fechamento do mês
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Nossos relatórios não são apenas dados, são evidências. Visualize o custo por passageiro, ocupação média e desvios de rota em tempo real. O sistema gera automaticamente os arquivos para auditoria e pagamento.
                            </p>

                            <ul className="grid grid-cols-1 gap-4">
                                {technicalFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 aspect-video group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 group-hover:opacity-75 transition-opacity" />
                                <Image
                                    src="/assets/product/dashboard-empresa.png"
                                    alt="Dashboard Financeiro GOLF FOX"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Social Proof) */}
            <section className="py-16 lg:py-24 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-3xl font-bold text-gray-900">O que dizem nossos parceiros</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                        >
                            <Quote className="w-10 h-10 text-blue-200 mb-6" />
                            <p className="text-gray-700 mb-6 italic">
                                &ldquo;Antes da GOLF FOX, perdíamos 3 dias conferindo planilhas de transporte. Hoje fechamos o mês em 2 horas e reduzimos o custo em 18%.&rdquo;
                            </p>
                            <div>
                                <strong className="block text-gray-900">Roberto Mendes</strong>
                                <span className="text-sm text-gray-500">Gerente de Facilities, Indústria 4.0</span>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                        >
                            <Quote className="w-10 h-10 text-blue-200 mb-6" />
                            <p className="text-gray-700 mb-6 italic">
                                &ldquo;A reclamação dos funcionários sobre &lsquo;ônibus atrasado&rsquo; zerou. Eles acompanham pelo app e isso melhorou muito o clima na fábrica.&rdquo;
                            </p>
                            <div>
                                <strong className="block text-gray-900">Ana Clara Souza</strong>
                                <span className="text-sm text-gray-500">Diretora de RH, Logística SC</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} title="Dúvidas comuns de Gestores" />

            {/* CTA */}
            <FinalCTA
                title="Sua operação merece essa inteligência"
                subtitle="Agende uma conversa com nossos especialistas e receba um diagnóstico gratuito da sua malha de transporte."
                variant="gradient"
            />
        </>
    );
}
