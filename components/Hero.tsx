"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const handleDownload = () => {
    // This assumes Bharat_Joshi_Resume.pdf is in the public folder.
    const link = document.createElement("a");
    link.href = "/Bharat_Joshi_Resume.pdf";
    link.download = "Bharat_Joshi_Resume.pdf";
    link.click();
  };

  return (
    <section className={styles.hero}>
      <div className={`${styles.glassCard} animate-fade-in-up`}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image 
              src="/profile.svg" 
              alt="Bharat Joshi" 
              width={160} 
              height={160} 
              className={styles.profileImage}
              priority
            />
          </div>
          <h1 className={styles.title}>
            Hi, I'm <span className="text-gradient">Bharat Joshi</span>
          </h1>
          <h2 className={styles.subtitle}>F U L L S T A C K D E V E L O P E R</h2>
          <div className={styles.details}>
            <p>📍 Surat, India</p>
            <p>📞 +91 99749 77486</p>
            <p>✉️ jb.joshi2009@gmail.com</p>
          </div>
          <button onClick={handleDownload} className="btn-primary mt-4">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
