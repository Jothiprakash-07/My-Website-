import React from "react";
import "./Skill.css";

const skillsData = [
  {
    title: "UX Design",
    items: [
      "User Research",
      "Personas & Journey Mapping",
      "Wireframing",
      "Usability Testing",
      "Information Architecture",
    ],
  },
  {
    title: "UI Design",
    items: [
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Micro-interactions",
      "Prototyping",
    ],
  },
  {
    title: "Specializations",
    items: [
      "Mobile App Design",
      "SaaS Products",
      "Dashboard & Analytics",
      "Landing Pages",
      "Web Applications",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-subtitle">Skill & Tool's</h2>
      <h2 className="skills-title">Expertise that drives results</h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3 className="card-title">{skill.title}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
