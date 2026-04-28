export default function Noise({ opacity = 0.05 }: { opacity?: number }) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml;utf8,${svg.replace(/#/g, '%23')}")`,
        backgroundSize: '200px 200px',
      }}
    />
  );
}
