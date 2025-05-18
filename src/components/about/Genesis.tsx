import React from 'react';

const Genesis = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:gap-12 items-start">
            {/* Text content (left column) */}
            <div className="md:w-1/2 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Genesis</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  Rooted in the resilience and collaborative spirit of northern Sweden, our journey began long before devdash was conceived. We, Philip Rönnmark and Oskar Hellström, first crossed paths in primary school, forging a friendship that would eventually lead us to the bustling tech landscape of Stockholm.
          </p>
                <p className="mb-6">
            Philip, armed with a Master's in Computer Science, and Oskar, with a Master's in Engineering Physics, both honed our skills in the demanding IT departments of large enterprises.
          </p>
                <p>
                  It was here, amidst complex systems and global operations, that we witnessed firsthand the transformative power of technology and the persistent need for innovative, efficient solutions. This shared experience, coupled with an innate entrepreneurial drive, sparked the ambition to create something impactful – something that would become devdash.
          </p>
              </div>
            </div>
            
            {/* Image (right column) - This will take up remaining space and be large */}
            <div className="md:w-1/2 mt-8 md:mt-0 opacity-0 animate-fade-in flex justify-center md:justify-end" style={{animationDelay: '0.35s'}}>
              <img 
                src="/Philip_Oskar_AboutUsPicture.jpeg" 
                alt="Oskar Hellström and Philip Rönnmark - The devdash Team" 
                className="rounded-xl shadow-2xl w-full max-w-lg lg:max-w-xl h-auto object-contain md:object-cover md:max-h-[600px] lg:max-h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genesis;
