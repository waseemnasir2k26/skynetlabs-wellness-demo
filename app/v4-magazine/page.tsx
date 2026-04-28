import type { Metadata } from 'next';
import VariantNav from '@/components/VariantNav';
import EmailCapture from '@/components/EmailCapture';
import SocialFooter from '@/components/SocialFooter';
import TrustStrip from '@/components/TrustStrip';
import Testimonials from '@/components/Testimonials';
import StickyCTA from '@/components/StickyCTA';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'CODEX — Wellness, but loud.',
  description: 'Bold magazine landing concept for a personalized wellness brand.',
};

const ISSUES = [
  { n: 'I.', t: 'YOUR DNA IS NOT A SHELF', d: 'The wellness aisle was built for nobody. We tear it apart and build a stack from your variants up.' },
  { n: 'II.', t: 'SCIENCE, NOT VIBES', d: 'Whole-genome data + clinical labs + lifestyle telemetry. No crystals, no tinctures, no nonsense.' },
  { n: 'III.', t: 'QUARTERLY OR DIE', d: 'You change. So does your stack. Every 90 days, we re-formulate based on real biomarker movement.' },
];

const NUMBERS = [
  { v: '1', l: 'Genome' },
  { v: '23k', l: 'Genes Read' },
  { v: '4×', l: 'Labs / Year' },
  { v: '90d', l: 'Reformulate' },
  { v: '0', l: 'Bullshit' },
];

export default function V4Magazine() {
  return (
    <>
      <SmoothScroll />
      <VariantNav tone="light" />
      <main className="min-h-screen bg-[#FFD600] text-black font-sans">
        <section className="relative pt-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-baseline justify-between border-b-4 border-black pb-4 mb-12">
              <span className="font-mono text-xs">VOL.01 · ISSUE 001 · APR 2026</span>
              <span className="font-mono text-xs">$0 · DIGITAL PRESS</span>
            </div>
            <h1 className="font-sans font-black text-6xl md:text-[10rem] leading-[0.85] tracking-tighter uppercase">
              Wellness,<br />
              <span className="italic font-serif font-normal">but&nbsp;</span>
              <span className="bg-[#0033FF] text-[#FFD600] px-3">loud.</span>
            </h1>
            <div className="grid md:grid-cols-12 gap-8 mt-12">
              <p className="md:col-span-6 text-xl leading-snug font-medium">
                A magazine, a method, a manufacturing line. Personalized nutrition and supplementation
                written from your DNA, shipped quarterly, designed to last a lifetime.
              </p>
              <div className="md:col-span-6 md:col-start-7">
                <EmailCapture tone="cobalt" cta="JOIN THE LIST" placeholder="EMAIL" helper="No spam. Only press releases." />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-[#FFD600] border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {NUMBERS.map((n) => (
              <div key={n.l} className="text-center md:text-left border-r-2 border-[#FFD600]/40 last:border-0 pr-4">
                <div className="font-black text-5xl md:text-7xl leading-none">{n.v}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] mt-2">{n.l}</div>
              </div>
            ))}
          </div>
        </section>

        <TrustStrip tone="cobalt" label="Press" />

        <section className="bg-[#FFD600] border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-0 border-2 border-black">
            {ISSUES.map((i, idx) => (
              <article
                key={i.n}
                className={`p-8 ${idx < 2 ? 'md:border-r-2 border-black' : ''} ${
                  idx > 0 ? 'border-t-2 md:border-t-0 border-black' : ''
                }`}
              >
                <div className="font-black text-7xl text-[#0033FF] mb-2">{i.n}</div>
                <h3 className="font-black text-2xl uppercase mb-4 leading-tight">{i.t}</h3>
                <p className="leading-relaxed">{i.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0033FF] text-[#FFD600] border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6">EDITORIAL · OUR MANIFESTO</p>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] max-w-5xl">
              The supplement industry is a&nbsp;
              <span className="italic font-serif font-normal text-white">$200B&nbsp;</span>
              joke. We&apos;re not laughing.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mt-12 text-lg leading-relaxed">
              <p>
                For seventy years, you&apos;ve been sold the average — the average dose, the average
                multivitamin, the average diet. You are not the average. Your genome says so.
              </p>
              <p>
                We built CODEX to ship you a stack that fits. Once a quarter. Re-formulated as your
                bloodwork moves. Designed for the next thirty years, not the next thirty days.
              </p>
            </div>
          </div>
        </section>

        <Testimonials tone="cobalt" />

        <section id="waitlist" className="bg-[#FFD600] border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">Get on the list.</h2>
            <p className="text-xl mb-10 max-w-xl mx-auto">
              First 1,000 members get founders pricing — locked for life.
            </p>
            <div className="flex justify-center"><EmailCapture tone="cobalt" cta="LOCK IT IN" /></div>
          </div>
        </section>

        <SocialFooter tone="cobalt" brand="CODEX" />
      </main>
      <StickyCTA tone="cobalt" label="LOCK IT IN" />
    </>
  );
}
