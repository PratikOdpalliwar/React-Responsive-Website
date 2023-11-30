import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

    <div className="footer-column">
      <div className="footer-title">About Us</div>
      <div className="footer-links">
        <div><a href="#">How it works</a></div>
        <div><a href="#">Testimonials</a></div>
      </div>
    </div>

    <div className="footer-column">
      <div className="footer-title">Contact Us</div>
      <div className="footer-links">
        <div><a href="#">Contact Support</a></div>
        <div><a href="#">Destinations</a></div>
        <div>  <a href="#">Sponsorships</a></div>
      </div>
    </div>

    <div className="footer-column">
        <div className="footer-title">Careers</div>
        <div className="footer-links">
          <div><a href="#">Terms of service</a></div>
<div> <a href="#">TRVL</a></div>          
         
        </div>
      </div>

    <div className="footer-column">
      <div className="footer-title">Investors</div>
      <div className="footer-links">
        <div><a href="#">Ambassadors</a></div>
        <div><a href="#">Agency</a></div>
    <div> <a href="#">Influencer</a></div>        
        
       
      </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer
