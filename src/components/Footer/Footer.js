import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p class="footer__title">Marlon</p>
      <div class="footer__social">
        <a href="#" class="footer__icon">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="#" class="footer__icon">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="#" class="footer__icon">
          <i class="bx bxl-twitter"></i>
        </a>
      </div>
      <p>&#169; 2020 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
