import React from "react";

import styles from "./Projects.module.css";

// TODO: 未完成
const Projects = (props) => {
  const projectsList = [
    {
      name: "",
      description: [],
      ImageComponent: "",
    },
  ];

  return (
    <section className={styles.Projects} id="projects">
      <h2 className={styles.Title}>Projects</h2>

      <div class="work__container bd-grid">
        <div className={styles.FlipCard}>
          <div className={styles.FlipCardInner}>
            <div className={styles.FlipCardFront}>
              {/* <img
                src="img_avatar.png"
                alt="Avatar"
                style="width:300px;height:300px;"
              /> */}
            </div>
            <div className={styles.FlipCardBack}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className={styles.FlipCard}>
          <div className={styles.FlipCardInner}>
            <div className={styles.FlipCardFront}>
              {/* <img
                src="img_avatar.png"
                alt="Avatar"
                style="width:300px;height:300px;"
              /> */}
            </div>
            <div className={styles.FlipCardBack}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
