import ReactTyped from "react-typed";
import ProjectItem from "../ProjectItem/ProjectItem";
import booksstore from "../../../assets/ProjectsImages/BooksStore.png";
import cloudHosting from "../../../assets/ProjectsImages/CloudHosting.png";
import tsProjects from "../../../assets/ProjectsImages/100TSProjects.jpg";
import styles from "./ProjectsList.module.scss";

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectsList = () => {
  const projects: Project[] = [
    {
      title: "100 TypeScript Projects (in progress)",
      description:
        "I started this project with the goal of  continuously improving my programming skills and gaining more experience with React.js. It incorporates 100 TypeScript small projects, starting from the easiest ones and progressing to more complex projects.",
      image: tsProjects,
      url: "https://github.com/adrianaghita/100TSProjects",
    },
    {
      title: "Books Store",
      description: `The purpose of this project was to create an online books store app using  React  while adhering to design requirements. Throughout the project, I utilized TypeScript and SCSS, along with custom hooks for form validation and React Context for managing states. The application incorporates the majority of features found in an online store, including creating an account, login functionality, adding products to the shopping cart, placing orders, and viewing order history. As additional features, I implemented the possibility to modify the quantity of items from the shopping cart and the option to add products to a favorites list.`,
      image: booksstore,
      url: "https://adrianag-booksstore.netlify.app/",
    },
    {
      title: "Cloud Hosting",
      description:
        "This is one of the first projects I undertook when I began exploring the world of web development, using only HTML and CSS. It marks a starting point for me in this journey. ",
      image: cloudHosting,
      url: "https://adrianag-cloudhosting.netlify.app/",
    },
  ];
  return (
    <div className={styles[`projects-section`]}>
      <ReactTyped className={styles.title} strings={["Projects"]} />
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
