'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VARIANTS = [
  { slug: '', label: 'All' },
  { slug: 'v1-helix', label: 'V1 · Helix' },
  { slug: 'v2-editorial', label: 'V2 · Editorial' },
  { slug: 'v3-glass', label: 'V3 · Glass' },
  { slug: 'v4-magazine', label: 'V4 · Magazine' },
  { slug: 'v5-aesop', label: 'V5 · Aesop' },
];

export default function VariantNav({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const pathname = usePathname();
  const isLight = tone === 'light';
  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md ${
        isLight ? 'bg-white/70 border-b border-black/5' : 'bg-black/40 border-b border-white/10'
      }`}
      aria-label="Variant navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-12 text-xs">
        <Link href="/" className={`font-mono tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
          SKYNETLABS · WELLNESS
        </Link>
        <ul className="flex gap-1 sm:gap-3 overflow-x-auto whitespace-nowrap">
          {VARIANTS.map((v) => {
            const href = v.slug ? `/${v.slug}` : '/';
            const active = pathname === href;
            return (
              <li key={v.slug}>
                <Link
                  href={href}
                  className={`px-2 py-1 rounded-full transition ${
                    active
                      ? isLight
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                      : isLight
                      ? 'text-black/60 hover:text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {v.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
