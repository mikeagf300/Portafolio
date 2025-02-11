import React from 'react';

type Project = {
  id: number;
  name: string;
  description: string;
  image: string; // URL de la imagen
  technologies: string; // Tecnologías usadas
  githubLink: string; // Enlace a GitHub
  deployLink: string; // Enlace al proyecto deployado
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Peludopolis E-commerce",
      description: "Plataforma de ecommerce enfocada en productos para mascotas, con funcionalidades como autenticación, roles de usuario, pasarela de pagos, geolocalización de tiendas físicas y un dashboard administrativo para la gestión eficiente.",
      image: "peludopolis.jpg", // Imagen de ejemplo
      technologies: "React, Next.js, Nest.js, GoogleOAuth, JWT, TypeScript, Node.js, Tailwind.css",
      githubLink: "https://github.com/peludopolis/peludopolis",
      deployLink: "https://peludopolis-pf.onrender.com/",
    },
    {
      id: 2,
      name: "Task Manager",
      description: "Aplicación para la gestión de tareas, diseñada para crear, leer, actualizar y eliminar tareas.",
      image: "task manager.jpg", // Imagen de ejemplo
      technologies: "React, Tailwind.css, MongoDB",
      githubLink: "https://github.com/mikeagf300/task-manager-frontend",
      deployLink: "https://task-manager-frontend-alpha-dusky.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-[#242A31]">
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg relative group">
            {/* Imagen con iconos */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Iconos de GitHub y despliegue */}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white p-2 rounded-full">
                    <i className="fab fa-github"></i> {/* Icono de GitHub */}
                  </button>
                </a>
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white p-2 rounded-full">
                    <i className="fas fa-link"></i> {/* Icono de deploy */}
                  </button>
                </a>
              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <p className="text-xs text-gray-500 mt-1">{project.technologies}</p>
            </div>

            {/* Botón para el proyecto deployado */}
            <div className="mt-4">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
                  Ver Proyecto Deployado
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
