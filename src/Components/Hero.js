import React from 'react';
import blob from '../images/blob.svg'
import doctor from '../images/landing-pic1.png'
import image from '../images/landing-pic.png'
import {AiFillPlayCircle} from 'react-icons/ai'


const Hero = () => {
  return (
    <section className='hero'>
        <div className="text">
            <h1>Discover Doctors Nearby</h1>
            <h3>
                Book Appointments Anytime, Anywhere, for Free! Our user-friendly app allows
you to seamlessly schedule appointments with nearby doctors at your
convenience. Experience the ease of real-time patient count updates,
ensuring minimal waiting times.
            </h3>

            <div className="btn-group">
                <button className='btn-primary'>
                    Book Appointment
                </button>
                <button className='btn-secondary'>
                    <AiFillPlayCircle className='watch-icon'/>     Watch video
                </button>
            </div>
        </div>

        <div className="hero-img">
            <img src={image} alt="" />
        </div>
    </section>
  );
}

export default Hero;
