import { HomeDataContainer } from "./homeStyles";

import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";

export const Data = () => {
  return (
    <HomeDataContainer>
      <h1 className="home__title">
        Edgar De Avila <img src={hand} alt="hand" className="home__hand"/>
      </h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <p className="home__description">
        I am a dedicated frontend developer passionate about the tech world!
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <img className="button__icon" src={send} alt="send" />
      </a>
    </HomeDataContainer>
  );
};
