// Shared CTA hover (workada-style): text rolls up and the second line overshoots into place.
// The parent link needs the `group/roll` class (named, so an outer `group` like a card can't trigger it).
export function RollText({ children, hover = children }: { children: React.ReactNode; hover?: React.ReactNode }) {
  return (
    <span className="block h-[1lh] overflow-hidden text-center">
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/roll:-translate-y-1/2 motion-reduce:transition-none">
        <span className="block">{children}</span>
        <span aria-hidden className="block">
          {hover}
        </span>
      </span>
    </span>
  );
}
