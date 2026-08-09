export default function Experience(){
    const experiences = [
        {
            role: "Junior Software Engineer",
            company: "oboda",
            date: "March 2026 - Current",
            isCurrent: true,
        },
        {
            role: "Web Developer",
            company: "De La Salle University - TE3D House",
            date: "Jun — Aug 2024",
            isCurrent: false,
        },
        {
            role: "V.P for Publicity and Creatives",
            company: "De La Salle University - LSCS Laguna",
            date: "Dec 2021 — May 2024",
            isCurrent: false,
        },
        {
            role: "Chairperson for Creatives",
            company: "Office of the Campus Secretary - DLSU LCSG",
            date: "Jan — Apr 2021",
            isCurrent: false,
        },
    ];

    return (
        <div>
            {experiences.map((exp, i) => (
                <div
                    key={i}
                    className={`flex justify-between items-start ${exp.isCurrent ? "py-5 px-4 -mx-4 bg-stone-50 dark:bg-neutral-900" : ""} ${i !== 0 && !exp.isCurrent ? "border-t border-stone-100 dark:border-neutral-800 pt-5 mt-5" : ""}`}
                >
                    <div className="flex items-start gap-3">
                        {exp.isCurrent && (
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                        )}
                        <div className="flex flex-col">
                            <p className={`text-sm md:text-base ${exp.isCurrent ? "font-bold text-gray-950 dark:text-white" : "font-semibold text-gray-900 dark:text-gray-100"}`}>
                                {exp.role}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-neutral-500 mt-0.5">
                                {exp.company}
                            </p>
                        </div>
                    </div>
                    <span className={`text-xs font-mono tabular-nums whitespace-nowrap ml-4 mt-0.5 ${exp.isCurrent ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-gray-400 dark:text-neutral-600"}`}>
                        {exp.isCurrent ? "" : ""}{exp.date}
                    </span>
                </div>
            ))}
        </div>
    )
}
