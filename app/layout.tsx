import type { Metadata } from 'next';
import { Inter, Fraunces, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const instrument = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-instrument', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Skynetlabs Wellness Demo — 5 Premium Landing Concepts',
  description: 'Five distinct landing page directions for a personalized wellness brand: DNA insights, nutrition, smart supplementation. Built by SkynetLabs.',
  metadataBase: new URL('https://skynetlabs-wellness-demo.vercel.app'),
  openGraph: {
    title: 'Skynetlabs Wellness Demo',
    description: '5 premium landing concepts — pick a direction.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
