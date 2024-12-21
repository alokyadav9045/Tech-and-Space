import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team to learn more about our space missions and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">contact@spacetech.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-400">123 Space Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}