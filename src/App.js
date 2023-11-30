import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home";
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="navbar">
      <Navbar />
      </div>
        <Routes>
          <Route path="/" exact element={<Home/> } />
        </Routes>
      <div className="footer">
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
