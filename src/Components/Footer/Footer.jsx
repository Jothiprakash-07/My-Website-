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
        {/* CONTACT INFO */}
        <div className="footer-contact">
          <a href="mailto:jothiprakash.jo07@gmail.com">
            Mail ID :jothiprakash.jo07@gmail.com
          </a>
          <a href="tel:+917904158379">
             Phone no: +91 7904158379
          </a>
        </div>
        

        {/* NAV *
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>*/}

        {/* SOCIAL */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/jothi-prakash-s-2b1488302/">LinkedIn</a>
          <a href="https://www.behance.net/jothi07">Behance</a>
          <a href="https://github.com/Jothiprakash-07">GitHub</a>
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
