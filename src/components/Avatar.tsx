// Same drawing as src/app/icon.svg, split into parts so GSAP can animate them.
// [data-pupil] groups move (eye tracking), [data-eye] inside them scales (blink).
// `smile` swaps the flat mouth for an open grin (About section pose).
export function Avatar({ className, smile }: { className?: string; smile?: boolean }) {
  return (
    <svg
      viewBox="200 200 860 890"
      fill="none"
      stroke="currentColor"
      strokeWidth={28}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* face fill follows the jaw outline; top edge hides under hair, sides under ears */}
      <path
        d="M325 760C315 960 460 1070 600 1070C760 1070 900 980 915 870L940 720L960 480L560 400L300 560Z"
        fill="#fff"
        stroke="none"
      />
      <ellipse cx="290" cy="750" rx="58" ry="82" fill="#fff" />
      <ellipse cx="975" cy="805" rx="60" ry="92" transform="rotate(10 975 805)" fill="#fff" />
      <path d="M325 760C315 960 460 1070 600 1070C760 1070 900 980 915 870" />
      <rect x="342" y="645" width="250" height="225" rx="80" />
      <rect x="655" y="705" width="255" height="225" rx="80" transform="rotate(4 782 817)" />
      <path d="M592 770L655 778M300 742L342 760M915 820L962 800" />
      <g data-hair>
        <path
          fill="currentColor"
          stroke="none"
          d="M268 640C250 520 300 400 400 320C450 285 500 270 545 268C575 240 630 225 690 230C820 245 950 340 1005 480C1035 570 1015 660 985 718C940 730 880 725 830 712C770 696 720 668 690 640C640 590 610 520 588 462C580 440 560 432 545 448C520 478 505 570 466 616C440 640 400 655 360 660C320 664 285 660 268 640Z"
        />
      </g>
      <g data-pupil>
        <circle data-eye cx="462" cy="768" r="30" fill="currentColor" stroke="none" />
      </g>
      <g data-pupil>
        <circle data-eye cx="775" cy="800" r="30" fill="currentColor" stroke="none" />
      </g>
      {smile ? (
        <path data-mouth d="M515 935C560 1010 640 1012 680 940Z" fill="currentColor" />
      ) : (
        <path data-mouth d="M525 955C570 966 620 968 660 962" />
      )}
    </svg>
  );
}
