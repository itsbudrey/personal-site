import { motion } from 'framer-motion';
import Curl from './Curl.jsx';
import CurlyDivider from './CurlyDivider.jsx';
import './About.css';

const tags = [
  'Computer Science',
  'Media',
  'Creative Technology',
  '3D Printing',
  'Currently: SWE Intern @ State Farm',
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 18 } },
};

export default function About() {
  return (
    <section className="about" id="about">
      <Curl color="var(--bark)" opacity={0.1} size={110} rotate={200} style={{ top: '6%', right: '5%' }} />
      <Curl color="var(--blush-deep)" opacity={0.12} size={80} rotate={40} style={{ bottom: '10%', left: '4%' }} />
      <motion.div
        className="about-inner"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="about-eyebrow" variants={reveal}>
          about me
        </motion.p>

        <motion.h2 className="about-heading" variants={reveal}>
          Hi, I'm Audrey &mdash; nice to meet you.
        </motion.h2>

        <motion.div variants={reveal}>
          <CurlyDivider color="var(--blush)" />
        </motion.div>

        <motion.p className="about-body" variants={reveal}>
          I'm a Computer Science student at the University of Illinois
          Urbana-Champaign, minoring in Media, and currently working as a
          Software Engineering Intern at State Farm. Lately I've been drawn to
          the space where creative technology lives &mdash; anywhere code and
          art overlap.
        </motion.p>

        <motion.p className="about-body" variants={reveal}>
          That interest goes back to eighth grade. I always figured I'd end up
          a film director &mdash; I loved the creative side of things but
          hadn't found where I fit. Then I took an "Exploring Computer
          Science" class and it clicked: this was basically an art class,
          just with computers. CS turned out to be the more open path, one
          where I could keep building and keep making.
        </motion.p>

        <motion.p className="about-body" variants={reveal}>
          Outside of school and work, I'm usually making something with my
          hands &mdash; sewing, painting, drawing, or lately, 3D modeling
          since I picked up a 3D printer. I've also gotten back into reading
          this year, and I'm a committed thrifter with a soft spot for
          fashion. I grew up in Chicago, where I still live, and the city's
          diversity has shaped a lot of how I see things.
        </motion.p>

        <motion.div className="about-tags" variants={reveal}>
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          variants={reveal}
        >
          view my resume
        </motion.a>
      </motion.div>
    </section>
  );
}
