import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`container ${styles.bentoGrid}`}>
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
