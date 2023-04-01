import { AboutMe } from "../components/About";
import { ContactForm } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
    </>
  );
}

export default Home;
