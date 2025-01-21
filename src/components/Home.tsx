import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen p-8 bg-gray-900 text-white"
    >
      <div className="max-w-[950px] mx-auto flex items-center space-x-4">
        <h2 className="text-[50px] font-medium text-white w-full" style={{ fontStyle: 'normal' }}>
          Haciendo realidad <br /> tus proyectos tecnológicos
        </h2>
        <p className="text-[100px] leading-tight relative">
          <span className="relative z-10">
            Full Stack Developer.
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-400 opacity-50 blur-xl rounded-full"></span>
        </p>
      </div>
    </section>
  );
};

export default Home;

