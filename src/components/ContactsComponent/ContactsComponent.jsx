import React from "react";
import styles from "./ContactsComponent.module.scss";

export const ContactsComponent = () => {
  return (
    <div className={styles.container} id="contacts">
      <div className={styles.contactsBox}>
        <h2>Contacts</h2>
        <div className={styles.contactsItem}>
          <p>Email: </p>
          <a href="mailto: vvdementiev87@gmail.com">vvdementiev87@gmail.com</a>
        </div>
        <div className={styles.contactsItem}>
          <p>Mobile: </p>
          <a href="tel: +79099003690">+7 (909) - 900 - 36 - 90</a>
        </div>
        <div className={styles.contactsItem}>
          <p>Telegram: </p>
          <a href="tg://resolve?domain=vvdementiev87">vvdementiev87</a>
        </div>
      </div>
    </div>
  );
};
