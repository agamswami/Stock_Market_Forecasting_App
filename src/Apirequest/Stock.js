import iex from './apiKey.js';

async function Stock (ticker) {
        console.log(iex);
        // const url = `${iex.baseUrl}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.key}`;
        const url = `${iex.baseUrl}/data/core/minutebar/${ticker}?last=4&token=${iex.key}`;
        console.log("test");
        const query = await fetch(url).then((response) => response.json());
        // console.log(query);
        // console.log(query[0].json());
        return query;
}

export default Stock;