type Tone = 'dark' | 'light' | 'clay' | 'cobalt' | 'glass';

const tones: Record<Tone, { wrap: string; rule: string; text: string; link: string }> = {
  dark: { wrap: 'bg-black text-white/60', rule: 'border-white/10', text: 'text-white/60', link: 'hover:text-white' },
  light: { wrap: 'bg-white text-black/60', rule: 'border-black/10', text: 'text-black/60', link: 'hover:text-black' },
  clay: { wrap: 'bg-stone-100 text-stone-700', rule: 'border-stone-300', text: 'text-stone-700', link: 'hover:text-stone-900' },
  cobalt: { wrap: 'bg-[#0033FF] text-white', rule: 'border-white/30', text: 'text-white/80', link: 'hover:text-[#FFD600]' },
  glass: { wrap: 'bg-black/40 backdrop-blur-md text-white/70', rule: 'border-white/10', text: 'text-white/70', link: 'hover:text-white' },
};

export default function SocialFooter({ tone = 'dark', brand = 'Brand' }: { tone?: Tone; brand?: string }) {
  const t = tones[tone];
  const year = new Date().getFullYear();
  return (
    <footer className={`${t.wrap} border-t ${t.rule}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-mono uppercase tracking-widest mb-2">{brand}</div>
          <p className={`text-sm ${t.text} max-w-xs`}>
            Personalized wellness, science-backed. DNA insights, smarter supplementation, real outcomes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <a className={t.link} href="#">Science</a>
          <a className={t.link} href="#">Method</a>
          <a className={t.link} href="#">FAQ</a>
          <a className={t.link} href="#">Press</a>
          <a className={t.link} href="#">Privacy</a>
          <a className={t.link} href="#">Terms</a>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-medium">Follow</div>
          <ul className="flex gap-4">
            <li><a className={t.link} href="#" aria-label="Instagram">Instagram</a></li>
            <li><a className={t.link} href="#" aria-label="TikTok">TikTok</a></li>
            <li><a className={t.link} href="#" aria-label="LinkedIn">LinkedIn</a></li>
            <li><a className={t.link} href="#" aria-label="X">X</a></li>
          </ul>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto px-6 py-4 text-xs flex flex-col sm:flex-row justify-between gap-2 border-t ${t.rule}`}>
        <span>© {year} {brand}. All rights reserved.</span>
        <span className="font-mono">Demo by SkynetLabs · skynetjoe.com</span>
      </div>
    </footer>
  );
}
