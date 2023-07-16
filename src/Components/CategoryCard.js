import React from 'react';

const CategoryCard = ({img, text}) => {
  return (
    <div className='category-card'>
        <div className="category-img">
            <img src={img} alt="" />
        </div>
        <p>{text}</p>
    </div>
  );
}

export default CategoryCard;
