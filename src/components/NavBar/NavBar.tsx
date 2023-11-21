import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles[`navbar-list`]}>
        <div className={styles.icons}>
          <li>
            <a href="https://www.linkedin.com/in/adriana-ghita/">
              <FaLinkedin className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/adrianaghita">
              <FaGithubSquare className={styles.icon} />
            </a>
          </li>
        </div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles[`active-link`] : styles[`inactive-link`]
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive ? styles[`active-link`] : styles[`inactive-link`]
            }
          >
            {" "}
            Skills{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles[`active-link`] : styles[`inactive-link`]
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles[`active-link`] : styles[`inactive-link`]
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
