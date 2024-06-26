import React, { useState , useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";

import Table from "../components/Table/Table.jsx";
import News from "../components/News/News.jsx";
import "./DashBoard.css"
import { getSymbols } from "../Apirequest/ApiDetail.js";
// import { useState } from "react";
import { SymbolContext } from "../components/Context/SymbolState.js"

// import Table from "../components/Table/Table.jsx"


function Dashboard(props) {
  const {authFlag , setAuthFlag} = useContext(SymbolContext);
  setAuthFlag(true);

  // const data = Stock("nvda");
  // // const data2 = {
  // //   data3 : data
  // // }
  // console.log(data);
  
  // console.log(data[0]);
  // // var [tableData, setTableData] = useState(data);


  // function Dashboard(props) {
    const [tableData, setTableData] = useState([{close : 0}]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getSymbols();
          console.log(data); // Promise should be resolved at this point
          console.log(data[0]); // Should now print the first element of the array
          setTableData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []); // Empty dependency array to ensure useEffect runs only once

    // document.addEventListener("mousemove", onMouseMove);

    // function onMouseMove(event){
    //   console.log(event.clientX);
    // }
  

  // console.log("test1");
    return (
      <div className="DashBoard">
        <Navbar />
        {/* {tableData[0].close} */}
        <div className = "ElementContainer">
          <News />
          <Table />
        </div>
        <Footer />

      </div>
    );
  }

export default Dashboard;