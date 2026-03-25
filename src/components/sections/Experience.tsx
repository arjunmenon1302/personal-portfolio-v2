"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Full-Stack Software Engineer",
    company: "Current Company",
    date: "2021 - Present",
    desc: "Architected microservices in C# and .NET. Designed and built frontends using React and Next.js. Integrated Stripe and Klarna payment systems processing millions in transactions.",
    tech: ["C#", ".NET", "Next.js", "AWS", "Stripe"],
  },
  {
    role: "Backend Engineer",
    company: "Tech Startup",
    date: "2019 - 2021",
    desc: "Managed robust RESTful APIs with Node.js and TypeScript. Orchestrated deployments via Docker and AWS ECS.",
    tech: ["Node.js", "TypeScript", "Docker", "PostgreSQL"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    date: "2018 - 2019",
    desc: "Built performant UI components and integrated diverse CMS backends. Improved loading speeds and web vitals by 40%.",
    tech: ["JavaScript", "React", "CSS", "Firebase"],
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
        { scaleY: 1, ease: "none", transformOrigin: "top center" }
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
          }
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
                <div className="absolute left-[20px] sm:left-1/2 top-6 w-4 h-4 rounded-full border-2 border-indigo-500 sm:-translate-x-1/2 transform shadow-[0_0_15px_rgba(79,70,229,0.8)] z-10" style={{ background: "var(--dot-bg)" }} />

                {/* Empty Space for Grid Alignment */}
                <div className="hidden sm:block sm:w-5/12" />

                {/* Content Card */}
                <div className="w-full sm:w-5/12 pl-12 sm:pl-0">
                  <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl group hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="text-sm font-mono text-indigo-400 mb-2">
                      {exp.date}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <div className="text-base sm:text-lg mb-4 font-medium" style={{ color: "var(--text-secondary)" }}>
                      {exp.company}
                    </div>
                    <p className="mb-6 leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-mono group-hover:border-indigo-500/30 transition-colors"
                          style={{ background: "var(--surface-subtle)", border: "1px solid var(--surface-border)", color: "var(--text-secondary)" }}
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
