import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const FindDoc = () => {

    const handleSearch = (event) => {
    event.preventDefault();
    // Handle search functionality here
  };

  return (
    <section id='find-doc' className='section-container find-doc-section'>
        <div className="find-doc-bg">   
        </div>
        <div className="find-doc">
            <h2>Find a Doctor</h2>
            <p>Discover the best doctors in your locality</p>
            <form className='find-doc-form' onSubmit={handleSearch}>
                <AiOutlineSearch className='search-icon'/>
                <input className='landing-input' type="text" placeholder="Search a doctor or clinic" />
                <Link to='/home'>
                  <button className='btn-primary' type="submit">Search</button>
                </Link>
            </form>
        </div>
    </section>
  );
};

export default FindDoc;
