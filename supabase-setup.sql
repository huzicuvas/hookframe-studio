-- ============================================================
-- HookFrame Studio — Supabase setup (Postgres)
-- Run this WHOLE file once in Supabase: SQL Editor -> New query
-- -> paste -> Run.
--
-- BEFORE YOU RUN IT: replace <PROJECT_REF> (3 places, in the seed
-- video URLs at the bottom) with your project ref. Find it in the
-- Supabase dashboard under Settings -> General -> Reference ID.
-- Or leave the seed URLs as they are and paste each video's real
-- link into its portfolio_ads row after uploading (Table Editor).
--
-- What this creates:
--   tables:  portfolio_ads, hooks, leads
--   storage: public bucket "portfolio-videos" for the 5 videos
--   access rules (RLS): public can READ the portfolio + hooks and
--   SEND a lead; only you (logged in) can add/edit/delete.
--
-- Safe to run twice: every statement is IF NOT EXISTS / ON CONFLICT
-- / DROP IF EXISTS, so re-running changes nothing.
-- ============================================================

-- ---------- Tables ----------

create table if not exists portfolio_ads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,                 -- skincare, food, drink, perfume, testimonial
  format text,                   -- UGC, CGI, testimonial, poster
  duration_sec int,              -- video length in seconds
  video_url text not null default '',
  poster_url text,               -- thumbnail image URL (optional)
  tags text[] default '{}',
  sort_order int default 0,      -- 1 = best first
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- If this table was made by the earlier small setup, add the new columns.
alter table portfolio_ads add column if not exists format text;
alter table portfolio_ads add column if not exists duration_sec int;
alter table portfolio_ads add column if not exists tags text[] default '{}';
alter table portfolio_ads add column if not exists is_active boolean default true;
alter table portfolio_ads add column if not exists updated_at timestamptz default now();

create table if not exists hooks (
  id uuid primary key default gen_random_uuid(),
  product_type text not null,    -- skincare, food, drink, perfume, SaaS...
  hook text not null,            -- the opening line
  caption text,                  -- supporting caption / angle
  tone text,                     -- bold, funny, calm, curious, urgent...
  created_at timestamptz default now()
);

alter table hooks add column if not exists tone text;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  brand_name text,
  tier text,                     -- e.g. First Ad - Test ($75), 15-30s ($75), Quote
  message text,
  created_at timestamptz default now()
);

-- Keep updated_at fresh whenever a portfolio row is edited.
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists portfolio_ads_updated_at on portfolio_ads;
create trigger portfolio_ads_updated_at
  before update on portfolio_ads
  for each row execute function set_updated_at();

-- ---------- Indexes ----------

-- One title per portfolio item / one copy of each hook (also makes the
-- seed rows below safe to run twice).
create unique index if not exists portfolio_ads_title_key
  on portfolio_ads (title);
create unique index if not exists hooks_hook_key
  on hooks (hook);
create index if not exists portfolio_ads_active_sort
  on portfolio_ads (is_active, sort_order);
create index if not exists hooks_product_type
  on hooks (product_type);
create index if not exists leads_created
  on leads (created_at desc);

-- ---------- Access rules (Row Level Security) ----------

alter table portfolio_ads enable row level security;
alter table hooks enable row level security;
alter table leads enable row level security;

-- Anyone can READ the portfolio and the hooks (public website, no login).
drop policy if exists "public read portfolio" on portfolio_ads;
create policy "public read portfolio"
  on portfolio_ads for select using (true);

drop policy if exists "public read hooks" on hooks;
create policy "public read hooks"
  on hooks for select using (true);

-- Only logged-in admins can add / edit / delete portfolio rows and hooks.
-- (In the Supabase dashboard you are already an admin, so the Table
-- Editor works without any extra setup.)
drop policy if exists "admin write portfolio" on portfolio_ads;
create policy "admin write portfolio"
  on portfolio_ads for all to authenticated using (true) with check (true);

drop policy if exists "admin write hooks" on hooks;
create policy "admin write hooks"
  on hooks for all to authenticated using (true) with check (true);

-- Anyone can SEND a lead (contact form), only admins can READ leads.
drop policy if exists "public send lead" on leads;
create policy "public send lead"
  on leads for insert with check (true);

drop policy if exists "admin read leads" on leads;
create policy "admin read leads"
  on leads for select to authenticated using (true);

-- ---------- Storage bucket for the videos ----------

insert into storage.buckets (id, name, public)
values ('portfolio-videos', 'portfolio-videos', true)
on conflict (id) do nothing;

-- Anyone can PLAY / download the videos (public portfolio).
drop policy if exists "public read videos" on storage.objects;
create policy "public read videos"
  on storage.objects for select using (bucket_id = 'portfolio-videos');

-- Only logged-in admins can UPLOAD / DELETE videos.
drop policy if exists "admin write videos" on storage.objects;
create policy "admin write videos"
  on storage.objects for all to authenticated
  using (bucket_id = 'portfolio-videos')
  with check (bucket_id = 'portfolio-videos');

-- ---------- Seed: the 5 portfolio videos ----------
-- Upload the 5 files into the portfolio-videos bucket first
-- (Storage -> portfolio-videos -> Upload), then replace <PROJECT_REF>
-- below with your project ref. After that the video links work.

insert into portfolio_ads (title, category, format, video_url, tags, sort_order) values
  ('Skincare UGC Story', 'skincare', 'UGC', 'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio-videos/skincare-ugc-story.mp4', '{skincare, UGC, story}', 1),
  ('Mint Drink CGI Ad', 'drink', 'CGI', 'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio-videos/mint-drink-cgi-ad.mp4', '{drink, CGI, splash}', 2),
  ('Perfume CGI Ad', 'perfume', 'CGI', 'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio-videos/perfume-cgi-ad.mp4', '{perfume, CGI, luxury}', 3),
  ('Burger CGI Ad', 'food', 'CGI', 'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio-videos/burger-cgi-ad.mp4', '{food, CGI}', 4),
  ('AI Couple Testimonial', 'testimonial', 'UGC', 'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio-videos/ai-testimonial-couple.mp4', '{testimonial, UGC, couple}', 5)
on conflict do nothing;

-- ---------- Seed: starter hooks for the Hook Generator ----------

insert into hooks (product_type, hook, caption, tone) values
  ('skincare', 'I stopped buying $120 serums after trying this.', 'Problem-agitation opener for skincare UGC.', 'bold'),
  ('food', 'Why 30,000 coffee drinkers switched their mornings.', 'Curiosity opener for food and drink.', 'curious'),
  ('drink', 'This drink looks illegal. It is just mint and ice.', 'Pattern-interrupt opener for drinks.', 'funny'),
  ('perfume', 'One spray. The whole room turns around.', 'Luxury opener for perfume.', 'bold')
on conflict do nothing;

-- ---------- Done ----------
-- Next steps:
--   1. Storage -> portfolio-videos -> upload the 5 .mp4 files.
--   2. Table Editor -> portfolio_ads -> check the 5 rows, fix any URL.
--   3. In the site code, the gallery reads video_url from this table
--      (or paste the same URLs into src/data/portfolioData.ts).
--   4. For the site to talk to Supabase later, copy the Project URL
--      and anon key from Settings -> API into a .env file as
--      SUPABASE_URL and SUPABASE_ANON_KEY. Never paste the secret
--      service key into the website code.
