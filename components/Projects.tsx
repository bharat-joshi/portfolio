"use client";

import React from 'react';
import styles from './Projects.module.css';

const groupedProjects = [
  {
    company: "Yosa Technology Pvt. Ltd.",
    projects: [
      {
        name: "GMS (Get My Service)",
        description: "Service Provider Management System to streamline service delivery in healthcare, IT, and consulting.",
        tech: ["Angular 12", "Firebase"]
      },
      {
        name: "MSM",
        description: "Medical Service Management system optimizing healthcare service delivery and patient care coordination.",
        tech: ["Angular 17"]
      }
    ]
  },
  {
    company: "Elaunch Solution Pvt. Ltd.",
    projects: [
      {
        name: "RitzPay & BinExLive",
        description: "Cryptocurrency trading platforms with real-time market analysis, automated trading algorithms, and secure 2FA.",
        tech: ["Angular 4", "ASP.NET MVC", "Web API 2", "SQL Server"]
      },
      {
        name: "DirectBazaar",
        description: "MLM system enabling member management with online bus booking and integrated payment gateway services.",
        tech: ["JavaScript", "ASP.NET MVC", "SQL Server 2012"]
      }
    ]
  },
  {
    company: "ProjectTree Pvt. Ltd.",
    projects: [
      {
        name: "AJE Coke",
        description: "Lab management system for completely dynamic test execution, traceability, and automated result evaluation.",
        tech: ["Angular 17", ".NET Core 8", "PDF/Excel Reports"]
      },
      {
        name: "Spotter",
        description: "Health Insurance Management web application adopting microservices architecture to manage different insurance modules.",
        tech: ["Angular 12", ".NET Core Web API", "SQL Server"]
      },
      {
        name: "Dr.Pro",
        description: "Medical service and clinic management software optimizing healthcare delivery and doctor-patient relationship.",
        tech: ["Angular 17", "PrimeNG", ".NET"]
      }
    ]
  },
  {
    company: "S.M. Solutions Pvt. Ltd.",
    projects: [
      {
        name: "RSVP",
        description: "Event & restaurant management system hosted on Azure. Cross-panel booking using StencilJS, POS with RxJS and Ionic.",
        tech: ["Angular 9", "NgRx", "RxJS", ".NET Core", "Azure App Services"]
      }
    ]
  }
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured <span className="text-gradient">Projects</span></h2>
        <p className={styles.subtitle}>Professional projects categorized by company.</p>
      </div>

      <div className={styles.companyList}>
        {groupedProjects.map((group, groupIdx) => (
          <div key={groupIdx} className={styles.companySection}>
            <div className={styles.companyHeader}>
              <span className={styles.companyIcon}>🏢</span>
              <h3 className={styles.companyNameHeading}>{group.company}</h3>
            </div>
            <div className={styles.grid}>
              {group.projects.map((proj, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h4 className={styles.projectName}>{proj.name}</h4>
                  </div>
                  <p className={styles.description}>{proj.description}</p>
                  <div className={styles.techStack}>
                    {proj.tech.map((t, index) => (
                      <span key={index} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
