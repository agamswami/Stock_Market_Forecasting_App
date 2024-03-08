import React, { useState } from "react";
import "./ChartFilter.css"


function ChartFilter(props) {


  return (
    <button
      onClick={props.onClick}
      className={`w-12 m-2 h-8 border-1 rounded-1 flex-row align-item-center justify-content-center cursor-pointer ${props.active ? "indioBackGround1  text-white" : "indioBackGround2 "}`} >{props.text}</button>
      // className={`w-12 m-2 h-8 border-1 rounded flex-row align-item-center justify-content-center cursor-pointer ${props.active ? "indioBackGround1 text-white" : "indioBackGround2 text-indigo-300"}`} >{props.text}</button>
  );
};

export default ChartFilter;