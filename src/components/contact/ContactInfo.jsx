import React from "react";
import { ContactInfoItem } from "./ContactInfoItem";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const ContactInfo = () => {
  return (
    <div className="contact__content">
      <ContactInfoItem
        href="https://www.linkedin.com/in/edgar-de-avila-serpa-b95096249/"
        Icon={AiOutlineLinkedin}
        data='Edgar De Avila Serpa'
      />
         <ContactInfoItem
        href="https://www.linkedin.com/in/edgar-de-avila-serpa-b95096249/"
        Icon={AiOutlineInstagram}
        data='@e__antonio'
      />
         <ContactInfoItem
        href="https://www.linkedin.com/in/edgar-de-avila-serpa-b95096249/"
        Icon={AiOutlineGithub}
        data='aEdgar22'
      />
    </div>
  );
};
