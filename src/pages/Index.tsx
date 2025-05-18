import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
// import TeamSection from '@/components/home/TeamSection'; // Removed
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "devdash - Building partnerships through innovation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Portfolio />
        {/* <TeamSection /> */}{/* Removed */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
