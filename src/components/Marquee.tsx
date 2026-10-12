const PHRASES = [
  "shipping with AI",
  "prompt → prototype → prod",
  "fullstack, frontend-obsessed",
  "Next.js enjoyer",
  "pixel-perfect, AI-assisted",
  "from Figma to deploy",
  "ctrl+z is my co-pilot's co-pilot",
  "open to new projects",
];

// Tilted lime strip used as the divider between sections. The background is split in two
// so the rotated corners blend into both neighbours. `flip` = dark above, bone below.
export function Marquee({ flip }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`overflow-hidden py-6 ${
        flip
          ? "bg-[linear-gradient(var(--color-ink)_50%,var(--color-bg)_50%)]"
          : "bg-[linear-gradient(var(--color-bg)_50%,var(--color-ink)_50%)]"
      }`}
    >
      <div className={`-mx-[5%] overflow-hidden border-y-2 border-ink bg-green py-3 ${flip ? "rotate-2" : "-rotate-2"}`}>
        <div
          className={`flex w-max animate-marquee font-mono text-lg font-semibold motion-reduce:animate-none ${
            flip ? "[animation-direction:reverse]" : ""
          }`}
        >
          {[0, 1].map((i) => (
            <span key={i} className="flex">
              {PHRASES.map((phrase) => (
                <span key={phrase} className="px-4">
                  {phrase} ✦
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
