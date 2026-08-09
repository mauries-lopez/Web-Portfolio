import StackElement from "@/template/StackElement";

export default function About(){
    return (
        <div className="md:grid md:grid-cols-2 md:gap-12">
            <div>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-neutral-300">
                    Disciplined and objective software engineer. Pursues passion and hone individual capabilities. Furthermore, equipped with creative skills to provide quality output and efficient solutions.
                </p>
                <p className="text-xs text-gray-400 dark:text-neutral-600 mt-3 font-mono">
                    BSCS &middot; De La Salle University
                </p>
            </div>
            <div className="mt-6 md:mt-0">
                <h3 className="text-xs uppercase tracking-widest text-gray-400 dark:text-neutral-600 mb-3">
                    Research Interest
                </h3>
                <div className="flex flex-row flex-wrap gap-2">
                    <StackElement element={null} label={"Machine Learning"}/>
                    <StackElement element={null} label={"Neural Networks"}/>
                    <StackElement element={null} label={"Transformers"}/>
                    <StackElement element={null} label={"Sentiment Analysis"}/>
                    <StackElement element={null} label={"NLP"}/>
                    <StackElement element={null} label={"Philippine Text Data"}/>
                </div>
            </div>
        </div>
    )
}
