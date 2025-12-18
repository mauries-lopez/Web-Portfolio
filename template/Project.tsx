
export default function Project({title, desc, linkDisplay, link, isPointer}){
    return (
        <a href={isPointer ? link : undefined} target="_blank" className={`w-full flex-1 items-center justify-center bg-neutral-50 dark:bg-neutral-800 border border-stone-300 hover:border-neutral-500 dark:border-neutral-700 flex duration-500 ease-out rounded-lg ${isPointer ? "cursor-pointer" : "cursor-default"}`}>
            <div className={`flex flex-col justify-center items-center gap-1 p-2`}>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    {title}
                </p>
                <p className="text-xs text-gray-900 dark:text-gray-100 text-center">
                    {desc}
                </p>
                <p className="text-xs text-gray-900 dark:text-gray-100 bg-neutral-200 dark:bg-neutral-900 px-2 py-1 rounded-full">
                    {linkDisplay}
                </p>
            </div>
        </a>
    )
}