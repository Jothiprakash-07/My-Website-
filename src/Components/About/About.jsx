import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about fade-in" id="about">
      <h2 className="title">About Me</h2>

      <div className="summary slide-up">
        <h3>Creating designs that tell stories</h3>
      </div>

      <div className="contend slide-up delay">
        I'm Jothi Prakash, a product-focused UI/UX designer who believes great
        design is measured by business outcomes, not Dribbble likes. With
        experience across SaaS, mobile apps, and enterprise products, I bridge
        the gap between user needs and business goals. My approach is methodical:
        deep user research, data-driven decisions, and relentless iteration.
        Every pixel serves a purpose. Every interaction tells a story.
      </div>

      {/* card*/}
      <div className="card">
        <div class="principles-grid">
          <div class="principle-card fade-up delay-1">
            <div class="number">01</div>
            <h3 class="title">User-Centric</h3>
            <p class="description">
              Every design decision starts with understanding user pain points and behavior patterns.
              </p>
              </div>
            <div class="principle-card fade-up delay-1">
            <div class="number">02</div>
            <h3 class="title">Business-Drivenc</h3>
            <p class="description">
                 i design for metrics that matter conversion, retention, and user satisfaction.
              </p>
              </div>
            
            <div class="principle-card fade-up delay-1">
            <div class="number">03</div>
            <h3 class="title">Detail-Obsessed</h3>
            <p class="description">
              From micro-interactions to design systems, I sweat the small stuff that elevates products
              </p>
              </div>
              </div>
              <div class="section-divider"></div>             
        </div>
    </div>
  );
};

export default About;
