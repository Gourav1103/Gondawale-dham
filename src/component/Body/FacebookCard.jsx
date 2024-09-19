import React, { useState } from 'react';
import './FacebookCard.css';
import headerImage from '../Images/header-back.jpeg';
import profilePic from '../Images/Gondawale_Dham_Logo.jpeg';

const FacebookCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(true);
  };

  return (
    <div className="card-container3">
      <div className="header-image3">
        <img
          src={headerImage}
          alt="Gondawale Dham Banner"
        />
        <div className="profile-pic-container3">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic3"
          />
        </div>
      </div>
      <div className="card-content3">
        <h2>Gondawale Dham Indore</h2>
        <p>1.8T likes • 3.8T followers</p>
        <p>
          गोंदवले धाम, इंदौर का अधिकृत पृष्ठ
          <br />
          Gondawale dham, Indore Official page
          <br />
          श्री श्रीराम कोकाजे गुरुजी
        </p>
        <div className="follow-button3">
          <a
            href="https://www.facebook.com/profile.php?id=100094345264423&mibextid=ZbWKwL" // Replace with actual follow link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={isFollowed ? 'followed' : ''}
              onClick={handleFollow}
            >
              {isFollowed ? 'Followed' : 'Follow'}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookCard;
