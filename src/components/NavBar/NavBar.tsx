import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles[`navbar-list`]}>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>

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
      </ul>
    </nav>
  );
};

export default NavBar;
