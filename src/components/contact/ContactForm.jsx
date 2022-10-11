import { ContactFormStyled } from "./contactStyles";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <div className="form__group">
        <label htmlFor="name">Tu nombre</label>
        <input className="input__data" type="text" name="name" placeholder="Nombre" />
      </div>
      <div className="form__group">
        <label htmlFor="email">Tu email</label>
        <input className="input__data" type="text" name="email" placeholder="youremail@mail.com" />
      </div>
      <div className="form__group">
        <label htmlFor="mensaje">Qué tienes para decir?</label>
        <textarea className="input__data" name="message" placeholder="Hola..."></textarea>
      </div>
    </ContactFormStyled>
  );
};
