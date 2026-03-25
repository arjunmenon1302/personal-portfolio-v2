"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending an email
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24">
      {/* Background radial gradient */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-indigo-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Let's build <br /> something great.
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-md">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <a
                href="mailto:hello@arjunmenon.dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Email me</span>
              </a>
              <a
                href="https://linkedin.com/in/arjunmenon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#0077b5]/20 group-hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/arjunmenon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Hello Arjun, I'd like to discuss..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className="group/btn relative w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-4 rounded-xl mt-2 overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : success ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-6 w-full text-center text-sm text-zinc-500 pointer-events-none">
        <p>© {new Date().getFullYear()} Arjun Menon. All rights reserved.</p>
        <p className="mt-1 font-mono text-xs opacity-50">Built with Next.js & Tailwind</p>
      </footer>
    </section>
  );
}
