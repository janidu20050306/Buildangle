'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.35, 1]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export default function HeroOrbsScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[2, 2, 2]} intensity={16} color="#d4af37" />
      <pointLight position={[-2, -1, 1]} intensity={10} color="#2d5a4d" />
      <Stars radius={120} depth={45} count={1500} factor={3} fade speed={0.8} />
      <Orb position={[-1.3, 0.3, 0]} color="#d4af37" />
      <Orb position={[1.2, -0.2, -0.4]} color="#2d5a4d" />
      <Orb position={[0.1, 1.1, -0.8]} color="#a0826d" />
    </Canvas>
  );
}
