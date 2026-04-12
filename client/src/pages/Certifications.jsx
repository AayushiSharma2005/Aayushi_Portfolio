import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Certifications.css";

// Certificate data - logos fetched from Google Favicon API
const certificatesData = [
  {
    id: 1,
    title: "Intro to Machine Learning",
    organization: "Kaggle",
    skills: ["Machine Learning", "Python"],
    link: "https://www.kaggle.com",
    certificateLink: "/Kaggle.jpeg", 
    category: "ML",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    skills: ["CSS", "HTML"],
    link: "https://www.freecodecamp.org",
    certificateLink: "https://www.freecodecamp.org/certification/aayushi_13/responsive-web-design", 
    category: "Web Development",
  },
  {
    id: 3,
    title: "Programming in C ",
    organization: "Infosys",
    skills: ["C Programming"],
    link: "https://infosys.com",
    certificateLink: "/Infosys.jpeg", 
    category: "Programming",
  },
  {
    id: 4,
    title: "Deloitte Australia - Data Analytics Job Simulation",
    organization: "Forage",
    skills: ["Data Analysis", "Tableau"],
    link: "https://www.theforage.com",
    
    certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_sBjZSiPNfHiifefyi_1749812373862_completion_certificate.pdf", // Add your certificate link
    category: "Data",
  },
  {
    id: 5,
    title: "Red Hat System Administration I (RH 124 -RHA)",
    organization: "Red Hat",
    skills: ["Linux", "Operating Systems"],
    link: "https://www.redhat.com",
    certificateLink: "https://www.credly.com/badges/97c51a5e-be7a-4bb0-86f6-b43fce5c0ec5", 
    category: "Linux",
  },
  {
    id: 6,
    title: "Learn Python Programming",
    organization: "CodeChef",
    skills: ["Python"],
    link: "https://www.codechef.com",
    certificateLink: "hhttps://www.codechef.com/certificates/public/b7a3d42", 
    category: "Programming",
  },
  {
    id: 7,
    title: "Volunteer - Internal Arrangements Team",
    organization: "JK Lakshmipat University, Jaipur",
    skills: ["Leadership", "Event Management"],
    link: "https://www.jklu.edu.in",
    certificateLink: "/sabrang.jpeg", 
    category: "Volunteer",
  },
];

// Function to get favicon URL from Google
const getFaviconUrl = (domain) => {
  return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
};

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(certificatesData.map((cert) => cert.category))];

  // Filter certificates
  const filteredCerts =
    activeCategory === "all"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="certificates-section">
      <div className="certificates-container">
        {/* HEADING */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Certifications & <span className="highlight">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Courses, certifications, and recognitions from top platforms
          </p>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* CERTIFICATES GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            className="certificates-grid"
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredCerts.map((cert) => (
              <motion.div key={cert.id} className="cert-card" variants={itemVariants}>
                {/* Card Header */}
                <div className="cert-header">
                  <img 
                    src={cert.logoUrl || getFaviconUrl(cert.link)} 
                    alt={cert.organization} 
                    className="cert-org-logo"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2300ffff' width='100' height='100'/%3E%3C/svg%3E";
                    }}
                  />
                  <span className="cert-badge">{cert.organization}</span>
                </div>

                {/* Card Body */}
                <div className="cert-body">
                  <h3 className="cert-title">{cert.title}</h3>

                  {/* Skills Tags */}
                  <div className="cert-skills">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="cert-footer">
                  <a href={cert.certificateLink} className="cert-link" target="_blank" rel="noreferrer">
                    View Certificate <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* EMPTY STATE */}
        {filteredCerts.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>No certificates in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}