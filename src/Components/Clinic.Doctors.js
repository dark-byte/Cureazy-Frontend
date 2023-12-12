import React from 'react';
import DocCard from './Clinic.Doctors.card';
import docs from './Data/doctors'
import { IoMdAdd } from "react-icons/io";
import AddDocPopup from './Clinic.AddDoc';
import { useState } from 'react';

const Doctors = () => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    
  };

  return (
    <div className='booking-doctor'>
      <div className="booking-doctor-top">
        <h1>Doctors In Your Clinic</h1>
        <button onClick={togglePopup} className='btn btn-primary add-doc-btn btn-small'><IoMdAdd/> Add Doctor</button>
        <AddDocPopup show={showPopup} handleClose={togglePopup}/>
      </div>
      <div className="doc-card-container">
        {
          docs.map(((doc, i)=>{
            return(<DocCard key={i} {...doc}/>)
          }))
        }
      </div>
    </div>
  );
}

export default Doctors;
