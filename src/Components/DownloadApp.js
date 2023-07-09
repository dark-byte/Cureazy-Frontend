import React from 'react';
import image from '../images/iphone.png'
import googlePlay from '../images/google-play.png'
import appleStore from '../images/apple-store.png'

const DownloadApp = () => {

  return (
    <section className='section-container download-app'>
      <div className="left">
        <h1>Download the app now!</h1>
        <h3>Get the Medeezy app now and unlock the comfort<br></br> 
        of booking appointments anywhere, anytime!</h3>

        <div className="email-input">
            <input className='landing-input' type="text" placeholder='Enter you email addres or phone number' />
            <button className='btn-primary'>Submit</button>
        </div>
        <div className="google-apple">
            <button className='google-play'>
                <img src={googlePlay} alt="" />
            </button>
            <button className='apple-store'>
                <img src={appleStore} alt="" />
            </button>
        </div>
      </div>

      <div className="right">
        <img className='download-app-img' src={image} alt="" />
      </div>
    </section>
  );
}

export default DownloadApp;
