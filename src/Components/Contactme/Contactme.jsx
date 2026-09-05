import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner/spinner";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spin, setSpin] = useState(false);
  const form = useRef();

  const sendHandler = (event) => {
    event.preventDefault();
    setSpin(true);

    emailjs
      .sendForm(
        "service_n4gt9if",
        "template_qy9ake3",
        form.current,
        "-OpzpvvA2b1HNhh5q"
      )
      .then(
        () => {
          alert("Thank you for contacting");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Something went wrong");
          console.log(error.text);
        }
      )
      .finally(() => setSpin(false));
  };

  return (
    <section className="w-full bg-[var(--ink)] px-5 py-24 text-white md:px-10 md:py-28" id="contactMe">

      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        <div className="mb-8 text-center text-white"><span className="text-xs font-extrabold tracking-[.18em] text-[var(--accent)]">CONTACT</span><h2 className="mb-2 mt-2 font-display text-4xl font-bold tracking-[-.04em] md:text-6xl">Contact me</h2><p className="text-sm text-slate-400">Let&apos;s keep in touch</p></div>
        <div className="w-full">

        {/* ROW added */}
        <div className="grid w-full overflow-hidden rounded-2xl border border-[#273754] bg-[var(--ink-soft)] p-5 shadow-2xl md:grid-cols-2 md:p-8">
          {/* LEFT */}
          <div className="flex flex-col justify-center p-3 text-center md:p-8 md:text-left">
            <span className="font-display text-3xl font-bold text-[var(--accent)] md:text-4xl">Get in touch</span>

            <div className="flex justify-center py-4">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_gzl797gs.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center p-2 md:p-4">
            <div className="w-full rounded-xl bg-white p-6 md:p-8">
              <div className="mb-6"><span className="text-[10px] font-bold tracking-[.18em] text-[var(--accent-dark)]">START A CONVERSATION</span><h3 className="mt-2 font-display text-2xl font-bold text-[var(--ink)]">Tell me about your idea</h3><p className="mt-1 text-xs leading-5 text-slate-500">Share a few details and I&apos;ll get back to you as soon as possible.</p></div>
              <form ref={form} onSubmit={sendHandler} className="space-y-1">
                <label className="mb-1 block text-xs font-bold text-[var(--ink)]" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  className="mb-4 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-slate-400 focus:border-[var(--accent-dark)] focus:bg-white focus:ring-4 focus:ring-lime-100"
                />

                <label className="mb-1 block text-xs font-bold text-[var(--ink)]" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="mb-4 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-slate-400 focus:border-[var(--accent-dark)] focus:bg-white focus:ring-4 focus:ring-lime-100"
                />

                <label className="mb-1 block text-xs font-bold text-[var(--ink)]" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="How can I help?"
                  required
                  className="mb-4 w-full resize-none rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-slate-400 focus:border-[var(--accent-dark)] focus:bg-white focus:ring-4 focus:ring-lime-100"
                />

                <div className="w-full">
                  <button type="submit" disabled={spin} className="flex w-full items-center justify-center gap-2 rounded-md border-0 bg-[var(--ink)] py-3 text-sm font-bold text-[var(--accent)] transition hover:bg-[var(--ink-soft)] disabled:cursor-not-allowed disabled:opacity-60">
                    {!spin ? <>Send message <span aria-hidden="true">↗</span></> : <Spinner />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
