import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FiArrowLeft, FiArrowUpRight, FiLock } from "react-icons/fi";
import { RollText } from "@/components/RollText";
import { ACCENTS, PROJECTS } from "@/components/projects";

// ponytail: case-study copy still lives next to the old Once UI pages; move the folder when (legacy) goes away
const CASES_DIR = path.join(process.cwd(), "src", "app", "(legacy)", "work", "projects");

// optional long-form write-up; projects without an .mdx just show the hero
function readCase(slug: string) {
  const file = path.join(CASES_DIR, `${slug}.mdx`);
  return fs.existsSync(file) ? matter(fs.readFileSync(file, "utf-8")).content : null;
}

// no typography plugin, so the few tags the write-ups use get styled here
const mdx = {
  h2: (p: React.ComponentProps<"h2">) => (
    <h2 className="mt-14 font-display text-3xl font-extrabold tracking-tight md:text-4xl" {...p} />
  ),
  h3: (p: React.ComponentProps<"h3">) => <h3 className="mt-8 font-display text-xl font-bold" {...p} />,
  p: (p: React.ComponentProps<"p">) => <p className="mt-4 text-lg leading-relaxed text-[#3a3a3a]" {...p} />,
  ul: (p: React.ComponentProps<"ul">) => <ul className="mt-4 space-y-3" {...p} />,
  li: (p: React.ComponentProps<"li">) => (
    <li className="relative pl-6 text-lg leading-relaxed text-[#3a3a3a] before:absolute before:left-0 before:font-mono before:text-ink/40 before:content-['→']" {...p} />
  ),
  strong: (p: React.ComponentProps<"strong">) => <strong className="font-semibold text-ink" {...p} />,
  a: (p: React.ComponentProps<"a">) => (
    <a target="_blank" rel="noreferrer" className="font-semibold underline decoration-2 underline-offset-4 hover:decoration-green" {...p} />
  ),
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  return p ? { title: `${p.name} — Edgar De Avila`, description: p.impact } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();

  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const body = readCase(slug);
  const host = p.live ? new URL(p.live).host : `${p.slug}.com`;

  return (
    <main className="px-6 pt-10 pb-28">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-bg px-4 py-1.5 font-mono text-sm shadow-[3px_3px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_var(--color-ink)]"
        >
          <FiArrowLeft /> back to work
        </Link>

        <header className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-xs text-ink/60">
              case_{String(i + 1).padStart(2, "0")}
              {p.sticker && <span className="ml-3 rounded-full border-2 border-ink px-2 py-0.5">{p.sticker}</span>}
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] font-extrabold tracking-tight md:text-8xl">{p.name}</h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-[#3a3a3a]">{p.impact}</p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border-[1.5px] border-ink px-2.5 py-0.5 font-mono text-xs">
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group/roll rounded-full border-2 border-ink bg-green px-5 py-2 font-semibold shadow-[3px_3px_0_var(--color-ink)] transition-[translate,box-shadow] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_var(--color-ink)]"
                >
                  <RollText>Visit live ↗</RollText>
                </a>
              )}
              {p.code ? (
                <a href={p.code} target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink px-5 py-2 font-semibold">
                  Code
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60">
                  <FiLock /> Private repo
                </span>
              )}
            </div>
          </div>
        </header>

        {/* same browser mockup as the card, full width */}
        <div className={`mt-14 rounded-3xl border-2 border-ink p-4 shadow-hard md:p-10 ${ACCENTS[p.accent].bg}`}>
          <div className="overflow-hidden rounded-xl border-2 border-ink bg-bg">
            <div className="flex items-center gap-1.5 border-b-2 border-ink px-3 py-2">
              {[0, 1, 2].map((d) => (
                <span key={d} className="size-2.5 rounded-full border-[1.5px] border-ink" />
              ))}
              <span className="ml-2 truncate rounded-full bg-ink/5 px-3 py-0.5 font-mono text-xs text-ink/60">{host}</span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image src={p.image} alt={`${p.name} screenshot`} fill priority sizes="(min-width: 1152px) 1072px, 100vw" className="object-cover object-left-top" />
            </div>
          </div>
        </div>

        {body && (
          <article className="mx-auto mt-6 max-w-2xl">
            <MDXRemote source={body} components={mdx} />
          </article>
        )}

        <Link
          href={`/work/${next.slug}`}
          className="group mt-24 flex flex-wrap items-end justify-between gap-4 rounded-3xl border-2 border-ink bg-ink p-8 text-bg transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-hard md:p-12"
        >
          <div>
            <p className="font-mono text-xs text-bg/60">next case</p>
            <p className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-6xl">{next.name}</p>
          </div>
          <FiArrowUpRight className="size-10 text-green transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-14" />
        </Link>
      </div>
    </main>
  );
}
