import React from 'react';
import { Rocket } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <div className="max-w-sm">
      <div className="flex items-center mb-4">
        <Rocket className="h-6 w-6 text-purple-500" />
        <span className="ml-2 text-white font-bold text-xl">SpaceTech</span>
      </div>
      <p className="text-gray-400 mb-4">
        Pioneering the future of space exploration with cutting-edge technology and innovative solutions.
      </p>
    </div>
  );
}