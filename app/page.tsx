import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
