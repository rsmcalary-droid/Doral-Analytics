# Doral Systems — setup

A small marketing site (Home / About / Contact + Privacy & Terms) with a
contact form backed by Supabase and a private developer dashboard at `/admin`
where your team reads messages and replies from their own email.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Supabase
(`@supabase/ssr`).

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The marketing site works immediately. The contact
form, sign-up, and login stay in a "not connected yet" state until you finish
the Supabase steps below.

---

## 2. Supabase

1. Create a project at https://supabase.com (free tier is fine).
2. **SQL Editor → New query**, paste all of
   [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the
   `contact_messages` table, the `admins` table, and the Row Level Security
   that lets the public *submit* messages but only approved developers *read*
   them. It's safe to re-run.
3. In that SQL, change the **bootstrap line** to your own email before running
   (or run it again after editing):
   ```sql
   insert into public.admins (email) values ('you@youremail.com')
     on conflict (email) do nothing;
   ```
   This makes you the first approved developer.
4. **Project Settings → API**: copy the **Project URL** and the **anon public**
   key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Set `NEXT_PUBLIC_CONTACT_EMAIL` too.
5. **Enable sign-ups**: **Authentication → Sign In / Providers → Email** and
   make sure **Allow new users to sign up** is **ON**. (This is safe — Row
   Level Security means only emails in the `admins` table can see any data,
   even if a stranger signs up.) Leaving **Confirm email** on is recommended.

---

## 3. Add your team

Sign-up is **invite-only**: a person can only create an account if their email
is already in the `admins` table. To add a developer:

1. **Supabase → Table Editor → `admins` → Insert row** with their email — or run
   `insert into public.admins (email) values ('them@example.com');`.
2. They go to `/signup` and set their password.

That's it — they can now read and reply to messages. Removing their row blocks
both their access and any future sign-up. (To open registration to anyone
later, ask and I'll switch sign-up back to open.)

---

## 4. Reading & replying to messages

1. Sign in at `/login` (or sign up at `/signup`), then see every submission at
   `/admin`.
2. Click a message to read it in full.
3. **Reply via email** opens a pre-filled message in your own mail app (Gmail,
   Outlook, Apple Mail…) with their note quoted — you reply from your own inbox.
4. After you send it, click **Mark as replied**. **Archive** when you're done.

No outbound email service or API keys required.

---

## 5. Try the full loop

1. Restart `npm run dev` after editing `.env.local`.
2. Submit the form at `/contact`.
3. Sign in at `/login`, open the message in `/admin`, hit **Reply via email**,
   send it, then **Mark as replied**.

---

## 6. Deploy (Vercel)

1. Push this repo to GitHub and import it at https://vercel.com/new.
2. Add these under **Settings → Environment Variables**:
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `NEXT_PUBLIC_CONTACT_EMAIL`.
3. In Supabase, add your production URL under **Authentication → URL
   Configuration → Site URL / Redirect URLs** so confirmation links work.
4. Deploy. Add your custom domain under **Settings → Domains**.

---

## Notes

- The legal pages are a **general template** — have counsel review them before
  launch. Update the effective dates in `lib/content.ts` when you do.
- Brand colors and fonts live in `app/globals.css`; site copy lives in
  `lib/content.ts`; the full brand spec is in `BRAND.md`. The provided
  `logo.png` is in `public/`.
