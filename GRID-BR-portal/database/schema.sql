-- GRID BR: esquema inicial para Supabase/PostgreSQL
-- Revise as políticas de segurança antes de conectar o site em produção.
create extension if not exists pgcrypto;

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  country text,
  logo_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.drivers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  short_name text,
  number integer,
  country text,
  team_id uuid references public.teams(id) on delete set null,
  photo_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text not null,
  body text not null,
  category text not null default 'F1',
  cover_image_url text,
  author_name text,
  source_name text,
  source_url text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint news_category_check check (category in ('F1','F2','Análise','História','Outros'))
);

create table if not exists public.races (
  id uuid primary key default gen_random_uuid(),
  season integer not null,
  round_number integer not null,
  name text not null,
  country text,
  circuit text,
  start_at timestamptz,
  status text not null default 'scheduled',
  source_url text,
  created_at timestamptz not null default now(),
  unique (season, round_number),
  constraint races_status_check check (status in ('scheduled','completed','cancelled'))
);

create table if not exists public.race_results (
  id uuid primary key default gen_random_uuid(),
  race_id uuid not null references public.races(id) on delete cascade,
  driver_id uuid not null references public.drivers(id) on delete cascade,
  position integer,
  points numeric(6,2) not null default 0,
  status text,
  created_at timestamptz not null default now(),
  unique (race_id, driver_id)
);

create index if not exists news_published_date_idx on public.news (published, published_at desc);
create index if not exists races_season_round_idx on public.races (season, round_number);
create index if not exists results_race_position_idx on public.race_results (race_id, position);

-- Ative RLS. As policies abaixo liberam leitura pública apenas de notícias publicadas.
alter table public.news enable row level security;
alter table public.teams enable row level security;
alter table public.drivers enable row level security;
alter table public.races enable row level security;
alter table public.race_results enable row level security;

drop policy if exists "Public can read published news" on public.news;
create policy "Public can read published news"
on public.news for select
to anon, authenticated
using (published = true);

drop policy if exists "Public can read teams" on public.teams;
create policy "Public can read teams"
on public.teams for select
to anon, authenticated
using (true);

drop policy if exists "Public can read drivers" on public.drivers;
create policy "Public can read drivers"
on public.drivers for select
to anon, authenticated
using (true);

drop policy if exists "Public can read races" on public.races;
create policy "Public can read races"
on public.races for select
to anon, authenticated
using (true);

drop policy if exists "Public can read race results" on public.race_results;
create policy "Public can read race results"
on public.race_results for select
to anon, authenticated
using (true);

-- Não há policies de INSERT/UPDATE/DELETE neste schema.
-- Adicione operações administrativas via backend ou políticas restritas a usuários
-- autenticados com papel de administrador. Nunca exponha a service_role key no frontend.
