import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewsItem from "./NewsItem";

function News(props) {
  const [action, setAction] = useState(props.type);
  const data = [
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3} ,
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
    {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3}
  ]
  return (
    <div className="News">
        <div className="d-flex flex-column flex-md-row pt-0 px-4 gap-4 pb-md-5 align-items-center justify-content-center pt-0">
            <div className="list-group">
              <NewsItem />
              <NewsItem />
              <NewsItem />
            </div>
        </div>
    </div>
  );
}

export default News;
