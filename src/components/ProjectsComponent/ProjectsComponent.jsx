import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./ProjectsComponent.module.scss";

export const ProjectsComponent = ({ projects }) => {
  console.log(projects);
  return (
    <div className={styles.container} id="projects">
      <div className={styles.projectsBox}>
        <h2>Progects</h2>
        <div className={styles.projectsWrapper}>
          {projects.map((project, key) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
