import React from 'react';
import img from '../images/signupp.png'

const TopCarousel = () => {
  return (
    <div className='top-carousel'>
      <div className="carousel-left">
        <h1>Get Real-Time Queue Status</h1>
        <p>Minimize your wait time at the clinic, check the estimated appointment time on the cureazzy dashboard!</p>
        <button className='btn-primary btn-secondary-outline'>Book now</button>
      </div>
      <div className="carousel-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default TopCarousel;
