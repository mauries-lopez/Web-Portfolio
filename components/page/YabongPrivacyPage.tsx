import Link from "next/link";

const eyebrow = "text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-3 block";
const body = "text-sm md:text-base leading-relaxed text-gray-700 dark:text-neutral-300";
const strong = "font-semibold text-gray-950 dark:text-white";

export default function YabongPrivacyPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 dark:text-neutral-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 rounded-sm">
                <span className="text-gray-900 dark:text-gray-100">←</span> Projects
            </Link>

            <div className="mt-12 md:mt-16">
                <span className="text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2 block">
                    Yabong
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-950 dark:text-white">
                    Privacy Policy
                </h1>
                <p className="text-xs text-gray-400 dark:text-neutral-600 mt-3 font-mono">
                    Last updated: November 2026
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-neutral-300 mt-6 max-w-3xl">
                    Yabong is built to keep your information on your device.
                </p>
            </div>

            <div className="mt-12 md:mt-16 max-w-3xl divide-y divide-stone-200 dark:divide-neutral-800 border-t border-stone-200 dark:border-neutral-800">
                <section className="py-8">
                    <span className={eyebrow}>01 &mdash; What we collect</span>
                    <p className={body}>
                        <strong className={strong}>Nothing.</strong> Yabong does not collect, transmit, sell or share any personal data.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>02 &mdash; What is stored on your phone</span>
                    <p className={body}>
                        The applications you enter (company, role, status, dates, salary, link, source, notes), your interview rounds, the job descriptions you paste, your interview questions and answers, and your optional name, resume and cover letter text are saved in a local database on your iPhone. This data never leaves your device unless you choose to export it.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>03 &mdash; Resume suggestions</span>
                    <p className={body}>
                        If your iPhone supports Apple Intelligence, Yabong can suggest resume changes using Apple&apos;s on-device model. It runs on your iPhone: your resume and the job description are not sent to us or to any server. On other iPhones, Yabong compares keywords on the phone instead. Suggestions can be wrong; review them before you use them.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>04 &mdash; Interview reminders</span>
                    <p className={body}>
                        If you add an interview round, Yabong can remind you before it with a notification. iOS asks for your permission the first time. The reminder is scheduled on your iPhone; nothing is sent to us or to any server, and you can turn notifications off in iOS Settings at any time.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>05 &mdash; Interview answers</span>
                    <p className={body}>
                        The &ldquo;Write with AI&rdquo; button in the question bank uses the same on-device model. The question, your answer, your feedback and a few lines of your resume stay on your iPhone.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>06 &mdash; What we do not do</span>
                    <ul className={`list-disc pl-5 space-y-2 marker:text-accent-600 dark:marker:text-accent-400 ${body}`}>
                        <li>No accounts or sign-in</li>
                        <li>No analytics, advertising or tracking</li>
                        <li>No third-party services that receive your data</li>
                        <li>If you add a Yabong widget to your Home Screen, it shows some of your applications (company, role, status) on your Home Screen. That data stays on your iPhone, shared only between the app and its widget.</li>
                        <li>No access to your contacts, photos, location, camera, microphone or email (the only permission asked is for notifications, if you want interview reminders)</li>
                    </ul>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>07 &mdash; Exporting and importing</span>
                    <p className={body}>
                        If you export a CSV file, you decide where it goes (Files, AirDrop, Mail, and so on). That file is then under your control. Importing a CSV reads a file you choose and replaces the data on your phone.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>08 &mdash; Deleting your data</span>
                    <p className={body}>
                        Open <strong className={strong}>Settings &gt; Delete all data</strong> to remove your applications, interviews, questions, cover letters, name and resume. You can also remove just your resume in <strong className={strong}>Settings &gt; Profile</strong>. Deleting the app also removes all of its data.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>09 &mdash; Children</span>
                    <p className={body}>
                        Yabong does not knowingly collect information from anyone, including children.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>10 &mdash; Changes</span>
                    <p className={body}>
                        If this policy changes, the updated version will be posted on this page with a new date.
                    </p>
                </section>

                <section className="py-8">
                    <span className={eyebrow}>11 &mdash; Contact</span>
                    <p className={body}>
                        Questions: open an issue at{" "}
                        <a
                            href="https://github.com/mauries-lopez/Yabong/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-700 dark:text-accent-300 hover:underline underline-offset-4 break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 rounded-sm"
                        >
                            github.com/mauries-lopez/Yabong/issues
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
