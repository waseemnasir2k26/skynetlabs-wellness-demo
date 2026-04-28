'use client';
import { useState } from 'react';

type Tone = 'dark' | 'light' | 'clay' | 'cobalt' | 'glass';

const palette: Record<Tone, { wrap: string; input: string; btn: string; ok: string; err: string; help: string }> = {
  dark: {
    wrap: '',
    input: 'bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-teal-300',
    btn: 'bg-teal-300 text-black hover:bg-teal-200',
    ok: 'text-teal-300',
    err: 'text-red-300',
    help: 'text-white/50',
  },
  light: {
    wrap: '',
    input: 'bg-white border border-black/15 text-black placeholder:text-black/30 focus:border-black',
    btn: 'bg-black text-white hover:bg-neutral-800',
    ok: 'text-emerald-700',
    err: 'text-red-700',
    help: 'text-black/50',
  },
  clay: {
    wrap: '',
    input: 'bg-white/70 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-stone-700',
    btn: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
    ok: 'text-stone-700',
    err: 'text-red-700',
    help: 'text-stone-500',
  },
  cobalt: {
    wrap: '',
    input: 'bg-white border-2 border-black text-black placeholder:text-black/40',
    btn: 'bg-[#FFD600] text-black border-2 border-black hover:bg-yellow-300 font-bold',
    ok: 'text-[#0033FF]',
    err: 'text-red-700',
    help: 'text-black/60',
  },
  glass: {
    wrap: '',
    input: 'bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/40 focus:border-white/60',
    btn: 'bg-white text-black hover:bg-white/90',
    ok: 'text-white',
    err: 'text-red-200',
    help: 'text-white/60',
  },
};

export default function EmailCapture({
  tone = 'dark',
  cta = 'Join waitlist',
  placeholder = 'you@domain.com',
  helper = 'Early access · no spam · unsubscribe anytime.',
}: {
  tone?: Tone;
  cta?: string;
  placeholder?: string;
  helper?: string;
}) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  const t = palette[tone];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState('err');
      setMsg('Enter a valid email.');
      return;
    }
    setState('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: typeof window !== 'undefined' ? window.location.pathname : '' }),
      });
      if (!res.ok) throw new Error('failed');
      setState('ok');
      setMsg("You're in. Watch your inbox.");
      setEmail('');
    } catch {
      setState('err');
      setMsg('Something broke. Try again.');
    }
  }

  return (
    <form onSubmit={submit} className={`w-full max-w-md ${t.wrap}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="wl-email" className="sr-only">Email</label>
        <input
          id="wl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 h-12 px-4 rounded-md outline-none transition ${t.input}`}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className={`h-12 px-6 rounded-md font-medium transition disabled:opacity-50 ${t.btn}`}
        >
          {state === 'loading' ? '…' : cta}
        </button>
      </div>
      <p className={`mt-2 text-xs ${state === 'ok' ? t.ok : state === 'err' ? t.err : t.help}`}>
        {state === 'idle' || state === 'loading' ? helper : msg}
      </p>
    </form>
  );
}
