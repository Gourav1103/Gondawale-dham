import React, { useState } from 'react';
import './YouTubeCard.css';
import headerImage from '../Images/header-back.jpeg';
import profileImage from '../Images/Maharaj_ji.jpeg';

const YoutubeCard = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeClick = () => {
    setIsShaking(true); 
    
    setTimeout(() => {
      setIsShaking(false);
      setIsSubscribed(true); 
      setTimeout(() => {
        window.open('https://www.youtube.com/@Gondawaledhamindore', '_target');
      }, 100); 
    }, 500); 
  };

  return (
    <div className={`youtube-card ${isShaking ? 'shake' : ''}`}>
      {/* Top header image */}
      <div>
        <img
          className="header-image"
          src={headerImage}
          alt="Header"
        />
      </div>

      {/* Profile and Info */}
      <div className="profile-info2">
        <img
          className="profile-image2"
          src={profileImage}
          alt="Profile"
        />
        <div className="info">
          <h2>Gondawale Dham Indore</h2>
          <span className="username">@Gondawaledhamindore</span>
          <p className="stats">5.98K subscribers • 304 videos</p>
        </div>
      </div>

      {/* Other Info */}
      <div className="other-info">
        <p className="description">
          Gondawale Dham is situated at Prajapat Nagar, Indore. This channel 
          will upload Guruji's Pravachan of every Sunday.
        </p>
        <a
          href="https://facebook.com/profile.php?id=100094345264423"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-link"
        >
          facebook.com/profile.php?id=100094345264423
        </a>
      </div>

      {/* Subscribe Button */}
      <div className="subscribe-button">
        <button 
          className={isSubscribed ? 'subscribed' : ''} 
          onClick={handleSubscribeClick}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default YoutubeCard;


