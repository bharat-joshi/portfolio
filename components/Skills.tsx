"use client";

import React from 'react';
import styles from './Skills.module.css';

const skills = [
  "SQL", "HTML & CSS", "Redux", "jQuery", "HTML5", 
  "React", "Git", "JavaScript", "Angular", "NGRX", 
  "RXJS", ".NET Core WebAPI"
];

const languages = [
  "Gujarati", "Hindi", "English"
];

const hobbies = [
  "Reading", "Watching Movies", "Learning new tech"
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Skills & <span className="text-gradient">Expertise</span></h2>
      </div>
      
      <div className={styles.gridContainer}>
        <div className={styles.skillsBox}>
          <h3 className={styles.subtitle}>Technical Skills</h3>
          <div className={styles.tags}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.tag} style={{ animationDelay: `${index * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.sideBox}>
          <div className={styles.box}>
            <h3 className={styles.subtitle}>Languages</h3>
            <ul className={styles.list}>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.box}>
            <h3 className={styles.subtitle}>Hobbies</h3>
            <ul className={styles.list}>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
