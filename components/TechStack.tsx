import StackElement from "../template/StackElement";
import { GoogleCloud, HuggingFace, Java, MongoDB, MySQL, NextJs, NPM, Python, PyTorch, React, TailwindCSS, Tensorflow, TypeScript } from "developer-icons";

export default function TechStack(){
    return(
        <div>
            <div className="flex flex-row items-center mb-5">
                <a href="/techstack" className="text-xs tracking-wider text-gray-400 dark:text-neutral-600 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors ml-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm">
                    View All &rarr;
                </a>
            </div>

            <div className="space-y-5">
                <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 dark:text-neutral-600 mb-3">
                        Frontend
                    </h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={React} label={"React"}/>
                        <StackElement element={TailwindCSS} label={"TailwindCSS"}/>
                        <StackElement element={TypeScript} label={"TypeScript"}/>
                        <StackElement element={NextJs} label={"Next.js"}/>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 dark:text-neutral-600 mb-3">
                        Backend
                    </h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={MySQL} label={"MySQL"}/>
                        <StackElement element={MongoDB} label={"MongoDB"}/>
                        <StackElement element={Python} label={"Python"}/>
                        <StackElement element={Java} label={"Java"}/>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 dark:text-neutral-600 mb-3">
                        AI &amp; Machine Learning
                    </h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <StackElement element={HuggingFace} label={"Hugging Face"}/>
                        <StackElement element={HuggingFace} label={"Transformers"}/>
                        <StackElement element={GoogleCloud} label={"Colab"}/>
                        <StackElement element={GoogleCloud} label={"DialogFlow CX"}/>
                        <StackElement element={NPM} label={"NPM"}/>
                        <StackElement element={PyTorch} label={"PyTorch"}/>
                        <StackElement element={Tensorflow} label={"Tensorflow"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
