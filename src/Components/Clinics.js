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
              img={clinic.img}
              name = {clinic.name}
              category= {clinic.category}
              location= {clinic.location}
              distance= {clinic.distance}
              fees= {clinic.fees}
              rating= {clinic.rating}
              /> 
          })}
      </div>
    </section>
    </div>
  );
}

export default Clinics;
