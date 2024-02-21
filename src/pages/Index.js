import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar"
import Table from "../components/Table/Table.jsx"

function Index(props) {
    return (
      <div>
          <Navbar />
          <Table />
      </div>
    );
  }

export default Index;