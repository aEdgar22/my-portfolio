import { Data } from "./Data";
import { HomeContainer, HomeImg, HomeSectionStyled } from "./homeStyles";
import { ScrollDown } from "./ScrollDown";
import { Social } from "./Social";

export const Home = () => {
  return (
    <HomeSectionStyled id="home" className="section">
      <HomeContainer className="grid container">
        <div className="home__content grid">
          <Social />
          <HomeImg /> 
          {/* <div className="home__img"></div> */}
          <Data /> 
        </div>
        <ScrollDown />
      </HomeContainer>
    </HomeSectionStyled>
  );
};
