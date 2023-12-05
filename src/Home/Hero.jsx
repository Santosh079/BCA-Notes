import React, { useState, useEffect } from 'react';
import s from '../assets/s.jpg';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    // Automatically slide to the next image every 4 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run effect when activeIndex changes

  return (
    <div id="hero" className="carousel slide rounded overflow-hidden" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={s} className="d-block w-100 rounded" alt="Banner 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            className="d-block w-100 rounded"
            alt="Banner 2"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img
            src="https://example.com/banner3.jpg"
            className="d-block w-100 rounded"
            alt="Banner 3"
            style={{ objectPosition: '50% 50%', height: '300px', transition: 'transform 1s ease-in-out' }}
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#hero" role="button" data-slide="prev" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#hero" role="button" data-slide="next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeroSection;
