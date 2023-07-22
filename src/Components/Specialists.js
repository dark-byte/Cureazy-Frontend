import React, { useState } from 'react';
import clinicInfo from '../Components/Data/clinicInfo'
import {AiOutlineSearch} from 'react-icons/ai'
import DoctorCard from './DoctorCard';

const Specialists = () => {

  const img = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const [activeSpTab, setActiveSpTab] = useState(0)

  // const handleSpTabClick = ()=>{

  // }

  return (
    <div className='specialists'>
      <div className="sp-tabs">
      <h3>SPECIALISTS</h3>
        {clinicInfo.specialists.map((sp, index)=>{
          return(
            <div className={activeSpTab === index? 'sp-tab-active sp-tab': 'sp-tab'} key={index} onClick={()=> setActiveSpTab(index)}>
                <p>{sp}</p>
            </div>
          )
        })}      
      </div>
      <div className="sp-tabs-content">
        <div className="sp-tabs-content-top">
          <h3>DOCTORS AVAILABLE</h3>
          <div style={{position: "relative", display: "flex", alignItems: "center"}}>
            <AiOutlineSearch className='search-icon' style={{left: "15px"}}/>
            <input type="text" className="input min-shadow" placeholder='Search Doctors'/>
          </div>
        </div>
        <div className="sp-tabs-content-cards">
          <DoctorCard img={img}
          name = {`Dr. Rajendra Verma`}
          specaility= {clinicInfo.specialists[activeSpTab]}
          days="M W Th"
          isAvailable={true}
          fees="700"
          />


          <DoctorCard img={img}
          name = {`Dr. Rajendra Verma`}
          specaility= {clinicInfo.specialists[activeSpTab]}
          days="M W Th"
          isAvailable={true}
          fees="700"
          />


          <DoctorCard img={img}
          name = {`Dr. Rajendra Verma`}
          specaility= {clinicInfo.specialists[activeSpTab]}
          days="M W Th"
          isAvailable={true}
          fees="700"
          />
        </div>
      </div>
    </div>
  );
}

export default Specialists;
