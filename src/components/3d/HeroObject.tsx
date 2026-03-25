"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#4F46E5"
          emissive="#9333EA"
          emissiveIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function HeroObject() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          snap
        >
          <AbstractShape />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
