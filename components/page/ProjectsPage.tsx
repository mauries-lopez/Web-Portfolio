"use client"

import Link from "next/link";
import Project from "@/template/Project";
import { projects, type ProjectCategory } from "@/constants/projects";

export default function ProjectsPage(){

    const sections: { category: ProjectCategory; number: string }[] = [
        { category: "Thesis", number: "01" },
        { category: "Games & Apps", number: "02" },
        { category: "Web Development", number: "03" },
        { category: "Others", number: "04" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 dark:text-neutral-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 rounded-sm">
                <span className="text-gray-900 dark:text-gray-100">←</span> Home
            </Link>

            <div className="mt-12 md:mt-16">
                <span className="text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2 block">
                    Projects
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-950 dark:text-white">
                    What I have built
                </h1>
            </div>

            {sections.map((section) => (
                <section key={section.category} className="mt-16 md:mt-24">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-4 block">
                        {section.number} &mdash; {section.category}
                    </span>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projects.filter(p => p.category === section.category).map((p) => (
                            <Project key={p.title} title={p.title} desc={p.desc} link={p.link} linkDisplay={p.linkDisplay} isPointer={p.isPointer} techStack={p.techStack} date={p.date} stats={p.stats} embed={p.embed} actionLabel={p.actionLabel} actionHref={p.actionHref}/>
                        ))}
                    </div>
                </section>
            ))}
        </div>        
    )
}
