import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "about",
      "experience",
      "projects",
      "skills",
      "certifications", 
      "contact"
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="logo">AS.</div>

      <div className="nav-links">
        {["about", "experience", "projects", "skills", "certifications"].map(
          (item) => (
            <div key={item} style={{ position: "relative" }}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`nav-item ${activeSection === item ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              {activeSection === item && (
                <motion.div
                  layoutId="active-pill"
                  className="active-pill"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          )
        )}
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
        </button>
        <a
          href="#contact"
          className={`contact-btn ${activeSection === "contact" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}