import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from 'axios';
import Loading from './Loading';
require('dotenv').config()


const AddDocPopup = ({ handleClose, show }) => {
  const [formData, setFormData] = useState({
    // Add form fields here
    name: '',
    qualification: '',
    yearsOfExperience: '',
    description: '',
    phoneNumber: '',
    profilePic: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const showHideClassName = show ? 'add-doc-popup add-doc-display-flex' : 'add-doc-popup add-doc-display-none';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setIsLoading(true)

    const formDataObject = new FormData()

    // Loop through the formData object and append each property to FormData
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataObject.append(key, formData[key]);
      }
    }

    axios.post('http://127.0.0.1:5002/add-doctor', formDataObject,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }})
      .then((res) => {
          console.log(res)
          alert("Doctor added successful!")
      }).catch((err) => {
        console.log(err)
        alert(err)
    })

    setIsLoading(false)
    console.log("Clinic Details added!")
    setIsSubmitted(true)
    console.log('Form submitted with data:', formData);
    setTimeout(() => {
      handleClose(); // Close the popup after submission
      setIsSubmitted(false)
    }, 2000);
  };

  

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, profilePic: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

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

                {/* Circular div for profile image upload */}
                <div className="profile-image-container" onClick={() => document.getElementById('imageInput').click()}>
                  {formData.profilePic ? (
                    <img src={formData.profilePic} alt="Profile" className="profile-image" />
                  ) : (
                    <div className="default-profile-image"><IoPersonCircleOutline style={{fontSize: '10rem'}}/>
                    <div className="add-pic-overlay"><MdOutlineFileUpload/></div>
                    </div>
                  )}
                </div>

                {/* Hidden input for image upload */}

              {
                isLoading? <Loading/>:
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <input
                    type="file"
                    name='profilePic'
                    accept="image/*"
                    id="imageInput"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                    />
                  <label>
                      <input placeholder='Enter Full Name' className='input input-small' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                  </label>
                  <label>
                      <input placeholder="Enter Doctor's Qualification" className='input input-small' type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} />
                  </label>
                  <label>
                      <input placeholder="Years Of Experience" className='input input-small' type="number" name="yearsOfExperience" value={formData.years} onChange={handleInputChange} />
                  </label>
                  <label>
                      <input placeholder="Enter Doctor's Phone Number" className='input input-small' type="text" name="phoneNumber" value={formData.phno} onChange={handleInputChange} />
                  </label>
                  <label>
                      <textarea rows='3' placeholder="Brief Description" className='input input-small' type="text" name="description" value={formData.description} onChange={handleInputChange} />
                  </label>
                  <br />
                  <button className='btn-primary btn-small btn-wide' type="submit">Submit</button>
                  </form>
              }
            </section>
        }
    </div>
  );
};

export default AddDocPopup;