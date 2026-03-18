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
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-secondary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
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