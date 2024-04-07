import React, { useState,useEffect,useContext } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer/Footer.jsx";
import Chart from "../components/Chart/Chart.jsx";
import Card from "../components/Card/Card.jsx";
import "./Info.css"
import DetailsState from "../components/Context/DetailsState.js"
import { DetailsContext } from "../components/Context/DetailsState.js";
import { fetchComapnyDetails, fetchStockPrice } from "../Apirequest/ApiDetail.js";
import { SymbolContext } from "../components/Context/SymbolState.js";


function Info(props) {
  const [details,setDetails] = useState({
       
    "ceo": "",
    
    "companyName": "",
    "country": "",
    "date": "",
    "employees": "",
    "exchange": "",
    
    "industry": "",
    
    "website": "",
    
});
  const [graphData,setGraphData] = useState([])
  const {symbol,setSymbol} = useContext(SymbolContext);
  // const ticker = "aapl"
  const [filter , setFilter] = useState("1D");
  // useEffect(
  //   () => {
  //     async () => {
  //       try{
  //         const response = await fetchComapnyDetails("meta");
        
  //         setDetails(response);
  //         console.log(details[0]);
  //       } catch (error){
  //         setDetails([]);
  //         console.log(error)
  //       }
  //     }
  //   }
  // ,[])

  useEffect(() => {
    console.log("b");
      const ComapantDetialsasync  = async () => {
        console.log("c");
        try{
          const response = await fetchComapnyDetails(symbol);
        
          setDetails(response[0]);

          console.log(response[0]);
          // console.log(details);
          // console.log(details[0]);
        } catch (error){
          setDetails([]);
          console.log(error);
        }
      }
      ComapantDetialsasync();
    }
  ,[symbol])


  useEffect(() => {
    console.log("d");
     const GraphDataasync = async () => {
      console.log("e");
      try{
        const respone = await fetchStockPrice(symbol , filter);

        setGraphData(respone);
        console.log(respone);
      } catch (error){
        setGraphData([]);
        console.log(error);
      }
     }
     GraphDataasync();
    
  },[filter,symbol])


    return (
      <DetailsState data = {{details,setDetails, filter, setFilter , graphData}}>
        <div className="InfoContainer" style={{background : "#F6F6F3"}}>
          <Navbar />
          <div className="ChartAndCardCcontainer">
            <Chart />
            <Card />
          </div>
          <Footer />
        </div>
      </DetailsState>
    );
  }

export default Info; 