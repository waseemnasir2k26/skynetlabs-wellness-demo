'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Helix() {
  const group = useRef<THREE.Group>(null);
  const { positionsA, positionsB, rungs } = useMemo(() => {
    const turns = 4;
    const points = 220;
    const radius = 1.4;
    const heightTotal = 9;
    const a: THREE.Vector3[] = [];
    const b: THREE.Vector3[] = [];
    for (let i = 0; i < points; i++) {
      const t = i / (points - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * heightTotal;
      a.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      b.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
    }
    const r: { from: THREE.Vector3; to: THREE.Vector3; key: number }[] = [];
    for (let i = 0; i < points; i += 4) r.push({ from: a[i], to: b[i], key: i });
    return { positionsA: a, positionsB: b, rungs: r };
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      {positionsA.map((p, i) => (
        <mesh key={`a-${i}`} position={p}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#5eead4" emissive="#14b8a6" emissiveIntensity={0.9} roughness={0.25} />
        </mesh>
      ))}
      {positionsB.map((p, i) => (
        <mesh key={`b-${i}`} position={p}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.9} roughness={0.25} />
        </mesh>
      ))}
      {rungs.map((r) => {
        const mid = r.from.clone().add(r.to).multiplyScalar(0.5);
        const dir = r.to.clone().sub(r.from);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        return (
          <mesh key={`r-${r.key}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.018, 0.018, len, 8]} />
            <meshStandardMaterial color="#94a3b8" emissive="#475569" emissiveIntensity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HelixScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={['#03060d']} />
      <fog attach="fog" args={['#03060d', 8, 18]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.1} color="#5eead4" />
      <pointLight position={[-5, -5, 5]} intensity={1.0} color="#a78bfa" />
      <Stars radius={50} depth={30} count={2200} factor={3} fade speed={0.5} />
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.4}>
        <Helix />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
