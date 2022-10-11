import React from "react";
import { backend } from "../../dataProjects/dataSkills";
import { SkillsData } from "./SkillsData";

export const BackendSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">BACKEND DEVELOPER</h3>

      <div className="skills__box">
        {backend.map((data) => {
          return (
            <SkillsData
              key={data.id}
              skillName={data.skill}
              skillImg={data.img}
            />
          );
        })}
      </div>
    </div>
  );
};
