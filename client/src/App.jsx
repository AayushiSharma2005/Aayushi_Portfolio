import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Pages (Sections)
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";

// Combined Contact + Footer Layout
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [showSections, setShowSections] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleStart = () => {
    setShowSections(true);
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero always visible */}
      <Hero onStart={handleStart} />

      {showSections && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Page Sections */}
          <About />             {/* id="about" */}
          <Experience />        {/* id="experience" */}
          <Projects />          {/* id="projects" */}
          <Skills />            {/* id="skills" */}
          <Certifications />    {/* id="certifications" */}

          {/* Contact + Footer side-by-side */}
          <ContactFooter />     {/* contains #contact inside */}
        </>
      )}
    </>
  );
}