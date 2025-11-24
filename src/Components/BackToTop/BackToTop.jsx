import React, { useState, useEffect } from 'react';
import DateTimeLoc from "../DateTimeLoc/DateTimeLoc";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.backToTopButton}
        >
          ↑ <DateTimeLoc/>
        </button>
      )}
    </div>
  );
};

const styles = {
  backToTopButton: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    padding: '10px 20px',
    fontSize: '20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BackToTop;