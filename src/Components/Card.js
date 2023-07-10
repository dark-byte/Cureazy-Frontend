import React from 'react';


const Card = ({ imageSrc, title, description }) => {
  return (
    <div className='card'>
        <div className="card-img-container">
          <img className='card-img' src={imageSrc} alt="Card Image"/>
        </div>
      <div style={{ padding: '20px' , marginLeft: '10px'}}>
        <h3 style={{ marginBottom: '10px'}}>{title}</h3>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>{description}</p>
        </div>
    </div>
  );
};

export default Card;