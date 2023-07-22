import React from 'react';
import NavFixed from '../Components/NavFixed'
import Clinics from '../Components/Clinics';
import Categories from '../Components/Categories';
import TopCarousel from '../Components/TopCarousel';
import Footer from '../Components/Footer'

const Home = () => {

  return (
    <div className='home'>
      <NavFixed />
      <TopCarousel/>
      <Categories/>
      <Clinics/>
      <Footer/>
    </div>
  );
}

export default Home;
