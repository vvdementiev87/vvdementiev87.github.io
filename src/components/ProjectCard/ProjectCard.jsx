import React from "react";
import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className={styles.projectBox}>
      <h3>{project.text}</h3>
      <div className={styles.projectImg}>
        <img
          className={styles.projectImg}
          src={project.imgDir}
          alt={project.text}
        />
        <div className={styles.projectCover}>
          <a className={styles.projectBtn} href={project.url}>
            Site page
          </a>
          <a className={styles.projectBtn} href={project.git}>
            Repository page
          </a>
        </div>
      </div>
    </div>
  );
};
