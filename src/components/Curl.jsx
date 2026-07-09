export default function Curl({ color = 'var(--bark)', opacity = 0.14, size = 100, rotate = 0, style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{
        position: 'absolute',
        opacity,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      <path
        d="M20 72 C18 42, 44 24, 56 38 C66 50, 48 62, 40 50 C32 38, 48 22, 68 28 C86 33, 88 56, 74 66"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
