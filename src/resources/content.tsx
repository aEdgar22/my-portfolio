import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Edgar",
  lastName: "De Avila",
  // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
  name: `Edgar De Avila`,
  role: "Frontend Engineer",
  avatar: "/images/avatar.jpg",
  email: "deavila.e09@gmail.com",
  location: "America/Bogota", 
  languages: ["Spanish", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Connect with {person.firstName}</>,
  description: <>Interested in working together? Let's talk about Frontend Architecture, UX, and Product Development.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aEdgar22", 
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/edgar-dev", 
    essential: true,
  },
/*   {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  }, */
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  // CAMBIO CLAVE: Generalizamos para mostrar capacidad técnica global
  headline: <>Crafting high-performance web applications & digital products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Selected Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Engineering Highlights
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Edgar, a <Text as="span" size="xl" weight="strong">Frontend Engineer</Text> specialized in the JavaScript ecosystem. <br /> I translate complex business requirements into high-quality, user-centric web solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:deavila.e09@gmail.com", // Ajustado a mailto ya que no es un link de agenda
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Frontend Engineer based in Colombia with over 4 years of experience building production-ready software. 
        I specialize in <strong>Software Architecture</strong> and <strong>Product Logic</strong> ensuring that applications 
        are not only visually appealing but also robust and scalable. While I have deep expertise in high-transaction 
        platforms (Fintech/Proptech), my core strength lies in solving complex engineering challenges with modern web technologies.
      </>
    ),
  },
work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "Illuminato Live (Ballersonly.vip)",
      timeframe: "Oct 2023 - Dec 2023",
      role: "Frontend Consultant",
      achievements: [
        // ENLACE AÑADIDO AQUÍ COMO PRIMER PUNTO
        <>
          🔗 Live Platform:{" "}
          {/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
          <a
            href="https://ballersonly.vip/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            ballersonly.vip
          </a>
        </>,
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        // biome-ignore lint/complexity/noUselessFragments: <explanation>
                <>
          Developed the logic and UI for a high-end web platform. Architected a
          dynamic pricing engine that calculates quotes based on complex
          variables (seasonality, user input).
        </>,
        <>
          Led the critical migration of payment gateways from{" "}
          {/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
          <strong>Stripe</strong> to <strong>Authorize.net</strong>,
          demonstrating flexibility in adapting to changing business needs.
        </>,
      ],
      images: [
        {
          src: "/images/projects/ballers-cover.webp",
          alt: "BallersOnly UI",
          width: 15,
          height: 9,
        },
      ],
    },
    {
      company: "Rentadiario (Rentadiario.com)",
      timeframe: "2020 - 2023",
      role: "Frontend Developer",
      achievements: [
        // ENLACE AÑADIDO AQUÍ COMO PRIMER PUNTO
        <>
          🔗 Live Platform:{" "}
          {/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
          <a
            href="https://rentadiario.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            rentadiario.com
          </a>
        </>,
        <>
          Engineered a custom{" "}
          {/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
          <strong>Real-time Scheduling System</strong> from scratch, handling
          availability logic, state management, and synchronization for
          thousands of data points.
        </>,
        <>
          Integrated a robust ecosystem of 3rd party APIs including{" "}
          {/* biome-ignore lint/correctness/useJsxKeyInIterable: <explanation> */}
          <strong>Payment Processors & Headless CMS</strong>, improving the
          platform's scalability and revenue capabilities.
        </>,
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        // biome-ignore lint/complexity/noUselessFragments: <explanation>
        <>
          Collaborated closely with Marketing and Product teams to act as a
          bridge between technical code and user-facing features.
        </>,
      ],
      images: [
        {
          src: "/images/projects/rd-cover.webp",
          alt: "Rentadiario UI",
          width: 15,
          height: 9,
        },
      ],
    },
  ],
},
studies: {
    display: true, 
    title: "Education",
    institutions: [
      {
        name: "Computer Engineering (7 Semesters)", 
        description: <>Strong foundation in software fundamentals and logic.</>,
      },
      {
        name: "Self-Taught & Continuous Learning", 
        description: <>Focus on Modern Web Architecture, React Ecosystem, and UX Patterns.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Core",
        description: (
          <>Building responsive, accessible, and performant applications.</>
        ),
        tags: [
          {
            name: "React.js",
            icon: "react", 
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript", 
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind", 
          },
        ],
        images: [],
      },
      {
        title: "Backend & Tools", // Cambiado de "Integrations" a algo más amplio
        description: (
          <>Tools and integrations used to power dynamic applications.</>
        ),
        tags: [
          {
            name: "Stripe/Payments",
            icon: "stripe", 
          },
          {
            name: "Headless CMS", // Más general que solo Strapi
            icon: "strapi", 
          },
          {
            name: "Git/Github",
            icon: "github", 
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Engineering & Product",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [], 
};

export { person, social, newsletter, home, about, blog, work, gallery };