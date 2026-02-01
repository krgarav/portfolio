import "./Herosection.css";
import Typed from "react-typed";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareGooglePlus,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="App" id="home">
      <div className="herosection px-10  ">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center I-m-text">
              <div className="colz">
                <div className="colz-icon">
                  <a
                    href="https://www.facebook.com/profile.php?id=100004094160374"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSquareFacebook color="white" />
                  </a>
                  <a
                    href="https://myaccount.google.com/personal-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSquareGooglePlus color="white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kumar-gaurav-22a0751a7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin color="white" />
                  </a>
                  <a
                    href="https://github.com/krgarav"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare color="white" />
                  </a>
                </div>
              </div>
              <span className="Im-text">
                Hello,I&apos;m{" "}
                <span className="name">A Fullstack Developer</span>
              </span>
              <span className="designation py-2">
                <Typed
                  strings={[
                    "Enthuastic Dev",
                    "Fullstack Dev",
                    "MERN Stack Dev",
                  ]}
                  typeSpeed={30}
                  backSpeed={40}
                  loop
                />
              </span>
              <span className="description">
                Knack of building application with front-end and back-end
                operation
              </span>
              <div className="d-flex flex-row justify-content-center mt-5 ">
                <a href="#contactMe" className="hire-btn">
                  Hire Me
                </a>
                <a
                  href="https://res.cloudinary.com/dje269eh5/image/upload/v1671718981/resume_cv_wiq064.pdf"
                  download="resume.pdf"
                >
                  <button className=" get-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 img-container">
            <lottie-player
              src="https://lottie.host/63aff3b1-da76-4880-840c-41ec002ae5e7/83ifNfKh27.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Herosection;
