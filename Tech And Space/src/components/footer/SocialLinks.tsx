import React from 'react';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
  { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-purple-500 transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}