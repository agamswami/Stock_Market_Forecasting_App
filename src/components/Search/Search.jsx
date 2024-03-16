import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { searchSymbols } from "../../Apirequest/ApiDetail";

function Search() {
    
    const [input, setInput] = useState("");
    const [bestMatch, setBestMatch] = useState([]);

    

    function clear() {
        setInput("");
        setBestMatch([]);
    };

    async function updateBestMatch() {

        setBestMatch();
    }

    useEffect(() =>{
        
        async function updateBestMatch() {
            if(input === ""){
                setBestMatch([]);
                return;
            }
            
            try{
                const response = await searchSymbols(input);

                setBestMatch(response);
                console.log(response);
            } catch(error){
                setBestMatch([]);
                console.log(error);
            }
        }
        updateBestMatch();
    },[input]);    

    return (
        <div className="d-flex">
            <form className="d-flex" role="search">
                <div className="d-flex flex-column">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={input}
                        onChange={(event) => {
                            console.log(event.target.value);
                            setInput(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if(event.key === "Enter"){
                                updateBestMatch();
                            }
                        }}

                    />
                    {input && bestMatch.length > 0 ? <SearchResult props ={{result : bestMatch , clear}}/> : null}
                </div>
                <button className="btn btn-outline-success ms-2" onClick={updateBestMatch}>
                    Search
                </button>
            </form>
        </div>
        );
}

export default Search;