import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ummah Hub",
      description:
        "Ummah Hub is a responsive global community platform. Features include faith-based networking, resource sharing, and collaborative event management.",
      image: "images/fme-img.png",
      link: "#",
    },
    {
      id: 2,
      title: "Brotherhood Connect",
      description:
        "A responsive community platform fostering unity and collaboration. Includes member networking, group discussions, and event coordination..",
      image: "images/TENOVA.png",
      link: "#",
    },
    {
      id: 3,
      title: "VLN Solutions Library Management System",
      description:
        "A responsive library management system with book cataloguing, user accounts, and borrowing/return tracking for efficient resource management.",
      image: "images/vln-solutions.png",
      link: "#",
    },
    {
      id: 4,
      title: "Logistic Management System",
      description:
        "A responsive logistics platform streamlining supply chain operations. Includes shipment tracking, inventory management, and automated reporting tools.",
      image: "images/logistics.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-subtitle">
          A selection of full‑stack applications and websites I’ve designed,
          built, and maintained.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
