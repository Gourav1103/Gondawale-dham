import React, { useState, lazy, Suspense, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaCard.css'; 
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook, FaGooglePlay } from 'react-icons/fa';

// Lazy loading components
const WhatsAppCard = lazy(() => import('./WhatsAppCard'));
const YoutubeCard = lazy(() => import('./YouTubeCard'));
const InstagramCard = lazy(() => import('./InstagramCard'));
const FacebookCard = lazy(() => import('./FacebookCard'));

const SocialMediaCard = () => {
  const [activeCard, setActiveCard] = useState('whatsApp'); 
  const [youtubePreloaded, setYoutubePreloaded] = useState(false);
  const [instagramPreloaded, setInstagramPreloaded] = useState(false);
  const [facebookPreloaded, setFacebookPreloaded] = useState(false);

  // Toggle card visibility
  const toggleCard = (cardName) => {
    setActiveCard(cardName);
  };

  const handlePlayStoreClick = () => {
    toggleCard('whatsApp');
  };

  // Preload the YouTube card when WhatsApp is loaded
  useEffect(() => {
    if (activeCard === 'whatsApp' && !youtubePreloaded) {
      import('./YouTubeCard').then(() => {
        setYoutubePreloaded(true);
      });
    }
  }, [activeCard, youtubePreloaded]);

  // Preload Instagram after YouTube is displayed
  useEffect(() => {
    if (activeCard === 'youtube' && !instagramPreloaded) {
      import('./InstagramCard').then(() => {
        setInstagramPreloaded(true);
      });
    }
  }, [activeCard, instagramPreloaded]);

  // Preload Facebook after Instagram is displayed
  useEffect(() => {
    if (activeCard === 'instagram' && !facebookPreloaded) {
      import('./FacebookCard').then(() => {
        setFacebookPreloaded(true);
      });
    }
  }, [activeCard, facebookPreloaded]);

  return (
    <div className="social-media-container container text-center">
      <h2 className="light-golden-text">
        || गोंदवले धाम सोशल मीडिया परिवार ||
      </h2>

      {/* Social Media Buttons */}
      <div className="button-container d-flex justify-content-center mb-4">
        <button
          className={`social-button btn ${activeCard === 'whatsApp' ? 'active' : ''}`}
          onClick={() => toggleCard('whatsApp')}
        >
          <FaWhatsapp size={32} style={{ color: '#25D366' }} /> 
        </button>

        <button
          className={`social-button btn ${activeCard === 'youtube' ? 'active' : ''}`}
          onClick={() => toggleCard('youtube')}
        >
          <FaYoutube size={32} style={{ color: '#FF0000' }} /> 
        </button>

        <button
          className={`social-button btn ${activeCard === 'instagram' ? 'active' : ''}`}
          onClick={() => toggleCard('instagram')}
        >
          <FaInstagram size={32} style={{ color: '#C13584' }} /> 
        </button>

        <button
          className={`social-button btn ${activeCard === 'facebook' ? 'active' : ''}`}
          onClick={() => toggleCard('facebook')}
        >
          <FaFacebook size={32} style={{ color: '#1877F2' }} /> 
        </button>

        <a
          href="https://play.google.com/store/apps/details?id=com.gondavale_dham" 
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePlayStoreClick}
        >
          <button className={`social-button btn ${activeCard === 'playstore' ? 'active' : ''}`}>
            <FaGooglePlay size={32} style={{ color: '#34A853' }} /> 
          </button>
        </a>
      </div>

      {/* Card Display */}
      <div className="card-container">
        <Suspense fallback={<div>Shree Ram...</div>}>
          {activeCard === 'whatsApp' && (
            <div className="animate__animated animate__fadeIn">
              <WhatsAppCard />
            </div>
          )}

          {activeCard === 'youtube' && (
            <div className="animate__animated animate__fadeIn">
              <YoutubeCard />
            </div>
          )}

          {activeCard === 'instagram' && (
            <div className="animate__animated animate__fadeIn">
              <InstagramCard />
            </div>
          )}

          {activeCard === 'facebook' && (
            <div className="animate__animated animate__fadeIn">
              <FacebookCard />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default SocialMediaCard;
