import './App.css'
import avatar from '../images/pfp.jpg'
import { useState } from 'react';
import axios from 'axios'

const url = "https://localhost:5000/uploads"

const SignUp = () => {
    const [postImage, setPostImage] = useState({ myFile: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage)
        console.log("Uploaded")
    }

    const createPost = async (newImage) => {
        try {
            await axios.post(url, newImage)
        } catch (error) {
            console.log(error);
        }
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertToBase64(file);
        console.log(base64);
        setPostImage({ ...postImage, myFile: base64 })
    }

    return (
        <div className='pfp-page'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='file-upload' className='custom-file-upload'><img className='pfp-img' src={postImage.myFile || avatar} alt='pfp'></img></label>
                <br></br>
                <input
                    type='file'
                    hidden={true}
                    label='Image'
                    name='myFile'
                    id='file-upload'
                    accept='.jpeg, .png, ,.jpg'
                    onChange={(e) => handleFileUpload(e)}>
                </input>
                <h3>John Doe</h3>
                <p>Dermatologist</p>
                <button type='submit' className='btn-nav-primary'> Save </button>
            </form>
        </div>
    )
};

export default SignUp;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
