"use client"

import ThemeToggle from "@/components/ThemeToggle";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { GitHubDark, GitHubLight, Gmail, LinkedIn } from "developer-icons";
import Experience from "./Experience";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Testimonials from "./Testimonials";

export default function Main() {

  const {theme, setTheme} = useThemeToggle();

  return (
    <div className="w-250 bg-white dark:bg-neutral-950 px-4 py-8 duration-500 ease-out">

        {/* Header */}
        <section className="w-full flex flex-row items-center justify-center">
            {/* Picture */}
            <div className="h-full">
                <img src="profilePicture.png" className="w-40 h-40 md:w-45 object-cover" width="160" height="160"/>
            </div>
            {/* Details */}
            <div className="w-full h-full flex flex-col ml-2">
                {/* Name */}
                <div className="w-full flex">
                    <h1 className="w-full font-bold text-gray-950 dark:text-white text-xl md:text-2xl " > Mauries Lopez</h1>
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
            {/* About */}
            <div className="order-1 md:order-1 md:flex md:flex-col md:gap-3">
                <About />
                {/* TechStack (desktop only in left column) */}
                <div className="hidden md:block">
                    <TechStack />
                </div>
            </div>
            {/* Experience */}
            <div className="order-2 md:order-2 md:min-w-70">
                <Experience />
            </div>
            {/* TechStack (mobile only) */}
            <div className="order-3 md:hidden">
                <TechStack />
            </div>
        </section>

        {/* Second Section */}
        <section className="w-full flex flex-col md:flex-row gap-3">
            {/* Projects */}
            <div className="w-full order-1 md:order-1 md:flex md:flex-col md:gap-3">
                <Projects/>
            </div>
        </section>

        {/* Third Section */}
        <section className="w-full mt-3 flex flex-col md:flex-row gap-3">
            {/* Certificates */}
            <div className="w-full md:flex md:flex-col md:gap-3">
                <Certificates/>
            </div>
            {/* Testimonial */}
            <div className="w-full md:flex md:flex-col md:gap-3">
                <Testimonials/>
            </div>
        </section>     
    </div>
  )
}