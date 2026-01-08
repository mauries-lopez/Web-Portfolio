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

    return (
        <a href={isPointer ? link : undefined} target="_blank" className={`w-full flex-1 items-center justify-center bg-neutral-50 dark:bg-neutral-800 border border-stone-300 hover:border-neutral-500 dark:border-neutral-700 flex duration-500 ease-out rounded-lg ${isPointer ? "cursor-pointer" : "cursor-default"}`}>
            <div className={`h-full flex flex-col justify-center items-center p-2 gap-2`}>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100 text-center">
                    {title}
                </p>
                <p className="h-full text-xs text-gray-900 dark:text-gray-100 text-center flex justify-center items-center">
                    {desc}
                </p>
                <div className="h-full max-w-100 flex flex-wrap gap-2 justify-center items-center">
                    {techStack && techStack.map((t) => {
                        const Icon = iconMap[t] ?? null;
                        return <StackElement key={t} element={Icon} label={t} />;
                    })}
                </div>
                <p className="text-xs text-gray-900 dark:text-gray-100 bg-neutral-200 dark:bg-neutral-900 px-2 py-1 rounded-2xl flex justify-center items-center mt-1">
                    {linkDisplay}
                </p>
            </div>
        </a>
    )
}