import { portfolioData } from '@/data/portfolio';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const { personal, social, about, skillCategories, experience, projects, education, certifications } =
    portfolioData;

  return (
    <>
      <Navbar name={personal.name} />
      <main>
        <Hero personal={personal} social={social} />
        <About personal={personal} highlights={about.highlights} />
        <Skills skillCategories={skillCategories} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <Contact email={social.email} social={social} />
      </main>
      <Footer name={personal.name} social={social} />
    </>
  );
}
