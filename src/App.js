import React, { useState, useEffect, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from './component/PreLoader'; 

// Lazy load the components
const RamNamBackground = lazy(() => import('./component/Body/RamnamBackground'));
const Header = lazy(() => import('./component/Header/header'));
const ShreeRamCard = lazy(() => import('./component/Body/shreeRamCard'));
const SocialMediaCard = lazy(() => import('./component/Body/SocialMediaCard'));

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const loadPromise = new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve();
      }, 500); 

      return () => clearTimeout(timer); 
    });

    loadPromise.then(handleLoad);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> 
      ) : (
        <Suspense fallback={<Preloader />}>
          <RamNamBackground />
          <Header />
          <ShreeRamCard />
          <SocialMediaCard />
        </Suspense>
      )}
    </div>
  );
}

export default App;

