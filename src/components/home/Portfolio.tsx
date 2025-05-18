import React, { useState, useEffect, useRef } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed unused import

type ProjectType = {
  id: string;
  title: string;
  description: string;
  category: string;
  animationType: string;
};

const portfolioItemsData: ProjectType[] = [
    {
    id: "flexa",
      title: "Flexa",
      description: "Quantify your flexibility, track progress, and share with peers.",
    category: "Health & Fitness",
    animationType: "circle"
    },
    {
    id: "klyfta",
      title: "Klyfta",
      description: "Engage in dialogues with your future self. Manifest your potential.",
    category: "Personal Growth AI",
    animationType: "square"
    },
    {
    id: "pocket-engine",
      title: "Pocket Engine",
      description: "Visually construct AI agents on an intuitive canvas.",
    category: "AI Development Tools",
    animationType: "triangle"
    },
    {
    id: "codebase-summarizer",
      title: "Codebase Summarizer",
      description: "Generate comprehensive documentation for your codebases instantly.",
    category: "Developer Productivity",
    animationType: "line"
  }
];

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState<ProjectType | undefined>(portfolioItemsData[0]);
  const animationPaneRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: ProjectType) => {
    setActiveItem(item);
    if (animationPaneRef.current) {
      switch (item.animationType) {
        case 'circle':
          animationPaneRef.current.style.backgroundColor = '#4a555c';
          break;
        case 'square':
          animationPaneRef.current.style.backgroundColor = '#535e65';
          break;
        case 'triangle':
          animationPaneRef.current.style.backgroundColor = '#5c676e';
          break;
        case 'line':
          animationPaneRef.current.style.backgroundColor = '#657077';
          break;
        default:
          animationPaneRef.current.style.backgroundColor = '#414b53'; 
      }
    }
  };

  useEffect(() => {
    if (animationPaneRef.current && activeItem) {
      switch (activeItem.animationType) {
        case 'circle':
          animationPaneRef.current.style.backgroundColor = '#4a555c';
          break;
        case 'square':
          animationPaneRef.current.style.backgroundColor = '#535e65';
          break;
        case 'triangle':
          animationPaneRef.current.style.backgroundColor = '#5c676e';
          break;
        case 'line':
          animationPaneRef.current.style.backgroundColor = '#657077';
          break;
        default:
          animationPaneRef.current.style.backgroundColor = '#414b53'; 
      }
    }
  }, [activeItem]);

  const getAnimationClass = (type: string | undefined) => {
    if (!type) return '';
    switch (type) {
      case 'circle': return 'interactive-portfolio-anim-circle';
      case 'square': return 'interactive-portfolio-anim-square';
      case 'triangle': return 'interactive-portfolio-anim-triangle';
      case 'line': return 'interactive-portfolio-anim-line';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ideas We've Helped Bring to Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the innovative projects we've partnered on, turning unique visions into reality.
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mt-6"></div>
        </div>
        
        <div className="mx-auto max-w-6xl w-full shadow-2xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 lg:w-2/5 bg-[#d4d3c8] p-6 sm:p-8 space-y-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
              <h2 className="text-3xl font-bold text-[#414b53] mb-6">Portfolio</h2>
              <div>
                {portfolioItemsData.map(item => (
            <div 
                    key={item.id}
                    className={`interactive-portfolio-item p-4 rounded-lg mb-3 border border-transparent ${
                      activeItem?.id === item.id ? 'active' : ''
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <h3 
                      className="text-xl font-semibold"
                      style={activeItem?.id === item.id ? { color: '#d4d3c8' } : { color: '#414b53' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm mt-1"
                      style={activeItem?.id === item.id ? { color: '#d4d3c8' } : { color: '#414b53' }}
                    >
                      {item.description}
                    </p>
                    <p 
                      className="text-xs mt-2 font-medium uppercase tracking-wider"
                      style={activeItem?.id === item.id ? { color: '#d4d3c8' } : { color: 'rgba(65, 75, 83, 0.7)' } /* Adjusted from text-[#414b53]/70 */}
                    >
                      {item.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div 
              ref={animationPaneRef}
              id="animationPane" 
              className="md:w-2/3 lg:w-3/5 interactive-portfolio-animation-pane p-6 sm:p-8 flex flex-col items-center justify-center text-center"
            >
              {activeItem ? (
                <div id="animationContent" className="text-lg">
                  <h2 className="text-3xl font-bold mb-4 text-[#d4d3c8]">{activeItem.title}</h2>
                  <p className="text-md mb-6 text-[#919da0]">
                    This is a placeholder animation for {activeItem.title}.
                  </p>
                  <div className={`animation-element ${getAnimationClass(activeItem.animationType)}`}></div>
                </div>
              ) : (
                <div id="animationContent" className="text-lg">
                  <p className="text-2xl font-semibold">Select an item to see the magic!</p>
                  <p className="mt-2 text-sm text-[#919da0]">The content here will change based on your selection.</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
