import { createContext ,useState} from "react";

const DetailsContext = createContext();


function DetailsState(props){
    // const [details,setDetails] = useState();

    return (
        <DetailsContext.Provider value={{details : props.data.details , setDetails : props.data.setDetails, filter : props.data.filter, setFilter : props.data.setFilter , graphData : props.data.graphData}}>
            {props.children}
        </DetailsContext.Provider>
    )
}

export default DetailsState;
export {DetailsContext};