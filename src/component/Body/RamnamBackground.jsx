import React from 'react';
import './RamnamBackground.css';

const RamNamBackground = () => {
  // Generate an array of 'राम' elements
  const generateRamNam = () => {
    const ramArray = [];
    const totalRamCount = 1200; 
    for (let i = 0; i < totalRamCount; i++) {
      ramArray.push(<span key={`ram-${i}`} className="ram-nam">राम</span>);
    }
    return ramArray;
  };

  return (
    <div className="ram-nam-background" role="presentation">
      {generateRamNam()}
    </div>
  );
};

export default RamNamBackground;
