import { Project } from "../ProjectsList/ProjectsList";
import { Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ProjectItem.module.scss";
import { useEffect } from "react";

const ProjectItem = ({ title, description, image }: Project) => {
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
        <Card.Img src={`${image}`} />
        <Card.Body>{description}</Card.Body>
      </Card>
    </div>
  );
};

export default ProjectItem;