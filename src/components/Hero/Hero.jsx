import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mark Renzkie</h1>
        <p className={styles.description}>

        I'm a dedicated computer engineer with a specialization in software development, particularly skilled 
        in Python and proficient in languages such as Javascript, C++, and Java. 

        <br />
        <br />
        
        Aspiring to excel as a Software Engineer, Full-Stack Developer, or Python Developer, 
        I'm passionate about exploring cutting-edge frameworks and technologies. 

        </p>
        <a href="mailto:marky.aeron@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
