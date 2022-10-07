import { AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

import { HomeSocialContainer } from "./homeStyles";
import { SocialIcon } from "./SocialIcon";

export const Social = () => {
  return (
    <HomeSocialContainer>

      <SocialIcon href='https://www.instagram.com/e__antonio/'>
        <AiOutlineInstagram />
      </SocialIcon>

      <SocialIcon href='https://github.com/aEdgar22'>
        <AiOutlineGithub />
      </SocialIcon>

      <SocialIcon href='https://www.linkedin.com/in/edgar-de-avila-serpa-b95096249/'>
        <AiOutlineLinkedin />
      </SocialIcon>

    </HomeSocialContainer>
  );
};
