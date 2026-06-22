# Índice do Site GOLF FOX

Site institucional e de marketing da **GOLF FOX** (gestão de fretamento corporativo), construído em **Next.js (App Router)** com **Tailwind CSS v4**. As páginas ficam sob o route group `app/(marketing)/`, cada rota com um `page.tsx` (metadados/SEO) que renderiza um `content.tsx` (a UI da página, geralmente um Client Component). Os componentes compartilhados (header, footer, hero, FAQ, calendário de agendamento etc.) vivem em `components/marketing/` e `components/ui/`. É um site majoritariamente estático/client-side; os poucos pontos que dependem de backend estão mockados e marcados com `// TODO(backend)` (ver seção de hand-off abaixo).

## Páginas

| Rota | Arquivo | Propósito |
|------|---------|-----------|
| `/` | `page.tsx` + `home-content.tsx` | Home — apresentação geral da plataforma de fretamento corporativo |
| `/cases` | `cases/page.tsx` + `content.tsx` | Cases de sucesso de clientes |
| `/como-funciona` | `como-funciona/page.tsx` + `content.tsx` | Como funciona — implantação em 4 semanas, passos detalhados, métricas |
| `/como-operamos` | `como-operamos/page.tsx` + `content.tsx` | Como operamos — SLA, governança e materiais para download |
| `/demo` | `demo/page.tsx` + `content.tsx` | Formulário de lead + calendário para agendar demonstração |
| `/documentacao` | `documentacao/page.tsx` | Documentação do produto |
| `/faq` | `faq/page.tsx` + `content.tsx` | Perguntas frequentes |
| `/integracoes` | `integracoes/page.tsx` + `content.tsx` | Integrações disponíveis com a plataforma |
| `/planos` | `planos/page.tsx` + `content.tsx` | Planos e preços / solicitação de proposta |
| `/privacidade` | `privacidade/page.tsx` + `content.tsx` | Política de Privacidade |
| `/produto` | `produto/page.tsx` + `content.tsx` | Visão geral do produto |
| `/produto/app-motorista` | `produto/app-motorista/page.tsx` + `content.tsx` | App do motorista |
| `/produto/app-passageiro` | `produto/app-passageiro/page.tsx` + `content.tsx` | App do passageiro |
| `/produto/portal-empresa` | `produto/portal-empresa/page.tsx` + `content.tsx` | Portal da empresa contratante |
| `/produto/portal-transportadora` | `produto/portal-transportadora/page.tsx` + `content.tsx` | Portal da transportadora |
| `/recursos` | `recursos/page.tsx` + `content.tsx` | Recursos / funcionalidades da plataforma |
| `/seguranca-lgpd` | `seguranca-lgpd/page.tsx` + `content.tsx` | Segurança e conformidade LGPD |
| `/sobre` | `sobre/page.tsx` + `content.tsx` | Sobre a empresa |
| `/status` | `status/page.tsx` | Status do sistema |
| `/terms` | `terms/page.tsx` + `content.tsx` | Termos de uso |

> O layout compartilhado das páginas de marketing está em `app/(marketing)/layout.tsx`.

## Componentes principais

Compartilhados em `components/marketing/`:

- **MarketingHeader** (`marketing-header.tsx`) — cabeçalho/navegação do site.
- **MarketingFooter** (`marketing-footer.tsx`) — rodapé com contatos (WhatsApp/e-mail) e links de navegação.
- **HeroSection** (`hero-section.tsx`) — bloco de destaque (hero) reutilizável.
- **FinalCTA** (`final-cta.tsx`) — chamada final com formulário opcional de contato/lead.
- **FaqSection** (`faq-section.tsx`) — seção de perguntas frequentes.
- **FaqTwoColumn** (`faq-two-column.tsx`) — variação de FAQ em duas colunas.
- **SchedulingCalendar** (`scheduling-calendar.tsx`) — calendário de agendamento de demonstração (datas/horários, hoje mockados).
- **AppWindowCard** (`app-window-card.tsx`) — card em formato de "janela de app" para screenshots.
- **RoiCalculator** (`roi-calculator.tsx`) / **ResourceRoiCalculator** (`resource-roi-calculator.tsx`) — calculadoras de ROI (100% client-side).
- **TestimonialsSection / TestimonialsColumns** (`testimonials-section.tsx`, `testimonials-columns.tsx`) — depoimentos.
- **FeaturesSection** (`features-section.tsx`), **ScreenshotSection** (`screenshot-section.tsx`), **SocialProof** (`social-proof.tsx`), **TimelineSection** (`timeline-section.tsx`) — blocos de conteúdo.
- **ProcessDiagram** (`process-diagram.tsx`), **MonitoringFlowDiagram** (`monitoring-flow-diagram.tsx`), **SlaInfographic** (`sla-infographic.tsx`) — diagramas/infográficos.
- **ResourceDetailModal** (`resource-detail-modal.tsx`) — modal de detalhe de recurso.
- **Breadcrumbs** (`breadcrumbs.tsx`) — trilha de navegação.
- **landing-ui** (`landing-ui.tsx`) — primitivos de UI (ex.: `Eyebrow`).

