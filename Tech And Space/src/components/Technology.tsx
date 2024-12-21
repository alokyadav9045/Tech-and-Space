import React from 'react';

export default function Technology() {
  const technologies = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      title: "Quantum Computing",
      description: "Advanced quantum systems for space navigation and calculations."
    },
    {
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80",
      title: "AI Navigation",
      description: "Artificial Intelligence powered spacecraft navigation systems."
    },
    {
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
      title: "Space Habitats",
      description: "Self-sustaining habitats for long-term space missions."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge innovations powering the future of space exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}