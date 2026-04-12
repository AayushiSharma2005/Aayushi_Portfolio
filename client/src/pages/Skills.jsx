import "./Skills.css";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: "ri-code-box-line",
      iconColor: "#00ffff",
      skills: ["Python", "C", "HTML", "CSS", "SQL", "MERN Basics"],
    },
    {
      title: "ML & Data",
      icon: "ri-brain-line",
      iconColor: "#b100ff",
      skills: ["ML Basics", "Data Viz", "OpenCV"],
    },
    {
      title: "Hardware",
      icon: "ri-cpu-line",
      iconColor: "#ffffff",
      skills: ["VHDL", "Linux Commands"],
    },
    {
      title: "Tools",
      icon: "ri-pencil-ruler-2-line",
      iconColor: "#00ffff",
      skills: ["Canva", "Figma"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">
        Technical <span className="arsenal">Arsenal</span>
      </h2>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="card-header">
              <i
                className={`${cat.icon} icon`}
                style={{ color: cat.iconColor }}
              ></i>
              <h3>{cat.title}</h3>
            </div>

            <div className="skill-tags">
              {cat.skills.map((s, i) => (
                <span key={i} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}