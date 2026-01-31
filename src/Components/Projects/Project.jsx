import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Bootstrap.",
    image: "https://via.placeholder.com/400x200",
    link: "https://your-portfolio-link.com",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Full-stack shopping app with cart and payments.",
    image: "https://via.placeholder.com/400x200",
    link: "https://your-ecommerce-link.com",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Admin dashboard with charts and analytics.",
    image: "https://via.placeholder.com/400x200",
    link: "https://your-dashboard-link.com",
  },
];

const Project = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">My Projects</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">
                  {project.title}
                </h5>
                <p className="card-text text-muted">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
