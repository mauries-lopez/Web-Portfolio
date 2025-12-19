import StackElement from "../template/StackElement";
import { CSS, GoogleCloud, HuggingFace, Java, MongoDB, MySQL, NextJs, Python, React, TailwindCSS, TypeScript } from "developer-icons";

export default function TechStack(){

    return(
        <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* Tech Stack Title */}
            <div className="w-full flex flex-row items-center ">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Tech Stack </h1>
                <a href="/techstack" className="text-xs md:text-sm flex justify-end items-center text-gray-900 dark:text-gray-100 hover:scale-101 transition cursor-pointer text-nowrap">
                    View All →
                </a>
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
                        <StackElement element={GoogleCloud} label={"Colab"}/>
                        <StackElement element={HuggingFace} label={"Hugging Face"}/>
                        <StackElement element={HuggingFace} label={"Transformers (BERT Models)"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}