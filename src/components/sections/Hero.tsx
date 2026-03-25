"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeroObject } from "@/components/3d/HeroObject";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-char",
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.05,
          duration: 1.2,
        }
      ).fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "Arjun Menon";

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <HeroObject />

      <div className="z-10 flex flex-col items-center text-center px-4 mix-blend-difference pointer-events-none">
        <h1
          ref={textRef}
          className="text-5xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white"
          style={{ perspective: "1000px" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={subtextRef}
          className="mt-4 sm:mt-6 text-lg sm:text-2xl text-zinc-300 max-w-2xl"
        >
          Full-Stack Software Engineer
          <br className="hidden sm:block" />
          <span className="text-zinc-500 text-sm sm:text-lg block sm:inline mt-1 sm:mt-0">
            Brisbane, AU • C# • Next.js • AWS
          </span>
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-zinc-500">
        ↓ Scroll
      </div>
    </section>
  );
}
