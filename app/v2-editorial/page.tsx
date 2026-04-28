import type { Metadata } from 'next';
import VariantNav from '@/components/VariantNav';
import EmailCapture from '@/components/EmailCapture';
import SocialFooter from '@/components/SocialFooter';

export const metadata: Metadata = {
  title: 'Apothecary — A quiet science of being well',
  description: 'Editorial wellness landing concept. Personalized nutrition, DNA insights, smart supplementation.',
};

const PILLARS = [
  { n: '01', t: 'Read', d: 'Whole-genome sequencing. Lab work twice a year. We turn data into a quiet daily practice.' },
  { n: '02', t: 'Compose', d: 'A nutrition rhythm and supplement formulation written for your variants — not a market average.' },
  { n: '03', t: 'Refine', d: 'Quarterly review. Re-formulate. Iterate. Wellness as a feedback loop, not a fad.' },
];

const NOTES = [
  { l: 'Founder', r: 'Built by clinicians, geneticists, and one very stubborn home cook.' },
  { l: 'Method', r: 'Whole-genome + serum biomarkers + lifestyle telemetry, reviewed quarterly.' },
  { l: 'Origin', r: 'A small studio in north London. Members in 14 cities.' },
];

export default function V2Editorial() {
  return (
    <>
      <VariantNav tone="light" />
      <main className="min-h-screen bg-[#f6f1e8] text-stone-900">
        <section className="pt-32 pb-24 border-b border-stone-300/60">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-stone-600 mb-8">
                Volume I · A modern apothecary
              </p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
                A quiet science<br />of being well.
              </h1>
            </div>
            <div className="md:col-span-5 md:pb-3">
              <p className="font-serif italic text-xl md:text-2xl leading-snug text-stone-700 max-w-md border-l-2 border-stone-700 pl-5">
                Personalized nutrition and supplementation, written from your DNA. No noise. No
                miracle promises. Just the next right thing, every day.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-stone-300/60">
          <div className="max-w-5xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-600 mb-6">A note from the studio</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-stone-800 max-w-3xl">
              We started this because the wellness aisle had become loud, expensive, and almost never
              about <em>you</em>. So we built a small library of tools — genomics, lab work, recipe
              composition — and a method to use them gently, every quarter, for the rest of your life.
            </p>
          </div>
        </section>

        <section className="py-20 border-b border-stone-300/60">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 max-w-2xl">The Method, in three movements.</h2>
            <ol className="grid md:grid-cols-3 gap-12">
              {PILLARS.map((p) => (
                <li key={p.n} className="border-t-2 border-stone-700 pt-6">
                  <div className="font-mono text-xs tracking-widest text-stone-600">{p.n}</div>
                  <h3 className="font-serif text-3xl mt-2 mb-4">{p.t}</h3>
                  <p className="text-stone-700 leading-relaxed">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 border-b border-stone-300/60 bg-[#ece4d3]">
          <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-600 mb-4">Marginalia</p>
              <h2 className="font-serif text-4xl leading-tight">Quiet authority is the new luxury.</h2>
              <p className="mt-6 text-stone-700 leading-relaxed">
                We do not sell hope by the bottle. We sell a method, a rhythm, and a small library of
                tools that actually fit who you are.
              </p>
            </div>
            <dl className="space-y-6">
              {NOTES.map((n) => (
                <div key={n.l} className="grid grid-cols-3 gap-6 border-t border-stone-400/60 pt-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-stone-600">{n.l}</dt>
                  <dd className="col-span-2 font-serif text-lg text-stone-800">{n.r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-24 bg-[#3a4a35] text-stone-50">
          <div className="max-w-3xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-300 mb-4">The waitlist</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">An invitation, by post.</h2>
            <p className="text-stone-200 mb-10 max-w-xl leading-relaxed">
              The first hundred members receive a hand-bound onboarding journal and a year of
              quarterly reviews included.
            </p>
            <EmailCapture tone="dark" cta="Request invitation" helper="Limited to 100 founding members." />
          </div>
        </section>

        <SocialFooter tone="light" brand="APOTHECARY" />
      </main>
    </>
  );
}
