import React, { useState } from 'react';
import './Treatment.css';

const Treatment = () => {
  const [temperature, setTemperature] = useState(null);
 
  const measureTemperature = () => {
    const newTemp = (36.0 + Math.random() * 2).toFixed(1);
    setTemperature(newTemp);
  };

  return (
    <div className="consultation-container">
      <div className="video-chat">
        <h2>Video Chat Component</h2>
        {/* Placeholder for video chat */}
      </div>
      <div className="temperature-measurement">
        <button onClick={measureTemperature}>체온 측정</button>
    </div>
      <div className='temperature-alert'>
        <p>{temperature && <p>Current Temperature: {temperature}°C</p>}</p>
      </div>
    </div>
  );
};

export default Treatment;
