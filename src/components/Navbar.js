import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
   <header className="header">
    <div className="logo">
        Wroom <img src="img.png"/>
    </div>
    
    <div className="nav">
    
        <span className="items">Home</span>
        <span className="items">Services</span>
        <span className="items">Products</span>


        <button className="btn">SIGN UP</button>
    </div>
    
    </header> 
    
    
    </>
    


  );
}

export default Navbar;
