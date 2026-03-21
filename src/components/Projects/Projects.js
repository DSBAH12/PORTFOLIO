import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ummah Hub",
      description:
        "A fully responsive e-commerce platform built with HTML, CSS, and Bootstrap. Features include product catalog, shopping cart, and user authentication.",
      image: "images/fme-img.png",
      link: "#",
    },
    {
      id: 2,
      title: "Brotherhood Connect",
      description:
        "A web portal for university students to access courses, assignments, and grades. Designed with a clean and intuitive interface.",
      image: "images/TENOVA.png",
      link: "#",
    },
    {
      id: 3,
      title: "Personal Blog",
      description:
        "A responsive blog website showcasing articles and posts. Includes modern design elements and smooth animations.",
      image: "images/personal-blog.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description:
        "An elegant restaurant website with menu display, online reservation system, and beautiful image galleries.",
      image: "images/restaurant-website.jpg",
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
