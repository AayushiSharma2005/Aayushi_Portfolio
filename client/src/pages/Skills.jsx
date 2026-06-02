import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: "ri-code-box-line",
      iconColor: "var(--cyan)",
      skills: [
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "SQL", level: 70 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "ML & Data",
      icon: "ri-brain-line",
      iconColor: "var(--accent)",
      skills: [
        { name: "ML Basics", level: 75 },
        { name: "Data Viz", level: 70 },
        { name: "OpenCV", level: 75 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: "ri-tools-line",
      iconColor: "var(--cyan)",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Other",
      icon: "ri-pencil-ruler-2-line",
      iconColor: "var(--accent)",
      skills: [
        { name: "Linux", level: 60 },
        { name: "Canva", level: 80 },
        { name: "Figma", level: 75 },
        { name: "VHDL", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="skills-heading">
          Technical <span className="arsenal text-gradient">Arsenal</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <motion.div 
            className="skill-card glass-card" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <i
                className={`${cat.icon} icon`}
                style={{ color: cat.iconColor }}
              ></i>
              <h3>{cat.title}</h3>
            </div>

            <div className="skill-bars">
              {cat.skills.map((s, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-percent">{s.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill tooltip-container"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: cat.iconColor, boxShadow: `0 0 10px ${cat.iconColor}` }}
                    >
                      <span className="tooltip-text">
                        {s.level >= 80 ? "Expert" : s.level >= 70 ? "Advanced" : "Intermediate"}
                      </span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}