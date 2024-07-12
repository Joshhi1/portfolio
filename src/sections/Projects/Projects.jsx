import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="NOT HOSTED"
          h3="SpotiNic"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="NOT HOSTED"
          h3="Automation"
          p="Automated Facebook Actions"
        />
        <ProjectCard
          src={hipsster}
          link="NOT HOSTED"
          h3="Weather App"
          p="Application that determines weather update"
        />
        <ProjectCard
          src={fitLift}
          link="NOT HOSTED"
          h3="Cloner"
          p="Facebook File Cloning/Random Cloning tool for cracking"
        />
      </div>
    </section>
  );
}

export default Projects;
