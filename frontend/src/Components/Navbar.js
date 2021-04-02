import React from 'react';
import  './Navbar.css';
import logo from '../images/logo.png';

export default function Navbar(){

   return <div class="navbar">
   <img src={logo} />
   <h6>Login</h6>
   <h6>Sign Up</h6>
   </div>
}