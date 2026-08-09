"use client"

import { GitHubDark, GitHubLight, Gmail, LinkedIn } from "developer-icons";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export default function Footer() {
  const { theme } = useThemeToggle();

  return (
    <footer className="border-t border-stone-200 dark:border-neutral-800 py-8 mt-24 md:mt-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center gap-4">
        <span className="text-xs text-gray-400 dark:text-neutral-600">
          &copy; 2026 Mauries Lopez
        </span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:maurieslopez1800@gmail.com"
            className="text-gray-400 dark:text-neutral-600 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <Gmail size={16} />
          </a>
          <a
            href="https://github.com/mauries-lopez"
            target="_blank"
            className="text-gray-400 dark:text-neutral-600 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            {theme === "dark" ? <GitHubLight size={16} /> : <GitHubDark size={16} />}
          </a>
          <a
            href="https://www.linkedin.com/in/mauries-lopez/"
            target="_blank"
            className="text-gray-400 dark:text-neutral-600 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <LinkedIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
