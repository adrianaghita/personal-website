import { Project } from "../ProjectsList/ProjectsList";
import { Card } from "react-bootstrap";
import styles from "./ProjectItem.module.scss";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, description, image, url }: Project) => {
  return (
    <div className={styles[`project-item`]}>
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
