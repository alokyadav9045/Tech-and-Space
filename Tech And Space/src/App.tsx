import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Missions from './components/Missions';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Missions />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;