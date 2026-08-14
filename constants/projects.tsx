export type ProjectCategory = "Thesis" | "Web Development" | "Others";

function parseDate(date: string): number {
    // "August 16, 2026" → 20260816 · "2025" → 20251231 · "April 6, 2025" → 20250406
    const m = date.match(/([A-Za-z]+)\s+(\d+),\s+(\d{4})/) ?? date.match(/(\d{4})/);
    if (!m) return 0;
    if (m[1] && /^[A-Za-z]+$/.test(m[1])) {
        const month = new Date(`${m[1]} 1, 2000`).getMonth() + 1;
        return Number(m[3]) * 10000 + month * 100 + Number(m[2]);
    }
    return Number(m[1]) * 10000 + 1231;
}

export interface ProjectData {
    title: string;
    desc: string;
    link: string;
    linkDisplay: string;
    isPointer: boolean;
    techStack: string[] | null;
    date?: string;
    stats?: string;
    category: ProjectCategory;
    embed?: React.ReactNode;
}

const projectEntries: ProjectData[] = [
    {
        title: "DateTayo",
        desc: "Personalized Digital Love Letter in Seconds",
        link: "https://datetayo.netlify.app/",
        linkDisplay: "datetayo.netlify.app",
        isPointer: true,
        date: "August 16, 2026",
        stats: "15+ active users",
        techStack: ["React", "NextJs", "TailwindCSS", "Supabase"],
        category: "Web Development",
        embed: (
            <iframe
                src="https://appbuildersph.com/embed/apps/datetayo"
                title="DateTayo votes on App Builders PH"
                width="300"
                height="60"
                style={{ border: 0 }}
                loading="lazy"
                scrolling="no"
            />
        ),
    },
    {
        title: "Stat-ify",
        desc: "Spotify Visualization Tool",
        link: "https://stat-ify.netlify.app/",
        linkDisplay: "stat-ify.netlify.app",
        isPointer: true,
        date: "May 3, 2026",
        techStack: ["React", "NextJs", "Spotify Web API"],
        category: "Web Development",
    },
    {
        title: "KadaCraft",
        desc: "Minecraft YouTubers Space",
        link: "https://kadacraft.netlify.app/",
        linkDisplay: "kadacraft.netlify.app",
        isPointer: true,
        date: "March 26, 2026",
        stats: "100+ users visited in the first week",
        techStack: ["React", "NextJs", "TailwindCSS", "Supabase", "Insomnia", "YouTube Data API"],
        category: "Web Development",
    },
    {
        title: "RateRocket",
        desc: "Expert-guided financial product comparison platform",
        link: "https://www.raterocket.net",
        linkDisplay: "raterocket.net",
        isPointer: true,
        date: "2025",
        techStack: ["React", "NextJs", "TailwindCSS", "MongoDB"],
        category: "Web Development",
    },
    {
        title: "BERT-Based Sentiment Prediction Model",
        desc: "Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data.",
        link: "https://old.dlsu.edu.ph/wp-content/uploads/pdf/conferences/research-congress-proceedings/2025/HCT-206.pdf",
        linkDisplay: "Thesis",
        isPointer: true,
        date: "2025",
        stats: "Published in the 2025 DLSU Research Congress",
        techStack: ["HuggingFace", "GoogleCloud", "Tensorflow", "PyTorch", "NPM"],
        category: "Thesis",
    },
    {
        title: "Network Media Upload Service",
        desc: "The application simulates a multithreaded C# file transfer system using a producer–consumer model with synchronized, leaky-bucket–controlled queues.",
        link: "",
        linkDisplay: "Locally Hosted",
        isPointer: false,
        date: "April 3, 2025",
        techStack: ["CSharp"],
        category: "Others",
    },
    {
        title: "Online Enrollment System",
        desc: "The system uses distributed microservices with horizontal scaling to ensure fault tolerance, scalability, and continuous operation despite individual service failures.",
        link: "",
        linkDisplay: "Locally Hosted",
        isPointer: false,
        date: "April 6, 2025",
        techStack: ["Java", "Spring", "RestAPI", "MongoDB", "OAuth2"],
        category: "Others",
    },
    {
        title: "Filbis",
        desc: "Health Chatbot",
        link: "https://filbis-v2.vercel.app/",
        linkDisplay: "filbis-v2.vercel.app",
        isPointer: true,
        date: "August 1, 2024",
        stats: "Used by Inchican Elementary School",
        techStack: ["React", "NextJs", "TailwindCSS", "Firebase", "FastAPI", "Dialogue Flow"],
        category: "Web Development",
    },
    {
        title: "Arrows Shuttle",
        desc: "Shuttle Reservation System",
        link: "https://dlsu-shuttle.onrender.com/",
        linkDisplay: "dlsu-shuttle.onrender.com",
        isPointer: true,
        date: "August 5, 2023",
        techStack: ["HTML5", "CSS3", "ExpressJsDark", "MongoDB", "NodeJs", "JavaScript"],
        category: "Web Development",
    },
];

export const projects: ProjectData[] = [...projectEntries].sort((a, b) => parseDate(b.date ?? "") - parseDate(a.date ?? ""));
