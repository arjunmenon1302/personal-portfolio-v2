"use client";

import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
];

function IconSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 
        For a truly sophisticated icon cloud, rendering SVG textures onto planes is required. 
        For brevity and performance, we'll render a glowing core with orbiting abstract tech nodes.
      */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#4F46E5"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {Array.from({ length: 15 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 15);
        const theta = Math.sqrt(15 * Math.PI) * phi;
        const radius = 2;
        
        return (
          <mesh
            key={i}
            position={[
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(phi),
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#06B6D4" : "#9333EA"} emissive={i % 2 === 0 ? "#06B6D4" : "#9333EA"} emissiveIntensity={2} />
          </mesh>
        );
      })}
    </group>
  );
}

export function TechStack() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 overflow-hidden">
      <div className="z-10 w-full max-w-5xl text-center mb-8 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Core Technologies
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          The languages, frameworks, and infrastructure tools I use daily to architect resilient platforms.
        </p>
      </div>

      <div className="relative w-full h-[300px] sm:h-[500px] flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
        
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <IconSphere />
          </Canvas>
        </div>

        {/* Floating tech icons around the canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 opacity-80 mix-blend-screen">
            {icons.map((src, i) => (
                <img key={i} src={src} alt="tech icon" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100 pointer-events-auto cursor-pointer hover:scale-110" />
            ))}
        </div>
      </div>
    </section>
  );
}
