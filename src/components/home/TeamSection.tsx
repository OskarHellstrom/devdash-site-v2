
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: "Philip Rönnmark",
      role: "Co-founder & AI Architect",
      bio: "As a former product owner and developer, I like to automate and be useful, focusing on helping people improve and provide more value, all fueled by my enthusiasm for AI."
    },
    {
      name: "Oskar Hellström",
      role: "Co-founder & Engineering Lead",
      bio: "At Ericsson, drawing on my Engineering Physics Master's, I automated 5G tests, drove cloud upgrades, and translated tech for customers, building my full-lifecycle expertise."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet The Founders</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in" 
              style={{animationDelay: `${0.3 + index * 0.2}s`}}
            >
              <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1 text-center">{member.name}</h3>
                  <p className="text-accent mb-4 text-center">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
