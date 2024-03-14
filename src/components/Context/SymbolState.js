import { createContext ,useState} from "react";

const SymbolContext = createContext();


function SymbolState(props){
    // const [details,setDetails] = useState();

    return (
        <SymbolContext.Provider value={{symbol : props.data.symbol , setSymbol : props.data.setSymbol}}>
            {props.children}
        </SymbolContext.Provider>
    )
}

export default SymbolState;
export {SymbolContext};