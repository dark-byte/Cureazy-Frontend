import React from 'react';
import features from './Data/ourFeatures.json'
import Card from './Card';

const Features = () => {
  return (
    <section className='section-container features'>
      <h1>OUR FEATURES</h1>
      <div>
        <div className="card-container">
            {features.map((feature)=>{
                return <Card 
                imageSrc={feature.imageSrc} 
                title = {feature.title} 
                description={feature.description}/>
            })}
        </div>
      </div>
    </section>
  );
}

export default Features;
