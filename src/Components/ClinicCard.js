import React from 'react';
import {AiFillLike} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ClinicCard = ({img, name, id, category, location, distance, fees, rating}) => {

  return (
    <div className='clinic-card'>
        <div className="clinic-card-img-container">
          <img className='clinic-card-img' src={img} alt=''/>
        </div>
        <div style={{display: "flex", flexDirection: "column", flexGrow: "1", marginLeft: "15px"}}>
            <div className="clinic-name">
                <h3>{name} <span className='clinic-rating'><AiFillLike/> {rating}</span></h3>
            </div>
            <p>{category}</p>
            <p>{location}</p>
            <p>{distance}</p>
            <p>Consultancy fees starts at <b>{fees}/-</b></p>
        </div>
        <div style={{display : "flex", justifyContent: "center", alignItems: "center"}}>
              <Link className='link-white' to={`/clinic/${id}`}>
                <button className='btn-primary btn-small'>
                  View
                </button>
              </Link>
        </div>
    </div>
  );
}

export default ClinicCard;
