import React from 'react';
import {LiaDirectionsSolid} from 'react-icons/lia'
import {BsBookmark} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiShareAlt} from 'react-icons/bi'

const ClinicTitle = ({title, location, rating}) => {
  return (
    <div className="clinic-title">
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="clinic-btn-group">
            <button className='btn-primary btn-small'><LiaDirectionsSolid/> Direction</button>
            <button className='btn-primary btn-small'><BsBookmark/> Bookmark</button>
        </div>
      </div>
      <div className="clinic-title-rating">
          <span className='rating'><AiOutlineLike/> {rating}</span>
          <button className='btn-small btn-primary-outline'><BiShareAlt/> Share</button>
      </div>
    </div>
  );
}

export default ClinicTitle;
