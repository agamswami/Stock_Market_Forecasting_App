import React, { useState } from "react";
import ReactDOM from "react-dom";

import stockImage from "../Assets/HomePage2.jpg";
import HomeBackground from "../Assets/HomeBackground.webp";

import './Hero.css';

function Hero(props) {
  return (
    <div className = "homeHero" style={{
      backgroundImage: `url(${HomeBackground})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <div className="px-4 pt-5 my-0 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Welcome to StockSageHub</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead ">Are you ready to take your stock market game to the next level? Welcome to StockSageHub, where data meets insight, and predictions become profits!</p>
          <p className="lead mb-4">Our cutting-edge predictive analytics platform utilizes advanced algorithms and real-time market data to deliver accurate forecasts. Stay ahead of market trends and make informed decisions that set you apart from the rest.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-outline-secondary btn-lg px-4 me-sm-3">Login</button>
            <button type="button" className="btn btn-primary btn-lg px-4">Sign UP</button>
          </div>
        </div>
        <div className="overflow-hidden" style={{maxHeight: "40vh"}}>
          <div className="container px-1">
            <img src= {stockImage} className="img-fluid  rounded-3 shadow-lg mb-4 h-75" alt="Example image" width= "100%" height= "100%" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;