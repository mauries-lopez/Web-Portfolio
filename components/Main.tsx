"use client"

import ThemeToggle from "@/components/ThemeToggle";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { GitHubDark, GitHubLight, Gmail, LinkedIn } from "developer-icons";
import Experience from "./Experience";

export default function Main() {

  const {theme, setTheme} = useThemeToggle();

  return (
    <div className="w-250 bg-white dark:bg-neutral-950 px-4 py-8">

        {/* Header */}
        <section className="w-full flex flex-row ">
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
                {/* Social Media Btns */}
                <div className="w-full h-full flex flex-col gap-2 my-1">
                    <a href="mailto:maurieslopez1800@gmail.com" className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold dark:bg-gray-200 dark:text-gray-900 bg-stone-800 text-gray-100 hover:scale-101 active:scale-100 gap-x-1 cursor-pointer">
                        <Gmail size={15}/>
                        Send Email
                    </a>
                    <div className="w-full flex flex-row gap-2">
                        <a href="https://github.com/mauries-lopez" target="_blank" className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold bg-gray-200 text-gray-900 dark:bg-stone-800 dark:text-gray-100 hover:scale-101 active:scale-100 gap-x-1 cursor-pointer">
                        {theme === "dark" ? (
                            <GitHubLight size={15}/>
                        ) : (
                            <GitHubDark size={15}/>
                        )}
                        GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mauries-lopez/" target="_blank" className="w-full p-1 md:h-6 rounded-md flex items-center justify-center shadow transition text-sm md:text-md font-semibold bg-gray-200 text-gray-900 dark:bg-stone-800 dark:text-gray-100 hover:scale-101 active:scale-100 gap-x-1 cursor-pointer">
                        <LinkedIn size={15}/>
                        LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* First Section */}
        <section className="w-full py-3 flex flex-col md:flex-row gap-3">
            {/* Left Half */}
            <div className="flex flex-col gap-3">
                {/* About */}
                <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
                    {/* About Title */}
                    <div className="w-full">
                        <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> About </h1>
                    </div>
                    {/* About Description */}
                    <div className="w-full py-3">
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                            Disciplined and objective undergraduate computer science student. Pursues passion and hone individual capabilities. Furthermore, equipped with creative skills to provide quality output and efficient solutions.
                        </p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
                    {/* Tech Stack Title */}
                    <div className="w-full">
                        <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Tech Stack </h1>
                    </div>
                    {/* Tech Stacks */}
                    <div className="w-full py-3">
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                            Disciplined and objective undergraduate computer science student. Pursues passion and hone individual capabilities. Furthermore, equipped with creative skills to provide quality output and efficient solutions.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Right Half */}
            <div className="md:min-w-70">
                <Experience/>
            </div>
        </section>
    </div>
  )
}