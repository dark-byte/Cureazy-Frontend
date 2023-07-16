import React from 'react';
import NavFixed from '../Components/NavFixed'
import Clinics from '../Components/Clinics';
import Categories from '../Components/Categories';
import TopCarousel from '../Components/TopCarousel';

const Home = () => {

  return (
    <div className='home'>
      <NavFixed />
      <TopCarousel/>
      <Categories/>
      <Clinics/>
    </div>
  );
}

export default Home;
