"use client"

import ThemeToggle from "@/components/ThemeToggle";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { GitHubDark, GitHubLight, Gmail, LinkedIn } from "developer-icons";

export default function Main() {

  const {theme, setTheme} = useThemeToggle();

  return (
    <div className="w-250 h-full bg-white dark:bg-neutral-950 px-4 py-8">
        {/* Header */}
        <section className="w-full flex flex-row">
        {/* Picture */}
        <div className="h-full">
            <img src="profilePicture.png" className="w-40 h-40 md:w-45 object-cover" width="160" height="160"/>
        </div>
        {/* Details */}
        <div className="w-full h-full flex flex-col ml-2">
            {/* Name */}
            <div className="w-full flex">
                <h1 className="w-full font-bold text-gray-950 dark:text-white text-xl md:text-2xl" > Mauries Lopez</h1>
                { /* Theme Toggle */ }
                <div>
                    <ThemeToggle theme={theme} setTheme={setTheme}/>
                </div>
            </div>
            {/* School */}
            <div className="w-full flex flex-col gap-1 py-1">
                <h2 className="text-xs md:text-lg font-bold text-gray-700 dark:text-white"> BS Computer Science Major in Software Technology </h2>
                <h3 className="text-xs md:text-lg font-semibold text-gray-700 dark:text-white"> De La Salle University </h3>
            </div>
            {/* Links */}
            <div className="w-full h-full flex flex-col gap-2 py-2">
                <a className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold dark:bg-gray-200 dark:text-gray-900 bg-stone-800 text-gray-100 hover:scale-105 active:scale-100 gap-x-1">
                    <Gmail size={15}/>
                    Email Me!
                </a>
                <div className="w-full flex flex-row gap-2">
                    <a className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold bg-gray-200 text-gray-900 dark:bg-stone-800 dark:text-gray-100 hover:scale-105 active:scale-100 gap-x-1">
                    {theme === "dark" ? (
                        <GitHubLight size={15}/>
                    ) : (
                        <GitHubDark size={15}/>
                    )}
                    GitHub
                    </a>
                    <a className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold bg-gray-200 text-gray-900 dark:bg-stone-800 dark:text-gray-100 hover:scale-105 active:scale-100 gap-x-1">
                    <LinkedIn size={15}/>
                    LinkedIn
                    </a>
                </div>
            </div>
        </div>
        </section>
        {/* About */}
        <section>

        </section>
    </div>
  )
}