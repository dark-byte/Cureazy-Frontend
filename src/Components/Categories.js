import React from 'react';
import CategoriesData from './Data/categories.json'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div className='section-container'>
        <h2>Categories</h2>
        <div className="card-container">
        {
            CategoriesData.map((category)=>{
                return <CategoryCard 
                img={category.img}
                text={category.text}
                />
            })
        }
        </div>
    </div>
  );
}

export default Categories;