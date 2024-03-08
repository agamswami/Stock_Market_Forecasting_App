import React, { useState } from "react";
import ReactDOM from "react-dom";

function CreateRow(row,index){
  return(
      <tr key = {index}>
        <td scope="col">{row.company}</td>
        <td scope="col">{row.marketPrice}</td>
        <td scope="col">{row.closePrice}</td>
        <td scope="col">{row.marketCap}</td>
      </tr>
  );
}


function TableRow(props) {
  const [action, setAction] = useState(props.type);
  return (
    // <div className="TableROW">
    <tbody>
      {props.data.map(CreateRow)}
    </tbody>
    // </div>
  );
}

export default TableRow;
