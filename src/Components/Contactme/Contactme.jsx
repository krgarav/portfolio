import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner/spinner";
import "./Contactme.css";
import { Button } from "react-bootstrap";

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
    <div className="contact-me-part" id="contactMe">
      <div className="relative-bg"></div>

      <div className="contact-me-inner-part d-flex flex-column align-items-center">
        <span className="heading">Contact Me</span>
        <span className="subheading">Lets Keep In Touch</span>

        {/* ROW added */}
        <div className="contact-me-card row">
          {/* LEFT */}
          <div className="col-lg-6 col-md-6 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch">Get In Touch</span>

            <div className="py-4 d-flex justify-content-center">
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
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="card-contact-right">
              <form ref={form} onSubmit={sendHandler}>
                <label className="labels">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="input-group"
                />

                <label className="labels">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="input-group"
                />

                <label className="labels">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
                  className="input-group"
                />

                <div className="button-class">
                  <Button variant="success" type="submit" disabled={spin}>
                    {!spin ? "Send" : <Spinner />}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
