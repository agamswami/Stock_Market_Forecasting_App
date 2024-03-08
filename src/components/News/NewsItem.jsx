import React, { useState } from "react";
import ReactDOM from "react-dom";


function NewsItem(props) {
  return (
      <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <img src="https://github.com/twbs.png" alt="twbs" width="100" height="100" className="rounded-circle flex-shrink-0" />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0 text-start">List group item heading</h6>
            <p className="mb-0 opacity-75 text-start">Some placeholder content in a paragraph.</p>
          </div>
          <small className="opacity-50 text-nowrap">now</small>
        </div>
      </a>
  );
}

export default NewsItem;