Compartilhados em `components/ui/`:

- **Button** (`button.tsx`) — botão base (class-variance-authority).
- **BrandSelect** (`brand-select.tsx`) — select estilizado da marca (baseado em @ark-ui/react).
- **StackedCards** (`stacked-cards.tsx`) / **CardStack** (`card-stack.tsx`) — cards empilhados com animação.
- **ContainerScroll** (`container-scroll.tsx`) — efeito de scroll/parallax para container.

## Back-end — pontos de integração (TODO)

Checklist consolidada de todos os `// TODO(backend)` presentes no código. Esta é a entrega para o desenvolvedor de backend — basta dar `grep -rn "TODO(backend)"`.

- **`app/(marketing)/demo/content.tsx`** (`handleSubmit`) — persistir o lead da demonstração no CRM/DB. Mantém o fallback de WhatsApp já existente.
  - Endpoint sugerido: `POST /api/leads { name, email, company, phone, employees, message, origem: "demo" }`
- **`components/marketing/final-cta.tsx`** (`handleSubmit`) — substituir o envio simulado (`setTimeout`) pelo envio real do lead do CTA final.
  - Endpoint sugerido: `POST /api/leads { name, email, company, phone, origem: "final-cta" }`
- **`components/marketing/scheduling-calendar.tsx`** — datas disponíveis (hoje `buildMockAvailableDates`, mock).
  - Endpoint sugerido: `GET /api/agenda/disponibilidade?mes=YYYY-MM -> { availableDates: string[] }`
- **`components/marketing/scheduling-calendar.tsx`** — horários disponíveis da data selecionada (hoje `MOCK_TIME_SLOTS`).
  - Endpoint sugerido: `GET /api/agenda/horarios?data=YYYY-MM-DD -> { slots: string[] }`
- **`components/marketing/scheduling-calendar.tsx`** (`handleSubmit`) — registrar o agendamento e confirmar (hoje só `console.log`).
  - Endpoint sugerido: `POST /api/agenda { data, hora, ...lead }`
- **`app/(marketing)/como-operamos/content.tsx`** (grid de "Recursos para você") — servir os materiais reais para download (hoje `download: "#"`, sem arquivo) e, opcionalmente, registrar o download/lead.
  - Endpoint sugerido: `GET /api/recursos -> { title, type, url }` e/ou `POST /api/leads { recurso, ...lead }`

> Observação: os links `wa.me` (WhatsApp) e `mailto:` do rodapé (`components/marketing/marketing-footer.tsx`) e os recursos de `como-funciona` que apontam para `/demo?recurso=...` são fallbacks intencionais e **não** exigem backend. As calculadoras de ROI são puramente client-side.

## Como rodar

```bash
npm install     # instala dependências
npm run dev     # ambiente de desenvolvimento em http://localhost:3000
npm run build   # build de produção
```

## Dependências notáveis

- **next** (16.x) — framework (App Router)
- **tailwindcss** v4 (+ `@tailwindcss/postcss`) — estilização
- **framer-motion** — animações
- **gsap** — animações avançadas/scroll
- **@ark-ui/react** — componentes acessíveis (ex.: BrandSelect)
- **lucide-react** — ícones
