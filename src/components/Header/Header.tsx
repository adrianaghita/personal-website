import ReactTyped from "react-typed";
import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <NavBar />
      <section className={styles.header}>
        <div className={styles.terminal}>
          <div className={styles[`terminal-bar`]}>
            <div
              className={`${styles["terminal-button"]} ${styles["red"]}`}
            ></div>
            <div
              className={`${styles["terminal-button"]} ${styles["yellow"]}`}
            ></div>
            <div
              className={`${styles["terminal-button"]} ${styles["green"]}`}
            ></div>
          </div>
          <div className={styles[`terminal-content`]}>
            <p className={styles.yellow}>
              <ReactTyped
                strings={["_Hello! I'm Adriana."]}
                typeSpeed={30}
                showCursor={false}
              />
            </p>
            <p className={styles.green}>
              <ReactTyped
                strings={[
                  "My journey has led me to stepped onto the path of becoming a front-end developer and every line of code I write is fueled by a genuine passion for creating seamless and enjoyable user experiences.",
                ]}
                typeSpeed={20}
                startDelay={850}
                showCursor={false}
              />
            </p>
            <p className={styles.red}>
              <ReactTyped
                strings={[
                  "$ join me on this journey, where curiosity meets code, and the possibilities are limitless_",
                ]}
                typeSpeed={30}
                startDelay={7500}
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
