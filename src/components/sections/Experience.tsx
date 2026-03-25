"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "PeopleBench",
    date: "Dec 2025 – Present",
    desc: "Working within a data-driven product focused on workforce resilience and culture tracking. Building ML-powered NLP pipelines that transform raw survey data into actionable BI insights, while helping replatform the product with AI-automated workflows for data gathering and analysis.",
    tech: ["Python", "TypeScript", "React", "ML / NLP"],
  },
  {
    role: "Software & Cloud Engineer",
    company: "WorkingMouse",
    date: "Dec 2023 – Nov 2025",
    desc: "Embedded DevOps engineer within an agile product delivery team. Led the migration of a legacy reporting system to a modern .NET/React stack, cutting access times by 80%. Optimised AWS infrastructure with Terraform and Prometheus, contributing to a 30% reduction in deployment times.",
    tech: ["C#", ".NET", "TypeScript", "React", "AWS", "Terraform"],
  },
  {
    role: "Software Engineer",
    company: "Labrys",
    date: "Jun 2021 – Dec 2023",
    desc: "Built full-stack web and mobile applications across the Web3 ecosystem. Deployed an NFT airdrop claiming system for a prominent US e-sports team with 500+ successful claims on launch. Crafted EVM-compatible Solidity smart contracts achieving 100% audit conformity.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Solidity",
      "React Native",
    ],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", transformOrigin: "top center" },
      );

      const isMobile = window.innerWidth < 640;
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: isMobile ? 0 : i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 overflow-x-hidden"
    >
      <div className="z-10 w-full max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 sm:mb-20 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12 sm:gap-24">
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className={`relative flex items-center justify-between flex-col sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-[20px] sm:left-1/2 top-6 w-4 h-4 rounded-full border-2 border-indigo-500 sm:-translate-x-1/2 transform shadow-[0_0_15px_rgba(79,70,229,0.8)] z-10"
                  style={{ background: "var(--dot-bg)" }}
                />

                {/* Empty Space for Grid Alignment */}
                <div className="hidden sm:block sm:w-5/12" />

                {/* Content Card */}
                <div className="w-full sm:w-5/12 pl-12 sm:pl-0">
                  <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl group hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="text-sm font-mono text-indigo-400 mb-2">
                      {exp.date}
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-semibold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className="text-base sm:text-lg mb-4 font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {exp.company}
                    </div>
                    <p
                      className="mb-6 leading-relaxed"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-mono group-hover:border-indigo-500/30 transition-colors"
                          style={{
                            background: "var(--surface-subtle)",
                            border: "1px solid var(--surface-border)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
