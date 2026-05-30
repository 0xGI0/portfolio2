import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [pointer, setPointer] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let raf;

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const over = (e) => {
      const t = e.target;
      const clickable =
        t.closest &&
        !!(t.closest('a') ||
          t.closest('button') ||
          t.closest('.hover') ||
          t.closest('input') ||
          t.closest('textarea'));
      setPointer(clickable);
    };

    const out = () => setHidden(true);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    const loop = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.16;
      const transform =
        `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = transform;
      if (glowRef.current) glowRef.current.style.transform = transform;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseleave', out);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', out);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const cls = (base) =>
    [base, pointer && styles.pointer, down && styles.down, hidden && styles.hidden]
      .filter(Boolean)
      .join(' ');

  return (
    <>
      <div ref={glowRef} className={cls(styles.glow)} />
      <div ref={ringRef} className={cls(styles.ring)} />
      <div ref={dotRef} className={cls(styles.dot)} />
    </>
  );
}

export default CustomCursor;
