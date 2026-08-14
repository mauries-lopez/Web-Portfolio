"use client"

import Link from "next/link";
import StackElement from "@/template/StackElement";
import { techSections } from "@/constants/techstack";

export default function TechStackPage(){

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 dark:text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm">
                <span className="text-gray-900 dark:text-gray-100">←</span> Home
            </Link>

            <div className="mt-12 md:mt-16">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 block">
                    Tech Stack
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 dark:text-white">
                    Tools and technologies
                </h1>
            </div>

            {techSections.map((section) => (
                <section key={section.title} className="mt-16 md:mt-24">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4 block">
                        {section.number} &mdash; {section.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {section.items.map((item) => (
                            <StackElement key={item.label} element={item.element} label={item.label} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}
