import StackElement from "./StackElement";
import { C, Canva, CPlusPlus, CSS3, Discord, Figma, Firebase, GoogleCloud, HTML5, HuggingFace, Insomnia, Java, Markdown, MongoDB, MySQL, NextJs, NPM, Photoshop, Python, PyTorch, React, Supabase, TailwindCSS, Tensorflow, TypeScript, VisualStudioCode, FastAPI, ExpressJsDark, Spring, CSharp, NodeJs, JavaScript} from "developer-icons";

interface ProjectProps {
    title: string;
    desc: string;
    linkDisplay: string;
    link: string;
    isPointer: boolean;
    techStack: string[] | null;
}

export default function Project({ title, desc, linkDisplay, link, isPointer, techStack }: ProjectProps){

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
                <p className="font-semibold text-base text-gray-900 dark:text-gray-100">
                    {title}
                </p>
                <p className="text-sm text-gray-500 dark:text-neutral-500 leading-relaxed mt-2">
                    {desc}
                </p>
            </div>
            <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                    {techStack && techStack.map((t) => {
                        const Icon = iconMap[t] ?? null;
                        return <StackElement key={t} element={Icon} label={t} />;
                    })}
                </div>
                <p className="text-xs text-gray-400 dark:text-neutral-600 font-mono">
                    {linkDisplay}
                </p>
            </div>
        </div>
    );

    if (isPointer) {
        return (
            <a
                href={link}
                target="_blank"
                className="block h-full border border-stone-200 dark:border-neutral-800 hover:border-stone-400 dark:hover:border-neutral-600 transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="h-full border border-stone-200 dark:border-neutral-800">
            {content}
        </div>
    );
}
