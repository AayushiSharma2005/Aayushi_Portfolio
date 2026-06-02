import { motion } from "framer-motion";
import "./Experience.css";

const experienceData = [
  {
    id: 1,
    role: "B.Tech in Computer Science",
    company: "JK Lakshmipat University",
    location: "JAIPUR",
    duration: "2023 - 2027",
    description: [
      "Currently pursuing B.Tech with focus on Machine Learning and AI.",
      "Maintained a strong CGPA and active participation in technical clubs.",
    ],
  },
  {
    id: 2,
    role: "Research Intern",
    company: "The LNM Institute of Information Technology",
    location: "HYBRID • JAIPUR",
    duration: "May '25 - Aug '25",
    description: [
      "Explored multimodal learning using LLMs + vision-language models (CLIP, BLIP) for domain generalization.",
      "Used Gradient Reversal Layers & Mixup to boost generalization across PACS dataset visual domains.",
      "Showed ViT-B/16 transformers with language-guided learning outperform CNNs on unseen domains.",
    ],
  },
  {
    id: 3,
    role: "AI Intern",
    company: "Infosys Springboard",
    location: "REMOTE • BENGALURU",
    duration: "Nov '25 - Jan '26",
    description: [
      "Developed MoodMate: Emotion Detection + Music Recommendation System using FER-2013 & MSD.",
      "Built a CNN-based emotion recognition model with strong accuracy on FER-2013.",
      "Created full pipeline: face detection → emotion → music mapping → recommendation engine.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Title */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span className="highlight">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              variants={itemVariants}
            >
              {/* Left */}
              <div className="exp-left">
                <div className="exp-duration">{exp.duration}</div>
                <div className="exp-location">{exp.location}</div>
              </div>

              {/* Middle */}
              <div className="exp-timeline-center">
                <div className="exp-dot"></div>
                {index !== experienceData.length - 1 && (
                  <div className="exp-line"></div>
                )}
              </div>

              {/* Right */}
              <div className="exp-right glass-card">
                <h3 className="exp-role text-gradient">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>

                <ul className="exp-description">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}