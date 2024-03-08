import React, { useState } from "react";
import ReactDOM from "react-dom";
import mockData from "../Assets/mockData";
import {ResponsiveContainer , AreaChart, Tooltip , XAxis , YAxis , Area} from "recharts"
import "./Chart.css"
import ChartFilter from "./ChartFilter";
import {chartConfig} from "./config"


// import Table from "../components/Table/Table.jsx"
// function formatData(data){
//     return data.map((item , index) => {
//         return {
//             value : item.close,
//             date : item.minute,
//         };
//     });   
// }

function Chart(props) {

  const [filter , setFilter] = useState("1W");

  function formatData(data) {
    return data.map((item, index) => {
      return {
        value: item.close,
        date: item.minute,
      };
    });
  }




    return (
      <div className="chartContainer ">
        <ul className="d-flex justify-content-end list-unstyled mb-0">
          {Object.keys(chartConfig).map((item) => {
            return (
              <li key= {item}>
                <ChartFilter 
                  text={item} 
                  active = {filter === item} 
                  onClick = {() => {
                    setFilter(item)
                }}/>
              </li>
            );
          })}
        </ul>
        <div className="AreaChartContainer">
          <ResponsiveContainer >
              <AreaChart data = {formatData(mockData)}>
                  {/* <Area /> */}
                  <defs>
                      <linearGradient id="ChartColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#ChartColor)" />
                  <XAxis dataKey={"date"} />
                  <YAxis />
              </AreaChart>
          </ResponsiveContainer>
        </div>
{/* 
        <AreaChart width={730} height={250} data={formatData(mockData)}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart> */}
        
      </div>
    );
  }

export default Chart;