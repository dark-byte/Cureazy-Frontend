import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

var validator = require("email-validator");
const bcrypt = require('bcryptjs');

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    useEffect(()=>{
        
        window.google.accounts.id.initialize({
            client_id : "957413395116-9415jluo91928e8kfvrjthvsnvhp6ib7.apps.googleusercontent.com",
            callback: handleGoogleSignUp
        })

        window.google.accounts.id.renderButton(
            document.getElementById('signup'),
            {
                theme: "outline",
                width: "344px"
            }
        )

        window.google.accounts.id.prompt()

    }, [])

    const handleGoogleSignUp = async (res) =>{
        console.log(res.credential)
        var user = jwt_decode(res.credential)
        console.log(user.name)
        console.log(user.email)

        alert(`Welcome ${user.name}!`)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()

        var ph = ""
        var mail = email
        //Email or Phone Validation
        if(!email){
            alert("Email or Phone number required!")
            return
        }
        if(!validator.validate(email) && isNaN(email)){
            alert("Invalid Email")
            return
        }
        if(!isNaN(email) && email.length !== 10){
            alert("Invalid number")
            return
        }
        if(password !== confirmPassword){
            alert("Passwords do not match!")
            return
        }
        if(!isNaN(email) && email.length === 10){
            ph = +email
            mail = ""
        }

        // Password Hashing
        await bcrypt.hash(password, 10)
        .then((hashedPassword)=>{
            const pass = hashedPassword

            axios({
                method: 'post',
                url: "http://localhost:5000/signup",
                headers: {}, 
                data: {
                    "fName" : name.split(" ")[0],
                    "lName": name.split(" ")[1],
                    "dob" : "",
                    "address": "",
                    "pin": "",
                    "email": mail,
                    "phNumber": ph,
                    "password": pass
                }
            }).then((res)=>{
                    console.log(res)
                    alert("Sign up Successful!")
                }).catch((err)=>{
                    console.log(err)
                    alert(err.response.data.error)
                })
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
                        <div id="signup"></div>
                        {/* <button id='signup' className='register-form-btn'><FcGoogle/> Sign up with Google</button> */}
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
                            placeholder="Email or Phone Number"
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
