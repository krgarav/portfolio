import { Fragment, useState } from "react";

const HeadNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Fragment>
      <nav className="fixed top-0 z-[999] w-full border-b border-white/10 bg-[rgba(11,17,32,.9)] px-4 py-3 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          {/* Hamburger */}
          <button
            className="relative mr-3 block border-0 bg-transparent p-2 md:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <span className="block h-0.5 w-6 bg-white before:absolute before:left-2 before:top-2 before:h-0.5 before:w-6 before:bg-white after:absolute after:left-2 after:bottom-2 after:h-0.5 after:w-6 after:bg-white"></span>
          </button>

          {/* Brand */}
          <a className="text-lg font-extrabold tracking-[.12em] text-white" href="#home">
            KG<span>.</span>
          </a>
          <div className="ml-auto hidden items-center gap-6 md:flex">
            <span className="mr-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/5 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-300"><span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" /> OPEN TO WORK</span>
            <a className="text-sm font-semibold text-slate-300 transition hover:text-[var(--accent)]" href="#aboutMe">About</a><a className="text-sm font-semibold text-slate-300 transition hover:text-[var(--accent)]" href="#resume">Experience</a><a className="text-sm font-semibold text-slate-300 transition hover:text-[var(--accent)]" href="#projects">Work</a><a className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[var(--ink)] transition hover:bg-lime-200" href="#contactMe">Let&apos;s talk</a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 z-[1100] flex h-screen w-64 flex-col gap-1 bg-[var(--ink)] p-6 pt-24 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <span className="mb-5 text-xs font-bold tracking-[.18em] text-[var(--accent)]">MENU</span>
        <a className="rounded px-3 py-3 text-slate-200 hover:bg-white/10" href="#home" onClick={closeMenu}>Home</a>
        <a className="rounded px-3 py-3 text-slate-200 hover:bg-white/10" href="#aboutMe" onClick={closeMenu}>About Me</a>
        <a className="rounded px-3 py-3 text-slate-200 hover:bg-white/10" href="#resume" onClick={closeMenu}>Experience</a>
        <a className="rounded px-3 py-3 text-slate-200 hover:bg-white/10" href="#projects" onClick={closeMenu}>Selected work</a>
        <a className="mt-4 rounded-md bg-[var(--accent)] px-3 py-3 text-center font-bold text-[var(--ink)]" href="#contactMe" onClick={closeMenu}>Let&apos;s talk</a>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-[1050] bg-black/50" onClick={closeMenu}></div>}
    </Fragment>
  );
};

export default HeadNav;
