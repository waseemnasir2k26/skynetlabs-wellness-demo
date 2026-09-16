# 2026.09 — Maintenance release

- Maintenance review of skynetlabs-wellness-demo — five distinct premium landing-page concepts for a personalized wellness brand (DNA insights, personalized nutrition, smarter supplementation), built by SkynetLabs as a speculative pitch deliverable.
- Status: Next.js 15 app-router project on React 19 with Tailwind, Framer Motion, Lenis and React Three Fiber/Drei. Routes `/v1-helix`, `/v2-editorial`, `/v3-glass`, `/v4-magazine`, `/v5-aesop` sit behind a hub at `/` with a persistent variant nav; email capture stub at `/api/waitlist`. Live at https://skynetlabs-wellness-demo.vercel.app. Pitch record shows the client message sent 2026-04-28 (`docs/CLIENT-PITCH.md`, `docs/CLIENT-MESSAGE.md`).
- Reviewed September 2026: documentation refreshed and the package version bumped to 1.1.0 for release v2026.09. No application code changes.
- Known gaps: no `public/` directory yet, so the `/public/logo.svg` referenced in the README handover step is missing; `WAITLIST_WEBHOOK_URL` is unset, so `/api/waitlist` only logs server-side; no LICENSE file; no CHANGELOG before this release; no tests or CI beyond `next lint`.
