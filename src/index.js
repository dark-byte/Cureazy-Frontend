import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClinicPage from './Pages/ClinicPage';
import ScrollTop from './Components/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop/>
      <Routes>
        <Route path = "/" element = {<App/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/clinic/:id' element = {<ClinicPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
