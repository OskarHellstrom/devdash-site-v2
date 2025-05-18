
import React from 'react';
import { Button } from "@/components/ui/button";

const CollaborateHero = () => {
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
            Let's Build Together
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Turning your vision into reality through innovation and collaboration
          </p>
          
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Button size="lg" asChild>
              <a href="#collaboration-form" className="px-8">Start Collaborating</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateHero;
