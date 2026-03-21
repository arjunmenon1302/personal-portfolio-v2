"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Global Payments API",
    description: "A unified C# microservice integrating Stripe and Klarna for multi-region checkout flows. Processed $2M+ in daily volume with 99.99% uptime.",
    image: "/api-arch.png",
    tech: ["C#", ".NET Core", "Stripe API", "AWS Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Order Tracking",
    description: "Event-driven architecture using Kafka and Node.js to stream live order statuses to a React dashboard. Sub-second latency at scale.",
    image: "/tracking.png",
    tech: ["TypeScript", "Kafka", "Node.js", "WebSockets"],
    link: "#",
    github: "#",
  },
  {
    title: "Cloud Infrastructure CI/CD",
    description: "Automated AWS provisioning using Terraform and GitHub Actions. Reduced deployment times from 45 mins to under 3 mins.",
    image: "/cicd.png",
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    link: "#",
    github: "#",
  },
  {
    title: "Identity & Access Provider",
    description: "OAuth2 compliant authentication service built with Next.js App Router and PostgreSQL. Features role-based access control and MFA.",
    image: "/auth.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "JWT"],
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
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-zinc-300 border border-white/10"
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
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
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
    <section className="relative flex min-h-screen w-full flex-col items-center py-24 px-4 sm:px-12 lg:px-24">
      <div className="z-10 w-full max-w-6xl">
        <div className="mb-20 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A collection of robust backend architectures, integrations, and cloud deployments I've architected and built.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 perspective-[2000px]"
          style={{ perspective: "2000px" }}
        >
          {projects.map((project, i) => (
            <div key={i} className="h-[400px]">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
