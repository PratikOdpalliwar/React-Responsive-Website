import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
   <div className="nav">
   <Navbar />
   </div>
   
   <div className="home">
   <Home />
   </div>
   
    </div>
  );
}

export default App;
