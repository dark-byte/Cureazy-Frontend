import React from 'react'
import { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

const AddClinicDetails = () => {

    const handleSubmit = ()=>{
      axios({
        method: 'post',
        url: process.env.POST_URL,
        headers: {},
        data: formData,
      }).then((res) => {
          console.log(res)
          alert("Sign up Successful!")
      }).catch((err) => {
          console.log(err)
          alert(err.response.data.error)
      })
        console.log("Clinic Details added!")
    }

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

    const [formData, setFormData] = useState({
        // Add form fields here
        name: '',
        qualification: '',
        years: '',
        description: '',
        phno: '',
        profilePic: ''
    });

  return (
    
    <div className="register-container">
        <div className="register-bg">
            <div>

            <h2>Add Your Clinic's Details</h2>
            <form onSubmit={handleSubmit}>
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
            </form>
            </div>
        </div>
    </div>
  )
}

export default AddClinicDetails;