type Tone = 'dark' | 'light' | 'clay' | 'cobalt' | 'glass';

const PRESS = ['VOGUE', 'WIRED', 'BLOOMBERG', 'TECHCRUNCH', 'GQ', 'FORBES'];

const tones: Record<Tone, { wrap: string; rule: string; label: string; logo: string }> = {
  dark: { wrap: '', rule: 'border-white/10', label: 'text-white/40', logo: 'text-white/70' },
  light: { wrap: '', rule: 'border-stone-300/60', label: 'text-stone-500', logo: 'text-stone-800' },
  clay: { wrap: '', rule: 'border-stone-400/40', label: 'text-stone-500', logo: 'text-stone-800' },
  cobalt: { wrap: '', rule: 'border-black/20', label: 'text-black/60', logo: 'text-black' },
  glass: { wrap: '', rule: 'border-white/10', label: 'text-white/50', logo: 'text-white/80' },
};

export default function TrustStrip({
  tone = 'dark',
  label = 'As seen in',
  outlets = PRESS,
}: {
  tone?: Tone;
  label?: string;
  outlets?: string[];
}) {
  const t = tones[tone];
  return (
    <section className={`border-y ${t.rule}`}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <span className={`font-mono text-[10px] uppercase tracking-[0.4em] shrink-0 ${t.label}`}>{label}</span>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12">
          {outlets.map((o) => (
            <li
              key={o}
              className={`font-serif italic text-xl md:text-2xl tracking-tight ${t.logo} opacity-80 hover:opacity-100 transition`}
            >
              {o}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
