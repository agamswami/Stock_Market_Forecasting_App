import React from 'react';

function FiftyTwoWeekHighTable() {
  return (
    <div className="HighWeekTable all-table mb-5">
      <h2>52 Week High</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Days High</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tata Inv Corp</td>
            <td>6721.00</td>
            <td>6,474.70</td>
          </tr>
          <tr>
            <td>ABB India</td>
            <td>5134.00</td>
            <td>4,984.70</td>
          </tr>
          <tr>
            <td>Epigral</td>
            <td>1265.00</td>
            <td>1,221.90</td>
          </tr>
          <tr>
            <td>CAMS</td>
            <td>3039.95</td>
            <td>2,989.55</td>
          </tr>
          <tr>
            <td>DLF</td>
            <td>896.75</td>
            <td>886.85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FiftyTwoWeekHighTable;
