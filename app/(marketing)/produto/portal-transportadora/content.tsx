"use client";

import { motion } from "framer-motion";
import { TrendingUp, Truck, Headphones, Handshake, FileCheck, Award } from "lucide-react";

import { HeroSection, FAQSection, FinalCTA } from "@/components/marketing";

export function PortalTransportadoraContent() {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Blindagem de Margem",
            description: "Chega de rodar no prejuízo. Visualize o DRE de cada contrato em tempo real. Identifique rotas deficitárias e veículos ociosos antes que eles queimem seu caixa.",
            stat: "+15% lucratividade"
        },
        {
            icon: Handshake,
            title: "Venda Mais",
            description: "Empresas grandes exigem compliance. Com o selo GOLF FOX, você prova auditoria e segurança, vencendo concorrências contra amadores.",
            stat: "Diferencial Competitivo"
        },
        {
            icon: Truck,
            title: "Inteligência de Frota",
            description: "Manutenção preditiva que funciona. O sistema avisa quando peças precisam de troca baseado na KM real, evitando quebras inesperadas em rota.",
            stat: "-20% corretivas"
        }
    ];

    const supportFeatures = [
        {
            icon: Headphones,
            title: "Suporte Operacional Dedicado",
            description: "Não somos apenas um software. Temos um time de especialistas em tráfego para ajudar a otimizar suas rotas."
        },
        {
            icon: FileCheck,
            title: "Consultoria Jurídica e Fiscal",
            description: "Modelos de contrato e apoio na regularização de documentos para você blindar sua operação."
        },
        {
            icon: Award,
            title: "Clube de Vantagens",
            description: "Descontos exclusivos em pneus, combustível e peças através da nossa rede de parceiros homologados."
        }
    ];

    const faqs = [
        {
            question: "Como o sistema me ajuda a conseguir novos clientes?",
            answer: "A GOLF FOX cria um perfil verificado da sua transportadora que é visível para grandes empresas contratantes na nossa plataforma, funcionando como um canal de vendas passivo."
        },
        {
            question: "Consigo controlar motoristas terceiros?",
            answer: "Sim. O App do Motorista funciona para agregados e terceiros, garantindo que você tenha a mesma visibilidade e controle de qualidade da frota própria."
        },
        {
            question: "O sistema emite alertas de manutenção?",
            answer: "Sim. Você configura os planos de manutenção (óleo, pneus, filtros) e o sistema dispara alertas automáticos baseados na telemetria e KM rodados."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                badge="Para Operadores Logísticos"
                title="Transforme sua Transportadora em uma Operação de Alta Performance"
                subtitle="Deixe de ser apenas um fornecedor de ônibus. Torne-se um parceiro estratégico com dados, auditoria e margem garantida."
                variant="split"
                image={{
                    src: "/assets/product/dashboard-transportadora.png",
                    alt: "Dashboard do Portal Transportadora"
                }}
            />

            {/* Main Benefits Grid */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Cresça com rentabilidade
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Ferramentas desenhadas não apenas para controlar, mas para alavancar o seu negócio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {benefit.description}
                                </p>
                                <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                                    {benefit.stat}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support & Partnership Section */}
            <section className="py-16 lg:py-24 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black/60 z-10" />
                            {/* Placeholder generic image for partnership */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Handshake className="w-32 h-32 text-gray-600 opacity-20" />
                            </div>
                            <div className="relative z-20 p-12 h-full flex flex-col justify-end">
                                <div className="bg-gray-900/90 backdrop-blur-md p-6 rounded-xl border border-gray-700">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-xl text-black">
                                            GF
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Parceiro Homologado</p>
                                            <p className="text-green-400 text-sm">Validado em Compliance e Segurança</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        &ldquo;Com o selo da GOLF FOX, conseguimos entrar em clientes multinacionais que antes não nos atendiam por falta de certificação digital.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                    Muito além do software. <br /> Uma parceria de verdade.
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Sabemos que tecnologia sozinha não roda pneu. Por isso, oferecemos uma estrutura completa de apoio para sua transportadora decolar.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {supportFeatures.map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                                            <feature.icon className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                            <p className="text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={faqs} title="Perguntas frequentes" />

            {/* CTA */}
            <FinalCTA
                title="Quer blindar sua operação?"
                subtitle="Agende uma demonstração e veja como transformamos transportadoras em potências logísticas."
                variant="gradient"
            />
        </>
    );
}
