import React from 'react';
import DocCard from './Booking.Doctors.card';
import docs from './Data/doctors'
import { IoMdAdd } from "react-icons/io";


const Doctors = () => {
  return (
    <div className='booking-doctor'>
      <div className="booking-doctor-top">
        <h1>Doctors In Your Clinic</h1>
        <button className='btn btn-primary add-doc-btn btn-small'><IoMdAdd/> Add Doctor</button>
      </div>
      <div className="doc-card-container">
        {
          docs.map((doc=>{
            return(<DocCard {...doc}/>)
          }))
        }
      </div>
    </div>
  );
}

export default Doctors;
