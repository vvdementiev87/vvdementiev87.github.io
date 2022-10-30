import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));
  return (
    <>
      <div id="home" className={styles.container + " " + styles.header}>
        <img
          className={styles.imgLogo}
          src={"./images/DEVAVI_logo_white.png"}
          alt="Logo"
        />
        <img
          className={styles.imgMenu}
          src={"./images/barsSolid.svg"}
          alt="Menu"
          onClick={handleOpen}
        />
      </div>
      {isOpen && (
        <ul className={styles.container + " " + styles.list}>
          <li>
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="exploring" spy={true} smooth={true}>
              Studing
            </Link>
          </li>
          <li>
            <Link to="contacts" spy={true} smooth={true}>
              Contacts
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
