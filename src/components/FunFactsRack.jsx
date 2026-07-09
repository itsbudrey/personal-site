import { useState } from 'react';
import { motion } from 'framer-motion';
import Garment from './Garment.jsx';
import Curl from './Curl.jsx';
import CurlyDivider from './CurlyDivider.jsx';
import './FunFactsRack.css';

const items = [
  {
    id: 'thrift',
    type: 'jacket',
    color: 'var(--bark)',
    fact: "I'm a dedicated thrifter. Most of my wardrobe has a backstory.",
  },
  {
    id: 'crafts',
    type: 'dress',
    color: 'var(--lime)',
    fact: 'I sew, paint, and draw in roughly equal measure, depending on my mood that week.',
  },
  {
    id: 'movies',
    type: 'sweater',
    color: 'var(--blush)',
    fact: "I'm a huge movie person — the film-director dream never fully left.",
    link: { href: 'https://boxd.it/3YKhZ', label: 'check my Letterboxd' },
  },
  {
    id: 'running',
    type: 'pants',
    color: 'var(--bark)',
    fact: "I've medaled in competitive running, with a fastest 3-mile time around 21 minutes.",
  },
  {
    id: 'duolingo',
    type: 'tee',
    color: 'var(--blush)',
    fact: '1,315-day Duolingo streak and counting. Consistency might be my whole personality.',
  },
  {
    id: '3d-printing',
    type: 'tote',
    color: 'var(--lime)',
    fact: 'I own a 3D printer and have been teaching myself 3D modeling — my newest obsession.',
  },
  {
    id: 'plane',
    type: 'jacket',
    color: 'var(--blush-deep)',
    fact: "I've flown a plane. Not a metaphor — an actual small aircraft. It's my go-to for two truths and a lie because no one ever believes it.",
  },
];

function Hanger({ item, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="hanger"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 220, damping: 16 }}
    >
      <motion.div
        className="hanger-swing"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg className="hanger-hook" viewBox="0 0 40 20" width="40" height="20">
          <path d="M20 2 Q28 2 24 10 L16 10 Q12 2 20 2" fill="none" stroke="var(--text-soft)" strokeWidth="2.5" />
        </svg>

        <button
          type="button"
          className="garment-card"
          onClick={() => setFlipped((f) => !f)}
          aria-label={flipped ? 'Hide fun fact' : 'Reveal fun fact'}
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <div className="garment-face garment-front">
            <Garment type={item.type} color={item.color} />
          </div>
          <div className="garment-face garment-back">
            <svg className="tag-shape" viewBox="0 0 190 238" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="57,0 133,0 190,52 190,238 0,238 0,52" fill="var(--sand)" />
            </svg>
            <div className="garment-back-content">
              <p>{item.fact}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="garment-back-link"
                >
                  {item.link.label}
                </a>
              )}
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function FunFactsRack() {
  return (
    <section className="fun-facts" id="fun-facts">
      <Curl color="var(--bark)" opacity={0.12} size={100} rotate={70} style={{ top: '4%', right: '6%' }} />
      <p className="fun-facts-eyebrow">the thrift rack</p>
      <h2 className="fun-facts-heading">7 fun facts</h2>
      <CurlyDivider color="var(--blush)" />
      <p className="fun-facts-note">Tap a hanger to flip it.</p>

      <div className="rack">
        <div className="rack-rail" aria-hidden="true" />
        <div className="rack-strip">
          {items.map((item, i) => (
            <Hanger item={item} index={i} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
