import skillGroups from "./skillsData";

export default function Skills() {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="mb-7 border-b border-slate-200 pb-5">
        <span className="text-[11px] font-bold tracking-[.18em] text-slate-500">TECHNICAL EXPERTISE</span>
        <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">Skills &amp; <span className="text-[var(--accent)]">Technologies</span></h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">Tools and technologies I use to design, develop, and maintain modern web applications.</p>
      </div>
      <div className="space-y-7">
        {skillGroups.map((group) => (
          <section key={group.title}>
              <div className="mb-3 flex items-end justify-between border-b border-white/10 pb-2">
              <div><h4 className="font-display text-sm font-bold text-white">{group.title}</h4><p className="mt-1 text-[11px] text-slate-400">{group.description}</p></div>
              <span className="text-xs font-bold text-slate-400">{String(group.skills.length).padStart(2, "0")}</span>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return <div key={skill.name} className="min-w-0 rounded-xl border border-slate-200 bg-white p-3 transition hover:-translate-y-0.5 hover:border-lime-200 hover:shadow-md">
                  <div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-xl" style={{ color: skill.color }}><Icon /></div><div className="min-w-0 flex-1"><h5 className="truncate text-sm font-bold text-slate-800">{skill.name}</h5><div className="mt-1 flex justify-between gap-2 text-[10px] text-slate-400"><span className="font-semibold text-[var(--accent-dark)]">{skill.level}</span><span>{skill.experience}</span></div></div></div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100"><span className="block h-full rounded-full bg-[var(--accent-dark)]" style={{ width: skill.level.toLowerCase() === "advanced" ? "90%" : "70%" }} /></div>
                </div>;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
