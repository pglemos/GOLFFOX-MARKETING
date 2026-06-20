import { generatePageMetadata } from "@/lib/seo/metadata";

import { ComoFuncionaContent } from "./content";

import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Implantação em 4 Semanas | Economia de 30% | GOLF FOX",
    description:
        "Descubra como implantar a GOLF FOX em 4 semanas: diagnóstico gratuito, configuração guiada e operação com governança total. Economia comprovada de 30% em custos de fretamento. ROI em 3-6 meses. Sem mudar de transportadora.",
    path: "/como-funciona",
    keywords: [
        "implantação golf fox 4 semanas",
        "economia 30% fretamento corporativo",
        "como otimizar rotas de fretamento",
        "reduzir custos transporte colaboradores",
        "gestão de ônibus fretado",
        "check-in digital fretamento",
        "auditoria transporte colaboradores",
        "ROI fretamento corporativo",
        "software gestão fretado",
        "plataforma fretamento empresarial",
        "rastreamento ônibus empresa",
        "governança transporte funcionários",
    ],
    ogImage: "/og/como-funciona.png",
});

// Schema.org para Organization
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GOLF FOX",
    description: "Plataforma de gestão de fretamento corporativo com check-in digital, otimização de rotas e governança completa",
    url: "https://golffox.com.br",
    logo: "https://golffox.com.br/logo.png",
    sameAs: [
        "https://www.linkedin.com/company/golffox"
    ],
    // ContactPoint removido - adicionar quando houver telefone comercial real
};

// Schema.org para BreadcrumbList
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://golffox.com.br"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Como Funciona",
            "item": "https://golffox.com.br/como-funciona"
        }
    ]
};

// Schema.org para VideoObject (Webinar gravado)
const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Demonstração GOLF FOX - Gestão de Fretamento Corporativo",
    "description": "Demonstração completa da plataforma GOLF FOX com casos de uso reais de gestão de fretamento corporativo",
    "thumbnailUrl": "https://golffox.com.br/images/dashboard-preview.png",
    "uploadDate": "2024-01-01",
    "duration": "PT30M",
    "contentUrl": "https://golffox.com.br/demo?recurso=webinar"
};

// Schema.org para HowTo (3 passos)
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como implementar a GOLF FOX em 3 passos",
    description: "Processo completo de implementação da plataforma GOLF FOX para gestão de fretamento corporativo",
    estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "BRL",
        value: "Sob consulta"
    },
    supply: [
        {
            "@type": "HowToSupply",
            name: "Lista de colaboradores com endereços"
        },
        {
            "@type": "HowToSupply",
            name: "Turnos e horários de trabalho"
        },
        {
            "@type": "HowToSupply",
            name: "Centros de custo (opcional)"
        }
    ],
    tool: [
        {
            "@type": "HowToTool",
            name: "Google Maps API"
        },
        {
            "@type": "HowToTool",
            name: "Algoritmos de otimização de rotas"
        },
        {
            "@type": "HowToTool",
            name: "Supabase (banco de dados e autenticação)"
        }
    ],
    step: [
        {
            "@type": "HowToStep",
            position: 1,
            name: "Diagnóstico e Simulação",
            text: "Entendemos sua operação atual através de análise detalhada de dados e projetamos a solução ideal com simulação de resultados. Duração: 1 semana. Entregas: Relatório de diagnóstico completo, proposta de otimização de rotas, projeção de economia de custos, plano de implementação personalizado.",
            image: "https://golffox.com.br/images/screenshots/diagnostico.png"
        },
        {
            "@type": "HowToStep",
            position: 2,
            name: "Implantação Guiada",
            text: "Configuramos toda a plataforma com seus dados, integramos com sistemas existentes e treinamos sua equipe para operar com confiança. Duração: 1-2 semanas. Entregas: Portais configurados, apps instalados, integrações funcionando, documentação técnica.",
            image: "https://golffox.com.br/images/screenshots/implantacao.png"
        },
        {
            "@type": "HowToStep",
            position: 3,
            name: "Operação com Governança",
            text: "Operação ao vivo com monitoramento em tempo real, alertas inteligentes, relatórios automáticos e auditoria completa de todas as ações. Duração: Contínuo. Resultados: 15 horas/semana economizadas, 30% de redução em custos, ROI em 3-6 meses.",
            image: "https://golffox.com.br/images/screenshots/operacao.png"
        },
    ],
    totalTime: "P4W", // 4 semanas
};

// FAQ Schema será gerado dinamicamente no componente

export default function Page() {
    return (
        <>
            {/* Schema.org Organization */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            {/* Schema.org HowTo */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(howToSchema),
                }}
            />
            {/* Schema.org BreadcrumbList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            {/* Schema.org VideoObject */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videoSchema),
                }}
            />
            <ComoFuncionaContent />
        </>
    );
}
