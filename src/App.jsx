import "./App.css";
import './index.css';
import React from "react";
import Navbar from "./components/Navbar.jsx";
import OOTD from "./components/OOTD.jsx";
import Shoes from "./components/Shoes.jsx";


function App() {
  
  return (
    <>
      <Navbar />
      <Shoes />
      <OOTD />
    </>
  );
}

export default App;
