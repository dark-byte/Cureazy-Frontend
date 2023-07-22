import React from 'react';

const GridGallery = ({images}) => {
 
  const handleViewMore = ()=>{
    console.log("View more!")
  }

  return (
    <div className='grid-gallery'>

      <div>
        {images[0] ?
        <img className="clinic-image" src={images[0]} alt="" />: ""}
      </div>
      <div>
        {images[1] ?
        <img className="clinic-image" src={images[1]} alt="" />: ""}
      </div>
      <div>
        {images[2] ?
        <img className="clinic-image" src={images[2]} alt="" />: ""}
      </div>
      <div>
        {images[3] ?
        <img className="clinic-image" src={images[3]} alt="" />: ""}
      </div>
      <div className={images[4] ? "last-clinic-image" : ""} onClick={handleViewMore}>
        {images[4]? 
        <div style={{height: "100%", width: "100%", position:"relative", display: "flex", justifyContent:"center", alignItems: "center"}}>
          <span className='clinic-img-view-more'>View More</span>
          <img className="clinic-image" src={images[4]} alt="" />
        </div> 
        : ""}
      </div>
     
    </div>
  );
}

export default GridGallery;
