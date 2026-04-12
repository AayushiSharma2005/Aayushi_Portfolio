import { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import aayushiPic from "../assets/aayushi_pic.png";

export default function Hero({ onStart }) {
  const [showModal, setShowModal] = useState(false);

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

          <p className="hero-typewriter">B.Tech Undergrad • Tech Explorer</p>

          <p className="hero-tagline">
            I am an Engineering Student exploring
            <span> Machine Learning</span>, 
            <span> Deep Learning</span>, and 
            <span> Computer Vision</span>.
            <br /> Currently working on 
            <span> Quantum Image Processing</span>.
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
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>

            {/* DOWNLOAD RESUME POPUP */}
            <button className="btn-secondary" onClick={() => setShowModal(true)}>
              Download Resume
            </button>

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

      {/* MODAL */}
      {showModal && (
        <div className="resume-modal">
          <div className="modal-box">
            <h3>Select Format</h3>

            <div className="modal-buttons">
              <a className="modal-btn" href="/resume.pdf" download>
                PDF
              </a>

              <a className="modal-btn" href="/resume.docx" download>
                DOCX
              </a>
            </div>

            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}