import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home'
import ClinicPage from '../Pages/ClinicPage';
import UserProfile from '../Pages/UserProfile';
import ScrollTop from '../Components/ScrollTop';
import Booking from './Booking';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
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
        <Route path='/booking/' element={<Booking/>}/>
        <Route path='*' element = {<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;
