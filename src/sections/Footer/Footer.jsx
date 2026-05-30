import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.line} />
      <div className={styles.inner}>
        <a href="#hero" className={`${styles.brand} hover`} aria-label="Zum Seitenanfang">
          <span className={styles.dot} />
          0xGI0
        </a>

        <p className={styles.copy}>&copy; 2026 0xGI0 — Built with React.</p>

        <div className={styles.links}>
          <a href="https://github.com/QG1o" target="_blank" rel="noopener noreferrer" className="hover">GitHub</a>
          <a href="https://x.com/QG1o_" target="_blank" rel="noopener noreferrer" className="hover">X</a>
          <a href="https://www.linkedin.com/in/qg1o/" target="_blank" rel="noopener noreferrer" className="hover">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
