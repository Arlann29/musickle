-- ============ MUSICKLE — Supabase Schema ============
-- Jalankan di SQL Editor Supabase (project kamu), sekali saja.

-- Playlist: disimpan per user, bisa public (is_public = true)
create table if not exists public.playlists (
  id text primary key,               -- id lokal (pl-...)
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  emoji text default '🎵',
  is_public boolean default false,
  tracks jsonb default '[]'::jsonb,  -- [{title, artist, url, cover}]
  created_at timestamptz default now()
);

-- Card musik: disimpan per user, bisa public
create table if not exists public.cards (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  is_public boolean default false,
  data jsonb default '{}'::jsonb,    -- {grad, motif, frame, font, pos, icon, quote, song, artist, vibe, name}
  created_at timestamptz default now()
);

-- Keamanan baris (RLS): user cuma bisa lihat/edit punyanya sendiri,
-- plus siapa pun boleh baca yang public (buat link share).
alter table public.playlists enable row level security;
alter table public.cards enable row level security;

create policy "playlists: own all" on public.playlists
  for all using (auth.uid() = user_id);
create policy "playlists: public read" on public.playlists
  for select using (is_public = true);

create policy "cards: own all" on public.cards
  for all using (auth.uid() = user_id);
create policy "cards: public read" on public.cards
  for select using (is_public = true);
