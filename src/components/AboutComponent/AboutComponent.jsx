import React from "react";
import styles from "./AboutComponent.module.scss";

export const AboutComponent = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.aboutBox}>
        <h2>About</h2>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImg}></div>
          <div className={styles.aboutText}>
            <p>
              Интерес к web-разработке возник в 2018, когда понял, что обмен
              информацией между сотрудниками наилучшим образом реализуется по
              средствам web-приложения. После чего приступил к изучению PHP,
              HTML и CSS. В 2021 году я приступил к изучению языка
              программирования JavaScript, купил курсы по web-разработке на
              площадку GeekBrains. К данному курсу был приложен не только
              JavaScript, но и много чего еще HTML, CSS, npm, ReactJS, VueJS,
              PHP, Lavarel, JSON, Git, GitHub. На данный момент обучение еще
              продолжается (а именно изучение PHP). Около 70% своего свободного
              времени я отводил на практику для закрепления своих знаний.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
