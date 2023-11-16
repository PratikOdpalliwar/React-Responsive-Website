import React from 'react';
import "./Home.css";
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
<div className="App">

<div className="video-container">
<video src="vid.mp4" width="100%" height="100%" autoPlay loop muted></video>
</div>

    <div className="container">
{/* <div className="text-container">
        <h1 className="heading1">
            ADVENTURE AWAITS
        </h1>
        <h3 className="heading2">
            What are You Waiting For
        </h3>
        </div>
        <div className="btn-container">
          <button className="btn1">
        Get Started
        </button>
      
      <button className="btn2">
        Watch Trailer img
      </button>
      </div> */}
    </div>


 <div className="page-items">

<div className="item-container1">
  <div className="box1">
  <img className="car-image" src="./img/img1.jpg"/>
  <div className="text-container">
  Aston Martin DB4
  </div>
  </div>
 

  <div className="box1">
  <img className="car-image" src="./img/img2.jpg"/>
  <div className="text-container">
  Acura NSX
  </div>
  </div>
</div>

<div className="item-container2">
  <div className="box2">
  <img className="car-image"  src="./img/img3.jpg"/>
  <div className="text-container">
  Jaguar E Type 1961 </div>

  </div>

  <div className="box2">
  <img className="car-image" src="./img/img4.jpg"/>
  <div className="text-container">
  1967-ford-mustang-eleanor
  </div>  </div>
  

  <div className="box2">
  <img className="car-image" src="./img/img5.jpg"/>
  <div className="text-container">
  Porsche 911 1964
  </div>
  </div>
  </div>

<div className="item-container3">
  <div className="box2">
  <img className="car-image" src="./img/img6.jpg"/>
  <div className="text-container">
  Ford Mustang Shelby GT350 1965
  </div> </div>
 

  <div className="box2">
  <img className="car-image" src="./img/img7.jpg"/>
  <div className="text-container">
  Ford Model T 1908
  </div> </div>
 

  <div className="box2">
  <img className="car-image" src="./img/img8.jpg"/>
  <div className="text-container">
  Rolls Royce Dawn Drophead 1949
  </div></div>
 </div>
</div>

    </div>
    </>
    )
}

export default Home;
