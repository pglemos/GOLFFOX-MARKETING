"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Building2, Truck, UserCog, ArrowRight, CheckCircle, Smartphone } from "lucide-react";

import { HeroSection, FinalCTA } from "@/components/marketing";
import { Button } from "@/components/ui/button";

export function ProdutoContent() {
    const products = [
        {
            id: "empresa",
            title: "Portal Empresa",
            subtitle: "Para Gestores e RH",
            description: "Esqueça as planilhas. Tenha controle total sobre os custos e a qualidade do transporte dos seus colaboradores em tempo real.",
            benefits: [
                "Redução de até 30% nos custos via otimização de rotas",
                "Relatórios auditáveis de utilização por centro de custo",
                "Dashboard financeiro com previsão de gastos",
                "Monitoramento de NPS e satisfação dos colaboradores"
            ],
            image: "/assets/product/dashboard-empresa.png",
            icon: Building2,
            href: "/produto/portal-empresa",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            align: "right"
        },
        {
            id: "transportadora",
            title: "Portal Transportadora",
            subtitle: "Para Operadores Logísticos",
            description: "Aumente sua margem de lucro com uma gestão de frota eficiente e automatizada. Elimine a ociosidade e blinde sua operação.",
            benefits: [
                "Gestão preventiva de manutenção da frota",
                "Controle automatizado de receitas e contratos",
                "Alocação inteligente de motoristas e veículos",
                "Redução de km improdutivo e ociosidade"
            ],
            image: "/assets/product/dashboard-transportadora.png",
            icon: Truck,
            href: "/produto/portal-transportadora",
            color: "text-green-500",
            bg: "bg-green-500/10",
            align: "left"
        },
        {
            id: "motorista",
            title: "App do Motorista",
            subtitle: "Para quem dirige",
            description: "Uma ferramenta de trabalho que valoriza o motorista. Navegação precisa, checklist digital e gamificação para incentivar a boa condução.",
            benefits: [
                "Navegação GPS otimizada para ônibus e vans",
                "Checklist digital obrigatório pré-viagem",
                "Gamificação com pontuação de segurança",
                "Comunicação direta com a central operacional"
            ],
            image: "/assets/product/app-motorista.png",
            icon: UserCog,
            href: "/produto/app-motorista",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            align: "right"
        },
        {
            id: "passageiro",
            title: "App do Passageiro",
            subtitle: "Para o Colaborador",
            description: "O fim da ansiedade no ponto de ônibus. Seu colaborador sabe exatamente onde o ônibus está e a hora que vai chegar.",
            benefits: [
                "Localização do ônibus em tempo real no mapa",
                "Alertas de proximidade e atrasos",
                "Avaliação da viagem e do motorista",
                "Cartão de embarque digital (QR Code)"
            ],
            image: "/assets/product/app-passageiro.png",
            icon: Smartphone,
            href: "/produto/app-passageiro",
            color: "text-teal-500",
            bg: "bg-teal-500/10",
            align: "left"
        }
    ];

    return (
        <>
            <HeroSection
                badge="Ecossistema GOLF FOX"
                title="Uma plataforma unificada para transformar o transporte corporativo"
                subtitle="Conectamos empresas, transportadoras, motoristas e passageiros em uma única solução inteligente."
            />

            <div className="flex flex-col gap-16 py-16 lg:py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
                {products.map((product) => (
                    <motion.section
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${product.align === "left" ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase ${product.bg} ${product.color} w-fit`}>
                                    <product.icon className="w-5 h-5" />
                                    {product.subtitle}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                    {product.title}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {product.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className={`w-6 h-6 shrink-0 ${product.color}`} />
                                        <span className="text-lg text-gray-700 dark:text-gray-200">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild size="lg" className="rounded-full px-8 text-base h-12">
                                <Link href={product.href} className="group">
                                    Explorar {product.title}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        {/* Image/Visual Content */}
                        <div className="flex-1 w-full">
                            <div className="relative group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-900 aspect-[4/3]">
                                <Image
                                    src={product.image}
                                    alt={`Interface do ${product.title}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            <FinalCTA
                title="Pronto para otimizar sua operação?"
                subtitle="Agende uma demonstração hoje e veja como o GOLF FOX pode economizar até 30% do seu orçamento."
                variant="gradient"
            />
        </>
    );
}
