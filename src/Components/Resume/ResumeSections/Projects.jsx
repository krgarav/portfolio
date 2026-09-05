
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between border-b border-slate-200 pb-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2"><span className="font-display text-base font-bold text-white">React Meals</span><a href="https://react-meals-reataurant.netlify.app" target="_blank" rel="noreferrer" aria-label="Open React Meals" className="text-[var(--accent)] transition hover:scale-110"><FaArrowUpRightFromSquare /></a></div>
          <span className="text-xs uppercase text-slate-400">React, CSS3</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882983/reactmeals_zg1uup.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-slate-200 pb-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2"><span className="font-display text-base font-bold text-white">Ecommerce Site</span><a href="https://e-commerce-reactapplication.netlify.app" target="_blank" rel="noreferrer" aria-label="Open Ecommerce Site" className="text-[var(--accent)] transition hover:scale-110"><FaArrowUpRightFromSquare /></a></div>
          <span className="text-xs uppercase text-slate-400">
            Technologies - React js , React bootstrap , React Router
          </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/ecommerce_qw0snw.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-slate-200 pb-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2"><span className="font-display text-base font-bold text-white">Expense Tracker</span><a href="https://expense-observer.netlify.app" target="_blank" rel="noreferrer" aria-label="Open Expense Tracker" className="text-[var(--accent)] transition hover:scale-110"><FaArrowUpRightFromSquare /></a></div>
          <span className="text-xs uppercase text-slate-400">
            Technologies - React js , React bootstrap , React Router, Redux
            Toolkit
          </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/expenseApp_ill7yc.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2"><span className="font-display text-base font-bold text-white">Mail Box Client</span><a href="https://react-mail-box-client.netlify.app" target="_blank" rel="noreferrer" aria-label="Open Mail Box Client" className="text-[var(--accent)] transition hover:scale-110"><FaArrowUpRightFromSquare /></a></div>
          <span className="text-xs uppercase text-slate-400">
            Technologies - React js , React bootstrap , React Router,{" "}
          </span>
          <span className="text-xs uppercase text-slate-400">Redux Toolkit, Google Firebase</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/Mailbox_xwd63a.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
    </div>
  );
}
