"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Avatar } from "./Avatar";
import { RollText } from "./RollText";
import { CURTAIN_OPEN } from "./curtain";

// ponytail: no Blog link, the blog was removed. Add it back here when it exists.
const LINKS = ["work", "about", "stack"];

export function Navbar() {
  const pill = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [marker, setMarker] = useState({ left: 0, width: 0 });
  const menuBtn = useRef<HTMLButtonElement>(null);
  const menuBtnWidth = useRef(0);

  // drops in with a bounce right after the hero timeline starts
  useGSAP(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(pill.current, { yPercent: -200, duration: 0.9, delay: CURTAIN_OPEN + 0.3, ease: "bounce.out" });
    });
  });

  // auto-hide on scroll down, show on scroll up, shrink once off the top
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // only move the reference point once past the threshold: Lenis scrolls a few px per frame,
      // so comparing frame-to-frame would never cross 6px
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 120);
        lastY = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active link = section crossing the middle of the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...LINKS, "contact"]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  // yellow pill slides behind the active link (CSS transition, no animation lib needed)
  useLayoutEffect(() => {
    const ul = list.current;
    if (!ul) return;
    const measure = () => {
      const a = ul.querySelector<HTMLElement>(`[data-link="${active}"]`);
      // measured against the <ul>: offsetLeft would be relative to each link's own <li> (always 0)
      setMarker(
        a ? { left: a.getBoundingClientRect().left - ul.getBoundingClientRect().left, width: a.offsetWidth } : { left: 0, width: 0 },
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ul);
    return () => ro.disconnect();
  }, [active]);

  // menu button stretches/shrinks to its new label with a wobbly squash
  useLayoutEffect(() => {
    const btn = menuBtn.current;
    if (!btn) return;
    const from = menuBtnWidth.current;
    const to = btn.offsetWidth;
    menuBtnWidth.current = to;
    if (!from || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap
      .timeline()
      .fromTo(btn, { width: from }, { width: to, duration: 0.7, ease: "elastic.out(1.1, 0.4)", clearProps: "width" })
      .fromTo(btn, { scaleY: 0.75, rotate: open ? -4 : 4 }, { scaleY: 1, rotate: 0, duration: 0.6, ease: "elastic.out(1.2, 0.35)" }, 0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 pt-4 transition-transform duration-300 ${
        hidden && !open ? "-translate-y-[150%]" : ""
      }`}
    >
      <div
        ref={pill}
        className={`relative z-10 mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] transition-[padding,background-color] duration-300 ${
          scrolled ? "bg-bg/80 px-3 py-1.5 backdrop-blur-md" : "bg-bg px-4 py-2.5"
        }`}
      >
        <a href="#top" className="group relative flex w-fit items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid size-9 place-items-center rounded-full border-2 border-ink bg-green transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
            <Avatar className="w-[78%] text-ink" />
          </span>
          Edgar
          <span
            role="tooltip"
            className="pointer-events-none absolute top-full left-0 mt-3 rounded-md border-2 border-ink bg-yellow px-2 py-0.5 font-mono text-xs font-normal whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100"
          >
            yep, that&apos;s me with glasses
          </span>
        </a>

        <ul ref={list} className="relative hidden items-center font-mono text-sm md:flex">
          <li
            aria-hidden
            className="absolute inset-y-0 rounded-full border-2 border-ink bg-yellow transition-all duration-300 ease-out"
            style={{ left: marker.left, width: marker.width, opacity: marker.width ? 1 : 0 }}
          />
          {LINKS.map((id) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                data-link={id}
                aria-current={active === id ? "true" : undefined}
                className="group block px-4 py-1.5 transition-transform hover:-translate-y-0.5"
              >
                {/* underline = a plank hinged on its left end. Hover lifts the right side,
                    the word slides down the slope (ease-in = gravity) and tips a bit at the edge */}
                <span className="relative inline-block origin-bottom-left transition-[rotate] duration-200 ease-out group-hover:-rotate-[10deg] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-ink">
                  <span className="inline-block origin-bottom [transition:translate_250ms_ease-out,rotate_200ms_ease-out] group-hover:-translate-x-1/4 group-hover:-rotate-[15deg] group-hover:[transition:translate_300ms_cubic-bezier(0.55,0,1,0.45)_150ms,rotate_300ms_cubic-bezier(0.34,1.56,0.64,1)_420ms] motion-reduce:transition-none">
                    {id}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 flex items-center justify-end gap-2">
          <a
            href="#contact"
            className="group/roll hidden rounded-full border-2 border-ink bg-green px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-ink)] md:inline-block"
          >
            <RollText hover="Let's build ☕">Let&apos;s talk</RollText>
          </a>
          <button
            type="button"
            ref={menuBtn}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full border-2 border-ink bg-green px-4 py-1.5 overflow-hidden font-mono text-xs whitespace-nowrap md:hidden"
          >
            {open ? "close (seen it all)" : "menu"}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 flex flex-col justify-center gap-2 bg-yellow px-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {[...LINKS, "contact"].map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            aria-current={active === id ? "true" : undefined}
            style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
            className={`flex items-center gap-3 font-display text-6xl font-extrabold transition-[translate,opacity] duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* current section: same tilted lime box as "me" in About, plus a mono "you're here" tag */}
            <span
              className={
                active === id ? "-rotate-2 rounded-lg border-2 border-ink bg-green px-3 shadow-[3px_3px_0_var(--color-ink)]" : ""
              }
            >
              {id}
            </span>
            {active === id && <span className="font-mono text-xs font-normal">← you&apos;re here</span>}
          </a>
        ))}
      </nav>
    </header>
  );
}
