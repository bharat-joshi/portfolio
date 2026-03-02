"use client";

import React from 'react';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>About <span className="text-gradient">Me</span></h2>
      </div>
      <div className={styles.content}>
        <p>
          Experienced Web Developer with comprehensive expertise in all stages of modern web development. 
          Skilled in user interface design, testing, and debugging, with strong experience in the design, 
          installation, testing, and maintenance of web applications.
        </p>
        <p>
          Possesses a versatile and robust technical skill set, proficient in <strong>.NET Core, Angular 17, 
          Basic React, Node.js, MongoDB, C#, IIS, and Microsoft SQL Server</strong>. Demonstrated ability 
          to work effectively both independently and collaboratively in team environments, ensuring high-quality 
          and efficient project delivery.
        </p>
      </div>
    </section>
  );
}
