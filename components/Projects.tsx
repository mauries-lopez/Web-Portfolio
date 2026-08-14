import Project from "@/template/Project";

const projects = [
    { title: "BERT-Based Sentiment Prediction Model", desc: "Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data.", link: "", linkDisplay: "Thesis", isPointer: false, techStack: ["HuggingFace", "GoogleCloud", "Tensorflow", "PyTorch", "NPM"] },
    { title: "RateRocket", desc: "Expert-guided financial product comparison platform", link: "https://www.raterocket.net", linkDisplay: "raterocket.net", isPointer: true, techStack: ["React", "NextJs", "TailwindCSS", "MongoDB"] },
    { title: "DateTayo", desc: "Personalized Digital Love Letter in Seconds", link: "https://datetayo.netlify.app/", linkDisplay: "datetayo.netlify.app", isPointer: true, techStack: ["React", "NextJs", "TailwindCSS", "Supabase"] },
    { title: "Stat-ify", desc: "Spotify Visualization Tool", link: "https://stat-ify.netlify.app/", linkDisplay: "stat-ify.netlify.app", isPointer: true, techStack: ["React", "NextJs", "Spotify Web API"] },
    { title: "KadaCraft", desc: "Minecraft YouTubers Space", link: "https://kadacraft.netlify.app/", linkDisplay: "kadacraft.netlify.app", isPointer: true, techStack: ["React", "NextJs", "TailwindCSS", "Supabase", "Insomnia", "YouTube Data API"] },
    { title: "Filbis", desc: "Health Chatbot", link: "https://filbis-v2.vercel.app/", linkDisplay: "filbis-v2.vercel.app", isPointer: true, techStack: ["React", "NextJs", "TailwindCSS", "Firebase", "FastAPI"] },
    { title: "Arrows Shuttle", desc: "Shuttle Reservation System", link: "https://dlsu-shuttle.onrender.com/", linkDisplay: "dlsu-shuttle.onrender.com", isPointer: true, techStack: ["HTML5", "CSS3", "ExpressJsDark", "MongoDB", "NodeJs", "JavaScript"] },
    { title: "Online Enrollment System", desc: "Distributed microservices with horizontal scaling for fault tolerance, scalability, and continuous operation.", link: "", linkDisplay: "Locally Hosted", isPointer: false, techStack: ["Java", "Spring", "MongoDB"] },
    { title: "Network Media Upload Service", desc: "Multithreaded C# file transfer system using a producer–consumer model with synchronized, leaky-bucket–controlled queues.", link: "", linkDisplay: "Locally Hosted", isPointer: false, techStack: ["CSharp"] },
];

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
