import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";



const AddDocPopup = ({ handleClose, show }) => {
  const [formData, setFormData] = useState({
    // Add form fields here
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    console.log('Form submitted with data:', formData);
    setTimeout(() => {
        handleClose(); // Close the popup after submission
        setIsSubmitted(false)
    }, 2000);
  };

  const showHideClassName = show ? 'add-doc-popup add-doc-display-flex' : 'add-doc-popup add-doc-display-none';

  return (
    <div className={showHideClassName}>
        {isSubmitted ? 
            <div className="doc-submitted">
                <FaCheck className='doc-submitted-success'/>
                <p>Doctor Added Successfully!</p>
            </div>
            :
            <section className="popup-modal-main">
                <h3>Add Doctor</h3>
                <button className='close-btn' onClick={handleClose}><IoMdClose/></button>
                <form onSubmit={handleSubmit}>
                <label>
                    <p className='popup-label'>Name</p>
                    <input placeholder='Enter Full Name' className='input input-small' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    <p className='popup-label'>Email</p>
                    <input placeholder="Enter Doctor's Email" className='input input-small' type="text" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <br />
                <button className='btn-primary btn-small' type="submit">Submit</button>
                </form>
            </section>
        }
    </div>
  );
};

export default AddDocPopup;