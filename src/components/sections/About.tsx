"use client";

import { motion } from "framer-motion";
import { Server, Database, Code2, Cloud } from "lucide-react";

const bentoItems = [
  {
    title: "Full-Stack Development",
    description:
      "TypeScript, React, Next.js, C# and .NET — from pixel-perfect interfaces to well-architected APIs.",
    icon: <Code2 className="h-6 w-6 text-color-glow-cyan" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS (EC2, EKS, Fargate, CloudFront), Terraform, and GitHub Actions for infrastructure that scales.",
    icon: <Cloud className="h-6 w-6 text-color-glow-purple" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Platform Engineering",
    description:
      "CI/CD pipelines, observability with Prometheus and DataDog, and deployment automation that ships with confidence.",
    icon: <Server className="h-6 w-6 text-color-glow-indigo" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Data & AI Pipelines",
    description:
      "End-to-end pipelines from raw data to ML-powered NLP models and BI visualisations.",
    icon: <Database className="h-6 w-6 text-emerald-400" />,
    className: "md:col-span-2 md:row-span-1",
  },
];

export function About() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24">
      <div className="absolute inset-0 bg-[size:50px_50px] dark:bg-grid-white/[0.02] bg-grid-black/[0.03]" />

      <div className="z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Where product meets <br className="hidden sm:block" />
            <span style={{ color: "var(--text-tertiary)" }}>platform.</span>
          </h2>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            I'm a software and DevOps engineer who thrives at the intersection
            of product and platform. With experience spanning full-stack
            development, cloud architecture, and data engineering, I translate
            complex requirements into systems that are resilient, scalable, and
            built for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:auto-rows-[200px]">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between overflow-hidden group relative ${item.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: "var(--input-bg)" }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className="text-base sm:text-xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
