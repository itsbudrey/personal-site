import { motion } from 'framer-motion';
import Blob from './Blob.jsx';
import Curl from './Curl.jsx';
import CurlyDivider from './CurlyDivider.jsx';
import audreyPhoto from '../assets/audrey.jpeg';
import './Hero.css';

const name = 'Audrey Ramirez';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 300, damping: 14 },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Blob color="var(--lime)" className="hero-blob hero-blob--one" />
      <Blob color="var(--blush)" className="hero-blob hero-blob--two" />
      <Curl color="var(--bark)" opacity={0.14} size={120} rotate={-15} style={{ top: '8%', left: '4%' }} />
      <Curl color="var(--bark)" opacity={0.12} size={90} rotate={20} style={{ bottom: '6%', right: '6%' }} />

      <div className="hero-inner">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 18 }}
        >
          rising sophomore &middot; UIUC
        </motion.p>

        <motion.h1
          className="hero-name"
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={name}
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              style={{ display: 'inline-block' }}
              aria-hidden="true"
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 16 }}
        >
          CS + Media student chasing the space where code and art overlap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <CurlyDivider />
        </motion.div>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, type: 'spring', stiffness: 220, damping: 16 }}
        >
          <a href="#projects" className="btn">
            see what I'm building
          </a>
          <a href="#about" className="btn btn--secondary">
            more about me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        whileHover={{ rotate: 2, scale: 1.04 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 180, damping: 14 }}
      >
        <img src={audreyPhoto} alt="Audrey Ramirez smiling outdoors" className="hero-photo" />
      </motion.div>
    </section>
  );
}
