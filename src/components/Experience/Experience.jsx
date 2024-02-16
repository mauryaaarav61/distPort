import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6"; 
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skillIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    "React.js": <FaReact />,
    "Node.js": <FaNodeJs />,
    Python: <FaPython />,
    Figma: <FaFigma />, // If Figma doesn't have a corresponding icon, set it to null
    "Tailwind CSS": <SiTailwindcss />,
    Redux: <SiRedux />,
    "Express.js": <FaServer />,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}> Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const icon = skillIcons[skill.title];
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>{icon}</div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
