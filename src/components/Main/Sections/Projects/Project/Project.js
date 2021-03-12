import React from "react";
import styles from "./Project.module.css";

const Project = ({
  name,
  description,
  ImageComponent,
  link,
  sourceLink,
  demoLink,
}) => {
  return (
    <div className={styles.Project}>
      <div className={styles.ProjectImage}>{ImageComponent}</div>
      <div className={styles.ProjectData}>
        <h1 className={styles.Title}>{name}</h1>
        <ul className={styles.DescriptList}>
          {description.map((d, index) => (
            <li key={index} className={styles.DescriptionItem}>
              {d}
            </li>
          ))}
          <li>
            {sourceLink && (
              <span>
                <a className={styles.Button} href={sourceLink} target="_blank">
                  Source Code
                </a>
              </span>
            )}
            {demoLink && (
              <span style={{ marginLeft: "15px" }}>
                <a className={styles.Button} href={demoLink} target="_blank">
                  Live Demo
                </a>
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
{
  /* <div className={styles.FlipCard}>
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
    </div> */
}
