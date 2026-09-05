
import React from "react";
import "./Skills.css";
import skillGroups from "./skillsData";

export default function Skills() {
  return (
    <div className="skills-section">

      {/* Intro */}
      <div className="skills-intro">
        <div>
          <span className="skills-eyebrow">
            TECHNICAL EXPERTISE
          </span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            A collection of technologies and tools I use to design,
            develop and maintain modern web applications.
          </p>
        </div>
      </div>

      {/* Skill Groups */}
      <div className="skill-groups">
        {skillGroups.map((group, groupIndex) => (
          <div className="skill-group" key={groupIndex}>

            <div className="skill-group-heading">
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <span className="skill-count">
                {String(group.skills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="skills-grid">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    className="professional-skill-card"
                    key={skill.name}
                    style={{ "--i": index }}
                  >
                    <div className="skill-main">

                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        <Icon />
                      </div>

                      <div className="skill-info">
                        <h4>{skill.name}</h4>

                        <div className="skill-meta">
                          <span>{skill.level}</span>
                          <span>{skill.experience}</span>
                        </div>
                      </div>

                    </div>

                    <div className="skill-progress">
                      <span
                        className={`progress-fill ${skill.level
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

