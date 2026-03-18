import React from 'react';
import { HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Planning Insights",
      period: "July 2025 - Present",
      achievements: [
        "Built 3+ full-stack projects using React.js, Node.js, Express.js, and MongoDB with 500+ development hours, improving feature delivery by 30%",
        "Contributed across frontend, backend, and database modules in cross-functional teams (350+ hours)",
        "Integrated Firebase authentication and real-time database, reducing login and data retrieval time by 25%",
        "Developed 10+ RESTful APIs and modular backend services (150+ hours)",
        "Worked in Agile sprints with 100% on-time task completion over 4 months",
        "Deployed cloud-based applications, reducing load time by 20%",
        "Followed CI/CD pipelines and Git version control workflows, maintaining zero major deployment failures"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-dark py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="card" data-aos="fade-up">
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl neon-glow">
                  <HiBriefcase />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary neon-text">{exp.title}</h3>
                  <p className="text-accent font-medium mb-4">{exp.company} | {exp.period}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-text-primary">
                        <span className="text-accent flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;