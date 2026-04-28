# Skynetlabs Wellness Demo

Five distinct premium landing-page concepts for a personalized wellness brand (DNA insights · personalized nutrition · smarter supplementation), built as a speculative pitch deliverable by SkynetLabs.

**Live:** https://skynetlabs-wellness-demo.vercel.app

## Variants

| # | Route | Concept | Vibe |
|---|---|---|---|
| V1 | `/v1-helix` | Helix Cinematic | Three.js DNA helix hero, dark + bioluminescent, scroll camera |
| V2 | `/v2-editorial` | Editorial Apothecary | Fraunces serif, off-white + sage, magazine grid |
| V3 | `/v3-glass` | Glass Lab | Frosted cards, animated gradient mesh, Framer Motion |
| V4 | `/v4-magazine` | Bold Magazine | Cobalt + acid yellow, brutalist grid, oversized type |
| V5 | `/v5-aesop` | Soft Aesop | Beige + clay, organic blobs, slow fades |

Hub at `/` lists all five with a persistent variant nav across pages.

## Stack

- Next.js 15 (app router) · React 19
- Tailwind CSS · Framer Motion · React Three Fiber + Drei + Three.js
- Vercel deploy · API route stub at `/api/waitlist`

## Local

```bash
npm install
npm run dev
```

## Email capture

`/api/waitlist` accepts `{ email, source }`. Set `WAITLIST_WEBHOOK_URL` in Vercel env to forward to Beehiiv / Mailchimp / Make / n8n. Without it, the route logs server-side.

## Handover (post-pick)

1. Pick variant, point root domain to it (or remove other routes).
2. Wire `WAITLIST_WEBHOOK_URL` to email provider.
3. Drop final logo at `/public/logo.svg` (referenced via `<SocialFooter brand>`).
4. Replace placeholder copy + add real testimonials.
5. Add `next-sitemap` and submit to Google Search Console.

---

Built by **[SkynetLabs](https://www.skynetjoe.com)** · Waseem Nasir
