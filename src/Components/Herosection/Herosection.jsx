import { useEffect, useState } from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareGooglePlus,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Herosection = () => {
  const capabilities = [
    {
      phrase: "Frontend craft, backend clarity",
      label: "FRONTEND ENGINEERING",
      description:
        "Building accessible, responsive interfaces that feel natural to use.",
    },
    {
      phrase: "React / Node / MongoDB",
      label: "FULL-STACK DEVELOPMENT",
      description:
        "Connecting polished product experiences to dependable backend systems.",
    },
    {
      phrase: "From idea to shipped product",
      label: "PRODUCT DELIVERY",
      description:
        "Turning rough ideas into useful, scalable experiences that create lasting impact.",
    },
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setPhraseIndex((index) => (index + 1) % capabilities.length),
      2800,
    );
    return () => clearInterval(timer);
  }, [capabilities.length]);
  return (
    <div id="home">
      <div className="relative flex min-h-screen items-center overflow-hidden bg-[var(--ink)] px-6 pb-16 pt-10 text-white md:h-[100svh] md:min-h-0 md:px-20 md:pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,#20375d_0,transparent_28%)]" />
        <div className="pointer-events-none absolute -bottom-64 -right-36 h-[520px] w-[520px] rounded-full border border-[rgba(183,243,107,.12)] shadow-[0_0_0_70px_rgba(183,243,107,.03),0_0_0_140px_rgba(183,243,107,.02)]" />
        <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-6 pt-14 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="mb-3 flex gap-4 text-xl text-white">
              <a
                className="transition hover:text-[var(--accent)]"
                href="https://www.facebook.com/profile.php?id=100004094160374"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareFacebook />
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="https://www.linkedin.com/in/kumar-gaurav-22a0751a7/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="https://github.com/krgarav"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="mailto:hello@krgarav.dev"
              >
                <FaSquareGooglePlus />
              </a>
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />{" "}
              AVAILABLE FOR NEW PROJECTS
            </div>
            <span className="text-xs font-bold tracking-[.18em] text-[var(--accent)]">
              FULL-STACK DEVELOPER · INDIA
            </span>
            <h1 className="relative mb-4 mt-4 max-w-[670px] font-display text-5xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Building digital products that feel{" "}
              <span className="text-[var(--accent)]">effortless.</span>
            </h1>
            <span className="min-h-6 border-l-2 border-[var(--accent)] py-1 pl-3 text-base text-slate-300">
              {capabilities[phraseIndex].phrase}
            </span>
            <p className="mt-3 max-w-[560px] text-base leading-7 text-slate-300">
              I design and engineer reliable, human-centered web experiences
              with modern JavaScript tools.
            </p>
            <div className="mt-4 flex flex-wrap justify-start gap-3">
              <a
                href="#contactMe"
                className="rounded-md border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[var(--ink)] transition hover:bg-lime-200"
              >
                Hire me
              </a>
              <a
                href="https://res.cloudinary.com/dje269eh5/image/upload/v1788666744/Kumar_Gaurav_Resume.pdf"
                download="resume.pdf"
                target="blank"
              >
                <button className="rounded-md border border-slate-500 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[var(--ink)]">
                  View resume ↗
                </button>
              </a>
            </div>
            <div className="mt-7 flex gap-8 border-t border-white/10 pt-4 text-xs text-slate-400">
              <div>
                <strong className="block font-display text-xl text-white">
                  6+
                </strong>
                years learning &amp; building
              </div>
              <div>
                <strong className="block font-display text-xl text-white">
                  10+
                </strong>
                projects shipped
              </div>
              <div>
                <strong className="block font-display text-xl text-white">
                  ∞
                </strong>
                curiosity
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:pl-10">
            <div className="absolute inset-8 rounded-full bg-[var(--accent)]/10 blur-3xl" />
            <div className="relative w-full max-w-[460px] rounded-3xl border border-white/10 bg-white/[.03] p-3 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-2 text-[10px] font-bold tracking-[.16em] text-slate-500">
                <span>{capabilities[phraseIndex].label}</span>
                <span className="text-[var(--accent)]">
                  0{phraseIndex + 1} / 03
                </span>
              </div>
              <lottie-player
                class="h-[330px] w-full"
                src="https://lottie.host/63aff3b1-da76-4880-840c-41ec002ae5e7/83ifNfKh27.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <div className="flex items-center justify-between gap-4 px-3 pb-2 text-sm text-slate-400">
                <span>{capabilities[phraseIndex].description}</span>
                <div className="flex shrink-0 gap-1.5">
                  {capabilities.map((capability, index) => (
                    <button
                      key={capability.label}
                      type="button"
                      aria-label={`Show capability ${index + 1}`}
                      onClick={() => setPhraseIndex(index)}
                      className={`h-2 w-2 rounded-full transition ${index === phraseIndex ? "bg-[var(--accent)]" : "bg-slate-600 hover:bg-slate-400"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
