import { AboutMe } from "components/About";
import { ContactForm } from "components/Contact";
import { Hero } from "components/Hero";
import { Projects } from "components/Projects";

async function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <ContactForm />
    </>
  );
}

export default Home;
