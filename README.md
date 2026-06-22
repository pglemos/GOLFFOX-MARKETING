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

---

## 🔌 Pontos de integração com o back-end

O front-end está pronto. Tudo que depende de back-end está marcado no código com `// TODO(backend)`
(rode `grep -rn "TODO(backend)" .` para listar). Resumo para facilitar a integração:

| # | Onde | Hoje | Precisa | Endpoint sugerido |
|---|------|------|---------|-------------------|
| 1 | `app/(marketing)/demo/content.tsx` (`handleSubmit`) | Monta link de WhatsApp e revela o calendário; **não persiste** o lead | Salvar lead no CRM/DB | `POST /api/leads` |
| 2 | `components/marketing/final-cta.tsx` (`handleSubmit`) | Simula envio com `setTimeout` (fake) | Persistir lead | `POST /api/leads` |
| 3 | `components/marketing/scheduling-calendar.tsx` | Datas disponíveis **mock** | Datas livres da agenda | `GET /api/agenda/disponibilidade?mes=YYYY-MM` |
| 4 | `components/marketing/scheduling-calendar.tsx` | Horários **mock** | Horários livres da data | `GET /api/agenda/horarios?data=YYYY-MM-DD` |
| 5 | `components/marketing/scheduling-calendar.tsx` (submit) | Só mostra confirmação no client | Criar agendamento | `POST /api/agenda` |
| 6 | `app/(marketing)/como-operamos/content.tsx` | Botões "Baixar" com `download:"#"` (não baixam) | Servir arquivos / registrar download | `GET /api/recursos` e/ou `POST /api/leads` |

### Payloads sugeridos

```jsonc
// 1) POST /api/leads  (origem: "demo")
{ "name": "", "email": "", "company": "", "phone": "", "employees": "", "message": "", "origem": "demo" }

// 2) POST /api/leads  (origem: "final-cta")
{ "name": "", "email": "", "company": "", "phone": "", "origem": "final-cta" }

// 3) GET /api/agenda/disponibilidade?mes=YYYY-MM  ->
{ "availableDates": ["2026-07-01", "2026-07-02"] }

// 4) GET /api/agenda/horarios?data=YYYY-MM-DD  ->
{ "slots": ["09:00", "09:30", "10:00"] }

// 5) POST /api/agenda
{ "data": "YYYY-MM-DD", "hora": "09:30", "lead": { "name": "", "email": "", "phone": "" } }

// 6) GET /api/recursos  ->
[ { "title": "", "type": "", "url": "" } ]
```

> Telefone (item 1) já chega com máscara BR `(XX) XXXXX-XXXX` (até 11 dígitos).

### Já funcionando no front (não precisa de back-end)

- **Analytics:** eventos instrumentados em `lib/analytics/` (`trackEvent`, `trackFormSubmit`, `trackFeatureFilter`) — basta plugar o provedor.
- **WhatsApp / e-mail:** links diretos (`wa.me` / `mailto:`).
- **Filtros, calculadoras de ROI e busca:** lógica 100% client-side.

Detalhamento de páginas e componentes em [`docs/INDICE.md`](docs/INDICE.md).
