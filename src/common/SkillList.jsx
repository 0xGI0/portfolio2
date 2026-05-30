import styles from './SkillList.module.css';

function SkillList({ skill }) {
  return (
    <li className={`${styles.chip} hover`}>
      <span className={styles.bullet} />
      {skill}
    </li>
  );
}

export default SkillList;
