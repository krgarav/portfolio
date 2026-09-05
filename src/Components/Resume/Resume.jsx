import { useState } from "react";
import { FaBriefcase, FaCode, FaGraduationCap, FaListCheck } from "react-icons/fa6";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";
import Projects from "./ResumeSections/Projects";

const tabs = [
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "work", label: "Training", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaListCheck },
];

function Resume() {
  const [activeTab, setActiveTab] = useState("skills");
  const content = { skills: <Skills />, education: <Education />, work: <Work />, projects: <Projects /> };
  return (
    <section className="w-full bg-[var(--ink)] px-5 py-24 md:px-10 md:py-28" id="resume">
      <div className="mx-auto max-w-[1180px]">
      <div className="mb-8 text-center"><span className="text-xs font-extrabold tracking-[.18em] text-[var(--accent)]">RESUME</span><h2 className="mb-2 mt-2 font-display text-4xl font-bold tracking-[-.04em] text-white md:text-6xl">Professional journey</h2><p className="text-sm text-slate-400">My formal bio details</p></div>
      <div className="mx-auto mt-10 grid w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink-soft)] shadow-[0_22px_65px_rgba(0,0,0,.28)] md:grid-cols-[220px_1fr]">
        <aside className="flex flex-col border-b border-white/10 bg-[var(--ink-soft)] md:border-b-0 md:border-r">
          <nav className="grid grid-cols-4 bg-gradient-to-br from-[var(--ink)] to-[var(--ink-soft)] md:flex md:flex-1 md:flex-col">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              const Icon = tab.icon;
              return <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`flex min-h-[76px] flex-col items-center justify-center gap-2 border-0 px-2 py-3 text-[11px] font-bold transition md:min-h-0 md:flex-row md:justify-start md:gap-3 md:px-5 md:py-5 md:text-left ${active ? "bg-[var(--ink)] text-[var(--accent)]" : "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icon aria-hidden="true" className="text-base md:text-lg" /><span className="text-lg">{tab.label}</span></button>;
            })}
          </nav>
        </aside>
          <div className="min-h-[360px] min-w-0 max-h-[520px] overflow-x-hidden overflow-y-auto bg-[var(--ink-soft)] p-5 text-white md:p-8">
          <div key={activeTab} className="animate-[slideIn_.35s_ease-out] text-xl">{content[activeTab]}</div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Resume;
