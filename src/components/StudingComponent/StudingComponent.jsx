import React from "react";
import styles from "./StudingComponent.module.scss";

export const StudingComponent = ({ skills }) => {
  return (
    <div className={styles.container} id="exploring">
      <div className={styles.skillsBox}>
        <h2>Exploring</h2>
        <div className={styles.skillsWrapper}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillsItem}>
              <img src={skill.imgDir} alt={skill.text} />
              <h3>{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
