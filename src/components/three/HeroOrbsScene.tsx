'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function BuildingBlock({ position, scale }: { position: [number, number, number]; scale: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#f97316" 
          metalness={0.6} 
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function GlowingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.15;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Helmet({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.003;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group ref={groupRef} position={position}>
        <mesh>
          <sphereGeometry args={[0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, -0.1]}>
          <sphereGeometry args={[0.26, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f97316" metalness={0.9} roughness={0.3} side={THREE.BackSide} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroOrbsScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={20} color="#f97316" />
      <pointLight position={[-3, -2, 2]} intensity={15} color="#ffffff" />
      <pointLight position={[0, -3, 2]} intensity={10} color="#fbbf24" />

      {/* Building Blocks - representing construction */}
      <BuildingBlock position={[-2.5, 0.5, -1]} scale={[0.8, 0.8, 0.8]} />
      <BuildingBlock position={[2.2, -0.3, -0.5]} scale={[0.6, 1.2, 0.6]} />
      <BuildingBlock position={[0, 1.5, -1.5]} scale={[0.5, 0.5, 0.5]} />

      {/* Glowing Orbs - representing quality/excellence */}
      <GlowingOrb position={[-1.5, -1, 0]} color="#f97316" />
      <GlowingOrb position={[1.5, 1, -0.5]} color="#fbbf24" />
      <GlowingOrb position={[0, -1.5, 0.5]} color="#ffffff" />

      {/* Hard Hat - representing construction workers */}
      <Helmet position={[-1, 1.2, 0]} />
      <Helmet position={[1.2, -0.5, 0.5]} />

      <fog attach="fog" args={['#0f172a', 5, 15]} />
    </Canvas>
  );
}