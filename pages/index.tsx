import type { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { AboutMe } from '../components/About';
import Navbar from '../components/Navbar';
import { Projects } from '../components/Projects';
import { ContactForm } from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-32 mx-12 pt-24 sm:mx-24 md:mx-36">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
