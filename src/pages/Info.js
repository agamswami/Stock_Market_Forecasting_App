import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";
import Chart from "../components/Chart/Chart.jsx";

function Info(props) {
    return (
      <div className="vh-100" style={{background : "#F6F6F3"}}>
        <Navbar />
        <div className="h-100 w-100 d-flex">
          <Chart />
          
        </div>
        <Footer />
      </div>
    );
  }

export default Info; 