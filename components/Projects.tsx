"use client";

import React from 'react';
import styles from './Projects.module.css';

const groupedProjects = [
  {
    company: "Elaunch Solution Pvt. Ltd.",
    projects: [
      {
        name: "RitzPay & BinExLive",
        description: "Cryptocurrency trading platforms with real-time market analysis, automated trading algorithms, and secure 2FA.",
        impact: [
          "Engineered a high-performance trading engine processing 10,000+ daily transactions",
          "Reduced market data latency by 30% through optimized Web API 2 endpoints"
        ],
        tech: ["Angular 4", "ASP.NET MVC", "Web API 2", "SQL Server"],
        liveLink: "#"
      },
      {
        name: "DirectBazaar",
        description: "MLM system enabling member management with online bus booking and integrated payment gateway services.",
        impact: [
          "Integrated multiple third-party payment gateways with 99.9% uptime",
          "Scaled architecture to support a growing member base seamlessly"
        ],
        tech: ["JavaScript", "ASP.NET MVC", "SQL Server 2012"],
        liveLink: "#"
      }
    ]
  },
   {
    company: "S.M. Solutions Pvt. Ltd.",
    projects: [
      {
        name: "RSVP",
        description: "Event & restaurant management system hosted on Azure. Cross-panel booking using StencilJS, POS with RxJS and Ionic.",
        impact: [
          "Deployed highly available microservices to Azure App Services",
          "Built a seamless POS experience using advanced state management (NgRx/RxJS)"
        ],
        tech: ["Angular 9", "NgRx", "RxJS", ".NET Core", "Azure App Services"],
        liveLink: "#"
      }
    ]
  },
  {
    company: "Yosa Technology Pvt. Ltd.",
    projects: [
      {
        name: "GMS (Get My Service)",
        description: "Service Provider Management System to streamline service delivery in healthcare, IT, and consulting.",
        impact: [
          "Optimized service delivery workflows, increasing system efficiency by 35%",
          "Architected real-time updates handling 1,000+ daily concurrent users"
        ],
        tech: ["Angular 12", "Firebase"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        name: "MSM",
        description: "Medical Service Management system optimizing healthcare service delivery and patient care coordination.",
        impact: [
          "Streamlined patient data synchronization across multiple care centers",
          "Reduced administrative overhead by 25% through automated coordination"
        ],
        tech: ["Angular 17"],
        liveLink: "#"
      }
    ]
  },
    {
    company: "ProjectTree Pvt. Ltd.",
    projects: [
      {
        name: "AJE Coke",
        description: "Lab management system for completely dynamic test execution, traceability, and automated result evaluation.",
        impact: [
          "Developed automated PDF/Excel reporting, saving 15+ hours of manual work weekly",
          "Implemented dynamic test execution ensuring 100% compliance traceability"
        ],
        tech: ["Angular 17", ".NET Core 8", "PDF/Excel Reports"],
        liveLink: "#"
      },
      {
        name: "Spotter",
        description: "Health Insurance Management web application adopting microservices architecture to manage different insurance modules.",
        impact: [
          "Migrated legacy monolithic systems to robust microservices architecture",
          "Enhanced system resilience and isolated module deployments"
        ],
        tech: ["Angular 12", ".NET Core Web API", "SQL Server"],
        liveLink: "#"
      },
      {
        name: "Dr.Pro",
        description: "Medical service and clinic management software optimizing healthcare delivery and doctor-patient relationship.",
        impact: [
          "Accelerated UI development using PrimeNG, cutting delivery time by 20%",
          "Improved patient engagement through optimized doctor schedules"
        ],
        tech: ["Angular 17", "PrimeNG", ".NET"],
        liveLink: "#"
      }
    ]
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
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
                    <div className={styles.projectLinks}>
                      {proj.liveLink && (
                        <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Live Demo">
                          🌐 Demo
                        </a>
                      )}
                      {proj.githubLink && (
                        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title="Source Code">
                          💻 Code
                        </a>
                      )}
                    </div>
                  </div>
                  <p className={styles.description}>{proj.description}</p>
                  {proj.impact && (
                    <ul className={styles.impactList}>
                      {proj.impact.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
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
