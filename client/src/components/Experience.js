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
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl">
                  <HiBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
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