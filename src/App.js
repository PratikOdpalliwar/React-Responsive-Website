import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
      
    </Router>
  );
}

export default App;
