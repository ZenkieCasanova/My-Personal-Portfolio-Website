import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/AboutMeImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                I'm a Python developer with skills and experience in data analysis, Odoo ERP System,
                CNN, AI and Machine Learning
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have the skills and knowledge in developing fast and optimised back-end systems
                and RESTful APIs using Django. I can use PostgreSQL user security control and access rights.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer/Engineer</h3>
              <p>
                I can design multiple landing pages and have designed complex systems. I can test and automate 
                websites using Selenium.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
