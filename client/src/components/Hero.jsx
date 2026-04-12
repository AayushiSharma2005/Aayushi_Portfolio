import { motion } from "framer-motion";
import "./Hero.css";
import aayushiPic from "../assets/aayushi_pic.png";

export default function Hero({ onStart }) {

  // ✅ FIX: backend URL from environment
  const API = import.meta.env.VITE_API_URL;

  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-name">Aayushi Sharma</h1>

          <p className="hero-typewriter">
            B.Tech Undergrad • Tech Explorer
          </p>

          <p className="hero-tagline">
            Engineering student focused on building logical and structured solutions through code.
            Exploring ideas through projects and continuous learning.
          </p>

          {/* SOCIAL ICONS */}
          <div className="hero-icons">
            <a href="https://github.com/AayushiSharma2005" target="_blank" rel="noreferrer">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/aayushi-sharma-4720302a0/" target="_blank" rel="noreferrer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://www.codechef.com/users/aayushisharma0" target="_blank" rel="noreferrer">
              <i className="ri-code-s-fill"></i>
            </a>
          </div>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button className="btn-primary" onClick={onStart}>
              Let’s get started →
            </button>

            {/* VIEW RESUME */}
            <a
              href={`${API}/resume/resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href={`${API}/resume/resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={aayushiPic} alt="Aayushi" className="hero-photo" />
        </motion.div>

      </div>
    </section>
  );
}