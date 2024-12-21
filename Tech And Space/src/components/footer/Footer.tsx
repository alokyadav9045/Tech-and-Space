import React from 'react';
import CompanyInfo from './CompanyInfo';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <CompanyInfo />
          <QuickLinks />
          <div className="lg:pl-8">
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <SocialLinks />
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SpaceTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}