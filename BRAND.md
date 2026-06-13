# Doral Analytics — Brand & Design Spec

A reference for building on-brand materials (decks, cards, social, docs). Derived
from the logo and the live website. The website implements this spec in
`app/globals.css` (colors) and `app/layout.tsx` (fonts).

---

## 1. Logo

- **Master file:** `public/logo.png` — black serif wordmark "Doral Analytics"
  with the tagline "Innovating Business Solutions" and a hand-drawn line-chart
  mark, on a warm near-white field.
- The logo is **pure monochrome** (verified: ink `#000000`, ~0 color
  saturation). Keep it black on light, or reverse to white on dark. **Never
  recolor it.**
- **Clear space:** keep at least the height of the "D" clear on all sides.
- **Don't:** stretch, rotate, add shadows/gradients/outlines, or place on a busy
  background or a color that lowers contrast.
- In the website UI, a crisp text wordmark + SVG line-mark
  (`components/brand-mark.tsx`) stands in for the raster logo so it scales
  cleanly; `logo.png` is the master / favicon / social-preview source.

---

## 2. Color

The logo itself is black-and-white. The palette adds **one** restrained accent
(navy) for links, buttons, and highlights — used sparingly so the brand stays
understated. You can also run fully monochrome if you prefer.

| Role | Name | HEX | RGB | Use |
|------|------|-----|-----|-----|
| Text | **Ink** | `#1A1A1A` | 26, 26, 26 | Body copy, headlines (a softened black for screen readability) |
| Logo black | **Black** | `#000000` | 0, 0, 0 | The logo/wordmark itself |
| Background | **Paper** | `#FCFCFA` | 252, 252, 250 | Page background — a warm near-white, matching the logo's field (not stark `#FFFFFF`) |
| Secondary text | **Muted** | `#6B6B6B` | 107, 107, 107 | Captions, sub-labels, meta |
| Borders | **Line** | `#E4E2DD` | 228, 226, 221 | Hairline rules, dividers, card borders |
| Accent | **Navy** | `#1F3A5F` | 31, 58, 95 | Links, primary buttons, eyebrows, key numbers |
| Accent (hover) | **Navy Dark** | `#162A45` | 22, 42, 69 | Hover / pressed states for navy elements |

> Note: the navy accent is a deliberate **addition** — it is not in the logo.
> It exists to make links and calls-to-action legible and deliberate. Drop it
> for a pure black-on-paper look if a piece calls for it.

**Surfaces:** cards and panels sit on pure white `#FFFFFF` over the `Paper`
background, separated by `Line` hairlines rather than heavy shadows.

---

## 3. Typography

A serif/sans pairing: an elegant serif for display (echoing the logo's
wordmark) and a clean sans for everything functional.

- **Display & headings — Cormorant Garamond** (Google Fonts), weights 400–600.
  A classic Garamond-style serif that matches the logo. Use for H1–H3, large
  numbers, and pull quotes.
- **Body & UI — Inter** (Google Fonts), weights 400–600. Neutral and highly
  legible. Use for paragraphs, labels, buttons, captions, and tables.

> The logo's tagline is also serif. The site uses Inter for body on purpose
> (serif headline + sans body is a standard, readable editorial pairing). If you
> want stricter fidelity to the logo on a given piece, set subheads/taglines in
> Cormorant Garamond instead.

**Type scale (as used on the site):**

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| H1 / hero | Cormorant Garamond | 48–60px | 500 | Tight leading (~1.05) |
| H2 | Cormorant Garamond | 30–36px | 500 | |
| H3 / card title | Cormorant Garamond | 20–24px | 500 | |
| Body | Inter | 16–18px | 400 | Leading ~1.6, color Ink/Muted |
| Eyebrow / label | Inter | 12–13px | 600 | UPPERCASE, letter-spacing ~0.08em, Navy or Muted |
| Small / meta | Inter | 13–14px | 400 | Muted |

---

## 4. Layout & feel

- **Generous whitespace.** Structure comes from spacing and hairlines, not boxes
  or heavy color.
- **Content width:** ~1150px max for wide sections; ~680px for reading (legal,
  long copy).
- **Corners:** pill-shaped buttons (fully rounded); cards/panels rounded
  ~16–24px.
- **Buttons:** primary = Navy fill, Paper text, hover Navy Dark. Secondary =
  Line border, Ink text, hover darker border.
- **Tone of the visuals:** refined, minimal, understated-premium — let the
  content breathe.

---

## 5. Voice

Clear, confident, professional, and plainspoken. Concrete over hype — no
buzzword soup. Honest about what the data does and doesn't show. Audience:
mid-market and growing companies that want to turn data into decisions.

---

## Quick copy-paste values

```
Ink        #1A1A1A
Black      #000000
Paper      #FCFCFA
Muted      #6B6B6B
Line       #E4E2DD
Navy       #1F3A5F
Navy Dark  #162A45

Display/Headings: Cormorant Garamond (400–600)
Body/UI:          Inter (400–600)
```
