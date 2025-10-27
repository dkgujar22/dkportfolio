import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Content */}
      <section className="flex-grow pt-20 px-6 py-12" id="contact">
        {/* Heading */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-300">
            Got a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              I am available for freelance work or collaboration. Contact me via email, phone, or connect with me on social media.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>deepakgujar748@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-green-400 text-xl" />
                <span>+92 316 8920200</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-xl" />
                <span>Hyderabad, Sindh, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/dkgujar22"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <FaGithub className="text-2xl hover:text-gray-300 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-kumar-2a9b12274/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <FaLinkedin className="text-2xl hover:text-gray-300 transition" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
