import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Loader } from '../components/Loader';
import Navbar from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/About';
import { Projects } from '../components/Projects';
import { ContactForm } from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
    }
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  const mainWrapper =
    'flex flex-col gap-44 mx-8 pt-24 sm:mx-16 sm:gap-56 md:mx-28 md:gap-64 lg:mx-36 lg:gap-80 xl:mx-56 2xl:mx-64';

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className={mainWrapper}>
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
