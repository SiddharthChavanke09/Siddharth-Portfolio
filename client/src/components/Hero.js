import React from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-dark via-dark-light to-dark pt-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Hi, I'm <span className="gradient-text">Siddharth</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6 neon-text">
              Full Stack Web Developer
            </h2>
            <p className="text-text-primary mb-8 max-w-2xl text-lg">
              MCA student with hands-on experience in Java & MERN Stack development.
              Passionate about building scalable web applications and solving real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="200">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <HiMail /> Hire Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 neon-border"
              >
                <HiDownload /> Download CV
              </a>
            </div>

            <div className="flex gap-6 mt-8 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://github.com/SiddharthChavanke09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-text-primary hover:text-primary transition-all duration-300 neon-glow-hover"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/siddharthchavanke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-text-primary hover:text-primary transition-all duration-300 neon-glow-hover"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex-1" data-aos="zoom-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary via-accent to-tertiary rounded-full flex items-center justify-center p-1 neon-glow scale-hover">
                <div className="w-full h-full bg-dark rounded-full flex items-center justify-center">
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