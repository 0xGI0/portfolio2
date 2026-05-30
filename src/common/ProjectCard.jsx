import { useRef } from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform =
      `perspective(900px) rotateX(${-py * 7}deg) rotateY(${px * 7}deg) translateY(-6px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} hover`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      aria-label={`Projekt: ${h3}`}
    >
      <div className={styles.media}>
        <img src={src} alt={`Screenshot von ${h3}`} loading="lazy" />
        {index && <span className={styles.index}>{index}</span>}
      </div>

      <div className={styles.meta}>
        <div className={styles.text}>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default ProjectCard;
