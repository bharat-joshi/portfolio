import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import styles from "./page.module.css";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bharat Joshi',
    jobTitle: 'Senior Fullstack Developer',
    description: '8+ years building scalable, secure, and user-centric web applications using Angular, React, and .NET Core.',
    url: 'http://bharatjoshi.com/', // Replace with your actual deployed URL
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressCountry: 'India'
    },
    email: 'jb.joshi2009@gmail.com',
    sameAs: [
      // "https://www.linkedin.com/in/yourprofile",
      // "https://github.com/yourprofile"
    ],
    knowsAbout: [
      'Angular', 'React', '.NET Core', 'SQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Next.js'
    ]
  };

  return (
    <main className={`container ${styles.bentoGrid}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.heroArea}>
        <Hero />
      </div>
      <div className={styles.profileArea}>
        <Profile />
      </div>
      <div className={styles.skillsArea}>
        <Skills />
      </div>
      <div className={styles.projectsArea}>
        <Projects />
      </div>
      <div className={styles.educationArea}>
        <Education />
      </div>
    </main>
  );
}
