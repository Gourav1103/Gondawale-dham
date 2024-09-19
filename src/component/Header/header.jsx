import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../Images/Gondawale_Dham_Logo.jpeg';
import logo2 from '../Images/Maharaj_ji.jpeg';
import Thoughts from '../Body/thoughts';

const Header = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false); 

  useEffect(() => {
    const img = new Image();
    img.src = require('../Images/header-back1.jpg'); 
    img.onload = () => {
      setBackgroundLoaded(true); 
    };
  }, []);

  return (
    <header className="header" style={backgroundLoaded ? { backgroundImage: `url(${require('../Images/header-back1.jpg')})` } : {}}>
      {!backgroundLoaded && <div className="loader">Loading...</div>} 

      {backgroundLoaded && (
        <div className="logo-content-container">
          {/* First Logo */}
          <div className="logo-container">
            <img
              src={logo}
              alt="Gondawale Dham Logo"
              className="logo"
              loading="lazy" 
            />
          </div>

          {/* Text Content */}
          <div className="header-content">
            <p className="greeting">|| जय श्री राम ||</p>
            <p className="location">गोंदवले धाम इंदौर</p>
          </div>

          {/* Second Logo */}
          <div className="logo-container-2">
            <img
              src={logo2}
              alt="Maharaj Ji"
              className="logo-2"
              loading="lazy" 
            />
          </div>
        </div>
      )}

      {/* Thoughts Section (Only show when background is loaded) */}
      {backgroundLoaded && <Thoughts />}
    </header>
  );
};

export default Header;
