import React, { useState } from 'react';
import {LiaDirectionsSolid} from 'react-icons/lia'
import {BsBookmark, BsFillBookmarkFill} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiShareAlt} from 'react-icons/bi'

const ClinicTitle = ({title, location, rating, id}) => {

  const handleBookmarkClick = ()=>{
    if(bookmarked){
      console.log(`${id} is removed from bookmark!`)
      setBookmarked(false)
    }else{
      console.log(`${id} is bookmarked!`)
      setBookmarked(true)
    }

    // TODO - 
    // 1. Implement api call to post the bookmarks to the backend.
    // 2. Implement api call to get clinic information of {id} from the database.
  }

  const [bookmarked, setBookmarked] = useState(false)
  return (
    <div className="clinic-title">
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="clinic-btn-group">
            <button className='btn-primary btn-small'><LiaDirectionsSolid/> Direction</button>
            <button onClick={handleBookmarkClick} className='btn-primary btn-small'>{bookmarked? <BsFillBookmarkFill/> : <BsBookmark/>} Bookmark</button>
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
