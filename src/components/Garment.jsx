export default function Garment({ type, color }) {
  const fill = { fill: color, stroke: 'rgba(58,42,30,0.28)', strokeWidth: 1.5 };
  const seam = { fill: 'none', stroke: 'rgba(58,42,30,0.22)', strokeWidth: 1.5, strokeLinecap: 'round' };

  switch (type) {
    case 'dress':
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M46 6 Q60 -2 74 6 L82 26 Q86 30 80 33 L72 29 L88 132 Q88 138 82 138 L38 138 Q32 138 32 132 L48 29 L40 33 Q34 30 38 26 Z"
            {...fill}
          />
          <path d="M52 30 Q60 38 68 30" {...seam} />
          <circle cx="60" cy="9" r="7" fill="none" stroke="rgba(58,42,30,0.3)" strokeWidth="1.5" />
        </svg>
      );
    case 'jacket':
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M36 10 Q48 2 60 14 Q72 2 84 10 L84 32 L100 42 Q104 46 100 68 L94 72 L88 62 L88 134 Q88 138 84 138 L36 138 Q32 138 32 134 L32 62 L26 72 L20 68 Q16 46 20 42 L36 32 Z"
            {...fill}
          />
          <path d="M60 14 L52 34 L60 46 L68 34 Z" {...seam} />
          <path d="M60 46 L60 130" {...seam} />
        </svg>
      );
    case 'sweater':
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M34 14 Q46 4 60 18 Q74 4 86 14 L94 38 Q96 44 90 48 L82 44 L82 134 Q82 138 78 138 L42 138 Q38 138 38 134 L38 44 L30 48 Q24 44 26 38 Z"
            {...fill}
          />
          <ellipse cx="60" cy="18" rx="10" ry="7" fill="var(--bg)" opacity="0.55" />
          <path d="M38 60 L82 60" {...seam} opacity="0.5" />
        </svg>
      );
    case 'tote':
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M46 34 Q46 6 60 6 Q74 6 74 34"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M30 34 L90 34 Q94 34 94 40 L88 122 Q88 128 82 128 L38 128 Q32 128 32 122 L26 40 Q26 34 30 34 Z" {...fill} />
          <path d="M32 60 L88 60" {...seam} opacity="0.4" />
        </svg>
      );
    case 'pants':
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M38 8 L82 8 Q86 8 86 14 L90 132 Q90 138 84 138 L68 138 Q64 138 64 132 L60 62 L56 132 Q56 138 52 138 L36 138 Q30 138 30 132 L34 14 Q34 8 38 8 Z"
            {...fill}
          />
          <path d="M38 8 L82 8" {...seam} />
        </svg>
      );
    case 'tee':
    default:
      return (
        <svg viewBox="0 0 120 150" width="100%" height="100%">
          <path
            d="M40 8 Q50 16 60 16 Q70 16 80 8 L100 22 Q104 26 100 30 L88 40 L82 34 L82 132 Q82 138 76 138 L44 138 Q38 138 38 132 L38 34 L32 40 L20 30 Q16 26 20 22 Z"
            {...fill}
          />
          <path d="M48 12 Q60 22 72 12" {...seam} />
        </svg>
      );
  }
}
