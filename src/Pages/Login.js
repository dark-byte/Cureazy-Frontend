import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode';


const Login = ({loggedIn, setLoggedIn}) => {
    // const navigate = useNavigate()
    useEffect(()=>{
        const handleGoogleSignUp = async (res) => {
          console.log(res.credential);
          var user = jwt_decode(res.credential);
          console.log(user.email);

          axios({
            method: "post",
            url: "http://localhost:5000/login/google",
            headers: {},
            data: {
              email: user.email,
            },
          })
            .then((res) => {
              console.log(res);
              alert("Login Successful!");
            })
            .catch((err) => {
              console.log(err);
              alert(err.response.data.error);
            });

          alert(`Welcome ${user.name}!`);
          
          // navigate('/home')
        };
    
        console.log(process.env.CLIENT_ID)
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


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = ()=>{
            axios({
            method: 'post',
            url: "http://localhost:5000/login",
            headers: {}, 
            data: {
                "email": email,
                "password": password
            }
            }).then((res)=>{
                console.log(res)
                alert("login successful!")
            }).catch((err)=>{
                console.error(err)
                alert("Some Error Occured!")
            })
    }

    const loginImg = 'https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'

    return (    
    <div className="register-container">
        <div className="register-bg">
            <div className="register-left">
                <img src={loginImg} alt="" />
            </div>
            <div className="register-right">
                <div className='section-container register-form'>
                    <h2>Welcome Back</h2>
                    {/* <button className='register-form-btn'><FcGoogle/> Log In with Google</button> */}
                    <div id="signup"></div>
                    <div className="divider">
                        <hr/>
                            <span>or</span>
                        <hr/>
                    </div>
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
                    <button className='register-form-btn register-submit' onClick={handleLogin}>
                        Log In
                    </button>
                    <p>
                        Don't Have an Account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
