import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-x-hidden">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <TechStack />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
