
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
        </div>
    )
}