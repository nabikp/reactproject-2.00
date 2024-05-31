import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  console.log(styles);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px"></MdMessage>}
            ></Button>
            <Button
              text="VIA  CALL"
              icon={<FaPhoneAlt fontSize="24px"></FaPhoneAlt>}
            ></Button>
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL CALL"
            icon={<HiMail fontSize="24px"></HiMail>}
          ></Button>
          <form>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textArea name="text"></textArea>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end ",
              }}
            >
              <Button isOutline={false} text="SUBMIT BUTTON"></Button>
            </div>
          </form>
          <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="contact image"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
