import React from "react";

import styles from "./Projects.module.css";
// import TetrisImage from "../../../../assets/img/projects/TetrisScreenShot.png";
import Calculator from "../../../../assets/img/projects/Calculator.png";
import Sudoku from "../../../../assets/img/projects/Sudoku.png";
import Project from "./Project/Project";

// TODO: 未完成
const Projects = (props) => {
  const projectsList = [
    {
      name: "Calculator",
      description: [
        "implemented an iOS14 calculator clone using HTML/CSS with Javascript",
        "implemented layout with CSS grid and CSS variable",
      ],
      ImageComponent: <img src={Calculator} alt="Calculaor screen shot" />,
      sourceLink: "https://stackblitz.com/edit/calculator-ios14",
      demoLink: "https://calculator-ios14.stackblitz.io/",
    },
    {
      name: "Sudoku game",
      description: [
        "implemented an Sudoku game using HTML/CSS with Typescript",
        "adopted backtracking and Fisher–Yates algorithms for solving and generating Sudoku puzzle",
      ],
      ImageComponent: <img src={Sudoku} alt="Sudoku screen shot" />,
      link: "https://sudoku-kunxie.stackblitz.io/",
    },
    {
      name: "Chat App",
      description: [
        "implemented an Chat App using NodeJS, React and GraphQL",
        "Backed end",
      ],
      ImageComponent: <img src={Sudoku} alt="Sudoku screen shot" />,
      link: "https://sudoku-kunxie.stackblitz.io/",
    },
  ];

  return (
    <section className={styles.Projects} id="projects">
      <h2 className={styles.Title}>Projects</h2>

      <div className={styles.ProjectsContainer}>
        {projectsList.map((p) => (
          <Project
            key={p.name}
            name={p.name}
            description={p.description}
            ImageComponent={p.ImageComponent}
            sourceLink={p.sourceLink}
            demoLink={p.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
