"use client"

import StackElement from "@/template/StackElement";
import { C, Canva, CPlusPlus, Discord, Figma, GoogleCloud, HuggingFace, Java, Markdown, MongoDB, MySQL, NextJs, NPM, Photoshop, Python, PyTorch, React, TailwindCSS, Tensorflow, TypeScript, VisualStudioCode } from "developer-icons";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { Trello } from "lucide-react";

export default function TechStackPage(){

    const {theme, setTheme} = useThemeToggle();

    return (
        <div className="w-250 flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            <a href="/" className="text-xs md:text-sm flex justify-end items-center text-gray-900 dark:text-gray-100 hover:scale-101 transition cursor-pointer text-nowrap">
                ← Back
            </a>
            {/* Tech Stack Title */}
            <div className="w-full flex flex-row items-center mt-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Tech Stack </h1>
            </div>
            {/* Tech Stacks */}
            <div className="flex flex-col gap-3 py-2">
                {/* Frontend */}
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 py-1">
                        Frontend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={React} label={"React"}/>
                        <StackElement element={TailwindCSS} label={"TailwindCSS"}/>
                        <StackElement element={TypeScript} label={"TypeScript"}/>
                        <StackElement element={NextJs} label={"Next.js"}/>
                    </div>
                </div>
                {/* Backend */}
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 py-1">
                        Backend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={MySQL} label={"MySQL"}/>
                        <StackElement element={MongoDB} label={"MongoDB"}/>
                        <StackElement element={Python} label={"Python"}/>
                        <StackElement element={Java} label={"Java"}/>
                    </div>
                </div>
                {/* AI & Machine Learning */}
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 py-1">
                        AI & Machine Learning
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={HuggingFace} label={"Hugging Face"}/>
                        <StackElement element={HuggingFace} label={"Transformers (BERT Models)"}/>
                        <StackElement element={GoogleCloud} label={"Colab"}/>
                        <StackElement element={GoogleCloud} label={"DialogFlow CX"}/>
                        <StackElement element={NPM} label={"NPM"}/>
                        <StackElement element={PyTorch} label={"PyTorch"}/>
                        <StackElement element={Tensorflow} label={"Tensorflow"}/>
                    </div>
                </div>
                {/* Other Languages */}
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 py-1">
                        Other Languages
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={C} label={"C"}/>
                        <StackElement element={CPlusPlus} label={"C++"}/>
                    </div>
                </div>
                {/* Tools */}
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 py-1">
                        Tools
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={VisualStudioCode} label={"Visual Studio Code"}/>
                        <StackElement element={Trello} label={"Trello"}/>
                        <StackElement element={Canva} label={"Canva"}/>
                        <StackElement element={Discord} label={"Discord"}/>
                        <StackElement element={Photoshop} label={"Photoshop"}/>
                        <StackElement element={Figma} label={"Figma"}/>
                        <StackElement element={null} label={"Capcut"}/>
                    </div>
                </div>
            </div>
        </div>        
    )
}