"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
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
        <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className={styles.navLink}>
          Contact
        </a>
      </div>
    </nav>
  );
}
