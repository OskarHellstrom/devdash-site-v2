import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-primary flex items-center">
      <div className="animate-background-shine bg-shine bg-[length:400%] absolute inset-0"></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-accent/20 via-transparent to-transparent opacity-70"
      ></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            About devdash
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Forging partnerships through innovation and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
