import styles from './ProjectsStyles.module.css';
import project1 from '../../assets/project44.png';
import project2 from '../../assets/project33.png';
import project3 from '../../assets/project22.png';
import project4 from '../../assets/project11.png';
import ProjectCard from '../../common/ProjectCard';
import Reveal from '../../common/Reveal';

const PROJECTS = [
  { src: project1, link: 'https://qg1o2.netlify.app/', h3: 'Website 1', p: 'Frontend · React' },
  { src: project2, link: 'https://qg1o.netlify.app/', h3: 'Website 2', p: 'Frontend · Web' },
  { src: project3, link: 'https://qg1o.github.io/portfolio2/', h3: 'Website 3', p: 'Portfolio' },
  { src: project4, link: 'https://qg1o.github.io/portfolio1/', h3: 'Website 4', p: 'Portfolio · v1' },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <Reveal className="sectionHead">
        <span className="eyebrow">02 — Work</span>
        <h2 className="sectionTitle">
          Selected <span className="gradientText">Projects</span>
        </h2>
      </Reveal>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <Reveal key={project.link} delay={i * 90}>
            <ProjectCard {...project} index={String(i + 1).padStart(2, '0')} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
