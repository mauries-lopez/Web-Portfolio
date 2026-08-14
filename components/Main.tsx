"use client"

import { useTheme } from "@/components/ThemeProvider";
import { GitHubDark, GitHubLight, Gmail, LinkedIn } from "developer-icons";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import SectionReveal from "./SectionReveal";
import About from "./About";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Testimonials from "./Testimonials";

export default function Main() {
  const { theme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Hero ── */}
        <header className="relative py-12 md:min-h-[80vh] md:flex md:items-center" role="banner">
          <div className="w-full md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            {/* Photo — above on mobile, right on desktop */}
            <div className="flex justify-center md:justify-end md:order-2 mb-6 md:mb-0">
              <Image
                src="/FormalPicture.jpg"
                alt="Mauries Lopez"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-[center_0%]"
                width={384}
                height={384}
                priority
              />
            </div>

            {/* Text — below on mobile, left on desktop */}
            <div className="flex flex-col items-center md:items-start justify-center md:order-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] md:leading-[0.88] text-gray-950 dark:text-white">
                Mauries Lopez
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-neutral-500 font-normal mt-3 md:mt-10 tracking-tight">
                Software Engineer
              </p>
              <p className="text-sm text-gray-400 dark:text-neutral-600 mt-1 md:mt-2 font-mono">
                BS Computer Science &middot; De La Salle University
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5 md:mt-6">
                <a
                  href="mailto:maurieslopez1800@gmail.com"
                  className="rounded-full px-4 py-2 text-sm font-medium bg-stone-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900 hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  <Gmail size={14} />
                  Email
                </a>
                <a
                  href="https://github.com/mauries-lopez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-medium border border-stone-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 hover:border-stone-400 dark:hover:border-neutral-500 active:scale-95 transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  {theme === "dark" ? <GitHubLight size={14} /> : <GitHubDark size={14} />}
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mauries-lopez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-medium border border-stone-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 hover:border-stone-400 dark:hover:border-neutral-500 active:scale-95 transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  <LinkedIn size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Scroll-down arrow */}
          <button
            onClick={() => scrollTo("about")}
            className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-300 dark:text-neutral-700 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm"
            aria-label="Scroll to content"
          >
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </header>

        {/* ── 01 About ── */}
        <SectionReveal>
          <section id="about" aria-labelledby="about-heading" className="mt-24 md:mt-36">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              01 &mdash; About
            </span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              Software engineering with purpose
            </h2>
            <About />
          </section>
        </SectionReveal>

        {/* ── 02 Experience ── */}
        <SectionReveal>
          <section id="experience" aria-labelledby="experience-heading" className="mt-24 md:mt-36">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              02 &mdash; Experience
            </span>
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              Where I have worked
            </h2>
            <Experience />
          </section>
        </SectionReveal>

        {/* ── 03 Tech Stack ── */}
        <SectionReveal>
          <section id="techstack" aria-labelledby="techstack-heading" className="mt-24 md:mt-36">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              03 &mdash; Tech Stack
            </span>
            <h2 id="techstack-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              Tools and technologies
            </h2>
            <TechStack />
          </section>
        </SectionReveal>

      </div>

      {/* ── 04 Projects (full-width carousel) ── */}
      <SectionReveal>
        <section id="projects" aria-labelledby="projects-heading" className="mt-24 md:mt-36">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              04 &mdash; Projects
            </span>
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              What I have built
            </h2>
          </div>
          <Projects />
        </section>
      </SectionReveal>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ── 05 Certificates ── */}
        <SectionReveal>
          <section id="certificates" aria-labelledby="certificates-heading" className="mt-24 md:mt-36">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              05 &mdash; Certificates
            </span>
            <h2 id="certificates-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              Papers and recognition
            </h2>
            <Certificates />
          </section>
        </SectionReveal>

        {/* ── 06 Testimonials ── */}
        <SectionReveal>
          <section id="testimonials" aria-labelledby="testimonials-heading" className="mt-24 md:mt-36">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
              06 &mdash; Testimonials
            </span>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-8">
              What people say
            </h2>
            <Testimonials />
          </section>
        </SectionReveal>

      </div>
    </main>
  )
}
