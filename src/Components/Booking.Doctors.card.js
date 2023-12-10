import React from 'react'
import { MdEdit, MdDelete} from "react-icons/md";


const DocCard = ({img, name, speciality, id}) => {
  return (
    <div className='doc-card clinic-card'>
        <div className="clinic-card-img-container doc-card-img-container">
            <img className='doc-card-img' src={img} alt="" />
        </div>
        <div className="doc-card-mid">
            <h4>{name}</h4>
            <span className='doc-card-span primary'>{speciality}</span>
            <a className='doc-card-span primary' href={`/doctor/${id}`}>View Profile</a>
        </div>
        <div className="doc-card-right doctor-book-btn-group">
            <button className='link'> <MdEdit/> Edit Doctor</button>
            <button className='btn-small btn-primary'> <span style={{fontSize: '16px', marginRight: '5px'}}><MdDelete/></span>Delete Dctor</button>
        </div>
    </div>
  )
}

export default DocCard
