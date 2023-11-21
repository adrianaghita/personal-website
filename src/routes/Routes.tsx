import { createBrowserRouter } from "react-router-dom";
import RoutesLayout from "../pages/RoutesLayout";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RoutesLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default routes;
