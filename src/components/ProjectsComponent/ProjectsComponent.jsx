import React from "react";
import styles from "./ProjectsComponent.module.scss";

export const ProjectsComponent = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.aboutBox}>
        <h2>Progects</h2>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImg}></div>
          <div className={styles.aboutText}></div>
        </div>
      </div>
    </div>
  );
};
