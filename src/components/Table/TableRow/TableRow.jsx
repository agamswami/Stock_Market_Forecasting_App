import React, { useState ,useContext} from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import { SymbolContext } from "../../Context/SymbolState";


import "./TableRow.css"



function TableRow(props) {
  const [action, setAction] = useState(props.type);
  const navigate = useNavigate();
  const {symbol,setSymbol} = useContext(SymbolContext);


  function CreateRow(row,index){

  

    return(
        <tr key = {index} className="symbolTable" onClick={() => {
      
          setSymbol(row.symbol.toLowerCase());
          navigate("/info");
          
        }}>
          
          <td scope="col">{row.symbol}</td>
          <td scope="col">{row.name}</td>
          {/* <td scope="col">{row.closePrice}</td>
          <td scope="col">{row.marketCap}</td>z */}
        </tr>
    );
  }
  
  return (
    // <div className="TableROW">
    <tbody>
      {props.data.map(CreateRow)}
    </tbody>
    // </div>
  );
}

export default TableRow;
