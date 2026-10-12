"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import type { IconType } from "react-icons";
import {
  SiClaude,
  SiFigma,
  SiGithubactions,
  SiGithub,
  SiGreensock,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSanity,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbPlugConnected, TbSql } from "react-icons/tb";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

type Tool = { name: string; icon: IconType; color: string; note?: string };
type Group = { title: string; tools: Tool[]; ai?: boolean };

// strongest first in each group; AI goes last and full width (it is the differentiator); `note` = joke tooltip, keep it to 3-4 tools total
const GROUPS: Group[] = [
  {
    title: "Frontend",
    tools: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", note: "the favorite" },
      { name: "React", icon: SiReact, color: "#149eca" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4", note: "can't go back" },
      { name: "GSAP", icon: SiGreensock, color: "#08a83a", note: "for the wow" },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "SQL", icon: TbSql, color: "#161616" },
    ],
  },
  {
    title: "CMS & Payments",
    tools: [
      { name: "Strapi", icon: SiStrapi, color: "#4945ff" },
      { name: "Sanity", icon: SiSanity, color: "#f03e2f" },
      { name: "Stripe", icon: SiStripe, color: "#635bff" },
    ],
  },
  {
    title: "Deploy, CI/CD & Tools",
    tools: [
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
  {
    title: "AI (my co-pilot)",
    ai: true,
    tools: [
      { name: "Claude", icon: SiClaude, color: "#d97757" },
      { name: "Claude Code", icon: SiClaude, color: "#d97757", note: "my pair programmer" },
      { name: "MCP", icon: TbPlugConnected, color: "#161616" },
    ],
  },
];

// stable "random" tilt per sticker between -3° and 3° (Math.random would mismatch SSR)
const tilt = (i: number) => `${((i * 37) % 7) - 3}deg`;

export function Stack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(reveal, { autoAlpha: 0, y: 30 });
        ScrollTrigger.batch(reveal, {
          start: "top bottom-=60",
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }),
        });

        // stickers drop in and bounce, like they're being slapped onto the card
        for (const card of gsap.utils.toArray<HTMLElement>("[data-group]")) {
          gsap.from(card.querySelectorAll("[data-sticker]"), {
            y: -90,
            autoAlpha: 0,
            rotate: () => gsap.utils.random(-25, 25),
            duration: 0.8,
            stagger: 0.07,
            ease: "bounce.out",
            scrollTrigger: { trigger: card, start: "top bottom-=80", once: true },
          });
        }
      });

      // drag them around inside their card; mouse only, so touch keeps scrolling the page
      mm.add("(pointer: fine)", () => {
        for (const card of gsap.utils.toArray<HTMLElement>("[data-group]")) {
          Draggable.create(card.querySelectorAll("[data-sticker]"), {
            bounds: card,
            zIndexBoost: true,
          });
        }
      });
    },
    { scope: root },
  );

  let n = 0;

  return (
    <>
      {/* wavy edge from bone (About) into yellow */}
      <svg aria-hidden viewBox="0 0 1440 48" preserveAspectRatio="none" className="block h-8 w-full md:h-12">
        <path d="M0 24 Q90 0 180 24 T360 24 T540 24 T720 24 T900 24 T1080 24 T1260 24 T1440 24 V48 H0Z" fill="var(--color-yellow)" />
        <path
          d="M0 24 Q90 0 180 24 T360 24 T540 24 T720 24 T900 24 T1080 24 T1260 24 T1440 24"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <section ref={root} id="stack" className="relative -mt-px bg-yellow px-6 pt-16 pb-28">
        <div className="mx-auto max-w-6xl">
          <span
            data-reveal
            className="inline-block rounded-full border-2 border-ink bg-bg px-3 py-1 font-mono text-xs shadow-[3px_3px_0_var(--color-ink)]"
          >
            03 / stack
          </span>
          <h2 data-reveal className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl">
            Tools I{" "}
            <span className="inline-block -rotate-2 rounded-lg border-2 border-ink bg-green px-3">reach for</span>
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg text-[#3a3a3a]">
            Sorted by role, not by logo count. <span className="hidden md:inline">Go ahead, drag them around.</span>
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {GROUPS.map((g) => {
              const card = (
                <div
                  data-group
                  className={`relative h-full rounded-3xl border-2 border-ink p-6 md:p-8 ${
                    g.ai ? "bg-forest text-bg" : "bg-bg shadow-[4px_4px_0_var(--color-ink)] md:shadow-hard"
                  }`}
                >
                  <h3 className="font-mono text-sm">
                    <span className={g.ai ? "text-green" : "text-ink/50"}>┌ </span>
                    {g.title}                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-4">
                    {g.tools.map((t) => {
                      const r = tilt(n++);
                      return (
                        <li
                          key={t.name}
                          data-sticker
                          style={{ "--r": r } as React.CSSProperties}
                          className={`group/s relative inline-flex cursor-grab touch-pan-y items-center gap-2.5 rounded-[14px] border-2 border-ink bg-bg font-semibold text-ink shadow-[2px_2px_0_var(--color-ink)] transition-[rotate,translate,box-shadow] duration-200 select-none rotate-(--r) hover:-translate-y-1 hover:rotate-[calc(var(--r)*-1)] hover:shadow-[5px_5px_0_var(--color-ink)] active:cursor-grabbing md:shadow-[3px_3px_0_var(--color-ink)] ${
                            g.ai ? "px-4 py-3 text-lg" : "px-3 py-2"
                          }`}
                        >
                          <t.icon aria-hidden className={g.ai ? "size-8" : "size-6"} style={{ color: t.color }} />
                          {t.name}
                          {t.note && (
                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-90 rounded-lg border-2 border-ink bg-ink px-2 py-1 font-mono text-xs whitespace-nowrap text-bg opacity-0 transition group-hover/s:scale-100 group-hover/s:opacity-100">
                              {t.note}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );

              // AI card: slow moving gradient border so it stands out without shouting
              return g.ai ? (
                <div
                  key={g.title}
                  data-reveal
                  className="animate-shine rounded-[1.65rem] md:col-span-2 bg-[linear-gradient(90deg,var(--color-green),var(--color-yellow),var(--color-bg),var(--color-green))] bg-[length:300%_100%] p-[3px] shadow-[4px_4px_0_var(--color-ink)] motion-reduce:animate-none md:shadow-hard"
                >
                  {card}
                </div>
              ) : (
                <div key={g.title} data-reveal>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
