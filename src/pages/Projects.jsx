// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
    live: "https://dkgujar22.github.io/portfolio/",
  },
  {
    title: "E-commerce Web App",
    description: "An e-commerce platform with product listing, cart, and checkout functionality.",
    live: "https://dkgujar22.github.io/MYstore/",
  },
  {
    title: "WeatherSky",
    description: "An easy and simple way to check weather updates.",
    live: "https://dkgujar22.github.io/weatherly/",
  },
  {
    title: "Todo App",
    description: "A dynamic todo application using React and localStorage for data persistence.",
    live: "https://dkgujar22.github.io/todo-ap/",
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-12">
      
      {/* Main Content */}
      <section className="flex-grow">
        {/* Heading */}
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-300">
            Here are some of the projects I have worked on. You can view live demos below.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
