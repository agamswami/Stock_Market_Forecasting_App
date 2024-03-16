import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import NewsItem from "./NewsItem";
import { getNews } from "../../Apirequest/ApiDetail";
import "./News.css"

function News(props) {
  // const [action, setAction] = useState(props.type);
  // const data = [
  //   {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3} ,
  //   {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
  //   {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3},
  //   {company : "atul" ,marketPrice : 1, closePrice : 2, marketCap : 3}
  // ]
  const [news , setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();
        console.log(data); // Promise should be resolved at this point
        // console.log(data[0]); // Should now print the first element of the array
        setNews(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchNews();
  }, []); 


  return (
    <div className="News ms-3 ">
        <div className="d-flex flex-column flex-md-row pt-0 px-4 gap-4 pb-md-5 align-items-center justify-content-center pt-0">
            <div className="list-group">
              {news.map((item) => {return <NewsItem item = {item}/>})}
              {/* <NewsItem />
              <NewsItem />
              <NewsItem /> */}
            </div>
        </div>
    </div>
  );
}

export default News;
