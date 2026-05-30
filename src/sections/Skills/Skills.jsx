import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import Reveal from '../../common/Reveal';

const GROUPS = [
  { title: 'Development', items: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'] },
  { title: 'Systems & Ops', items: ['Active Directory', 'Linux', 'PowerShell', 'Bash', 'Git'] },
  { title: 'Frameworks', items: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'] },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <Reveal className="sectionHead">
        <span className="eyebrow">03 — Stack</span>
        <h2 className="sectionTitle">
          Skills &amp; <span className="gradientText">Tools</span>
        </h2>
      </Reveal>

      <div className={styles.groups}>
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 100} className={`${styles.group} glass`}>
            <h3 className={styles.groupTitle}>
              <span className={styles.tick}>{String(i + 1).padStart(2, '0')}</span>
              {group.title}
            </h3>
            <ul className={styles.chips}>
              {group.items.map((skill) => (
                <SkillList key={skill} skill={skill} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
