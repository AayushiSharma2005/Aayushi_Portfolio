import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <h2 className="footer-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="footer-subtitle">
          Always open to creative collaborations and technical discussions.
        </p>

        <div className="footer-contact-pills">
          <motion.a
            href="mailto:sharma.aayushi1310@gmail.com"
            className="pill email"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope /> sharma.aayushi1310@gmail.com
          </motion.a>
          <motion.a
            href="tel:+917877341834"
            className="pill phone"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone /> +91 7877341834
          </motion.a>
        </div>

        <div className="footer-social">
          <motion.a
            href="https://linkedin.com/in/aayushi-sharma-4720302a0"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/AayushiSharma2005"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.codechef.com/users/aayushisharma0"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
            whileHover={{ scale: 1.05 }}
          >
            CODECHEF
          </motion.a>
        </div>

        <p className="footer-copy">
          © 2026 AAYUSHI SHARMA • ALL RIGHTS RESERVED
        </p>
      </div>
    </motion.footer>
  );
}