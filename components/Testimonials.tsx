import Testimonial from "@/template/Testimonial";

export default function Testimonials(){

    return (
        <div className="h-full flex flex-col items-start border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900">
            {/* Testimonials Title */}
            <div className="w-full flex flex-row">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Testimonials </h1>
            </div>
            {/* Recommendation */}
            <div className="w-full flex flex-col mt-5">
                <Testimonial
                    desc={`"When he was my student in the elective course, I invited him to be my intern because I found him very eager to learn, well motivated, hardworking and with a positive attitude towards work...I am very grateful to have Maui as my intern because his team has greatly improved our current healthcare chatbot system which made our application ready for deployment in schools."`}
                    name={"Judith J. Azcarraga, PhD"}
                    position={"Associate Professor at De La Salle University"}
                />
            </div>
            {/* Navigation Dots for Testimonial Carousel (HIDDEN; ONLY 1 TESTIMONIAL)*/}
            <div className="hidden w-full flex justify-center mt-5 gap-x-1">
                <button className="bg-neutral-950 dark:bg-stone-400 rounded-full h-2 w-2"></button>
            </div>
        </div>
    )
}