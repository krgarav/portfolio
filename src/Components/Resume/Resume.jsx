import "./Resume.css";
import { Fragment, useState } from "react";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";
import Projects from "./ResumeSections/Projects";

function Resume() {
  const [education, setEducation] = useState(false);
  const [work, setWork] = useState(false);
  const [skills, setSkills] = useState(true);
  const [projects, setProjects] = useState(false);
  function SetAllFalse() {
    setEducation(false);
    setWork(false);
    setSkills(false);
    setProjects(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <Fragment>
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="heading">Resume</span>
        <span className="subheading">My formal Bio Details</span>
        <div
          className="resume-new-section row "
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-light">
              <span className="icon-span">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="icon-span">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span className="icon-span">
                <i className="fa-sharp fa-solid fa-code"></i>
              </span>
              <span className="icon-span">
                <i className="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  skills === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setSkills, true)}
              >
                Skills
              </span>
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setEducation, true)}
              >
                Education
              </span>
              <span
                className={
                  work === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setWork, true)}
              >
                Trainings
              </span>

              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setProjects, true)}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section ">
            {education === true && <Education />}
            {work === true && <Work />}
            {skills === true && <Skills />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Resume;
