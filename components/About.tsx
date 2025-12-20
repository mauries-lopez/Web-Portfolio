import StackElement from "@/template/StackElement";

export default function About(){

    return (
        <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* About Title */}
            <div className="w-full">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> About </h1>
            </div>
            {/* About Description */}
            <div className="w-full py-3">
                <p className="text-sm text-gray-900 dark:text-gray-100">
                    Disciplined and objective undergraduate computer science student. Pursues passion and hone individual capabilities. Furthermore, equipped with creative skills to provide quality output and efficient solutions.
                </p>
            </div>
            {/* Interests Title */}
            <div className="w-full">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Research Interest </h1>
            </div>
            {/* About Description */}
            <div className="flex flex-row flex-wrap py-3 gap-2">
                <StackElement element={null} label={"Machine Learning"}/>
                <StackElement element={null} label={"Neural Networks"}/>
                <StackElement element={null} label={"Transformers"}/>
                <StackElement element={null} label={"Sentiment Analysis"}/>
                <StackElement element={null} label={"NLP"}/>
                <StackElement element={null} label={"Philippine Text Data"}/>
            </div>
        </div>
    )
}