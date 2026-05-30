import styles from './AuroraBackground.module.css';

function AuroraBackground() {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <span className={styles.blob1} />
      <span className={styles.blob2} />
      <span className={styles.blob3} />
      <div className={styles.grid} />
      <div className={styles.vignette} />
    </div>
  );
}

export default AuroraBackground;
