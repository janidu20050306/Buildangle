'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Rings() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ring.current) return;
    ring.current.rotation.x += delta * 0.2;
    ring.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={ring}>
      <torusKnotGeometry args={[1, 0.28, 220, 20]} />
      <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
    </mesh>
  );
}

export default function ProjectShowcaseScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 52 }}>
      <color attach="background" args={['#11151c']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={20} color="#f7f5f0" />
      <pointLight position={[-4, -3, -2]} intensity={14} color="#2d5a4d" />
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.8}>
        <Rings />
      </Float>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI * 0.85} minPolarAngle={Math.PI * 0.25} />
    </Canvas>
  );
}
