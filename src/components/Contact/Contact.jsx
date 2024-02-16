import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () =>{
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <hr />
        <br />
        <p>Feel free to reach out!</p>
        <div id="contact">
          <i className={styles.link}>
          <IoCallOutline />
            <a href="call:+917668622900">+917668622900</a>
          </i>
          <i className={styles.link}>
          <AiOutlineMail />
          <a href="mail to:rakesh22@navgurukul.org">rakesh22@navgurukul.org</a>
        </i>
          
          <p className={styles.link}><FaAddressCard /> Uttrakhand , Bharat (263151) </p>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/?size=48&id=13930&format=png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rakesh-kumar-49476a260">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/?size=50&id=12599&format=png"
            alt="Github icon"
          />
          <a href="https://github.com/mauryaaarav61">GitHub</a>
        </li>

        <li className={styles.link}>
          <img
            src="https://img.icons8.com/?size=48&id=5dzPqHelxBq4&format=png"
            alt="Twitter icon"
          />
          <a href="https://twitter.com/Rakesh0123Kumar">Twitter</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://img.icons8.com/?size=50&id=4z2zrIWYmGqx&format=png"
            alt="CodeChef"
          />
          <a href="https://twitter.com/Rakesh0123Kumar">CodeChef</a>
        </li>
      </ul>
    </footer>
  );
};
