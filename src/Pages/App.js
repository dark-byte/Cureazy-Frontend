import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home'
import ClinicPage from '../Pages/ClinicPage';
import ScrollTop from '../Components/ScrollTop';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
   <BrowserRouter>
      <ScrollTop/>
      <Routes>
        <Route path = "/" element = {<Landing/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/clinic/:id' element = {<ClinicPage/>}/>
        <Route path='*' element = {<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;
