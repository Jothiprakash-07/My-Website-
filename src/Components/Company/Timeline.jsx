import React, { useEffect, useRef } from "react";
import "./Timeline.css";

const experienceData = [
  {
    company: "Blended Pedagogy Pvt. Ltd",
    date: "Feb 2025 – Nov 2025",
    role: "Junior UI/UX Designer",
    desc: "Worked as part of the R&D team to design and prototype digital learning platforms."
  },
  {
    company: "Green’s Technology",
    date: "Sep 2024 – Feb 2025",
    role: "UI/UX Design Trainer",
    desc: "Trained students in UI/UX principles, tools, wireframing, and responsive design."
  },
  {
    company: "Nexes Info IT Solutions",
    date: "Sep 2024 – Dec 2024",
    role: "UI/UX Designer",
    desc: "Designed responsive websites and improved overall usability and user flow."
  },
  {
    company: "Dot Com Infoway",
    date: "Feb 2024 – Mar 2024",
    role: "UI/UX Designer ",
    desc: "Delivered modern UI designs for startups and personal brand websites."
  },
  
];

const ExperienceTimeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <p className="subtitle">Experience</p>
      <h2 className="titles">My journey so far</h2>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="t-card">
              <h4>{item.company}</h4>
              <span>{item.date}</span>
              <p><strong>{item.role}</strong></p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
