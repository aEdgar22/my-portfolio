import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactStyled } from "./contactStyles";

export const Contact = () => {
  return (
    <ContactStyled id="contact">
      <h2 className="section__title">CONTÁCTAME</h2>

      <div className="contact__container container grid">
        <ContactInfo />
        <ContactForm />

      </div>
    </ContactStyled>
  );
};
