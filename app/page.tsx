import { AboutMe } from "../components/About";
import { ContactForm } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

function Home() {
  return (
    <div className="flex flex-col gap-44 mx-8 pt-24 sm:mx-16 sm:gap-56 md:mx-28 md:gap-64 lg:mx-36 lg:gap-80 xl:mx-56 2xl:mx-64">
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default Home;
