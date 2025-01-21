import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import '../src/config/fontawesome';
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242A31]">
      <Header />
      {/* Secciones con IDs para navegación */}
      <section id="home">
        <Home />
      </section>
      <section id="about-me">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;


