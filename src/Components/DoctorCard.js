import React from 'react';

const DoctorCard = ({img, name, specaility, days, fees}) => {
  return (
    <div className='doctor-card'>
        <div style={{display:"flex"}}>
            <div className="doctor-image">
                <img src={img} alt={name} />
            </div>
            <div className="doctor-info">
                <h4>{name}</h4>
                <span className='doc-card-span primary'>{specaility}</span><br></br>
                <span className='doc-card-span'>{days}</span><br></br>
                <span className='doc-card-span'>Fees - <b>{fees}/-  </b></span><br></br>
                <span><a className='doc-card-span primary' href="/home">View Profile</a></span>

            </div>
        </div>
        <div className="doctor-book-btn-group">
            <button className='link'>Show Report</button>
            <button className='btn-small btn-primary'>Book Appointment</button>
        </div>
    </div>
  );
}

export default DoctorCard;
