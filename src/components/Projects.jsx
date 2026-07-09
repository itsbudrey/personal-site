import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CurlyDivider from './CurlyDivider.jsx';
import Curl from './Curl.jsx';
import Flower from './Flower.jsx';
import ProjectCube from './ProjectCube.jsx';
import GardenCursor from './GardenCursor.jsx';
import './Projects.css';

const MAX_PLANTED = 18;

const projects = [
  {
    id: 'notion-x-canvas',
    name: 'Notion × Canvas',
    description:
      'A Python project syncing Canvas coursework into Notion, so nothing gets lost between the two.',
    tag: 'Python',
    href: 'https://github.com/itsbudrey/Notion-x-Canvas',
    status: 'in progress',
    bloomed: true,
    left: 22,
  },
  {
    id: 'placeholder-1',
    name: 'Something new',
    description: "Something's cooking for career fair season. Check back soon.",
    tag: 'TBD',
    status: 'still growing',
    bloomed: false,
    left: 50,
  },
  {
    id: 'placeholder-2',
    name: 'Next thing',
    description: 'Slot reserved for whatever I build next.',
    tag: 'TBD',
    status: 'still growing',
    bloomed: false,
    left: 78,
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [planted, setPlanted] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorMode, setCursorMode] = useState('none');
  const gardenRef = useRef(null);
  const plantCount = useRef(0);

  function handleGardenMouseMove(e) {
    const rect = gardenRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setCursorMode(e.target.closest('.flower') ? 'can' : 'pour');
  }

  function handleGardenMouseLeave() {
    setCursorMode('none');
  }

  function handleGardenClick(e) {
    if (planted.length >= MAX_PLANTED) return;
    const rect = gardenRef.current.getBoundingClientRect();
    const leftPct = ((e.clientX - rect.left) / rect.width) * 100;
    if (leftPct < 4 || leftPct > 96) return;

    plantCount.current += 1;
    const n = plantCount.current;
    setPlanted((p) => [
      ...p,
      {
        id: `planted-${n}-${Date.now()}`,
        left: leftPct,
        color: n % 2 === 0 ? 'var(--blush-deep)' : 'var(--blush)',
        scale: 0.75 + Math.random() * 0.35,
        tilt: Math.random() * 12 - 6,
      },
    ]);
  }

  return (
    <section className="projects" id="projects">
      <Curl color="var(--bark)" opacity={0.1} size={110} rotate={-30} style={{ top: '2%', left: '3%' }} />
      <motion.p
        className="projects-eyebrow"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        the garden
      </motion.p>
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What I'm building
      </motion.h2>
      <CurlyDivider color="var(--lime)" />
      <p className="projects-note">
        Tap a flower to see what's blooming — tap the empty dirt to plant one of your own.
      </p>

      <div
        className="garden"
        ref={gardenRef}
        onClick={handleGardenClick}
        onMouseMove={handleGardenMouseMove}
        onMouseLeave={handleGardenMouseLeave}
      >
        <div className="garden-ground" aria-hidden="true" />
        <GardenCursor x={cursorPos.x} y={cursorPos.y} mode={cursorMode} />

        {projects.map((project, i) => (
          <div className="garden-plant" style={{ left: `${project.left}%` }} key={project.id}>
            <Flower
              label={project.name}
              bloomed={project.bloomed}
              dimmed={!project.bloomed}
              color={i % 2 === 0 ? 'var(--blush)' : 'var(--blush-deep)'}
              delay={i * 0.15}
              onClick={(e) => {
                e.stopPropagation();
                setOpenProject(project);
              }}
            />
          </div>
        ))}

        {planted.map((p) => (
          <div className="garden-plant garden-plant--decorative" style={{ left: `${p.left}%` }} key={p.id}>
            <Flower clickable={false} color={p.color} scale={p.scale} tilt={p.tilt} />
          </div>
        ))}
      </div>

      <a
        href="https://github.com/itsbudrey"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--secondary projects-more"
      >
        see more on GitHub
      </a>

      {openProject && (
        <ProjectCube project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}
