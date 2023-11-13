import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {useState} from "react";
// import Hamburger from './Hamburger';



const Navbar = () => {

  const [click, setClick]= useState(false);

  const onHandleClick =()=>{
    setClick(!click)
  }

  return (
    <>
 


   <header className="header">
    <div className="logo">
    FindMyCar <Link to="/" className='navbar-logo'><img src="img.png" alt="Logo" /></Link>
    </div>

   <div className="nav">
       <ul className="items">Home</ul>
        <ul className="items">Services</ul>
        <ul className="items">Products</ul>
        <button className="btn">SIGN UP</button>
{/* 
        <ul className="items"><link to="./pages/Home">Home</link></ul>
        <ul className="items"><link to="./pages/Services">Services</link></ul>
        <ul className="items"><link to="./pages/Products">Products</link></ul>
        <button className="btn">SIGN UP</button> */}
</div>

<div className="hamburger-menu" onClick={onHandleClick}>
<i class={click? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
</div> 

    </header> 
    
    
    </>
    


  );
}

export default Navbar;