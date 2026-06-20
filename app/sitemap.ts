import type { MetadataRoute } from 'next';

const SITE_URL = 'https://golffox.com.br';

const ROUTES: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/produto', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/produto/portal-empresa', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/produto/portal-transportadora', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/produto/app-motorista', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/produto/app-passageiro', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/como-funciona', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/como-operamos', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/recursos', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/seguranca-lgpd', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/planos', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/cases', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/integracoes', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/demo', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/documentacao', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/status', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/privacidade', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/sobre', changeFrequency: 'yearly', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return ROUTES.map(route => ({
        url: `${SITE_URL}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
