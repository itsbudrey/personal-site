export default function CurlyDivider({ color = 'var(--lime)' }) {
  return (
    <svg
      className="curly-divider"
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 12 Q 25 2, 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 10"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
