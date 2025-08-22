import React, { useState } from "react";
import { MailIcon } from "@heroicons/react/outline";

import { LinkedinIcon, GithubIcon, WhatsappIcon } from "./Icons"; // Íconos personalizados

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes manejar el envío del formulario a través de una API externa
  };

  return (
    <section id="contact" className="p-8 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Contacto
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Formulario */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electrónico"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">¡Hablemos!</h3>
          <p className="text-sm mb-4">Cuernavaca, Morelos, México</p>
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/miguel-gomez-17621430a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <LinkedinIcon className="h-8 w-8 text-blue-500" />
            </a>
            <a
              href="https://github.com/mikeagf300"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <GithubIcon className="w-6 h-6 text-gray-500" />
            </a>
            <a
              href="mailto:mikeagf300@gmail.com"
              className="hover:text-red-500"
            >
              <MailIcon className="h-8 w-8 text-red-500" />
            </a>
            <a
              href="https://wa.me/527774530634"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <WhatsappIcon className="h-8 w-8 text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
