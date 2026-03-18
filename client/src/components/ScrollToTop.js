import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showButton) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 flex items-center justify-center rounded-full text-dark font-bold shadow-2xl hover:scale-110 transition-transform duration-300"
      style={{
        backgroundColor: '#00d4ff',
        boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(0, 212, 255, 0.2)',
        animation: 'bounceButton 2s ease-in-out infinite'
      }}
      title="Scroll to top"
      aria-label="Scroll to top button"
    >
      <HiArrowUp size={32} style={{ color: '#0a0e27' }} />
      <style>{`
        @keyframes bounceButton {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollToTop;
