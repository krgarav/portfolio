
import reactMealsImage from "../Assets/reactmeals.jpg";
import ecommerceImage from "../Assets/ecommerce.jpg";
import expenseImage from "../Assets/expenseApp.jpg";

const projects = [
  {
    id: 1,
    title: "React Meals",
    description: "A focused restaurant ordering experience with reusable React UI.",
    image: reactMealsImage,
    link: "https://react-meals-reataurant.netlify.app",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A clean commerce flow with routing, cart state, and responsive layouts.",
    image: ecommerceImage,
    link: "https://e-commerce-reactapplication.netlify.app",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "A practical expense tracker using Redux Toolkit for predictable state.",
    image: expenseImage,
    link: "https://expense-observer.netlify.app",
  },
];

const Project = () => {
  return (
    <section className="bg-[var(--paper)] px-5 py-24 text-[var(--ink)] md:px-10" id="projects">
      <div className="mx-auto mb-8 max-w-[1080px] text-center"><span className="text-xs font-extrabold tracking-[.18em] text-[var(--accent-dark)]">SELECTED WORK</span><h2 className="mb-2 mt-2 font-display text-4xl font-bold tracking-[-.04em] md:text-6xl">Things I&apos;ve built</h2><p className="text-[var(--muted)]">A few practical projects that show how I think, build, and ship.</p></div>
      <div className="mx-auto max-w-[1180px] rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_22px_65px_rgba(11,17,32,.14)] md:p-10">

      <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(11,17,32,.12),0_0_0_1px_rgba(183,243,107,.04)] transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/60 hover:shadow-[0_28px_70px_rgba(11,17,32,.2),0_0_30px_rgba(183,243,107,.16)]">
              <div className="relative overflow-hidden bg-[var(--ink)]">
                <img
                  src={project.image}
                  className="h-[190px] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  alt={project.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(11,17,32,.5)] via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[rgba(11,17,32,.7)] px-2 py-1 text-[10px] font-bold tracking-wider text-[var(--accent)] backdrop-blur">0{project.id}</span>
              </div>

              <div className="relative flex flex-1 flex-col p-6 before:absolute before:left-6 before:right-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[var(--accent)] before:to-transparent">
                <h5 className="font-display text-xl font-semibold text-[var(--ink)]">
                  {project.title}
                </h5>
                <p className="mb-5 mt-2 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto rounded-md bg-[var(--ink)] px-4 py-3 text-center text-sm font-bold text-[var(--accent)]"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Project;
