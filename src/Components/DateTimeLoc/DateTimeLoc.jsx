import React, { useState, useEffect } from 'react';
import './DateTimeLoc.css'
const DateTimeLoc = () => {
  // State for time, date, and location
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user's location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {/* <h2>Current Date and Time</h2> */}
      <p className='date'>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>

      {/* <h2>Location</h2> */}
      {location.latitude && location.longitude ? (
        <p className='location'>
          Lat: {location.latitude}, Long: {location.longitude}
        </p>
      ) : (
        <p>Getting location...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DateTimeLoc;