"use client";

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
        
     <div className={styles.container}> 
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.title}>Let's Connect</h3>
            <p className={styles.description}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className={styles.contactDetails}>
              <a href="mailto:jb.joshi2009@gmail.com" className={styles.contactItem}>
                <span className={styles.icon}>✉️</span> jb.joshi2009@gmail.com
              </a>
              <span className={styles.contactItem}>
                <span className={styles.icon}>📞</span> +91 99749 77486
              </span>
              <span className={styles.contactItem}>
                <span className={styles.icon}>📍</span> Surat, India
              </span>
            </div>
          </div> 
          
          <div className={styles.socials}>
            <h4 className={styles.socialTitle}>Social Profiles</h4>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/bharat-joshi-9a40ba95?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
               <a href="https://github.com/bharat-joshi" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
              <a href="https://x.com/jb_bharat" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter
              </a> 
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Bharat Joshi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
