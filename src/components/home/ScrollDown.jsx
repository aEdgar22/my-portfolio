import scrollButton from "../../assets/scroll.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

export const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <img src={scrollButton} alt="" />
      <span className="scroll__name">Scroll Down</span>
      <AiOutlineArrowDown className="home__scroll-arrow wheel" />

      </a>
    </div>
  );
};
