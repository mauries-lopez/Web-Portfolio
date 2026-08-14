import StackElement from "./StackElement";
import { C, Canva, CPlusPlus, CSS3, Discord, Figma, Firebase, GoogleCloud, HTML5, HuggingFace, Insomnia, Java, Markdown, MongoDB, MySQL, NextJs, NPM, Photoshop, Python, PyTorch, React, Supabase, TailwindCSS, Tensorflow, TypeScript, VisualStudioCode, FastAPI, ExpressJsDark, Spring, CSharp, NodeJs, JavaScript} from "developer-icons";

interface ProjectProps {
    title: string;
    desc: string;
    linkDisplay: string;
    link: string;
    isPointer: boolean;
    techStack: string[] | null;
    embed?: React.ReactNode;
    date?: string;
    stats?: string;
}

export default function Project({ title, desc, linkDisplay, link, isPointer, techStack, embed, date, stats }: ProjectProps){

    const iconMap: Record<string, React.ComponentType<{ size?: number }> | null> = {
        React,
        TypeScript,
        NextJs,
        TailwindCSS,
        Python,
        Java,
        MongoDB,
        MySQL,
        NPM,
        VisualStudioCode,
        Tensorflow,
        PyTorch,
        GoogleCloud,
        HuggingFace,
        Figma,
        Firebase,
        Photoshop,
        Markdown,
        Discord,
        C,
        CPlusPlus,
        CSharp,
        Canva,
        Supabase,
        Insomnia,
        HTML5,
        CSS3,
        FastAPI,
        ExpressJsDark,
        Spring,
        NodeJs,
        JavaScript
    };

    const content = (
        <div className="flex flex-col justify-between p-5 h-full">
            <div>
                <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-base text-gray-900 dark:text-gray-100 group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300">
                        {title}
                    </p>
                    {date && (
                        <p className="text-xs text-gray-400 dark:text-neutral-600 font-mono whitespace-nowrap">
                            {date}
                        </p>
                    )}
                </div>
                <p className="text-sm text-gray-500 dark:text-neutral-500 leading-relaxed mt-2">
                    {desc}
                </p>
            </div>
            <div className="mt-4 space-y-3 flex flex-col">
                <div className="flex flex-wrap gap-1.5">
                    {techStack && techStack.map((t) => {
                        const Icon = iconMap[t] ?? null;
                        return <StackElement key={t} element={Icon} label={t} />;
                    })}
                </div>
                <p className="text-xs text-gray-400 dark:text-neutral-600 font-mono">
                    {linkDisplay}
                </p>
                {embed}
                {stats && (
                    <span className="inline-flex items-center self-start rounded-full border border-amber-600/40 dark:border-amber-400/40 bg-amber-600/10 dark:bg-amber-400/10 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-300 whitespace-nowrap">
                        {stats}
                    </span>
                )}
            </div>
        </div>
    );

    if (isPointer) {
        return (
            <a
                href={link}
                target="_blank"
                className="block h-full border border-stone-200 dark:border-neutral-800 hover:border-stone-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all duration-300 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="h-full border border-stone-200 dark:border-neutral-800 group">
            {content}
        </div>
    );
}
