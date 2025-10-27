// src/components/ScrollToSection.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home"; // default to home
    const target = document.getElementById(path);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
