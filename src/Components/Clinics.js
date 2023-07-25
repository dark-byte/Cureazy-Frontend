import React from 'react';
import clinics from './Data/clinics.json'
import ClinicCard from './ClinicCard';

const Clinics = () => {
  return (
    <div>
    <section className='section-container'>
      <h2>Find Clinics of Your Need</h2>
      <div className="card-container clinic-card-container">
          {clinics.map((clinic)=>{
              return <ClinicCard 
              {...clinic}
              /> 
          })}
      </div>
    </section>
    </div>
  );
}

export default Clinics;
