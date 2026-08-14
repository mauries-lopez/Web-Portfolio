import Project from "@/template/Project";
import { projects } from "@/constants/projects";

export default function Projects() {
    const doubled = [...projects, ...projects];

    return (
        <div>
            <a href="/projects" className="text-xs tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 hover:underline underline-offset-4 transition-colors block mb-8 text-right max-w-5xl mx-auto px-4 sm:px-6 md:px-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm">
                View All &rarr;
            </a>

            <div className="relative">
                {/* Mobile: swipeable snap row · Desktop: full-width auto marquee */}
                <div className="flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none scrollbar-hide">
                    <div className="carousel-track flex w-max shrink-0">
                        {doubled.map((p, i) => (
                            <div key={i} className="w-[280px] sm:w-[340px] md:w-[440px] flex-shrink-0 snap-start md:snap-align-none mr-5">
                                <Project
                                    title={p.title}
                                    desc={p.desc}
                                    link={p.link}
                                    linkDisplay={p.linkDisplay}
                                    isPointer={p.isPointer}
                                    techStack={p.techStack}
                                    date={p.date}
                                    stats={p.stats}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fade edges — full-width on mobile, wider on desktop */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 md:block hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 md:block hidden" />
            </div>
        </div>
    )
}
