-- =========================================================
-- BOLAKILAS — SUPABASE SCHEMA
-- Jalankan seluruh file ini di: Supabase Dashboard > SQL Editor > New query
-- Aman dijalankan ulang (pakai "if not exists" / "or replace" di beberapa
-- bagian), tapi paling baik dijalankan sekali di project baru.
-- =========================================================

-- ---------------------------------------------------------
-- 1) PROFILES — data publik ringan per akun (nama panggilan)
-- ---------------------------------------------------------
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Profiles are viewable by everyone" on public.profiles;
create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-buat baris profiles setiap ada user baru daftar (via Supabase Auth).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------
-- 2) PREDICTIONS — tebak skor pribadi per pengguna
--    match_key = "<tanggal>__<slug-tim-home>__<slug-tim-away>"
--    (dibuat oleh getMatchKey() di script.js, harus konsisten)
-- ---------------------------------------------------------
create table if not exists public.predictions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  match_key text not null,
  match_date date,
  home_team text,
  away_team text,
  league text,
  guess_home int not null check (guess_home >= 0),
  guess_away int not null check (guess_away >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, match_key)
);

create index if not exists predictions_user_id_idx on public.predictions(user_id);
create index if not exists predictions_match_key_idx on public.predictions(match_key);

alter table public.predictions enable row level security;

drop policy if exists "Users manage own predictions" on public.predictions;
create policy "Users manage own predictions"
  on public.predictions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists predictions_set_updated_at on public.predictions;
create trigger predictions_set_updated_at
  before update on public.predictions
  for each row execute procedure public.set_updated_at();

-- ---------------------------------------------------------
-- 3) VOTES — prediksi 1X2 pengunjung untuk Big Match
-- ---------------------------------------------------------
create table if not exists public.votes (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  match_key text not null,
  choice text not null check (choice in ('home', 'draw', 'away')),
  created_at timestamptz not null default now(),
  unique (user_id, match_key)
);

create index if not exists votes_match_key_idx on public.votes(match_key);

alter table public.votes enable row level security;

drop policy if exists "Users manage own votes" on public.votes;
create policy "Users manage own votes"
  on public.votes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- View agregat (jumlah vote per pilihan) — TIDAK menampilkan user_id siapa
-- pun, jadi aman dibaca publik meski tabel votes sendiri dikunci per-akun.
-- View berjalan dengan hak akses pemiliknya (bukan pengunjung), makanya
-- bisa menjumlahkan across semua user walau RLS votes membatasi per baris.
create or replace view public.vote_counts as
select match_key, choice, count(*) as total
from public.votes
group by match_key, choice;

grant select on public.vote_counts to anon, authenticated;

-- =========================================================
-- SELESAI. Cek di Table Editor: harus ada 3 tabel (profiles,
-- predictions, votes) + 1 view (vote_counts).
-- =========================================================
