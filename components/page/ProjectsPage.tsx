"use client"

import { useThemeToggle } from "@/hooks/useThemeToggle";
import Project from "@/template/Project";

export default function ProjectsPage(){

    const {theme, setTheme} = useThemeToggle();

    return (
        <div className="w-250 flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            <a href="/" className="text-xs md:text-sm flex justify-end items-center text-gray-900 dark:text-gray-100 hover:scale-101 transition cursor-pointer text-nowrap">
                ← Back
            </a>
            {/* Projects Title */}
            <div className="w-full flex flex-row mt-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Projects </h1>
            </div>
            {/* Recent Projects */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-2">
                <Project title={"BERT-Based Sentiment Prediction Model"} desc={"Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data."} link={""} linkDisplay={"Thesis"} isPointer={false}/>
                <Project title={"RateRocket"} desc={"Expert-guided financial product comparison platform"} link={"https://www.raterocket.net"} linkDisplay={"raterocket.net"} isPointer={true}/>
                <Project title={"Filbis"} desc={"Health Chatbot"} link={"https://filbis-v2.vercel.app/"} linkDisplay={"filbis-v2.vercel.app"} isPointer={true}/>
                <Project title={"Arrows Shuttle"} desc={"Shuttle Reservation System"} link={"https://dlsu-shuttle.onrender.com/"} linkDisplay={"dlsu-shuttle.onrender.com"} isPointer={true}/>
                <Project title={"KadaCraft"} desc={"Minecraft YouTubers Space"} link={"https://kadacraft.onrender.com/"} linkDisplay={"kadacraft.onrender.com"} isPointer={true}/>
            </div>
        </div>        
    )
}