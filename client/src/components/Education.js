import React from 'react';
import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  const education = [
    {
      degree: "MCA",
      institution: "Savitribai Phule Pune University",
      score: "7.88 SGPA",
      period: "2024-2026"
    },
    {
      degree: "BBA (Computer Application)",
      institution: "Savitribai Phule Pune University",
      score: "7.58 CGPA",
      period: "2021-2024"
    },
    {
      degree: "HSC",
      institution: "Maharashtra State Board",
      score: "72.00%",
      period: "2019-2021"
    },
    {
      degree: "SSC",
      institution: "Maharashtra State Board",
      score: "49.20%",
      period: "2019"
    }
  ];

  return (
    <section id="education" className="bg-dark-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="card" data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl neon-glow">
                  <HiAcademicCap />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                    <span className="text-accent font-semibold">{edu.score}</span>
                  </div>
                  <p className="text-text-primary">{edu.institution}</p>
                  <p className="text-sm text-text-primary/70 mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;