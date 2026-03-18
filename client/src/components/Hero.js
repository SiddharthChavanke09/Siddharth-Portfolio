import React from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">
              Hi, I'm <span className="text-primary">Siddharth</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              MCA student with hands-on experience in MERN Stack development. 
              Passionate about building scalable web applications and solving real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <HiMail /> Hire Me
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <HiDownload /> Download CV
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a 
                href="https://github.com/SiddharthChavanke09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/siddharthchavanke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 md:w-76 md:h-76 bg-white rounded-full flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;