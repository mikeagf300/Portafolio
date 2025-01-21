import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#242A31] text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-300">Miguel Gómez.- Portafolio</h1>
        <nav className="hidden lg:flex space-x-4">
          {/* Navegación con anclas para pantallas grandes */}
          <a href="#home" className="px-4 hover:text-yellow-300">
            Inicio
          </a>
          <a href="#about-me" className="px-4 hover:text-yellow-300">
            Sobre mí
          </a>
          <a href="#projects" className="px-4 hover:text-yellow-300">
            Proyectos
          </a>
          <a href="#experience" className="px-4 hover:text-yellow-300">
            Experiencia
          </a>
          <a href="#contact" className="px-4 hover:text-yellow-300">
            Contacto
          </a>
        </nav>
        {/* Menú para pantallas pequeñas */}
        <nav className="lg:hidden">
          <a href="#home" className="block py-2 px-4 text-center text-white hover:text-yellow-300">
            Inicio
          </a>
          <a href="#about-me" className="block py-2 px-4 text-center text-white hover:text-yellow-300">
            Sobre mí
          </a>
          <a href="#projects" className="block py-2 px-4 text-center text-white hover:text-yellow-300">
            Proyectos
          </a>
          <a href="#experience" className="block py-2 px-4 text-center text-white hover:text-yellow-300">
            Experiencia
          </a>
          <a href="#contact" className="block py-2 px-4 text-center text-white hover:text-yellow-300">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
