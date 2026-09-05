export default function Education() {
    return (<div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between border-b border-slate-200 pb-4">
            <div className="flex flex-col" >


                <span className="font-display text-base font-bold text-white md:text-lg">University Of Engineering And Management, Jaipur.</span>
                <span className="mt-1 text-xs uppercase tracking-wide text-slate-400">Bachelor of Technology (B.Tech)</span>

            </div>
            <div>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--ink)]">2021</span>

            </div>

        </div>
        <div className="flex flex-row justify-between border-b border-slate-200 pb-4">
            <div className="flex flex-col" >
                <span className="font-display text-base font-bold text-white md:text-lg">New Light Academy, Namchi.</span>
                <span className="mt-1 text-xs uppercase tracking-wide text-slate-400">Higher Secondary School</span>


            </div>
            <div>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--ink)]">2017</span>

            </div>

        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col" >

                <span className="font-display text-base font-bold text-white md:text-lg">Government Secondary School, Rangpo.</span>
                <span className="mt-1 text-xs uppercase tracking-wide text-slate-400">Secondary School</span>

            </div>
            <div>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--ink)]">2013</span>

            </div>

        </div>
    </div>)
}
