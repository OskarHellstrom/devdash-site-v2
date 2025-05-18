import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import Genesis from '@/components/about/Genesis';
import Founders from '@/components/about/Founders';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - devdash";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutHero />
        <Genesis />
        <Founders />
      </main>
      <Footer />
    </div>
  );
};

export default About;
