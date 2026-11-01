import StackElement from "../template/StackElement";
import { techSections } from "@/constants/techstack";

export default function TechStack(){
    return(
        <div>
            <div className="flex flex-row items-center mb-5">
                <a href="/techstack" className="text-xs tracking-wider text-accent-600 dark:text-accent-400 hover:text-accent-500 dark:hover:text-accent-300 hover:underline underline-offset-4 transition-colors ml-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 rounded-sm">
                    View All &rarr;
                </a>
            </div>

            <div className="space-y-5">
                {techSections.slice(0, 3).map((section) => (
                    <div key={section.title}>
                        <h3 className="text-xs uppercase tracking-widest text-gray-400 dark:text-neutral-600 mb-3">
                            {section.title}
                        </h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {section.items.map((item) => (
                                <StackElement key={item.label} element={item.element} label={item.label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
