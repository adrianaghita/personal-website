import useContactInput from "../../hooks/useContactInput";
import flowers from "../../assets/images/flowers-svgrepo-com.svg";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const {
    enteredName,
    nameChangeHandler,
    nameBlurHandler,
    nameHasError,
    enteredEmail,
    emailChangeHandler,
    emailBlurHandler,
    emailHasError,
    enteredMessage,
    messageChangeHandler,
    messageBlurHandler,
    messageHasError,
    formIsValid,
  } = useContactInput();

  const handleSubmit = () => {
    const email = "a.adrianaghita@gmail.com";
    const mailtoLink = `mailto:${email}?body=${encodeURIComponent(
      enteredMessage
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className={styles[`contact-form`]} onSubmit={handleSubmit}>
      <img src={flowers} />
      <form className={styles.form}>
        <fieldset name="contact">
          <legend id="contactDetailsLegend" className={styles[`form-legend`]}>
            Contact
          </legend>
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            autoComplete="on"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className={styles[`error-message`]}>
              Please enter a valid name.
            </p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={styles[`error-message`]}>
              Please enter a valid email.
            </p>
          )}
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError && (
            <p className={styles[`error-message`]}> Please enter a message.</p>
          )}
          <button
            disabled={!formIsValid}
            className={formIsValid ? "" : styles[`disabled`]}
          >
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
