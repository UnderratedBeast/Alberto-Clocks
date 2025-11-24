import React, { useState, useEffect } from 'react';
import './Counter.css'
const Counting = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1); // Updates the count every 1 second

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [count, targetNumber]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const Counter = () => {
  return (
    <div>
      <div className='count-nums'>
        <div>
            
        <Counting targetNumber={1500} />
        <p style={{fontSize: "25px"}}>Customers Served</p>
        </div>
        <div>  
        <Counting targetNumber={999} />
        <p style={{fontSize: "25px"}}>Reviews</p>
        </div>
        <div>
            
        <Counting targetNumber={868} />
        <p style={{fontSize: "25px"}}>Countries</p>
        </div>
      </div>
      </div>
  );
};

export default Counter;