import React from 'react';

function NiftyTable() {
  return (
    <div className="table-container all-table mb-5">
      <h2>Most Active Stocks</h2>
      <table class="mar_bx">
        <thead>
          <tr>
            <th>Index</th>
            <th>Price</th>
            <th>Change</th>
            <th>Val. (Cr.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NIFTY 50</td>
            <td>22055.00</td>
            <td>-142.00</td>
            <td>3,318.59</td>
          </tr>
          <tr>
            <td>SENSEX</td>
            <td>72623.09</td>
            <td>-434.31</td>
            <td>2,159.03</td>
          </tr>
          <tr>
            <td>NIFTY BANK</td>
            <td>47019.70</td>
            <td>-74.50</td>
            <td>1,857.26</td>
          </tr>
          <tr>
            <td>NIFTY IT</td>
            <td>37405.90</td>
            <td>-623.80</td>
            <td>1,816.11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NiftyTable;
