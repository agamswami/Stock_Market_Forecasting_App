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

    const {details,setDetails} = useContext(DetailsContext);
    


    // useEffect(() => {
        // setDetails(details[0]);
    // },[useContext(DetailsCont.details)])

    const [profit,setprofit] = useState(1);
    const [sign,setsign] = useState("");

    if(profit === 1 && sign != "+"){
        setsign("+");
    }

    return (
      <div className="w-35">
        <div className="priceCardName mt-5 mb-4 me-4 bg-white">
            <p style={{textAlign : "left",margin : "7px", color : "#D3D3D3"}}>{"AAPL"}</p>
            <div className="priceCard">
                <p style={{fontSize : 30}}>{`$300`} <span style ={{color:"#D3D3D3" , fontSize : 16}}>USD</span></p>
                <p style={(profit === 0) ? {fontSize : 30 , color : "#D3D3D3"} : ((profit === 1) ? {fontSize :30 , color : "green"} : {fontSize :30 , color : "red"})}>{`${sign}30(10%)`}</p>
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