import ReactTyped from "react-typed";
import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import { IoIosAirplane } from "react-icons/io";

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
                  "There is much to say about me, but the reason you're here is to explore my creative side and witness my programming skills, perhaps even a blend of both. I discovered my passion for front-end development not long ago, but since then, I've dedicated my whole heart to it, constantly striving to improve.",
                ]}
                typeSpeed={30}
                startDelay={900}
                showCursor={false}
              />
            </p>
            <p className={styles.red}>
              <ReactTyped
                strings={[
                  "With this very brief insight into who I am, let's now shift our focus to the reason you're here: my technical presentation, my portfolio.",
                ]}
                typeSpeed={30}
                startDelay={14600}
                showCursor={false}
              />
            </p>
            <p className={styles.yellow}>
              <ReactTyped
                strings={["$ buckle your seatbelt; we're about to begin! "]}
                typeSpeed={40}
                startDelay={21000}
              />
              <IoIosAirplane className={styles.flyingIcon} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
