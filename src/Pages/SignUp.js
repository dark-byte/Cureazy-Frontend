import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import signupImg from '../images/loginpageimg.png'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';
const cors = require('cors')
app.use(cors())

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    useEffect(()=>{
        // handleSignUp()
    }, [])

    const handleSignUp = () => {
        if(password !== confirmPassword){
            alert("Passwords do not match!")
            return
        }
        axios({
        method: 'post',
        url: "http://localhost:5000/signup",
        headers: {}, 
        data: {
            "fName" : name.split(" ")[0],
            "lName": name.split(" ")[1],
            "dob" : "2003-02-24",
            "address": "dummy address",
            "pin": "999999",
            "email": email,
            "phNumber": "912387400",
            "password": password
        }
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
            alert("Some Error Occured!")
        })
    }
    
    const signupImg = 'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    return (
        <div className="register-container">
            <div className="register-bg">
                <div className="register-left">
                    <img src={signupImg} alt="" />
                </div>
                <div className="register-right">
                    <div className='section-container register-form'>
                        <h2> Create Your Account</h2>
                        <button className='register-form-btn'><FcGoogle/> Sign up with Google</button>
                        <div className="divider">
                            <hr/>
                                <span>or</span>
                            <hr/>
                        </div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>
                            <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={() => setAgreedToTerms(!agreedToTerms)}
                            />
                            I agree to all Terms and Privacy Policy
                        </label>
                        <button className='register-form-btn register-submit' disabled={!agreedToTerms} onClick={handleSignUp}>
                            Sign up
                        </button>
                        <p>
                            Already Have an Account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default SignUp;
