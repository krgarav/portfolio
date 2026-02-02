import { Fragment, useState } from "react";
import classes from "./HeadNav.module.css";
import { useNavigate } from "react-router-dom";

const HeadNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const headClass = `navbar px-4 py-3 ${classes.navclass}`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Fragment>
      <nav className={headClass}>
        <div className="container-fluid d-flex align-items-center">
          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className={classes.hamburger}></span>
          </button>

          {/* Brand */}
          <a className="navbar-brand text-white ms-3" href="#home">
            KUMAR GAURAV
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#aboutMe" onClick={closeMenu}>About Me</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
        <a href="#testimonial" onClick={closeMenu}>Testimonial</a>
        <a href="#contactMe" onClick={closeMenu}>Contact Me</a>
      </div>

      {/* Overlay */}
      {isOpen && <div className={classes.overlay} onClick={closeMenu}></div>}
    </Fragment>
  );
};

export default HeadNav;
