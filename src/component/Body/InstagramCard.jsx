import React, { useState } from "react";
import './InstagramCard.css';
import logo1 from '../Images/Hari_Hat_logo2.png'; 
import reel1 from '../Images/Instagram_Reel_1.jpeg'; 
import reel2 from '../Images/Instagram_Reel_2.png';
import instaFollowLogo from '../Images/instagram_follow.jpeg';
import Slider from "react-slick";

const InstagramCard = () => {
  const [isShaking, setIsShaking] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  const profileCard = {
    logo: logo1,
    name: "Gondawale Dham Indore",
    description: "आधिकारिक पृष्ठ\nसदगुरु श्री ब्रह्मचैतन्य गोंदवलेकर महाराज\nगुरुदेव श्री श्रीराम कोकजे जी ...",
    posts: 500,
    followers: 2013,
    following: 0
  };

  const reels = [
    { image: reel1, link: 'https://www.instagram.com/p/DAC6BQnytML/' },
    { image: reel2, link: 'https://www.instagram.com/p/C_3EKn1ydMI/' }
  ];

  const handleFollowClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); 
  };

  const renderProfileCard = () => (
    <div className="profile-card">
      <div className="left-section">
        <div className="logo-container-3">
          <img src={profileCard.logo} alt="Logo" className="logo" />
        </div>
        <div className="title-section">
          <h3 className="profile-name">{profileCard.name}</h3>
          <p className="profile-description">{profileCard.description}</p>
        </div>
      </div>
      <div className="right-section">
        <div className="info-stats">
          <div className="info-item">
            <p className="count">{profileCard.posts}</p>
            <p className="label">Posts</p>
          </div>
          <div className="info-item">
            <p className="count">{profileCard.followers}</p>
            <p className="label">Followers</p>
          </div>
          <div className="info-item">
            <p className="count">{profileCard.following}</p>
            <p className="label">Following</p>
          </div>
        </div>
        <div className="more-info">
          <a 
            href="https://instagram.com/gondawaledhamindore" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`follow-logo ${isShaking ? 'shaking' : ''}`}
            onClick={handleFollowClick}
          >
            <img src={instaFollowLogo} alt="Follow Logo" className="follow-logo-img" />
          </a>
          <p className="see-more">See more...</p>
        </div>
      </div>
    </div>
  );

  const renderReelCard = (reel, i) => (
    <div className="reel-card">
  <h2 className="reel-header">Instagram Reels</h2> {/* Header at the top */}
  <a href={reel.link} target="_blank" rel="noopener noreferrer" className="reel-link">
    <img src={reel.image} alt={`Reel ${i}`} className="reel-image" />
  </a>
</div>

  );

  return (
    <Slider {...settings}>
      <div>{renderProfileCard()}</div>

      {reels.map(renderReelCard)}
    </Slider>
  );
};

export default InstagramCard;
