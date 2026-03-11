"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bharat_Joshi_Resume.pdf";
    link.download = "Bharat_Joshi_Resume.pdf";
    link.click();
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.section 
      id="home" 
      className={`glass ${styles.heroBento}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.heroLayout}>
        <motion.div variants={itemVariants} className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/profile.svg" 
              alt="Bharat Joshi" 
              width={160} 
              height={160} 
              className={styles.profileImage}
              priority
            />
          </div>
        </motion.div>
        
        <div className={styles.textCol}>
          <motion.h1 variants={itemVariants} className={styles.title}>
            Hi, I'm <br/><span className="text-gradient-primary">Bharat Joshi</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className={styles.subtitle}>
            Senior Fullstack Developer
          </motion.h2>

          <motion.p variants={itemVariants} className={styles.description}>
            8+ years building scalable, secure, and user-centric web applications using Angular, React, and .NET Core.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.details}>
            <span className={styles.detailsItem}>📍 Surat, India</span>
            <span className={styles.detailsItem}>✉️ jb.joshi2009@gmail.com</span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <button onClick={handleDownload} className="btn-primary mt-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 15L8 11M12 15L16 11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
