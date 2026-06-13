-- Doral Analytics — database schema
-- Run this once in your Supabase project: Dashboard → SQL Editor → New query → paste → Run.

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
-- Row Level Security
--   * Anyone (anon) may INSERT a message  -> the public contact form works.
--   * Only authenticated users may READ / UPDATE -> the developer dashboard.
--   Keep public sign-ups disabled in Supabase Auth so "authenticated" only
--   ever means a developer you invited. The app adds a second check on top of
--   this via the ADMIN_EMAILS allowlist.
-- ---------------------------------------------------------------------------
alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated users can read messages" on public.contact_messages;
create policy "Authenticated users can read messages"
  on public.contact_messages
  for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can update messages" on public.contact_messages;
create policy "Authenticated users can update messages"
  on public.contact_messages
  for update
  to authenticated
  using (true)
  with check (true);
