import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rakesh Kumar !</h1>
        <p className={styles.description}>
          I'm a full-stack developer with internship experience in React and
          NodeJS. Reach out if you'd like to know more !
        </p>

        <a href="mailto:rakesh22@navgurukul.org" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/WhatsAppImage.png")}
        alt="my image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
