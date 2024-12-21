import React from 'react';

const links = {
  Company: ['About', 'Careers', 'Press'],
  Resources: ['Blog', 'Newsletter', 'Events'],
  Legal: ['Terms', 'Privacy', 'Patents']
};

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-3">{category}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}