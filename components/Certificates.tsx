import Project from "@/template/Project";

export default function Certificates(){

    return (
        <div className="flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* Certificates Title */}
            <div className="w-full flex flex-row mb-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Certificates </h1>
            </div>
            {/* Certificates */}
            <div className="w-full flex flex-col md:flex-row gap-3">
                <Project title={"BERT-Based Sentiment Prediction Model"} desc={"Trained 155 BERT-based models to identify the best transformer for sentiment analysis on Philippine text data."} link={""} linkDisplay={"Thesis"} isPointer={false}/>
            </div>
        </div>
    )
}