import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "Mayo - Agosto 2025",
      title: "Desarrollador Full Stack",
      company: "DESI AVOCCO.- Retail",
      description:
        " Participe en el rediseño y desarrollo del frontend de una aplicación ERP utilizada en la operación integral del negocio retail de calzado. El sistema abarca funcionalidades como punto de venta (POS), gestión de inventario y stock, seguimiento de KPIs, visualización de métricas de ventas y metas comerciales, así como trazabilidad de acciones de los usuarios internos. Trabajo con un stack moderno compuesto por Next.js 15, React 18, TypeScript, TailwindCSS y Zustand para el manejo global de estado. Integro herramientas como Framer Motion para animaciones fluidas, Lucide React y HeroUI para una UI accesible y mantenible, así como bibliotecas especializadas para procesamiento de datos (XML, JWT, Excel y PDFs). Aplicamos principios de diseño centrado en el usuario, arquitectura modular, interfaces responsive y optimización del performance. Colaboro activamente en un entorno de trabajo ágil (Scrum/Kanban), participando en sesiones de planificación, revisión de código y mejora continua mediante control de versiones con Git y gestión de tareas en herramientas como Jira o similares.",
    },
    {
      year: "Febrero - Mayo 2025",
      title: "Desarrollador Frontend",
      company: "BeCode",
      description:
        "Me desempeñe en el desarrollo frontend y su integración con el backend, asegurando que los flujos y componentes funcionen de manera eficiente y coherente. Trabajo en interfaces tanto para administradores como para consumidores de APIs, priorizando la experiencia de usuario y la funcionalidad. Utilizo un stack moderno compuesto por React, Next.js, TypeScript y Tailwind CSS, creando interfaces dinámicas, responsivas y optimizadas. En el backend, trabajo con .NET y MySQL, gestionando bases de datos relacionales y desarrollando conexiones robustas con APIs para un flujo de datos seguro y confiable. Colaboro en entornos ágiles, participando en la planificación, revisión de código y mejora continua, aplicando buenas prácticas de arquitectura modular y diseño centrado en el usuario.",
    },
    {
      year: "Junio 2022 - Marzo 2025",
      title: "Jefe de Oficina",
      company: "Sistema de agua potable y Alcantarillado de Cuernavaca Morelos",
      description:
        "Supervisión de un equipo de cuatro personas, optimizando procesos administrativos y tecnológicos para garantizar el cumplimiento de normativas de transparencia y gestión de archivos. ● Implementación de soluciones organizacionales apoyadas en herramientas tecnológicas, colaborando en la toma de decisiones estratégicas del área. ● Experiencia en la adaptación de procesos a entornos digitales y uso de plataformas colaborativas.",
    },
    {
      year: "2019 - 2021",
      title: "Gerente",
      company: "Emi Restaurante",
      description:
        " ● Liderazgo en la capacitación de equipos y gestión de recursos humanos, desarrollando habilidades en trabajo colaborativo y manejo de proyectos. ● Uso de herramientas tecnológicas para la administración contable, logística y ventas, asegurando la eficiencia operativa. ● Resolución de problemas en tiempo real y cumplimiento de metas en entornos de alta presión.",
    },
  ];

  return (
    <section id="experience" className="p-8 bg-[#242A31] text-white">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">
        Experiencia Laboral
      </h2>

      <div className="flex flex-col items-center">
        {/* Experiencias */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl"
          >
            {/* Años */}
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <div className="bg-yellow-300 text-[#242A31] p-2 rounded-full mb-4">
                {experience.year}
              </div>
            </div>

            {/* Tarjeta de la experiencia */}
            <div
              className={`bg-[#1E262D] p-6 rounded-lg shadow-lg w-full ${
                index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
              } 
                ${index % 2 === 0 ? "text-left" : "text-right"}`}
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
