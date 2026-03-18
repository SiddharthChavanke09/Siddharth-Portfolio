import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Siddharth Arun Chavanke. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Full Stack Web Developer | MERN Stack Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;