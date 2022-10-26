import React from "react";
import styles from "./Footer.module.scss";

import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className={styles.container + " " + styles.footer}>
      <Link activeClass="active" to="home" spy={true} smooth={true}>
        <img src={"./images/DEVAVI_logo_white.png"} alt="Logo" />
      </Link>
    </div>
  );
};
