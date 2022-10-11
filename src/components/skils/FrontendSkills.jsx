import React from "react";
import { frontend } from "../../dataProjects/dataSkills";
import { SkillsData } from "./SkillsData";

export const FrontendSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">FRONTEND DEVELOPER</h3>

      <div className="skills__box">
        {frontend.map((data) => {
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
