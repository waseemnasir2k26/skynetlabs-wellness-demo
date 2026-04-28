'use client';
import { useEffect, useState } from 'react';

type Tone = 'dark' | 'light' | 'clay' | 'cobalt' | 'glass';

const tones: Record<Tone, string> = {
  dark: 'bg-white text-black hover:bg-teal-200',
  light: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
  clay: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
  cobalt: 'bg-[#0033FF] text-[#FFD600] hover:bg-blue-700 border-2 border-black',
  glass: 'bg-white text-black hover:bg-cyan-100',
};

export default function StickyCTA({
  href = '#waitlist',
  label = 'Join waitlist',
  tone = 'dark',
}: {
  href?: string;
  label?: string;
  tone?: Tone;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={href}
        className={`inline-flex items-center gap-2 h-12 px-6 rounded-full font-medium shadow-2xl transition ${tones[tone]}`}
      >
        {label} <span aria-hidden>→</span>
      </a>
    </div>
  );
}
