import Project from "@/template/Project";

export default function Projects(){

    return (
        <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* Projects Title */}
            <div className="w-full">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Projects </h1>
            </div>
            {/* Recent Projects */}
            <div className="w-full flex flex-col md:flex-row py-3 gap-2 ">
                <Project title={"Sentiment Analysis"} desc={"test"} link={"test.com"}/>
                <Project title={"RateRocket"} desc={"test"} link={"test.com"}/>
                <Project title={"Arrows Shuttle"} desc={"test"} link={"test.com"}/>
                <Project title={"PomoPet"} desc={"test"} link={"test.com"}/>
                <Project title={"KadaCraft"} desc={"test"} link={"test.com"}/>
            </div>
        </div>
    )
}