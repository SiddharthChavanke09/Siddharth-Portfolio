import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "Node.js"]
    },
    {
      category: "Programming Languages",
      skills: ["C", "Core Java", "Advance Java"]
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "IntelliJ IDEA"]
    },
    {
      category: "AI Tools",
      skills: ["GitHub Copilot", "Cursor", "Claude Sonnet"]
    },
    {
      category: "Cloud",
      skills: ["AWS (Basic)"]
    }
  ];

  return (
    <section id="skills" className="bg-dark-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <h3 className="text-xl font-bold text-primary neon-text mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-primary text-primary rounded-full text-sm font-medium transition-all duration-300 neon-border hover:bg-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;