type Tone = 'dark' | 'light' | 'clay' | 'cobalt' | 'glass';

const QUOTES = [
  {
    q: 'The first wellness platform that actually felt like it was reading me, not selling to me. My energy stabilized in weeks, not months.',
    n: 'Dr. Lena Park',
    r: 'Preventative Medicine, Cedars-Sinai',
  },
  {
    q: 'I have done genetic testing four times. This is the only product where the protocol that came back made obvious sense — and obvious changes.',
    n: 'Marcus Hale',
    r: 'Founder, Northstar Capital',
  },
  {
    q: 'A category reset. Less guru, more lab notebook. Exactly what wellness has needed for ten years.',
    n: 'Sasha Mendoza',
    r: 'Editor-in-Chief, Volume',
  },
];

const tones: Record<Tone, { wrap: string; quote: string; cite: string; rule: string; mark: string }> = {
  dark: {
    wrap: 'bg-[#03060d] text-white',
    quote: 'text-white/90',
    cite: 'text-white/50',
    rule: 'border-white/10',
    mark: 'text-teal-300/40',
  },
  light: {
    wrap: 'bg-[#f6f1e8] text-stone-900',
    quote: 'text-stone-800',
    cite: 'text-stone-500',
    rule: 'border-stone-300',
    mark: 'text-stone-400',
  },
  clay: {
    wrap: 'bg-[#ece4d3] text-stone-900',
    quote: 'text-stone-800',
    cite: 'text-stone-600',
    rule: 'border-stone-400/50',
    mark: 'text-stone-500/60',
  },
  cobalt: {
    wrap: 'bg-[#FFD600] text-black',
    quote: 'text-black',
    cite: 'text-black/70',
    rule: 'border-black',
    mark: 'text-[#0033FF]',
  },
  glass: {
    wrap: 'bg-transparent text-white',
    quote: 'text-white/90',
    cite: 'text-white/60',
    rule: 'border-white/15',
    mark: 'text-cyan-200/40',
  },
};

export default function Testimonials({
  tone = 'dark',
  eyebrow = 'In their words',
  heading = 'Quietly approved by people who do not approve quietly.',
}: {
  tone?: Tone;
  eyebrow?: string;
  heading?: string;
}) {
  const t = tones[tone];
  return (
    <section className={`${t.wrap} py-24`}>
      <div className="max-w-6xl mx-auto px-6">
        <p className={`font-mono text-[11px] uppercase tracking-[0.35em] mb-4 ${t.cite}`}>{eyebrow}</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-3xl leading-tight">{heading}</h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {QUOTES.map((q) => (
            <li key={q.n} className={`relative pt-12 border-t ${t.rule}`}>
              <span className={`absolute -top-2 left-0 font-serif text-7xl leading-none ${t.mark}`}>&ldquo;</span>
              <blockquote className={`font-serif text-lg leading-snug ${t.quote}`}>{q.q}</blockquote>
              <footer className={`mt-6 text-sm ${t.cite}`}>
                <div className="font-medium">{q.n}</div>
                <div className="text-xs mt-1 font-mono uppercase tracking-widest">{q.r}</div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
