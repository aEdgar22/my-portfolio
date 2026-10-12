"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { Marquee } from "./Marquee";
import { RollText } from "./RollText";
import { ACCENTS, PROJECTS, type Project } from "./projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Work() {
  const root = useRef<HTMLElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(reveal, { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch(reveal, {
          start: "top 85%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power3.out" }),
        });
      });

      // over cards the native cursor is hidden and this "view ↗" pill IS the cursor (mouse only)
      mm.add("(pointer: fine)", () => {
        const el = cursor.current;
        // starts `invisible` in CSS so it never flashes at 0,0 before GSAP runs
        gsap.set(el, { scale: 0, autoAlpha: 0 });
        const x = gsap.quickTo(el, "x", { duration: 0.15, ease: "power3" });
        const y = gsap.quickTo(el, "y", { duration: 0.15, ease: "power3" });
        let px = -1;
        let py = -1;
        // re-checked on scroll too, cards slide under a still mouse with Lenis
        const sync = () => {
          const target = document.elementFromPoint(px, py);
          const show = !!target?.closest("[data-card]") && !target.closest("[data-action]");
          gsap.to(el, {
            scale: show ? 1 : 0,
            autoAlpha: show ? 1 : 0,
            duration: 0.25,
            ease: "back.out(2)",
            overwrite: "auto",
          });
        };
        const onMove = (e: PointerEvent) => {
          px = e.clientX;
          py = e.clientY;
          x(px);
          y(py);
          sync();
        };
        window.addEventListener("pointermove", onMove);
        window.addEventListener("scroll", sync, { passive: true });
        return () => {
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("scroll", sync);
        };
      });
    },
    { scope: root },
  );

  const [featured, ...rest] = PROJECTS;

  return (
    <>
      <Marquee />

      <section ref={root} id="work" className="relative bg-ink px-6 pt-16 pb-28 text-bg">
        <div className="mx-auto max-w-6xl">
          <span
            data-reveal
            className="inline-block rounded-full border-2 border-ink bg-yellow px-3 py-1 font-mono text-xs text-ink shadow-[3px_3px_0_var(--color-bg)]"
          >
            01 / work
          </span>
          <h2
            data-reveal
            className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl"
          >
            Things I&apos;ve{" "}
            <span className="inline-block -rotate-2 rounded-lg bg-green px-3 text-ink">
              shipped
            </span>
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg text-bg/75">
            Client work running in production. Real users, real payments, real deadlines.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <Card project={featured} index={0} featured />
            {rest.map((p, i) => (
              <Card key={p.slug} project={p} index={i + 1} />
            ))}
            {/* fills the last grid slot when the non-featured count is odd */}
            {rest.length % 2 === 1 && (
              <a
                data-reveal
                href="#contact"
                className="group grid min-h-64 place-items-center rounded-3xl border-2 border-dashed border-bg/40 p-8 text-center transition-colors hover:border-green"
              >
                <div>
                  <p className="font-mono text-xs text-bg/60">
                    case_{String(PROJECTS.length + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-3xl font-extrabold">Your project here?</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-green">
                    Let&apos;s build it{" "}
                    <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>

        <div
          ref={cursor}
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-50 invisible hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-green px-3 py-1 font-mono text-sm font-semibold text-ink [@media(pointer:fine)]:block"
        >
          view ↗
        </div>
      </section>
    </>
  );
}

function Card({
  project: p,
  index,
  featured,
}: { project: Project; index: number; featured?: boolean }) {
  const host = p.live ? new URL(p.live).host : `${p.slug}.com`;

  return (
    <article
      data-reveal
      data-card
      className={`group relative grid rounded-3xl [@media(pointer:fine)]:cursor-none border-2 border-ink bg-bg text-ink transition-[translate,rotate,box-shadow] duration-250 md:hover:-translate-x-[3px] md:hover:-translate-y-[3px] md:hover:-rotate-[0.5deg] ${ACCENTS[p.accent].shadow} ${featured ? "md:col-span-2 md:grid-cols-[1.4fr_1fr]" : ""}`}
    >
      {p.sticker && (
        <span className="absolute -top-3 -right-3 z-10 rotate-6 rounded-full border-2 border-ink bg-bg px-3 py-1 font-mono text-xs shadow-[2px_2px_0_var(--color-ink)]">
          {p.sticker}
        </span>
      )}

      {/* browser mockup on the card's accent color */}
      <div
        className={`${ACCENTS[p.accent].bg} rounded-t-[22px] p-5 md:p-8 ${featured ? "md:rounded-l-[22px] md:rounded-tr-none" : ""}`}
      >
        <div className="overflow-hidden rounded-xl border-2 border-ink bg-bg">
          <div className="flex items-center gap-1.5 border-b-2 border-ink px-3 py-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2.5 rounded-full border-[1.5px] border-ink" />
            ))}
            <span className="ml-2 truncate rounded-full bg-ink/5 px-3 py-0.5 font-mono text-[10px] text-ink/60">
              {host}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={p.image}
              alt={`${p.name} screenshot`}
              fill
              sizes={
                featured ? "(min-width: 768px) 640px, 100vw" : "(min-width: 768px) 560px, 100vw"
              }
              className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-4 p-6 md:p-8 ${featured ? "md:justify-center" : ""}`}>
        <p className="font-mono text-xs text-ink/60">case_{String(index + 1).padStart(2, "0")}</p>
        <h3
          className={`font-display font-extrabold tracking-tight ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}
        >
          {/* stretched link: the whole card opens the case study, the buttons below sit on top */}
          <a
            href={`/work/${p.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl [@media(pointer:fine)]:cursor-none"
          >
            {p.name}
          </a>
        </h3>
        <p className="text-[#3a3a3a]">{p.impact}</p>
        {p.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((s) => (
              <li
                key={s}
                className="rounded-full border-[1.5px] border-ink px-2.5 py-0.5 font-mono text-xs"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {p.live && (
            <a
              data-action
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="group/roll relative z-10 rounded-full border-2 border-ink bg-green px-4 py-1.5 text-sm font-semibold shadow-[2px_2px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_var(--color-ink)]"
            >
              <RollText>Live ↗</RollText>
            </a>
          )}
          {p.code ? (
            <a
              data-action
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold"
            >
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60">
              <FiLock /> Private repo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
