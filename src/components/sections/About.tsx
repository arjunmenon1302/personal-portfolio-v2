"use client";

import { motion } from "framer-motion";
import { Server, Database, Code2, Cloud } from "lucide-react";

const bentoItems = [
  {
    title: "Backend Engineering",
    description: "C#, .NET, Node.js, and microservices architecture.",
    icon: <Server className="h-6 w-6 text-color-glow-indigo" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Frontend Development",
    description: "TypeScript, React, Next.js, and complex state management.",
    icon: <Code2 className="h-6 w-6 text-color-glow-cyan" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Cloud & Infrastructure",
    description: "AWS (EC2, S3, Lambda), Docker, and CI/CD pipelines.",
    icon: <Cloud className="h-6 w-6 text-color-glow-purple" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Data & Integrations",
    description: "PostgreSQL, Stripe, Klarna, REST, GraphQL.",
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
            Building robust systems <br className="hidden sm:block" />
            <span style={{ color: "var(--text-tertiary)" }}>at scale.</span>
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            I'm a Full-Stack Software Engineer specializing in backend architecture, cloud infrastructure, and modern frontend frameworks. I build secure, high-performance applications from database to user interface.
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

              <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6" style={{ background: "var(--input-bg)" }}>
                {item.icon}
              </div>

              <div>
                <h3 className="text-base sm:text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
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
