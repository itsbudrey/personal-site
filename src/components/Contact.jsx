import { motion } from 'framer-motion';
import Blob from './Blob.jsx';
import Curl from './Curl.jsx';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Blob color="var(--blush)" className="contact-blob contact-blob--one" />
      <Blob color="var(--lime)" className="contact-blob contact-blob--two" />
      <Curl color="var(--sand)" opacity={0.14} size={100} rotate={100} style={{ top: '10%', right: '8%' }} />
      <Curl color="var(--sand)" opacity={0.1} size={80} rotate={-40} style={{ bottom: '18%', left: '8%' }} />

      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        <h2 className="contact-heading">Let's make something.</h2>
        <p className="contact-body">
          Catching me at a career fair? Say hi. Otherwise, find me here:
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/itsbudrey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/audreycramirez/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Resume
          </a>
        </div>
      </motion.div>

      <footer className="contact-footer">
        made by Audrey &middot; built with bounce
      </footer>
    </section>
  );
}
