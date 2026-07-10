import { motion } from 'framer-motion';

export default function Flower({
  label,
  bloomed = true,
  dimmed = false,
  color = 'var(--blush)',
  scale = 1,
  tilt = 0,
  onClick,
  clickable = true,
  delay = 0,
}) {
  const Wrapper = clickable ? motion.button : motion.div;

  function handleClick(e) {
    e.stopPropagation();
    if (clickable) onClick?.(e);
  }

  const wrapperVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const stemVariants = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { delay, duration: 1, ease: [0.34, 1.4, 0.4, 1] } },
  };

  const bloomVariants = {
    hidden: { opacity: 0, scale: 0.35 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: delay + 0.65, type: 'spring', stiffness: 240, damping: 13 },
    },
  };

  return (
    <Wrapper
      type={clickable ? 'button' : undefined}
      className={`flower${dimmed ? ' flower--dimmed' : ''}`}
      onClick={handleClick}
      variants={wrapperVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={clickable ? { scale: 1.06 } : {}}
      whileTap={clickable ? { scale: 0.96 } : {}}
      style={{ transform: `scale(${scale}) rotate(${tilt}deg)`, transformOrigin: 'bottom center' }}
      aria-label={
        !clickable ? undefined : dimmed ? `${label} — coming soon` : `Open ${label} project details`
      }
    >
      <motion.svg
        viewBox="0 0 160 320"
        width="170"
        height="340"
        variants={stemVariants}
        style={{ transformOrigin: 'bottom center', overflow: 'visible' }}
      >
        <path
          d="M80 316 C78 250 84 200 79 150 C75 108 80 70 80 46"
          fill="none"
          stroke="var(--lime)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path d="M68 208 Q34 198 26 166 Q60 168 72 194 Z" fill="var(--lime)" opacity="0.9" />
        <path d="M90 250 Q124 242 132 212 Q98 212 86 240 Z" fill="var(--lime)" opacity="0.9" />

        <motion.g variants={bloomVariants} style={{ transformOrigin: '80px 44px' }}>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="80"
              cy="14"
              rx="22"
              ry="36"
              fill={color}
              stroke="rgba(58,42,30,0.25)"
              strokeWidth="2"
              transform={`rotate(${angle} 80 44)`}
            />
          ))}
          <circle cx="80" cy="44" r="21" fill="var(--sand)" stroke="rgba(58,42,30,0.25)" strokeWidth="2" />
        </motion.g>
      </motion.svg>
      {label && <span className="flower-label">{bloomed ? label : '???'}</span>}
    </Wrapper>
  );
}
