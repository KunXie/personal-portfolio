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
      tags: ["JavaScript", "HTML", "CSS Grid", "CSS Custom Properties"],
      description: ["An iOS14 calculator clone"],
      ImageComponent: <img src={Calculator} alt="Calculaor screen shot" />,
      sourceLink: "https://stackblitz.com/edit/calculator-ios14",
      demoLink: "https://calculator-ios14.stackblitz.io/",
    },
    {
      name: "Sudoku game",
      tags: ["TypeScript", "HTML/CSS", "Backtracking Algo"],
      description: ["An Sudoku game"],
      ImageComponent: <img src={Sudoku} alt="Sudoku screen shot" />,
      link: "https://sudoku-kunxie.stackblitz.io/",
    },
    {
      name: "Chat App",
      tags: [
        "JavaScript",
        "Bootstrap",
        "Apollo",
        "GraphQL",
        "Sequelize ORM",
        "MySQL",
        "AWS",
      ],
      description: ["An full-stack Chat App"],
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
            tags={p.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
