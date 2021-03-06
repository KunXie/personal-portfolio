import React from "react";

import styles from "./Footer.module.css";

import BxlGithubIcon from "../Icons/BxlGithubIcon";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.FooterTitle}>Kun Xie</p>
      <div className={styles.FooterSocial}>
        <a href="#" className={styles.FooterIcon}>
          <BxlGithubIcon />
        </a>
      </div>
      <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
