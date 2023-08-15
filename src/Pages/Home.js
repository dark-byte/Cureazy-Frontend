import React from 'react';
import NavFixed from '../Components/NavFixed'
import Clinics from '../Components/Clinics';
import Categories from '../Components/Categories';
import TopCarousel from '../Components/TopCarousel';
import Footer from '../Components/Footer'

const Home = (loggedIn) => {

  return (
    <div className='home'>
      <NavFixed loggedIn = {loggedIn}/>
      <TopCarousel/>
      <Categories/>
      <Clinics/>
      <Footer/>
    </div>
  );
}

export default Home;
