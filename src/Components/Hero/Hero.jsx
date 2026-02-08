import React, { useEffect, useState } from 'react';
import './Hero.css';

// ✅ STEP 1: Import icons
import { FaInstagram, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="hero">
      {/* Background text */}
      <h3 className={`name ${animate ? 'fade-slide' : ''}`}>I’m Jo</h3>

      <h1 className={`hero-text ${animate ? 'text-pop' : ''}`}>HEY YOU</h1>

      {/* Person Image */}
      <img
        src="./photo/Profile/my-pic.png"
        alt="Person"
        className={`hero-image ${animate ? 'image-zoom' : ''}`}
      />

      {/* My role */}
      <div className={`my-role ${animate ? 'fade-slide-left' : ''}`}>
        <h2>CREATIVE</h2>
        <div className='role'>
          <h3>UI/UX DESIGNER</h3>
          <h3>GRAPHIC DESIGNER</h3>
        </div>
      </div>

      {/* Social Icons */}
      <div className={`social-icons ${animate ? 'fade-slide-up' : ''}`}>
        <a href="https://www.instagram.com/crazy_jo_designs/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.behance.net/jothi07" target="_blank" rel="noreferrer">
          <FaBehance />
        </a>

        <a href="https://github.com/Jothiprakash-07" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Jothiprakash-07" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        
      </div>

      <div className={`name2 ${animate ? 'fade-slide-right' : ''}`}>
        <h3>jothi<br />prakash s</h3>
      </div>
    </div>
  );
};

export default Hero;
