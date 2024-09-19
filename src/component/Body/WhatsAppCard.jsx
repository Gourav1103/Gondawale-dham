import React, { useState, useEffect } from 'react';
import './WhatsAppCard.css';
import dummyVideo from '../Images/header-back.jpeg'; 
import channelLogo from '../Images/Gondawale_Dham_Logo.jpeg'; 

const WhatsAppCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isFollowing, setIsFollowing] = useState(false); 
  const [isShaking, setIsShaking] = useState(false); 

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formattedTime);
    };

    updateTime(); 
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);


  const handleFollowClick = (e) => {
    e.preventDefault(); 

    setIsShaking(true); 

    setTimeout(() => {
      setIsFollowing(!isFollowing); 
      setIsShaking(false); 
      window.open('https://whatsapp.com/channel/0029Vaj6sL090x30Jhgobl01', '_target');
    }, 500); 
  };

  return (
    <div className="whatsapp-channel-ui">
      {/* Channel Header */}
      <div className="channel-header">
        <div className="channel-header-content">
          <img src={channelLogo} alt="Channel Logo" className="channel-logo" />
          <div className="channel-info">
            <h3>Gondawale Dham Indore</h3>
            <p>473 followers</p>
          </div>
          <div className="channel-actions">
            <a
              href="https://whatsapp.com/channel/0029Vaj6sL090x30Jhgobl01" 
              className={`follow-button-link ${isShaking ? 'shake' : ''}`}
              onClick={handleFollowClick}
            >
              <button
                className={`follow-button ${isFollowing ? 'following' : ''}`}
              >
                {isFollowing ? 'Followed' : 'Follow'}
              </button>
            </a>
            <span className="menu-icon">⋮</span>
          </div>
        </div>
      </div>

      {/* "Today" Card */}
      <div className="date-card">
        <p>Today</p>
      </div>

      {/* Media/Video Message */}
      <div className="media-message">
        <img src={dummyVideo} alt="Media" className="media" />
        <div className="media-caption">
          || आप सभी को श्री गुरु जी के जन्म दिवस की बहुत-बहुत शुभकामनाएं ||
        </div>
        <div className="message-info">
          <span className="message-time">{currentTime}</span>
          <span className="message-reactions">❤️ 🙏 5</span>
        </div>
      </div>

      {/* Animated Dummy Message */}
      {showMessage && (
        <div className="message animated-message">
          <p>🙏🙏🙏 जय श्री राम 🙏🙏🙏</p>
          <div className="message-info">
            <span className="message-time">{currentTime}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppCard;
