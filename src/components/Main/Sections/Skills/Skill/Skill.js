import React from "react";
import FadeInSection from "../../../../util/FadeInSection";

import styles from "./Skill.module.css";

const Skill = ({ name, percentage, IconComponent }) => {
  return (
    <FadeInSection>
      <div className={styles.SkillsData}>
        <div className={styles.SkillsNames}>
          {/* TODO: 这个compoennt 没有对齐 */}
          <span className={styles.SkillsIcon}>
            {IconComponent && <IconComponent />}
          </span>
          <span className={styles.SkillsName}>{name}</span>
        </div>
        <div className={styles.SkillsBar} style={{ width: percentage }}></div>
        <div>
          <span class="skills__percentage">{percentage}</span>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Skill;
