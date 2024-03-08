import React, { useState } from "react";
import ReactDOM from "react-dom";
import TableRow from "./TableRow/TableRow"
import "./Table.css"



function Table(props) {
 
  const data = [
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3} ,
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3}
  ]
  return (
    <div className="TableDiv mx-4 px-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="opacity-50 text-nowrap">COMPANY</th>
            <th scope="col" className="opacity-50 text-nowrap">MARKET PRICE</th>
            <th scope="col" className="opacity-50 text-nowrap">CLOSE PRICE</th>
            <th scope="col" className="opacity-50 text-nowrap">MARKET CAP</th>
          </tr>
        </thead>
          <TableRow data = {data}/>
      </table>
    </div>
  );
}

export default Table;
