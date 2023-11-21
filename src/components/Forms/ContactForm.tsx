import phone from "../../assets/images/phone.png";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles[`contact-form`]}>
      <img src={phone} />
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
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          />
          <textarea name="message" placeholder="Message" rows={3} />
          <button>Send</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
