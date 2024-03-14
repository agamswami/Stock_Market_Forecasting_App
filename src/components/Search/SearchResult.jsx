import React, {useContext} from "react";

import "./SearchResult.css"
import { SymbolContext } from "../Context/SymbolState";


function SearchResult({props}){

    const {symbol,setSymbol} = useContext(SymbolContext);
    
    const {result , clear} = props;
    
    return (
        // <ul className="dropdown-menu">
        <div className="results-list">
        <ul className="mylist position-absolute z-3 m-2 ms-0 px-2 border-2  bg-white">
        {result.map((item) =>{
            return <li key={item.symbol} className = "p-2 px-1 m-2 mx-1 d-flex justify-content-between align-items-center " onClick={() => {
                setSymbol(item.symbol.toLowerCase());
                clear();
                }
                
            }>
            {/* return <li key={item.symbol} className = "cursor-pointer p-4 m-2 d-flex "> */}
                <span className="text-start me-1">{item.symbol}</span>
                <span className="text-end">{item.name}</span>
            </li>
        })}
            {/* <li><h6 class="dropdown-header">Dropdown header</h6></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li> */}
        </ul>
        </div>
    )
}

export default SearchResult;