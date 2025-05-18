import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary/90 to-primary flex items-center">
      <div className="animate-background-shine bg-shine bg-[length:400%] absolute inset-0"></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-accent/20 via-transparent to-transparent opacity-70"
      ></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Expert Development, <span className="text-accent">Shared Success.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            We transform your ideas into reality through a unique partnership model—investing our expertise to build your project, ensuring we succeed together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Button size="lg" asChild>
              <a href="#contact" className="px-8">Contact Us</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="#process" className="px-8">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#process" className="text-white/60 hover:text-white transition-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
