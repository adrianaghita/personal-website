import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills/Skills";
import ProjectsList from "./components/Projects/ProjectsList/ProjectsList";
import NavBar from "./components/NavBar/NavBar";
import ContactForm from "./components/Forms/ContactForm";

function App() {
  return (
    <>
      <NavBar />
      {/* <Header />
      <Skills /> */}
      <ContactForm />
    </>
  );
}

export default App;
