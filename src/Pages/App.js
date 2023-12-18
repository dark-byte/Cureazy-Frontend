import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home'
import ClinicPage from '../Pages/ClinicPage';
import UserProfile from '../Pages/UserProfile';
import ScrollTop from '../Components/ScrollTop';
import ClinicDashboard from './ClinicDashboard';
import ClinicLogin from './Clinic.Login';
import ClinicSignUp from './Clinic.SignUp';
import AddClinicDetails from './Clinic.AddDetails';
require('dotenv').config()

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <>
   <BrowserRouter>
      <ScrollTop/>
      <Routes>
        <Route path = "/" element = {<Landing loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}/>
        <Route path='/login' element = {<Login loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/home' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}/>
        <Route path='/clinic/:id' element = {<ClinicPage loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}/>
        <Route path='/profile' element={<UserProfile />}/>
        <Route path='/clinic-dashboard/' element={<ClinicDashboard/>}/>
        <Route path='/clinic/login' element={<ClinicLogin/>}/>
        <Route path='/clinic/signup' element={<ClinicSignUp/>}/>
        <Route path='/clinic/add-details' element={<AddClinicDetails/>}/>
        <Route path='*' element = {<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;
