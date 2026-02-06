import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", category: "Frontend", icon: <FaHtml5 /> },
    { name: "CSS", category: "Frontend", icon: <FaCss3Alt /> },
    { name: "JavaScript", category: "Frontend", icon: <FaJs /> },
    { name: "React", category: "Frontend", icon: <FaReact /> },
    { name: "Bootstrap", category: "UI", icon: <FaBootstrap /> },
    { name: "Node.js", category: "Backend", icon: <FaNodeJs /> },
    { name: "MongoDB", category: "Backend", icon: <SiMongodb /> },
  ];

  return (
    <div className="row">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 col-sm-12 my-3"
          style={{ "--i": index }}
        >
          <div className="skill-card shadow-sm">
            <div className="skill-card-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>

            <span className={`skill-badge ${skill.category.toLowerCase()}`}>
              {skill.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
