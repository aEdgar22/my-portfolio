import { AboutContainer, AboutStyled } from "./aboutStyles";
import CV from "../../assets/Edgar_De_Avila_Serpa_CV.pdf";
import aboutImg from "../../assets/about.jpeg";
import file from "../../assets/files.svg";


import "aos/dist/aos.css";
import { useAos } from "../../hooks/useAos";

export const About = () => {
  
  useAos(1500)

  return (
    
    <AboutStyled id="about" className="section" data-aos="fade-up">
      <h2 className="section__title">ACERCA DE MÍ</h2>

      <AboutContainer className="container grid">
        <img src={aboutImg} alt="Edgar" className="about__img" />

        <div className="about__data">


          <p className="about__description">
            Vivo en Cartagena, Colombia. Tengo una gran pasión por el desarrollo de aplicaciones y la tecnología.
            Me especializo en el desarrollo <b>FrontEnd</b>, aunque tambien cuento con experiencia 
            en <b>BackEnd</b>. <br /> <br />

            Mis primeros pasos en el desarrollo y la programación fueron en la universidad, donde aprendí 
            los principios de la programación en el lenguaje C++. Al paso de dos años descubrí el desarrollo web, 
            el cual me enganchó de inmediato; Así que decidí enfocar mi carrera a esta rama.  <br /> <br />

            Me gusta estar en constante aprendizaje y crecimiento personal. Al momento de realizar proyectos,
            estoy siempre abierto a recibir feedback, para así mejorar la calidad de los mismos.
          </p>

          <a download="" href={CV} className="button button--flex">
            Descarga mi CV <img src={file} alt="" className="button__icon" />
          </a>
        </div>
      </AboutContainer>
    </AboutStyled>
  );
};
