"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Avatar } from "./Avatar";
import { RollText } from "./RollText";
import { CURTAIN_OPEN } from "./curtain";

gsap.registerPlugin(useGSAP, SplitText, DrawSVGPlugin);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root.current, { autoAlpha: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(root.current, { autoAlpha: 1 });
        const split = SplitText.create("[data-title]", { type: "chars", mask: "chars" });

        gsap
          .timeline({ defaults: { ease: "power3.out" }, delay: CURTAIN_OPEN })
          .from("[data-avatar]", { scale: 0, rotate: -20, duration: 1.2, ease: "elastic.out(1, 0.5)" }, 0.2)
          .from("[data-badge]", { y: -20, autoAlpha: 0, duration: 0.5 }, 0)
          .from(split.chars, { yPercent: 110, rotate: 8, stagger: 0.035, duration: 0.7 }, 0.1)
          .from("[data-marker]", { scaleX: 0, duration: 0.5 }, "-=0.3")
          .from("[data-old-role]", { autoAlpha: 0, y: 16, duration: 0.4 })
          // the "crossing out" moment: two quick hand-drawn passes, then the old role fades
          .from("[data-strike] g:first-child path", { drawSVG: 0, duration: 0.3, ease: "power1.inOut" }, "+=0.3")
          .from("[data-strike] g:last-child path", { drawSVG: "100% 100%", duration: 0.3, ease: "power1.inOut" })
          .to("[data-old-text]", { color: "#8a8a8a", duration: 0.3 }, "<")
          .from("[data-sticker]", { scale: 0, rotate: -40, autoAlpha: 0, duration: 0.7, ease: "back.out(3)" }, "<")
          .from("[data-copy]", { autoAlpha: 0, y: 16, duration: 0.5 }, "-=0.3")
          .from("[data-cta]", { autoAlpha: 0, y: 16, stagger: 0.08, duration: 0.5 }, "-=0.3");

        gsap
          .timeline({ repeat: -1, repeatDelay: 3, delay: 2.5 })
          .to("[data-eye]", { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.08, yoyo: true, repeat: 1 });

        gsap.to("[data-float]", { y: -12, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

        const rot = gsap.quickTo("[data-head]", "rotation", { duration: 0.8, ease: "power3" });
        const pupils = gsap.utils.toArray<SVGGElement>("[data-pupil]").map((el) => ({
          el,
          x: gsap.quickTo(el, "x", { duration: 0.3, ease: "power3" }),
          y: gsap.quickTo(el, "y", { duration: 0.3, ease: "power3" }),
        }));
        const MAX = 34; // svg units a pupil can travel before touching the lens rim

        const onMove = (e: PointerEvent) => {
          rot((e.clientX / window.innerWidth - 0.5) * 6);
          for (const p of pupils) {
            const r = p.el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            const dist = Math.hypot(dx, dy) || 1;
            // full deflection once the cursor is ~200px away, softer when it's close to the eye
            const k = (Math.min(dist / 200, 1) * MAX) / dist;
            p.x(dx * k);
            p.y(dy * k);
          }
        };
        window.addEventListener("pointermove", onMove);

        return () => {
          window.removeEventListener("pointermove", onMove);
          split.revert();
        };
      });
    },
    { scope: root },
  );

  return (
    // invisible until GSAP sets initial states, avoids a flash of the final layout
    <section ref={root} id="top" className="invisible grid place-items-center px-6 pt-36 pb-24 md:min-h-svh md:pt-28 md:pb-16">
      <div className="grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.3fr_1fr] md:gap-10 lg:gap-16">
        <div className="flex flex-col items-start">
          {/* badge left, avatar right (mobile only): the avatar keeps its own space in the flow so it never covers
              the name; on very narrow screens it wraps below the badge, still right-aligned */}
          <div className="flex w-full flex-wrap items-center gap-3">
            <span
              data-badge
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-3 py-1 font-mono text-xs shadow-[3px_3px_0_var(--color-ink)]"
            >
              <span className="size-2 animate-pulse rounded-full bg-forest" />
              status: shipping with AI
            </span>
            <div
              data-avatar
              className="ml-auto size-[clamp(72px,22vw,104px)] shrink-0 rounded-full border-2 border-ink bg-green shadow-[3px_3px_0_var(--color-ink)] md:hidden"
            >
              <div data-float className="grid size-full place-items-center">
                <Avatar className="w-[72%] text-ink" />
              </div>
            </div>
          </div>

          <h1
            data-title
            className="isolate mt-6 font-display text-6xl leading-[0.95] font-extrabold tracking-tight max-md:mt-4 md:text-[clamp(3.5rem,7vw,5rem)] lg:text-8xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span
                data-marker
                className="absolute inset-x-[-0.1em] bottom-[0.08em] -z-10 h-[0.4em] origin-left -rotate-1 bg-green"
              />
              Edgar
            </span>
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 font-display lg:mt-8 lg:gap-y-8 font-bold">
            <span data-old-role className="relative text-3xl md:whitespace-nowrap lg:text-5xl">
              <span className="sr-only">formerly </span>
              <span data-old-text>Fullstack Developer</span>
              {/* thin box centered on the x-height so the strokes cross the letters, not the baseline */}
              <svg
                data-strike
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-[-3%] top-[48%] h-[0.35em] w-[106%] -translate-y-1/2 overflow-visible"
                aria-hidden
              >
                {["M4 12C70 4 150 16 210 7S280 9 296 5", "M10 15C90 9 180 17 292 11"].map((d) => (
                  <g key={d}>
                    <path d={d} fill="none" stroke="var(--color-green)" strokeLinecap="round" className="[stroke-width:2.5px] md:[stroke-width:4px]" vectorEffect="non-scaling-stroke" />
                  </g>
                ))}
              </svg>
            </span>
            <span
              data-sticker
              className="inline-block -rotate-2 rounded-xl border-[3px] border-ink bg-yellow px-4 py-1 text-2xl shadow-[4px_4px_0_var(--color-ink)] md:shadow-hard lg:text-4xl"
            >
              AI First Developer
            </span>
          </p>

          <p data-copy className="mt-5 max-w-md text-lg text-pretty lg:mt-8 text-[#3a3a3a] md:text-xl">
            I build web products with AI as my co&#8209;pilot, from prototype to production.
          </p>

          <div className="mt-6 grid w-full grid-cols-2 gap-3 md:flex lg:mt-8 md:w-auto md:gap-4">
            <a
              data-cta
              href="#work"
              className="group/roll rounded-full border-2 border-ink bg-green px-4 py-3 md:px-6 font-semibold shadow-[3px_3px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-ink)]"
            >
              <RollText>View projects</RollText>
            </a>
            <a
              data-cta
              href="/Edgar_De_Avila_FullStack_Engineer.pdf"
              download
              className="group/roll rounded-full border-2 border-ink bg-ink px-4 py-3 md:px-6 font-semibold text-bg"
            >
              <RollText>Download CV ↓</RollText>
            </a>
          </div>
        </div>

        <div data-avatar className="relative mx-auto aspect-square max-md:hidden w-full max-w-sm">
          <div className="absolute inset-0 rounded-full border-[3px] border-ink bg-green shadow-hard" />
          <div data-float className="absolute inset-0 grid place-items-center">
            <div data-head className="w-[72%]">
              <Avatar className="w-full text-ink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
