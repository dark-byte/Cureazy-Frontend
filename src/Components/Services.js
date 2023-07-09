import React from 'react';
import Card from './Card';
import services from './Data/ourServices.json'

const Services = () => {
  return (
    <section className='section-container'>
      <h1>OUR SERVICES</h1>
      <div className="card-container">
          {services.map((service)=>{
              return <Card 
              imageSrc={service.imageSrc} 
              title = {service.title} 
              description={service.description}/>
          })}
      </div>
    </section>
  );
}

export default Services;
