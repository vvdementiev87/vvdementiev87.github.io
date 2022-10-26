import React, { useEffect, useRef } from "react";
import styles from "./ScrollUpBtm.module.scss";
import { Link } from "react-scroll";
import { useState } from "react";

export const ScrollUpBtm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hiddenRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    window.scrollY >= 100 ? setIsVisible(true) : setIsVisible(false);
  };

  return isVisible ? (
    <Link
      ref={hiddenRef}
      className={styles.btnScrollUp}
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
    >
      &#9650;
    </Link>
  ) : (
    <></>
  );
};
