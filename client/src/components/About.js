import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am currently pursuing MCA after completing a BBA in Computer Applications with a 7.58 CGPA. 
            I have hands-on experience in HTML, CSS, JavaScript, Java, MySQL, and the MERN Stack, with 
            academic project experience in developing secure, database-driven, and user-friendly applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aspiring Full Stack Web Developer with strong problem-solving skills, a passion for coding, 
            and a continuous drive to learn new technologies and build efficient, practical solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Dev Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-gray-600">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;