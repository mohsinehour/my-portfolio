import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Startups from './components/Startups';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <Startups />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-primary text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mohsine Hourmat Allah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
