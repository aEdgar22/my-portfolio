import React from "react";
import { useAos } from "../../hooks/useAos";
import { BackendSkills } from "./BackendSkills";
import { FrontendSkills } from "./FrontendSkills";
import { SkillsStyled } from "./skillsStyles";

export const Skills = () => {
  useAos(1500);

  return (
    <SkillsStyled id="skills" data-aos="fade-up">
      <h2 className="section__title">HABILIDADES</h2>

      <div className="skills__container container grid">
        <FrontendSkills />
        <BackendSkills />
      </div>
    </SkillsStyled>
  );
};
