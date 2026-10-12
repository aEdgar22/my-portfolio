"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar } from "./Avatar";
import { Marquee } from "./Marquee";
import { RollText } from "./RollText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CHIPS = ["Colombia", "Tinto-powered", "AI First", "ES / EN", "Open to work"];

const FACTS: [string, string][] = [
  ["coffee_per_day", "too many"],
  ["favorite_tool", "whatever saves me time"],
  ["bugs_introduced", "0 (lie)"],
  ["prompts_today", "lost count"],
];

// easter egg: each click on the avatar says the next line
const QUOTES = ["it works on my machine ✨", "one more prompt…", "¿un tintico? ☕", "ship it! 🚀", "ok, now I review the AI's code"];

// floating stickers around the photo; speed = how far they drift on scroll (parallax)
const STICKERS = [
  { label: "☕", className: "-top-4 -left-3 size-16 bg-bg text-3xl", speed: 60 },
  { label: "</>", className: "top-1/3 -right-3 size-14 bg-green font-mono md:-right-6", speed: -40 },
  { label: "✦", className: "-right-3 -bottom-6 size-14 bg-yellow", speed: 90 },
];

// lime marker under a key word, drawn left → right when it scrolls in (same family as the hero strike)
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span data-hl className="absolute inset-x-[-0.15em] bottom-[0.18em] -z-10 h-[0.6em] origin-left -rotate-1 rounded-sm bg-green" />
      {children}
    </span>
  );
}

export function About() {
  const root = useRef<HTMLElement>(null);
  const bubble = useRef<HTMLDivElement>(null);
  const [quote, setQuote] = useState(-1);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(reveal, { autoAlpha: 0, y: 30 });
        ScrollTrigger.batch(reveal, {
          // near the viewport bottom, so items at the very end of the page still fire
          start: "top bottom-=60",
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }),
        });

        gsap.from("[data-photo]", {
          scale: 0.6,
          rotate: -18,
          autoAlpha: 0,
          duration: 1.1,
          ease: "elastic.out(1, 0.55)",
          scrollTrigger: { trigger: "[data-photo]", start: "top 80%", once: true },
        });

        for (const hl of gsap.utils.toArray<HTMLElement>("[data-hl]")) {
          gsap.from(hl, {
            scaleX: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.4,
            scrollTrigger: { trigger: hl, start: "top 85%", once: true },
          });
        }

        // smaller drift on phones so the stickers stay near their corners
        const drift = window.innerWidth < 768 ? -0.4 : -1;
        for (const el of gsap.utils.toArray<HTMLElement>("[data-speed]")) {
          gsap.to(el, {
            y: Number(el.dataset.speed) * drift,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    },
    { scope: root },
  );

  // wink on hover: squash the right eye for a beat
  const { contextSafe } = useGSAP({ scope: root });
  const wink = contextSafe(() => {
    const eyes = gsap.utils.toArray<SVGElement>("[data-photo] [data-eye]");
    gsap.to(eyes[1], { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.1, yoyo: true, repeat: 1 });
  });

  const talk = contextSafe(() => {
    setQuote((q) => (q + 1) % QUOTES.length);
    gsap.fromTo(bubble.current, { scale: 0, rotate: -10 }, { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(3)" });
  });

  return (
    <>
      <Marquee flip />

      <section ref={root} id="about" className="relative overflow-x-clip px-6 pt-16 pb-28">
        <div className="mx-auto max-w-6xl">
          <span
            data-reveal
            className="inline-block rounded-full border-2 border-ink bg-yellow px-3 py-1 font-mono text-xs shadow-[3px_3px_0_var(--color-ink)]"
          >
            02 / about
          </span>
          <h2 data-reveal className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl">
            A bit about{" "}
            <span className="inline-block -rotate-2 rounded-lg border-2 border-ink bg-green px-3">me</span>
          </h2>

          <div className="mt-16 grid items-center gap-10 md:mt-14 md:grid-cols-[1fr_1.25fr] md:gap-20">
            {/* avatar left (hero has it right), pasted like a polaroid */}
            <div className="relative mx-auto w-full max-w-sm">
              {STICKERS.map((s) => (
                <span
                  key={s.label}
                  data-speed={s.speed}
                  aria-hidden
                  className={`absolute z-10 grid place-items-center rounded-full border-2 border-ink text-xl font-bold shadow-[3px_3px_0_var(--color-ink)] ${s.className}`}
                >
                  {s.label}
                </span>
              ))}

              <div
                ref={bubble}
                aria-live="polite"
                className={`absolute -top-16 right-0 z-20 max-w-[14rem] origin-bottom-left rounded-2xl border-2 border-ink bg-bg px-4 py-2 font-mono text-sm shadow-[3px_3px_0_var(--color-ink)] after:absolute after:-bottom-[9px] after:left-6 after:size-4 after:rotate-45 after:border-r-2 after:border-b-2 after:border-ink after:bg-bg ${quote < 0 ? "invisible" : ""}`}
              >
                {quote >= 0 && QUOTES[quote]}
              </div>

              <button
                type="button"
                data-photo
                onClick={talk}
                onPointerEnter={wink}
                aria-label="Click me, I talk"
                className="block w-full cursor-pointer rounded-3xl border-[3px] border-ink bg-bg p-4 pb-3 shadow-[4px_4px_0_var(--color-ink)] -rotate-2 md:-rotate-3 md:shadow-hard"
              >
                <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl border-2 border-ink bg-yellow">
                  <Avatar smile className="w-[70%] rotate-6 text-ink" />
                </div>
                <p className="mt-3 text-center font-mono text-xs text-ink/70">me, mid-deploy · click me</p>
              </button>
            </div>

            <div>
              <div className="isolate space-y-5 text-lg text-[#3a3a3a] md:text-xl">
                <p data-reveal>
                  I started as a <strong className="text-ink">fullstack developer</strong>, writing every line by hand:
                  booking engines, payment flows, dashboards. Then I found that with <Highlight>AI</Highlight> I could go
                  from prototype to <Highlight>production</Highlight> in a fraction of the time, without giving up judgment
                  or quality.
                </p>
                <p data-reveal>
                  Today I build web products with AI as my co-pilot. I decide what to build and why; it helps me get there
                  faster. From Colombia, drinking tinto and shipping.
                </p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-3">
                {CHIPS.map((chip, i) => (
                  <li
                    key={chip}
                    data-reveal
                    className={`rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold shadow-[2px_2px_0_var(--color-ink)] transition-transform hover:-translate-y-1 ${
                      i % 2 ? "bg-green" : "bg-yellow"
                    }`}
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <div
                data-reveal
                className="mt-8 rounded-2xl border-2 border-ink bg-ink p-5 font-mono text-sm text-bg shadow-[4px_4px_0_var(--color-green)]"
              >
                <p className="mb-3 text-xs text-bg/50">~/edgar/.env</p>
                {FACTS.map(([k, v]) => (
                  <p key={k}>
                    <span className="text-green">&gt;</span> {k}: <span className="text-yellow">&quot;{v}&quot;</span>
                  </p>
                ))}
              </div>

              {/* ponytail: LinkedIn until there's a CV PDF in /public, then swap for "Download CV" */}
              <a
                data-reveal
                href="https://www.linkedin.com/in/edgar-dev/"
                target="_blank"
                rel="noreferrer"
                className="group/roll mt-8 inline-block rounded-full border-2 border-ink bg-green px-6 py-3 font-semibold shadow-[3px_3px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-ink)]"
              >
                <RollText>More on LinkedIn ↗</RollText>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
