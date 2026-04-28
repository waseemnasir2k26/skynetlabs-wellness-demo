# Client Pitch Log — Wellness DNA Brand

**Date sent:** 2026-04-28
**Channel:** (Upwork / direct — fill in)
**Client:** Pre-launch wellness brand (DNA insights, personalized nutrition, smart supplements)
**Quoted budget:** Up to $1,000 (fixed)
**Stated deadline:** 2026-05-11
**Status:** PITCHED — awaiting reply
**Owner:** Waseem Nasir · SkynetLabs

---

## Original brief (verbatim)

> Premium one-page landing page. Build credibility, collect email signups, support social traffic.
> Scope: responsive 1-page, mobile-first, email capture, basic SEO, hero + brand statement + offerings + footer with social.
> References: 3 examples of premium landing pages built.
> Open to Webflow / Carrd; "clean modern aesthetic, high-end, science-backed simplicity."
> Brand context: modern personalized wellness — DNA insights, personalized nutrition, smarter supplement recommendations.

## My response strategy

1. **Speculative build** — built 5 distinct directions instead of 1 (per SkynetLabs rule: build demo first, pitch with scope Qs).
2. **Stack upgrade pitch** — switched from Webflow/Carrd to Next.js + Vercel (faster, no ceiling, free hosting, V1 helix impossible in Carrd).
3. **Premium signals** — TrustStrip (press logos), Testimonials (named MD / VC / editor), Lenis smooth scroll, sticky CTA, OG image, compliance badges (CLIA / CAP / ISO 27001 / HIPAA).
4. **Anchored price at $1K** — full client budget, no discount, 5–7 day delivery.
5. **5 scope questions** to qualify and force engagement.

## Deliverables shipped (live)

- **Hub:** https://skynetlabs-wellness-demo.vercel.app
- **V1 Helix** (3D cinematic): https://skynetlabs-wellness-demo.vercel.app/v1-helix
- **V2 Editorial** (apothecary serif): https://skynetlabs-wellness-demo.vercel.app/v2-editorial
- **V3 Glass** (glassmorphism): https://skynetlabs-wellness-demo.vercel.app/v3-glass
- **V4 Magazine** (brutalist cobalt): https://skynetlabs-wellness-demo.vercel.app/v4-magazine
- **V5 Aesop** (soft clay calm): https://skynetlabs-wellness-demo.vercel.app/v5-aesop

## Stack used

- Next.js 15.5 · React 19 · Tailwind 3.4
- @react-three/fiber 9 · @react-three/drei 10 · three 0.170 (V1 only)
- Framer Motion 11 · Lenis 1.3
- Vercel Edge · `/api/waitlist` route stub (set `WAITLIST_WEBHOOK_URL` post-pick)

## Questions sent

1. Which variant feels closest to the brand?
2. Brand name + final logo — do you have it, or part of scope?
3. Email destination — Beehiiv, Mailchimp, ConvertKit, or other?
4. Domain — owned already, or stay on Vercel for now?
5. Final copy — you'll provide, or I write it?

## Pricing structure (if upsell needed)

| Package | Price | Scope |
|---|---|---|
| Base | $1,000 | Pick variant, polish, copy hookup, email wired, DNS guidance, basic SEO, handover doc |
| +Copy | +$150 | I write all final brand copy (3 hero variations + offering blocks) |
| +Logo | +$200 | 3 logo concepts, 1 round revision, full asset pack |
| +V1 Helix premium | +$500 | Three.js DNA helix only available on V1 — extra polish, custom shader, mobile-tuned |
| Phase 2 (later) | $2,500–4,000 | Full multi-page site, blog, CMS (Sanity), advanced SEO, A/B testing |

## Risk flags

- No budget headroom for revisions if client wants major direction change after pick — set 2-revision limit in scope reply
- $1K cap is tight if logo + copy both needed — upsell or scope-cut
- Domain handover may stall — recommend Vercel subdomain for week-1 launch

## Next actions if reply lands

- [ ] Pick variant per client answer
- [ ] Strip other 4 variants from production deploy (move to `/internal/`)
- [ ] Wire `WAITLIST_WEBHOOK_URL` to client's email tool
- [ ] Insert real brand name + logo in `<SocialFooter brand>` + `<VariantNav>`
- [ ] Replace placeholder copy with brand voice
- [ ] Add `next-sitemap`, submit to Search Console
- [ ] DNS handover doc (or transfer to Vercel)
- [ ] 50% deposit invoice ($500) before polish work begins

## Outcome (fill on reply)

- Reply received: __________
- Variant picked: __________
- Deal closed: Y / N
- Final price: $__________
- Delivery date: __________
- Phase 2 booked: Y / N

---

_Logged by Jarvis Brain · session 2026-04-28._
