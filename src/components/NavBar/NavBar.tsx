import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Navbar expand="lg" className="bg-body-tertiary d-md-none d-lg-none">
        <Container>
          <div>
            <Navbar.Brand href="https://github.com/adrianaghita">
              <FaGithubSquare className={styles.icon} />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles[`active-link`] : styles[`inactive-link`]
                }
              >
                About
              </NavLink>
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  isActive ? styles[`active-link`] : styles[`inactive-link`]
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? styles[`active-link`] : styles[`inactive-link`]
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? styles[`active-link`] : styles[`inactive-link`]
                }
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ul className={styles[`navbar-list`]}>
        <div className={styles.icons}>
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
