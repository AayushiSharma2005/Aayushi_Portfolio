import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
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
        {[
          "about",
          "experience",
          "projects",
          "skills",
          "certifications" 
        ].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item);
            }}
            className={activeSection === item ? "active" : ""}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

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
    </nav>
  );
}