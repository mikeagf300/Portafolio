import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import '../src/config/fontawesome';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242A31]">
      <Header />
      {/* Secciones con IDs para navegación */}
      <section id="home" className="px-4 sm:px-6 md:px-8 lg:px-16">
        <Home />
      </section>
      <section id="about-me" className="px-4 sm:px-6 md:px-8 lg:px-16">
        <About />
      </section>
      <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-16">
        <Experience />
      </section>
      <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-16">
        <Projects />
      </section>
      <section id="contact" className="px-4 sm:px-6 md:px-8 lg:px-16">
        <Contact />
      </section>
    </div>
  );
};

export default App;
