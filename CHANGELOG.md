# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- Public Next.js 15 / React 19 project holding five landing-page concepts (`/v1-helix` to `/v5-aesop`) for a personalised-wellness brand, built as a speculative pitch; live at https://skynetlabs-wellness-demo.vercel.app, with the client message logged as sent 2026-04-28.
- October 2026 review: README, tree and history re-read (no commits since the 2026-09-16 release commit). Both external README links returned HTTP 200. Package version bumped 1.1.0 to 1.2.0 as release metadata only; no application code changed.
- The old "Built by SkynetLabs" footer line is kept and a Work with SkynetLabs section was appended after it.
- Known gaps: no `public/` directory, so the `/public/logo.svg` named in the README handover step is missing; `WAITLIST_WEBHOOK_URL` is unset so `/api/waitlist` only logs; no LICENSE; no tests or CI beyond `next lint`.

## [2026.09] - 2026-09-16

- Maintenance review of skynetlabs-wellness-demo — five distinct premium landing-page concepts for a personalized wellness brand (DNA insights, personalized nutrition, smarter supplementation), built by SkynetLabs as a speculative pitch deliverable.
- Status: Next.js 15 app-router project on React 19 with Tailwind, Framer Motion, Lenis and React Three Fiber/Drei. Routes `/v1-helix`, `/v2-editorial`, `/v3-glass`, `/v4-magazine`, `/v5-aesop` sit behind a hub at `/` with a persistent variant nav; email capture stub at `/api/waitlist`. Live at https://skynetlabs-wellness-demo.vercel.app. Pitch record shows the client message sent 2026-04-28 (`docs/CLIENT-PITCH.md`, `docs/CLIENT-MESSAGE.md`).
- Reviewed September 2026: documentation refreshed and the package version bumped to 1.1.0 for release v2026.09. No application code changes.
- Known gaps: no `public/` directory yet, so the `/public/logo.svg` referenced in the README handover step is missing; `WAITLIST_WEBHOOK_URL` is unset, so `/api/waitlist` only logs server-side; no LICENSE file; no CHANGELOG before this release; no tests or CI beyond `next lint`.
