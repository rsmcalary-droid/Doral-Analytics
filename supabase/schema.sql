-- Doral Analytics — database schema. Safe to run (and re-run) in full:
-- Supabase Dashboard → SQL Editor → New query → paste → Run.

-- ---------------------------------------------------------------------------
-- Contact messages submitted through the public contact form.
-- ---------------------------------------------------------------------------
create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  subject     text,
  message     text not null,
  status      text not null default 'new'
              check (status in ('new', 'replied', 'archived')),
  replied_at  timestamptz,
  replied_by  text,
  reply_body  text
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- ---------------------------------------------------------------------------
-- Developers allowed to use the dashboard.
-- Manage this list in the Supabase Table Editor (or via SQL): add one row per
-- teammate's email. Anyone NOT in this table can sign up / log in but will see
-- nothing — Row Level Security below enforces that.
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  email     text primary key,
  added_at  timestamptz not null default now()
);

-- >>> BOOTSTRAP: change this to YOUR email, then run, so you can get in first.
insert into public.admins (email) values ('you@example.com')
  on conflict (email) do nothing;

-- Is the currently logged-in user an approved developer?
-- SECURITY DEFINER lets it read public.admins past that table's RLS.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

grant execute on function public.is_admin() to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
--   * Anyone (anon) may INSERT a message  -> the public contact form works.
--   * Only approved developers may READ / UPDATE -> the dashboard.
--   * The admins table itself has RLS on with no policies, so it's only
--     reachable from the Supabase dashboard / service role (not the website).
-- ---------------------------------------------------------------------------
alter table public.contact_messages enable row level security;
alter table public.admins enable row level security;

drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated users can read messages" on public.contact_messages;
drop policy if exists "Admins can read messages" on public.contact_messages;
create policy "Admins can read messages"
  on public.contact_messages
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Authenticated users can update messages" on public.contact_messages;
drop policy if exists "Admins can update messages" on public.contact_messages;
create policy "Admins can update messages"
  on public.contact_messages
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
