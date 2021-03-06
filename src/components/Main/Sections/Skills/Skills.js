import React from "react";
import { capitalizeFirstLetter } from "../../../../util/util";

import BxlHtml5Icon from "../../../Icons/BxlHtml5Icon";
import BxlJavascriptIcon from "../../../Icons/BxlJavascriptIcon";
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
        name: "Javascript/TypeScript",
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
      <div style={{ width: "100%" }}>
        <h2 className={styles.SkillsTitle}>Skills</h2>
      </div>

      <div style={{ width: "100%" }}>
        {Object.keys(skillsList).map((skillType) => (
          <React.Fragment key={skillType}>
            <div>
              <h2 class="skills__subtitle">
                {capitalizeFirstLetter(skillType)}
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {skillsList[skillType].map(
                ({ name, percentage, IconComponent }) => (
                  <Skill
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
      </div>
    </section>
  );
};

export default Skills;
