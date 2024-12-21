import React from 'react';
import { Rocket, Satellite, Globe } from 'lucide-react';

export default function Missions() {
  const missions = [
    {
      icon: <Rocket className="h-12 w-12 text-purple-500" />,
      title: "Mars Colonization",
      description: "Establishing sustainable human presence on Mars through advanced space technology and research."
    },
    {
      icon: <Satellite className="h-12 w-12 text-purple-500" />,
      title: "Satellite Network",
      description: "Deploying next-generation satellite networks for global communication and internet coverage."
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-500" />,
      title: "Earth Observation",
      description: "Monitoring Earth's climate and ecosystems using advanced satellite technology."
    }
  ];

  return (
    <section id="missions" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Missions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring new frontiers and pushing the boundaries of human achievement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-4">{mission.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
              <p className="text-gray-400">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}