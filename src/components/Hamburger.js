import React from 'react'
import "./Hamburger.css"

const Hamburger = () => {
  return (
    <div className="nav">
    <ul className="items">Home</ul>
     <ul className="items">Services</ul>
     <ul className="items">Products</ul>
     <button className="btn">SIGN UP</button>
    </div>
  )
}

export default Hamburger;
