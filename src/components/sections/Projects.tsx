"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Workforce Intelligence Platform",
    description: "End-to-end data pipeline transforming raw survey responses into actionable BI insights using ML-powered NLP models. Built with AI-automated workflows for data collection, analysis, and visualisation at scale.",
    image: "/api-arch.png",
    tech: ["Python", "ML / NLP", "TypeScript", "React"],
    link: "#",
    github: "#",
  },
  {
    title: "Legacy Reporting Migration",
    description: "Architected the full migration of a legacy reporting system to a modern .NET and React stack. Delivered measurable outcomes — access speeds improved by 80% and reporting was opened to a significantly wider user base.",
    image: "/tracking.png",
    tech: ["C#", ".NET", "React", "TypeScript", "AWS"],
    link: "#",
    github: "#",
  },
  {
    title: "NFT Airdrop Claiming System",
    description: "On-chain NFT airdrop infrastructure for a prominent US e-sports team. Engineered the end-to-end claiming mechanism with over 500 successful token distributions on launch.",
    image: "/cicd.png",
    tech: ["Solidity", "TypeScript", "Next.js", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "On-Chain Contract Platform",
    description: "A Web3 contract management application built for the Ethereum ecosystem. Featuring EVM-compatible smart contracts crafted in Solidity that achieved 100% audit conformity.",
    image: "/auth.png",
    tech: ["Solidity", "Next.js", "Node.js", "Ethereum"],
    link: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useTransform(x, [-0.5, 0.5], ["15deg", "-15deg"]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseYSpring,
        rotateY: mouseXSpring,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full rounded-3xl glass p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ transform: "translateZ(-50px)" }}
      />
      
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full z-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono"
                style={{ background: "var(--surface-subtle)", border: "1px solid var(--surface-border)", color: "var(--text-secondary)" }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24">
      <div className="z-10 w-full max-w-6xl">
        <div className="mb-10 sm:mb-20 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            A selection of real-world systems I've designed and built — spanning data engineering, cloud infrastructure, and Web3.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 perspective-[2000px]"
          style={{ perspective: "2000px" }}
        >
          {projects.map((project, i) => (
            <div key={i} className="min-h-[320px] sm:h-[400px]">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
