'use client';
import { motion } from 'framer-motion';
import VariantNav from '@/components/VariantNav';
import EmailCapture from '@/components/EmailCapture';
import SocialFooter from '@/components/SocialFooter';
import TrustStrip from '@/components/TrustStrip';
import Testimonials from '@/components/Testimonials';
import StickyCTA from '@/components/StickyCTA';
import SmoothScroll from '@/components/SmoothScroll';

const CARDS = [
  { tag: 'GENOMICS', t: 'Whole-genome screening', d: 'Read 23,000+ genes once. Use the insights for life. We re-process annually as the science updates.', glyph: '∿' },
  { tag: 'LABS', t: 'Twice-yearly bloodwork', d: 'Clinical-grade panel: hormones, micronutrients, lipids, inflammation. Trended, not single-snapshot.', glyph: '◴' },
  { tag: 'STACK', t: 'Smart supplementation', d: 'Ingredient-level dosing keyed to your DNA + biomarkers. Re-formulated every quarter, shipped to your door.', glyph: '◇' },
  { tag: 'NUTRITION', t: 'Personalized plate', d: 'Macro / micro targets. Recipe library that learns your preferences and adapts to your variants.', glyph: '◐' },
];

const SCIENCE = [
  { v: '99.9%', l: 'sequencing accuracy' },
  { v: 'CLIA / CAP', l: 'partnered labs' },
  { v: 'ISO 27001', l: 'data security' },
  { v: 'Quarterly', l: 'reformulation cadence' },
];

export default function V3Glass() {
  return (
    <>
      <SmoothScroll />
      <VariantNav tone="dark" />
      <main className="relative min-h-screen text-white overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#020617]" />
          <motion.div
            className="absolute -top-1/3 -left-1/4 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-60"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }}
            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-1/3 -right-1/4 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-60"
            style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 60%)' }}
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.6)_100%)]" />
        </div>

        <section className="relative pt-32 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-200/80 mb-8"
            >
              Personalized Wellness · Healthtech Stack
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl"
            >
              The wellness platform that <span className="italic text-cyan-200">adapts</span> to your biology.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-white/70 leading-relaxed text-lg"
            >
              DNA, labs, lifestyle — pulled into one operating system that re-formulates your plan every
              quarter. Calm UI. Clinical-grade science. Quietly powerful.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10"
            >
              <EmailCapture tone="glass" cta="Get early access" />
            </motion.div>
          </div>
        </section>

        <TrustStrip tone="glass" label="Featured in" />

        <section className="relative py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl mb-12">A unified system.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {CARDS.map((c, i) => (
                <motion.div
                  key={c.tag}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl p-8 border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_rgba(2,6,23,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200">{c.tag}</span>
                    <span className="text-3xl text-cyan-200/80">{c.glyph}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl">{c.t}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{c.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-4">
            {SCIENCE.map((s) => (
              <div key={s.l} className="rounded-xl p-6 border border-white/10 bg-white/[0.04] backdrop-blur-md">
                <div className="font-display text-2xl text-cyan-200">{s.v}</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <Testimonials tone="glass" />

        <section id="waitlist" className="relative py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Pre-launch · invite only.</h2>
            <p className="text-white/70 mb-10">First cohort gets founders pricing for life and direct access to the science team.</p>
            <div className="flex justify-center"><EmailCapture tone="glass" cta="Request access" /></div>
          </div>
        </section>

        <SocialFooter tone="glass" brand="GLASS LAB" />
      </main>
      <StickyCTA tone="glass" />
    </>
  );
}
