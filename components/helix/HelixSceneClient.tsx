'use client';
import dynamic from 'next/dynamic';

const HelixScene = dynamic(() => import('./HelixScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-[#03060d] to-[#081428]" />,
});

export default function HelixSceneClient() {
  return <HelixScene />;
}
