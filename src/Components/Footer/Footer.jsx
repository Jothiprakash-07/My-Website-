import React from "react";
import "./Footer.css";

const FooterPage = () => {
  return (
    <section className="footer-page">
      <div className="footer-wrapper">

        {/* BRAND */}
        <h1 className="logo"> I am jo<span>.</span> </h1>

        <p className="footer-desc">
          UI/UX Designer & Frontend Developer crafting elegant and meaningful
          digital experiences.
        </p>

        {/* NAV *
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>*/}

        {/* SOCIAL */}
        <div className="footer-social">
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
          <a href="#">GitHub</a>
        </div>


        
        {/* COPYRIGHT */}
        <p className="footer-copy">
          © 2026 Jo. All rights reserved.
        </p>

      </div>
    </section>
  );
};

export default FooterPage;
