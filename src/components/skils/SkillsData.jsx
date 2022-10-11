import React from "react";

export const SkillsData = ({ skillImg, skillName }) => {
  return (
    <div className="skills__group">
      <div className="skills__data">
        <h4 className="skill__name">{skillName}</h4>
        <img src={skillImg} alt={skillName} className="skill__img" />
      </div>
    </div>
  );
};
