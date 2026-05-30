import styles from './ProjectsStyles.module.css';
import project1 from '../../assets/project44.png';
import project2 from '../../assets/project33.png';
import project3 from '../../assets/project22.png';
import project4 from '../../assets/project11.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={project1}
          link="https://qg1o2.netlify.app/"
          h3="Website 1"
          p="Project 1"
        />
        <ProjectCard
          src={project2}
          link="https://qg1o.netlify.app/"
          h3="Website 2"
          p="Project 2"
        />
        <ProjectCard
          src={project3}
          link="https://qg1o.github.io/portfolio2/"
          h3="Website 3"
          p="Project 3"
        />
        <ProjectCard
          src={project4}
          link="https://qg1o.github.io/portfolio1/"
          h3="Website 4"
          p="Project 4"
        />
      </div>
    </section>
    );
  }

export default Projects;
