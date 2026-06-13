# Doral Analytics — setup

A small marketing site (Home / About / Contact + Privacy & Terms) with a
contact form backed by Supabase and a private developer dashboard at `/admin`
where you read messages and reply by email (via Resend).

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Supabase
(`@supabase/ssr`) · Resend.

---

## 1. Run it locally

```bash
npm install      # already done if you scaffolded with the installer
npm run dev
```

Open http://localhost:3000. The marketing site works immediately. The contact
form and `/admin` login stay in a "not connected yet" state until you complete
the steps below.

---

## 2. Supabase

1. Create a project at https://supabase.com (free tier is fine).
2. **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the
   `contact_messages` table and its Row Level Security policies (public can
   insert; only authenticated developers can read/update).
3. **Project Settings → API**: copy the **Project URL** and the **anon public**
   key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. **Lock down sign-ups** (important): **Authentication → Sign In / Providers →
   Email** and turn **Allow new users to sign up** OFF. The dashboard is
   invite-only.
5. **Create your developer login**: **Authentication → Users → Add user**, set
   an email + password, and tick "Auto Confirm". Use that email/password at
   `/login`.

---

## 3. Developer allowlist

Set `ADMIN_EMAILS` in `.env.local` to a comma-separated list of the emails
allowed into `/admin`, e.g.:

```
ADMIN_EMAILS=you@example.com,partner@example.com
```

This is a second gate on top of Supabase auth. (If left empty, any authenticated
Supabase user is allowed — fine for local dev, but set it for production.)

---

## 4. Resend (sending replies)

The dashboard sends replies through [Resend](https://resend.com).

1. Create a Resend account and **verify a sending domain** (Domains → Add
   Domain, then add the DNS records). You can only send from a verified domain.
2. **API Keys → Create API Key**; put it in `.env.local` as `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to an address on your verified domain, e.g.
   `Doral Analytics <hello@yourdomain.com>`.
4. Set `NEXT_PUBLIC_CONTACT_EMAIL` to your public contact address (used on the
   site, in the legal pages, and as the Reply-To on outgoing replies).

> No Resend yet? The dashboard still shows every message and gives you a
> `mailto:` link to reply from your own email client.

---

## 5. Try the full loop

1. Restart `npm run dev` after editing `.env.local`.
2. Submit the form at `/contact`.
3. Sign in at `/login`, see the message in `/admin`, open it, and send a reply.

---

## 6. Deploy (Vercel)

1. Push this repo to GitHub and import it at https://vercel.com/new.
2. Add every variable from `.env.local` under **Settings → Environment
   Variables**.
3. Deploy. Add your custom domain under **Settings → Domains**.

---

## Notes

- The legal pages are a **general template** — have counsel review them before
  launch. Update the effective dates in `lib/content.ts` when you do.
- Brand colors and fonts live in `app/globals.css`; site copy lives in
  `lib/content.ts`. The provided `logo.png` is in `public/`; the header uses a
  matching text wordmark + line mark (`components/brand-mark.tsx`) so it stays
  crisp at every size.
