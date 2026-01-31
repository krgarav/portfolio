import { Fragment } from "react";
import HeadNav from "../../Components/HeadNav/HeadNav";
import Herosection from "../../Components/Herosection/Herosection";
import AboutMe from "../../Components/Aboutme/Aboutme";
import Resume from "../../Components/Resume/Resume";
import ConatctMe from "../../Components/Contactme/Contactme";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { motion, useScroll } from "framer-motion";
import "./portfolio.css";
import Project from "../../Components/Projects/Project";
const Portfolio = () => {
  const { scrollYProgress } = useScroll();
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
      <Testimonial />

      <ConatctMe />
      <Footer />
    </Fragment>
  );
};
export default Portfolio;
