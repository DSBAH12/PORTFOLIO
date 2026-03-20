/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Abubakarr Bah</h3>
            <p className="footer-description">
              Computer Science Student at Njala University
            </p>
            <p className="footer-description">
              Passionate about creating beautiful and functional web
              experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonies")}>
                  Testimonies
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <span>abubakarr.bah@njala.edu.sl</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Njala University, Sierra Leone</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="GitHub" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Email" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Abubakarr Bah. All rights reserved.</p>
          <p className="footer-credit">
            Built with{" "}
            <i className="fas fa-heart" style={{ color: "#e74c3c" }}></i> using
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
