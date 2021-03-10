import React from "react";

import styles from "./Projects.module.css";
import TetrisImage from "../../../../assets/img/TetrisScreenShot.png";

// TODO: 未完成
const Projects = (props) => {
  const projectsList = [
    {
      name: "",
      description: [],
      ImageComponent: "",
      imageDescription: "Tetris screen shot",
    },
  ];

  return (
    <section className={styles.Projects} id="projects">
      <h2 className={styles.Title}>Projects</h2>

      <div className={styles.ProjectsContainer}>
        <div className={styles.FlipCard}>
          <div className={styles.FlipCardInner}>
            <div className={styles.FlipCardFront}>
              <img
                src={TetrisImage}
                alt="Tetris screen shot"
                style={{ width: "300px", height: "300px" }}
              />
              <div className={styles.ImageProjectName}>Tetris</div>
            </div>
            <div className={styles.FlipCardBack}>
              <h1 style={{ paddingTop: "1rem" }}>Tetris</h1>
              <p>Implemented using Javascript, HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
