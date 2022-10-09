import React from "react";
import { AboutContainer, AboutStyled } from "./aboutStyles";
import CV from "../../assets/Edgar_De_Avila_Serpa_CV.pdf";
import aboutImg from "../../assets/about.jpeg";
import file from "../../assets/files.svg";

/* import { Info } from "./Info"; */

export const About = () => {
  return (
    <AboutStyled className="section">
      <h2 className="section__title">Acerca de mí</h2>

      <AboutContainer className="container grid">
        <img src={aboutImg} alt="Edgar" className="about__img" />

        <div className="about__data">
        {/*   <Info /> */}

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi
            voluptatibus nisi explicabo ab dignissimos perspiciatis officia
            necessitatibus voluptatem amet rem ullam aut atque harum animi ipsum
            ad, aspernatur laudantium! Ad eligendi ullam officia corrupti
            praesentium expedita tenetur rem magnam, earum quae similique
            laboriosam pariatur nulla mollitia quas modi vitae magni! Nostrum
          </p>

          <a download="" href={CV} className="button button--flex">
            Descarga mi CV <img src={file} alt="" className="button__icon" />
          </a>
        </div>
      </AboutContainer>
    </AboutStyled>
  );
};
