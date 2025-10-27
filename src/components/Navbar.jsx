import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation + scroll
  const handleNavClick = (section) => {
    navigate(`/${section === "home" ? "" : section}`); // update URL (e.g., /about)
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // small delay to ensure navigation sync
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-6 py-4 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md">
      {/* Logo */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        onClick={() => handleNavClick("home")}
        className="text-2xl font-bold text-white cursor-pointer"
      >
        MyPortfolio
      </ScrollLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <span
            key={section}
            onClick={() => handleNavClick(section)}
            className="text-gray-100 hover:text-blue-400 transition-colors duration-300 font-medium cursor-pointer capitalize"
          >
            {section}
          </span>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-gray-900 bg-opacity-95 shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden">
          {["home", "about", "projects", "contact"].map((section) => (
            <span
              key={section}
              onClick={() => handleNavClick(section)}
              className="text-gray-100 hover:text-blue-400 font-medium cursor-pointer capitalize"
            >
              {section}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
