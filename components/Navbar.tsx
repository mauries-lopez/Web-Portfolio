"use client"

import ThemeToggle from "@/components/ThemeToggle";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Exp" },
  { id: "techstack", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const { theme, setTheme } = useThemeToggle();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  const scrollTo = (id: string) => {
    close();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  return (
    <nav className="sticky top-0 z-50 h-12 border-b border-stone-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
        <span className="text-sm font-medium tracking-tight text-gray-950 dark:text-white">
          Mauries Lopez
        </span>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs tracking-wider text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300 active:text-gray-700 dark:active:text-neutral-200 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm"
            >
              <span className="font-mono text-[10px] mr-1 text-amber-600 dark:text-amber-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </button>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            onClick={() => setOpen(!open)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 dark:text-neutral-400 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-stone-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 flex flex-col gap-1">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="min-h-[44px] text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white active:text-gray-950 dark:active:text-white transition-colors cursor-pointer text-left px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm"
            >
              <span className="font-mono text-xs mr-2 text-amber-600 dark:text-amber-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
