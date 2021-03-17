import React from "react";

import styles from "./Home.module.css";
import perfilImg from "../../../../assets/img/perfil.png";
import BxlGithubIcon from "../../../Icons/BxlGithubIcon";
import LightningFillIcon from "../../../Icons/Bootstrap/LightningFillIcon";

import MyResumePDF from "./resume.pdf";
import FadeInSection from "../../../util/FadeInSection";

const Home = () => (
  <section className={styles.Home} id="home">
    <div className={styles.HomeContainer}>
      <div className={styles.HomeData}>
        <h1 className={styles.HomeTitle}>
          Hi,
          <br />
          I'am <span className={styles.HomeTitleColor}>Kun Xie</span>
          <br /> Software Developer
        </h1>
        <a
          className={styles.ContactButton}
          href={MyResumePDF}
          download="Kun_Xie_Resume.pdf"
        >
          Download my resume
        </a>
        <div className={styles.HomeSocial}>
          <a href="https://github.com/KunXie" className={styles.HomeSocialIcon}>
            <BxlGithubIcon />
          </a>
          <a
            href="https://stackblitz.com/@KunXie"
            className={styles.HomeSocialIcon}
          >
            <LightningFillIcon />
          </a>
        </div>
      </div>
      <div className={styles.HomeImage}>
        <img src={perfilImg} alt="img" />
      </div>
    </div>
  </section>
);

export default Home;
