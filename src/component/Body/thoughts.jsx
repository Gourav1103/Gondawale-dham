import React, { useState, useEffect } from 'react';
import './thoughts.css'; 

const Thoughts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const thoughts = [
    "जिस घर में शांति और समाधान नहीं है,उस घर में भगवान (सद्गुरु) नहीं हैं।",
    `सत्य परेशान हो सकता है पराजित नहीं।\n\n\n
     एक पल का क्रोध, जिंदगी बिगाड़ देगा।
      एक पल का सत्संग, जिंदगी सुधार देगा।`,
    `जहाँ आपसी प्रेम, निःस्वार्थ व्यवहार और नाम रहता है, वहाँ सद्गुरु को अच्छा लगता है।`];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thoughts.length);
    }, 8000); 

    return () => clearInterval(interval); 
  }, [thoughts.length]);

  return (
      <div className="overlay">
        <div className="thoughts">
          <p>{thoughts[currentIndex]}</p>
        </div>
      </div>
  );
};

export default Thoughts;
