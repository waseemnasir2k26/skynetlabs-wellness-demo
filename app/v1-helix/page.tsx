import type { Metadata } from 'next';
import VariantNav from '@/components/VariantNav';
import EmailCapture from '@/components/EmailCapture';
import SocialFooter from '@/components/SocialFooter';
import HelixScene from '@/components/helix/HelixSceneClient';
import TrustStrip from '@/components/TrustStrip';
import Testimonials from '@/components/Testimonials';
import Noise from '@/components/Noise';
import StickyCTA from '@/components/StickyCTA';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Helix — Personalized wellness, decoded from your DNA',
  description: 'A cinematic introduction to Helix: whole-genome screening, clinical-grade labs, and a stack that re-formulates with you every quarter.',
};

const STATS = [
  { k: '0.1%', v: 'of your DNA makes you, you' },
  { k: '23k', v: 'genes screened' },
  { k: '1B+', v: 'data points modeled' },
  { k: '90 days', v: 'reformulation cadence' },
];

const OFFERINGS = [
  { tag: 'DNA INSIGHTS', t: 'Read what your genes are saying.', d: 'Whole-genome screening + clinical-grade lab pipeline. We translate raw markers into a daily map you actually act on.' },
  { tag: 'PERSONALIZED NUTRITION', t: 'Your plate, calibrated.', d: 'Macro and micro targets per-week, recipe library that adapts to your variants, not a stranger\u2019s diet plan.' },
  { tag: 'SMARTER SUPPLEMENTS', t: 'No guess stacks.', d: 'Ingredient-level dosing keyed to your DNA + bloodwork, re-formulated every quarter as your data updates.' },
];

const PROOF = ['CLIA-certified', 'CAP-accredited', 'ISO 27001', 'HIPAA-aligned'];

export default function V1Helix() {
  return (
    <>
      <SmoothScroll />
      <VariantNav tone="dark" />
      <Noise opacity={0.04} />
      <main className="min-h-screen bg-[#03060d] text-white overflow-hidden">
        <section className="relative min-h-[100svh] flex items-end pt-20">
          <div className="absolute inset-0">
            <HelixScene />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#03060d]" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-32 w-full">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-teal-300/80 mb-6">
              Personalized Wellness · Built On You
            </p>
            <h1 className="font-serif text-5xl md:text-8xl leading-[0.92] tracking-tight max-w-4xl">
              Wellness, decoded from <em className="text-teal-300 not-italic">your</em> DNA.
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              We map your genome, read your labs, and ship a stack that actually fits you. No more
              one-size-fits-all multivitamins. No more guessing.
            </p>
            <div className="mt-10 max-w-md">
              <EmailCapture tone="dark" cta="Request invite" helper={"Founders\u2019 list closes at 500."} />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[0.25em] text-white/50">
              {PROOF.map((p) => (
                <span key={p} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-300" /> {p}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 animate-pulse">
            scroll ↓
          </div>
        </section>

        <TrustStrip tone="dark" label="Featured in" />

        <section className="relative py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <div key={s.k}>
                <div className="font-serif text-5xl text-teal-300">{s.k}</div>
                <div className="mt-2 text-sm text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-300/70 mb-4">The Method</p>
            <h2 className="font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
              Three loops. One feedback system.
            </h2>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {OFFERINGS.map((o, i) => (
                <article key={o.tag} className="relative p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur">
                  <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-teal-300 text-black flex items-center justify-center font-mono text-xs font-bold">
                    0{i + 1}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal-300">{o.tag}</span>
                  <h3 className="mt-4 font-serif text-2xl leading-snug">{o.t}</h3>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed">{o.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials tone="dark" />

        <section id="waitlist" className="relative py-32 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-300/70 mb-4">Founders Waitlist</p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Be among the first 500.</h2>
            <p className="text-white/70 mb-10 text-lg leading-relaxed">
              Founders pricing locked for life. Live results dashboard. A direct line to the science team.
            </p>
            <div className="flex justify-center"><EmailCapture tone="dark" cta="Get my invite" /></div>
          </div>
        </section>

        <SocialFooter tone="dark" brand="HELIX" />
      </main>
      <StickyCTA tone="dark" />
    </>
  );
}
