import React from "react";
import "./Tools.css";

const tools = [
  { name: "Figma", icon: "./photo/icons/figma.png" },
  { name: "Adobe XD", icon: "./photo/icons/xd.png" },
  { name: "Photoshop", icon: "./photo/icons/photoshop.png" },
  { name: "Illustrator", icon: "./photo/icons/illustrator.png" },
  { name: "Framer", icon: "./photo/icons/framer.png" },
  ];

const Tools = () => {
  return (
    <section className="tools">
      <h2 className="tools-title">Tools I Use</h2>

      <div className="tools-box">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index}>
            <img src={tool.icon} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
