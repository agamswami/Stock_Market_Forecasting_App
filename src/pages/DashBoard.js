import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";


// import Table from "../components/Table/Table.jsx"


function Dashboard(props) {
    return (
      <div >
        <Navbar />
        
        <Footer />

      </div>
    );
  }

export default Dashboard;