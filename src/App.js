import React, { useState } from "react";

import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const sectionList = [
    "home",
    // "about", // TODO:
    "skills",
    "projects",
    // "contact" // TODO:
  ];
  const [activeSection, setActiveSection] = useState("home");
  const sectionChangeHandler = (newActiveSection) => {
    setActiveSection(newActiveSection);
  };

  return (
    <div className={styles.App}>
      <Header
        sectionList={sectionList}
        activeSection={activeSection}
        onChangeSection={sectionChangeHandler}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
