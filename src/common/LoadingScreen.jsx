import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

const TITLE = 'QG1o';
const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCXZ';

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState('????');

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    const duration = 2000;
    let raf;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));

      const reveal = Math.floor(t * TITLE.length);
      let out = '';
      for (let i = 0; i < TITLE.length; i++) {
        out += i < reveal || t === 1
          ? TITLE[i]
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = '';
        }, 750);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.screen} ${done ? styles.out : ''}`}>
      <div className={styles.terminal}>
        <div className={styles.bar}>
          <span />
          <span />
          <span />
          <p className={styles.path}>~/qg1o/portfolio</p>
        </div>
        <div className={styles.body}>
          <p className={styles.line}>
            <span className={styles.prompt}>$</span> init secure session
          </p>
          {progress > 25 && (
            <p className={styles.line}>
              <span className={styles.arrow}>›</span> mounting aurora interface{' '}
              <b className={styles.ok}>ok</b>
            </p>
          )}
          {progress > 60 && (
            <p className={styles.line}>
              <span className={styles.arrow}>›</span> decrypting identity …
            </p>
          )}
        </div>
      </div>

      <div className={styles.title}>
        {display}
        <span className={styles.caret} />
      </div>

      <div className={styles.progressRow}>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${progress}%` }} />
        </div>
        <span className={styles.percent}>{String(progress).padStart(3, '0')}%</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
