"use client";

import React from 'react';
import styles from './Education.module.css';

const education = [
  { degree: "M.C.A", institution: "GTU University, Surat", year: "March 2012 — March 2015", score: "S.P.I : 7.6" },
  { degree: "B.C.A", institution: "VNSGU University, Surat", year: "March 2009 — March 2012", score: "Percentage : 60" },
  { degree: "H.S.C", institution: "GSHEB Board, Surat", year: "March 2008 — March 2009", score: "Percentage : 72" },
  { degree: "S.S.C", institution: "GSEB Board, Surat", year: "March 2006 — March 2007", score: "Percentage : 52" },
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Educational <span className="text-gradient">Background</span></h2>
      </div>

      <div className={styles.timeline}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.date}>{edu.year}</div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <div className={styles.institution}>{edu.institution}</div>
              <div className={styles.score}>{edu.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
