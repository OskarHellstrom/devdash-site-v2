import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CollaborateHero from '@/components/collaborate/CollaborateHero';
import Vision from '@/components/collaborate/Vision';
import CollaborationForm from '@/components/collaborate/CollaborationForm';
import FAQ from '@/components/collaborate/FAQ';

const Collaborate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Collaborate - devdash";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <CollaborateHero />
        <Vision />
        <CollaborationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Collaborate;
