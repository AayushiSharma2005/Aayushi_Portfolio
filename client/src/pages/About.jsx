import { motion } from "framer-motion";
import "./About.css";
import { FaBook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* TITLE AND BIO */}
        <div className="about-text">
          <h1 className="about-title">About Me</h1>

          <p className="about-bio">
            I am a <span className="highlight">Computer Science undergraduate at JKLU</span> with a core interest in 
            <span className="highlight"> Machine Learning</span> and 
            <span className="highlight"> Deep Learning</span>. My approach to engineering is simple: I focus on building with logic and solving problems using 
            <span className="highlight"> Python</span>. I value consistency and a practical approach to my work, whether I'm coding or researching. 
            I am currently seeking internship opportunities to apply my skills in real-world environments and grow through meaningful challenges.
          </p>

          {/* STATS GRID */}
          <div className="stats-grid">
            <div className="stat-card">
              <h2>3+</h2>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h2>2</h2>
              <p>Internships</p>
            </div>
            <div className="stat-card">
              <h2>JKLU</h2>
              <p>Student</p>
            </div>
          </div>

          {/* QUOTE BOX */}
          <div className="quote-box">
            <div className="quote-bar"></div>
            <p className="quote-text">
              Apart from tech, I like writing and expressing ideas creatively.
            
            </p>
            <FaBook className="quote-icon" />
          </div>

          {/* CONTACT INFO */}
          <div className="contact-pills">
            <a href="mailto:sharma.aayushi1310@gmail.com" className="pill email">
              <FaEnvelope /> sharma.aayushi1310@gmail.com
            </a>
            <a href="tel:+917877341834" className="pill phone">
              <FaPhone /> +91 7877341834
            </a>
            <div className="pill address">
              <FaMapMarkerAlt /> Jaipur, Rajasthan, India
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}