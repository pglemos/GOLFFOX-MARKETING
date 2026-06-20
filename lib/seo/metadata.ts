/**
 * GOLF FOX SEO Helpers
 * Helpers para gerar metadados de SEO consistentes
 */

import { COMPANY_INFO } from '@/lib/constants/company-info';

import type { Metadata } from 'next';

const SITE_URL = 'https://golffox.com.br';
const SITE_NAME = 'GOLF FOX';
const DEFAULT_DESCRIPTION = 'GOLF FOX é a Torre de Controle do Fretamento Corporativo: planejamento, operação em tempo real, controle de embarque, custos, auditoria, relatórios e governança.';
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
const OG_IMAGE_MAP: Record<string, string> = {
    '/': '/og/home.png',
    '/produto': '/og/produto.png',
    '/produto/portal-empresa': '/og/produto-portal-empresa.png',
    '/produto/portal-transportadora': '/og/produto-portal-transportadora.png',
    '/produto/app-motorista': '/og/produto-app-motorista.png',
    '/produto/app-passageiro': '/og/produto-app-passageiro.png',
    '/como-funciona': '/og/como-funciona.png',
    '/como-operamos': '/og/como-operamos.png',
    '/recursos': '/og/recursos.png',
    '/planos': '/og/planos.png',
    '/cases': '/og/cases.png',
    '/demo': '/og/demo.png',
    '/seguranca-lgpd': '/og/seguranca-lgpd.png',
    '/integracoes': '/og/integracoes.png',
    '/faq': '/og/faq.png',
    '/status': '/og/status.png',
    '/documentacao': '/og/documentacao.png',
    '/privacidade': '/og/privacidade.png',
    '/terms': '/og/termos.png',
    '/sobre': '/og/sobre.png',
};

export interface PageSEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    path: string;
    ogImage?: string;
    noIndex?: boolean;
}

/**
 * Gera metadados completos para uma página
 */
export function generatePageMetadata(config: PageSEOConfig): Metadata {
    const {
        title,
        description,
        keywords = [],
        path,
        ogImage = undefined,
        noIndex = false
    } = config;

    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const resolvedOgImage = ogImage ?? OG_IMAGE_MAP[path] ?? '/og-image.png';
    const robotsValue = !IS_PRODUCTION || noIndex ? 'noindex, nofollow' : 'index, follow';

    const defaultKeywords = [
        'fretamento corporativo',
        'transporte de colaboradores',
        'gestão de frotas',
        'controle de embarque',
        'torre de controle',
        'logística empresarial',
        'GOLF FOX'
    ];

    return {
        title,
        description,
        keywords: [...defaultKeywords, ...keywords].join(', '),
        authors: [{ name: 'GOLF FOX Labs' }],
        creator: 'GOLF FOX Labs',
        publisher: 'GOLF FOX Labs',
        robots: robotsValue,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'pt_BR',
            url,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            images: [
                {
                    url: resolvedOgImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [resolvedOgImage],
        },
    };
}

/**
 * Schema.org para Organization
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY_INFO.fullName,
        url: SITE_URL,
        logo: `${SITE_URL}/icons/golf-fox-logo.png`,
        description: DEFAULT_DESCRIPTION,
        address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_INFO.address.street,
            addressLocality: COMPANY_INFO.address.city,
            addressRegion: COMPANY_INFO.address.state,
            postalCode: COMPANY_INFO.address.cep,
            addressCountry: 'BR'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: COMPANY_INFO.phone,
            contactType: 'sales',
            availableLanguage: 'Portuguese'
        },
        sameAs: []
    };
}

/**
 * Schema.org para FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };
}

/**
 * Schema.org para SoftwareApplication
 */
export function generateSoftwareSchema(options?: { name?: string; description?: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: options?.name || 'GOLF FOX',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: options?.description || DEFAULT_DESCRIPTION,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'BRL',
            description: 'Solicite uma demonstração gratuita'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '50',
            bestRating: '5',
            worstRating: '1'
        }
    };
}

/**
 * Metadados padrão para páginas de marketing
 */
export const defaultMarketingMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: '%s | GOLF FOX',
        default: 'GOLF FOX - Torre de Controle do Fretamento Corporativo',
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
        'fretamento corporativo',
        'transporte de colaboradores',
        'gestão de frotas',
        'controle de embarque',
        'torre de controle',
        'logística empresarial'
    ],
    authors: [{ name: 'GOLF FOX Labs' }],
    creator: 'GOLF FOX Labs',
    publisher: 'GOLF FOX Labs',
    robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        siteName: 'GOLF FOX',
    },
};
