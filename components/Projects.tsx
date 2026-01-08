import Project from "@/template/Project";

export default function Projects(){

    return (
        <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* Projects Title */}
            <div className="w-full flex flex-row mb-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Projects </h1>
                <a href="/projects" className="text-xs md:text-sm flex justify-end items-center text-gray-900 dark:text-gray-100 hover:scale-101 transition cursor-pointer text-nowrap">
                    View All →
                </a>
            </div>
            {/* Recent Projects */}
            <div className="w-full flex flex-col md:flex-row gap-3">
                <Project title={"BERT-Based Sentiment Prediction Model"} desc={"Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data."} link={""} linkDisplay={"Thesis"} isPointer={false} techStack={["HuggingFace", "GoogleCloud", "Tensorflow", "PyTorch", "NPM"]}/>
                <Project title={"RateRocket"} desc={"Expert-guided financial product comparison platform"} link={"https://www.raterocket.net"} linkDisplay={"raterocket.net"} isPointer={true} techStack={["React","NextJs", "TailwindCSS", "MongoDB"]}/>
                <Project title={"KadaCraft"} desc={"Minecraft YouTubers Space"} link={"https://kadacraft.netlify.app/"} linkDisplay={"kadacraft.netlify.app"} isPointer={true} techStack={["React","NextJs", "TailwindCSS", "Supabase", "Insomnia","YouTube Data API"]}/>
            </div>
        </div>
    )
}