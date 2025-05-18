import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Founders = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Oskar */}
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="border-none shadow-lg overflow-hidden h-full bg-white">
              <CardContent className="p-8 flex flex-col items-center h-full">
                <img src="/oskar.webp" alt="Oskar Hellström" className="w-32 h-32 object-cover rounded-full mb-6 shadow-md border-4 border-[#919da0]" />
                <h2 className="text-2xl font-bold text-primary mb-2">Meet Oskar</h2>
                <h3 className="text-xl text-accent mb-6">The Entrepreneurial Engineer</h3>
                <p className="text-gray-600 mb-4">
                  Growing up on a family farm instilled in Oskar a strong work ethic and a practical approach to problem-solving. A natural aptitude for mathematics and physics led him to a Master's in Engineering Physics.
                </p>
                <p className="text-gray-600 mb-4">
                  Inspired by his entrepreneurial siblings, Oskar's ambition was always to build and innovate. His career at Ericsson saw him at the forefront of 5G technology, delivering cutting-edge solutions and translating complex technical details for global clients, all while nurturing his vision for creating his own impactful ventures.
                </p>
                <div className="flex gap-4 mt-auto pt-4">
                  <a href="https://www.linkedin.com/in/oskar-hellstrom" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#5e6b76] hover:text-[#414b53] transition-colors" aria-label="Oskar's LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8" aria-hidden="true">
                      <rect x="16" y="16" width="416" height="480" rx="96" fill="#5e6b76"/>
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z" fill="#fff"/>
                    </svg>
                  </a>
                  <a href="mailto:oskar@devdash.co" className="inline-flex items-center text-[#5e6b76] hover:text-[#414b53] transition-colors" aria-label="Email Oskar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Philip */}
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <Card className="border-none shadow-lg overflow-hidden h-full bg-white">
              <CardContent className="p-8 flex flex-col items-center h-full">
                <img src="/philip.webp" alt="Philip Rönnmark" className="w-32 h-32 object-cover rounded-full mb-6 shadow-md border-4 border-[#919da0]" />
                <h2 className="text-2xl font-bold text-primary mb-2">Meet Philip</h2>
                <h3 className="text-xl text-accent mb-6">The Visionary Systems Architect</h3>
                <p className="text-gray-600 mb-4">
                  Philip's fascination with computing began early, a gift that quickly evolved into a deep passion for systems and software. With a Bachelor's and Master's in Computer Science, he embarked on a career developing and managing critical financial systems for multinational corporations.
                </p>
                <p className="text-gray-600 mb-4">
                  As a Product Owner for Scania's global finance system, Philip demonstrated his ability to lead complex projects, architect robust solutions, and drive technological advancement, always with an eye towards user value and system efficiency.
                </p>
                <div className="flex gap-4 mt-auto pt-4">
                  <a href="https://www.linkedin.com/in/philip-ronnmark/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#5e6b76] hover:text-[#414b53] transition-colors" aria-label="Philip's LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8" aria-hidden="true">
                      <rect x="16" y="16" width="416" height="480" rx="96" fill="#5e6b76"/>
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z" fill="#fff"/>
                    </svg>
                  </a>
                  <a href="mailto:philip@devdash.co" className="inline-flex items-center text-[#5e6b76] hover:text-[#414b53] transition-colors" aria-label="Email Philip">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Combined drive */}
        <div className="max-w-4xl mx-auto mt-16 opacity-0 animate-fade-in" style={{animationDelay: '0.7s'}}>
          <Card className="border-none shadow-lg overflow-hidden bg-primary text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Combined Drive</h2>
              <h3 className="text-xl text-accent mb-4">Building DevDash for Impact</h3>
              
              <p className="mb-4">
                Our Northern Swedish heritage fuels our ambition with a blend of pragmatism and innovative spirit. DevDash is born from this fusion: Philip's expertise in systems architecture and product leadership perfectly complements Oskar's engineering prowess and client-centric approach.
              </p>
              
              <p>
                Together, we are committed to leveraging AI and cutting-edge software development to create tools and partnerships that drive real-world value and foster mutual success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founders;
