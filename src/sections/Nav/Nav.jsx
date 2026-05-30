import { useEffect, useState } from 'react';
import styles from './NavStyles.module.css';

const LINKS = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={`${styles.logo} hover`} aria-label="Zum Seitenanfang">
        <span className={styles.dot} />
        0xGI0
      </a>
      <nav className={styles.links}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="hover">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
