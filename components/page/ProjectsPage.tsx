"use client"

import { useThemeToggle } from "@/hooks/useThemeToggle";
import Project from "@/template/Project";
import StackElement from "@/template/StackElement";

export default function ProjectsPage(){

    const {theme, setTheme} = useThemeToggle();

    return (
        <div className="w-250 flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            <a href="/" className="text-xs md:text-sm flex justify-end items-center text-gray-900 dark:text-gray-100 hover:scale-101 transition cursor-pointer text-nowrap">
                ← Back
            </a>

            <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mt-5"> Projects </h1>

            {/* Thesis Title */}
            <div className=" flex flex-col mt-5 gap-2">
                <StackElement element={null} label={"Thesis"}/>
            </div>
            {/* Thesis */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
                <Project title={"BERT-Based Sentiment Prediction Model"} desc={"Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data."} link={""} linkDisplay={"Thesis"} isPointer={false} techStack={["HuggingFace", "GoogleCloud", "Tensorflow", "PyTorch", "NPM"]}/>
            </div>

            {/* Projects Title */}
            <div className=" flex flex-col mt-5 gap-2">
                <StackElement element={null} label={"Web Development"}/>
            </div>
            {/* Recent Projects */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
                <Project title={"RateRocket"} desc={"Expert-guided financial product comparison platform"} link={"https://www.raterocket.net"} linkDisplay={"raterocket.net"} isPointer={true} techStack={["React","NextJs", "TailwindCSS", "MongoDB"]}/>
                <Project title={"KadaCraft"} desc={"Minecraft YouTubers Space"} link={"https://kadacraft.netlify.app/"} linkDisplay={"kadacraft.netlify.app"} isPointer={true} techStack={["React","NextJs", "TailwindCSS", "Supabase", "Insomnia","YouTube Data API"]}/>
                <Project title={"Filbis"} desc={"Health Chatbot"} link={"https://filbis-v2.vercel.app/"} linkDisplay={"filbis-v2.vercel.app"} isPointer={true} techStack={["React","NextJs", "TailwindCSS", "Firebase", "FastAPI", "Dialogue Flow"]}/>
                <Project title={"Arrows Shuttle"} desc={"Shuttle Reservation System"} link={"https://dlsu-shuttle.onrender.com/"} linkDisplay={"dlsu-shuttle.onrender.com"} isPointer={true} techStack={["HTML5", "CSS3", "ExpressJsDark", "MongoDB", "NodeJs", "JavaScript"]}/>
            </div>

            {/* Others Title */}
            <div className=" flex flex-col mt-5 gap-2">
                <StackElement element={null} label={"Others"}/>
            </div>
            {/* Other Projects */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
                <Project title={"Online Enrollment System"} desc={"The system uses distributed microservices with horizontal scaling to ensure fault tolerance, scalability, and continuous operation despite individual service failures."} link={""} linkDisplay={"Locally Hosted"} isPointer={false} techStack={["Java", "Spring", "RestAPI", "MongoDB", "OAuth2"]}/>
                <Project title={"Network Media Upload Service"} desc={"The application simulates a multithreaded C# file transfer system using a producer–consumer model with synchronized, leaky-bucket–controlled queues."} link={""} linkDisplay={"Locally Hosted"} isPointer={false} techStack={["CSharp"]}/>
            </div>
        </div>        
    )
}