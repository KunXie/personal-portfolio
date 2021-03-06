import React from "react";

import styles from "./Main.module.css";
import Home from "./Sections/Home/Home";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";

const Main = () => {
  return (
    <main className={styles.Main}>
      <Home />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
