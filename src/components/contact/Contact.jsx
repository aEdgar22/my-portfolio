import { useAos } from "../../hooks/useAos";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactStyled } from "./contactStyles";

export const Contact = () => {

    useAos(1500)

  return (
    <ContactStyled id="contact" data-aos="fade-up">
      <h2 className="section__title">CONTÁCTAME</h2>

      <div className="contact__container container grid">
        <ContactInfo />
        <ContactForm />

      </div>
    </ContactStyled>
  );
};
