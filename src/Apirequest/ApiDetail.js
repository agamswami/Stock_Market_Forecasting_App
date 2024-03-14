// import iex from './apiKey.js';

const baseURL = "https://api.iex.cloud/v1"
const apikey = `${process.env.REACT_APP_API_KEY}`
// console.log(apikey);

async function fetchComapnyDetails (ticker) {
    console.log(apikey);
        // console.log(iex);
        // const url = `${iex.baseUrl}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.key}`;
        // const url = `${baseURL}/data/core/company/${ticker}?token=pk_c8ce0b120f5e4a9cace74fb7978b9881`;
        const url = `${baseURL}/data/core/company/${ticker}?token=${apikey}`;
        // console.log("test");
        const response = await fetch(url);
        // const reponse = await fetch(url).then((response) => response.json());
        // console.log(query);
        // console.log(query[0].json());

        if(!response.ok){
            const message = `An error has occured : ${response.status}`;
            throw new Error(message);
        }   
        return await response.json();
}

async function fetchStockPrice(ticker , duration){
    console.log("fetched stock price" + duration)
    let smallLetterDuaraiotn = duration.toLowerCase();
    if(duration === "1M"){
        // console.log("urlChanged")
        smallLetterDuaraiotn = "1mm"
        // url = `${baseURL}/data/core/historical_prices/${ticker}?range=${smallLetterDuaraiotn}&token=pk_c8ce0b120f5e4a9cace74fb7978b9881`
        // duration = "5d";
    }
    let url = `${baseURL}/data/core/intraday_prices/${ticker}?range=${smallLetterDuaraiotn}&token=${apikey}`
    console.log("before fetch2")
    if(duration === "1Y"){
        url = `${baseURL}/data/core/historical_prices/${ticker}?range=${smallLetterDuaraiotn}&sort=asc&token=${apikey}`
        // duration = "5d";
    }
    
    console.log("before fetch")
    const response = await fetch(url);
        

    if(!response.ok){
        const message = `An error has occured : ${response.status}`;
        throw new Error(message);
    }   
    return await response.json();

}

async function searchSymbols(query){
    const url = `${baseURL}/search/${query}?token=${apikey}`
    
        
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error has occured : ${response.status}`;
        throw new Error(message);
    }   
    return await response.json();
}




export {fetchComapnyDetails, fetchStockPrice, searchSymbols};