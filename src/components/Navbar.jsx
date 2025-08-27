import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-90 backdrop-blur-md shadow-md transition-colors">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-white">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-gray-900 bg-opacity-95 shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-100 hover:text-blue-400 font-medium">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-100 hover:text-blue-400 font-medium">
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-gray-100 hover:text-blue-400 font-medium">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-100 hover:text-blue-400 font-medium">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
