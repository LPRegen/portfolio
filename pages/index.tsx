import type { NextPage } from "next";
import { AboutMe } from "../components/About";
import { ContactForm } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Layout variant="portfolio">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactForm />
      </Layout>
    </>
  );
};

export default Home;
