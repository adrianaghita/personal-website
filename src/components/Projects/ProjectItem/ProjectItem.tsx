import { Project } from "../ProjectsList/ProjectsList";
import { Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ProjectItem.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, description, image, url }: Project) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={styles[`project-item`]}
      data-aos="flip-right"
      data-aos-duration="900"
    >
      <Card className={styles.card}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Link to={`${url}`} target="_blank">
          <Card.Img src={`${image}`} />
        </Link>
        <Card.Body>{description}</Card.Body>
      </Card>
    </div>
  );
};

export default ProjectItem;
