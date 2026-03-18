import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-dark font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg neon-glow animate-bounce"
          aria-label="Scroll to top"
          data-aos="fade-up"
        >
          <HiArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
