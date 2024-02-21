import React from 'react';

function TopGainersTable() {
  return (
    <div className="table-container all-table">
      <h2>Top Gainers</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Current</th>
            <th>% Gain</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ABB India</td>
            <td>4,984.70</td>
            <td>10.17</td>
          </tr>
          <tr>
            <td>Piramal Enter</td>
            <td>922.35</td>
            <td>4.04</td>
          </tr>
          <tr>
            <td>DLF</td>
            <td>886.85</td>
            <td>2.66</td>
          </tr>
          <tr>
            <td>Tata Steel</td>
            <td>143.90</td>
            <td>2.02</td>
          </tr>
          <tr>
            <td>Godrej Prop</td>
            <td>2,343.35</td>
            <td>1.91</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopGainersTable;
