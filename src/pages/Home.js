import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";

// import Table from "../components/Table/Table.jsx"


function Home(props) {
    return (
      <div >
        <Navbar />
        <Hero />
        <Features />
        <Footer />
        {/* <Table /> */}
      </div>
    );
  }

export default Home;