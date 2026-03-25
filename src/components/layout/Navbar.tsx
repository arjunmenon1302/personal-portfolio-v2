"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 h-16 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      {/* Logo / Name */}
      <a
        href="#"
        className="text-sm font-mono font-semibold tracking-widest uppercase"
        style={{ color: "var(--text-secondary)" }}
      >
        AM
      </a>

      {/* Nav Links — hidden on mobile */}
      <nav className="hidden sm:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition-colors duration-200 hover:text-indigo-400"
            style={{ color: "var(--text-secondary)" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.header>
  );
}
