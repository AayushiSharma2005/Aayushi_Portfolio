import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Exploiting LLMs for Computer Vision',
    description: 'Implemented multimodal learning using CLIP, BLIP, and BERT to improve domain generalization. Conducted experiments on PACS dataset using prompt learning and contrastive learning.',
    tech: ['Python', 'CLIP', 'BLIP', 'BERT', 'Transformers'],
    github: 'https://github.com/AayushiSharma2005/EXPLORING-LLM-FOR-COMPUTER-VISION-TASK',
    demo: '#',
    icon: '🧠',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Currency Converter App',
    description: 'Developed a Python-based currency converter using Tkinter for GUI and forex-python for real-time exchange rates. Integrated multiple libraries for enhanced features.',
    tech: ['Python', 'Tkinter', 'API', 'PIL'],
    github: 'https://github.com/AayushiSharma2005/Currency-Convertor',
    demo: '#',
    icon: '💱',
    color: 'purple',
  },
  {
    id: 3,
    title: 'Safest Route Finder',
    description: 'Used graph theory algorithms (Prims, Kruskal, Dijkstra) to predict safest travel routes based on crime, accidents, and safety factors for emergency planning.',
    tech: ['C', 'Graph Theory', 'Algorithms', 'DSA'],
    github: 'https://github.com/AayushiSharma2005/Safest-Route-Finder',
    demo: '#',
    icon: '🗺️',
    color: 'cyan',
  },
  {
    id: 4,
    title: 'CV Toolkit',
    description: 'OpenCV-powered web app for real-time image processing with features like face detection, object recognition, and custom filters.',
    tech: ['Python', 'OpenCV', 'AI'],
    github: 'https://github.com/AayushiSharma2005/-OpenCV-Toolkit-',
    demo: 'https://drive.google.com/file/d/1xXTeMn_zzoUx-Ep5D_y0s1J1hcQ9Hkvg/view?usp=drive_link',
    icon: '📸',
    color: 'accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">
            Featured <span className="highlight">Explorations</span>
          </h2>
          <p className="projects-subtitle">
            Projects and ideas I'm passionate about
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card color-${project.color}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* TOP BAR WITH ICON AND BADGE */}
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <div className="project-status">Featured</div>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              {/* TECH TAGS */}
              <div className="project-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* FOOTER WITH LINKS */}
              <div className="project-footer">
                <div className="project-links">
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link"
                    >
                      <FaGithub size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;