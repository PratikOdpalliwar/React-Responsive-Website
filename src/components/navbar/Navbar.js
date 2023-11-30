import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {useState} from "react";



const Navbar = () => {

  const [click, setClick]= useState(false);
  // const [isActive, setIsActive] = useState(false);
  
  const onHandleClick =()=>{
    setClick(!click)
    // setIsActive(!isActive);
  }



  return (
    <>
 <header className="header">
    <div className="logo">
    FindMyCar <Link to="/" className='navbar-logo'><img src="img.png" alt="Logo" /></Link>
    </div>

   <div 
   className= {click ? "mobile-nav-menu" : "nav"}
   >

       <ul className="item">Home</ul> 
        <ul className="item">Services</ul>
        <ul className="item">Products</ul>
        <button className="btn">SIGN UP</button>
      
</div>

<div className="hamburger-menu" onClick={onHandleClick}>
<i class={click? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
</div> 

    </header>     
    </>
);
}

export default Navbar;


