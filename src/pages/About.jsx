import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Content */}
      <section className="flex-grow pt-20 px-6 py-12">
        {/* About Me Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m <span className="font-semibold">Deepak</span>, a passionate{" "}
            <span className="text-blue-400">Frontend Developer</span> who loves building modern, responsive, and user-friendly web applications.
            I enjoy working with the latest technologies and bringing creative ideas to life.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* React */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaReact className="text-5xl text-blue-400" />
            <p className="mt-3 text-lg font-medium">React</p>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <SiTailwindcss className="text-5xl text-cyan-400" />
            <p className="mt-3 text-lg font-medium">Tailwind CSS</p>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaHtml5 className="text-5xl text-orange-500" />
            <p className="mt-3 text-lg font-medium">HTML</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaCss3Alt className="text-5xl text-blue-500" />
            <p className="mt-3 text-lg font-medium">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaJsSquare className="text-5xl text-yellow-400" />
            <p className="mt-3 text-lg font-medium">JavaScript</p>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaBootstrap className="text-5xl text-purple-400" />
            <p className="mt-3 text-lg font-medium">Bootstrap</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105">
            <FaGithub className="text-5xl text-gray-300" />
            <p className="mt-3 text-lg font-medium">GitHub</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
