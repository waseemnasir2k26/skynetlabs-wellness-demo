'use client';
import { motion } from 'framer-motion';
import VariantNav from '@/components/VariantNav';
import EmailCapture from '@/components/EmailCapture';
import SocialFooter from '@/components/SocialFooter';

const RITUALS = [
  { t: 'A morning legible.', d: 'Your day begins with two formulations, a glass of water, and a one-line note from the lab.' },
  { t: 'A plate that fits.', d: 'Recipes composed for your variants, your week, your kitchen — no calorie maths required.' },
  { t: 'A quiet quarterly review.', d: 'Twice-yearly bloodwork. Each quarter we re-write your stack. The plan is alive.' },
];

export default function V5Aesop() {
  return (
    <>
      <VariantNav tone="light" />
      <main className="min-h-screen bg-[#f4ece1] text-stone-900 overflow-hidden">
        <Blob className="-top-40 -left-40 w-[60vw] h-[60vw] bg-[#d8c2a4]" delay={0} />
        <Blob className="top-1/3 -right-32 w-[55vw] h-[55vw] bg-[#a89b85]" delay={3} />
        <Blob className="bottom-0 left-1/4 w-[50vw] h-[50vw] bg-[#c8b89d]" delay={6} />

        <section className="relative pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-600 mb-10"
            >
              A small ritual, daily
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="font-serif text-5xl md:text-8xl leading-[1.02] tracking-tight max-w-4xl"
            >
              Wellness,<br />
              <em className="text-stone-600">measured by calm.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mt-8 max-w-xl text-stone-700 leading-relaxed text-lg"
            >
              Personalized nutrition and supplementation, composed from your DNA. We ship every
              quarter. We ask nothing of you between deliveries except that you breathe.
            </motion.p>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-3 gap-12">
            {RITUALS.map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-stone-700 mb-6 flex items-center justify-center text-stone-50 font-serif text-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-snug">{r.t}</h3>
                <p className="text-stone-700 leading-relaxed">{r.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="font-serif italic text-3xl md:text-4xl leading-snug text-stone-800"
            >
              &ldquo;The point is not more energy, more sleep, more years. The point is to feel like
              yourself, more often.&rdquo;
              <footer className="mt-6 not-italic font-mono text-xs uppercase tracking-[0.3em] text-stone-600">
                — Founder&apos;s note
              </footer>
            </motion.blockquote>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-5xl mx-auto px-8">
            <div className="rounded-3xl bg-[#3d3328] text-stone-100 p-12 md:p-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-stone-300 mb-6">
                Quietly, we&apos;re opening the list.
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 max-w-2xl leading-tight">
                A small membership, by invitation.
              </h2>
              <p className="text-stone-300 leading-relaxed mb-10 max-w-xl">
                We are accepting one hundred founding members. Each receives a hand-bound onboarding
                journal and a year of quarterly reviews, included.
              </p>
              <EmailCapture tone="dark" cta="Request invitation" helper="Founders list · 100 places · response within 7 days." />
            </div>
          </div>
        </section>

        <SocialFooter tone="clay" brand="MAISON" />
      </main>
    </>
  );
}

function Blob({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`fixed rounded-full blur-3xl opacity-50 pointer-events-none -z-0 ${className}`}
      animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.05, 0.95, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}
