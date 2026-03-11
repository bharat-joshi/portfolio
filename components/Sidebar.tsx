"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.imageContainer}>
          <Image 
            src="/profile.svg" 
            alt="Bharat Joshi" 
            width={140} 
            height={140} 
            className={styles.profileImage}
            priority
          />
        </div>
        <h1 className={styles.name}>Bharat Joshi</h1>
        <div className={styles.title}>Full Stack Developer</div>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>📍 Surat, India</div>
          <div className={styles.contactItem}>📞 +91 99749 77486</div>
          <div className={styles.contactItem}>✉️ jb.joshi2009@gmail.com</div>
        </div>
      </div>

      <nav className={styles.navMenu}>
        <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className={styles.navLink}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className={styles.navLink}>
          About Me
        </a>
        <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className={styles.navLink}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className={styles.navLink}>
          Projects
        </a>
        <a href="#education" onClick={(e) => handleScrollTo(e, 'education')} className={styles.navLink}>
          Education
        </a>
      </nav>
    </aside>
  );
}
