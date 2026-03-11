"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

import { 
  SiReact, SiAngular, SiDotnet,
  SiJavascript, SiTypescript, 
  SiRedux, SiNgrx, SiReactivex, SiJquery, SiGit 
} from 'react-icons/si';

import { FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  { name: ".NET Core", icon: <SiDotnet />, color: "#512BD4" },
  { name: "SQL", icon: <FaDatabase />, color: "#CC292B" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML/CSS", icon: <div style={{ display: "flex", gap: "4px" }}><FaHtml5 color="#E34F26"/><FaCss3Alt color="#1572B6"/></div>, color: "" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "NGRX", icon: <SiNgrx />, color: "#BA2BD2" },
  { name: "RXJS", icon: <SiReactivex />, color: "#B7178C" },
  { name: "jQuery", icon: <SiJquery />, color: "#0769AD" },
  { name: "Git", icon: <SiGit />, color: "#F05032" }
];

const languages = [
  "Gujarati", "Hindi", "English"
];

const hobbies = [
  "Reading", "Watching Movies", "Learning new tech"
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const badgeVariants: any = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className={styles.title}>Skills & <span className="text-gradient">Expertise</span></h2>
      </motion.div>
      
      <div className={styles.gridContainer}>
        <motion.div 
          className={styles.skillsBox}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.subtitle}>Technical Skills</h3>
          <motion.div 
            className={styles.tags}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill, index) => (
              <motion.span 
                key={index} 
                className={styles.tag}
                variants={badgeVariants}
                whileHover="hover"
              >
                <span className={styles.iconWrapper} style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.sideBox}>
          <motion.div 
            className={styles.box}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.subtitle}>Languages</h3>
            <ul className={styles.list}>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className={styles.box}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.subtitle}>Hobbies</h3>
            <ul className={styles.list}>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
