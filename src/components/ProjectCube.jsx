import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCube.css';

const SIZE = 200;
const HALF = SIZE / 2;

export default function ProjectCube({ project, onClose }) {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, startRotation: 0 });

  const faces = [
    { key: 'overview', title: 'overview', body: project.description },
    { key: 'tech', title: 'built with', body: project.tag },
    { key: 'status', title: 'status', body: project.status },
    {
      key: 'link',
      title: 'link',
      body: project.href ? 'view on GitHub' : 'not public yet',
      href: project.href,
    },
  ];

  function handlePointerDown(e) {
    setDragging(true);
    dragState.current = { startX: e.clientX, startRotation: rotation };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragging) return;
    const delta = e.clientX - dragState.current.startX;
    setRotation(dragState.current.startRotation + delta * 0.5);
  }

  function handlePointerUp() {
    setDragging(false);
    setRotation((r) => Math.round(r / 90) * 90);
  }

  function rotateTo(step) {
    setRotation((r) => Math.round(r / 90) * 90 + step * 90);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="cube-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="cube-modal"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" className="cube-close" onClick={onClose} aria-label="Close">
            ×
          </button>

          <h3 className="cube-heading">{project.name}</h3>
          <p className="cube-hint">drag to spin, or use the arrows</p>

          <div className="cube-scene">
            <button
              type="button"
              className="cube-arrow cube-arrow--left"
              onClick={() => rotateTo(-1)}
              aria-label="Rotate left"
            >
              ‹
            </button>

            <div
              className="cube-viewport"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              <div
                className="cube"
                style={{
                  transform: `translateZ(-${HALF}px) rotateY(${-rotation}deg)`,
                  transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {faces.map((face, i) => (
                  <div
                    className="cube-face"
                    key={face.key}
                    style={{ transform: `rotateY(${i * 90}deg) translateZ(${HALF}px)` }}
                  >
                    <span className="cube-face-title">{face.title}</span>
                    {face.href ? (
                      <a href={face.href} target="_blank" rel="noopener noreferrer" className="cube-face-link">
                        {face.body}
                      </a>
                    ) : (
                      <p className="cube-face-body">{face.body}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="cube-arrow cube-arrow--right"
              onClick={() => rotateTo(1)}
              aria-label="Rotate right"
            >
              ›
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
