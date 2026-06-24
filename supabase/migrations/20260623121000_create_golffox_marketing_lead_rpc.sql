create or replace function public.create_golffox_marketing_lead(
  p_nome_completo text,
  p_email_corporativo text,
  p_empresa text,
  p_telefone text default null,
  p_colaboradores_transportados text default null,
  p_mensagem text default null,
  p_origem text default 'site',
  p_metadata jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if nullif(trim(p_nome_completo), '') is null then
    raise exception 'nome_completo is required' using errcode = '22023';
  end if;

  if nullif(trim(p_email_corporativo), '') is null
    or trim(p_email_corporativo) !~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then
    raise exception 'email_corporativo is invalid' using errcode = '22023';
  end if;

  if nullif(trim(p_empresa), '') is null then
    raise exception 'empresa is required' using errcode = '22023';
  end if;

  insert into public.leads_golf_fox (
    nome_completo,
    email_corporativo,
    empresa,
    telefone,
    colaboradores_transportados,
    mensagem,
    origem,
    metadata
  ) values (
    left(trim(p_nome_completo), 180),
    left(lower(trim(p_email_corporativo)), 254),
    left(trim(p_empresa), 180),
    nullif(left(trim(coalesce(p_telefone, '')), 40), ''),
    nullif(left(trim(coalesce(p_colaboradores_transportados, '')), 80), ''),
    nullif(left(trim(coalesce(p_mensagem, '')), 1000), ''),
    coalesce(nullif(left(trim(coalesce(p_origem, '')), 80), ''), 'site'),
    coalesce(p_metadata, '{}'::jsonb)
  );
end;
$$;

comment on function public.create_golffox_marketing_lead(text, text, text, text, text, text, text, jsonb)
is 'Insere leads do site institucional sem expor acesso direto à tabela leads_golf_fox.';

revoke all on function public.create_golffox_marketing_lead(text, text, text, text, text, text, text, jsonb) from public;
grant execute on function public.create_golffox_marketing_lead(text, text, text, text, text, text, text, jsonb) to anon;
grant execute on function public.create_golffox_marketing_lead(text, text, text, text, text, text, text, jsonb) to authenticated;
