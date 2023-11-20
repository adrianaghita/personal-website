import ReactTyped from "react-typed";
import SoftSkills from "../SoftSkills/SoftSkills";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";

import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <ReactTyped className={styles.title} strings={["Skills"]} />
      <div className={styles[`skills-details`]}>
        <TechnicalSkills />
        <SoftSkills />
      </div>
    </div>
  );
};

export default Skills;
