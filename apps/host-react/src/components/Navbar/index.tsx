import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.link__container}>
          <a className={styles.link} href="#">
            Host using React
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
