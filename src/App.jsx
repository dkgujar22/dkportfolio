import Navbar from "./components/Navbar";
import ScrollToSection from "./components/ScrollToSection";

// import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToSection /> {/* 👈 This auto-scrolls to the right section when URL changes */}
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
