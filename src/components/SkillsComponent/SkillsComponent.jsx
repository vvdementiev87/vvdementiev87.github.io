import React from "react";
import styles from "./SkillsComponent.module.scss";

export const SkillsComponent = ({ skills }) => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.skillsBox}>
        <h2>Skills</h2>
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
