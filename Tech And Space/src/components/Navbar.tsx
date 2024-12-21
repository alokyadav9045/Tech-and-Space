import React from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-white font-bold text-xl">SpaceTech</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#missions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Missions</a>
              <a href="#technology" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#missions" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Missions</a>
            <a href="#technology" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Technology</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}