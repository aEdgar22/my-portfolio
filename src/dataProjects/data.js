import imgCounty from "../assets/country-app.png";
import imgScriv from "../assets/Scriv.png";
import imgBatata from "../assets/batata.png";
import fuentePoder from "../assets/fuente_poder.png";

export const data = [
  {
    id: 1,
    title: "Scriv",
    description:
      "scriv, esta aplicacion te permite organizar asuntos ya sean personales, de informacion o del diario vivir personal a través de un archivo de notas.",
    img: imgScriv,
    links: {
      github: "https://github.com/aEdgar22/scriv",
      production: "https://scriv.vercel.app/auth/login",
    },
  },
  {
    id: 2,
    title: "Plaza de Donaciones",
    description:
      "Landing page para visualizar avances de obras, y hacer donaciones para la comunidad Fuente de Poder. Hecho con React.js.",
    img: fuentePoder,
    links: {
      production: "https://pdromoreno7.github.io/church-plaza-donaciones/",
    },
  },
  {
    id: 3,
    title: "Where in the world",
    description:
      "Where in the world, es un buscador de paises que muestra la información de los mismos; su bandera, población, etc. Hecho con React.js.",
    img: imgCounty,
    links: {
      github: "https://github.com/aEdgar22/myCountry-app",
      production: "https://country-app-beige.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Batata - Landing Page",
    description:
      "Landing page para empresa dedicada al intercambio de criptomonedas. Proyecto de maquetación mobile first con Platzi.",
    img: imgBatata,
    links: {
      github: "https://github.com/aEdgar22/Batatabit-main",
      production: "https://batata-bit-lp.vercel.app/",
    },
  },
];
