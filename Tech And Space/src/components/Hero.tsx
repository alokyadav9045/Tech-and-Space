import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Space"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Exploring the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover the latest in space exploration and cutting-edge technology
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
          Start Discovery
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}