import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.png';
import linkedinDark from '../../assets/linkedin-dark.png';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import Magnetic from '../../common/Magnetic';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.status}>
          <span className={styles.pulse} />
          Available for collaborations
        </p>

        <h1 className={styles.name}>
          <span className={styles.gradient} data-text="QG1o">QG1o</span>
          <span className={styles.alias}>aka Gio</span>
        </h1>

        <h2 className={styles.role}>
          IT-Administrator <span className={styles.sep}>/</span> Security Enthusiast
        </h2>

        <p className={styles.desc}>
          Ich baue, breche und sichere Systeme. IT-Admin mit Leidenschaft für
          Cybersecurity — immer im Einsatz bei CTFs &amp; Pentesting.
        </p>

        <div className={styles.actions}>
          <Magnetic strength={0.4}>
            <a href={CV} download className="btnPrimary hover">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a href="#contact" className="btnGhost hover">Get in touch</a>
          </Magnetic>
        </div>

        <div className={styles.socials}>
          <a href="https://x.com/QG1o_" target="_blank" rel="noopener noreferrer" className="hover" aria-label="X (Twitter) Profil von QG1o">
            <img src={twitterIcon} alt="X (Twitter)" />
          </a>
          <a href="https://github.com/QG1o" target="_blank" rel="noopener noreferrer" className="hover" aria-label="GitHub Profil von QG1o">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/qg1o/" target="_blank" rel="noopener noreferrer" className="hover" aria-label="LinkedIn Profil von QG1o">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <button
          className={`${styles.toggle} hover`}
          onClick={toggleTheme}
          data-theme-toggle
          aria-label="Farbschema wechseln"
        >
          <img src={themeIcon} alt="" data-theme-toggle />
        </button>

        <Magnetic strength={0.12}>
          <div className={styles.orb}>
            <span className={styles.ringA} />
            <span className={styles.ringB} />
            <span className={styles.halo} />
            <img className={styles.avatar} src={heroImg} alt="Porträt von QG1o" />
          </div>
        </Magnetic>
      </div>
    </section>
  );
}

export default Hero;
