import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#242A31] text-white"
    >
      {/* Contenedor de la imagen y el texto */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        {/* Contenedor de la imagen */}
        <div className="flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0 mr-10">
          <img
            src="yo.png" // Reemplaza con la ruta de tu foto
            alt="Mi foto"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>

        {/* Contenedor del texto */}
        <div className="flex-1 max-w-lg text-center md:text-left ml-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
            Sobre mí
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            ¡Hola! Soy un desarrollador Full Stack apasionado por la tecnología y
            la innovación. Me especializo en crear soluciones tecnológicas que
            impacten positivamente en las personas. Siempre estoy buscando nuevos
            desafíos para aprender y crecer tanto personal como profesionalmente.
          </p>
          <p className="text-base sm:text-lg mt-4">
            En mi tiempo libre disfruto de la programación, aprender nuevas
            tecnologías y colaborar en proyectos que hacen la diferencia.
          </p>
          <p className="text-base sm:text-lg mt-4">Ubicado en Cuernavaca, Morelos, México</p>
        </div>
      </div>

      {/* Línea horizontal */}
      <div className="w-full mt-8">
        <hr className="border-yellow-300 border-t-4 mt-60" />
      </div>
    </section>
  );
};

export default AboutMe;
