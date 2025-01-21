import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "Junio 2022 - Actualidad",
      title: "Licenciado en Derecho",
      company: "Sistema de agua potable y Alcantarillado de Cuernavaca Morelos",
      description: "Desde Noviembre de 2024 me encargo de la supervisión de un equipo de cuatro personas, optimizando procesos administrativos y tecnológicos para garantizar el cumplimiento de normativas de transparencia y gestión de archivos. ● Redacción de amparos, demandas laborales y administrativas, habilidades transferibles para la documentación y gestión en proyectos. Participación en procesos de optimización administrativa y soporte técnico para la digitalización de archivos."
    },
    {
      year: "2019 - 2021",
      title: "Gerente",
      company: "Emi Restaurante",
      description: " ● Liderazgo en la capacitación de equipos y gestión de recursos humanos, desarrollando habilidades en trabajo colaborativo y manejo de proyectos. ● Uso de herramientas tecnológicas para la administración contable, logística y ventas, asegurando la eficiencia operativa. ● Resolución de problemas en tiempo real y cumplimiento de metas en entornos de alta presión."
    },
  ];

  return (
    <section id="experience" className="p-8 bg-[#242A31] text-white">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">Experiencia Laboral</h2>
      
      <div className="flex flex-col items-center">
        {/* Experiencias */}
        {experiences.map((experience, index) => (
          <div key={index} className="mb-12 flex justify-between items-start w-full max-w-4xl">
            {/* Años */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-300 text-[#242A31] p-2 rounded-full mb-4 mr-5">{experience.year}</div>
            </div>

            {/* Tarjeta de la experiencia */}
            <div
              className={`bg-[#1E262D] p-6 rounded-lg shadow-lg w-full ${index % 2 === 0 ? 'ml-8' : 'mr-8'} 
                ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-sm text-yellow-300">{experience.company}</p>
              <p className="text-sm mt-2">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
