"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
      },
      {
        name: "DirectBazaar",
        description: "MLM system enabling member management with online bus booking and integrated payment gateway services.",
        impact: [
          "Integrated multiple third-party payment gateways with 99.9% uptime",
          "Scaled architecture to support a growing member base seamlessly"
        ],
        tech: ["JavaScript", "ASP.NET MVC", "SQL Server 2012"],
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
        tech: ["Angular 9", "NgRx", "RxJS", ".NET Core", "Azure"],
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
      },
      {
        name: "MSM",
        description: "Medical Service Management system optimizing healthcare service delivery and patient care coordination.",
        impact: [
          "Streamlined patient data synchronization across multiple care centers",
          "Reduced administrative overhead by 25% through automated coordination"
        ],
        tech: ["Angular 17"],
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
      },
      {
        name: "Spotter",
        description: "Health Insurance Management web application adopting microservices architecture to manage different insurance modules.",
        impact: [
          "Migrated legacy monolithic systems to robust microservices architecture",
          "Enhanced system resilience and isolated module deployments"
        ],
        tech: ["Angular 12", ".NET Core Web API", "SQL Server"],
      },
      {
        name: "Dr.Pro",
        description: "Medical service and clinic management software optimizing healthcare delivery and doctor-patient relationship.",
        impact: [
          "Accelerated UI development using PrimeNG, cutting delivery time by 20%",
          "Improved patient engagement through optimized doctor schedules"
        ],
        tech: ["Angular 17", "PrimeNG", ".NET"],
      }
    ]
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Featured <span className="text-gradient">Projects</span></h2>
        <p className={styles.subtitle}>Professional impact categorized by company.</p>
      </motion.div>

      <div className={styles.companyList}>
        {groupedProjects.map((group, groupIdx) => (
          <motion.div 
            key={groupIdx} 
            className={styles.companySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className={styles.companyHeader}>
              <span className={styles.companyIcon}>🏢</span>
              <h3 className={styles.companyNameHeading}>{group.company}</h3>
            </div>
            
            <div className={styles.grid}>
              {group.projects.map((proj, idx) => (
                <motion.div key={idx} variants={cardVariants} className={`glass ${styles.card}`}>
                  <div className={styles.cardHeader}>
                    <h4 className={styles.projectName}>{proj.name}</h4>
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
