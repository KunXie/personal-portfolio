import React from "react";
import { capitalizeFirstLetter } from "../../util/util";
import BxMenuIcon from "../Icons/BxMenuIcon";
import styles from "./Header.module.css";

const Header = ({ sectionList, activeSection, onChangeSection }) => {
  return (
    <header className={styles.NavContainer}>
      <div className={styles.NavLogo}>
        <h1>Kun Xie</h1>
      </div>
      <input type="checkbox" id="nav-toggle" className={styles.NavToggle} />
      <label for="nav-toggle" className={styles.NavToggleLabel}>
        <BxMenuIcon />
      </label>
      <ul className={styles.NavItems}>
        {sectionList.map((section) => (
          <li className={styles.NavItem} key={section}>
            <a
              href={`#${section}`}
              className={section === activeSection ? styles.Active : ""}
              onClick={() => onChangeSection(section)}
            >
              {capitalizeFirstLetter(section)}
            </a>
          </li>
        ))}
      </ul>
       
    </header>
  );
};

export default Header;
