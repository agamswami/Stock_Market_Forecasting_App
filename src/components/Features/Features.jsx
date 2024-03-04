import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PiSlidersHorizontalLight } from "react-icons/pi";
// import  from '@emotion/react';
// import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import { TfiStatsUp } from "react-icons/tfi";
import './Features.css';


function Features(props) {
    return (
      <div className="homeFeatures">
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Features</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {/* <svg className="bi" width="1em" height="1em"><use xlink:href=""></use></svg> */}
                {/* <TfiStatsUp className="icon"/> */}
                {/* <div className="svg"> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg>
                {/* </div> */}

                {/* <SettingsApplicationsRoundedIcon fontSize="small"/> */}
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Predictive Analytics</h3>
                <p>Our cutting-edge predictive analytics algorithms analyze historical data, market trends, and a variety of indicators to generate accurate predictions. Stay ahead of market movements and make timely investment decisions.</p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16"><path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/></svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">User-friendly Interface</h3>
                <p>Our user-friendly interface is designed with you in mind. Whether you're a seasoned investor or a beginner, our platform provides a seamless experience for users of all levels.</p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/></svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Real-time Market Data</h3>
                <p>Access real-time market data, live price updates, and dynamic charts. Stay informed about the latest market trends and fluctuations, ensuring you are always well-equipped to react to changes.</p>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Features;