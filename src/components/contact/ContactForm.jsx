import Swal from "sweetalert2";
import { useForm } from "../../hooks/useFrom";
import { ContactFormStyled } from "./contactStyles";
import send from "../../assets/send.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "animate.css";

export const ContactForm = () => {
  const [isError, setIsError] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formValues;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setIsError(true);
    } else {
      e.preventDefault();

      emailjs.sendForm(
        "service_sfmwp3f",
        "template_p6tvcz5",
        form.current,
        "6Dyq_aNwTZ2zsasxd"
      );

      Swal.fire("Enviado", "Tu correo se ha enviado con éxito", "success");

      reset();
      setIsError(false);
    }
  };

  return (
    <ContactFormStyled ref={form} onSubmit={sendEmail}>
      <div className="form__group">
        <label htmlFor="name">Tu nombre</label>
        <input
          className="input__data"
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Tu email</label>
        <input
          className="input__data"
          type="email"
          name="email"
          placeholder="youremail@mail.com"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <label htmlFor="mensaje">Qué tienes para decir?</label>
        <textarea
          className="input__data"
          name="message"
          placeholder="Hola..."
          value={message}
          onChange={handleInputChange}
        ></textarea>

        <div
          className={
            isError
              ? "error-email isError animate__animated animate__shakeX"
              : "error-email"
          }
        >
          <p>Todos los campos deben estar llenos</p>
        </div>
      </div>

      <button className="button button--flex">
        Enviar <img className="button__icon" src={send} alt="send" />
      </button>
    </ContactFormStyled>
  );
};
