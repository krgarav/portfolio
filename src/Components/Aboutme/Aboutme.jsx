const AboutMe = () => (
  <section className="bg-[var(--paper)] px-5 py-20 md:px-10 md:py-28" id="aboutMe">
    <div className="mx-auto flex w-full max-w-[1180px] flex-col">
      <div className="mb-8 text-center"><span className="text-xs font-extrabold tracking-[.18em] text-[var(--accent-dark)]">ABOUT ME</span><h2 className="mb-2 mt-2 font-display text-4xl font-bold tracking-[-.04em] text-[var(--ink)] md:text-6xl">A little about me</h2><p className="text-sm text-[var(--muted)]">Product-minded engineering with a human touch</p></div>
      <div>
      <div className="my-10 grid items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(11,17,32,.12)] md:grid-cols-2">
        <div className="flex items-center justify-center bg-slate-50 p-5 md:p-8">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_yswivetl.json" background="transparent" speed="1" class="h-[280px] w-full max-w-[420px] md:h-[400px]" loop autoplay></lottie-player>
        </div>
        <div className="flex flex-col border-t border-slate-200 p-8 md:border-l md:border-t-0 md:p-12">
          <p className="text-base font-medium leading-7 text-[var(--muted)] md:text-lg">I&apos;m a full-stack developer who enjoys turning complex problems into simple, thoughtful products. My sweet spot is the space between a polished interface and a dependable API.</p>
          <h3 className="mt-8 font-display text-xl font-semibold text-[var(--ink)]">What I bring</h3>
          <ul className="mt-4 space-y-3 pl-5 text-sm leading-6 text-[var(--muted)] marker:text-[var(--accent-dark)]">
            <li>End-to-end product development</li><li>Accessible, responsive React interfaces</li><li>RESTful APIs and data modeling</li><li>Clear communication and ownership</li>
          </ul>
        </div>
      </div>
      </div>
      </div>
  </section>
);
export default AboutMe;
