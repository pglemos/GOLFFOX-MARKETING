# GOLFFOX-MARKETING

Repositório isolado para o site institucional e páginas de marketing da GOLF FOX.

Este repo não contém o sistema operacional da plataforma, APIs administrativas, tracking interno, app mobile ou variáveis de ambiente do produto.

## Como trabalhar

1. Crie uma branch a partir de `main`.
2. Faça alterações apenas nas páginas e componentes de marketing.
3. Rode `npm run lint`, `npm run typecheck` e `npm run build`.
4. Abra um Pull Request para `main`.
5. Aguarde revisão e aprovação da GOLF FOX.

Produção não sobe automaticamente por push. O deploy de produção deve ser executado manualmente no workflow `Vercel Production` e protegido pelo ambiente `production` do GitHub.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Escopo permitido

- `app/(marketing)/`
- `components/marketing/`
- `content/marketing/`
- `public/` apenas para assets do site
- SEO e estilos usados pelo site institucional

## Fora do escopo

- Código do sistema operacional da GOLF FOX
- APIs administrativas
- Aplicativo mobile
- Credenciais, `.env`, tokens ou segredos
- Configurações de infraestrutura fora deste repo
