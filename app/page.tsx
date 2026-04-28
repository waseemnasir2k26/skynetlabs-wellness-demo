import Link from 'next/link';
import VariantNav from '@/components/VariantNav';
import TrustStrip from '@/components/TrustStrip';
import Noise from '@/components/Noise';

const VARIANTS = [
  {
    slug: 'v1-helix',
    title: 'Helix Cinematic',
    tag: '3D · Dark · Bioluminescent',
    blurb: 'Three.js DNA helix hero, scroll-driven camera, deep-space palette. For brands that want to feel like a flagship product reveal.',
    bg: 'linear-gradient(135deg, #050a14 0%, #0a1f3d 60%, #0e3a4a 100%)',
    accent: '#5eead4',
  },
  {
    slug: 'v2-editorial',
    title: 'Editorial Apothecary',
    tag: 'Serif · Bone · Sage',
    blurb: 'Magazine grid, Fraunces serif, slow rhythm. Quiet authority — the Aesop / Goop / The New York Times Wirecutter lane.',
    bg: 'linear-gradient(135deg, #f5f1ea 0%, #e7ded0 60%, #c4cdb6 100%)',
    accent: '#3a4a35',
  },
  {
    slug: 'v3-glass',
    title: 'Glass Lab',
    tag: 'Frosted · Gradient · Minimal',
    blurb: 'Frosted glass cards, animated gradient mesh, micro-motion. Modern healthtech / SaaS energy without feeling sterile.',
    bg: 'radial-gradient(120% 120% at 20% 0%, #6366f1 0%, #0ea5e9 40%, #020617 100%)',
    accent: '#a5f3fc',
  },
  {
    slug: 'v4-magazine',
    title: 'Bold Magazine',
    tag: 'Cobalt · Acid · Brutalist',
    blurb: 'Oversized type, brutalist grid, cobalt + acid yellow. For a brand that wants to take cultural space, not blend in.',
    bg: 'linear-gradient(135deg, #0033FF 0%, #1745c4 50%, #FFD600 130%)',
    accent: '#FFD600',
  },
  {
    slug: 'v5-aesop',
    title: 'Soft Aesop',
    tag: 'Clay · Beige · Calm',
    blurb: 'Pastel clay palette, organic blobs, slow fades. The calm-luxury lane — feels expensive, never loud.',
    bg: 'linear-gradient(135deg, #f4ece1 0%, #e3cdb6 50%, #c8b89d 100%)',
    accent: '#7a5b3e',
  },
];

export default function Hub() {
  return (
    <>
      <VariantNav tone="dark" />
      <Noise opacity={0.04} />
      <main className="relative min-h-screen pt-24 pb-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30 bg-teal-500 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-25 bg-violet-600 pointer-events-none" />
        <section className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
            Skynetlabs · Wellness Brand Demo · 5 Concepts
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
            Five directions.<br />
            <span className="text-white/60 italic">One you.</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            A modern, personalized wellness brand — DNA insights, nutrition, smarter supplementation —
            shown through five distinct landing-page identities. Pick the one that matches the soul
            of the brand. We&apos;ll ship the chosen direction polished, fast, and ready for traffic.
          </p>
        </section>

        <div className="relative max-w-6xl mx-auto px-6 mt-16">
          <TrustStrip tone="dark" label="Built for brands featured in" />
        </div>

        <section className="relative max-w-6xl mx-auto px-6 mt-16">
          <ul className="grid gap-6 md:grid-cols-2">
            {VARIANTS.map((v, i) => (
              <li key={v.slug}>
                <Link
                  href={`/${v.slug}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 hover:border-white/30 transition"
                  style={{ background: v.bg }}
                >
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                        0{i + 1} · {v.tag}
                      </span>
                      <span
                        className="text-xs font-mono px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20"
                        style={{ color: v.accent }}
                      >
                        view →
                      </span>
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl md:text-4xl mb-3 text-white drop-shadow-md">
                        {v.title}
                      </h2>
                      <p className="text-sm text-white/85 max-w-md leading-relaxed">{v.blurb}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative max-w-6xl mx-auto px-6 mt-24 text-white/60 text-sm leading-relaxed">
          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div>
              <h3 className="text-white font-medium mb-2">What&apos;s included</h3>
              <p>Responsive 1-page build, hero / story / offering / waitlist / footer, on-brand SEO, fast handover doc.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Stack note</h3>
              <p>Built on Next.js + Vercel instead of Webflow/Carrd. Faster, free hosting, no plan ceiling, infinite design headroom.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Timeline</h3>
              <p>Pick a direction, 5–7 working days to polish + handover. Email capture + DNS guidance included.</p>
            </div>
          </div>
        </section>

        <footer className="relative max-w-6xl mx-auto px-6 mt-24 text-xs font-mono text-white/40 flex justify-between">
          <span>SKYNETLABS · skynetjoe.com</span>
          <span>Demo · Not for production traffic</span>
        </footer>
      </main>
    </>
  );
}
