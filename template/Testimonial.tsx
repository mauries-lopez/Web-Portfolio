
interface TestimonialProps{
    desc: string;
    name: string;
    position: string;
}

export default function Testimonial({desc, name, position}: TestimonialProps){

    return (
        <div className="flex flex-col">
            <p className="text-xs md:text-sm italic text-gray-900 dark:text-gray-100">
                {desc}
            </p>
            <div className="flex flex-col mt-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {name}
                </p>
                <p className="text-xs italic text-gray-900 dark:text-gray-100">
                    {position}
                </p>
            </div>            
        </div>
    )
}