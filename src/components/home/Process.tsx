import React from 'react';

const processSteps = [
  {
    number: '1',
    title: 'Share Your Vision',
    description: 'You bring your vision, clearly described. We listen and understand your goals.',
    image: '/oskar_philip_listen_blur.jpg',
    alt: 'Listening to your vision',
  },
  {
    number: '2',
    title: 'Building Your Blueprint',
    description: 'We map out the best path, leveraging advanced technology and our expertise to plan your project.',
    image: '/Philip_Oskar_AboutUsPicture_blur.jpeg',
    alt: 'Building the blueprint - Team collaboration',
  },
  {
    number: '3',
    title: 'Launch & Iterate',
    description: 'We build and launch an initial version of your product, then refine it based on feedback for continued success.',
    image: '/oskar_philip_convention.jpeg',
    alt: 'Launch and iteration - Project success',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="process-title text-3xl md:text-4xl font-bold text-primary mb-4">Our Collaborative Process</h2>
          <div className="title-underline h-1 w-24 bg-accent mx-auto mb-14"></div>
        </div>
        <div className="process-steps flex flex-wrap justify-around gap-10">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="process-card w-full max-w-xs md:max-w-sm bg-white rounded-xl border-2 border-[#919da0] shadow-lg flex flex-col overflow-hidden opacity-0"
              style={{
                animation: `cardEnter 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
                animationDelay: `${0.4 + idx * 0.3}s`,
              }}
            >
              <div className="card-image-container w-full h-52 overflow-hidden">
                <img src={step.image} alt={step.alt} className="w-full h-full object-cover" />
              </div>
              <div className="card-text-content flex flex-col items-center p-6 flex-1">
                <div
                  className="step-number-container w-16 h-16 bg-[#414b53] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md"
                  style={{
                    animation: `numberPop 0.6s cubic-bezier(0.68,-0.6,0.32,1.6) forwards, pulseGlow 3s infinite alternate ease-in-out 1.1s`,
                    animationDelay: `${1.1 + idx * 0.3}s, 2.1s`,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="step-title text-xl font-bold mb-2 text-[#414b53]">{step.title}</h3>
                <p className="step-description text-base text-[#919da0]">{step.description}</p>
              </div>
              <style>{`
                .process-card {
                  opacity: 0;
                  animation: cardEnter 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
                }
                .process-card:nth-child(1) { animation-delay: 0.4s; }
                .process-card:nth-child(2) { animation-delay: 0.7s; }
                .process-card:nth-child(3) { animation-delay: 1.0s; }
                .process-card:hover {
                  transform: translateY(-10px) scale(1.02);
                  box-shadow: 0 18px 35px rgba(65,75,83,0.12);
                  border-color: #5e6b76;
                }
                .step-number-container {
                  opacity: 0;
                  animation: numberPop 0.6s cubic-bezier(0.68,-0.6,0.32,1.6) forwards, pulseGlow 3s infinite alternate ease-in-out 1s;
                  box-shadow: 0 0 0px rgba(94,107,118,0.7);
                }
                @keyframes cardEnter {
                  from { opacity: 0; transform: translateY(50px) scale(0.9); }
                  to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes numberPop {
                  0% { opacity: 0; transform: scale(0.4) rotateZ(45deg); }
                  70% { opacity: 1; transform: scale(1.15) rotateZ(-10deg); }
                  100% { opacity: 1; transform: scale(1) rotateZ(0deg); }
                }
                @keyframes pulseGlow {
                  from { box-shadow: 0 0 5px rgba(94,107,118,0.4), 0 0 10px rgba(94,107,118,0.3); }
                  to { box-shadow: 0 0 15px rgba(94,107,118,0.7), 0 0 25px rgba(94,107,118,0.5); }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
