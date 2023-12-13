import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";



const AddDocPopup = ({ handleClose, show }) => {
  const [formData, setFormData] = useState({
    // Add form fields here
    name: '',
    qualification: '',
    years: '',
    description: '',
    phno: '',
    profileImage: ''
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, profileImage: reader.result });
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
                  {formData.profileImage ? (
                    <img src={formData.profileImage} alt="Profile" className="profile-image" />
                  ) : (
                    <div className="default-profile-image"><IoPersonCircleOutline style={{fontSize: '10rem'}}/>
                    <div className="add-pic-overlay"><MdOutlineFileUpload/></div>
                    </div>
                  )}
                </div>

                {/* Hidden input for image upload */}
                <input
                  type="file"
                  accept="image/*"
                  id="imageInput"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />

                <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder='Enter Full Name' className='input input-small' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <label>
                    <input placeholder="Enter Doctor's Qualification" className='input input-small' type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} />
                </label>
                <label>
                    <input placeholder="Years Of Experience" className='input input-small' type="number" name="years" value={formData.years} onChange={handleInputChange} />
                </label>
                <label>
                    <input placeholder="Enter Doctor's Phone Number" className='input input-small' type="text" name="phno" value={formData.phno} onChange={handleInputChange} />
                </label>
                <label>
                    <textarea rows='3' placeholder="Brief Description" className='input input-small' type="text" name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                <br />
                <button className='btn-primary btn-small btn-wide' type="submit">Submit</button>
                </form>
            </section>
        }
    </div>
  );
};

export default AddDocPopup;