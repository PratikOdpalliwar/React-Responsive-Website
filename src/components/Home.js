import React from 'react';
import "./Home.css"
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
<div className="App">

<video src="vid.mp4" autoPlay loop muted></video>
    <div className="container">
        <h1 className="heading1">
            ADVENTURE AWAITS
        </h1>

        <h3 className="hwadin2">
            What are You Waiting For
        </h3>

<div className="btn-container">
          <button className="btn1">
        Get Started
        </button>
      
      <button className="btn2">
        Watch Trailer img
      </button>
      </div>
    </div>
    </div>
    )
}

export default Home;
