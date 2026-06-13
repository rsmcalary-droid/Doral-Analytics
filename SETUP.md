# Doral Analytics — setup

A small marketing site (Home / About / Contact + Privacy & Terms) with a
contact form backed by Supabase and a private developer dashboard at `/admin`
where you read messages and reply from your own email.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Supabase
(`@supabase/ssr`).

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The marketing site works immediately. The contact
form and `/admin` login stay in a "not connected yet" state until you complete
the Supabase steps below.

---

## 2. Supabase

1. Create a project at https://supabase.com (free tier is fine).
2. **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the
   `contact_messages` table and its Row Level Security policies (the public can
   only *insert*; only authenticated developers can *read/update*).
3. **Project Settings → API**: copy the **Project URL** and the **anon public**
   key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. **Lock down sign-ups**: **Authentication → Sign In / Providers → Email** and
   turn **Allow new users to sign up** OFF. The dashboard is invite-only.
5. **Create your developer login**: **Authentication → Users → Add user**, set
   an email + password, and tick "Auto Confirm". Use that at `/login`.

---

## 3. Developer access

Set `ADMIN_EMAILS` in `.env.local` to a comma-separated list of the emails
allowed into `/admin`:

```
ADMIN_EMAILS=you@example.com,partner@example.com
```

This is a second gate on top of Supabase auth. (If left empty, any authenticated
Supabase user is allowed — fine for local dev, but set it for production.)

Also set `NEXT_PUBLIC_CONTACT_EMAIL` to your public contact address (shown on
the site and in the legal pages).

---

## 4. Reading & replying to messages

1. Sign in at `/login`, then see every submission at `/admin`.
2. Click a message to read it in full.
3. **Reply via email** opens a pre-filled message in your own mail app (Gmail,
   Outlook, Apple Mail…) with their note quoted — you reply straight from your
   own inbox.
4. After you send it, click **Mark as replied** to track it. **Archive** when
   you're done.

No email service or API keys required.

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
   `NEXT_PUBLIC_CONTACT_EMAIL`, `ADMIN_EMAILS`.
3. Deploy. Add your custom domain under **Settings → Domains**.

---

## Notes

- The legal pages are a **general template** — have counsel review them before
  launch. Update the effective dates in `lib/content.ts` when you do.
- Brand colors and fonts live in `app/globals.css`; site copy lives in
  `lib/content.ts`; the full brand spec is in `BRAND.md`. The provided
  `logo.png` is in `public/`.
