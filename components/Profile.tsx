"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <section id="about" className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>About <span className="text-gradient">Me</span></h2>
      </motion.div>
      <motion.div 
        className={`glass ${styles.content}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
      >
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
      </motion.div>
    </section>
  );
}
