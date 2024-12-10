import React, { useEffect, useState } from 'react';
import './CustomAlert.css'; // Import the CSS for styling

const CustomAlert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div className={`custom-alert ${visible ? 'slide-in' : 'slide-out'}`}>
      {message}
    </div>
  );
};

export default CustomAlert;
