import React, { useEffect, useState } from 'react';
import "./visitorsCount.css"

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage or set it to 0 if it doesn't exist
    const storedCount = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(storedCount) + 1;

    // Update the state and localStorage with the new visitor count
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount);
  }, []); // Runs only on component mount

  return (
    <div>
      <p className='count'>({visitorCount})</p>
    </div>
  );
};

export default VisitorCount;
