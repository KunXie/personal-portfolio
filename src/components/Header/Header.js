import React from "react";
import { capitalizeFirstLetter } from "../../util/util";
import BxMenuIcon from "../Icons/MenuIcon";
import styles from "./Header.module.css";

const Header = ({ sectionList, activeSection, onChangeSection }) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <div>
          <a href="#" className={styles.NavLogo}>
            Kun Xie
          </a>
        </div>

        <div className={styles.NavMenu} id="nav-menu">
          <ul className={styles.NavList}>
            {sectionList.map((sec) => (
              <li className={styles.NavItem} key={sec}>
                <a
                  href={`#${sec}`}
                  className={
                    sec === activeSection
                      ? `${styles.NavLink} ${styles.Active}`
                      : styles.NavLink
                  }
                  onClick={() => onChangeSection(sec)}
                >
                  {capitalizeFirstLetter(sec)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.NavToggle} id="nav-toggle">
          <BxMenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
