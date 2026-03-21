import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Abubakarr Bah</span>
            </h1>
            <h2 className="hero-subtitle">Computer Science Graduate</h2>
            <p className="hero-description">
              Proud graduate of <strong>Njala University</strong> with a degree
              in Computer Science. Passionate about{" "}
              <span className="hero-highlight">Software Development</span> and
              turning ideas into elegant, innovative solutions through code.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src="images/bah45.jpg" alt="Abubakarr Bah" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
