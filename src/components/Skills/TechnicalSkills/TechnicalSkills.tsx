import { ProgressBar } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

import styles from "./TechnicalSkills.module.scss";
import { useState } from "react";

const TechnicalSkills = () => {
  const [progressBar, setProgressBar] = useState(0);
  const [showAlternativeMessage, setShowAlternativeMessage] = useState(false);

  const increasePercentage = () => {
    setProgressBar(100);
    setShowAlternativeMessage(true);
  };

  const resetPercentage = () => {
    setProgressBar(0);
    setShowAlternativeMessage(false);
  };

  return (
    <div className={styles[`technicalSkills-section`]}>
      <h2>Technical Skills</h2>
      <p>
        React.js <span> {progressBar === 0 ? "50%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 50 : progressBar}
        variant="warning"
        animated={true}
      />
      <p>
        TypeScript <span> {progressBar === 0 ? "50%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 50 : progressBar}
        variant="warning"
        animated={true}
      />
      <p>
        JavaScript <span> {progressBar === 0 ? "60%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 60 : progressBar}
        variant="warning"
        animated={true}
      />
      <p>
        Bootstrap <span> {progressBar === 0 ? "70%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 70 : progressBar}
        variant="warning"
        animated={true}
      />
      <p>
        CSS/Sass <span> {progressBar === 0 ? "80%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 80 : progressBar}
        variant="warning"
        animated={true}
      />
      <p>
        HTML <span> {progressBar === 0 ? "90%" : `${progressBar}%`}</span>
      </p>
      <ProgressBar
        className={styles[`custom-bar`]}
        now={progressBar === 0 ? 90 : progressBar}
        variant="warning"
        animated={true}
      />

      {showAlternativeMessage ? (
        <div className={styles.action}>
          <p> But for the moment, let's focus on the present. </p>

          <button onClick={resetPercentage}> Reset </button>
        </div>
      ) : (
        <div className={styles.action}>
          <p>
            People always ask in interviews "Where do you see yourself in 5
            years?" Click on the button below to see my answer to their
            question.
          </p>
          <FaArrowDown className={styles.arrow} />

          <button className={styles.button} onClick={increasePercentage}>
            Click here
          </button>
        </div>
      )}
    </div>
  );
};

export default TechnicalSkills;
