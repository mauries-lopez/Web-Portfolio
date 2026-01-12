export default function Experience(){

    return (
        <div className="h-full flex flex-col border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900 ">
            {/* Experience Title */}
            <div className="w-full">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100"> Experience </h1>
            </div>
            {/* Experience Description */}
            <div className="flex flex-col w-full py-3 h-full justify-center">
                { /* Latest Experience */ }
                <div className="w-full flex flex-row">
                    <div className="w-full flex flex-col">
                        <p className="text-md font-semibold text-gray-900 dark:text-gray-100">
                            Web Developer
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                            De La Salle University - TE3D House
                        </p>
                        <p className="text-xs text-gray-600 dark:text-neutral-400">
                            June 2024 - Aug 2024
                        </p>
                    </div>
                    <div className="ml-5">
                        <p className="text-[0.6rem] text-gray-900 dark:text-gray-100 items-end bg-neutral-50 dark:bg-neutral-800 border border-solid  border-stone-300 dark:border-neutral-700 rounded-full p-1">
                            Recent
                        </p>
                    </div>
                </div>

                <br></br>
                
                { /* 2nd Experience */ }
                <div className="w-full flex flex-row">
                    <div className="w-full flex flex-col">
                        <p className="text-md font-semibold text-gray-900 dark:text-gray-100">
                            V.P for Publicity and Creatives
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                            De La Salle University - LSCS Laguna
                        </p>
                        <p className="text-xs text-gray-600 dark:text-neutral-400">
                            December 2021 - May 2024
                        </p>
                    </div>
                    <div className="ml-5">
                        <p className="text-[0.6rem] text-gray-900 dark:text-gray-100 items-end bg-neutral-50 dark:bg-neutral-800 border border-solid  border-stone-300 dark:border-neutral-700 rounded-full p-1">
                            2024
                        </p>
                    </div>
                </div>

                <br></br>
                
                { /* 3rd Experience */ }
                <div className="w-full flex flex-row">
                    <div className="w-full flex flex-col">
                        <p className="text-md font-semibold text-gray-900 dark:text-gray-100">
                            Chairperson for Creatives
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                            Office of the Campus Secretary - DLSU LCSG
                        </p>
                        <p className="text-xs text-gray-600 dark:text-neutral-400">
                            January 2021 - April 2021
                        </p>
                    </div>
                    <div className="ml-5">
                        <p className="text-[0.6rem] text-gray-900 dark:text-gray-100 items-end bg-neutral-50 dark:bg-neutral-800 border border-solid  border-stone-300 dark:border-neutral-700 rounded-full p-1">
                            2021
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}