import ThemeToggle from "@/components/ThemeToggle";

export default function Main() {
  return (
    <main className="w-screen h-screen flex justify-center bg-white dark:bg-neutral-950">
      <div className="w-250 h-full bg-white dark:bg-neutral-950 px-4 py-8">
        {/* Header */}
        <section className="w-full h-40 flex flex-row">
          {/* Picture */}
          <div className="min-w-45 h-full">
            <img src="profilePicture.png" className="w-full h-full object-cover"/>
          </div>
          {/* Details */}
          <div className="w-full h-full flex flex-col ml-5">
            {/* Name */}
            <div className="w-full flex">
              <h1 className="w-full font-bold text-gray-950 dark:text-white text-xl md:text-2xl" > Mauries Lopez</h1>
              { /* Theme Toggle */ }
              <div>
                <ThemeToggle/>
              </div>
            </div>
            {/* School */}
            <div className="w-full flex flex-col gap-1 py-1">
              <h2 className="text-xs md:text-lg font-bold text-gray-700 dark:text-white"> BS Computer Science Major in Software Technology </h2>
              <h3 className="text-xs md:text-lg font-semibold text-gray-700 dark:text-white"> De La Salle University </h3>
            </div>
            {/* Links */}
            <div className="w-full h-full bg-black">

            </div>
          </div>
        </section>
         {/* About */}
        <section>

        </section>
      </div>
    </main>
  )
}