const GRAY = '#a8a49c';
const GRAY_DARK = '#66625a';

export default function GardenCursor({ x, y, mode }) {
  if (mode === 'none') return null;

  const tilt = mode === 'pour' ? 56 : 4;

  return (
    <div className="garden-cursor" style={{ transform: `translate(${x}px, ${y}px)` }} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        width="64"
        height="64"
        style={{ transform: `translate(-20px, -26px) rotate(${tilt}deg)` }}
      >
        <path d="M27 36 Q38 12 54 30" fill="none" stroke={GRAY_DARK} strokeWidth="6" strokeLinecap="round" />
        <rect x="18" y="34" width="42" height="32" rx="10" fill={GRAY} />
        <path d="M46 36 L90 17 L95 23 L58 49 Z" fill={GRAY} />
        <circle cx="92" cy="20" r="6.5" fill={GRAY_DARK} />

        {mode === 'pour' && (
          <g>
            <circle className="drop drop-1" cx="97" cy="27" r="3" fill="var(--lime)" />
            <circle className="drop drop-2" cx="92" cy="28" r="2.4" fill="var(--lime)" />
            <circle className="drop drop-3" cx="100" cy="31" r="2" fill="var(--lime)" />
          </g>
        )}
      </svg>
    </div>
  );
}
