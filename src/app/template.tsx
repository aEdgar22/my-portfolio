"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Avatar } from "@/components/Avatar";
import { CURTAIN_OPEN } from "@/components/curtain";
import { PROJECTS } from "@/components/projects";

gsap.registerPlugin(useGSAP);

// root template (not layout) remounts on first load and on every navigation, so the curtain replays each time.
// Litebox-style: two halves + crosshair lines around the face, then the halves split open.
export default function Template({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const path = usePathname();
  // case pages get a pill with the project name under a smaller face; everywhere else just the big face
  const work = PROJECTS.find((p) => path === `/work/${p.slug}`)?.name;

  useGSAP(
    () => {
      const tl = gsap.timeline({ onComplete: () => gsap.set(root.current, { display: "none" }) });
      // the face pops in, glances left/right and blinks
      tl.from("[data-face]", { scale: 0, rotate: -20, duration: 0.5, ease: "back.out(2.5)" })
        .fromTo(work ? "[data-fill]" : [], { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.inOut" }, 0.1)
        .to("[data-pupil]", { x: -30, duration: 0.25, ease: "power2.out" }, 0.4)
        .to("[data-pupil]", { x: 30, duration: 0.3, ease: "power2.inOut" }, 0.7)
        .to("[data-pupil]", { x: 0, duration: 0.2 }, 1)
        .to("[data-eye]", { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.07, yoyo: true, repeat: 1 }, 1.05)
        .to("[data-lines]", { autoAlpha: 0, scale: 0.6, duration: 0.35, ease: "power2.in" })
        .to("[data-top]", { yPercent: -100, duration: 0.9, ease: "power3.inOut" }, CURTAIN_OPEN)
        .to("[data-bottom]", { yPercent: 100, duration: 0.9, ease: "power3.inOut" }, "<");
    },
    { scope: root },
  );

  return (
    <>
      {children}
      {/* rendered in the SSR html so the page never flashes before the curtain; reduced motion skips it */}
      <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 z-[100] motion-reduce:hidden">
        <div data-top className="absolute inset-x-0 top-0 h-[50.5vh] bg-forest" />
        <div data-bottom className="absolute inset-x-0 bottom-0 h-1/2 bg-forest" />
        <div data-lines className="absolute inset-0 grid place-items-center">
          <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-bg/15 ${work ? "h-24" : "h-40 md:h-52"}`} />
          <div className={`absolute inset-y-0 left-1/2 -translate-x-1/2 border-x border-bg/15 ${work ? "w-24" : "w-40 md:w-52"}`} />
          <div
            data-face
            className={`relative grid place-items-center rounded-full border-2 border-ink bg-yellow ${work ? "size-20 shadow-[3px_3px_0_var(--color-ink)]" : "size-32 shadow-[5px_5px_0_var(--color-ink)] md:size-44"}`}
          >
            <Avatar className="w-[78%] text-ink" />
          </div>
          {work && (
            <div className="absolute top-1/2 left-1/2 mt-16 -translate-x-1/2 rounded-full border-2 border-bg/30 px-6 py-1.5 font-mono text-sm whitespace-nowrap text-bg">
              {work}
              <span data-fill className="absolute -inset-0.5 grid place-items-center rounded-full bg-green text-ink [clip-path:inset(0_100%_0_0)]">
                {work}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
