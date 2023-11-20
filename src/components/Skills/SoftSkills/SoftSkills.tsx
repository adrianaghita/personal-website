import { ProgressBar } from "react-bootstrap";

import styles from "./SoftSkills.module.scss";

const SoftSkills = () => {
  return (
    <div className={styles[`softSkills-section`]}>
      <h2>Soft Skills</h2>
      <p>
        Attention to details <span> 80%</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={80}
        variant="success"
        animated={true}
      />
      <p>
        Creativity <span> 70%</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={70}
        variant="success"
        animated={true}
      />
      <p>
        Interpersonal abilities <span> 80%</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={80}
        variant="success"
        animated={true}
      />
      <p>
        Persistence <span> 90%</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={90}
        variant="success"
        animated={true}
      />
    </div>
  );
};

export default SoftSkills;
