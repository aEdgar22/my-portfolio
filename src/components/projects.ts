// one accent per card; full class strings so Tailwind can see them
export const ACCENTS = {
  green: {
    bg: "bg-green",
    shadow:
      "shadow-[4px_4px_0_var(--color-green)] md:shadow-[6px_6px_0_var(--color-green)] md:hover:shadow-[10px_10px_0_var(--color-green)]",
  },
  yellow: {
    bg: "bg-yellow",
    shadow:
      "shadow-[4px_4px_0_var(--color-yellow)] md:shadow-[6px_6px_0_var(--color-yellow)] md:hover:shadow-[10px_10px_0_var(--color-yellow)]",
  },
  forest: {
    bg: "bg-forest",
    shadow:
      "shadow-[4px_4px_0_var(--color-forest)] md:shadow-[6px_6px_0_var(--color-forest)] md:hover:shadow-[10px_10px_0_var(--color-forest)]",
  },
  // Rentadiario's primary cyan (--btn-primary-bg on rentadiario.com)
  rentadiario: {
    bg: "bg-[#00c7e6]",
    shadow:
      "shadow-[4px_4px_0_#00c7e6] md:shadow-[6px_6px_0_#00c7e6] md:hover:shadow-[10px_10px_0_#00c7e6]",
  },
  // CodSpeed's own brand orange (--color-brand on codspeed.io)
  codspeed: {
    bg: "bg-[#ff621f]",
    shadow:
      "shadow-[4px_4px_0_#ff621f] md:shadow-[6px_6px_0_#ff621f] md:hover:shadow-[10px_10px_0_#ff621f]",
  },
  bone: {
    bg: "bg-[#e6dfcc]",
    shadow:
      "shadow-[4px_4px_0_#e6dfcc] md:shadow-[6px_6px_0_#e6dfcc] md:hover:shadow-[10px_10px_0_#e6dfcc]",
  },
};

export type Project = {
  slug: string;
  name: string;
  impact: string;
  stack: string[];
  image: string;
  accent: keyof typeof ACCENTS;
  live?: string;
  code?: string;
  sticker?: string;
};

// ponytail: hardcoded list, first item is the featured card. Keep it at 4-6.
export const PROJECTS: Project[] = [
  {
    slug: "rentadiario",
    name: "Rentadiario",
    impact:
      "The Colombian Airbnb: booking engine, real-time host calendar and multi-gateway payments with zero double bookings.",
    stack: ["Next.js", "Strapi", "Stripe", "Wompi"],
    image: "/images/projects/rentadiario.png",
    accent: "rentadiario",
    live: "https://rentadiario.com/",
    sticker: "lead frontend",
  },
  // TODO(edgar): your own impact line for these two
  {
    slug: "codspeed",
    name: "CodSpeed",
    impact:
      "Continuous performance testing right in the PR, trusted by teams like Vercel, Meta and Mozilla.",
    stack: ["Next.js", "Tailwind", "GSAP", "Vercel"],
    image: "/images/projects/codspeed.png",
    accent: "codspeed",
    sticker: "fullstack dev",
    live: "https://codspeed.io/",
  },
  {
    slug: "workada",
    name: "Workada",
    impact:
      "Marketplace where professionals get paid to train AI: 1,500+ active contributors, 9M+ tasks a year.",
    stack: ["Next.js", "Sanity", "Tailwind", "GSAP"],
    image: "/images/projects/workada.png",
    accent: "bone",
    sticker: "fullstack dev",
    live: "https://workada.com/",
  },
  {
    slug: "ballersonly",
    name: "BallersOnly",
    impact:
      "Luxury rentals with real-time dynamic pricing and a checkout migrated to high-risk processing.",
    stack: ["React", "Authorize.net", "Stripe"],
    image: "/images/projects/ballers.png",
    accent: "yellow",
    sticker: "fullstack dev",
    live: "https://ballersonly.vip/",
  },
];
