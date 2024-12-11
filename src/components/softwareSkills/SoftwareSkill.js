import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <img 
                  src={"https://static-00.iconduck.com/assets.00/c-original-icon-1788x2048-6b74oi6m.png"}
                  alt={skills.skillName} 
                  className="software-skill-image"
                  style={{ width: '40px', height: '40px' }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
