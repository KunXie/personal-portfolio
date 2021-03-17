import React from "react";
import { capitalizeFirstLetter } from "../../../../util/util";

import MsqlServerIcon from "../../../Icons/Devicons/MsqlServerIcon";
import AngularIcon from "../../../Icons/MaterialDesign/AngularIcon";
import LanguageHtml5Icon from "../../../Icons/MaterialDesign/LanguageHtml5Icon";
import LanguageJavaIcon from "../../../Icons/MaterialDesign/LanguageJavaIcon";
import LanguageJavascriptIcon from "../../../Icons/MaterialDesign/LanguageJavascriptIcon";
import LanguagePythonIcon from "../../../Icons/MaterialDesign/LanguagePythonIcon";
import ReactIcon from "../../../Icons/MaterialDesign/ReactIcon";
import SpringFrameworkIcon from "../../../Icons/SpringFrameworkIcon/SpringFrameworkIcon";
import Skill from "./Skill/Skill";
import styles from "./Skills.module.css";

const Skills = (props) => {
  const skillsList = {
    languages: [
      {
        name: "Java",
        percentage: "90%",
        IconComponent: LanguageJavaIcon,
      },
      {
        name: "HTML/CSS",
        percentage: "85%",
        IconComponent: LanguageHtml5Icon,
      },
      {
        name: "Javascript / TypeScript",
        percentage: "85%",
        IconComponent: LanguageJavascriptIcon,
      },
      {
        name: "SQL (sql-server, mysql)",
        percentage: "85%",
        IconComponent: MsqlServerIcon,
      },
      {
        name: "Python",
        percentage: "80%",
        IconComponent: LanguagePythonIcon,
      },
    ],
    frameworks: [
      {
        name: "Spring Boot",
        percentage: "80%",
        IconComponent: SpringFrameworkIcon,
      },
      {
        name: "React",
        percentage: "80%",
        IconComponent: ReactIcon,
      },
      {
        name: "Angular",
        percentage: "80%",
        IconComponent: AngularIcon,
      },
    ],
  };

  return (
    <section className={styles.Skills} id="skills">
      <h2 className={styles.SkillsTitle}>Skills</h2>
      {Object.keys(skillsList).map((skillType) => (
        <React.Fragment key={skillType}>
          <h2 className={styles.SkillsSubTitle}>
            {capitalizeFirstLetter(skillType)}
          </h2>
          <div className={styles.SkillsContainer}>
            {skillsList[skillType].map(
              ({ name, percentage, IconComponent }) => (
                <Skill
                  className={styles.SkillsItem}
                  key={name}
                  name={name}
                  percentage={percentage}
                  IconComponent={IconComponent}
                />
              )
            )}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Skills;
