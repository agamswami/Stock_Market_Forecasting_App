import React, { useState, Context, useEffect, useContext } from "react";
import {DetailsContext} from "../Context/DetailsState";



import "./Card.css"

// const detailsList1 = {
//         "address": "1601 Willow Rd",
//         "address2": null,
//         "ceo": "Mark Zuckerberg",
//         "city": "Menlo Park",
//         "companyName": "Meta Platforms Inc",
//         "country": "United States",
//         "date": "1970-01-01",
//         "employees": 77114,
//         "exchange": "NASDAQ",
//         "exchangeCode": null,
//         "industry": "Data Processing, Hosting, and Related Services",
//         "issuetype": "cs",
//         "longDescription": "Meta Platforms, Inc., formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services.",
//         "marketcap": null,
//         "phone": "16506187714",
//         "primarySicCode": "7370",
//         "sector": "Information",
//         "securityName": null,
//         "securityType": "cs",
//         "shortDescription": "Meta Platforms, Inc., formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services.",
//         "state": "California",
//         "symbol": "META",
//         "website": "https://investor.fb.com/",
//         "zip": "94025-1452",
//         "id": "COMPANY",
//         "key": "META",
//         "subkey": "",
//         "updated": 1709997170433.032
//     };

    const detailsList = {
        "companyName": "Name",
        "country": "Country",
        "date": "Date",
        "exchange": "Exchange",
        "industry": "Industry",
        "website": "Website",
      };

    // const details = {
       
    //     "ceo": "Mark Zuckerberg",
        
    //     "companyName": "Meta Platforms Inc",
    //     "country": "United States",
    //     "date": "1970-01-01",
    //     "employees": 77114,
    //     "exchange": "NASDAQ",
        
    //     "industry": "Data Processing, Hosting, and Related Services",
        
    //     "website": "https://investor.fb.com/",
        
    // };


function Card(props) {

    const {details,setDetails,graphData} = useContext(DetailsContext);
    
    console.log(graphData[graphData.length-1]);
    console.log(details);
    let startPrice;
    let lastPrice;
    let percentageChange;
    let sign = ""
    let change;
    // const [profit,setprofit] = useState(1);
    // const [sign,setsign] = useState("");
    try{
        let i = graphData.length-1;
        console.log(graphData[i].close);
        while( i >= 0 && graphData[i].close === null){
            i--;
        }
        lastPrice =  (i < -1) ? 0 : graphData[i].close;
    

        i = 0;
        while( i < graphData.length && graphData[i].close === null){
            i++;
        }
        startPrice = (i >= graphData.length) ? 0 : graphData[i].close;

        change = (lastPrice-startPrice).toFixed(1);
        percentageChange = (((lastPrice-startPrice)/startPrice)*100).toFixed(1) ;
        // setprofit(percentageChange);
    } catch(error){
        lastPrice = 0;
        startPrice = 0;
        percentageChange = 0;
        change = 0 
        console.log(error);
    }

    

    // useEffect(() => {
        // setDetails(details[0]);
    // },[useContext(DetailsCont.details)])


    if(percentageChange > 0 && sign != "+"){
        sign = "+";
    }

    return (
      <div className="w-35">
        <div className="priceCardName mt-5 mb-4 me-4 bg-white">
            <p style={{textAlign : "left",margin : "7px", color : "#D3D3D3"}}>{details.symbol}</p>
            <div className="priceCard">
                <p style={{fontSize : 30}}>{`$ ${lastPrice}`} <span style ={{color:"#D3D3D3" , fontSize : 16}}>USD</span></p>
                <p style={(percentageChange === 0) ? {fontSize : 30 , color : "#D3D3D3"} : ((percentageChange > 0) ? {fontSize :30 , color : "green"} : {fontSize :30 , color : "red"})}>{`${sign}${change}(${percentageChange}%)`}</p>
            </div>
        </div>
        <div className="me-4">
            <ul class="list-group " >
                {Object.keys(detailsList).map((item) => {
                    return (
                       <li key={item} className="list-unstyled list-group-item listDetailRow " style={{color : "#858585"}}>
                            <span className="me-4">{detailsList[item]}</span>
                            <span style={{textAlign : "right"}}>{(item === "website") ? <a href={details[item]}>{details[item]}</a>: details[item] }</span>
                       </li>
                    );
                })}
            </ul>
        </div>
      </div>
    );
  }

export default Card;