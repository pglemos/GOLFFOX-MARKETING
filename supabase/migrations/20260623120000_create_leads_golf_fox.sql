create table if not exists public.leads_golf_fox (
  id uuid primary key default gen_random_uuid(),
  nome_completo text not null,
  email_corporativo text not null,
  empresa text not null,
  telefone text,
  colaboradores_transportados text,
  mensagem text,
  origem text not null default 'site',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

comment on table public.leads_golf_fox is 'Leads captados pelo site institucional GOLF FOX.';
comment on column public.leads_golf_fox.origem is 'Origem do formulário ou campanha que gerou o lead.';
comment on column public.leads_golf_fox.metadata is 'Dados auxiliares de campanha, página, user agent ou contexto do formulário.';

alter table public.leads_golf_fox enable row level security;

revoke all on table public.leads_golf_fox from anon;
revoke all on table public.leads_golf_fox from authenticated;

create index if not exists leads_golf_fox_created_at_idx
  on public.leads_golf_fox (created_at desc);

create index if not exists leads_golf_fox_email_created_at_idx
  on public.leads_golf_fox (email_corporativo, created_at desc);
