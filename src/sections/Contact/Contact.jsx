import styles from './ContactStyles.module.css';
import Reveal from '../../common/Reveal';
import Magnetic from '../../common/Magnetic';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <Reveal className="sectionHead">
        <span className="eyebrow">04 — Contact</span>
        <h2 className="sectionTitle">
          Let&apos;s <span className="gradientText">connect</span>
        </h2>
        <p className={styles.sub}>
          Ein Projekt, eine Frage oder ein CTF zum gemeinsamen Knacken?
          Schreib mir.
        </p>
      </Reveal>

      <Reveal className={`${styles.formWrap} glass`}>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" hidden>Name</label>
              <input type="text" name="name" id="name" placeholder="Name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" hidden>Email</label>
              <input type="email" name="email" id="email" placeholder="Email" autoComplete="email" required />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message" hidden>Message</label>
            <textarea name="message" id="message" placeholder="Deine Nachricht …" rows="6" required />
          </div>
          <Magnetic strength={0.35} className={styles.submitWrap}>
            <button type="submit" className="btnPrimary hover">
              Nachricht senden
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Magnetic>
        </form>
      </Reveal>
    </section>
  );
}

export default Contact;
