"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

// Lenis driven by GSAP's ticker so ScrollTrigger and the smooth scroll share one frame loop.
// Created inside the effect (not <ReactLenis>) so StrictMode's mount/unmount/mount can't leave
// the ticker feeding a destroyed instance while the live one blocks the wheel.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // reduced motion: keep native scroll
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // anchors: true makes #work / #contact links glide too (honors scroll-margin-top)
    const lenis = new Lenis({ autoRaf: false, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return children;
}
