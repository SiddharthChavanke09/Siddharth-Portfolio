import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-dark-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-text-primary leading-relaxed mb-6" data-aos="fade-up">
            I am currently pursuing MCA after completing a BBA in Computer Applications with a 7.58 CGPA.
            I have hands-on experience in HTML, CSS, JavaScript, Java, MySQL, and the MERN Stack, with
            academic project experience in developing secure, database-driven, and user-friendly applications.
          </p>
          <p className="text-lg text-text-primary leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Aspiring Full Stack Web Developer with strong problem-solving skills, a passion for coding,
            and a continuous drive to learn new technologies and build efficient, practical solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { number: '500+', label: 'Dev Hours' },
              { number: '10+', label: 'Projects' },
              { number: '4+', label: 'Technologies' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center card neon-glow-hover"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl font-bold text-primary neon-text">{stat.number}</div>
                <div className="text-text-primary mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;