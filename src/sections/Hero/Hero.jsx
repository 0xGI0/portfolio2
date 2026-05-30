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

function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
     return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.heroImg} 
                    src={heroImg} 
                    alt="Profile picture" 
                    style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%' }}                />
                <img
                 className={styles.colorMode}
                 src={themeIcon}
                 alt="Color mode icon"
                 onClick={toggleTheme}
                 data-theme-toggle
                />
            </div>
            <div className={styles.info}>
                <h1>
                    QG1o
                    <br />
                    Gio
                </h1>
                <h2>IT-Administrator • Security Enthusiast</h2>
                <span>
                    <a href="https://x.com/QG1o_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profil von QG1o">
                        <img src={twitterIcon} alt="X (Twitter)" />
                    </a>
                    <a href="https://github.com/QG1o" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profil von QG1o">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/qg1o/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profil von QG1o">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </span>
                <p className={styles.description}>
                    IT-Admin & Security Hobbyist | CTF & Pentesting-Fan
                </p>
                <a href={CV} download>
                    <button className="hover">CV</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
