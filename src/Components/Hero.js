import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../images/landing-pic1.png'
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
                    <Link to="/home">
                        <button className='btn-primary'>
                            Book Appointment
                        </button>
                    </Link>
                <button className='btn-secondary'>
                    <AiFillPlayCircle className='watch-icon'/> Watch video
                </button>
            </div>
        </div>

        <div className="hero-img">
            <img src={doctor} alt="" />
        </div>
    </section>
  );
}

export default Hero;
