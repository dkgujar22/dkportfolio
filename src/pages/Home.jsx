import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-blue-400">Deepak</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A passionate Frontend Developer crafting beautiful and responsive web
          experiences with React & Tailwind CSS.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition"
          >
            View Projects
          </a>
          
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
