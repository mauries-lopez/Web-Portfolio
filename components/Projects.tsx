import Project from "@/template/Project";
import { projects } from "@/constants/projects";

export default function Projects() {
    return (
        <div>
            <a href="/projects" className="text-xs tracking-wider text-accent-600 dark:text-accent-400 hover:text-accent-500 dark:hover:text-accent-300 hover:underline underline-offset-4 transition-colors block mb-8 text-right max-w-5xl mx-auto px-4 sm:px-6 md:px-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 rounded-sm">
                View All &rarr;
            </a>

            <div className="relative">
                {/* Mobile / reduced motion: swipeable snap row · Desktop: seamless auto marquee (see .marquee in globals.css) */}
                <div className="marquee scrollbar-hide" style={{ "--marquee-duration": `${projects.length * 4}s` } as React.CSSProperties}>
                    {[0, 1].map((copy) => (
                        <div key={copy} className={copy === 0 ? "marquee-group" : "marquee-group marquee-clone"} aria-hidden={copy === 1 || undefined} inert={copy === 1}>
                            {projects.map((p) => (
                                <div key={p.title} className="w-[280px] sm:w-[340px] md:w-[440px] flex-shrink-0 snap-start mr-5">
                                    <Project
                                        title={p.title}
                                        desc={p.desc}
                                        link={p.link}
                                        linkDisplay={p.linkDisplay}
                                        isPointer={p.isPointer}
                                        techStack={p.techStack}
                                        date={p.date}
                                        stats={p.stats}
                                        actionLabel={p.actionLabel}
                                        actionHref={p.actionHref}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Fade edges — full-width on mobile, wider on desktop */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 md:block hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 md:block hidden" />
            </div>
        </div>
    )
}
