import React from "react";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.Data}>
        <h1 class="home__title">
          Hi,
          <br />
          I'am <span class="home__title-color">Marlon</span>
          <br /> Web Designer
        </h1>

        <a href="#" class="button">
          Contact
        </a>
      </div>
      <div class="home__social">
        <a href="" class="home__social-icon">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="" class="home__social-icon">
          <i class="bx bxl-behance"></i>
        </a>
        <a href="" class="home__social-icon">
          <i class="bx bxl-github"></i>
        </a>
      </div>
      <div class="home__img">
        <img src="assets/img/perfil.png" alt="" />
      </div>
    </section>
  );
};
