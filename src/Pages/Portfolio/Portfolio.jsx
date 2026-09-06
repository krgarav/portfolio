import { Fragment, useEffect } from "react";
import HeadNav from "../../Components/HeadNav/HeadNav";
import Herosection from "../../Components/Herosection/Herosection";
import AboutMe from "../../Components/Aboutme/Aboutme";
import Resume from "../../Components/Resume/Resume";
import ConatctMe from "../../Components/Contactme/Contactme";
import Footer from "../../Components/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import "./portfolio.css";
import Project from "../../Components/Projects/Project";
import Testimonial from "../../Components/Testimonial/Testimonial"
const Portfolio = () => {
  const { scrollYProgress } = useScroll();

   useEffect(() => {
    const sendMail = async () => {
      try {
        const response = await fetch(
          "https://ldabxpaslwyxkgmszk6tl2eyjm0vbhek.lambda-url.ap-south-1.on.aws/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Aritra",
              email: "aritra@example.com",
              phone: "9876543210",
              message: "Hello from React!",
            }),
          }
        );

        const data = await response.json();

        console.log("Lambda response:", data);
      } catch (error) {
        console.error("Error calling Lambda:", error);
      }
    };

    sendMail();
  }, []);

  return (
    <Fragment>
      <motion.div
        id="motion-id"
        className="progress-bars"
        style={{ scaleX: scrollYProgress }}
      />
      <HeadNav />
      <Herosection />
      <AboutMe />
      <Resume />
      <Project />
      {/* <Testimonial /> */}

      <ConatctMe />
      <Footer />
    </Fragment>
  );
};
export default Portfolio;
