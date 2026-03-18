import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-primary/20 text-text-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-primary neon-text">
            © {new Date().getFullYear()} Siddharth Arun Chavanke. All rights reserved.
          </p>
          <p className="text-text-primary/70 text-sm">
            Full Stack Web Developer | MERN Stack Specialist
          </p>
          <p className="text-text-primary/60 text-xs mt-3">
            Designed with <span className="text-accent">♥</span> and deployed with <span className="text-primary">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;