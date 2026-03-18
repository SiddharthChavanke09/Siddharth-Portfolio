import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      title: "Farm Connect",
      description: "Agricultural marketplace with responsive UI and interactive features. Designed MongoDB schemas for users, products, and orders, ensuring seamless frontend-backend integration.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      link: "https://farm-connect-5d59.onrender.com/",
      github: "https://github.com/SiddharthChavanke09"
    },
    {
      title: "Shop Hub E-commerce Platform",
      description: "Full-stack e-commerce web application using MERN stack with secure authentication, dynamic product catalog, shopping cart, order management, and an admin dashboard with API integration.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "API Integration"],
      link: "https://cherishindia-ecommerce-website-1.onrender.com/",
      github: "https://github.com/SiddharthChavanke09"
    },
    {
      title: "Banking Transaction Manager",
      description: "Desktop banking application using Java Swing and MySQL (JDBC) featuring modules for account creation, deposit, withdrawal, and balance inquiry with secure transaction handling.",
      skills: ["Java Swing", "JDBC", "MySQL"],
      link: "#",
      github: "https://github.com/SiddharthChavanke09"
    }
  ];

  return (
    <section id="projects" className="bg-dark py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full scale-hover" data-aos="flip-left" data-aos-delay={index * 150}>
              <h3 className="text-xl font-bold text-primary neon-text mb-2">{project.title}</h3>
              <p className="text-text-primary mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 border border-accent text-accent rounded-full bg-accent/10 neon-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-primary transition-all duration-300 flex items-center gap-1 neon-glow-hover"
                >
                  <HiCode /> Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-all duration-300 flex items-center gap-1 neon-glow-hover"
                >
                  <HiExternalLink /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;