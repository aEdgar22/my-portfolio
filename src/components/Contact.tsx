"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";
import { RollText } from "./RollText";

const EMAIL = "deavila.e09@gmail.com";

// ponytail: no form, no backend, no paid service. Copy + mailto covers it; add a free form (Web3Forms) if people ask.
export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer id="contact" className="bg-ink px-6 pt-20 pb-10 text-bg">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-full border-2 border-ink bg-green px-3 py-1 font-mono text-xs text-ink shadow-[3px_3px_0_var(--color-bg)]">
          04 / contact
        </span>
        <h2 className="mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl">
          Got an idea?{" "}
          <span className="inline-block -rotate-2 rounded-lg bg-yellow px-3 text-ink">Let&apos;s build it</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg text-bg/75">
          Freelance, full-time or just a question. My inbox is open and I answer fast.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="group inline-flex max-w-full items-center gap-3 rounded-2xl border-2 border-bg bg-bg px-5 py-3 font-display text-xl font-extrabold text-ink shadow-[4px_4px_0_var(--color-green)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-green)] md:text-3xl"
          >
            <span className="truncate">{EMAIL}</span>
            {copied ? <FiCheck className="shrink-0 text-forest" /> : <FiCopy className="shrink-0 opacity-50 group-hover:opacity-100" />}
          </button>
          <span aria-live="polite" className="font-mono text-sm text-green">
            {copied && "copied!"}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group/roll rounded-full border-2 border-bg bg-green px-5 py-2 font-semibold text-ink"
          >
            <RollText>Send an email ↗</RollText>
          </a>
          <a
            href="https://www.linkedin.com/in/edgar-dev"
            target="_blank"
            rel="noreferrer"
            className="group/roll rounded-full border-2 border-bg px-5 py-2 font-semibold transition-colors hover:bg-bg hover:text-ink"
          >
            <RollText>
              <span className="inline-flex items-center gap-2">
                <FiLinkedin /> LinkedIn ↗
              </span>
            </RollText>
          </a>
          <a
            href="https://github.com/aEdgar22"
            target="_blank"
            rel="noreferrer"
            className="group/roll rounded-full border-2 border-bg px-5 py-2 font-semibold transition-colors hover:bg-bg hover:text-ink"
          >
            <RollText>
              <span className="inline-flex items-center gap-2">
                <FiGithub /> GitHub ↗
              </span>
            </RollText>
          </a>
        </div>

        <p className="mt-20 border-t border-bg/15 pt-6 font-mono text-xs text-bg/50">
          © {new Date().getFullYear()} Edgar De Avila
        </p>
      </div>
    </footer>
  );
}
